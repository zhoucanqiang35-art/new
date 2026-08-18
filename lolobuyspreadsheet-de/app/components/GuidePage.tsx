import Link from "next/link";
import { guideData, guideOrder, type GuideSlug } from "../data/guides";
import SiteHeader from "./SiteHeader";
import { localizedPath, type Locale } from "../data/locales";
import { uiCopy } from "../data/ui-copy";
import { tr } from "../data/translate";

export default function GuidePage({ slug, locale }: { slug: GuideSlug; locale: Locale }) {
  const ui = uiCopy(locale);
  const guide = guideData[slug];
  const current = guideOrder.indexOf(slug);
  const next = guideOrder[(current + 1) % guideOrder.length];
  const base = localizedPath(locale, "guide");
  return <main lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
    <SiteHeader locale={locale} active="guides" suffix={`guide/${slug}`} />
    <article className="article-shell">
      <div className="article-hero"><div><p className="eyebrow">{tr(locale, guide.label)} · {tr(locale, "Reviewed 18 Aug 2026")}</p><h1>{tr(locale, guide.title)}</h1><p>{tr(locale, guide.deck)}</p></div><aside><span>{tr(locale, "Reading time")}</span><strong>{tr(locale, guide.read)}</strong><span>{tr(locale, "Source status")}</span><strong>{tr(locale, "Official + editorial")}</strong></aside></div>
      <div className="article-grid">
        <aside className="toc"><p>{tr(locale, "IN THIS GUIDE")}</p>{guide.sections.map((section, i) => <a key={section.heading} href={`#section-${i + 1}`}>{String(i + 1).padStart(2, "0")} {tr(locale, section.heading)}</a>)}</aside>
        <div className="article-body">
          <div className="truth-note"><strong>{tr(locale, "Evidence rule")}</strong><p>{tr(locale, "A LoloBuy feature is described as confirmed only when it appears on the public LoloBuy website or in an official LoloBuy app-store listing. Buyer methods are clearly separated from platform claims, and changeable terms must be checked live.")}</p></div>
          {guide.sections.map((section, i) => <section id={`section-${i + 1}`} key={section.heading}><span className="article-number">{String(i + 1).padStart(2, "0")}</span><h2>{tr(locale, section.heading)}</h2>{section.paragraphs.map(p => <p key={p}>{tr(locale, p)}</p>)}{section.checklist && <div className="checklist"><h3>{tr(locale, "Working checklist")}</h3>{section.checklist.map(item => <div key={item}><span>✓</span>{tr(locale, item)}</div>)}</div>}</section>)}
          <div className="article-sources"><h2>{tr(locale, "Primary sources used")}</h2><p>{tr(locale, "This article was checked against the following official public records. Source names and review dates are shown for verification; outbound links are intentionally omitted so this independent site does not redirect visitors to unrelated websites.")}</p><ul><li>{tr(locale, "LoloBuy public website — quality inspection, inspection feedback and global shipping statements; reviewed 18 Aug 2026.")}</li><li>{tr(locale, "Official LoloBuy Google Play listing — cross-border shopping, payment, language, currency and international-shipping description; updated 29 Jul 2026 and reviewed 18 Aug 2026.")}</li><li>{tr(locale, "Official LoloBuy Apple App Store listing — platform description and version 1.0.2 record; updated 29 Jul 2026 and reviewed 18 Aug 2026.")}</li></ul><strong>{tr(locale, "FACT CHECK · REVIEWED 18 AUG 2026")}</strong></div>
        </div>
      </div>
      <Link className="next-guide" href={`${base}/${next}`}><span>{ui.readGuide}</span><strong>{tr(locale, guideData[next].title)}</strong><b>→</b></Link>
    </article>
    <footer><div className="section-shell footer-inner"><div><img className="footer-logo" src="/LolobuyLogo.svg" alt="LoloBuy" /></div><p>{ui.footer}</p><div><Link href={localizedPath(locale)}>{ui.home}</Link><a href="https://findspreadsheet.com/" target="_blank" rel="noreferrer">FindSpreadsheet ↗</a></div></div></footer>
  </main>;
}
