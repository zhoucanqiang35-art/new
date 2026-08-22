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

const worker = {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    // Serve the Search Console sitemap as a real Pages static asset. This keeps
    // it completely outside the App Router/RSC runtime and gives Google the
    // same byte-for-byte file on GET and HEAD requests.
    if (url.pathname === "/sitemap-priority.xml" || url.pathname === "/sitemap-search.xml") {
      const assetUrl = new URL("/sitemap-priority.xml", request.url);
      return env.ASSETS.fetch(new Request(assetUrl, {
        method: request.method,
        headers: request.headers,
      }));
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

    return handler.fetch(request, env, ctx);
  },
};

export default worker;
