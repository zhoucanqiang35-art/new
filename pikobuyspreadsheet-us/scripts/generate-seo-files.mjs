import { writeFileSync } from "node:fs";
import { join } from "node:path";

const origin = "https://pikobuyspreadsheet.us";
const output = join(process.cwd(), "dist", "client");
const languages = ["", "de", "fr", "es", "it", "pt", "nl", "pl", "sv"];
const sections = ["", "categories", "products", "guides", "articles", "faq"];
const articles = [
  "pikobuy-shipping-to-us-real-estimate",
  "pikobuy-shipping-europe-vat-routes",
  "pikobuy-qc-photos-category-checklist",
  "how-to-use-pikobuy-spreadsheet",
  "how-to-find-pikobuy-product-links",
  "pikobuy-warehouse-consolidation-guide",
];

const urls = languages.flatMap((language) => {
  const prefix = language ? `/${language}` : "";
  return [
    ...sections.map((section) => `${origin}${prefix}${section ? `/${section}` : "/"}`),
    ...articles.map((slug) => `${origin}${prefix}/articles/${slug}`),
  ];
});

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urls.map((url) => `  <url><loc>${url}</loc></url>`),
  "</urlset>",
  "",
].join("\n");

writeFileSync(join(output, "sitemap.xml"), xml, "utf8");
writeFileSync(join(output, "sitemap-google.txt"), `${urls.join("\n")}\n`, "utf8");
writeFileSync(
  join(output, "robots.txt"),
  `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`,
  "utf8",
);
