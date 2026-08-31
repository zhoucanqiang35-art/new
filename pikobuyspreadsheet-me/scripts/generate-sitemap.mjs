import { writeFileSync } from "node:fs";

const base = "https://pikobuyspreadsheet.me";
const output = process.argv[2] || "public/sitemap.xml";
const locales = ["de", "fr", "es", "it", "pt", "nl", "pl"];
const categories = ["shoes", "t-shirts", "hoodies-sweaters", "jackets", "pants-shorts", "bags", "accessories", "electronics"];
const pages = [
  { path: "", lastmod: "2026-08-29", changefreq: "weekly", priority: "1.0" },
  { path: "product-details", lastmod: "2026-08-29", changefreq: "monthly", priority: "0.8" },
  { path: "how-pikobuy-works", lastmod: "2026-08-29", changefreq: "monthly", priority: "0.8" },
  { path: "qc-guide", lastmod: "2026-08-29", changefreq: "monthly", priority: "0.8" },
  { path: "shipping-guide", lastmod: "2026-08-29", changefreq: "monthly", priority: "0.8" },
  { path: "buyer-checklist", lastmod: "2026-08-29", changefreq: "monthly", priority: "0.8" },
  { path: "faq", lastmod: "2026-08-29", changefreq: "monthly", priority: "0.8" },
  { path: "seo-articles", lastmod: "2026-08-31", changefreq: "weekly", priority: "0.9" },
];

const urls = [];
for (const page of pages) urls.push({ ...page, url: `${base}/${page.path}` });
urls.push({ path: "how-to-use-pikobuy-spreadsheet", url: `${base}/how-to-use-pikobuy-spreadsheet`, lastmod: "2026-08-29", changefreq: "monthly", priority: "0.9" });
urls.push({ path: "pikobuy-return-policy", url: `${base}/pikobuy-return-policy`, lastmod: "2026-08-31", changefreq: "monthly", priority: "0.9" });
for (const locale of locales) for (const page of pages) urls.push({ ...page, url: `${base}/${locale}${page.path ? `/${page.path}` : ""}`, priority: page.path ? page.priority : "0.8" });
for (const locale of ["", ...locales]) for (const category of categories) urls.push({ url: `${base}${locale ? `/${locale}` : ""}/categories/${category}`, lastmod: "2026-08-29", changefreq: "monthly", priority: "0.7" });

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(item => `  <url>\n    <loc>${item.url}</loc>\n    <lastmod>${item.lastmod}</lastmod>\n    <changefreq>${item.changefreq}</changefreq>\n    <priority>${item.priority}</priority>\n  </url>`).join("\n")}\n</urlset>\n`;
writeFileSync(output, xml);
console.log(`Wrote ${urls.length} canonical URLs to ${output}`);
