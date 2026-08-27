import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const baseUrl = "https://pikobuyspreadsheet.my.id";
const languages = ["en", "es", "de", "fr", "it", "pt", "nl", "pl", "sv"];
const pages = ["categories", "products", "guides", "shipping", "articles", "faq", "sources"];
const articles = [
  "read-pikobuy-qc-photos",
  "pikobuy-shipping-cost-guide",
  "pikobuy-spreadsheet-checklist",
];
const urls = [];
const priorityUrls = [
  `${baseUrl}/`,
  `${baseUrl}/categories/`,
  `${baseUrl}/products/`,
  `${baseUrl}/guides/`,
  `${baseUrl}/shipping/`,
  `${baseUrl}/articles/`,
  `${baseUrl}/faq/`,
  `${baseUrl}/articles/pikobuy-spreadsheet-checklist/`,
];

for (const language of languages) {
  const prefix = language === "en" ? "" : `/${language}`;
  urls.push(`${baseUrl}${prefix}/`);
  for (const page of pages) urls.push(`${baseUrl}${prefix}/${page}/`);
  for (const article of articles) urls.push(`${baseUrl}${prefix}/articles/${article}/`);
}

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urls.map((url) => `  <url><loc>${url}</loc></url>`),
  '</urlset>',
  '',
].join("\n");

const priorityXml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...priorityUrls.map((url) => `  <url><loc>${url}</loc></url>`),
  '</urlset>',
  '',
].join("\n");

await Promise.all([
  writeFile(resolve("public/sitemap.txt"), `${urls.join("\n")}\n`, "utf8"),
  writeFile(resolve("public/google-sitemap.xml"), xml, "utf8"),
  writeFile(resolve("public/priority-sitemap.xml"), priorityXml, "utf8"),
]);
console.log(`Generated priority sitemap with ${priorityUrls.length} URLs and full sitemaps with ${urls.length} URLs.`);
