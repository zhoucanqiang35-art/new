import Link from "next/link";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-components";
import { contentPages, localeUiCopy } from "./site-data";
import { localizedPage, tx } from "./content-i18n";
import { categoryLabels } from "./category-labels";
import { categoryAdvice } from "./category-advice";

type GuideKind = "shoes" | "hoodies-sweaters";
export const categoryGuidePaths: Record<string, GuideKind> = {
  "guides/shoes-spreadsheet": "shoes",
  "guides/hoodies-spreadsheet": "hoodies-sweaters",
};
export function guideTitle(kind: GuideKind, locale: string) {
 const name = (categoryLabels[locale] || categoryLabels.en)[kind === "shoes" ? 0 : 1];
 return locale === "en" ? (kind === "shoes" ? "LoloBuy Shoes Spreadsheet: Sizing, Finds & QC" : "LoloBuy Hoodies Spreadsheet: Fit, Finds & QC") : `LoloBuy Spreadsheet · ${name}`;
}
export function CategoryGuide({ kind, locale }: { kind: GuideKind; locale: string }) {
 const pre = locale === "en" ? "" : `/${locale}`;
 const nav = (localeUiCopy[locale] || localeUiCopy.en).nav;
 const source = localizedPage(contentPages["guides/qc-photos"], locale);
 const workflow = localizedPage(contentPages["guides/how-lolobuy-works"], locale);
 const indices = kind === "shoes" ? [1,2,3,6,8] : [1,3,4,6,8];
 const sections = [workflow.sections[1], ...indices.map(i => source.sections[i])];
 const name = (categoryLabels[locale] || categoryLabels.en)[kind === "shoes" ? 0 : 1];
 return <main className="elite-site cobalt-site content-site" lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
  <SiteHeader locale={locale}/>
  <section className="content-hero"><div><p>LOLOBUY SPREADSHEET / {name}</p><h1>{guideTitle(kind,locale)}</h1><p>{categoryAdvice[locale]?.[kind] || categoryAdvice.en[kind]}</p><Link href={`${pre}/categories/${kind}`}>{name} ↗</Link></div></section>
  <div className="content-layout"><aside className="content-rail"><span>{tx(locale,"ON THIS PAGE")}</span>{sections.map((s,i)=><a href={`#category-guide-${i+1}`} key={i}><b>{String(i+1).padStart(2,"0")}</b>{s.heading}</a>)}</aside>
   <article className="article-body">{sections.map((s,i)=><section id={`category-guide-${i+1}`} key={i}><span>{String(i+1).padStart(2,"0")}</span><h2>{s.heading}</h2>{s.paragraphs.map((p,j)=><p key={j}>{p}</p>)}{s.bullets && <ul>{s.bullets.map((b,j)=><li key={j}>{b}</li>)}</ul>}</section>)}</article>
  </div>
  <nav className="catalog-guide-links category-related"><Link href={`${pre}/categories/${kind}`}>{name} ↗</Link><Link href={`${pre}/guides/qc-photos`}>{nav[2]} ↗</Link><Link href={`${pre}/guides/shipping`}>{nav[3]} ↗</Link></nav>
  <SiteFooter locale={locale}/>
 </main>;
}
