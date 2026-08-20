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
  const reviewed = guide.reviewed ?? "18 Aug 2026";
  const published = guide.published ?? "2026-08-18";
  const articlePath = localizedPath(locale, `guide/${slug}`);
  const articleUrl = new URL(articlePath, "https://lolobuyspreadsheet.de").href;
  const sources = guide.sources ?? [
    "LoloBuy public website — quality inspection, inspection feedback and global shipping statements; reviewed 18 Aug 2026.",
    "Official LoloBuy Google Play listing — cross-border shopping, payment, language, currency and international-shipping description; updated 29 Jul 2026 and reviewed 18 Aug 2026.",
    "Official LoloBuy Apple App Store listing — platform description and version 1.0.2 record; updated 29 Jul 2026 and reviewed 18 Aug 2026.",
  ];
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: tr(locale, guide.title),
    description: tr(locale, guide.deck),
    datePublished: published,
    dateModified: published,
    inLanguage: guide.language ?? locale,
    mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
    author: { "@type": "Organization", name: "FindSpreadsheet Editorial" },
    publisher: { "@type": "Organization", name: "LoloBuy Spreadsheet DE" },
    keywords: guide.keywords?.join(", "),
  };
  return <main lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    <SiteHeader locale={locale} active="guides" suffix={`guide/${slug}`} />
    <article className="article-shell" lang={guide.language ?? locale}>
      <div className="article-hero"><div><p className="eyebrow">{tr(locale, guide.label)} · {tr(locale, `Reviewed ${reviewed}`)}</p><h1>{tr(locale, guide.title)}</h1><p>{tr(locale, guide.deck)}</p></div><aside><span>{tr(locale, "Reading time")}</span><strong>{tr(locale, guide.read)}</strong><span>{tr(locale, "Source status")}</span><strong>{tr(locale, "Official + editorial")}</strong></aside></div>
      <div className="article-grid">
        <aside className="toc"><p>{tr(locale, "IN THIS GUIDE")}</p>{guide.sections.map((section, i) => <a key={section.heading} href={`#section-${i + 1}`}>{String(i + 1).padStart(2, "0")} {tr(locale, section.heading)}</a>)}</aside>
        <div className="article-body">
          <div className="truth-note"><strong>{tr(locale, "Evidence rule")}</strong><p>{tr(locale, "A LoloBuy feature is described as confirmed only when it appears on the public LoloBuy website or in an official LoloBuy app-store listing. Buyer methods are clearly separated from platform claims, and changeable terms must be checked live.")}</p></div>
          {guide.sections.map((section, i) => <section id={`section-${i + 1}`} key={section.heading}><span className="article-number">{String(i + 1).padStart(2, "0")}</span><h2>{tr(locale, section.heading)}</h2>{section.paragraphs.map(p => <p key={p}>{tr(locale, p)}</p>)}{section.checklist && <div className="checklist"><h3>{tr(locale, "Working checklist")}</h3>{section.checklist.map(item => <div key={item}><span>✓</span>{tr(locale, item)}</div>)}</div>}</section>)}
          {guide.related && <nav className="article-related" aria-label="Related LoloBuy guides"><h2>{tr(locale, "Continue with the relevant checks")}</h2>{guide.related.map(item => <Link key={item.slug} href={`${base}/${item.slug}`}>{tr(locale, item.label)} <span>→</span></Link>)}</nav>}
          <div className="article-sources"><h2>{tr(locale, "Primary sources used")}</h2><p>{tr(locale, "This article was checked against the following official public records. Source names and review dates are shown for verification; outbound links are intentionally omitted so this independent site does not redirect visitors to unrelated websites.")}</p><ul>{sources.map(source => <li key={source}>{tr(locale, source)}</li>)}</ul><strong>{tr(locale, `FACT CHECK · REVIEWED ${reviewed.toUpperCase()}`)}</strong></div>
          {guide.cta && <aside className="article-cta"><div><h2>{tr(locale, guide.cta.title)}</h2><p>{tr(locale, guide.cta.text)}</p></div><a href={guide.cta.href} target="_blank" rel="noreferrer">{tr(locale, guide.cta.label)} ↗</a></aside>}
        </div>
      </div>
      <Link className="next-guide" href={`${base}/${next}`}><span>{ui.readGuide}</span><strong>{tr(locale, guideData[next].title)}</strong><b>→</b></Link>
    </article>
    <footer><div className="section-shell footer-inner"><div><img className="footer-logo" src="/LolobuyLogo.svg" alt="LoloBuy" /></div><p>{ui.footer}</p><div><Link href={localizedPath(locale)}>{ui.home}</Link><a href="https://findspreadsheet.com/" target="_blank" rel="noreferrer">FindSpreadsheet ↗</a></div></div></footer>
  </main>;
}
