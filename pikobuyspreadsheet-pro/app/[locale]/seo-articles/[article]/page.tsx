import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSeoArticle, isSeoArticleAvailable, seoArticles } from "../../../../lib/content-data";
import { getFeatureLabel, getLocale, locales } from "../../../../lib/site-data";
import { getLocalizedSeoArticle, getSeoTranslationLabels } from "../../../../lib/seo-localization";
import PageFrame from "../../../components/PageFrame";
import { getUi } from "../../../../lib/i18n";

const baseUrl="https://pikobuyspreadsheet.pro";

export function generateStaticParams(){return locales.flatMap(({code})=>seoArticles.filter(item=>isSeoArticleAvailable(item,code)).map(item=>({locale:code,article:item.slug})));}

export async function generateMetadata({params}:{params:Promise<{locale:string;article:string}>}):Promise<Metadata>{
  const {locale:code,article}=await params;
  const locale=getLocale(code);const item=getSeoArticle(article);
  if(!locale||!item||!isSeoArticleAvailable(item,code))return{};
  const localized=getLocalizedSeoArticle(code,item);
  const availableLocales=locales.filter(entry=>isSeoArticleAvailable(item,entry.code));
  const canonical=`${baseUrl}/${code}/seo-articles/${article}`;
  return{
    title:localized.title,
    description:localized.deck,
    keywords:item.primaryKeyword?[item.primaryKeyword,...(item.secondaryKeywords??[])]:undefined,
    robots:{index:true,follow:true},
    alternates:{canonical,languages:Object.fromEntries([...availableLocales.map(entry=>[entry.lang,`${baseUrl}/${entry.code}/seo-articles/${article}`]),["x-default",canonical]])},
    openGraph:{type:"article",url:canonical,title:localized.title,description:localized.deck,publishedTime:item.publishedAt,modifiedTime:item.updatedAt,locale:locale.lang},
  };
}

export default async function SeoArticlePage({params}:{params:Promise<{locale:string;article:string}>}){
  const {locale:code,article}=await params;const locale=getLocale(code);const item=getSeoArticle(article);
  if(!locale||!item||!isSeoArticleAvailable(item,code))notFound();
  const ui=getUi(code);
  const localized=getLocalizedSeoArticle(code,item);const labels=getSeoTranslationLabels(code);
  const paragraphCount=localized.sections.reduce((total,section)=>total+section.paragraphs.length,0);
  const updated=item.updatedAt??"2026-08-19";
  const sourceLinks=item.sourceLinks??[];
  const articleUrl=`${baseUrl}/${code}/seo-articles/${article}`;
  const articleSchema={"@context":"https://schema.org","@type":"Article",headline:localized.title,description:localized.deck,datePublished:item.publishedAt,dateModified:item.updatedAt??item.publishedAt,inLanguage:locale.lang,mainEntityOfPage:articleUrl,author:{"@type":"Organization",name:"PikoBuy Spreadsheet Pro",url:baseUrl},publisher:{"@type":"Organization",name:"PikoBuy Spreadsheet Pro",url:baseUrl},keywords:[item.primaryKeyword,...(item.secondaryKeywords??[])].filter(Boolean).join(", "),citation:sourceLinks.map(source=>source.url)};
  const breadcrumbSchema={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:`${baseUrl}/${code}`},{"@type":"ListItem",position:2,name:getFeatureLabel(code,"seoArticles"),item:`${baseUrl}/${code}/seo-articles`},{"@type":"ListItem",position:3,name:localized.title,item:articleUrl}]};
  return <PageFrame locale={locale} currentSlug="seo-articles"><article className="seo-longform v3-wrap">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(articleSchema)}} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(breadcrumbSchema)}} />
    <nav className="article-breadcrumb" aria-label="Breadcrumb"><a href={`/${code}`}>Home</a><span>→</span><a href={`/${code}/seo-articles`}>{getFeatureLabel(code,"seoArticles")}</a><span>→</span><span aria-current="page">{localized.title}</span></nav>
    <a className="detail-back" href={`/${code}/seo-articles/`}>← {getFeatureLabel(code,"seoArticles")}</a><p className="locale-context">{getFeatureLabel(code,"seoArticles")} · {locale.intro}</p><header><p>{ui.factChecked.toUpperCase()} · {ui.updated.toUpperCase()} {updated}</p><h1>{localized.title}</h1><div><p>{localized.deck}</p><span>{localized.wordTarget}</span></div></header><div className="seo-content-integrity"><b>{labels.contentLabel}</b><p>{locale.intro}</p><small>{localized.sections.length} {labels.sectionsLabel} · {paragraphCount} {labels.paragraphsLabel} · {localized.wordTarget}</small></div><aside className="article-source-strip"><small>{ui.officialMaterial.toUpperCase()}</small>{sourceLinks.length?sourceLinks.map(source=><a href={source.url} key={source.url} rel="noreferrer">{source.label} ↗</a>):localized.sources.map((source,index)=><span key={`${source}-${index}`}>{source}</span>)}</aside><div className="seo-longform-body" lang={locale.lang}>{localized.sections.map((section,index)=><section key={`${section.heading}-${index}`}><span>{String(index+1).padStart(2,"0")}</span><div><h2>{section.heading}</h2>{section.paragraphs.map((paragraph,pIndex)=><p key={`${index}-${pIndex}`}>{paragraph}</p>)}</div></section>)}</div>{item.internalLinks?.length?<nav className="article-related-links" aria-label="Related reading"><small>CONTINUE YOUR RESEARCH</small><h2>Related PikoBuy research</h2>{item.internalLinks.map(link=><a href={link.url} key={link.url}>{link.label}<span>→</span></a>)}</nav>:null}<div className="seo-disclosure"><b>{ui.editorialBoundary}</b><p>{locale.independent}. {locale.intro}</p></div></article></PageFrame>;
}
