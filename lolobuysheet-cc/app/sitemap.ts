import type { MetadataRoute } from "next";
import { categories, guides, markets, products } from "./data";
import { languageOptions, withLocale } from "./locales";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://lolobuysheet.cc";
  const core = [
    "/",
    "/spreadsheet",
    "/categories",
    "/products",
    "/seo-articles",
    "/faq",
    "/markets",
    "/sources",
    ...categories.map((category) => `/categories/${category.slug}`),
    ...products.map((product) => `/products/${product.slug}`),
    ...guides.map((guide) => `/seo-articles/${guide.slug}`),
    ...markets.map((market) => `/markets/${market.slug}`),
  ];
  const localized = languageOptions.flatMap((language) =>
    core.map((path) => withLocale(language.code, path)),
  );

  return [...new Set(localized)].map((path) => ({
    url: `${base}${path === "/" ? "" : path}`,
    lastModified: new Date("2026-08-24"),
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1 : 0.8,
  }));
}
