import application from "../dist/server/index.js";

const STATIC_ASSET_PREFIX = "/assets/";
const SEO_STATIC_FILES = new Set(["/robots.txt", "/sitemap.xml"]);

export default {
  async fetch(request, env, ctx) {
    const { pathname } = new URL(request.url);

    // Cloudflare Pages Advanced Mode routes every request through _worker.js.
    // Vinext renders application routes, but hashed browser bundles belong to
    // Pages' static asset service and must be forwarded explicitly.
    if (pathname.startsWith(STATIC_ASSET_PREFIX) || SEO_STATIC_FILES.has(pathname)) {
      return env.ASSETS.fetch(request);
    }

    return application.fetch(request, env, ctx);
  },
};
