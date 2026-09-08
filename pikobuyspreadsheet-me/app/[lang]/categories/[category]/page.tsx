import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CategoryPage from "../../../category-page";
import { categoryAlternates, categoryPath, categorySlugs, getCategory, getCategoryUi, supportedLocales, type CategorySlug, type SiteLocale } from "../../../category-data";

const localized=supportedLocales.filter(locale=>locale!=="en");
export function generateStaticParams(){return localized.flatMap(lang=>categorySlugs.map(category=>({lang,category})));}
export async function generateMetadata({params}:{params:Promise<{lang:string;category:string}>}):Promise<Metadata>{
  const {lang,category}=await params;if(!localized.includes(lang as Exclude<SiteLocale,"en">)||!categorySlugs.includes(category as CategorySlug))return {};
  const locale=lang as SiteLocale;const slug=category as CategorySlug;const data=getCategory(locale,slug);const title=getCategoryUi(locale).title(data.title);const canonical=`https://pikobuyspreadsheet.me${categoryPath(locale,slug)}`;
  return {title,description:getCategoryUi(locale).intro(data.title,data.focus),alternates:{canonical,languages:categoryAlternates(slug)},openGraph:{title,url:canonical,type:"website"},robots:{index:true,follow:true}};
}
export default async function Page({params}:{params:Promise<{lang:string;category:string}>}){const {lang,category}=await params;if(!localized.includes(lang as Exclude<SiteLocale,"en">)||!categorySlugs.includes(category as CategorySlug))notFound();return <CategoryPage lang={lang as SiteLocale} slug={category as CategorySlug}/>;}
