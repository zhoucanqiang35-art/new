import Link from "next/link";
import SiteHeader from "./SiteHeader";
import { localeText, localizedPath, type Locale, type SectionKey } from "../data/locales";
import { guideData, guideOrder } from "../data/guides";
import { uiCopy } from "../data/ui-copy";
import { tr } from "../data/translate";
import { faqs } from "../data/faq";

const categories = [
  ["Shoes", "Sneakers, boots and everyday footwear", "https://findspreadsheet.com/shoes/"],
  ["Hoodies & sweaters", "Layers, sweatshirts and knitwear", "https://findspreadsheet.com/hoodies-sweaters/"],
  ["T-shirts", "Tees, tops and everyday basics", "https://findspreadsheet.com/t-shirts/"],
  ["Jackets", "Outerwear and seasonal layers", "https://findspreadsheet.com/jackets/"],
  ["Pants & shorts", "Trousers, joggers and shorts", "https://findspreadsheet.com/pants-shorts/"],
  ["Headwear", "Caps, hats and beanies", "https://findspreadsheet.com/headwear/"],
  ["Accessories", "Bags and small goods", "https://findspreadsheet.com/accessories/"],
  ["Jerseys", "Football and sports jerseys", "https://findspreadsheet.com/jersey/"],
  ["Electronics", "Devices and accessories", "https://findspreadsheet.com/electronics/"],
  ["All products", "Browse the complete index", "https://findspreadsheet.com/AllProducts/"],
];

const workflow = [
  ["01", "Start with the exact product", "Open the relevant FindSpreadsheet category, compare the product photos and keep the original option, colour and size details together."],
  ["02", "Check the order before payment", "Confirm the selected variant, quantity, domestic delivery and any service charge. A translated label is not a substitute for checking the underlying option."],
  ["03", "Inspect warehouse evidence", "Review every available QC angle for shape, colour, measurements, labels, visible damage and consistency with the ordered version."],
  ["04", "Plan the parcel", "Confirm the destination, declared contents, measured weight, packaging changes and route restrictions before consolidation."],
  ["05", "Verify the live shipping quote", "Compare the routes that are actually available for the finished parcel. Fees, limits and estimates can change and are not guaranteed by this guide."],
];

const markets = [
  ["English", "United States · United Kingdom · Canada · Australia", "The primary editorial language and the most direct fit for international search demand."],
  ["German", "Germany · Austria · Switzerland", "A complete German entry route with buyer terminology adapted for the DACH market."],
  ["Western Europe", "France · Spain · Italy · Portugal · Netherlands", "Dedicated language routes give buyers a clearer starting point while factual shipping details remain subject to live checks."],
  ["Nordics", "Sweden · Denmark · Norway · Finland", "Local navigation reduces language friction; route-specific claims are withheld until they can be verified."],
  ["Central & Eastern Europe", "Poland · Czechia · Romania · Hungary · Ukraine", "Country audiences are served through language entry pages without inventing user-share statistics."],
  ["Additional international access", "Greece · Turkey · Russia · Arabic · Chinese · Japanese · Korean", "These routes broaden access while applying the same evidence and outbound-link rules."],
];

function Footer({ locale }: { locale: Locale }) {
  const ui = uiCopy(locale);
  return <footer><div className="section-shell footer-inner"><div><img className="footer-logo" src="/LolobuyLogo.svg" alt="LoloBuy" /></div><p>{ui.footer}</p><div><Link href={localizedPath(locale)}>{ui.home}</Link><a href="https://findspreadsheet.com/" target="_blank" rel="noreferrer">FindSpreadsheet ↗</a></div></div></footer>;
}

export default function SectionPage({ locale, section }: { locale: Locale; section: SectionKey }) {
  const t = localeText[locale];
  const ui = uiCopy(locale);
  const index = ["categories", "workflow", "guides", "markets", "faq", "sources"].indexOf(section);
  const title = section === "faq" ? t.faq : t.nav[index];
  const guideBase = localizedPath(locale, "guide");
  const decks: Record<SectionKey, string> = {
    categories: ui.leads.categories,
    workflow: ui.leads.workflow,
    guides: ui.leads.guides,
    markets: ui.leads.markets,
    faq: t.faqLead,
    sources: ui.leads.sources,
  };
  const faqSchema = section === "faq" ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: tr(locale, question),
      acceptedAnswer: { "@type": "Answer", text: tr(locale, answer) },
    })),
  } : null;

  return <main lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
    {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
    <SiteHeader locale={locale} active={section} suffix={section} />
    <section className="inner-hero section-shell"><p className="eyebrow">{String(index + 1).padStart(2, "0")} / {ui.independent.toUpperCase()}</p><h1>{title}</h1><p>{decks[section]}</p></section>

    {section === "categories" && <section className="section-shell inner-content"><div className="category-grid">{categories.map(([name, text, href], i) => <a className="category-card" href={href} target="_blank" rel="noreferrer" key={name}><span>{String(i + 1).padStart(2, "0")}</span><div><h3>{tr(locale, name)}</h3><p>{tr(locale, text)}</p></div><b>↗</b></a>)}</div><div className="content-note"><strong>{t.nav[0]}</strong><p>{ui.leads.categories}</p></div></section>}

    {section === "workflow" && <section className="section-shell inner-content"><div className="process-list">{workflow.map(([n, heading, text]) => <article key={n}><span>{n}</span><div><h2>{tr(locale, heading)}</h2><p>{tr(locale, text)}</p></div></article>)}</div><div className="content-note"><strong>{t.nav[1]}</strong><p>{ui.leads.workflow}</p></div></section>}

    {section === "guides" && <section className="section-shell inner-content"><div className="guide-grid">{guideOrder.map((slug, i) => { const guide = guideData[slug]; return <Link className="guide-card" href={`${guideBase}/${slug}`} key={slug}><span className="guide-index">0{i + 1}</span><p>{tr(locale, guide.label)}</p><h3>{tr(locale, guide.title)}</h3><div>{tr(locale, guide.deck)}</div><b>{ui.readGuide} →</b></Link>; })}</div></section>}

    {section === "markets" && <section className="section-shell inner-content"><div className="market-list">{markets.map(([tier, names, reason]) => <article key={names}><span>{tr(locale, tier)}</span><h3>{tr(locale, names)}</h3><p>{tr(locale, reason)}</p></article>)}</div><div className="content-note"><strong>{t.nav[3]}</strong><p>{ui.leads.markets}</p></div></section>}

    {section === "faq" && <section className="section-shell inner-content"><div className="faq-list">{faqs.map(([question, answer], i) => <details key={question} open={i === 0}><summary><span>{String(i + 1).padStart(2, "0")}</span>{tr(locale, question)}<b>+</b></summary><p>{tr(locale, answer)}</p></details>)}</div></section>}

    {section === "sources" && <section className="section-shell inner-content"><div className="source-grid source-page-grid"><article><span>01</span><h3>{tr(locale, "Platform materials")}</h3><p>{ui.leads.sources}</p><Link href={localizedPath(locale, "sources/platform-materials")}>{ui.reviewRecord} →</Link></article><article><span>02</span><h3>{tr(locale, "App listing record")}</h3><p>{ui.leads.sources}</p><Link href={localizedPath(locale, "sources/app-listing")}>{ui.reviewRecord} →</Link></article><article><span>03</span><h3>{tr(locale, "FindSpreadsheet index")}</h3><p>{t.intro}</p><a href="https://findspreadsheet.com/" target="_blank" rel="noreferrer">{ui.openDatabase} ↗</a></article></div><div className="content-note"><strong>{t.nav[5]}</strong><p>{ui.leads.sources}</p></div></section>}
    <Footer locale={locale} />
  </main>;
}
