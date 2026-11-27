import { readFile, writeFile } from "node:fs/promises";

const domain = "https://pikobuyspreadsheet.uk";
const languages = JSON.parse(await readFile(new URL("../app/locales.json", import.meta.url), "utf8")).map(({ code }) => code);
const routes = ["", "categories", "products", "guide", "qc", "shipping", "faq", "seo"];
const guideTopics = ["buying-search", "buying-order", "buying-qc", "buying-shipping"];
const source = [
  await readFile(new URL("../app/seo-content.ts", import.meta.url), "utf8"),
  ...await Promise.all(["01.ts", "02.ts", "03.ts", "04.ts", "05.ts", "06.ts", "07.ts", "08.ts", "09.ts"].map((file) => readFile(new URL(`../app/discovery-articles/${file}`, import.meta.url), "utf8"))),
].join("\n");
const articles = [...new Set([...source.matchAll(/slug:\s*"([a-z0-9-]+)"/g)].map((match) => match[1]))];

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...languages.flatMap((language) => routes.map((route) => {
    const path = route ? `/${language}/${route}/` : `/${language}/`;
    const priority = route === "" ? "1.0" : route === "guide" || route === "seo" ? "0.9" : "0.8";
    const frequency = route === "" ? "daily" : "weekly";
    const lastmod = ["", "guide", "seo"].includes(route) ? "2026-11-27" : "2026-10-23";
    return `  <url>\n    <loc>${domain}${path}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${frequency}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
  })),
  "</urlset>",
  "",
].join("\n");

await writeFile(new URL("../public/sitemap.xml", import.meta.url), xml);
console.log(`Generated ${languages.length * routes.length} sitemap URLs across ${languages.length} languages.`);

const destinations = [
  ...guideTopics.map(slug => [slug, `guide/#${slug}`]),
  ...["articles", ...articles].map(slug => [slug, "seo/"]),
];
const redirects = languages.flatMap(lang => destinations.flatMap(([from, to]) => [
  `/${lang}/${from} /${lang}/${to} 301`,
  `/${lang}/${from}/ /${lang}/${to} 301`,
]));
await writeFile(new URL("../public/_redirects", import.meta.url), redirects.join("\n") + "\n");
