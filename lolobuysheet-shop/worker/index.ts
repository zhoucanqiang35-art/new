/** Cloudflare Worker entry point for the vinext-starter template. */
import handler from "vinext/server/app-router-entry";

type WorkerEnv = NonNullable<Parameters<typeof handler.fetch>[1]>;

const locales = new Set([
  "en", "de", "fr", "es", "it", "pt", "pl", "nl", "sv", "da", "no", "fi",
  "cs", "ro", "hu", "el", "uk", "tr", "ru", "bg", "ja", "ko", "ar", "zh",
]);

function localeFromPath(pathname: string) {
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  return firstSegment && locales.has(firstSegment) ? firstSegment : "en";
}

function withCacheHeaders(response: Response) {
  const headers = new Headers(response.headers);
  const contentType = headers.get("content-type") ?? "";

  if (response.status === 200 && (contentType.startsWith("text/html") || contentType.includes("xml") || contentType.startsWith("text/plain"))) {
    headers.set("Cache-Control", "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400");
    headers.set("Cloudflare-CDN-Cache-Control", "public, max-age=3600, stale-while-revalidate=86400");
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

const worker = {
  async fetch(request: Request, env: WorkerEnv, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    if (url.hostname === "www.lolobuysheet.shop") {
      url.hostname = "lolobuysheet.shop";
      return Response.redirect(url.toString(), 301);
    }

    const isLocal = url.hostname === "localhost" || url.hostname === "127.0.0.1" || url.hostname === "terminal.local";
    const edgeCache = typeof caches === "undefined"
      ? undefined
      : (caches as CacheStorage & { readonly default: Cache }).default;
    const canUseEdgeCache = request.method === "GET" && !url.search && !isLocal && Boolean(edgeCache);
    const cacheKey = new Request(url.toString(), { method: "GET" });

    if (canUseEdgeCache && edgeCache) {
      const cached = await edgeCache.match(cacheKey);
      if (cached) return cached;
    }

    let response = withCacheHeaders(await handler.fetch(request, env, ctx));
    const contentType = response.headers.get("content-type") ?? "";

    if (contentType.startsWith("text/html") && typeof HTMLRewriter !== "undefined") {
      const locale = localeFromPath(url.pathname);
      response = new HTMLRewriter()
        .on("html", {
          element(element) {
            element.setAttribute("lang", locale);
            element.setAttribute("dir", locale === "ar" ? "rtl" : "ltr");
          },
        })
        .transform(response);
    }

    if (canUseEdgeCache && edgeCache && response.status === 200 && !response.headers.has("set-cookie")) {
      ctx.waitUntil(edgeCache.put(cacheKey, response.clone()));
    }

    return response;
  },
} satisfies ExportedHandler<WorkerEnv>;

export default worker;
