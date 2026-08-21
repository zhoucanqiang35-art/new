import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isSeoArticleAvailable, seoArticles } from "../../../lib/content-data";
import { getFeatureLabel, getLocale, locales } from "../../../lib/site-data";
import { getLocalizedSeoArticle } from "../../../lib/seo-localization";
import PageFrame from "../../components/PageFrame";
import { getUi } from "../../../lib/i18n";

export function generateStaticParams(){return locales.map(({code})=>({locale:code}));}
export async function generateMetadata({params}:{params:Promise<{locale:string}>}):Promise<Metadata>{const {locale:code}=await params;const locale=getLocale(code);if(!locale)return{};return{title:`${getFeatureLabel(code,"seoArticles")} — PikoBuy Research`,description:locale.intro,robots:{index:true,follow:true},alternates:{canonical:`/${code}/seo-articles`,languages:Object.fromEntries(locales.map(item=>[item.lang,`/${item.code}/seo-articles`]))}};}

export default async function SeoArticlesPage({params}:{params:Promise<{locale:string}>}){
  const {locale:code}=await params;const locale=getLocale(code);if(!locale)notFound();
  const ui=getUi(code);const articles=seoArticles.filter(article=>isSeoArticleAvailable(article,code));
  return <PageFrame locale={locale} currentSlug="seo-articles"><section className="directory-hero v3-wrap"><span>03 · {locale.name.toUpperCase()}</span><h1>{getFeatureLabel(code,"seoArticles")}</h1><p>{locale.intro} {locale.independent}.</p></section><section className="seo-card-grid v3-wrap">{articles.map((article,index)=>{const localized=getLocalizedSeoArticle(code,article);return <a href={`/${code}/seo-articles/${article.slug}/`} key={article.slug}><span>{String(index+1).padStart(2,"0")}</span><small>{ui.factChecked} · {localized.wordTarget}</small><h2>{localized.title}</h2><p>{localized.deck}</p><b>{ui.readMore} →</b></a>;})}</section></PageFrame>;
}
