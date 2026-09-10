/** Cloudflare Worker entry point for the vinext-starter template. */
import { handleImageOptimization, DEFAULT_DEVICE_SIZES, DEFAULT_IMAGE_SIZES } from "vinext/server/image-optimization";
import handler from "vinext/server/app-router-entry";

interface Env {
  ASSETS: Fetcher;
  DB: D1Database;
  IMAGES: {
    input(stream: ReadableStream): {
      transform(options: Record<string, unknown>): {
        output(options: { format: string; quality: number }): Promise<{ response(): Response }>;
      };
    };
  };
}

interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}

const LOCALIZED_CODES = new Set(["es", "de", "fr", "it", "pt", "nl", "pl", "sv", "no", "da", "fi"]);

const CANONICAL_SITEMAP = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n  <url><loc>https://lolobuysheet.cc/</loc><lastmod>2026-08-25</lastmod></url>\n  <url><loc>https://lolobuysheet.cc/spreadsheet</loc><lastmod>2026-08-25</lastmod></url>\n  <url><loc>https://lolobuysheet.cc/categories</loc><lastmod>2026-08-25</lastmod></url>\n  <url><loc>https://lolobuysheet.cc/products</loc><lastmod>2026-08-25</lastmod></url>\n  <url><loc>https://lolobuysheet.cc/seo-articles</loc><lastmod>2026-08-25</lastmod></url>\n  <url><loc>https://lolobuysheet.cc/faq</loc><lastmod>2026-08-25</lastmod></url>\n  <url><loc>https://lolobuysheet.cc/markets</loc><lastmod>2026-08-25</lastmod></url>\n  <url><loc>https://lolobuysheet.cc/sources</loc><lastmod>2026-08-25</lastmod></url>\n  <url><loc>https://lolobuysheet.cc/seo-articles/how-lolobuy-works</loc><lastmod>2026-08-25</lastmod></url>\n  <url><loc>https://lolobuysheet.cc/seo-articles/qc-photo-checklist</loc><lastmod>2026-08-25</lastmod></url>\n  <url><loc>https://lolobuysheet.cc/seo-articles/shipping-guide</loc><lastmod>2026-08-25</lastmod></url>\n  <url><loc>https://lolobuysheet.cc/seo-articles/tracking-guide</loc><lastmod>2026-08-25</lastmod></url>\n</urlset>\n";
const CANONICAL_SITEMAP_BYTES = new TextEncoder().encode(CANONICAL_SITEMAP);

const worker = {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    // Consolidate every public request onto the canonical apex hostname.
    // Cloudflare can route both hostnames to this Worker, so the redirect must
    // happen before assets or application routes are resolved.
    if (url.hostname.toLowerCase() === "www.lolobuysheet.cc") {
      url.hostname = "lolobuysheet.cc";
      return Response.redirect(url.toString(), 308);
    }

    // Keep one authoritative sitemap URL. Historical Search Console entries
    // continue to work, but are consolidated onto the generated XML sitemap.
    if (
      url.pathname === "/sitemap.txt" ||
      url.pathname === "/sitemap-priority.xml" ||
      url.pathname === "/sitemap-search.xml"
    ) {
      url.pathname = "/sitemap.xml";
      url.search = "";
      return Response.redirect(url.toString(), 308);
    }

    // English is the unprefixed default locale. Redirect accidental /en URLs
    // so crawlers cannot discover a duplicate English URL space.
    if (url.pathname === "/en" || url.pathname.startsWith("/en/")) {
      url.pathname = url.pathname.slice(3) || "/";
      return Response.redirect(url.toString(), 308);
    }

    // Serve a small, static Search Console sitemap directly from the asset
    // binding. This avoids App Router, RSC, database, and image bindings, while
    // preserving identical GET and HEAD behavior for Google's sitemap fetcher.
    if (url.pathname === "/sitemap-google.xml") {
      const assetUrl = new URL("/sitemap-google.xml", request.url);
      const assetResponse = await env.ASSETS.fetch(
        new Request(assetUrl, {
          method: request.method === "HEAD" ? "HEAD" : "GET",
          headers: request.headers,
        }),
      );

      if (!assetResponse.ok) {
        return assetResponse;
      }

      const headers = new Headers(assetResponse.headers);
      headers.set("Content-Type", "application/xml; charset=utf-8");
      headers.set("Cache-Control", "no-store");
      headers.set("X-Content-Type-Options", "nosniff");

      return new Response(request.method === "HEAD" ? null : assetResponse.body, {
        status: 200,
        headers,
      });
    }

    // Serve the canonical sitemap entirely in-memory. This removes every
    // dependency on App Router, D1, the static asset binding, cache variants,
    // and content negotiation for Google's dedicated sitemap fetcher.
    if (url.pathname === "/sitemap.xml") {
      if (request.method !== "GET" && request.method !== "HEAD") {
        return new Response("Method Not Allowed", {
          status: 405,
          headers: { Allow: "GET, HEAD" },
        });
      }

      return new Response(request.method === "HEAD" ? null : CANONICAL_SITEMAP_BYTES, {
        status: 200,
        headers: {
          "Content-Type": "application/xml; charset=utf-8",
          "Content-Length": String(CANONICAL_SITEMAP_BYTES.byteLength),
          "Cache-Control": "public, max-age=300, s-maxage=300",
          "Access-Control-Allow-Origin": "*",
          "X-Content-Type-Options": "nosniff",
          "X-Sitemap-Revision": "2026-08-27-direct-v1",
        },
      });
    }

    // Pages advanced mode gives this Worker control of every request. Forward
    // compiled client files and public media to the built-in asset service so
    // CSS, JavaScript, fonts and images are served instead of reaching Vinext.
    if (
      url.pathname.startsWith("/assets/") ||
      /\.(?:css|js|mjs|png|jpe?g|gif|webp|avif|svg|ico|woff2?|ttf|otf)$/i.test(
        url.pathname,
      )
    ) {
      return env.ASSETS.fetch(request);
    }

    if (url.pathname === "/_vinext/image") {
      const allowedWidths = [...DEFAULT_DEVICE_SIZES, ...DEFAULT_IMAGE_SIZES];
      return handleImageOptimization(request, {
        fetchAsset: (path) => env.ASSETS.fetch(new Request(new URL(path, request.url))),
        transformImage: async (body, { width, format, quality }) => {
          const result = await env.IMAGES.input(body).transform(width > 0 ? { width } : {}).output({ format, quality });
          return result.response();
        },
      }, allowedWidths);
    }

    const response = await handler.fetch(request, env, ctx);
    const locale = url.pathname.split("/").filter(Boolean)[0];

    if (response.headers.get("content-type")?.includes("text/html")) {
      const headers = new Headers(response.headers);
      headers.set("Content-Language", locale && LOCALIZED_CODES.has(locale) ? locale : "en");
      headers.set("X-Content-Type-Options", "nosniff");
      headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers,
      });
    }

    return response;
  },
};

export default worker;
