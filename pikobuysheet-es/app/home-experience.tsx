"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "./site-chrome";
import { getInterfaceLabels, getLocaleCopy, getMainSiteCategories, localPath } from "./site-config";
import { keywordPageCards } from "./keyword-page-cards";

type FeaturedProduct = {
  name: string;
  category: string;
  sourcePrice: string;
  usd: string;
  href: string;
  image: string;
  views: number;
  badge: "Latest" | "Popular";
};

const fallbackProducts: FeaturedProduct[] = [
  {
    name: "Gallery Short",
    category: "Pants / Shorts",
    sourcePrice: "¥145",
    usd: "$20.20",
    href: "https://findspreadsheet.com/pants-shorts/gallery-short-3003.html",
    image: "https://findspreadsheet.com/uploads/allimg/20260319/1-260319153159600.webp",
    views: 7298,
    badge: "Latest",
  },
  {
    name: "High quality Burberry Jacket",
    category: "Jackets",
    sourcePrice: "¥148",
    usd: "$20.60",
    href: "https://findspreadsheet.com/jackets/high-quality-burberry-jacket-3131.html",
    image: "https://findspreadsheet.com/uploads/allimg/20260401/1-260401093931395.webp",
    views: 3131,
    badge: "Latest",
  },
  {
    name: "sock (37 colores TOP)",
    category: "Other Stuff",
    sourcePrice: "¥20",
    usd: "$2.79",
    href: "https://findspreadsheet.com/other-stuff/sock-37-colores-top-3001.html",
    image: "https://findspreadsheet.com/uploads/allimg/20260319/1-260319152Z2T0.webp",
    views: 15900,
    badge: "Latest",
  },
  {
    name: "Dior T-shirt Hoodie",
    category: "Hoodies",
    sourcePrice: "¥85",
    usd: "$11.84",
    href: "https://findspreadsheet.com/hoodies-sweaters/dior-t-shirthoodie-39-style-top-3000.html",
    image: "https://findspreadsheet.com/uploads/allimg/20260319/1-260319152I0Q1.webp",
    views: 5446,
    badge: "Latest",
  },
  {
    name: "NIKE Phantom GX Elite AG-PRO",
    category: "Shoes",
    sourcePrice: "¥272",
    usd: "$37.88",
    href: "https://findspreadsheet.com/shoes/nike-phantom-gx-elite-ag-pro-271.html",
    image: "https://findspreadsheet.com/uploads/allimg/20260126/1-26012614320C94.webp",
    views: 17998,
    badge: "Popular",
  },
  {
    name: "GCDS Logo Band Hoodies",
    category: "Hoodies",
    sourcePrice: "¥248",
    usd: "$34.54",
    href: "https://findspreadsheet.com/hoodies-sweaters/gcds-logo-band-hoodiessweaters-40-styles-1523.html",
    image: "https://findspreadsheet.com/uploads/allimg/20260211/1-2602110U444610.webp",
    views: 17994,
    badge: "Popular",
  },
];

type CategoryIconName = "shoes" | "hoodie" | "shirt" | "jacket" | "shorts" | "cap" | "bag" | "jersey" | "headphones" | "box";

function CategoryIcon({ name }: { name: CategoryIconName }) {
  const paths: Record<CategoryIconName, ReactNode> = {
    shoes: <><path d="M4 15.5c2.8 0 4.8-.8 6.2-2.4l1.2-1.4 2.2 2.1c1.2 1.1 2.8 1.7 4.4 1.7h2v3.2H5.6A2.6 2.6 0 0 1 3 16.1v-.6h1Z"/><path d="M7.5 15.2 9 17m2.1-3.3 1.4 1.8"/></>,
    hoodie: <><path d="M8.2 5.2A5 5 0 0 1 12 3.5a5 5 0 0 1 3.8 1.7l3 2.1-2.2 4v8.2H7.4v-8.2l-2.2-4 3-2.1Z"/><path d="M9 5.2c.4 2 1.4 3 3 3s2.6-1 3-3M9.5 14h5"/></>,
    shirt: <><path d="m8 4-5 3 2 4 3-1v10h8V10l3 1 2-4-5-3c-.7 1.3-2 2-4 2S8.7 5.3 8 4Z"/></>,
    jacket: <><path d="m9 4-5 3 2 5 2-1v9h8v-9l2 1 2-5-5-3-3 3-3-3Z"/><path d="M12 7v13M9 4v3m6-3v3M9.5 13h1m3 0h1"/></>,
    shorts: <><path d="M6 4h12l1 7-2 9-5-5-5 5-2-9 1-7Z"/><path d="M6 8h12M12 8v7"/></>,
    cap: <><path d="M5 13a7 7 0 0 1 14 0H5Z"/><path d="M12 6v7m0 0c4 0 7.2.7 9 2-3.5 1.2-6.7 1.3-9.5.4"/></>,
    bag: <><path d="M5 8h14l1 12H4L5 8Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/></>,
    jersey: <><path d="m8 4-5 3 2 4 3-1v10h8V10l3 1 2-4-5-3c-.8 1-2.1 1.5-4 1.5S8.8 5 8 4Z"/><path d="M10 10.5h4M12 9v5"/></>,
    headphones: <><path d="M4 13v-2a8 8 0 0 1 16 0v2"/><path d="M4 13h3v7H5a2 2 0 0 1-2-2v-3a2 2 0 0 1 1-2Zm16 0h-3v7h2a2 2 0 0 0 2-2v-3a2 2 0 0 0-1-2Z"/></>,
    box: <><path d="m4 7 8-4 8 4-8 4-8-4Z"/><path d="m4 7 8 4 8-4v10l-8 4-8-4V7Zm8 4v10"/></>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}

function Icon({ name }: { name: "search" | "filter" | "globe" | "arrow" | "check" | "grid" | "book" }) {
  const paths = {
    search: <><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></>,
    filter: <><path d="M4 7h16M7 12h10M10 17h4"/></>,
    globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></>,
    arrow: <><path d="M5 12h14M14 7l5 5-5 5"/></>,
    check: <><circle cx="12" cy="12" r="9"/><path d="m8 12 2.5 2.5L16 9"/></>,
    grid: <><rect x="4" y="4" width="6" height="6"/><rect x="14" y="4" width="6" height="6"/><rect x="4" y="14" width="6" height="6"/><rect x="14" y="14" width="6" height="6"/></>,
    book: <><path d="M4 5.5A3.5 3.5 0 0 1 7.5 2H11v17H7.5A3.5 3.5 0 0 0 4 22V5.5ZM20 5.5A3.5 3.5 0 0 0 16.5 2H13v17h3.5A3.5 3.5 0 0 1 20 22V5.5Z"/></>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}

export default function HomeExperience({ locale = "en" }: { locale?: string }) {
  const [products, setProducts] = useState<FeaturedProduct[]>(fallbackProducts);
  const copy = getLocaleCopy(locale);
  const labels = getInterfaceLabels(locale);
  const categories = getMainSiteCategories(locale);
  const isEnglish = locale === "en";
  const local = (english: string, translated = copy.homeIntro) => isEnglish ? english : translated;
  const productCategory = (name: string) => {
    const sourceNames = ["Shoes", "Hoodies", "T-Shirts", "Jackets", "Pants / Shorts", "Headwear", "Accessories", "Jersey", "Electronics", "Other Stuff"];
    const index = sourceNames.indexOf(name);
    return index >= 0 ? categories[index].name : name;
  };

  useEffect(() => {
    let active = true;
    const refreshProducts = async () => {
      try {
        const response = await fetch("/api/featured-products");
        if (!response.ok) return;
        const data = await response.json() as { products?: FeaturedProduct[] };
        if (active && data.products?.length) setProducts(data.products);
      } catch {
        // Keep the last verified main-site records visible when the feed is temporarily unavailable.
      }
    };
    refreshProducts();
    const timer = window.setInterval(refreshProducts, 30 * 60 * 1000);
    return () => { active = false; window.clearInterval(timer); };
  }, []);

  return (
    <main className="home-page">
      <SiteHeader locale={locale} active="home" />

      <section className="hero" id="top">
        <div className="hero-glow" />
        <div className="hero-copy">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1>{copy.homeTitle}</h1>
          <p className="lede">{copy.homeIntro}</p>
          <div className="hero-actions">
            <a className="button primary" href={localPath(locale, "spreadsheet")}>{copy.browse} <Icon name="arrow" /></a>
            <a className="button secondary" href={localPath(locale, "method")}>{copy.research} <Icon name="arrow" /></a>
          </div>
          <p className="independent-note"><span>i</span> {copy.independent}</p>
        </div>

        <div className="product-showcase" id="spreadsheet">
          <header className="showcase-header">
            <div>
              <p><i /> {labels.liveFeed}</p>
              <h2>{labels.latestPopular}</h2>
            </div>
            <a href="https://findspreadsheet.com/AllProducts/" target="_blank" rel="noopener noreferrer">{labels.viewAll} <Icon name="arrow" /></a>
          </header>
          <div className="showcase-meta">
            <span>{labels.verticalAutoplay}</span>
            <span>{labels.refreshes}</span>
          </div>
          <div className="product-reel" aria-label="Latest and popular products from FindsSpreadsheet">
            <div className="product-track">
              {[false, true].map((duplicate) => (
                <div className="product-reel-group" key={duplicate ? "duplicate" : "primary"} aria-hidden={duplicate || undefined}>
                  {products.map((item) => (
                    <a className="product-tile" key={`${duplicate ? "copy" : "item"}-${item.href}`} href={item.href} target="_blank" rel="noopener noreferrer" tabIndex={duplicate ? -1 : undefined}>
                      <img src={item.image} alt="" loading={duplicate ? "lazy" : "eager"} referrerPolicy="no-referrer" />
                      <span className="product-tile-copy">
                        <small><b>{isEnglish ? item.badge : labels.sourceChecked}</b>{productCategory(item.category)}</small>
                        <strong>{item.name}</strong>
                        <em>{item.views.toLocaleString(locale)} · {copy.nav.spreadsheet}</em>
                      </span>
                      <span className="product-tile-price"><strong>{item.usd}</strong><small>{item.sourcePrice}</small></span>
                      <span className="product-tile-arrow">↗</span>
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <p className="showcase-note">{local("Product names, images, source prices and popularity signals come from FindsSpreadsheet. USD values are approximate and may change at checkout.")}</p>
        </div>
      </section>

      <section className="trust-strip" aria-label={labels.evidence}>
        <a href={localPath(locale, "guides")}><Icon name="check"/><b>{isEnglish ? "Official process checked" : copy.nav.guides}</b></a>
        <a href={localPath(locale, "spreadsheet")}><Icon name="search"/><b>{isEnglish ? "Main-site feed refreshed" : copy.nav.spreadsheet}</b></a>
        <a href={`${localPath(locale, "method")}#coverage`}><Icon name="globe"/><b>{isEnglish ? "Europe & North America" : copy.nativeName}</b></a>
        <a href={localPath(locale, "categories")}><Icon name="grid"/><b>{isEnglish ? "10 direct categories" : `10 · ${copy.nav.categories}`}</b></a>
        <a href={`${localPath(locale, "seo-articles")}/pikobuy-qc-shipping-return-guide`}><Icon name="book"/><b>{isEnglish ? "QC-ready notes" : copy.nav["seo-articles"]}</b></a>
      </section>

      <section className="definition-section" id="what-is-pikobuy-spreadsheet">
        <div className="definition-number">01</div>
        <div className="definition-copy">
          <p>{local("WHAT IS THE PIKOBUY SPREADSHEET?", copy.nav.spreadsheet)}</p>
          <h2>{local("What is the PikoBuy spreadsheet?", copy.homeTitle)}</h2>
          <p>{local("A PikoBuy spreadsheet is a product-discovery list that helps shoppers move from a category or find to the original source page. This site adds the decision layer the raw row cannot provide: the exact destination, category-specific QC questions, official process notes, and a dated review trail. It does not guarantee stock, seller reliability, product quality, customs outcomes, or return approval.")}</p>
          <div className="definition-actions">
            <Link href={localPath(locale, "spreadsheet")}>{local("See how the spreadsheet is reviewed", copy.nav.spreadsheet)} <Icon name="arrow" /></Link>
            <Link href="/how-to-use-pikobuy-spreadsheet">{local("Follow the complete workflow", copy.nav.guides)} <Icon name="arrow" /></Link>
          </div>
        </div>
        <aside className="definition-facts">
          <b>{local("A useful row answers four questions", labels.evidence)}</b>
          <ol>
            <li><span>01</span>{local("What is the exact product or category source?", copy.nav.spreadsheet)}</li>
            <li><span>02</span>{local("Which size, variant and visible details must be checked?", copy.nav.guides)}</li>
            <li><span>03</span>{local("What remains unknown until warehouse QC?", copy.nav.method)}</li>
            <li><span>04</span>{local("Which official policy matters before the next payment?", copy.nav.updates)}</li>
          </ol>
        </aside>
      </section>

      <section className="categories-section" id="categories">
        <div className="section-heading">
          <div>
            <p>10 · {labels.directCategories}</p>
            <h2>{local("Browse PikoBuy spreadsheet categories", copy.nav.categories)}</h2>
          </div>
          <p className="section-intro">{local("Each category opens the matching collection on FindsSpreadsheet, so users reach relevant products instead of a generic homepage.")}</p>
        </div>
        <div className="category-grid">
          {categories.map((item) => (
            <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer">
              <b className="category-icon"><CategoryIcon name={item.icon as CategoryIconName} /></b><span><strong>{item.name}</strong><small>{item.note}</small></span><i aria-hidden="true">↗</i>
            </a>
          ))}
        </div>
        {isEnglish && <div className="topic-cluster">
          <div className="topic-cluster-heading">
            <p>2026 PIKOBUY TOPIC DIRECTORY</p>
            <h3>Go from a broad category to a focused checklist.</h3>
            <span>These pages answer different search intents; they are not the same article with a new title.</span>
          </div>
          <div className="topic-card-grid">
            {keywordPageCards.map((page, index) => (
              <Link key={page.slug} href={`/${page.slug}`}>
                <span>{String(index + 1).padStart(2, "0")} / {page.intent}</span>
                <strong>{page.shortTitle}</strong>
                <small>{page.cardDescription}</small>
                <i aria-hidden="true">→</i>
              </Link>
            ))}
          </div>
        </div>}
      </section>

      <section className="method-section" id="method">
        <div className="section-heading dark-heading">
          <div>
            <p>{copy.nav.method}</p>
            <h2>{local("How to use a PikoBuy spreadsheet", copy.homeTitle)}</h2>
          </div>
          <p className="section-intro">{local("The site separates source-page facts, official PikoBuy policy, and our own practical checkpoints. That distinction is central to trust.")}</p>
        </div>
        <div className="research-grid">
          <ol className="research-steps">
            <li><span>01</span><div><b>{local("Resolve the source", copy.nav.spreadsheet)}</b><p>{local("Open the exact FindsSpreadsheet detail page and record the source price, category, item ID and outbound platform choices.")}</p></div></li>
            <li><span>02</span><div><b>{local("Check the path", copy.nav.categories)}</b><p>{local("Confirm that the destination loads and still matches the category or product record shown here.")}</p></div></li>
            <li><span>03</span><div><b>{local("Add QC context", copy.nav.guides)}</b><p>{local("Separate what warehouse photographs can show from measurements, labels, packaging and other details that remain unknown.")}</p></div></li>
            <li><span>04</span><div><b>{local("Date every review", copy.nav.updates)}</b><p>{local("Record the review date so older links, policies and estimates never appear to be current facts.")}</p></div></li>
          </ol>
          <aside className="fact-panel">
            <p className="mini-label">{labels.officialSources}</p>
            <h3>{local("Three facts worth knowing before checkout.", copy.homeIntro)}</h3>
            <article><b>{local("Warehouse inspection", copy.nav.guides)}</b><p>{local("PikoBuy says warehouse staff inspect arrivals, check them in, take photos and look for visible defects.")}</p><a href="https://www.pikobuy.com/guide" target="_blank" rel="noopener noreferrer">{labels.sourceChecked} ↗</a></article>
            <article><b>{local("Shipping inputs", copy.nav.method)}</b><p>{local("The official estimator asks for destination, product type, weight and parcel dimensions, so item price alone is not landed cost.")}</p><a href="https://www.pikobuy.com/shipping-cost" target="_blank" rel="noopener noreferrer">{labels.sourceChecked} ↗</a></article>
            <article><b>{local("Return request window", copy.nav.updates)}</b><p>{local("Eligible requests must be made within five days (120 hours) after Warehoused, starting from the next hour; seller and item conditions still apply.")}</p><a href="https://www.pikobuy.com/protocol/returns" target="_blank" rel="noopener noreferrer">{labels.sourceChecked} ↗</a></article>
          </aside>
        </div>
      </section>

      <section className="guides-section" id="guides">
        <div className="section-heading">
          <div><p>04 · QC</p><h2>{local("QC photo checklist for PikoBuy finds", copy.homeTitle)}</h2></div>
          <p className="section-intro">{local("Use warehouse photos to confirm the ordered item and inspect visible details. Treat anything the images cannot prove as an open question, not a guarantee.")}</p>
        </div>
        <div className="guide-grid">
          <article className="guide-feature">
            <span>01 / {copy.nav.guides}</span>
            <h3>{local("The six-step PikoBuy buying flow", copy.homeTitle)}</h3>
            <p>{local("From a Taobao, Tmall, 1688, Weidian or Yupoo link to warehouse inspection and international dispatch.")}</p>
            <a href="https://www.pikobuy.com/guide" target="_blank" rel="noopener noreferrer">{labels.sourceChecked} <Icon name="arrow"/></a>
          </article>
          <article><span>02 / QC</span><h3>{local("How to read warehouse photos", copy.nav.guides)}</h3><p>{local("Check visible defects, measurements, labels, symmetry, colour and whether extra detail photos are needed.")}</p><Link href="/pikobuy-spreadsheet-qc">Full QC checklist →</Link></article>
          <article><span>03 / {copy.nav.method}</span><h3>{local("Why dimensions can change cost", copy.nav.method)}</h3><p>{local("Use actual weight, parcel dimensions, route rules and destination before comparing shipping options.")}</p><a href="https://www.pikobuy.com/shipping-cost" target="_blank" rel="noopener noreferrer">{labels.sourceChecked} →</a></article>
          <article><span>04 / {copy.nav.updates}</span><h3>{local("Use the 120-hour window carefully", copy.nav.updates)}</h3><p>{local("Eligibility, seller agreement, packaging requirements, domestic shipping and possible service fees still matter.")}</p><a href="https://www.pikobuy.com/protocol/returns" target="_blank" rel="noopener noreferrer">{labels.sourceChecked} →</a></article>
        </div>
      </section>

      <section className="updates-section" id="updates">
        <div className="update-copy">
          <p>{copy.nav.updates} / {isEnglish ? "AUG 11, 2026" : "AUG 06, 2026"}</p>
          <h2>{local("Latest PikoBuy spreadsheet updates", copy.homeTitle)}</h2>
          <p>{local("The product showcase reads FindsSpreadsheet's public Latest and Popular ordering, refreshes on page load and every 30 minutes, and keeps PikoBuy process claims separate from source-product data.")}</p>
          <a href="https://findspreadsheet.com/AllProducts/" target="_blank" rel="noopener noreferrer">{copy.browse} <Icon name="arrow"/></a>
        </div>
        <div className="update-log">
          {isEnglish && <div><time>AUG 11</time><span><b>PikoBuy warehouse consolidation guide published</b><small>A 1,619-word workflow covers arrival records, QC, return timing, storage questions, packing choices and parcel measurements.</small><Link href="/seo-articles/pikobuy-warehouse-consolidation-guide">Read the guide →</Link></span><i>NEW</i></div>}
          {isEnglish && <div><time>AUG 09</time><span><b>PikoBuy total cost guide published</b><small>A 1,713-word guide separates the product payment, warehouse decisions, parcel inputs, international shipping and destination-side unknowns.</small><Link href="/seo-articles/pikobuy-total-cost-explained">Read the guide →</Link></span><i>NEW</i></div>}
          <div><time>AUG 06</time><span><b>{local("2026 landing page and topic cluster", copy.nav.spreadsheet)}</b><small>{local("Homepage intent was clarified and eight independent category, QC, platform and shipping guides were added with direct internal links.")}</small></span><i>{labels.sourceChecked}</i></div>
          <div><time>AUG 02</time><span><b>{local("Latest + Popular product feed", copy.nav.spreadsheet)}</b><small>{local("Names, images, source prices and view signals are refreshed from FindsSpreadsheet's public product orderings.")}</small></span><i>{labels.sourceChecked}</i></div>
          <div><time>AUG 02</time><span><b>{local("Official buying flow", copy.nav.guides)}</b><small>{local("Six public steps were checked against PikoBuy's current beginner guide.")}</small></span><i>{labels.sourceChecked}</i></div>
          <div><time>AUG 02</time><span><b>{local("Returns and shipping", copy.nav.method)}</b><small>{local("The request window, eligibility conditions and estimator inputs are kept separate from our guidance.")}</small></span><i>{labels.sourceChecked}</i></div>
        </div>
      </section>

      <section className="faq-section" id="faq">
        <div className="faq-title"><p>06 · {labels.questions}</p><h2>{local("FAQ about PikoBuy spreadsheet", copy.homeTitle)}</h2></div>
        <div className="faq-list">
          <details open><summary>{local("Is this the official PikoBuy website?", copy.independent)}<span>+</span></summary><p>{local("No. PikoBuy Sheet is an independent informational research site. It organizes source pages and explains publicly available PikoBuy processes; it does not sell products or represent PikoBuy.")}</p></details>
          <details><summary>{local("Does a live source page mean the product is in stock?", copy.nav.spreadsheet)}<span>+</span></summary><p>{local("No. It only means the referenced detail page loaded when reviewed. Stock, variants, seller availability, restrictions and prices can change.")}</p></details>
          <details><summary>{local("Are the USD prices exact?", copy.nav.method)}<span>+</span></summary><p>{local("No. USD figures are rounded references converted from the displayed CNY source price. Exchange rates and checkout conditions can change the total.")}</p></details>
          <details><summary>{local("What should I check in QC photos?", copy.nav.guides)}<span>+</span></summary><p>{local("Start with the ordered colour and size, then inspect visible construction, symmetry, labels, measurements, accessories and packaging.")}</p></details>
          <details><summary>{local("Can every warehoused item be returned within five days?", copy.nav.updates)}<span>+</span></summary><p>{local("No. Timing is only one condition. Seller support, marketable condition, exclusions and packaging rules may still apply.")}</p></details>
          <details><summary>{local("Why link to FindsSpreadsheet?", copy.nav.categories)}<span>+</span></summary><p>{local("FindsSpreadsheet is the product-discovery database behind the source records. Every category and product link opens the matching destination.")}</p></details>
        </div>
      </section>

      <section className="final-cta">
        <p>{labels.ready}</p><h2>{local("Research here. Browse the full catalogue there.", copy.homeTitle)}</h2>
        <a href="https://findspreadsheet.com/AllProducts/" target="_blank" rel="noopener noreferrer">{copy.browse} <Icon name="arrow"/></a>
      </section>

      <SiteFooter locale={locale} />
    </main>
  );
}
