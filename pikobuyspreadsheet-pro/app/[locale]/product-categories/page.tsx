import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categoryRecords } from "../../../lib/content-data";
import { getFeatureLabel, getLocale, locales } from "../../../lib/site-data";
import { getLocalizedCategoryName, getUi } from "../../../lib/i18n";
import PageFrame from "../../components/PageFrame";

export function generateStaticParams(){return locales.map(({code})=>({locale:code}));}
export async function generateMetadata({params}:{params:Promise<{locale:string}>}):Promise<Metadata>{const {locale:code}=await params;const locale=getLocale(code);if(!locale)return{};return{title:`${getFeatureLabel(code,"productCategories")} — PikoBuy Spreadsheet`,description:locale.intro,robots:{index:true,follow:true},alternates:{canonical:`/${code}/product-categories`,languages:Object.fromEntries(locales.map(item=>[item.lang,`/${item.code}/product-categories`]))}};}

export default async function ProductCategoriesPage({params}:{params:Promise<{locale:string}>}){
  const {locale:code}=await params;const locale=getLocale(code);if(!locale)notFound();
  const ui=getUi(code);
  return <PageFrame locale={locale} currentSlug="product-categories"><section className="directory-hero v3-wrap"><span>01 · {locale.name.toUpperCase()}</span><h1>{getFeatureLabel(code,"productCategories")}</h1><p>{locale.intro} {getFeatureLabel(code,"productCategories")}.</p></section><section className="directory-grid v3-wrap">{categoryRecords.map((item,index)=><a href={`/${code}/product-categories/${item.slug}/`} key={item.slug}><span>{String(index+1).padStart(2,"0")}</span><small>{code==="en"?item.note:locale.intro}</small><h2>{getLocalizedCategoryName(code,index)}</h2><p>{code==="en"?item.checks[0]:locale.guidesLabel}</p><b>{ui.open} →</b></a>)}</section></PageFrame>;
}
