import { getArticle, languages } from "./site-data";

export const languageCodes = languages.map(([code]) => code as string);

export function articleRoute(slug: string) {
  const article = getArticle(slug);
  if (!article) return `/guides/${slug}`;
  if (slug === "seo-articles") return "/articles";
  if (slug === "category-research-guide") return "/categories";
  if (["faq", "sources", "about", "updates"].includes(slug)) return `/${slug}`;
  if (article.group === "Category") return `/categories/${slug}`;
  return `/guides/${slug}`;
}

export function sitePath(locale = "en", slug?: string) {
  const prefix = locale === "en" ? "" : `/${locale}`;
  return slug ? `${prefix}${articleRoute(slug)}` : prefix || "/";
}

export function parsePublicParts(parts: string[]) {
  let locale = "en";
  let offset = 0;
  if (parts[0] && languageCodes.includes(parts[0])) {
    locale = parts[0];
    offset = 1;
  }
  const route = parts.slice(offset);
  if (!route.length) return { locale, article: undefined };

  let slug: string | undefined;
  if (route.length === 1) {
    slug = {
      articles: "seo-articles",
      categories: "category-research-guide",
      faq: "faq",
      sources: "sources",
      about: "about",
      updates: "updates",
    }[route[0]];
  } else if (route.length === 2 && route[0] === "guides") {
    slug = route[1];
  } else if (route.length === 2 && route[0] === "categories") {
    slug = route[1];
  }
  const article = slug ? getArticle(slug) : undefined;
  return article ? { locale, article } : null;
}

