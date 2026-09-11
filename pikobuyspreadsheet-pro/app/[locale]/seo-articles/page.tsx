import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { seoArticles } from "../../../lib/content-data";
import { getFeatureLabel, getLocale, locales } from "../../../lib/site-data";
import { getLocalizedSeoArticle } from "../../../lib/seo-localization";
import PageFrame from "../../components/PageFrame";
import { getUi } from "../../../lib/i18n";

export function generateStaticParams(){return locales.map(({code})=>({locale:code}));}
export async function generateMetadata({params}:{params:Promise<{locale:string}>}):Promise<Metadata>{const {locale:code}=await params;const locale=getLocale(code);if(!locale)return{};return{title:code==="en"?`PikoBuy Guides 2026 | QC, Shipping, Returns & Tracking`:`${getFeatureLabel(code,"seoArticles")} | PikoBuy 2026`,description:code==="en"?`Read ${seoArticles.length} fact-checked PikoBuy guides covering spreadsheet research, QC photos, shipping costs and practical buying decisions.`:locale.intro,robots:{index:true,follow:true},alternates:{canonical:`/${code}/seo-articles`,languages:Object.fromEntries(locales.map(item=>[item.lang,`/${item.code}/seo-articles`]))}};}

export default async function SeoArticlesPage({params}:{params:Promise<{locale:string}>}){
  const {locale:code}=await params;const locale=getLocale(code);if(!locale)notFound();
  const ui=getUi(code);
  const base="https://pikobuyspreadsheet.pro";const canonical=`${base}/${code}/seo-articles`;
  const schema={"@context":"https://schema.org","@graph":[{"@type":"CollectionPage","@id":`${canonical}#page`,url:canonical,name:getFeatureLabel(code,"seoArticles"),description:locale.intro,inLanguage:locale.lang,mainEntity:{"@id":`${canonical}#items`}},{"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:`${base}/${code}`},{"@type":"ListItem",position:2,name:getFeatureLabel(code,"seoArticles"),item:canonical}]},{"@type":"ItemList","@id":`${canonical}#items`,numberOfItems:seoArticles.length,itemListElement:seoArticles.map((article,index)=>({"@type":"ListItem",position:index+1,name:getLocalizedSeoArticle(code,article).title,url:`${canonical}/${article.slug}`}))}]};
  return <PageFrame locale={locale} currentSlug="seo-articles"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><section className="directory-hero v3-wrap"><span>03 · {locale.name.toUpperCase()}</span><h1>{getFeatureLabel(code,"seoArticles")}</h1><p>{locale.intro} {locale.independent}.</p></section><section className="seo-card-grid v3-wrap">{seoArticles.map((article,index)=>{const localized=getLocalizedSeoArticle(code,article);return <a href={`/${code}/seo-articles/${article.slug}`} key={article.slug}><span>{String(index+1).padStart(2,"0")}</span><small>{ui.factChecked} · {localized.wordTarget}</small><h2>{localized.title}</h2><p>{localized.deck}</p><b>{ui.readMore} →</b></a>;})}</section></PageFrame>;
}
