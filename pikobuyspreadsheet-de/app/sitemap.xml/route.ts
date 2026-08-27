const urls = [
  "",
  "/categories",
  "/products",
  "/products/nike-phantom-gx-elite-ag-pro",
  "/products/gcds-logo-band-hoodie",
  "/products/cp-company-down-jacket",
  "/products/polo-ralph-lauren-knit-cap",
  "/guides",
  "/shipping",
  "/faq",
  "/articles",
  "/articles/first-vs-second-payment",
  "/articles/qc-photo-checklist",
  "/articles/warehouse-return-window",
  "/articles/recheck-product-links",
  "/articles/western-market-search-intent",
];
const languages = ["", "/de", "/fr", "/es", "/it", "/nl", "/pl", "/pt", "/sv"];

export async function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${languages.flatMap((language) => urls.map((path, index) => `  <url>
    <loc>https://pikobuyspreadsheet.de${language}${path}</loc>
    <lastmod>${path === "/articles/first-vs-second-payment" || path === "/articles" ? "2026-08-27" : "2026-08-24"}</lastmod>
    <changefreq>${index === 0 ? "daily" : "weekly"}</changefreq>
    <priority>${index === 0 ? "1.0" : path === "/products" || path === "/guides" || path === "/shipping" ? "0.9" : "0.8"}</priority>
  </url>`)).join("\n")}
</urlset>`;

  return new Response(body, { headers: { "content-type": "application/xml; charset=utf-8", "cache-control": "public, max-age=3600" } });
}
