import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const outputDirectory = path.resolve(process.argv[2] ?? "dist/pages");
const origin = "https://pikobuyspreadsheet.shop";

const pagePaths = [
  "/",
  "/finds",
  "/qc-method",
  "/guides",
  "/guides/qc-photos",
  "/guides/returns",
  "/guides/shipping",
  "/sources",
  "/seo-articles",
  "/seo-articles/pikobuy-spreadsheet-guide-2026",
  "/seo-articles/pikobuy-shipping-cost-fees-2026",
  "/seo-articles/pikobuy-qc-returns-guide-2026",
];

const sitemapUrls = pagePaths.map((pagePath) => new URL(pagePath, origin).href);
const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...sitemapUrls.map((url) => `  <url><loc>${url}</loc></url>`),
  "</urlset>",
  "",
].join("\n");

const robots = [
  "User-agent: *",
  "Allow: /",
  "",
  `Sitemap: ${origin}/sitemap.xml`,
  "",
].join("\n");

await mkdir(outputDirectory, { recursive: true });
await Promise.all([
  writeFile(path.join(outputDirectory, "sitemap.xml"), sitemap, "utf8"),
  writeFile(path.join(outputDirectory, "robots.txt"), robots, "utf8"),
]);

console.log(`Generated ${sitemapUrls.length} sitemap URLs and robots.txt.`);
