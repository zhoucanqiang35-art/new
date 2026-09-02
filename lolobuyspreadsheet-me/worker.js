import siteWorker from "./site.js";

const origin = "https://lolobuyspreadsheet.me";
const routes = [
  "/",
  "/product-details",
  "/how-lolobuy-works",
  "/qc-guide",
  "/shipping-guide",
  "/buyer-checklist",
  "/faq",
  "/seo-articles",
  "/seo-articles/using-lolobuy-spreadsheet",
  "/seo-articles/shipcare-parcel-evidence",
];

function sitemap() {
  const body = routes.map((path) => {
    const priority = path === "/" ? "1.0" : "0.8";
    const frequency = path.startsWith("/seo-articles/") ? "monthly" : "weekly";
    return "  <url><loc>" + origin + path + "</loc><lastmod>2026-09-02</lastmod><changefreq>" + frequency + "</changefreq><priority>" + priority + "</priority></url>";
  }).join("\n");
  return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n" + body + "\n</urlset>";
}

export default {
  async fetch(request, env, ctx) {
    const { pathname } = new URL(request.url);
    if (pathname === "/sitemap.xml") {
      return new Response(sitemap(), {
        headers: {
          "content-type": "application/xml; charset=UTF-8",
          "cache-control": "public, max-age=300",
        },
      });
    }
    if (pathname === "/robots.txt") {
      return new Response("User-agent: *\nAllow: /\nSitemap: " + origin + "/sitemap.xml\n", {
        headers: { "content-type": "text/plain; charset=UTF-8" },
      });
    }
    return siteWorker.fetch(request, env, ctx);
  },
};
