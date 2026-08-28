import type { MetadataRoute } from "next";
import { categories, locales, products, seoArticles } from "./data";

export const dynamic = "force-static";

const origin = "https://pikobuyspreadsheet.es";
const fixedRoutes = ["", "categories", "products", "guides", "shipping", "countries", "qc", "methodology", "faq", "seo-articles"];
const contentRoutes = [
  ...categories.map(({ slug }) => `category/${slug}`),
  ...products.map(({ slug }) => `product/${slug}`),
  ...seoArticles.map(({ slug }) => `seo-articles/${slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [...fixedRoutes, ...contentRoutes];
  return locales.flatMap(({ code }) =>
    routes.map((route) => {
      const prefix = code === "en-US" ? "" : `/${code}`;
      const suffix = route ? `/${route}` : "";
      return {
        url: `${origin}${prefix}${suffix}/`,
        lastModified: new Date("2026-08-28"),
        changeFrequency: route.startsWith("product/") ? "weekly" as const : "monthly" as const,
        priority: route === "" ? 1 : route.startsWith("seo-articles/") ? 0.8 : 0.7,
      };
    }),
  );
}
