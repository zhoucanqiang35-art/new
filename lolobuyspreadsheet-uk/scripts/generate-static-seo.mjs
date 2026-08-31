import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const publicDir = path.join(root, "public");
const baseUrl = "https://lolobuyspreadsheet.uk";
const languages = ["en", "de", "fr", "es", "it", "nl", "pl", "pt", "sv"];
const sections = ["", "/categories", "/product-details", "/guides", "/articles", "/faq"];
const articles = [
  "how-to-use-lolobuy-spreadsheet",
  "lolobuy-qc-photo-checklist",
  "lolobuy-shipping-cost-guide",
  "lolobuy-warehouse-consolidation-guide",
];

const urls = languages.flatMap((language) => [
  ...sections.map((section) => `${baseUrl}/${language}${section}`),
  ...articles.map((article) => `${baseUrl}/${language}/articles/${article}`),
]);

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
  .map((url) => `  <url><loc>${url}</loc><lastmod>2026-08-31</lastmod></url>`)
  .join("\n")}\n</urlset>\n`;

const robots = `User-agent: *\nAllow: /\n\nSitemap: ${baseUrl}/sitemap.xml\nHost: ${baseUrl}\n`;

await mkdir(publicDir, { recursive: true });
await Promise.all([
  writeFile(path.join(publicDir, "sitemap.xml"), xml),
  writeFile(path.join(publicDir, "robots.txt"), robots),
]);
