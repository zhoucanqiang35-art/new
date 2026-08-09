import application from "../dist/server/index.js";

const STATIC_ASSET_PREFIX = "/assets/";
const SEO_STATIC_FILES = new Set(["/robots.txt", "/sitemap.xml"]);

const pagesWorker = {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const { pathname } = url;

    if (url.hostname === "www.pikobuyspreadsheet.shop") {
      url.hostname = "pikobuyspreadsheet.shop";
      url.protocol = "https:";
      return Response.redirect(url.toString(), 301);
    }

    // Advanced Mode routes every request through _worker.js. Hashed browser
    // bundles and crawl files belong to Pages' static asset service.
    if (pathname.startsWith(STATIC_ASSET_PREFIX) || SEO_STATIC_FILES.has(pathname)) {
      return env.ASSETS.fetch(request);
    }

    return application.fetch(request, env, ctx);
  },
};

export default pagesWorker;
