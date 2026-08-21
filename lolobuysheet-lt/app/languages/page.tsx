import type { Metadata } from "next";
import { PageHero, PageShell } from "../components";
import { languages } from "../data";

export const metadata: Metadata = { title: "Choose Language", description: "Choose a language for LoloBuy Sheet product research across the United States and Europe.", alternates: { canonical: "/languages" } };

export default function LanguagesPage(){return <PageShell><div className="article-wrap"><PageHero eyebrow="24 language routes" title="Choose your language." intro="Start with a localized research overview, then continue into the same source-labelled categories, product details, QC guides and shipping context."/><div className="language-grid">{languages.map((language,index)=><a className="language-card" href={`/languages/${language.code}`} hrefLang={language.code} key={language.code}><span>{String(index+1).padStart(2,"0")} · {language.code.toUpperCase()}</span><h2>{language.name}</h2><p>{language.region}</p><b>Open →</b></a>)}</div></div></PageShell>}
