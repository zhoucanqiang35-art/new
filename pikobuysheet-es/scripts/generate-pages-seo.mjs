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

const englishOnlyPaths = [
  "/pikobuy-spreadsheet-shoes",
  "/pikobuy-spreadsheet-hoodies",
  "/pikobuy-spreadsheet-bags",
  "/pikobuy-spreadsheet-qc",
  "/how-to-use-pikobuy-spreadsheet",
  "/pikobuy-spreadsheet-weidian",
  "/pikobuy-spreadsheet-taobao",
  "/pikobuy-spreadsheet-shipping-guide",
  "/seo-articles/pikobuy-total-cost-explained",
];

const sitemapUrls = locales.flatMap((locale) =>
  pagePaths.map((pagePath) => {
    const localizedPath = locale === "en" ? pagePath || "/" : `/${locale}${pagePath}`;
    return new URL(localizedPath, origin).href;
  }),
).concat(englishOnlyPaths.map((pagePath) => new URL(pagePath, origin).href));

function lastModified(url) {
  const pathname = new URL(url).pathname.replace(/\/$/, "") || "/";
  if (["/", "/updates", "/seo-articles", "/seo-articles/pikobuy-total-cost-explained"].includes(pathname)) return "2026-08-09";
  if (pathname.includes("/seo-articles/how-to-use-a-pikobuy-spreadsheet") || pathname.includes("/seo-articles/pikobuy-qc-shipping-return-guide")) return "2026-07-31";
  if (englishOnlyPaths.includes(pathname)) return "2026-08-06";
  return "2026-08-02";
}

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...sitemapUrls.map((url) => `  <url><loc>${url}</loc><lastmod>${lastModified(url)}</lastmod></url>`),
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
