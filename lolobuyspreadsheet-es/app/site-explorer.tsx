import LanguageSwitcher from "./language-switcher";

const categories = [
  ["01", "T-Shirts", "TEE", "https://findspreadsheet.com/t-shirts/", "/category-images/t-shirts.webp"],
  ["02", "Shoes", "SHO", "https://findspreadsheet.com/shoes/", "/category-images/shoes.webp"],
  ["03", "Hoodies", "HOD", "https://findspreadsheet.com/hoodies-sweaters/", "/category-images/hoodies.webp"],
  ["04", "Jackets", "JKT", "https://findspreadsheet.com/jackets/", "/category-images/jackets.webp"],
  ["05", "Pants & Shorts", "PNT", "https://findspreadsheet.com/pants-shorts/", "/category-images/pants-shorts.webp"],
  ["06", "Headwear", "CAP", "https://findspreadsheet.com/headwear/", "/category-images/headwear.webp"],
  ["07", "Accessories", "ACC", "https://findspreadsheet.com/accessories/", "/category-images/accessories.webp"],
  ["08", "Jerseys", "JRS", "https://findspreadsheet.com/jersey/", "/category-images/jerseys.webp"],
  ["09", "Electronics", "ELC", "https://findspreadsheet.com/electronics/", "/category-images/electronics.webp"],
  ["10", "Other Finds", "OTH", "https://findspreadsheet.com/other-stuff/", "/category-images/other-finds.webp"],
];

const products = [
  { title: "Gallery Short", category: "Pants & Shorts", cny: "¥145", usd: "$21.39", image: "/products/gallery-short.webp", href: "https://findspreadsheet.com/pants-shorts/gallery-short-3003.html" },
  { title: "High Quality Jacket", category: "Jackets", cny: "¥148", usd: "$21.83", image: "/products/jacket.webp", href: "https://findspreadsheet.com/jackets/high-quality-burberry-jacket-3131.html" },
  { title: "37-Colour Socks", category: "Other Finds", cny: "¥20", usd: "$2.95", image: "/products/socks.webp", href: "https://findspreadsheet.com/other-stuff/sock-37-colores-top-3001.html" },
  { title: "T-Shirt / Hoodie Selection", category: "Hoodies", cny: "¥85", usd: "$12.54", image: "/products/hoodie.webp", href: "https://findspreadsheet.com/hoodies-sweaters/dior-t-shirthoodie-39-style-top-3000.html" },
  { title: "C.P. Company T-Shirt", category: "T-Shirts", cny: "¥118", usd: "$17.40", image: "/products/tshirt.webp", href: "https://findspreadsheet.com/t-shirts/cp-company-t-shirt-2999.html" },
  { title: "Outdoor Jacket", category: "Jackets", cny: "¥145", usd: "$21.39", image: "/products/outdoor-jacket.webp", href: "https://findspreadsheet.com/jackets/the-north-face-outdoorjacket-2998.html" },
  { title: "Multi-Style Headwear", category: "Headwear", cny: "¥50", usd: "$7.37", image: "/products/headwear.webp", href: "https://findspreadsheet.com/headwear/prada-hatfendi-hatstone-island-hatbalenciaga-hatgucci-hat-2997.html" },
  { title: "Swim Shorts", category: "Pants & Shorts", cny: "¥121", usd: "$17.85", image: "/products/swim-shorts.webp", href: "https://findspreadsheet.com/pants-shorts/lacoste-swim-shorts-2996.html" },
  { title: "Compact Wallet", category: "Accessories", cny: "¥52.80", usd: "$7.79", image: "/products/wallet.webp", href: "https://findspreadsheet.com/accessories/supreme-wallet-2995.html" },
  { title: "Graphic Tee Selection", category: "T-Shirts", cny: "¥165", usd: "$24.34", image: "/products/valentino-tees.webp", href: "https://findspreadsheet.com/t-shirts/valentino-tees-2994.html" },
  { title: "C.P. Company Tee", category: "T-Shirts", cny: "¥118", usd: "$17.40", image: "/products/cp-tshirt.webp", href: "https://findspreadsheet.com/t-shirts/cp-company-t-shirt-2993.html" },
  { title: "Versatile Short Sleeves", category: "T-Shirts", cny: "¥135", usd: "$19.91", image: "/products/dior-sleeves.webp", href: "https://findspreadsheet.com/t-shirts/dior-versatile-short-sleeves-2992.html" },
];

function Logo() {
  return (
    <a className="brand" href="/" aria-label="LoloBuy Spreadsheet Research Hub home">
      <span className="brand-mark brand-logo"><img src="/lolobuy.webp" alt="LoloBuy Spreadsheet cat bag logo" width="52" height="52" /></span>
      <span className="brand-text">LoloBuy Spreadsheet</span>
    </a>
  );
}

function Header() {
  return (
    <header className="main-header">
      <Logo />
      <nav className="main-nav" aria-label="Primary navigation">
        <a href="/categories/">Categories</a>
        <a href="/guides/">Guides</a>
        <a href="/shipping/">Shipping</a>
        <a href="/method/">Method</a>
        <a href="/sources/">Sources</a>
        <a href="/faq/">FAQ</a>
        <a href="/seo-articles/">SEO Articles</a>
      </nav>
      <details className="mobile-nav home-mobile-nav">
        <summary>Menu</summary>
        <div><a href="/categories/">Categories</a><a href="/guides/">Guides</a><a href="/shipping/">Shipping</a><a href="/method/">Method</a><a href="/sources/">Sources</a><a href="/faq/">FAQ</a><a href="/seo-articles/">SEO Articles</a><a href="/updates/">Updates</a></div>
      </details>
      <LanguageSwitcher />
    </header>
  );
}

function ArchiveHero() {
  return (
    <section className="hero archive-hero">
      <div className="archive-mast"><span className="archive-issue">The independent LoloBuy research edition</span><span className="archive-issue">Issue 01 / Aug 2026</span></div>
      <h1>A clearer way into the LoloBuy spreadsheet.</h1>
      <div className="archive-columns">
        <p><strong>Independent research edition</strong><br />A magazine-like index built for careful product discovery, visible sources and practical checks.</p>
        <p>Research categories, understand what a listing can and cannot prove, check product details, and open the relevant FindSpreadsheet category only when you are ready to continue.</p>
        <div className="hero-actions"><a className="primary-cta" href="/categories/">Read the full category index ↗</a></div>
      </div>
    </section>
  );
}

export default function SiteExplorer() {
  return (
    <div className="site-shell home-page" data-design="archive" id="top">
      <div className="review-bar"><span className="review-dot" /><strong>C DIRECTION SELECTED</strong><span>Public inspection copy · Formal domain and DNS are untouched · Search indexing is disabled</span></div>
      <Header />
      <ArchiveHero />

      <section className="fact-strip" aria-label="Research principles">
        <div className="fact-grid">
          <div className="fact"><strong>Official-first</strong><span>Claims tied to a dated source</span></div>
          <div className="fact"><strong>No fake certainty</strong><span>Stock, QC and shipping can change</span></div>
          <div className="fact"><strong>Category-specific</strong><span>Different items need different checks</span></div>
          <div className="fact"><strong>Independent</strong><span>No affiliation with LoloBuy</span></div>
        </div>
      </section>

      <section className="section" id="categories">
        <div className="section-head">
          <div><span className="eyebrow">01 / Discovery index</span><h2>Start with the item type.</h2></div>
          <p>Every category opens the matching FindSpreadsheet research path—not a generic homepage. Review the listing, pictures, sizing and purchase route before leaving the index.</p>
        </div>
        <div className="category-grid">
          {categories.map(([index, name, icon, href, image]) => (
            <a className="category-card" key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={`Browse ${name} on FindSpreadsheet`}>
              <span className="category-image"><img src={image} alt={`${name} category still life`} width="720" height="480" loading="lazy" /></span>
              <span className="category-card-copy"><span><small>{index}</small><b aria-hidden="true">{icon}</b><strong>{name}</strong></span><i aria-hidden="true">↗</i></span>
            </a>
          ))}
        </div>

        <div className="product-showcase" aria-labelledby="latest-products-title">
          <div className="product-showcase-head">
            <div><span className="eyebrow">Latest product observations</span><h3 id="latest-products-title">A live-looking row, backed by real product pages.</h3></div>
            <p>Products, first images and CNY prices were observed on FindSpreadsheet on 13 August 2026. USD estimates use a rounded 1 USD ≈ 6.78 CNY benchmark; <a href="/sources/product-freshness/">open the dated price and link record</a>.</p>
          </div>
          <div className="product-marquee" aria-label="Latest FindSpreadsheet product details">
            <div className="product-track">
              {[...products, ...products].map((product, index) => (
                <a className="product-card" href={product.href} target="_blank" rel="noopener noreferrer" key={`${product.href}-${index}`} aria-hidden={index >= products.length ? "true" : undefined} tabIndex={index >= products.length ? -1 : undefined}>
                  <span className="product-image"><img src={product.image} alt={index < products.length ? product.title : ""} width="750" height="750" loading="lazy" /></span>
                  <span className="product-copy"><small>{product.category}</small><strong>{product.title}</strong><span><b>{product.usd}</b><em>{product.cny} observed</em></span><i>View product ↗</i></span>
                </a>
              ))}
            </div>
          </div>
          <a className="product-all-link" href="https://findspreadsheet.com/AllProducts/" target="_blank" rel="noopener noreferrer">Browse all current products on FindSpreadsheet →</a>
        </div>
      </section>

      <section className="search-stage" aria-label="FindSpreadsheet search">
        <div className="search-panel">
          <div><h2>Know what you are looking for?</h2><p>This search continues on FindSpreadsheet so results remain connected to the main, maintained product database.</p></div>
          <form className="search-form" method="get" action="https://findspreadsheet.com/search.html" target="_blank" rel="noopener noreferrer">
            <label className="sr-only" htmlFor="product-search">Search products</label>
            <input type="hidden" name="channelid" value="2" />
            <input id="product-search" type="search" name="keywords" placeholder="Search product names or categories" required />
            <button type="submit">Search database ↗</button>
          </form>
        </div>
      </section>

      <section className="section method-section" id="method">
        <div className="section-head">
          <div><span className="eyebrow">02 / LoloBuy workflow</span><h2>Understand each stage before you pay.</h2></div>
          <p>These are not decorative process cards. Each one opens a detailed, source-led guide to a real stage visible in LoloBuy’s current web application: creating an order from a product link, reviewing an item in the warehouse, and submitting stored items as an international parcel.</p>
        </div>
        <div className="method-grid">
          <a className="method-card method-card-link" href="/guides/lolobuy-link-ordering/"><span className="step">01</span><h3>Product link to order</h3><p>What LoloBuy’s link, search and manual-order routes ask you to confirm—and why a spreadsheet row is only the beginning.</p><span className="card-link-label">Read the ordering guide →</span></a>
          <a className="method-card method-card-link" href="/guides/lolobuy-warehouse-workflow/"><span className="step">02</span><h3>Warehouse evidence</h3><p>How to interpret stored status, normal or detailed photos, measurements and the limits of visible QC evidence.</p><span className="card-link-label">Read the warehouse guide →</span></a>
          <a className="method-card method-card-link" href="/guides/lolobuy-parcel-submission/"><span className="step">03</span><h3>Stored items to parcel</h3><p>A practical walkthrough of address, route, packaging, declaration, rehearsal and charge-review decisions.</p><span className="card-link-label">Read the parcel guide →</span></a>
        </div>
      </section>

      <section className="section guides-section" id="guides">
        <div className="section-head">
          <div><span className="eyebrow">03 / Practical guides</span><h2>Useful before a purchase.</h2></div>
          <p>Each card opens a complete independent page, not a placeholder. Use the QC checklist to inspect visible details, the weight guide to understand billable-weight logic, and the source ledger to see which statements come from LoloBuy and which are independent guidance.</p>
        </div>
        <div className="guide-grid">
          <a className="guide-card" href="/guides/qc-photo-checklist/"><small>Quality control / 8 min</small><h3>How to read warehouse QC photos</h3><p>A category-aware checklist for shape, stitching, labels, symmetry, measurements and photo limitations.</p><span className="card-link-label">Read the complete guide →</span></a>
          <a className="guide-card" href="/shipping/"><small>Shipping centre / 5 guides</small><h3>Estimate, pack, declare and track</h3><p>Five evidence-led pages separate billable weight, route eligibility, rehearsal, customs fields and delivery exceptions.</p><span className="card-link-label">Open the shipping centre →</span></a>
          <a className="guide-card" href="/sources/"><small>Research / dated ledger</small><h3>What we can verify</h3><p>A transparent record separating current LoloBuy interface evidence from independent editorial guidance.</p><span className="card-link-label">Open source ledger →</span></a>
        </div>
      </section>

      <section className="seo-spotlight" aria-labelledby="seo-spotlight-title">
        <div className="seo-spotlight-inner">
          <div><span className="eyebrow">04 / Long-form research</span><h2 id="seo-spotlight-title">SEO articles written to answer the full question.</h2></div>
          <div><p>The article library uses dated sources, category-specific examples and explicit evidence limits. Four complete 1,200–1,800 word guides now cover spreadsheet use, link integrity, QC photography and size-chart decisions.</p><a className="primary-cta" href="/seo-articles/">Open SEO Articles →</a></div>
        </div>
      </section>

      <section className="section" id="sources">
        <div className="section-head">
          <div><span className="eyebrow">05 / Source ledger</span><h2>Facts with a date attached.</h2></div>
          <p>Current public evidence is deliberately narrow. That is a strength: each record below opens a complete evidence file showing what was observed, what it supports and where the conclusion stops.<a className="section-text-link" href="/sources/">Open the complete source ledger →</a></p>
        </div>
        <div className="source-ledger">
          <div className="source-stamp"><span>Last public-source review</span><strong>13·08<br />2026</strong><span>Dates use day · month · year</span></div>
          <div className="source-rows">
            <a className="source-row" href="/sources/lolobuy-official-evidence/"><small>Official source</small><strong>Which ordering, warehouse, estimate, rehearsal and parcel features LoloBuy’s current public application actually confirms.</strong><span className="source-row-action"><em>lolobuy.com · reviewed 13 Aug 2026</em><b>Read official evidence →</b></span></a>
            <a className="source-row" href="/sources/findspreadsheet-database-evidence/"><small>Database source</small><strong>What a FindSpreadsheet row can document—and why it cannot prove live stock, authenticity, purchase acceptance or final condition.</strong><span className="source-row-action"><em>database method · reviewed 12 Aug 2026</em><b>Read database evidence →</b></span></a>
            <a className="source-row" href="/sources/product-freshness/"><small>Freshness record</small><strong>Every homepage product link, CNY observation and editorial USD calculation with a dated conversion benchmark.</strong><span className="source-row-action"><em>23 destinations tested · 13 Aug 2026</em><b>Audit products and prices →</b></span></a>
            <a className="source-row" href="/method/"><small>Editorial rule</small><strong>The repeatable method used to test destinations, date observations, classify claims and remove unsupported certainty.</strong><span className="source-row-action"><em>Independent editorial standard · version 1.0</em><b>Audit the method →</b></span></a>
          </div>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="section-head">
          <div><span className="eyebrow">06 / Clear answers</span><h2>Before you continue.</h2></div><p>Compact on mobile, expandable when needed, and written to answer the searcher’s real question.</p>
        </div>
        <div className="faq-list">
          <details><summary>Is this website operated by LoloBuy?</summary><p>No. This is an independent informational research site. LoloBuy names and marks are used only to identify the subject being discussed.</p></details>
          <details><summary>Does a spreadsheet listing prove that an item is in stock?</summary><p>No. Listings and seller availability can change. Confirm the current listing and available options on the relevant product or purchasing page before paying.</p></details>
          <details><summary>Does “QC photo available” guarantee product quality?</summary><p>No. A photo can help you inspect visible details, but lighting, angle, compression and hidden construction limit what it can prove. Use a category-specific checklist and request clarification where available.</p></details>
          <details><summary>Where do the category links go?</summary><p>Each category opens its matching FindSpreadsheet category page, where you can compare current product rows and open individual details.</p></details>
          <details><summary>Will all 24 languages use separate URLs?</summary><p>Yes. The production structure is planned around dedicated language routes, self-referencing canonical tags and corresponding hreflang links. Full translation follows the selected design so discarded concepts are not translated unnecessarily.</p></details>
          <details><summary>Can search engines index this site?</summary><p>Yes. The formal production domain permits crawling, uses index/follow directives and publishes an XML sitemap covering every current English content route.</p></details>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-main"><p><strong>Independent-use notice.</strong> This site is informational and is not affiliated with LoloBuy, Taobao, Weidian, 1688, Tmall or other third-party platforms. Product availability, pricing, shipping choices and platform terms may change; verify current information on the relevant source before making a purchase decision.</p><div className="footer-links"><a href="/seo-articles/">SEO Articles</a><a href="/sources/">Sources</a><a href="/updates/">Updates</a><a href="/editorial-policy/">Editorial policy</a><a href="/privacy/">Privacy</a><a href="#top">Back to top ↑</a></div></div>
      </footer>
    </div>
  );
}
