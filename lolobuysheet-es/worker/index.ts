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

// Image security config. SVG sources with .svg extension auto-skip the
// optimization endpoint on the client side (served directly, no proxy).
// To route SVGs through the optimizer (with security headers), set
// dangerouslyAllowSVG: true in next.config.js and uncomment below:
// const imageConfig: ImageConfig = { dangerouslyAllowSVG: true };

const worker = {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    if (url.hostname === "www.lolobuysheet.es") {
      url.hostname = "lolobuysheet.es";
      url.protocol = "https:";
      return Response.redirect(url.toString(), 301);
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
    const headers = new Headers(response.headers);
    headers.delete("x-powered-by");
    headers.set("x-content-type-options", "nosniff");
    headers.set("referrer-policy", "strict-origin-when-cross-origin");
    headers.set("permissions-policy", "camera=(), microphone=(), geolocation=()");

    const contentType = headers.get("content-type") || "";
    if (contentType.includes("text/html")) {
      const supportedLocales = new Set([
        "es", "de", "fr", "it", "pt", "nl", "pl", "sv", "da", "no", "fi", "cs",
        "ro", "hu", "el", "uk", "tr", "ru", "bg", "ja", "ko", "ar", "zh",
      ]);
      const candidateLocale = url.pathname.split("/").filter(Boolean)[0]?.toLowerCase();
      const locale = candidateLocale && supportedLocales.has(candidateLocale) ? candidateLocale : "en";
      const dir = locale === "ar" ? " dir=\"rtl\"" : "";
      const html = (await response.text()).replace(
        /<html\s+lang=["'][^"']+["'][^>]*>/i,
        `<html lang="${locale}"${dir}>`,
      );
      headers.set("cache-control", "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400");
      return new Response(html, { status: response.status, statusText: response.statusText, headers });
    }

    if (/\.(?:css|js|mjs|svg|webp|png|jpg|jpeg|woff2?)$/i.test(url.pathname)) {
      headers.set("cache-control", "public, max-age=31536000, immutable");
    }
    return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
  },
};

export default worker;
