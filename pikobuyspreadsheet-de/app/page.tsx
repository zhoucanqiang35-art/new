"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { categories, products } from "./catalog";
import CategoryIcon from "./components/CategoryIcon";
import LanguageSwitcher from "./components/LanguageSwitcher";

const markets = [
  ["US", "United States"], ["GB", "United Kingdom"], ["DE", "Germany"], ["FR", "France"],
  ["ES", "Spain"], ["IT", "Italy"], ["NL", "Netherlands"], ["PL", "Poland"],
  ["CA", "Canada"], ["AU", "Australia"], ["PT", "Portugal"], ["SE", "Sweden"],
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");
  const visibleProducts = useMemo(
    () => activeCategory === "All" ? products : products.filter((item) => item.category === activeCategory),
    [activeCategory],
  );
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "PikoBuy Spreadsheet Research Guide",
    url: "https://pikobuyspreadsheet.de/",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://pikobuyspreadsheet.de/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="/" aria-label="PikoBuy Spreadsheet home">
          <img className="brand-logo" src="/pikobuy-logo.png" alt="PikoBuy" width="204" height="48" />
        </a>
        <nav aria-label="Primary navigation">
          <a href="/">Home</a>
          <a href="/products">Product details</a>
          <a href="/categories">Categories</a>
          <a href="/guides">Guides</a>
          <a href="/shipping">Shipping</a>
          <a href="/faq">FAQ</a>
          <a href="/articles">SEO articles</a>
        </nav>
        <div className="header-actions">
          <LanguageSwitcher />
        </div>
      </header>

      <main id="top">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow"><span>Independent research guide</span><span>Updated 24 Aug 2026</span></div>
            <h1>PikoBuy Spreadsheet,<br /><em>checked with context.</em></h1>
            <p className="hero-lead">Search product finds, compare the evidence that matters, and continue to the live FindSpreadsheet record only when the category, photos, sizing and shipping context make sense.</p>
            <form className="search-box" action="https://findspreadsheet.com/search.html" method="get">
              <label htmlFor="product-search">Search products and categories</label>
              <div>
                <input id="product-search" name="keywords" placeholder="Try ‘hoodie’, ‘running shoes’ or paste a product clue" required />
                <button type="submit">Search live products →</button>
              </div>
              <input type="hidden" name="channelid" value="2" />
              <input type="hidden" name="method" value="1" />
              <small>Your search opens the matching live product results on FindSpreadsheet.</small>
            </form>
            <a className="button search-database-button" href="https://findspreadsheet.com/AllProducts/" target="_blank" rel="noreferrer">Open database ↗</a>
            <div className="hero-metrics">
              <span><b>10</b> focused categories</span>
              <span><b>24</b> priority language markets</span>
              <span><b>1</b> evidence-first workflow</span>
            </div>
          </div>
          <div className="hero-visual">
            <img src="/og-hero.jpg?v=e29abf0" alt="PikoBuy Spreadsheet research board with parcels, product cards and quality check marks" />
            <div className="visual-note">
              <span className="status-dot" />
              <div><b>Built for comparison</b><small>Product data stays on the live main database.</small></div>
            </div>
          </div>
        </section>

        <section className="trust-strip" aria-label="Official fact checks">
          <p><b>Official workflow checked</b><span>PikoBuy documents link search, first payment, warehouse inspection, parcel submission and a separate international shipping payment.</span></p>
          <Link href="/articles/first-vs-second-payment">Understand both payments →</Link>
        </section>

        <section className="section page-card-section" aria-labelledby="page-card-title">
          <div className="section-heading">
            <div><span className="kicker">Explore the site</span><h2 id="page-card-title">One clear page for every next step.</h2></div>
            <p>Use the home overview or inspect individual product research notes—each card opens its own permanent page.</p>
          </div>
          <div className="page-card-grid page-card-grid-two">
            <a className="page-card page-card-active" href="/"><span>01</span><div><b>Home</b><p>Research overview, categories, markets and workflow.</p></div><strong>Current page</strong></a>
            <a className="page-card" href="/products"><span>02</span><div><b>Product details</b><p>Independent notes, prices and QC checks for representative finds.</p></div><strong>Open page →</strong></a>
          </div>
        </section>

        <section className="section" id="categories">
          <div className="section-heading">
            <div><span className="kicker">Directory 01</span><h2>Start with the product type.</h2></div>
            <p>Different finds need different checks. Keep shoes beside shoes and bulky outerwear beside bulky outerwear before comparing value.</p>
          </div>
          <div className="category-grid">
            {categories.map((category) => (
              <a className="category-card" key={category.name} href={`/categories/${category.slug}`}>
                <span className="category-icon-box"><CategoryIcon name={category.name} /></span>
                <div className="category-copy"><b>{category.name}</b><small>{category.note}</small></div>
                <span className="category-open" aria-hidden="true">→</span>
              </a>
            ))}
          </div>
        </section>

        <section className="section database-section" id="database">
          <div className="section-heading inverse">
            <div><span className="kicker">Live data preview</span><h2>Representative finds,<br />with price context.</h2></div>
            <p>Displayed USD values are approximate conversions from the main database using 1 CNY ≈ $0.1487 on 24 Aug 2026. Confirm the live record before continuing.</p>
          </div>
          <div className="filter-row" role="group" aria-label="Product filters">
            {["All", "Shoes", "Hoodies", "Jackets", "Headwear"].map((filter) => (
              <button key={filter} className={activeCategory === filter ? "active" : ""} onClick={() => setActiveCategory(filter)}>{filter}</button>
            ))}
          </div>
          <div className="product-grid">
            {visibleProducts.map((product, index) => (
              <a className="product-card" key={product.title} href={`/products/${product.slug}`}>
                <div className={`product-art art-${index + 1}`}><span>{product.category}</span></div>
                <div className="product-info"><span>{product.category}</span><h3>{product.title}</h3><p><b>{product.price}</b><small>{product.cny} source value</small></p></div>
                <span className="product-cta">View product details →</span>
              </a>
            ))}
          </div>
          <a className="button button-light" href="https://findspreadsheet.com/AllProducts/" target="_blank" rel="noreferrer">Browse the complete database ↗</a>
        </section>

        <section className="section method-section" id="method">
          <div className="method-copy">
            <span className="kicker">Research method 02</span>
            <h2>A spreadsheet row is a lead, not a verdict.</h2>
            <p>Our job is to reduce uncertainty before the click. Every useful row should make it easier to judge the product type, source match, photo coverage, sizing, price context and likely parcel impact.</p>
            <a className="text-link" href="/guides">Read the full buying workflow →</a>
          </div>
          <ol className="method-list">
            <li><span>01</span><div><b>Narrow the category</b><p>Compare products that solve the same need.</p></div></li>
            <li><span>02</span><div><b>Inspect the evidence</b><p>Review photos, options, sizing and source details.</p></div></li>
            <li><span>03</span><div><b>Estimate parcel impact</b><p>Use weight and dimensions as planning inputs.</p></div></li>
            <li><span>04</span><div><b>Verify the live record</b><p>Prices, links and availability can change.</p></div></li>
          </ol>
        </section>

        <section className="section market-section" id="markets">
          <div className="section-heading">
            <div><span className="kicker">Market plan 03</span><h2>Designed for Western buyers.</h2></div>
            <p>PikoBuy does not publish audited user totals by country. The launch plan therefore prioritizes major English-speaking and European shopping markets, then validates demand through Search Console.</p>
          </div>
          <div className="market-grid">
            {markets.map(([code, name], index) => <div className="market-card" key={code}><span>{String(index + 1).padStart(2, "0")}</span><b>{name}</b><small>{code}</small></div>)}
          </div>
          <p className="market-note">Full language set planned: English, German, French, Spanish, Italian, Dutch, Polish, Portuguese, Swedish, Danish, Norwegian, Finnish, Czech, Romanian, Hungarian, Greek, Slovak, Croatian, Slovenian, Bulgarian, Lithuanian, Latvian, Estonian and Turkish.</p>
        </section>

        <section className="section faq-section" id="faq">
          <div className="section-heading"><div><span className="kicker">Quick answers 04</span><h2>Clear scope, fewer surprises.</h2></div></div>
          <div className="faq-grid">
            <details open><summary>Is this the official PikoBuy website?<span>+</span></summary><p>No. This is an independent research and product-discovery guide. Platform-specific account, payment and order questions belong with PikoBuy.</p></details>
            <details><summary>Where do product links go?<span>+</span></summary><p>Category, product and search actions continue to findspreadsheet.com, the main live product database.</p></details>
            <details><summary>Are the USD prices final?<span>+</span></summary><p>No. They are approximate conversions for comparison. Confirm the live item price, selected variant and applicable fees before proceeding.</p></details>
            <details><summary>How does PikoBuy shipping work?<span>+</span></summary><p>PikoBuy’s official guide describes a separate international shipping payment after warehouse inspection and parcel submission. Route availability and cost depend on destination and parcel details.</p></details>
          </div>
        </section>

        <section className="section seo-after-faq" aria-labelledby="seo-card-title">
          <div className="section-heading">
            <div><span className="kicker">SEO articles 05</span><h2 id="seo-card-title">Research articles, after the quick answers.</h2></div>
            <p>Continue from the FAQ into detailed, fact-conscious guides for search, QC, warehouse returns, shipping and Western-market intent.</p>
          </div>
          <a className="page-card seo-feature-card" href="/articles"><span>03</span><div><b>SEO articles</b><p>Evergreen guides for search, QC, shipping, return timing and comparison intent. Every article opens on its own permanent page.</p></div><strong>Open SEO articles →</strong></a>
        </section>
      </main>

      <footer>
        <div className="footer-brand"><img className="brand-logo footer-logo" src="/pikobuy-logo.png" alt="PikoBuy" width="204" height="48" /></div>
        <p>Product discovery continues on <a href="https://findspreadsheet.com/" target="_blank" rel="noreferrer">findspreadsheet.com ↗</a>. No checkout, payment or order processing happens here.</p>
        <div className="footer-links"><a href="/">Home</a><a href="/products">Product details</a><a href="/categories">Categories</a><a href="/guides">Guides</a><a href="/shipping">Shipping</a><a href="/faq">FAQ</a><a href="/articles">SEO articles</a></div>
        <small>© 2026 PikoBuy Spreadsheet Research Desk · Independent and not affiliated with PikoBuy.</small>
      </footer>
    </div>
  );
}
