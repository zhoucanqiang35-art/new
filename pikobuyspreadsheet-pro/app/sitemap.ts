import type { MetadataRoute } from "next";
import { guideDefs, locales } from "../lib/site-data";
import { categoryRecords, productRecords, seoArticles } from "../lib/content-data";
import { findCollections } from "../lib/finds-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://pikobuyspreadsheet.pro";
  const now = new Date("2026-10-20T00:00:00Z");
  const entry = (
    path: string,
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
    priority: number,
  ): MetadataRoute.Sitemap[number] => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  });

  const englishCoreEntries = [
    entry("/en", "weekly", 0.9),
    entry("/en/finds", "weekly", 0.85),
    ...findCollections.map((collection) => entry(`/en/finds/${collection.slug}`, "weekly", 0.8)),
    ...guideDefs.map((guide) => entry(`/en/${guide.slug}`, "monthly", 0.75)),
    entry("/en/product-categories", "monthly", 0.75),
    ...categoryRecords.map((category) => entry(`/en/product-categories/${category.slug}`, "monthly", 0.7)),
    entry("/en/product-details", "monthly", 0.65),
    ...productRecords.map((product) => entry(`/en/product-details/${product.slug}`, "monthly", 0.6)),
  ];

  // Localized editorial pages contain full-length, language-specific text. Keep
  // them in the sitemap while allowing weaker translated template pages to be
  // discovered naturally instead of consuming the bulk of crawl capacity.
  const localizedEditorialEntries = locales.flatMap((locale) => [
    ...(locale.code === "en" ? [] : [entry(`/${locale.code}`, "monthly", 0.7)]),
    entry(`/${locale.code}/seo-articles`, "monthly", 0.75),
    ...seoArticles.map((article) => entry(`/${locale.code}/seo-articles/${article.slug}`, "monthly", 0.8)),
  ]);

  return [entry("/", "weekly", 1), ...englishCoreEntries, ...localizedEditorialEntries];
}
