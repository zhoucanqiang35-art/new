import type { Metadata } from "next";
import { GrowthArticle, growthArticleMeta, type GrowthArticleSlug } from "./seo-growth-articles";

export function growthMetadata(slug:GrowthArticleSlug):Metadata {
  const item=growthArticleMeta("en",slug);
  return {title:item.title,description:item.description,alternates:{canonical:item.canonical,languages:{en:item.canonical,de:`https://pikobuyspreadsheet.me/de/${slug}`,fr:`https://pikobuyspreadsheet.me/fr/${slug}`,es:`https://pikobuyspreadsheet.me/es/${slug}`,it:`https://pikobuyspreadsheet.me/it/${slug}`,pt:`https://pikobuyspreadsheet.me/pt/${slug}`,nl:`https://pikobuyspreadsheet.me/nl/${slug}`,pl:`https://pikobuyspreadsheet.me/pl/${slug}`}},robots:{index:true,follow:true}};
}

export function EnglishGrowthArticle({slug}:{slug:GrowthArticleSlug}){return <GrowthArticle lang="en" slug={slug}/>;}
