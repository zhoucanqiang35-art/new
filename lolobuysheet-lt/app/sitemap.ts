import type { MetadataRoute } from "next";
import { categories, faqs, languages, products } from "./data";
import { researchArticles } from "./articleData";
import { localizedContent } from "./localizedContent";

export default function sitemap(): MetadataRoute.Sitemap {
  const base="https://lolobuysheet.lt";
  const staticPaths=["","/guides","/qc-guide","/shipping","/research","/articles","/sources","/about","/categories","/products","/faq","/languages"];
  const dynamicPaths=[
    ...categories.map(item=>`/categories/${item.slug}`),
    ...products.map(item=>`/products/${item.slug}`),
    ...faqs.map(item=>`/faq/${item.slug}`),
    ...researchArticles.map(item=>`/articles/${item.slug}`),
    ...languages.map(item=>`/languages/${item.code}`),
    ...languages.flatMap(language=>[
      `/languages/${language.code}/categories`,
      ...categories.map(item=>`/languages/${language.code}/categories/${item.slug}`),
      `/languages/${language.code}/products`,
      ...products.map(item=>`/languages/${language.code}/products/${item.slug}`),
      `/languages/${language.code}/guides`,
      `/languages/${language.code}/qc-guide`,
      `/languages/${language.code}/shipping`,
      `/languages/${language.code}/research`,
      `/languages/${language.code}/sources`,
      `/languages/${language.code}/about`,
      `/languages/${language.code}/articles`,
      `/languages/${language.code}/faq`,
      ...(localizedContent[language.code]?.articles ?? []).map(item=>`/languages/${language.code}/articles/${item.slug}`),
      ...faqs.map(item=>`/languages/${language.code}/faq/${item.slug}`),
    ]),
  ];
  return [...staticPaths,...dynamicPaths].map(path=>({url:`${base}${path}`,lastModified:new Date("2026-08-22"),changeFrequency:"monthly" as const,priority:path===""?1:path.split("/").length===2?.8:.7}));
}
