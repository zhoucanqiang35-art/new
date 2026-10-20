import { rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { build } from "esbuild";

const client = resolve("dist/client");
const server = resolve("dist/server");

// Vinext creates this file for a different deployment workflow. Pages would
// honor it and omit the generated /_next CSS and JavaScript from the upload.
await rm(resolve(client, ".assetsignore"), { force: true });
await rm(resolve(client, "_worker.js"), { force: true });
await build({
  entryPoints: [resolve(server, "index.js")],
  outfile: resolve(client, "_worker.js"),
  bundle: true,
  format: "esm",
  platform: "browser",
  target: "es2022",
  external: ["node:*"],
});

await writeFile(
  resolve(client, "_routes.json"),
  JSON.stringify({
    version: 1,
    include: ["/*"],
    exclude: [
      "/_next/static/*",
      "/images/*",
      "/sitemap.xml",
      "/robots.txt",
      "/favicon.svg",
      "/file.svg",
      "/globe.svg",
      "/window.svg",
    ],
  }),
);

const domain = "https://lolobuyspreadsheet.shop";
const locales = ["en", "de", "fr", "es", "it", "pt", "nl", "pl", "sv"];
const guideSlugs = [
  "how-to-use-lolobuy-spreadsheet",
  "lolobuy-qc-photos-checklist",
  "lolobuy-shipping-cost-guide",
  "lolobuy-warehouse-storage-consolidation",
  "lolobuy-weidian-taobao-1688-links",
  "is-lolobuy-safe-evidence-guide",
];
const urls = locales.flatMap((locale) => [
  `/${locale}/`, `/${locale}/guides`, `/${locale}/categories`, `/${locale}/faq`,
  ...guideSlugs.map((slug) => `/${locale}/guides/${slug}`),
]);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((url) => `  <url><loc>${domain}${url}</loc><lastmod>2026-10-20</lastmod><changefreq>weekly</changefreq><priority>${url.endsWith("/") ? "1.0" : url.includes("/guides/") ? "0.8" : "0.7"}</priority></url>`).join("\n")}\n</urlset>\n`;
await writeFile(resolve(client, "sitemap.xml"), sitemap);
