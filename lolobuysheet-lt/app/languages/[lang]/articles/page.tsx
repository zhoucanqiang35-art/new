import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero, PageShell } from "../../../components";
import { languages } from "../../../data";
import { localeCopy } from "../../../localeCopy";
import { localizedContent } from "../../../localizedContent";

export function generateStaticParams(){return languages.map(language=>({lang:language.code}));}
export async function generateMetadata({params}:{params:Promise<{lang:string}>}):Promise<Metadata>{const {lang}=await params;const copy=localeCopy[lang];if(!copy)return{};return{title:copy.articlesTitle,description:copy.articlesIntro,alternates:{canonical:`/languages/${lang}/articles`,languages:Object.fromEntries([["x-default","/articles"],...languages.map(language=>[language.code,`/languages/${language.code}/articles`])])}}}

export default async function LocalizedArticles({params}:{params:Promise<{lang:string}>}){const {lang}=await params;const language=languages.find(item=>item.code===lang);const copy=localeCopy[lang];const bundle=localizedContent[lang];if(!language||!copy||!bundle)notFound();return <PageShell lang={lang}><div className="article-wrap"><PageHero lang={lang} eyebrow={`${language.name} · SEO`} title={copy.articlesTitle} intro={copy.articlesIntro}/><div className="library-grid">{bundle.articles.map(article=><a key={article.slug} href={`/languages/${lang}/articles/${article.slug}`}><span>{article.tag} · {article.readTime}</span><h2>{article.title}</h2><p>{article.description}</p><b>{copy.read} →</b></a>)}</div><section className="research-block localized-note"><p className="eyebrow">{copy.verifiedLabel}</p><h2>{bundle.ui.translatedEdition}</h2><p>{bundle.ui.preserved}</p></section></div></PageShell>}
