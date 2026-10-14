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

const STATIC_HTML_ROUTES = new Map<string, string>([
  ["/", "/index.html"],
  ["/products", "/products/index.html"],
  ["/products/", "/products/index.html"],
  ["/products-sneakers", "/products-sneakers/index.html"],
  ["/products-sneakers/", "/products-sneakers/index.html"],
  ["/guides-qc-photos", "/guides-qc-photos/index.html"],
  ["/guides-qc-photos/", "/guides-qc-photos/index.html"],
  ["/guides-shipping", "/guides-shipping/index.html"],
  ["/guides-shipping/", "/guides-shipping/index.html"],
  ["/guides-beginner-guide", "/guides-beginner-guide/index.html"],
  ["/guides-beginner-guide/", "/guides-beginner-guide/index.html"],
  ["/faq", "/faq/index.html"],
  ["/faq/", "/faq/index.html"],
  ["/lolobuy-spreadsheet", "/lolobuy-spreadsheet/index.html"],
  ["/lolobuy-spreadsheet/", "/lolobuy-spreadsheet/index.html"],
  ["/best-lolobuy-spreadsheet", "/best-lolobuy-spreadsheet/index.html"],
  ["/best-lolobuy-spreadsheet/", "/best-lolobuy-spreadsheet/index.html"],
  ["/how-to-use-lolobuy-spreadsheet", "/how-to-use-lolobuy-spreadsheet/index.html"],
  ["/how-to-use-lolobuy-spreadsheet/", "/how-to-use-lolobuy-spreadsheet/index.html"],
  ["/is-lolobuy-safe", "/is-lolobuy-safe/index.html"],
  ["/is-lolobuy-safe/", "/is-lolobuy-safe/index.html"],
  ["/lolobuy-qc-finder", "/lolobuy-qc-finder/index.html"],
  ["/lolobuy-qc-finder/", "/lolobuy-qc-finder/index.html"],
  ["/updates", "/updates/index.html"],
  ["/updates/", "/updates/index.html"],
  ["/about", "/about/index.html"],
  ["/about/", "/about/index.html"],
]);

for (const slug of [
  "shoes", "hoodies-sweaters", "t-shirts", "jackets", "pants-shorts",
  "headwear", "accessories", "jerseys", "electronics", "other-finds",
]) {
  STATIC_HTML_ROUTES.set(`/products/${slug}`, `/products/${slug}/index.html`);
  STATIC_HTML_ROUTES.set(`/products/${slug}/`, `/products/${slug}/index.html`);
}

const LOCALE_ROUTES = new Set([
  "de",
  "fr",
  "es",
  "it",
  "pt",
  "pl",
  "nl",
  "sv",
  "da",
  "no",
  "fi",
  "cs",
  "ro",
  "hu",
  "el",
  "uk",
  "tr",
  "ru",
  "bg",
  "ja",
  "ko",
  "ar",
  "zh",
]);

function resolveStaticHtml(pathname: string): string | undefined {
  const directMatch = STATIC_HTML_ROUTES.get(pathname);
  if (directMatch) {
    return directMatch;
  }

  const locale = pathname.match(/^\/([a-z]{2})\/?$/)?.[1];
  return locale && LOCALE_ROUTES.has(locale)
    ? `/${locale}/index.html`
    : undefined;
}

async function serveStaticHtml(
  request: Request,
  env: Env,
  assetPath: string,
): Promise<Response> {
  const assetUrl = new URL(assetPath, request.url);
  const assetResponse = await env.ASSETS.fetch(
    new Request(assetUrl, {
      method: request.method,
      headers: request.headers,
    }),
  );
  const headers = new Headers(assetResponse.headers);
  headers.set("Cache-Control", "no-store, no-cache, must-revalidate");
  headers.set("Pragma", "no-cache");
  headers.set("Expires", "0");
  headers.set("Content-Type", "text/html; charset=utf-8");
  headers.set("X-Content-Type-Options", "nosniff");

  return new Response(request.method === "HEAD" ? null : assetResponse.body, {
    status: assetResponse.status,
    statusText: assetResponse.statusText,
    headers,
  });
}

// Image security config. SVG sources with .svg extension auto-skip the
// optimization endpoint on the client side (served directly, no proxy).
// To route SVGs through the optimizer (with security headers), set
// dangerouslyAllowSVG: true in next.config.js and uncomment below:
// const imageConfig: ImageConfig = { dangerouslyAllowSVG: true };

const worker = {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    if (request.method === "GET" || request.method === "HEAD") {
      const staticHtml = resolveStaticHtml(url.pathname);
      if (staticHtml) {
        const staticResponse = await serveStaticHtml(request, env, staticHtml);
        if (staticResponse.status !== 404) {
          return staticResponse;
        }
      }
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
