import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categoryRecords, getCategoryRecord } from "../../../../lib/content-data";
import { getFeatureLabel, getLocale, getLocalizedGuideTitle, locales } from "../../../../lib/site-data";
import { getLocalizedCategoryName, getUi } from "../../../../lib/i18n";
import PageFrame from "../../../components/PageFrame";

export function generateStaticParams(){return locales.flatMap(({code})=>categoryRecords.map(item=>({locale:code,category:item.slug})));}
export async function generateMetadata({params}:{params:Promise<{locale:string;category:string}>}):Promise<Metadata>{const {locale:code,category}=await params;const locale=getLocale(code);const item=getCategoryRecord(category);if(!locale||!item)return{};return{title:`${item.name} PikoBuy Spreadsheet Checklist`,description:item.note,robots:{index:true,follow:true},alternates:{canonical:`/${code}/product-categories/${category}`,languages:Object.fromEntries(locales.map(entry=>[entry.lang,`/${entry.code}/product-categories/${category}`]))}};}

export default async function ProductCategoryPage({params}:{params:Promise<{locale:string;category:string}>}){
  const {locale:code,category}=await params;const locale=getLocale(code);const item=getCategoryRecord(category);if(!locale||!item)notFound();
  const ui=getUi(code);const itemIndex=categoryRecords.findIndex(entry=>entry.slug===item.slug);const localizedName=getLocalizedCategoryName(code,itemIndex);const visibleChecks=code==="en"?item.checks:[getLocalizedGuideTitle(code,"qc-photos"),getLocalizedGuideTitle(code,"shipping"),getLocalizedGuideTitle(code,"categories")];
  return <PageFrame locale={locale} currentSlug="product-categories"><article className="detail-article v3-wrap"><a className="detail-back" href={`/${code}/product-categories/`}>← {getFeatureLabel(code,"productCategories")}</a><p className="detail-kicker">{getFeatureLabel(code,"productCategories").toUpperCase()} · {locale.name.toUpperCase()}</p><h1>{localizedName}</h1><p className="detail-deck">{code==="en"?item.note:locale.intro}</p><div className="detail-two-col"><section><h2>{ui.evidence}</h2>{visibleChecks.map((check,index)=><div className="numbered-check" key={check}><span>{String(index+1).padStart(2,"0")}</span><p>{check}</p></div>)}</section><aside><small>{ui.mainRecord.toUpperCase()}</small><h2>{ui.recheck}</h2><p>{locale.intro} {locale.independent}.</p><a href={item.destination} target="_blank" rel="noreferrer">{ui.open} {localizedName} ↗</a></aside></div>{code!=="en"&&<details className="original-research"><summary>{ui.originalEnglish}</summary><h3 lang="en">{item.name}</h3><p lang="en">{item.note}</p><ul lang="en">{item.checks.map(check=><li key={check}>{check}</li>)}</ul></details>}</article></PageFrame>;
}
