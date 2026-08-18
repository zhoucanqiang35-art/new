import Link from "next/link";
import { localeText, localizedPath, type Locale } from "../data/locales";
import SiteHeader from "./SiteHeader";
import { uiCopy } from "../data/ui-copy";
import { tr } from "../data/translate";
import { faqs } from "../data/faq";
import { guideData, guideOrder } from "../data/guides";

const categories = [
  ["Shoes", "Sneakers & footwear", "https://findspreadsheet.com/shoes/", "01"],
  ["Hoodies", "Sweaters & layers", "https://findspreadsheet.com/hoodies-sweaters/", "02"],
  ["T-Shirts", "Tees & basics", "https://findspreadsheet.com/t-shirts/", "03"],
  ["Jackets", "Outerwear", "https://findspreadsheet.com/jackets/", "04"],
  ["Pants", "Shorts & trousers", "https://findspreadsheet.com/pants-shorts/", "05"],
  ["Headwear", "Caps & hats", "https://findspreadsheet.com/headwear/", "06"],
  ["Accessories", "Bags & small goods", "https://findspreadsheet.com/accessories/", "07"],
  ["Jerseys", "Football & sport", "https://findspreadsheet.com/jersey/", "08"],
  ["Electronics", "Devices & extras", "https://findspreadsheet.com/electronics/", "09"],
  ["All finds", "Browse the full index", "https://findspreadsheet.com/AllProducts/", "10"],
];

const englishSteps = [
  ["01", "Find", "Use FindSpreadsheet to locate a product and keep the original product details visible."],
  ["02", "Submit", "Review translated options, size, colour and price before payment."],
  ["03", "Inspect", "Use warehouse QC images to check the item that was actually received."],
  ["04", "Consolidate", "Confirm weight, packaging choices and the parcel address."],
  ["05", "Ship", "Compare live routes and track the parcel through final delivery."],
];

const markets = [
  ["Tier 1", "United States · United Kingdom · Canada · Australia", "English-first content and the strongest language fit."],
  ["Tier 1", "Germany · Austria · Switzerland", "Full German entry point and German buyer guidance."],
  ["Tier 2", "France · Italy · Spain · Portugal", "Dedicated language routes for major Western European audiences."],
  ["Tier 2", "Nordics · Benelux · Central & Eastern Europe", "Local-language entry routes with shared evidence standards."],
];

export default function SiteHome({ locale }: { locale: Locale }) {
  const t = localeText[locale];
  const ui = uiCopy(locale);
  const guideBase = localizedPath(locale, "guide");
  const steps = englishSteps;
  const faq = faqs.slice(0, 8);
  return <main lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
    <SiteHeader locale={locale} />

    <section className="hero section-shell">
      <div className="hero-copy"><p className="eyebrow">{tr(locale, "Independent page")} · 2026</p><h1>{t.title1}<br/><em>{t.title2}</em></h1><p className="hero-intro">{t.intro}</p>
        <form className="search-box" action="https://findspreadsheet.com/search.html" method="get" target="_blank"><label htmlFor="product-search">{t.search}</label><div><input id="product-search" name="keywords" placeholder={ui.searchPlaceholder}/><input type="hidden" name="channelid" value="2"/><button type="submit">{ui.searchButton} ↗</button></div></form>
        <a className="primary-cta" href="https://findspreadsheet.com/AllProducts/" target="_blank" rel="noreferrer">{t.browse} <span>↗</span></a>
      </div>
      <aside className="evidence-card"><div className="card-topline"><span>{tr(locale, "Evidence rule")}</span><strong>{tr(locale, "Reviewed 18 Aug 2026")}</strong></div><h2>{tr(locale, "What public records confirm")}</h2><p>{tr(locale, "Public platform materials were reviewed for editorial accuracy. External source pages are intentionally not linked; routes, charges and delivery estimates must still be checked live before every parcel.")}</p><div className="source-records"><Link href={localizedPath(locale, "sources/platform-materials")}>{tr(locale, "Platform materials")} →</Link><Link href={localizedPath(locale, "sources/app-listing")}>{tr(locale, "App listing record")} →</Link></div><div className="evidence-stamp"><span>{tr(locale, "Outbound source link")}</span><strong>{tr(locale, "Not provided")}</strong></div></aside>
    </section>

    <section id="categories" className="section-shell block-section"><div className="section-heading"><div><p className="section-number">01 / {t.nav[0]}</p><h2>{t.nav[0]}</h2></div><p>{ui.leads.categories}</p></div><div className="category-grid">{categories.map(([name, desc, href, n]) => <a className="category-card" href={href} target="_blank" rel="noreferrer" key={name}><span>{n}</span><div><h3>{tr(locale, name)}</h3><p>{tr(locale, desc)}</p></div><b>↗</b></a>)}</div></section>

    <section id="workflow" className="workflow-wrap"><div className="section-shell block-section"><div className="section-heading light"><div><p className="section-number">02 / {t.nav[1]}</p><h2>{t.nav[1]}</h2></div><p>{ui.leads.workflow}</p></div><div className="steps">{steps.map(([n, title, text]) => <article key={n}><span>{n}</span><h3>{tr(locale, title)}</h3><p>{tr(locale, text)}</p></article>)}</div></div></section>

    <section id="guides" className="section-shell block-section"><div className="section-heading"><div><p className="section-number">03 / {t.nav[2]}</p><h2>{t.nav[2]}</h2></div><p>{ui.leads.guides}</p></div><div className="guide-grid">{guideOrder.map((slug, i) => { const guide = guideData[slug]; return <Link href={`${guideBase}/${slug}`} className="guide-card" key={slug}><span className="guide-index">0{i + 1}</span><p>{tr(locale, guide.label)}</p><h3>{tr(locale, guide.title)}</h3><div>{tr(locale, guide.deck)}</div><b>{ui.readGuide} →</b></Link>; })}</div></section>

    <section id="markets" className="market-wrap"><div className="section-shell block-section"><div className="section-heading"><div><p className="section-number">04 / {t.nav[3]}</p><h2>{t.nav[3]}</h2></div><p>{ui.leads.markets}</p></div><div className="market-list">{markets.map(([tier, names, reason]) => <article key={names}><span>{tr(locale, tier)}</span><h3>{tr(locale, names)}</h3><p>{tr(locale, reason)}</p></article>)}</div><p className="market-note">{ui.leads.markets}</p></div></section>

    <section id="faq" className="section-shell block-section faq-section"><div className="section-heading"><div><p className="section-number">05 / FAQ</p><h2>{t.faq}</h2></div><p>{t.faqLead}</p></div><div className="faq-list">{faq.map(([question, answer], i) => <details key={question} open={i === 0}><summary><span>{String(i + 1).padStart(2, "0")}</span>{tr(locale, question)}<b>+</b></summary><p>{tr(locale, answer)}</p></details>)}</div></section>

    <section id="sources" className="section-shell block-section source-section"><div className="section-heading"><div><p className="section-number">06 / {t.nav[5]}</p><h2>{t.nav[5]}</h2></div><p>{ui.leads.sources}</p></div><div className="source-grid"><article><span>01</span><h3>{tr(locale, "Platform materials")}</h3><p>{ui.leads.sources}</p><Link href={localizedPath(locale, "sources/platform-materials")}>{ui.reviewRecord} →</Link></article><article><span>02</span><h3>{tr(locale, "App listing record")}</h3><p>{ui.leads.sources}</p><Link href={localizedPath(locale, "sources/app-listing")}>{ui.reviewRecord} →</Link></article><article><span>03</span><h3>{tr(locale, "FindSpreadsheet index")}</h3><p>{t.intro}</p><a href="https://findspreadsheet.com/" target="_blank" rel="noreferrer">{ui.openDatabase} ↗</a></article></div></section>

    <footer><div className="section-shell footer-inner"><div><img className="footer-logo" src="/LolobuyLogo.svg" alt="LoloBuy" /></div><p>{ui.footer}</p><div><Link href={localizedPath(locale, "faq")}>FAQ</Link><a href="https://findspreadsheet.com/" target="_blank" rel="noreferrer">FindSpreadsheet ↗</a></div></div></footer>
  </main>;
}
