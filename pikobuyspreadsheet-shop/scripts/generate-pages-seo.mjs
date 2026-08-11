import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const outputDirectory = path.resolve(process.argv[2] ?? "dist/pages");
const origin = "https://pikobuyspreadsheet.shop";
const lastModified = "2026-08-10";

const pagePaths = [
  "/",
  "/finds",
  "/categories",
  "/categories/shoes",
  "/categories/hoodies",
  "/categories/jerseys",
  "/categories/accessories",
  "/categories/electronics",
  "/qc-method",
  "/guides",
  "/guides/qc-photos",
  "/guides/returns",
  "/guides/shipping",
  "/faq",
  "/sources",
  "/seo-articles",
  "/seo-articles/pikobuy-spreadsheet-guide-2026",
  "/seo-articles/pikobuy-shipping-cost-fees-2026",
  "/seo-articles/pikobuy-qc-returns-guide-2026",
];

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...pagePaths.map((pagePath) => `  <url><loc>${new URL(pagePath, origin).href}</loc><lastmod>${lastModified}</lastmod></url>`),
  "</urlset>",
  "",
].join("\n");

const robots = [
  "User-agent: *",
  "Allow: /",
  "Disallow: /preview/",
  "",
  `Sitemap: ${origin}/sitemap.xml`,
  "",
].join("\n");

await mkdir(outputDirectory, { recursive: true });
await Promise.all([
  writeFile(path.join(outputDirectory, "sitemap.xml"), sitemap, "utf8"),
  writeFile(path.join(outputDirectory, "robots.txt"), robots, "utf8"),
]);

console.log(`Generated ${pagePaths.length} sitemap URLs and robots.txt.`);
