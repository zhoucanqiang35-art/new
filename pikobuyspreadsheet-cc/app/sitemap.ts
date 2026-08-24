import type { MetadataRoute } from "next";
import { articles, languages } from "./lib/site-data";
import { absoluteSiteUrl, reviewedLocales } from "./lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = languages.map(([code]) => code).filter((code) => reviewedLocales.has(code));
  // Keep this tied to a verified content/technical release. Do not replace it
  // with the build time, which would manufacture freshness on every deploy.
  const lastModified = new Date("2026-08-24T00:00:00Z");
  return locales.flatMap((locale) => [
    { url: absoluteSiteUrl(locale), lastModified, changeFrequency: "daily" as const, priority: locale === "en" ? 1 : 0.8 },
    ...articles.map((article) => ({
      url: absoluteSiteUrl(locale, article.slug),
      lastModified,
      changeFrequency: article.slug === "updates" ? "daily" as const : "monthly" as const,
      priority: ["pikobuy-spreadsheet", "shipping-cost-guide", "how-pikobuy-works"].includes(article.slug) ? 0.9 : 0.7,
    })),
  ]);
}
