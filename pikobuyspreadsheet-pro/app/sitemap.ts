import type { MetadataRoute } from "next";
import { guideDefs, locales } from "../lib/site-data";
import { categoryRecords, isSeoArticleAvailable, productRecords, seoArticles } from "../lib/content-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base="https://pikobuyspreadsheet.pro";const now=new Date("2026-08-21T00:00:00Z");
  const entry=(path:string,changeFrequency:MetadataRoute.Sitemap[number]["changeFrequency"],priority:number):MetadataRoute.Sitemap[number]=>({url:`${base}${path}`,lastModified:now,changeFrequency,priority});
  return [entry("/","weekly",1),...locales.flatMap((locale)=>[
    entry(`/${locale.code}`,"weekly",0.9),
    ...guideDefs.map((guide)=>entry(`/${locale.code}/${guide.slug}`,"monthly",0.75)),
    entry(`/${locale.code}/product-categories`,"weekly",0.85),
    ...categoryRecords.map((category)=>entry(`/${locale.code}/product-categories/${category.slug}`,"weekly",0.8)),
    entry(`/${locale.code}/product-details`,"weekly",0.85),
    ...productRecords.map((product)=>entry(`/${locale.code}/product-details/${product.slug}`,"weekly",0.8)),
    entry(`/${locale.code}/seo-articles`,"weekly",0.85),
    ...seoArticles.filter((article)=>isSeoArticleAvailable(article,locale.code)).map((article)=>entry(`/${locale.code}/seo-articles/${article.slug}`,"monthly",0.8)),
  ])];
}
