"use client";

import { FormEvent, useMemo, useState } from "react";
import { LanguageSelect } from "../components/language-select";

const locales = [
  ["EN", "English", "US · UK"],
  ["DE", "Deutsch", "Germany · Austria"],
  ["FR", "Français", "France · Belgium"],
  ["ES", "Español", "Spain"],
  ["IT", "Italiano", "Italy"],
  ["NL", "Nederlands", "Netherlands"],
  ["PL", "Polski", "Poland"],
  ["PT", "Português", "Portugal"],
  ["SV", "Svenska", "Sweden"],
];

const categories = [
  { name: "Shoes", note: "Discover footwear finds from top spreadsheet sellers", icon: "⌁", query: "Shoes" },
  { name: "Hoodies", note: "Cozy hoodies and sweaters at unbeatable spreadsheet prices", icon: "♧", query: "Hoodies" },
  { name: "T-Shirts", note: "Trendy T-shirts from verified spreadsheet vendors", icon: "▣", query: "T-Shirts" },
  { name: "Jackets", note: "Premium jackets and outerwear sourced through spreadsheet finds", icon: "◒", query: "Jackets" },
  { name: "Pants", note: "Stylish bottoms from curated spreadsheet collections", icon: "◱", query: "Pants" },
  { name: "Hats", note: "Caps, beanies and headwear from top spreadsheet sellers", icon: "♙", query: "Hats" },
  { name: "Watches", note: "Complete outfit sets found through exclusive spreadsheets", icon: "◇", query: "Watches" },
  { name: "Electronics", note: "Essential undergarments at spreadsheet wholesale prices", icon: "▤", query: "Electronics" },
  { name: "Socks", note: "Sports jerseys and athletic wear from spreadsheet finds", icon: "◉", query: "Socks" },
  { name: "Accessories", note: "Bags, wallets, jewelry and more spreadsheet accessories", icon: "▱", query: "Accessories" },
];

const featuredDetails = [
  { category: "Shoes", title: "Air Presto Off-White Black", checks: "Profile, upper construction, heel shape and outsole.", query: "Air Presto Off-White Black" },
  { category: "Hoodies", title: "GCDS Logo Band Hoodie", checks: "Fabric density, ribbing, logo placement and measurements.", query: "GCDS Logo Band Hoodie" },
  { category: "Electronics", title: "Apple iPad Pro 2023", checks: "Model details, compatibility, packaging and current listing evidence.", query: "Apple iPad Pro 2023" },
];

const questions = [
  ["What is this site for?", "Piko Sheet is an independent research layer. It helps visitors organize what they want to inspect before continuing to FindSpreadsheet for the live product database."],
  ["Does this site sell products?", "No. Product discovery and live product records continue on FindSpreadsheet. This site is for category comparison, QC preparation and research guidance."],
  ["How does the search button work?", "Enter a product, brand, category or model. The button opens the FindSpreadsheet All Products search with the same search term."],
  ["What should I check before opening a product?", "Compare the current photos, selected variant, measurements, price context and category-specific details before you decide a row is useful."],
  ["Are QC photos a guarantee?", "No. QC photos help with visible checks, but they cannot guarantee authenticity, fit, durability, availability or a shipping outcome."],
  ["Why are there nine languages?", "The launch plan prioritizes the United States and United Kingdom in English, then key European markets in German, French, Spanish, Italian, Dutch, Polish, Portuguese and Swedish."],
];

export default function Home() {
  const [query, setQuery] = useState("");
  const [language, setLanguage] = useState("EN");
  const filtered = useMemo(
    () => categories.filter((category) => `${category.name} ${category.note}`.toLowerCase().includes(query.toLowerCase())),
    [query],
  );

  const openDatabaseSearch = (event: FormEvent) => {
    event.preventDefault();
    const term = query.trim();
    const url = new URL("https://findspreadsheet.com/search.html");
    if (term) url.searchParams.set("keywords", term);
    window.location.assign(url.toString());
  };

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="/" aria-label="PikoBuy Sheet home">
          <img className="brand-logo" src="/pikobuy-logo.png" alt="PikoBuy" />
        </a>
        <nav aria-label="Main navigation">
          <a href="/">Home</a><a href="/product-categories">Product Categories</a><a href="/product-details">Product Details</a><a href="/seo-articles">SEO Articles</a><a href="/faq">FAQ</a><a href="/qc-guide">QC Method</a><a href="/regions">Regions</a>
        </nav>
        <LanguageSelect value={language} onChange={setLanguage} />
      </header>

      <section id="top" className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span></span> INDEPENDENT SHOPPING RESEARCH</p>
          <h1>Find better.<br /><em>Check smarter.</em></h1>
          <p className="hero-intro">A focused research layer for PikoBuy-style finds — designed to make product comparison, QC photo review and next steps clearer before you continue to the database.</p>
          <form className="search-box" onSubmit={openDatabaseSearch}>
            <input value={query} onChange={(event) => setQuery(event.target.value)} aria-label="Filter curated categories" placeholder="Search a category or check…" />
            <button type="submit">Explore</button>
          </form>
          <a className="database-button" href="https://findspreadsheet.com">Open Database <span>↗</span></a>
          <div className="hero-foot"><span>Selected for US & Europe</span><span>•</span><span>{locales.find(([code]) => code === language)?.[1]} preview architecture</span></div>
        </div>
        <div className="hero-panel" aria-label="Research flow">
          <p className="panel-kicker">THE RESEARCH ROUTE</p>
          <div className="route-step active"><b>01</b><span><strong>Find</strong><small>Start with the right category</small></span></div>
          <div className="route-step"><b>02</b><span><strong>Inspect</strong><small>Compare photos, sizing and details</small></span></div>
          <div className="route-step"><b>03</b><span><strong>Decide</strong><small>Continue only with clear evidence</small></span></div>
          <div className="signal"><i></i> 6 curated research paths live in this preview</div>
        </div>
      </section>

      <section id="picks" className="content-section picks-section">
        <div className="section-top"><div><p className="eyebrow"><span></span> PRODUCT CATEGORIES</p><h2>Browse by category.</h2></div><p className="section-note">Open a category to check its details, or browse the corresponding live results directly.</p></div>
        <div className="category-grid">
          {filtered.map((category) => <article className="category-card" key={category.name}>
            <div className="category-icon" aria-hidden="true">{category.icon}</div>
            <h3>{category.name}</h3><p>{category.note}</p>
            <a href={`/product-categories/${category.slug}`}>Browse <span>↗</span></a>
          </article>)}
        </div>
        {filtered.length === 0 && <p className="empty-state">No matching category yet. Try shoes, bags, hoodies, QC or electronics.</p>}
      </section>

      <section id="details" className="details-section">
        <div className="details-heading"><p className="eyebrow"><span></span> PRODUCT DETAILS</p><h2>Open a product only<br />when you know <em>what to check.</em></h2></div>
        <div className="detail-grid">{featuredDetails.map((product, index) => <article key={product.title} className="detail-card">
          <div><span>0{index + 1}</span><p>{product.category}</p></div>
          <h3>{product.title}</h3><p className="detail-check"><strong>QC focus</strong>{product.checks}</p>
          <a href={`https://findspreadsheet.com/AllProducts/?search=${encodeURIComponent(product.query)}`}>View matching product results <b>↗</b></a>
        </article>)}</div>
        <a className="database-link" href="https://findspreadsheet.com/AllProducts/">Browse all product details in FindSpreadsheet <span>↗</span></a>
      </section>

      <section id="method" className="method-section">
        <div className="method-label"><p className="eyebrow"><span></span> A BETTER QC STANDARD</p><p>Each product type deserves its own inspection logic.</p></div>
        <div className="method-grid">
          <article><b>01</b><h3>Look past the cover image.</h3><p>Use angles, close-ups and measurements that reveal construction — not just the listing’s best shot.</p></article>
          <article><b>02</b><h3>Compare like with like.</h3><p>Keep shoes beside shoes and bags beside bags. Missing details become easier to spot.</p></article>
          <article><b>03</b><h3>Keep only explainable finds.</h3><p>A row should earn its place with a clear category, photo evidence and useful price context.</p></article>
        </div>
      </section>

      <section id="regions" className="content-section region-section">
        <div className="section-top"><div><p className="eyebrow"><span></span> EUROPE & NORTH AMERICA FIRST</p><h2>One English master;<br />nine local routes.</h2></div><p className="section-note">English serves the US and UK. Each local route will retain the same sections, product context and checks — never a shortened translation.</p></div>
        <div className="locale-grid">{locales.map(([code, name, market], index) => <div key={code} className="locale-row"><span>{String(index + 1).padStart(2, "0")}</span><strong>{code}</strong><p>{name}</p><small>{market}</small></div>)}</div>
      </section>

      <section id="roadmap" className="roadmap-section">
        <div className="roadmap-intro"><p className="eyebrow"><span></span> SEO STRUCTURE, NOT SEO FILLER</p><h2>Built to become<br />a real search hub.</h2></div>
        <ol>
          <li><span>01</span><div><h3>Category hubs</h3><p>Indexable pages for the ten main product categories, with distinct comparison criteria and database paths.</p></div></li>
          <li><span>02</span><div><h3>Decision guides</h3><p>Evidence-led pages for QC photos, order flow, shipping planning and safe link checks.</p></div></li>
          <li><span>03</span><div><h3>Fresh editorial notes</h3><p>Original, fact-checked articles that answer a specific user question rather than repeating generic platform claims.</p></div></li>
          <li><span>04</span><div><h3>Localized equivalence</h3><p>Dedicated language URLs, hreflang and matching page depth for all nine launch languages after copy QA.</p></div></li>
        </ol>
      </section>

      <section id="faq" className="content-section faq-section">
        <div className="section-top"><div><p className="eyebrow"><span></span> FAQ</p><h2>Clear answers before<br />the next click.</h2></div><p className="section-note">The FAQ remains a practical reading layer. Live product information and available options stay in the FindSpreadsheet database.</p></div>
        <div className="faq-list">{questions.map(([question, answer], index) => <details key={question} open={index === 0}><summary><span>0{index + 1}</span>{question}<b>+</b></summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="cta-section"><p className="eyebrow"><span></span> PREVIEW VERSION</p><h2>The database stays<br /><em>the destination.</em></h2><p>This independent preview helps people research first, then continue to the FindSpreadsheet database when they are ready.</p><a className="cta-button" href="https://findspreadsheet.com" target="_blank" rel="noreferrer">Open FindSpreadsheet <span>↗</span></a></section>

      <footer><a className="brand" href="#top"><img className="brand-logo" src="/pikobuy-logo.png" alt="PikoBuy" /></a><p>Independent product-research preview. Not affiliated with PikoBuy.</p><span>© 2026</span></footer>
    </main>
  );
}
