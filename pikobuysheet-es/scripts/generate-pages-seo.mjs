import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const outputDirectory = path.resolve(process.argv[2] ?? "dist/pages");
const origin = "https://pikobuysheet.es";

const locales = [
  "en", "es", "de", "fr", "it", "pt", "pl", "nl", "sv", "da", "no", "fi",
  "cs", "ro", "hu", "el", "uk", "tr", "ru", "bg", "ar", "ja", "ko", "zh",
];

const pagePaths = [
  "",
  "/spreadsheet",
  "/categories",
  "/guides",
  "/method",
  "/updates",
  "/seo-articles",
  "/seo-articles/how-to-use-a-pikobuy-spreadsheet",
  "/seo-articles/pikobuy-qc-shipping-return-guide",
];

const sitemapUrls = locales.flatMap((locale) =>
  pagePaths.map((pagePath) => {
    const localizedPath = locale === "en" ? pagePath || "/" : `/${locale}${pagePath}`;
    return new URL(localizedPath, origin).href;
  }),
);

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
