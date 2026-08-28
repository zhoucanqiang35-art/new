import type { MetadataRoute } from "next";
import { seoArticles } from "./seo-content";

export const dynamic = "force-static";

const origin = "https://pikobuyspreadsheet.uk";
const languages = ["en", "fr", "de", "es", "it", "pt", "nl", "pl", "ro"];
const staticRoutes = ["categories", "products", "guide", "qc", "shipping", "articles", "faq", "seo"];

export default function sitemap(): MetadataRoute.Sitemap {
  const articleRoutes = seoArticles.map((article) => article.slug);
  const routes = ["", ...staticRoutes, ...articleRoutes];

  return languages.flatMap((language) =>
    routes.map((route) => ({
      url: `${origin}/${language}${route ? `/${route}` : ""}`,
      lastModified: new Date("2026-08-28"),
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1 : staticRoutes.includes(route) ? 0.8 : 0.7,
    })),
  );
}
