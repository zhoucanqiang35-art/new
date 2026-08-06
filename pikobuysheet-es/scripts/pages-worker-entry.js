import application from "../dist/server/index.js";

const STATIC_ASSET_PREFIX = "/assets/";
const SEO_STATIC_FILES = new Set(["/robots.txt", "/sitemap.xml"]);

const pagesWorker = {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const { pathname } = url;

    if (url.hostname === "www.pikobuysheet.es") {
      url.hostname = "pikobuysheet.es";
      url.protocol = "https:";
      return Response.redirect(url.toString(), 301);
    }

    // Cloudflare Pages Advanced Mode routes every request through _worker.js.
    // Vinext renders application routes, but hashed browser bundles belong to
    // Pages' static asset service and must be forwarded explicitly.
    if (pathname.startsWith(STATIC_ASSET_PREFIX) || SEO_STATIC_FILES.has(pathname)) {
      return env.ASSETS.fetch(request);
    }

    return application.fetch(request, env, ctx);
  },
};

export default pagesWorker;
