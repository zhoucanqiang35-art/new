import type { MetadataRoute } from "next";

const baseUrl = "https://pikobuyspreadsheet.me";
const locales = ["de", "fr", "es", "it", "pt", "nl", "pl"];
const routes = ["", "/product-details", "/how-pikobuy-works", "/qc-guide", "/shipping-guide", "/buyer-checklist", "/faq", "/seo-articles"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const english = routes.map((route) => ({
    url: `${baseUrl}${route || "/"}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" as const : "monthly" as const,
    priority: route === "" ? 1 : route === "/seo-articles" ? 0.9 : 0.8,
  }));
  const translated = locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified,
      changeFrequency: route === "" ? "weekly" as const : "monthly" as const,
      priority: route === "" ? 0.9 : route === "/seo-articles" ? 0.8 : 0.7,
    })),
  );
  return [...english, ...translated];
}
