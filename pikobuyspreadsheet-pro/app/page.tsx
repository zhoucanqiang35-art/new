import ResearchScore from "./components/ResearchScore";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Brand from "./components/Brand";
import HeaderNav from "./components/HeaderNav";
import MobileFold from "./components/MobileFold";
import ProductSearch from "./components/ProductSearch";
import FeatureCards from "./components/FeatureCards";
import { getLocale, guideDefs } from "../lib/site-data";

const categories = [
  ["Shoes", "Profile · sole · heel · sizing", "/en/product-categories/shoes/", "01"],
  ["Hoodies", "Measurements · fabric · print · weight", "/en/product-categories/hoodies/", "02"],
  ["T-shirts", "Fit · material · placement · source", "/en/product-categories/t-shirts/", "03"],
  ["Jackets", "Lining · hardware · measurements", "/en/product-categories/jackets/", "04"],
  ["Pants & shorts", "Waist · inseam · fabric · weight", "/en/product-categories/pants-shorts/", "05"],
  ["Headwear", "Shape · size · stitching · details", "/en/product-categories/headwear/", "06"],
  ["Accessories", "Dimensions · close-ups · source", "/en/product-categories/accessories/", "07"],
  ["Jerseys", "Sizing · badges · print · fabric", "/en/product-categories/jerseys/", "08"],
  ["Electronics", "Model · visible state · route limits", "/en/product-categories/electronics/", "09"],
  ["All products", "Search the complete live database", "/en/product-categories/all-products/", "10"],
];

const intents = [
  ["Spreadsheet", "pikobuy spreadsheet · sheet · finds · links", "Start with a category, then reduce the list."],
  ["Source", "Taobao · Weidian · 1688 · Yupoo", "Confirm that the external page still matches the row."],
  ["Quality", "QC photos · size chart · measurements", "Use category-specific photo and sizing checks."],
  ["Shipping", "cost · estimate · weight · tracking", "Separate planning estimates from account-specific facts."],
  ["Trust", "review · safe · legit · returns", "Use official rules and recent evidence—not blanket claims."],
];

const faqs = [
  ["What is a PikoBuy spreadsheet?", "It is a discovery format for organizing possible product links, categories and research notes. A row is a lead, not proof that an item, seller, route or delivery outcome is reliable."],
  ["Does this website place PikoBuy orders?", "No. This independent guide and FindSpreadsheet help with product discovery and research. Accounts, purchase payments, warehouse actions, parcels, refunds and tracking belong to PikoBuy’s official platform."],
  ["What should I check in QC photos?", "Match the checks to the category: profile, sole and size label for shoes; measurements, seams and print placement for clothing; dimensions, interior and hardware for bags. Photos cannot prove hidden materials or long-term performance."],
  ["How should I estimate shipping cost?", "PikoBuy’s public estimator asks for destination, product type, weight, length, width and height. Treat the result as planning context until the warehouse parcel and eligible routes are known."],
  ["How long is the published warehouse return window?", "PikoBuy’s returns page describes a five-day application window, counted as 120 hours after the order reaches In Warehouse. Eligibility, seller agreement, condition and fees still matter."],
  ["Which countries should this site prioritize?", "PikoBuy does not publish audited customer totals by country. This site prioritizes major European and North American search markets, while public app-ranking signals help identify additional markets worth localized coverage."],
];

export default function Home() {
  return <main className="v3" id="top">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": [{ "@type": "WebSite", "@id": "https://pikobuyspreadsheet.pro/#website", url: "https://pikobuyspreadsheet.pro/", name: "PikoBuy Spreadsheet Pro", potentialAction: { "@type": "SearchAction", target: "https://findspreadsheet.com/search.html?channelid=2&method=1&keywords={search_term_string}", "query-input": "required name=search_term_string" } }, { "@type": "FAQPage", mainEntity: faqs.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) }] }) }} />
    <div className="v3-review">PUBLIC EDITION · INDEPENDENT GUIDE · PIKOBUY 2026</div>
    <header className="v3-header v3-wrap">
      <Brand />
      <HeaderNav />
      <LanguageSwitcher />
    </header>

    <section className="v3-hero v3-wrap">
      <div className="v3-hero-copy">
        <p className="v3-kicker"><i></i> INDEPENDENT PIKOBUY SPREADSHEET GUIDE</p>
        <h1>A smaller shortlist.<br/><em>A better decision.</em></h1>
        <p className="v3-deck">Search product finds, inspect the evidence behind each row, and understand PikoBuy’s published warehouse, shipping and return process before you commit.</p>
        <div id="search"><ProductSearch id="v3-query" /></div>
        <div className="v3-meta"><span><b>32</b> independent pages</span><span><b>07</b> top-level routes</span></div>
      </div>
      <div className="v3-route-map" aria-label="PikoBuy research route map">
        <div className="v3-map-title"><span>RESEARCH ROUTE / 01</span><b>From a link to a parcel decision</b></div>
        <div className="v3-map-grid">
          <div className="v3-map-node start"><span>01</span><b>Find</b><small>Product name or source link</small></div>
          <div className="v3-map-node"><span>02</span><b>Match</b><small>Category, options and seller page</small></div>
          <div className="v3-map-node"><span>03</span><b>Inspect</b><small>Warehouse photos and sizing</small></div>
          <div className="v3-map-node end"><span>04</span><b>Plan</b><small>Destination, weight and dimensions</small></div>
        </div>
        <div className="v3-map-alert"><span>!</span><p><b>Decision boundary</b> A spreadsheet row organizes research. It cannot guarantee quality, stock, customs clearance or delivery.</p></div>
      </div>
    </section>

    <section className="v3-answer"><div className="v3-wrap"><span>QUICK ANSWER</span><p>A useful <b>PikoBuy spreadsheet</b> should help you compare similar items, reopen the source listing, review category-specific QC photos, check sizing and think about shipping weight. Save a row only when you can explain why it deserves the shortlist.</p><a href="/en/how-to-use/">Read the complete workflow →</a></div></section>

    <FeatureCards locale={getLocale("en")!}/>

    <MobileFold title="Interactive row checker"><section className="v3-section v3-wrap" id="score">
      <div className="v3-section-head"><div><span>01 · UNIQUE TOOL</span><h2>Score the evidence,<br/>not the hype.</h2></div><p>Competitor pages explain checklists. This one lets you use the checklist. Tick only what the row actually shows; uncertainty should stay unticked.</p></div>
      <div className="v3-tool-layout"><ResearchScore/><aside><span>WHY THIS MATTERS</span><h3>Seven visible checks turn an endless spreadsheet into a defensible shortlist.</h3><p>Begin with category fit. Then inspect photos, sizing and the original source. Price becomes meaningful only beside comparable rows and likely shipping weight.</p><ul><li><b>6–7</b> Strong shortlist candidate</li><li><b>4–5</b> Research more</li><li><b>2–3</b> Weak row</li><li><b>0–1</b> Remove for now</li></ul><a href="/en/qc-photos/">Open the QC field guide →</a></aside></div>
    </section></MobileFold>

    <MobileFold title="Search intent map"><section className="v3-intents"><div className="v3-wrap">
      <div className="v3-section-head light"><div><span>02 · SEARCH INTENT MAP</span><h2>One query.<br/>One useful next step.</h2></div><p>The strongest SEO page does not repeat every keyword. It understands why the reader used it and routes that reader toward an answer, category or official source.</p></div>
      <div className="v3-intent-grid">{intents.map(([title, keywords, action], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><small>{keywords}</small><p>{action}</p></article>)}</div>
    </div></section></MobileFold>

    <MobileFold title="Product directory"><section className="v3-section v3-wrap" id="categories">
      <div className="v3-section-head"><div><span>03 · PRODUCT DIRECTORY</span><h2>Compare like<br/>with like.</h2></div><p>Category-first browsing makes missing photos, vague sizing and unrealistic weight notes easier to see. Every category below opens the matching part of the main FindSpreadsheet database.</p></div>
      <div className="v3-category-grid">{categories.map(([name, note, href, number]) => <a href={href} key={name}><span>{number}</span><div><h3>{name}</h3><p>{note}</p></div><strong>→</strong></a>)}</div>
    </section></MobileFold>

    <MobileFold title="Published order flow"><section className="v3-process"><div className="v3-wrap">
      <div className="v3-section-head light"><div><span>04 · PIKOBUY’S PUBLISHED FLOW</span><h2>What happens after<br/>you choose a link?</h2></div><p>PikoBuy’s official beginner guide publishes six steps. These stages explain when the source listing, warehouse photos, shipping choice and tracking information become relevant.</p></div>
      <ol><li><span>1</span><div><b>Select items</b><p>Confirm product, specification, colour and size on the source platform.</p></div></li><li><span>2</span><div><b>Search on PikoBuy</b><p>Paste a product link or keywords into the platform search.</p></div></li><li><span>3</span><div><b>Submit and pay</b><p>Select options and complete the first payment for the purchase order.</p></div></li><li><span>4</span><div><b>Warehouse inspection</b><p>Review check-in photos and visible defect information after arrival.</p></div></li><li><span>5</span><div><b>Choose shipping</b><p>Compare route rules, billing methods and the international shipping quote.</p></div></li><li><span>6</span><div><b>Track the parcel</b><p>The official guide says tracking information becomes available within three days after dispatch.</p></div></li></ol>
      <div className="v3-citation"><span>SOURCE CHECKED 18 AUG 2026</span><p>Process wording was reviewed against the platform’s published materials. Account-specific status belongs to the platform support channel.</p><a href="/en/sources/">Read methodology →</a></div>
    </div></section></MobileFold>

    <MobileFold title="Independent decision pages"><section className="v3-guides" id="guides"><div className="v3-wrap">
      <div className="v3-section-head"><div><span>05 · CONTENT HUB</span><h2>Every important question<br/>gets its own page.</h2></div><p>Dedicated pages prevent one homepage from becoming a keyword wall. They also create clearer internal links for spreadsheet, QC, shipping, returns, tracking, categories and source-methodology searches.</p></div>
      <div className="v3-guide-grid">{guideDefs.map((guide, index) => <a href={`/en/${guide.slug}/`} key={guide.slug}><span>{String(index + 1).padStart(2, "0")}</span><small>{guide.kicker}</small><h3>{guide.title}</h3><p>{guide.summary}</p><b>Read guide →</b></a>)}</div>
    </div></section></MobileFold>

    <MobileFold title="Frequently asked questions"><section className="v3-section v3-wrap v3-faq" id="faq">
      <div><span>06 · DIRECT ANSWERS</span><h2>PikoBuy spreadsheet FAQ</h2><p>Clear boundaries are part of useful SEO. These answers distinguish research guidance from official account, order and logistics support.</p></div>
      <div>{faqs.map(([question, answer], index) => <details open={index === 0} key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
    </section></MobileFold>

    <MobileFold title="Research sources"><section className="v3-ledger"><div className="v3-wrap"><div><span>RESEARCH SOURCE LEDGER</span><h2>Facts readers can review.</h2><p>The methodology page records the public materials checked for process and policy statements without sending visitors away from this site.</p></div><div><a href="/en/how-to-use/"><span>01</span><b>Platform overview</b><small>Discovery, purchasing, inspection and shipping</small><strong>→</strong></a><a href="/en/guides/"><span>02</span><b>Beginner workflow</b><small>Decision points across the order process</small><strong>→</strong></a><a href="/en/shipping/"><span>03</span><b>Shipping research</b><small>Destination, type, weight and dimensions</small><strong>→</strong></a><a href="/en/returns/"><span>04</span><b>Returns research</b><small>Eligibility, timing and possible fees</small><strong>→</strong></a></div></div></section></MobileFold>

    <footer className="v3-footer"><div className="v3-wrap"><Brand /><p>Independent informational website built to support FindSpreadsheet product research. It does not place orders, process payments, control parcels or guarantee listings.</p><div><a href="https://findspreadsheet.com/" target="_blank" rel="noreferrer">FindSpreadsheet ↗</a><a href="/en/faq/">FAQ</a><a href="#top">Back to top ↑</a></div></div></footer>
  </main>;
}
