import { readFile, writeFile } from "node:fs/promises";

const domain = "https://pikobuyspreadsheet.uk";
const languages = ["en", "fr", "de", "es", "it", "pt", "nl", "pl", "ro"];
const staticRoutes = ["", "categories", "products", "guide", "qc", "shipping", "articles", "faq", "seo"];
const source = [
  await readFile(new URL("../app/seo-content.ts", import.meta.url), "utf8"),
  ...await Promise.all(["01.ts", "02.ts", "03.ts", "04.ts", "05.ts", "06.ts", "07.ts", "08.ts", "09.ts"].map((file) => readFile(new URL(`../app/discovery-articles/${file}`, import.meta.url), "utf8"))),
].join("\n");
const articles = [...new Set([...source.matchAll(/slug:\s*"([a-z0-9-]+)"/g)].map((match) => match[1]))];
const routes = [...staticRoutes, ...articles];
const lastmod = "2026-10-23";
const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...languages.flatMap((language) => routes.map((route) => {
    const path = route ? `/${language}/${route}/` : `/${language}/`;
    const priority = route === "" ? "1.0" : route === "guide" || route === "seo" ? "0.9" : articles.includes(route) ? "0.7" : "0.8";
    const frequency = route === "" ? "daily" : route === "seo" ? "weekly" : articles.includes(route) ? "monthly" : "weekly";
    return `  <url>\n    <loc>${domain}${path}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${frequency}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
  })),
  "</urlset>",
  "",
].join("\n");

await writeFile(new URL("../public/sitemap.xml", import.meta.url), xml);
console.log(`Generated ${languages.length * routes.length} sitemap URLs across ${languages.length} languages.`);
