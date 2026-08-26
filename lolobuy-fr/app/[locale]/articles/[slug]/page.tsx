import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleLayout, type ArticleChrome } from "../../../articles/article-layout";
import type { Article } from "../../../articles/article-data";
import translationData from "../../../articles/article-translations.json";

const locales=["en","fr","de","es","it","pt","nl","pl","sv"] as const;
const localized = translationData as unknown as Record<string,{articles:Record<string,Article>;chrome:ArticleChrome}>;

export function generateStaticParams(){
  return locales.flatMap(locale=>Object.keys(localized.en.articles).map(slug=>({locale,slug})));
}

export async function generateMetadata({params}:{params:Promise<{locale:string;slug:string}>}):Promise<Metadata>{
  const {locale,slug}=await params;
  const article=localized[locale]?.articles[slug];
  if(!article||!locales.includes(locale as typeof locales[number])) return {};
  const languages=Object.fromEntries(locales.map(code=>[code,code === "en" ? `/articles/${slug}` : `/${code}/articles/${slug}`]));
  const canonical=locale === "en" ? `/articles/${slug}` : `/${locale}/articles/${slug}`;
  return {title:`${article.title} | ${locale.toUpperCase()} LoloBuy Guide`,description:article.description,alternates:{canonical,languages}};
}

export default async function Page({params}:{params:Promise<{locale:string;slug:string}>}){
  const {locale,slug}=await params;
  const localeData=localized[locale];
  const article=localeData?.articles[slug];
  if(!article||!locales.includes(locale as typeof locales[number])) notFound();
  return <ArticleLayout article={article} locale={locale} chrome={localeData.chrome}/>;
}
