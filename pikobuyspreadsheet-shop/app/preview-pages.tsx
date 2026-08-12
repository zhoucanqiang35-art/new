"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import {
  IconCamera,
  IconClock,
  IconCrown,
  IconDeviceMobile,
  IconDeviceWatch,
  IconHanger2,
  IconJacket,
  IconPackage,
  IconRulerMeasure,
  IconShirt,
  IconShirtSport,
  IconShoe,
  IconSparkles,
} from "@tabler/icons-react";
import { homeText, LanguageCode, uiText } from "./i18n";
import { ProductShowcase } from "./product-showcase";
import { SiteFooter, SiteHeader } from "./site-chrome";

export type PreviewVariant = "alpine" | "bazaar" | "archive" | "nordic";

const variants: { slug: PreviewVariant; number: string; name: string }[] = [
  { slug: "alpine", number: "01", name: "Alpine" },
  { slug: "bazaar", number: "02", name: "Bazaar" },
  { slug: "archive", number: "03", name: "Archive" },
  { slug: "nordic", number: "04", name: "Nordic" },
];

const categories = [
  { code: "SN", name: "Shoes", note: "Fit · outsole · insole", href: "https://findspreadsheet.com/shoes/", icon: IconShoe },
  { code: "HD", name: "Hoodies", note: "Fabric · print · measurements", href: "https://findspreadsheet.com/hoodies-sweaters/", icon: IconHanger2 },
  { code: "TS", name: "T-Shirts", note: "Chest · length · print", href: "https://findspreadsheet.com/t-shirts/", icon: IconShirt },
  { code: "JK", name: "Jackets", note: "Hardware · lining · insulation", href: "https://findspreadsheet.com/jackets/", icon: IconJacket },
  { code: "PT", name: "Pants / Shorts", note: "Waist · inseam · fabric", href: "https://findspreadsheet.com/pants-shorts/", icon: IconRulerMeasure },
  { code: "HW", name: "Headwear", note: "Shape · brim · embroidery", href: "https://findspreadsheet.com/headwear/", icon: IconCrown },
  { code: "AC", name: "Accessories", note: "Scale · finish · details", href: "https://findspreadsheet.com/accessories/", icon: IconDeviceWatch },
  { code: "JR", name: "Jerseys", note: "Names · patches · sizing", href: "https://findspreadsheet.com/Jersey/", icon: IconShirtSport },
  { code: "EL", name: "Electronics", note: "Model · plug · inspection limits", href: "https://findspreadsheet.com/electronics/", icon: IconDeviceMobile },
  { code: "OT", name: "Other Stuff", note: "Category risk · route eligibility", href: "https://findspreadsheet.com/other-stuff/", icon: IconSparkles },
];

const guides = [
  {
    number: "01",
    tag: "QC PHOTOS",
    icon: IconCamera,
    metric: "VISIBLE EVIDENCE",
    title: "Use warehouse photos to test one decision.",
    copy: "PikoBuy says warehouse receipt includes check-in, photo confirmation and a defect check. That can document visible condition, but it is not a guarantee of authenticity, function or specialist quality.",
    facts: [
      "Match the received color, size, quantity and visible accessories to the submitted order.",
      "Request an extra detailed photo when a measurement, label, seam or surface mark could change the decision.",
      "Treat electronics and other specialist goods cautiously: PikoBuy says professional inspection may be unavailable.",
    ],
    takeaway: "Decision check: what important detail is still impossible to verify from these photos?",
    badge: "Check-in · photos · defect check",
    href: "/guides/qc-photos",
    sourceHref: "https://www.pikobuy.com/protocol/shipping",
  },
  {
    number: "02",
    tag: "SHIPPING",
    icon: IconPackage,
    metric: "KG + L×W×H",
    title: "Build the estimate from parcel inputs.",
    copy: "The official calculator asks for destination, product type, weight and three dimensions. PikoBuy also says routes can differ in delivery time and billing method, so the product price is not the landed cost.",
    facts: [
      "Use packed weight and dimensions rather than relying only on the seller's item weight.",
      "Compare live route eligibility for the destination and product type before submitting the parcel.",
      "Review restrictions, billing method, insurance terms and the current checkout total together.",
    ],
    takeaway: "Risk check: PikoBuy says international parcels use third-party carriers and customs or delay risks remain.",
    badge: "Destination · type · kg · dimensions",
    href: "/guides/shipping",
    sourceHref: "https://www.pikobuy.com/shipping-cost",
  },
  {
    number: "03",
    tag: "RETURNS",
    icon: IconClock,
    metric: "120-HOUR CLOCK",
    title: "Start the return check at warehouse stock-in.",
    copy: "PikoBuy's published policy says the request window begins from the next hour after an order becomes “Warehoused” and runs for five days, or 120 hours. Timing alone does not guarantee acceptance.",
    facts: [
      "Confirm the seller offers a return guarantee and that the item remains marketable and eligible.",
      "Keep tags, seals, accessories and required packaging intact; some categories have special return standards.",
      "For an unconditional return, the published formula is both domestic shipping legs plus a ¥5 service fee.",
    ],
    takeaway: "Acceptance check: PikoBuy says it can return an item only when the seller agrees.",
    badge: "Next hour after Warehoused · 120h",
    href: "/guides/returns",
    sourceHref: "https://www.pikobuy.com/protocol/returns",
  },
];

function Search({ query, setQuery, submit, placeholder, button }: { query: string; setQuery: (value: string) => void; submit: (event: FormEvent<HTMLFormElement>) => void; placeholder: string; button: string }) {
  return (
    <form className="preview-search" onSubmit={submit}>
      <span aria-hidden="true">⌕</span>
      <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={placeholder} aria-label={placeholder} />
      <button type="submit">{button}<i>↗</i></button>
    </form>
  );
}

function AlpineHero({ words, query, setQuery, submit }: HeroProps) {
  return <section className="variant-hero alpine-hero" id="top">
    <div className="hero-copy"><p className="preview-eyebrow">{words.eyebrow}</p><h1>{words.line1}<br />{words.line2}<br /><em>{words.line3}</em></h1><p>{words.intro}</p><Search query={query} setQuery={setQuery} submit={submit} placeholder={words.search} button={words.searchButton} /></div>
    <aside className="alpine-index"><span>INDEX / 2026</span><strong>10 focused categories.<br />3 buyer checks.<br />1 clearer method.</strong><div><b>120H</b><small>PikoBuy’s currently stated eligible return-request window after warehousing*</small></div><a href="https://www.pikobuy.com/protocol/returns" target="_blank" rel="noopener noreferrer">Verify source ↗</a></aside>
  </section>;
}

function BazaarHero({ words, query, setQuery, submit, language }: HeroProps) {
  const suffix = language === "en" ? "" : `?lang=${language}`;
  return <section className="variant-hero bazaar-hero" id="top">
    <a className="pop-sticker sticker-one" href={`/qc-method${suffix}`} aria-label="Open the full QC method">QC FIRST</a>
    <a className="pop-sticker sticker-two" href={`/finds${suffix}`} aria-label="Browse all 10 product categories">10 CATEGORIES</a>
    <a className="pop-sticker sticker-three" href={`/sources${suffix}`} aria-label="Open the source and link checking policy">LINK CHECK</a>
    <div className="hero-copy"><p className="preview-eyebrow">{words.eyebrow}</p><p className="hero-tagline">Find it. Check it. Then decide.</p><h1>PikoBuy Spreadsheet 2026:<br /><em>Product Finds, QC</em><br />&amp; Shipping Guides</h1><p>{words.intro}</p><Search query={query} setQuery={setQuery} submit={submit} placeholder={words.search} button={words.searchButton} /></div>
    <a className="pop-card card-shoe" href="https://findspreadsheet.com/shoes/" target="_blank" rel="noopener noreferrer" aria-label="Open footwear finds on FindSpreadsheet"><span>SN</span><strong>Footwear finds</strong><small>Open shoe category →</small></a>
    <a className="pop-card card-qc" href={`/guides/qc-photos${suffix}`} aria-label="Open the full QC photo guide"><span>QC</span><strong>Photo checks</strong><small>Read the full guide →</small></a>
  </section>;
}

function ArchiveHero({ words, query, setQuery, submit }: HeroProps) {
  return <section className="variant-hero archive-hero" id="top">
    <div className="archive-issue"><span>THE INDEPENDENT BUYER’S EDIT</span><small>ISSUE NO. 01 · AUGUST 2026</small></div>
    <div className="archive-title"><p className="preview-eyebrow">{words.eyebrow}</p><h1>{words.line1}<br /><em>{words.line2}</em><br />{words.line3}</h1></div>
    <div className="archive-art" aria-hidden="true"><i /><b>QC</b><span>LOOK<br />CLOSER</span></div>
    <div className="archive-copy"><p>{words.intro}</p><Search query={query} setQuery={setQuery} submit={submit} placeholder={words.search} button={words.searchButton} /><small>Editorial research · Official sources cited · Independent from PikoBuy</small></div>
  </section>;
}

function NordicHero({ words, query, setQuery, submit }: HeroProps) {
  return <section className="variant-hero nordic-hero" id="top">
    <div className="nordic-status"><span>RESEARCH STATUS</span><b><i /> Sources reviewed</b><small>Last policy check · 06 Aug 2026</small></div>
    <div className="hero-copy"><p className="preview-eyebrow">{words.eyebrow}</p><h1>{words.line1} {words.line2} {words.line3}</h1><p>{words.intro}</p><Search query={query} setQuery={setQuery} submit={submit} placeholder={words.search} button={words.searchButton} /></div>
    <div className="nordic-metrics"><article><span>01</span><b>Browse</b><small>10 focused categories</small></article><article><span>02</span><b>Verify</b><small>Category-specific QC</small></article><article><span>03</span><b>Plan</b><small>Shipping and return context</small></article></div>
  </section>;
}

type HeroProps = { words: typeof homeText.en; query: string; setQuery: (value: string) => void; submit: (event: FormEvent<HTMLFormElement>) => void; language: LanguageCode };

export default function PreviewPage({ variant, standalone = false, language = "en" }: { variant: PreviewVariant; standalone?: boolean; language?: LanguageCode }) {
  const [query, setQuery] = useState("");
  const words = homeText[language];
  const common = uiText[language];
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const cleaned = query.trim();
    if (!cleaned) return;
    window.location.assign(`https://findspreadsheet.com/search.html?keywords=${encodeURIComponent(cleaned)}&channelid=2`);
  };
  const heroProps = { words, query, setQuery, submit, language };

  return (
    <main className={`preview-page preview-${variant}${standalone ? " selected-site" : ""}`}>
      {!standalone && <aside className="preview-switcher" aria-label="Switch design preview">
        <Link className="switcher-back" href="/">← Selected design</Link>
        <div>{variants.map((item) => <a href={`/preview/${item.slug}`} className={variant === item.slug ? "active" : ""} key={item.slug}><span>{item.number}</span>{item.name}</a>)}</div>
        <small>Archived design comparison</small>
      </aside>}

      <div className="preview-shell">
        <SiteHeader language={language} />

        {variant === "alpine" && <AlpineHero {...heroProps} />}
        {variant === "bazaar" && <BazaarHero {...heroProps} />}
        {variant === "archive" && <ArchiveHero {...heroProps} />}
        {variant === "nordic" && <NordicHero {...heroProps} />}

        <section className="category-section" id="categories">
          <header><div><span>{words.categoryKicker}</span><h2>{words.categoryTitle}</h2></div><p>{words.categoryCopy}</p></header>
          <div className="preview-category-grid">
            {categories.map((item, index) => {
              const CategoryIcon = item.icon;
              return <a href={item.href} target="_blank" rel="noopener noreferrer" className="preview-category" key={item.code} aria-label={`Browse ${item.name} on FindSpreadsheet`}><span className="category-number">{String(index + 1).padStart(2, "0")}</span><b>{item.code}</b><span className="category-icon" aria-hidden="true"><CategoryIcon size={56} stroke={1.55} /></span><div><strong>{item.name}</strong><small>{item.note}</small></div><i>↗</i></a>;
            })}
          </div>
          <nav className="category-guide-links" aria-label="Independent category research guides">
            <span>Independent QC guides:</span>
            <a href="/categories/shoes">Shoes</a>
            <a href="/categories/hoodies">Hoodies</a>
            <a href="/categories/jerseys">Jerseys</a>
            <a href="/categories/accessories">Accessories</a>
            <a href="/categories/electronics">Electronics</a>
            <a href={`/categories${language === "en" ? "" : `?lang=${language}`}`}>View all 10 category guides</a>
          </nav>
        </section>

        <section className="product-detail-section" id="products">
          <header>
            <div><span>02 / VERIFIED PRODUCT DETAILS</span><h2>Real rows, clearer product context.</h2></div>
            <div><p>Each card uses the name, first image, item ID and source price recorded on the matching FindSpreadsheet page. Click anywhere on a card to open that exact main-site product page.</p><small>USD reference conversion: 1 CNY = $0.14817 on 06 Aug 2026. Options, exchange rates and seller prices can change.</small></div>
          </header>
          <ProductShowcase compact />
          <a className="all-products-link" href="https://findspreadsheet.com/AllProducts/" target="_blank" rel="noopener noreferrer">Browse all products on FindSpreadsheet ↗</a>
        </section>

        <section className="method-section" id="method">
          <div className="method-heading"><span>{words.methodKicker}</span><h2>{words.methodTitle}</h2><p>{words.methodCopy}</p><a className="inline-full-link" href={`/qc-method${language === "en" ? "" : `?lang=${language}`}`}>{common.readFull} ↗</a></div>
          <ol>
            <li><a href={`/qc-method${language === "en" ? "" : `?lang=${language}`}#listing`}><span>01</span><div><small>ORIGINAL LISTING</small><strong>Does the live source still match the row?</strong><p>PikoBuy tells buyers to confirm the exact variant, color and size and to save product or store details. Reopen the seller page, compare the submitted option and record what you actually verified.</p><b>Open the source-link method ↗</b></div></a></li>
            <li><a href={`/guides/qc-photos${language === "en" ? "" : `?lang=${language}`}`}><span>02</span><div><small>WAREHOUSE EVIDENCE</small><strong>Do the photographs answer the product-specific risk?</strong><p>PikoBuy says warehouse staff check items in, photograph them and look for visible defects. Its shipping policy also allows extra detailed photos, while warning that specialist goods may not receive professional inspection.</p><b>Open the complete QC photo guide ↗</b></div></a></li>
            <li><a href={`/guides/shipping${language === "en" ? "" : `?lang=${language}`}`}><span>03</span><div><small>LANDED CONTEXT</small><strong>Does the product still make sense as a parcel?</strong><p>The official estimator asks for destination, product type, weight and three dimensions. Compare live routes only after accounting for packaging, restrictions, current freight and the fee wording shown at checkout.</p><b>Open the shipping and landed-cost guide ↗</b></div></a></li>
          </ol>
        </section>

        <section className="guide-section" id="guides">
          <header>
            <div><span>{words.guideKicker}</span><h2>{words.guideTitle}</h2></div>
            <p>Three checks that can change the order before international shipping. Each summary separates PikoBuy&apos;s published rules from the practical question a buyer still needs to answer.</p>
          </header>
          <div className="preview-guide-grid">{guides.map((guide) => {
            const GuideIcon = guide.icon;
            return <article key={guide.number}>
              <div className="guide-topline"><span>{guide.number}</span><small>{guide.tag}</small></div>
              <div className="guide-symbol" aria-hidden="true"><GuideIcon size={42} stroke={1.6} /></div>
              <span className="guide-metric">{guide.metric}</span>
              <h3>{guide.title}</h3>
              <p>{guide.copy}</p>
              <ul className="guide-checklist">{guide.facts.map((fact) => <li key={fact}>{fact}</li>)}</ul>
              <p className="guide-takeaway">{guide.takeaway}</p>
              <footer>
                <span>{guide.badge}</span>
                <div><a href={guide.sourceHref} target="_blank" rel="noopener noreferrer">Official source ↗</a><a href={`${guide.href}${language === "en" ? "" : `?lang=${language}`}`}>{common.readFull} ↗</a></div>
              </footer>
            </article>;
          })}</div>
        </section>

        <section className="latest-update-section" aria-labelledby="latest-update-title">
          <div><span>04 / LATEST UPDATE</span><small>Published · 11 August 2026</small></div>
          <h2 id="latest-update-title">PikoBuy warehouse consolidation, without the one-box shortcut.</h2>
          <p>The new source-checked guide shows how to finish QC, protect eligible returns, compare consolidated and split parcel plans, choose packing by failure risk and use credible packed inputs.</p>
          <footer><a href={`/seo-articles/pikobuy-warehouse-consolidation-guide${language === "en" ? "" : `?lang=${language}`}`}>Read the new guide ↗</a><a href={`/updates${language === "en" ? "" : `?lang=${language}`}`}>View all updates ↗</a></footer>
        </section>

        <section className="source-section" id="sources">
          <span>{common.checked}</span><div><h2>{words.sourceTitle}</h2><p>{words.sourceCopy}</p></div><a href={`/sources${language === "en" ? "" : `?lang=${language}`}`}>Open evidence page ↗</a>
        </section>

        <SiteFooter language={language} />
      </div>
    </main>
  );
}
