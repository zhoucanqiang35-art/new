import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categoryRecords } from "../../../lib/content-data";
import { getFeatureLabel, getLocale, locales } from "../../../lib/site-data";
import { getLocalizedCategoryName, getUi } from "../../../lib/i18n";
import PageFrame from "../../components/PageFrame";

export function generateStaticParams(){return locales.map(({code})=>({locale:code}));}
export async function generateMetadata({params}:{params:Promise<{locale:string}>}):Promise<Metadata>{const {locale:code}=await params;const locale=getLocale(code);if(!locale)return{};return{title:code==="en"?`Best PikoBuy Finds by Category (2026) | ${getFeatureLabel(code,"productCategories")}`:`${getFeatureLabel(code,"productCategories")} | PikoBuy Spreadsheet 2026`,description:code==="en"?`Explore ${categoryRecords.length} PikoBuy spreadsheet categories with focused QC, sizing, source and shipping research checklists.`:locale.intro,robots:{index:true,follow:true},alternates:{canonical:`/${code}/product-categories`,languages:Object.fromEntries(locales.map(item=>[item.lang,`/${item.code}/product-categories`]))}};}

export default async function ProductCategoriesPage({params}:{params:Promise<{locale:string}>}){
  const {locale:code}=await params;const locale=getLocale(code);if(!locale)notFound();
  const ui=getUi(code);
  const base="https://pikobuyspreadsheet.pro";const canonical=`${base}/${code}/product-categories`;
  const schema={"@context":"https://schema.org","@graph":[{"@type":"CollectionPage","@id":`${canonical}#page`,url:canonical,name:getFeatureLabel(code,"productCategories"),description:locale.intro,inLanguage:locale.lang,mainEntity:{"@id":`${canonical}#items`}},{"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:`${base}/${code}`},{"@type":"ListItem",position:2,name:getFeatureLabel(code,"productCategories"),item:canonical}]},{"@type":"ItemList","@id":`${canonical}#items`,numberOfItems:categoryRecords.length,itemListElement:categoryRecords.map((item,index)=>({"@type":"ListItem",position:index+1,name:getLocalizedCategoryName(code,index),url:`${canonical}/${item.slug}`}))}]};
  return <PageFrame locale={locale} currentSlug="product-categories"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><section className="directory-hero v3-wrap"><span>01 · {locale.name.toUpperCase()}</span><h1>{getFeatureLabel(code,"productCategories")}</h1><p>{locale.intro} {getFeatureLabel(code,"productCategories")}.</p></section><section className="directory-grid v3-wrap">{categoryRecords.map((item,index)=><a href={`/${code}/product-categories/${item.slug}`} key={item.slug}><span>{String(index+1).padStart(2,"0")}</span><small>{code==="en"?item.note:locale.intro}</small><h2>{getLocalizedCategoryName(code,index)}</h2><p>{code==="en"?item.checks[0]:locale.guidesLabel}</p><b>{ui.open} →</b></a>)}</section></PageFrame>;
}
