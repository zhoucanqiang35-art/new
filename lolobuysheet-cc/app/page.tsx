import Link from "next/link";
import { Header, Footer, MobileModule, SearchBox } from "./components";
import { categories, faq, guides, markets, products } from "./data";

export default function Home() {
  const websiteSchema = { "@context": "https://schema.org", "@type": "WebSite", name: "LoloBuy Sheet", url: "https://lolobuysheet.cc/", description: "Independent LoloBuy spreadsheet research for product discovery, QC, warehouse planning and shipping." };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main>
        <section className="hero shell">
          <div className="hero-copy">
            <p className="eyebrow"><span></span>LoloBuy spreadsheet guide · 2026</p>
            <h1>Find smarter.<br/><em>Ship with fewer surprises.</em></h1>
            <p className="hero-text">An evidence-led LoloBuy spreadsheet for global buyers—built around source checks, QC decisions, warehouse planning and country-specific shipping questions.</p>
            <SearchBox />
            <div className="microproof"><span>Independent</span><span>Source-labelled</span><span>Built for US, Canada & Europe</span></div>
          </div>
          <aside className="research-card">
            <p className="card-label">Research desk / 21 Aug 2026</p>
            <div className="signal"><span className="pulse"></span><div><b>What we can verify</b><p>LoloBuy publicly describes China purchasing assistance, warehouse consolidation and global shipping.</p></div></div>
            <div className="signal"><span>06</span><div><b>Priority markets</b><p>Country pages are based on public destination signals—not invented user counts.</p></div></div>
            <div className="signal"><span>10</span><div><b>Direct category paths</b><p>Browse links open matching FindSpreadsheet categories, not empty placeholder pages.</p></div></div>
          </aside>
        </section>

        <section className="ticker" aria-label="Key principles"><div>VERIFY THE SOURCE <i>◆</i> REVIEW QC <i>◆</i> PLAN THE PARCEL <i>◆</i> CHECK THE LIVE QUOTE <i>◆</i> KNOW YOUR LOCAL RULES</div></section>

        <MobileModule title="Product categories" defaultOpen><section className="section shell" id="categories">
          <div className="section-head"><div><p className="eyebrow"><span></span>Product discovery</p><h2>Start with a category.<br/><em>Keep the shortlist small.</em></h2></div><Link className="text-link" href="/spreadsheet">View spreadsheet →</Link></div>
          <div className="category-grid">
            {categories.map((category) => (
              <Link className="category-card" href={`/categories/${category.slug}`} key={category.slug}>
                <span className="category-no">{category.glyph}</span><div><h3>{category.name}</h3><p>{category.note}</p></div><b>↗</b>
              </Link>
            ))}
          </div>
        </section></MobileModule>

        <MobileModule title="Product detail hub"><section className="section product-showcase">
          <div className="shell">
            <div className="section-head"><div><p className="eyebrow"><span></span>Product detail hub</p><h2>Open the card.<br/><em>Check the details.</em></h2></div><Link className="text-link" href="/products">View all product cards →</Link></div>
            <div className="product-grid home-products">{products.map((product)=><a className="product-card" href={product.live} key={product.slug}><div className="product-visual product-photo"><img src={product.image} alt={product.name}/><span>{product.label}</span></div><small>{categories.find((category)=>category.slug===product.category)?.name}</small><h3>{product.name}</h3><p>{product.summary}</p><strong>View on FindSpreadsheet ↗</strong></a>)}</div>
          </div>
        </section></MobileModule>

        <MobileModule title="Buyer workflow"><section className="dark-section">
          <div className="shell">
            <div className="section-head inverse"><div><p className="eyebrow"><span></span>Buyer workflow</p><h2>One decision at a time.</h2></div><p className="section-intro">A spreadsheet is useful when it turns a long list into a defensible shortlist.</p></div>
            <div className="steps">
              <article><small>Step 01</small><span>⌕</span><h3>Find the source</h3><p>Open the product record and confirm the original listing, variant and visible details.</p></article>
              <article><small>Step 02</small><span>◎</span><h3>Review the evidence</h3><p>Use warehouse photos to check identity, condition, quantity and measurements.</p></article>
              <article><small>Step 03</small><span>▣</span><h3>Plan the parcel</h3><p>Compare packed weight, dimensions, route restrictions and destination rules.</p></article>
              <article><small>Step 04</small><span>↗</span><h3>Use the live quote</h3><p>Final prices and available routes come from the platform at parcel submission.</p></article>
            </div>
          </div>
        </section></MobileModule>

        <MobileModule title="Market evidence"><section className="section shell">
          <div className="section-head"><div><p className="eyebrow"><span></span>Market evidence</p><h2>Where public signals<br/><em>actually exist.</em></h2></div><p className="section-intro dark">LoloBuy does not publish country-level user totals. We rank markets by traceable public evidence and label uncertainty.</p></div>
          <div className="market-list">
            {markets.map((market) => (
              <Link className="market-row" href={`/markets/${market.slug}`} key={market.slug}>
                <span className="country-code">{market.flag}</span><div><small>{market.tier}</small><h3>{market.name}</h3></div><p>{market.summary}</p><span className="confidence">{market.confidence}</span><b>→</b>
              </Link>
            ))}
          </div>
        </section></MobileModule>

        <MobileModule title="Knowledge base"><section className="section guides-section">
          <div className="shell">
            <div className="section-head"><div><p className="eyebrow"><span></span>Knowledge base</p><h2>Guides with limits,<br/><em>not marketing promises.</em></h2></div><Link className="text-link" href="/seo-articles">Browse all articles →</Link></div>
            <div className="guide-grid">
              {guides.map((guide, index) => <Link className={index === 0 ? "guide-card featured" : "guide-card"} href={`/seo-articles/${guide.slug}`} key={guide.slug}><small>{guide.kicker} · {guide.read}</small><h3>{guide.title}</h3><p>{guide.dek}</p><span>Read article →</span></Link>)}
            </div>
          </div>
        </section></MobileModule>

        <MobileModule title="Editorial standard"><section className="section shell trust-split">
          <div className="trust-quote"><p className="eyebrow"><span></span>Editorial standard</p><blockquote>“If a claim cannot be traced, dated or clearly labelled as opinion, it does not belong in the guide.”</blockquote><Link href="/sources">Inspect every source →</Link></div>
          <div className="trust-list"><div><b>01</b><h3>Official claims</h3><p>Used for platform features, app identity and announcements.</p></div><div><b>02</b><h3>Community reports</h3><p>Used as individual experiences—not universal proof.</p></div><div><b>03</b><h3>Live decisions</h3><p>Current stock, prices and routes must be checked at the source.</p></div></div>
        </section></MobileModule>

        <MobileModule title="Frequently asked questions"><section className="section shell faq-section">
          <div><p className="eyebrow"><span></span>FAQ</p><h2>Short answers.<br/><em>Clear boundaries.</em></h2></div>
          <div className="faq-list">{faq.map(([q,a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div>
        </section></MobileModule>
      </main>
      <Footer />
    </>
  );
}
