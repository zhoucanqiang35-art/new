import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const outputDirectory = path.resolve(process.argv[2] ?? "dist/pages");
const origin = "https://pikobuyspreadsheet.shop";
const registryUrl = new URL("../content/page-registry.json", import.meta.url);
const pageRegistry = JSON.parse(await readFile(registryUrl, "utf8"));
const pagePaths = new Set();

for (const page of pageRegistry) {
  if (!/^\/(?:[a-z0-9-]+\/?)*$/.test(page.path)) throw new Error(`Invalid public path: ${page.path}`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(page.lastModified)) throw new Error(`Invalid lastModified for ${page.path}`);
  if (pagePaths.has(page.path)) throw new Error(`Duplicate public path: ${page.path}`);
  pagePaths.add(page.path);
}

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...pageRegistry.map((page) => `  <url><loc>${new URL(page.path, origin).href}</loc><lastmod>${page.lastModified}</lastmod></url>`),
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

console.log(`Generated ${pageRegistry.length} sitemap URLs and robots.txt from the page registry.`);
