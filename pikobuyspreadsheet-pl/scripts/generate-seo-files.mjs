import { writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDirectory = path.join(projectRoot, "public");
const siteUrl = "https://pikobuyspreadsheet.pl";
const locales = ["de", "fr", "es", "it", "nl", "pt", "pl"];
const routes = [
  "/",
  "/product-categories",
  "/product-details",
  "/seo-articles",
  "/faq",
  "/sources",
  "/pikobuy-fees-total-cost",
  "/pikobuy-seller-listing-verification",
  "/how-to-use-pikobuy-spreadsheet",
  "/pikobuy-qc-photo-guide",
  "/pikobuy-shipping-europe",
  "/pikobuy-eu-vat-customs-preparation",
  "/pikobuy-tracking-delay-diagnosis",
  "/is-pikobuy-safe-buyer-checklist",
  "/pikobuy-return-policy",
  "/faq/is-this-the-official-pikobuy-website",
  "/faq/how-to-use-a-pikobuy-spreadsheet",
  "/faq/how-to-check-a-product-link-before-ordering",
  "/faq/what-to-check-in-pikobuy-qc-photos",
  "/faq/how-to-estimate-pikobuy-shipping-to-europe",
  "/faq/what-to-know-about-returns-and-after-sales",
];

const normalisePath = (pathname) => (pathname === "/" ? "" : pathname);
const urlFor = (pathname, locale) =>
  locale
    ? `${siteUrl}/language/${locale}${normalisePath(pathname)}`
    : `${siteUrl}${normalisePath(pathname) || "/"}`;

const sitemapEntries = routes.flatMap((route) =>
  [undefined, ...locales].map((locale) => {
    const alternates = [
      `<xhtml:link rel="alternate" hreflang="x-default" href="${urlFor(route)}" />`,
      `<xhtml:link rel="alternate" hreflang="en" href="${urlFor(route)}" />`,
      ...locales.map(
        (language) =>
          `<xhtml:link rel="alternate" hreflang="${language}" href="${urlFor(route, language)}" />`,
      ),
    ].join("\n    ");
    return `  <url>\n    <loc>${urlFor(route, locale)}</loc>\n    <lastmod>2026-09-03</lastmod>\n    ${alternates}\n  </url>`;
  }),
);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sitemapEntries.join("\n")}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

await Promise.all([
  writeFile(path.join(publicDirectory, "sitemap.xml"), sitemap, "utf8"),
  writeFile(path.join(publicDirectory, "robots.txt"), robots, "utf8"),
]);

console.log(`Generated sitemap.xml with ${sitemapEntries.length} URLs and an indexable robots.txt.`);
