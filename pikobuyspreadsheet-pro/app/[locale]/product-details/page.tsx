import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { productRecords } from "../../../lib/content-data";
import { getFeatureLabel, getLocale, locales } from "../../../lib/site-data";
import { getLocalizedCategoryName, getUi } from "../../../lib/i18n";
import PageFrame from "../../components/PageFrame";

export function generateStaticParams(){return locales.map(({code})=>({locale:code}));}
export async function generateMetadata({params}:{params:Promise<{locale:string}>}):Promise<Metadata>{const {locale:code}=await params;const locale=getLocale(code);if(!locale)return{};return{title:code==="en"?`PikoBuy Product Finds 2026 | ${getFeatureLabel(code,"productDetails")}`:`${getFeatureLabel(code,"productDetails")} | PikoBuy Spreadsheet 2026`,description:code==="en"?`Browse ${productRecords.length} independently recorded PikoBuy product finds with visible prices, source notes and category-specific research checks.`:locale.intro,robots:{index:true,follow:true},alternates:{canonical:`/${code}/product-details`,languages:Object.fromEntries(locales.map(item=>[item.lang,`/${item.code}/product-details`]))}};}

export default async function ProductDetailsPage({params}:{params:Promise<{locale:string}>}){
  const {locale:code}=await params;const locale=getLocale(code);if(!locale)notFound();
  const ui=getUi(code);const categoryIndex:Record<string,number>={"Pants & shorts":4,"Jackets":3,"T-shirts":2,"Jerseys":7};
  const base="https://pikobuyspreadsheet.pro";const canonical=`${base}/${code}/product-details`;
  const schema={"@context":"https://schema.org","@graph":[{"@type":"CollectionPage","@id":`${canonical}#page`,url:canonical,name:getFeatureLabel(code,"productDetails"),description:locale.intro,inLanguage:locale.lang,mainEntity:{"@id":`${canonical}#items`}},{"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:`${base}/${code}`},{"@type":"ListItem",position:2,name:getFeatureLabel(code,"productDetails"),item:canonical}]},{"@type":"ItemList","@id":`${canonical}#items`,numberOfItems:productRecords.length,itemListElement:productRecords.map((item,index)=>({"@type":"ListItem",position:index+1,name:item.name,url:`${canonical}/${item.slug}`}))}]};
  return <PageFrame locale={locale} currentSlug="product-details"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><section className="directory-hero v3-wrap"><span>02 · {locale.name.toUpperCase()}</span><h1>{getFeatureLabel(code,"productDetails")}</h1><p>{locale.intro} {ui.usdNote}</p></section><section className="product-record-grid v3-wrap">{productRecords.map(item=><a href={`/${code}/product-details/${item.slug}`} key={item.slug}><div className="product-record-art"><img src={item.image} alt={item.name} loading="lazy" decoding="async" width="750" height="750"/><span>{getLocalizedCategoryName(code,categoryIndex[item.category]??9)}</span></div><small>{code==="en"?item.observed:ui.usdNote}</small><h2>{item.name}</h2><p>{code==="en"?item.summary:locale.intro}</p><div><b>{item.recordedPrice}</b><span>{ui.open} →</span></div></a>)}</section></PageFrame>;
}
