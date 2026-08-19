import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { productRecords } from "../../../lib/content-data";
import { getFeatureLabel, getLocale, locales } from "../../../lib/site-data";
import { getLocalizedCategoryName, getUi } from "../../../lib/i18n";
import PageFrame from "../../components/PageFrame";

export function generateStaticParams(){return locales.map(({code})=>({locale:code}));}
export async function generateMetadata({params}:{params:Promise<{locale:string}>}):Promise<Metadata>{const {locale:code}=await params;const locale=getLocale(code);if(!locale)return{};return{title:`${getFeatureLabel(code,"productDetails")} — PikoBuy Spreadsheet`,description:locale.intro,robots:{index:false,follow:false},alternates:{canonical:`/${code}/product-details/`,languages:Object.fromEntries(locales.map(item=>[item.lang,`/${item.code}/product-details/`]))}};}

export default async function ProductDetailsPage({params}:{params:Promise<{locale:string}>}){
  const {locale:code}=await params;const locale=getLocale(code);if(!locale)notFound();
  const ui=getUi(code);const categoryIndex:Record<string,number>={"Pants & shorts":4,"Jackets":3,"T-shirts":2,"Jerseys":7};
  return <PageFrame locale={locale} currentSlug="product-details"><section className="directory-hero v3-wrap"><span>02 · {locale.name.toUpperCase()}</span><h1>{getFeatureLabel(code,"productDetails")}</h1><p>{locale.intro} {ui.usdNote}</p></section><section className="product-record-grid v3-wrap">{productRecords.map(item=><a href={`/${code}/product-details/${item.slug}/`} key={item.slug}><div className="product-record-art"><img src={item.image} alt={item.name}/><span>{getLocalizedCategoryName(code,categoryIndex[item.category]??9)}</span></div><small>{code==="en"?item.observed:ui.usdNote}</small><h2>{item.name}</h2><p>{code==="en"?item.summary:locale.intro}</p><div><b>{item.recordedPrice}</b><span>{ui.open} →</span></div></a>)}</section></PageFrame>;
}
