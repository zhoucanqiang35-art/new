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

    // Keep the original comprehensive sitemap endpoint for compatibility.
    if (url.pathname === "/sitemap.xml") {
      const sitemapUrl = new URL("/sitemap.xml", request.url);
      const sitemapRequest = new Request(sitemapUrl, {
        method: "GET",
        headers: request.headers,
      });
      const sitemapResponse = await handler.fetch(sitemapRequest, env, ctx);

      if (!sitemapResponse.ok) {
        return sitemapResponse;
      }

      const xml = await sitemapResponse.arrayBuffer();
      return new Response(request.method === "HEAD" ? null : xml, {
        status: 200,
        headers: {
          "Content-Type": "application/xml; charset=utf-8",
          "Content-Length": String(xml.byteLength),
          "Cache-Control": "public, max-age=3600, must-revalidate",
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
