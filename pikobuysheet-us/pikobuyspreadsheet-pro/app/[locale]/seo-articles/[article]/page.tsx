import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSeoArticle, seoArticles } from "../../../../lib/content-data";
import { getFeatureLabel, getLocale, locales } from "../../../../lib/site-data";
import { getLocalizedSeoArticle, getSeoTranslationLabels } from "../../../../lib/seo-localization";
import PageFrame from "../../../components/PageFrame";
import { getUi } from "../../../../lib/i18n";

export function generateStaticParams(){return locales.flatMap(({code})=>seoArticles.map(item=>({locale:code,article:item.slug})));}
export async function generateMetadata({params}:{params:Promise<{locale:string;article:string}>}):Promise<Metadata>{const {locale:code,article}=await params;const locale=getLocale(code);const item=getSeoArticle(article);if(!locale||!item)return{};const localized=getLocalizedSeoArticle(code,item);return{title:localized.title,description:localized.deck,robots:{index:true,follow:true},alternates:{canonical:`/${code}/seo-articles/${article}`,languages:Object.fromEntries(locales.map(entry=>[entry.lang,`/${entry.code}/seo-articles/${article}`]))}};}

export default async function SeoArticlePage({params}:{params:Promise<{locale:string;article:string}>}){
  const {locale:code,article}=await params;const locale=getLocale(code);const item=getSeoArticle(article);if(!locale||!item)notFound();
  const ui=getUi(code);
  const localized=getLocalizedSeoArticle(code,item);const labels=getSeoTranslationLabels(code);
  const paragraphCount=localized.sections.reduce((total,section)=>total+section.paragraphs.length,0);
  const wordCount=localized.sections.flatMap(section=>section.paragraphs).join(" ").trim().split(/\s+/u).filter(Boolean).length;
  const base="https://pikobuyspreadsheet.pro";const canonical=`${base}/${code}/seo-articles/${item.slug}`;
  const schema={"@context":"https://schema.org","@graph":[{"@type":"Article","@id":`${canonical}#article`,headline:localized.title,description:localized.deck,url:canonical,mainEntityOfPage:canonical,inLanguage:locale.lang,datePublished:"2026-08-19",dateModified:"2026-08-19",wordCount,isAccessibleForFree:true,author:{"@type":"Organization",name:"PikoBuy Spreadsheet Pro",url:base},publisher:{"@type":"Organization",name:"PikoBuy Spreadsheet Pro",url:base}},{"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:`${base}/${code}`},{"@type":"ListItem",position:2,name:getFeatureLabel(code,"seoArticles"),item:`${base}/${code}/seo-articles`},{"@type":"ListItem",position:3,name:localized.title,item:canonical}]}]};
  return <PageFrame locale={locale} currentSlug="seo-articles"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><article className="seo-longform v3-wrap"><a className="detail-back" href={`/${code}/seo-articles`}>← {getFeatureLabel(code,"seoArticles")}</a><p className="locale-context">{getFeatureLabel(code,"seoArticles")} · {locale.intro}</p><header><p>{ui.factChecked.toUpperCase()} · {ui.updated.toUpperCase()} 2026-08-19</p><h1>{localized.title}</h1><div><p>{localized.deck}</p><span>{localized.wordTarget}</span></div></header><div className="seo-content-integrity"><b>{labels.contentLabel}</b><p>{locale.intro}</p><small>{localized.sections.length} {labels.sectionsLabel} · {paragraphCount} {labels.paragraphsLabel} · {localized.wordTarget}</small></div><aside className="article-source-strip"><small>{ui.officialMaterial.toUpperCase()}</small>{localized.sources.map((source,index)=><span key={`${source}-${index}`}>{source}</span>)}</aside><div className="seo-longform-body" lang={locale.lang}>{localized.sections.map((section,index)=><section key={`${section.heading}-${index}`}><span>{String(index+1).padStart(2,"0")}</span><div><h2>{section.heading}</h2>{section.paragraphs.map((paragraph,pIndex)=><p key={`${index}-${pIndex}`}>{paragraph}</p>)}</div></section>)}</div><div className="seo-disclosure"><b>{ui.editorialBoundary}</b><p>{locale.independent}. {locale.intro}</p></div></article></PageFrame>;
}
