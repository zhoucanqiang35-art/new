import siteWorker from "./site.js";

const origin = "https://lolobuyspreadsheet.me";
const routes = [
  "/",
  "/category",
  "/category/shoes",
  "/category/hoodies",
  "/category/t-shirts",
  "/category/jackets",
  "/category/pants-shorts",
  "/category/headwear",
  "/category/sets",
  "/category/underwear",
  "/category/jersey",
  "/category/accessories",
  "/brand",
  "/brand/nike",
  "/brand/stussy",
  "/batch",
  "/batch/gx",
  "/batch/pk-4-0",
  "/item/dunk-vt",
  "/product-details",
  "/how-lolobuy-works",
  "/qc-guide",
  "/shipping-guide",
  "/buyer-checklist",
  "/faq",
  "/seo-articles",
  "/seo-articles/using-lolobuy-spreadsheet",
  "/seo-articles/shipcare-parcel-evidence",
  "/seo-articles/lolobuy-qc-photos-guide",
  "/seo-articles/is-lolobuy-safe-what-to-check",
  "/seo-articles/lolobuy-shipping-guide"
];
const languages = ["en", "de", "fr", "es", "it", "pt", "nl", "pl", "sv"];

function sitemap() {
  const body = routes.flatMap((path) => languages.map((lang) => {
    const priority = path === "/" ? "1.0" : path.startsWith("/category/") || path.startsWith("/brand/") || path.startsWith("/batch/") ? "0.8" : "0.7";
    const frequency = path.startsWith("/seo-articles/") ? "monthly" : "weekly";
    const loc = origin + path + (lang === "en" ? "" : "?lang=" + lang);
    return "  <url><loc>" + loc + "</loc><lastmod>2026-10-16</lastmod><changefreq>" + frequency + "</changefreq><priority>" + priority + "</priority></url>";
  })).join("\n");
  return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n" + body + "\n</urlset>";
}

export default {
  async fetch(request, env, ctx) {
    const { pathname } = new URL(request.url);
    if (pathname === "/sitemap.xml") return new Response(sitemap(), { headers: { "content-type": "application/xml; charset=UTF-8", "cache-control": "public, max-age=300" } });
    if (pathname === "/robots.txt") return new Response("User-agent: *\nAllow: /\nSitemap: " + origin + "/sitemap.xml\n", { headers: { "content-type": "text/plain; charset=UTF-8" } });
    return siteWorker.fetch(request, env, ctx);
  },
};
