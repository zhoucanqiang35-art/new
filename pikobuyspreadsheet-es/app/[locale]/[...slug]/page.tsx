import { notFound } from "next/navigation";
import { locales } from "../../data";
import { categories, products, seoArticles } from "../../data";
import { LocalizedRoutePage } from "../../site-components";
import { pageMetadata } from "../../seo";
const singleRoutes = ["categories","products","guides","shipping","countries","qc","methodology","faq","seo-articles"] as const;
export function generateStaticParams(){
  const routeParams=[
    ...singleRoutes.map((route)=>[route]),
    ...categories.map(({slug})=>["category",slug]),
    ...products.map(({slug})=>["product",slug]),
    ...seoArticles.map(({slug})=>["seo-articles",slug]),
  ];
  return locales
    .filter((item)=>item.code!=="en-US")
    .flatMap(({code})=>routeParams.map((slug)=>({locale:code,slug})));
}
export const dynamicParams=false;
export async function generateMetadata({params}:{params:Promise<{locale:string;slug:string[]}>}){const {locale,slug}=await params;return pageMetadata(locale,slug.join("/"),"PikoBuy Spreadsheet Europe","Localized PikoBuy product, shipping, QC and research guide.");}
export default async function Page({params}:{params:Promise<{locale:string;slug:string[]}>}){const {locale,slug}=await params;if(locale==="en-US"||!locales.some(item=>item.code===locale))notFound();return <LocalizedRoutePage locale={locale} slug={slug}/>;}
