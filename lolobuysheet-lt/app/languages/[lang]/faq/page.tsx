import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero, PageShell } from "../../../components";
import { languages } from "../../../data";
import { localeCopy } from "../../../localeCopy";
import { localizedContent } from "../../../localizedContent";

export function generateStaticParams(){return languages.map(language=>({lang:language.code}));}
export async function generateMetadata({params}:{params:Promise<{lang:string}>}):Promise<Metadata>{const {lang}=await params;const copy=localeCopy[lang];if(!copy)return{};return{title:copy.faqTitle,description:copy.faqIntro,alternates:{canonical:`/languages/${lang}/faq`,languages:Object.fromEntries([["x-default","/faq"],...languages.map(language=>[language.code,`/languages/${language.code}/faq`])])}}}

export default async function LocalizedFaq({params}:{params:Promise<{lang:string}>}){const {lang}=await params;const language=languages.find(item=>item.code===lang);const copy=localeCopy[lang];const bundle=localizedContent[lang];if(!language||!copy||!bundle)notFound();return <PageShell lang={lang}><div className="article-wrap"><PageHero lang={lang} eyebrow={`${language.name} · FAQ`} title={copy.faqTitle} intro={copy.faqIntro}/><div className="faq-directory">{bundle.faqs.map((faq,index)=><a className="faq-card faq-card--large" href={`/languages/${lang}/faq/${faq.slug}`} key={faq.slug}><span>{String(index+1).padStart(2,"0")}</span><div><h2>{faq.question}</h2><p>{faq.short}</p></div><b>→</b></a>)}</div></div></PageShell>}
