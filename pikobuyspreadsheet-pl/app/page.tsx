import { categories, countryGroups, guides, primaryLinks } from "./content";
import { faqItems } from "./faq-content";
import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";

const facts = [
  ["01", "Select", "Find an item on Taobao, Tmall, 1688, Weidian or Yupoo."],
  ["02", "Check", "Confirm options, seller images, measurements and source details."],
  ["03", "Warehouse", "Review PikoBuy check-in photos and visible defects."],
  ["04", "Ship", "Compare destination, route, weight and parcel dimensions."],
];

export default function Home() {
  return (
    <main>
      <div className="preview-bar">Independent research hub · 2026</div>
      <SiteHeader />

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Independent research hub · 2026</p>
          <h1>A clearer PikoBuy spreadsheet for Europe.</h1>
          <p className="lead">Find products on <strong>FindSpreadsheet</strong>, check the source listing, understand warehouse QC, and plan international shipping before you pay.</p>
          <form className="search" action="https://findspreadsheet.com/search.html" method="get">
            <label className="sr-only" htmlFor="product-search">Search FindSpreadsheet products</label>
            <input id="product-search" name="keywords" placeholder="Search shoes, hoodies, bags, item ID…" required />
            <button type="submit">Search products <span>↗</span></button>
          </form>
          <a className="browse-all-products" href={primaryLinks.products}>Browse All Products <span>↗</span></a>
          <div className="trust-line">
            <span>✓ Official-source checks</span><span>✓ No guaranteed shipping claims</span><span>✓ Independent, not PikoBuy</span>
          </div>
        </div>
        <div className="hero-visual" aria-label="Spreadsheet research and parcel planning illustration">
          <img src="/pikobuy-hero.png" alt="Laptop product spreadsheet beside parcels, clothing, shoes and a quality-control checklist" />
        </div>
      </section>

      <section className="section shell feature-section" aria-labelledby="explore-title">
        <div className="section-heading"><div><p className="eyebrow"><span /> Explore the site</p><h2 id="explore-title">Four clear ways to start.</h2></div><p>Each card opens a dedicated page with its own purpose, content and next action.</p></div>
        <div className="feature-card-grid">
          <a className="feature-card" href="/"><span>01</span><h3>Home</h3><p>Overview, search and the complete research workflow.</p><strong>Open home ↗</strong></a>
          <a className="feature-card" href="/product-categories"><span>02</span><h3>Product categories</h3><p>Browse ten focused collections and their QC priorities.</p><strong>Browse categories ↗</strong></a>
          <a className="feature-card" href="/product-details"><span>03</span><h3>Product details</h3><p>Use product research cards before opening an agent route.</p><strong>Review products ↗</strong></a>
          <a className="feature-card" href="/seo-articles"><span>04</span><h3>SEO articles</h3><p>Read focused, evidence-led answers on independent pages.</p><strong>Read articles ↗</strong></a>
        </div>
      </section>

      <section className="signal-strip">
        <div className="shell signal-grid">
          <div><b>20K+</b><span>finds on the main database*</span></div>
          <div><b>10</b><span>focused product categories</span></div>
          <div><b>10</b><span>evidence-led launch guides</span></div>
          <div><b>11</b><span>priority market targets</span></div>
        </div>
      </section>

      <section className="section shell" id="spreadsheet">
        <div className="section-heading">
          <div><p className="eyebrow"><span /> Start with the product</p><h2>Browse by what needs checking.</h2></div>
          <p>Every category leads to the live FindSpreadsheet database. The notes here explain what to inspect before opening an agent route.</p>
        </div>
        <div className="category-grid">
          {categories.map((category) => (
            <a className="category-card" href={category.href} key={category.name}>
              <span className="category-icon" aria-hidden="true">{category.icon}</span>
              <div className="category-copy"><h3>{category.name}</h3><p>{category.note}</p></div>
              <strong className="category-link">Open listings <span>→</span></strong>
            </a>
          ))}
        </div>
      </section>

      <section className="section workflow-wrap">
        <div className="shell">
          <div className="section-heading light">
            <div><p className="eyebrow"><span /> Official workflow, explained</p><h2>From a product row to a parcel.</h2></div>
            <p>PikoBuy’s published guide separates product selection, warehouse inspection and international shipping. This site keeps those decisions separate too.</p>
          </div>
          <div className="workflow-grid">
            {facts.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
          <div className="source-note"><span>Source checked</span> PikoBuy official beginner guide · Last verified 5 September 2026 <a href="/sources#pikobuy-sources">Review source record ↗</a></div>
        </div>
      </section>

      <section className="section shell" id="guides">
        <div className="section-heading">
          <div><p className="eyebrow"><span /> Practical guides</p><h2>Answers before checkout.</h2></div>
          <p>Original, focused pages built from current PikoBuy terms and tools—not generic posts with a changed title.</p>
        </div>
        <div className="guide-grid">
          {guides.map((guide, index) => (
            <a className={`guide-card guide-${index + 1}`} href={`/${guide.slug}`} key={guide.slug}>
              <p>{guide.eyebrow} · {guide.readTime}</p><h3>{guide.title}</h3><span>Read the evidence-led guide ↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section country-section" id="countries">
        <div className="shell">
          <div className="section-heading">
            <div><p className="eyebrow"><span /> Market plan</p><h2>English first. Europe properly localised.</h2></div>
            <p>PikoBuy does not publish a public country-by-country user table. These are SEO priorities, not invented usage statistics.</p>
          </div>
          <div className="country-grid">
            {countryGroups.map((group, index) => <article key={group.tier}><span>0{index + 1}</span><h3>{group.tier}</h3><strong>{group.countries}</strong><p>{group.rationale}</p></article>)}
          </div>
          <div className="language-plan"><b>Planned language architecture</b><span>EN</span><span>DE</span><span>FR</span><span>ES</span><span>IT</span><span>NL</span><span>PT</span><span>PL</span><p>Independent URLs, consistent layouts and hreflang will be activated only after human translation QA.</p></div>
        </div>
      </section>

      <section className="section shell evidence-section">
        <div className="evidence-copy"><p className="eyebrow"><span /> Built to be more trustworthy</p><h2>Facts get a source. Limits stay visible.</h2><p>Product availability, prices, return eligibility and shipping routes can change. Every core guide identifies what PikoBuy currently publishes and what the shopper still needs to verify.</p><a className="text-link" href="/sources">Review our source policy ↗</a></div>
        <div className="evidence-list">
          <div><span>01</span><p><b>Official process</b>Six purchasing and shipping steps checked against PikoBuy.</p></div>
          <div><span>02</span><p><b>Return details</b>The 120-hour window, exclusions and possible fees explained.</p></div>
          <div><span>03</span><p><b>Shipping limits</b>No universal cost-per-kilo or customs guarantees.</p></div>
          <div><span>04</span><p><b>Independent status</b>No claim of partnership, endorsement or official representation.</p></div>
        </div>
      </section>

      <section className="section shell faq" id="faq">
        <div><p className="eyebrow"><span /> Quick answers</p><h2>Before you open a product link.</h2></div>
        <div className="faq-link-list">{faqItems.map((item, index) => <a href={`/faq/${item.slug}`} key={item.slug}><span>0{index + 1}</span><div><h3>{item.question}</h3><p>{item.shortAnswer}</p></div><strong>↗</strong></a>)}</div>
      </section>

      <section className="cta">
        <div className="shell"><div><p>Ready to research a product?</p><h2>Start with the live spreadsheet, then use the checks.</h2></div><a className="button button-invert" href={primaryLinks.products}>Browse all products <span>↗</span></a></div>
      </section>

      <SiteFooter />
    </main>
  );
}
