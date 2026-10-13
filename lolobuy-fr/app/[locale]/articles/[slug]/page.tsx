import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleLayout, type ArticleChrome } from "../../../articles/article-layout";
import { articles as englishArticles, type Article } from "../../../articles/article-data";
import translationData from "../../../articles/article-translations.json";
import { reviewArticles } from "../../../articles/review-article";

const locales=["en","fr","de","es","it","pt","nl","pl","sv"] as const;
const localized = translationData as unknown as Record<string,{articles:Record<string,Article>;chrome:ArticleChrome}>;

export function generateStaticParams(){
  return locales.flatMap(locale=>[...Object.keys(englishArticles), "lolobuy-reviews-before-you-order"].map(slug=>({locale,slug})));
}

function articleFor(locale:string, slug:string){
  if(slug === "lolobuy-reviews-before-you-order") return reviewArticles[locale as keyof typeof reviewArticles];
  return localized[locale]?.articles[slug] ?? englishArticles[slug];
}

export async function generateMetadata({params}:{params:Promise<{locale:string;slug:string}>}):Promise<Metadata>{
  const {locale,slug}=await params;
  const article=articleFor(locale,slug);
  if(!article||!locales.includes(locale as typeof locales[number])) return {};
  const languages=article.englishOnly ? {en:`/articles/${slug}`} : Object.fromEntries(locales.map(code=>[code,code === "en" ? `/articles/${slug}` : `/${code}/articles/${slug}`]));
  const canonical=article.englishOnly || locale === "en" ? `/articles/${slug}` : `/${locale}/articles/${slug}`;
  return {title:`${article.title} | ${locale.toUpperCase()} LoloBuy Guide`,description:article.description,alternates:{canonical,languages}};
}

export default async function Page({params}:{params:Promise<{locale:string;slug:string}>}){
  const {locale,slug}=await params;
  const localeData=localized[locale];
  const article=articleFor(locale,slug);
  if(!article||!locales.includes(locale as typeof locales[number])) notFound();
  return <ArticleLayout article={article} locale={locale} chrome={localeData.chrome}/>;
}
