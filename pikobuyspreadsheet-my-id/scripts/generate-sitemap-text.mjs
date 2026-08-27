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

for (const language of languages) {
  const prefix = language === "en" ? "" : `/${language}`;
  urls.push(`${baseUrl}${prefix}/`);
  for (const page of pages) urls.push(`${baseUrl}${prefix}/${page}/`);
  for (const article of articles) urls.push(`${baseUrl}${prefix}/articles/${article}/`);
}

await writeFile(resolve("public/sitemap.txt"), `${urls.join("\n")}\n`, "utf8");
console.log(`Generated public/sitemap.txt with ${urls.length} URLs.`);
