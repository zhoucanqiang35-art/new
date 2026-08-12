import type { MetadataRoute } from "next";
import { localeCodes, products } from "./site-data";
import { editorialArticles } from "./editorial-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/spreadsheet", "/categories", "/guides", "/guides/beginner", "/guides/qc", "/guides/shipping", "/reviews", "/faq", "/sources", "/method", "/seo-articles", "/updates", ...products.map((product) => `/products/${product.slug}`)];
  const localizedUrl = (lang: (typeof localeCodes)[number], path: string) => path === "/"
    ? `https://lolobuysheet.shop${lang === "en" ? "/" : `/${lang}`}`
    : `https://lolobuysheet.shop${lang === "en" ? "" : `/${lang}`}${path}`;
  const baseEntries = localeCodes.flatMap((lang) => paths.map((path) => ({
    url: localizedUrl(lang, path),
    lastModified: new Date(path === "/" || path === "/updates" || path === "/seo-articles" ? "2026-08-12" : "2026-08-04"),
    changeFrequency: path === "/" ? "weekly" as const : path.startsWith("/seo-articles") ? "weekly" as const : "monthly" as const,
    priority: path === "/" ? 1 : path.startsWith("/seo-articles/") ? .8 : .7,
    alternates: { languages: Object.fromEntries([...localeCodes.map((code) => [code, localizedUrl(code, path)]), ["x-default", localizedUrl("en", path)]]) },
  })));
  const articleEntries = editorialArticles.flatMap((article) => {
    const path = `/seo-articles/${article.slug}`;
    const supportedLocales = article.locales === "en" ? (["en"] as const) : localeCodes;
    const languages = Object.fromEntries([...supportedLocales.map((code) => [code, localizedUrl(code, path)]), ["x-default", localizedUrl("en", path)]]);
    return supportedLocales.map((lang) => ({
      url: localizedUrl(lang, path),
      lastModified: new Date(article.modified ?? "2026-08-04"),
      changeFrequency: "weekly" as const,
      priority: .8,
      alternates: { languages },
    }));
  });
  return [...baseEntries, ...articleEntries];
}
