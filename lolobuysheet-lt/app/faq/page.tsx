import type { Metadata } from "next";
import { PageHero, PageShell } from "../components";
import { faqs, languages } from "../data";

export const metadata: Metadata = { title: "LoloBuy FAQ", description: "Independent answers about LoloBuy spreadsheets, QC photos, prices, storage, shipping weight and priority countries.", alternates: { canonical: "/faq", languages:Object.fromEntries([["x-default","/faq"],...languages.map(language=>[language.code,`/languages/${language.code}/faq`])]) } };

export default function FaqPage(){return <PageShell><div className="article-wrap"><PageHero eyebrow="Question library" title="LoloBuy FAQ, with sources attached." intro="Open any question for a standalone answer, its limitation and a direct route to the source or supporting research."/><div className="faq-directory">{faqs.map((faq,index)=><a className="faq-card faq-card--large" href={`/faq/${faq.slug}`} key={faq.slug}><span>{String(index+1).padStart(2,"0")}</span><div><h2>{faq.question}</h2><p>{faq.short}</p></div><b>→</b></a>)}</div></div></PageShell>}
