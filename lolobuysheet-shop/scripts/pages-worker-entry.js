import application from "../dist/server/index.js";

const STATIC_ASSET_PREFIX = "/assets/";

export default {
  async fetch(request, env, ctx) {
    const { pathname } = new URL(request.url);

    // Advanced Mode routes every request through this module. Browser bundles
    // belong to Pages' static asset service; application routes are rendered
    // by the Vinext Worker.
    if (pathname.startsWith(STATIC_ASSET_PREFIX)) {
      return env.ASSETS.fetch(request);
    }

    return application.fetch(request, env, ctx);
  },
};
