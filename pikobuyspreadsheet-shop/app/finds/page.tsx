import { ContentLayout, PageSearchParams, SourceNote } from "../content-layout";
import { normalizeLanguage } from "../i18n";
import { ProductShowcase } from "../product-showcase";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "PikoBuy Finds: Product Categories, Link Checks & Buyer Notes",
  description: "Browse PikoBuy spreadsheet finds by category and learn how to verify seller links, variants, prices, warehouse evidence and shipping context.",
  path: "/finds",
});

const categories = [
  ["SN", "Shoes", "Sizing, insole length, sole shape, heel alignment and visible glue lines.", "https://findspreadsheet.com/shoes/"],
  ["HD", "Hoodies", "Chest and length measurements, fabric weight, print placement and hardware.", "https://findspreadsheet.com/hoodies-sweaters/"],
  ["TS", "T-Shirts", "Chest, length, collar shape, print scale, seams and fabric appearance.", "https://findspreadsheet.com/t-shirts/"],
  ["JK", "Jackets", "Zippers, insulation, lining, stitching, pockets and actual dimensions.", "https://findspreadsheet.com/jackets/"],
  ["PT", "Pants / Shorts", "Waist, inseam, rise, leg opening, fabric and pocket construction.", "https://findspreadsheet.com/pants-shorts/"],
  ["HW", "Headwear", "Crown shape, embroidery, stitching, tags and adjustable parts.", "https://findspreadsheet.com/headwear/"],
  ["AC", "Accessories", "Dimensions, finish, closures, small components and material claims.", "https://findspreadsheet.com/accessories/"],
  ["JR", "Jerseys", "Name sets, patches, placement, measurements and fabric details.", "https://findspreadsheet.com/AllProducts/"],
  ["EL", "Electronics", "Declared specification, voltage, plug, accessories, seals and route limits.", "https://findspreadsheet.com/electronics/"],
  ["OT", "Other Finds", "A research-first route for fragile, unusual or difficult-to-inspect products.", "https://findspreadsheet.com/AllProducts/"],
];

const rowChecks = [
  ["Original source", "Open the live seller page. A working URL does not prove that the same product or seller is still attached."],
  ["Exact variant", "Match color, size, quantity and model with the options that will actually be submitted to PikoBuy."],
  ["Current price", "Treat the sheet price as a reference date, not a guarantee. PikoBuy says the final price follows the actual purchase."],
  ["Marketplace", "Record whether the source is Taobao, Tmall, 1688, Weidian, Yupoo or another seller page."],
  ["Last checked", "A useful row should show when a human last confirmed the link and options. Undated rows may be stale."],
  ["QC plan", "Write the two or three photographs or measurements that could change the decision at the warehouse."],
];

export default async function FindsPage({ searchParams }: PageSearchParams) {
  const language = normalizeLanguage((await searchParams).lang);
  const suffix = language === "en" ? "" : `?lang=${language}`;
  return <ContentLayout language={language} pathname="/finds" kicker="PRODUCT INDEX / RESEARCH BEFORE PURCHASE" title="PikoBuy finds arranged by what you need to verify." intro="A useful spreadsheet is not a wall of links. It shortens discovery, then hands the buyer back to the live listing, the actual PikoBuy order options and the warehouse evidence." tone="blue">
    <section className="content-section">
      <div className="content-section-heading"><span>01 / PRODUCT DETAILS</span><h2>Current examples with a direct path to the main product page.</h2><p>Names, first images, item IDs and source prices were checked on FindSpreadsheet on 06 August 2026. Every card opens the exact corresponding product page—there is no extra local detail page or dead-end button.</p></div>
      <ProductShowcase />
      <div className="price-method-note"><strong>How the USD references were calculated</strong><p>The source rows are recorded in Chinese yuan. We used the 06 August 2026 reference rate of 1 CNY = 0.1481 USD and rounded to two decimals. These are research references, not checkout quotes; option pricing, seller updates, platform settlement and exchange rates can change the amount.</p></div>
    </section>

    <section className="content-section">
      <div className="content-section-heading"><span>02 / BROWSE</span><h2>Ten practical starting points.</h2><p>Each arrow opens the matching FindSpreadsheet category. This page remains the independent research layer: it explains what to inspect before you continue.</p></div>
      <div className="finds-grid">{categories.map(([code, name, copy, href], index) => <article key={code}><div><span>{String(index + 1).padStart(2, "0")}</span><b>{code}</b></div><h3>{name}</h3><p>{copy}</p><a href={href} target="_blank" rel="noopener noreferrer">Open category ↗</a></article>)}</div>
    </section>

    <section className="content-section prose-grid">
      <aside className="sticky-index"><span>HOW A FIND MOVES</span><a href="#discover">01 · Discover</a><a href="#verify">02 · Verify</a><a href="#submit">03 · Submit</a><a href="#inspect">04 · Inspect</a><a href="#ship">05 · Ship</a></aside>
      <div className="prose-body">
        <article id="discover"><span>01 / DISCOVER</span><h2>The spreadsheet solves the messy first search, not the whole purchase.</h2><p>PikoBuy’s official pages describe a service that can search products or accept a product link, image or request. Its beginner guide names Taobao, Tmall, 1688, Weidian and Yupoo as places where a buyer may first choose a product. A spreadsheet makes that discovery stage more manageable by grouping candidate links into categories.</p><p>The human mistake is to read a tidy row as a finished recommendation. A seller can replace photographs, change variants, adjust a price or stop carrying the item without breaking the URL. We therefore treat every row as a lead with a check date, not as a permanent product record.</p></article>
        <article id="verify"><span>02 / VERIFY THE LIVE SOURCE</span><h2>Open the listing before you become attached to the thumbnail.</h2><p>Compare the row with the live title, seller, images and option menu. Confirm that the displayed low price is not attached to an accessory or deposit while the pictured product costs more. The official beginner guide specifically tells buyers to confirm variant, color and size and recommends saving the product or store details.</p><p>For 1688 and other wholesale-oriented listings, pay extra attention to minimum quantities and option-specific pricing. That is a practical reading rule, not a PikoBuy guarantee. The final PikoBuy order screen should still be checked before the first payment.</p></article>
        <article id="submit"><span>03 / SUBMIT CAREFULLY</span><h2>The first payment follows the order you enter, not the spreadsheet label.</h2><p>PikoBuy’s published flow says the buyer pastes a link or keywords into the search box, selects color, size and quantity, submits the order and completes the first payment. It also says the final price is based on the actual purchase and an out-of-stock order will be refunded. That is why this site does not promise a fixed spreadsheet price.</p><p>If the option PikoBuy displays conflicts with the source listing, pause and resolve the difference. A wrong size chosen at submission cannot be repaired by a good QC photograph later.</p></article>
        <article id="inspect"><span>04 / INSPECT AT WAREHOUSE</span><h2>Use photographs to answer the category risk.</h2><p>PikoBuy says items reaching its warehouse are checked in, photographed and inspected for visible defects. The shipping policy says additional detailed photographs can be purchased, while also warning that special or professional products cannot necessarily receive professional inspection. Visual evidence can show measurements, alignment, finish or obvious damage; it cannot prove authenticity, internal performance or long-term durability.</p><p>Review the photographs promptly. For eligible items, the current returns page describes a five-day window after the order becomes “Warehoused,” counted as 120 hours beginning from the next hour. Seller acceptance, condition and category exclusions still apply.</p></article>
        <article id="ship"><span>05 / BUILD THE PARCEL</span><h2>A cheap find can become an expensive parcel.</h2><p>The official flow separates product payment from international shipping. At the parcel stage, the buyer chooses a route and pays freight. PikoBuy’s own estimator asks for destination, product type, weight, length, width and height—useful evidence that both mass and dimensions matter when planning, even though the exact chargeable-weight rule depends on the live route.</p><p>Before approving a find, think about packaging, fragility, batteries, liquids and destination restrictions. PikoBuy’s current user agreement states a platform service fee equal to 8% of freight; verify the live agreement and parcel screen before paying because policies and route availability can change.</p></article>
        <SourceNote><a href="https://www.pikobuy.com/guide" target="_blank" rel="noopener noreferrer">PikoBuy Beginner’s Guide</a>, <a href="https://www.pikobuy.com/" target="_blank" rel="noopener noreferrer">official homepage</a>, <a href="https://www.pikobuy.com/shipping-cost" target="_blank" rel="noopener noreferrer">shipping estimator</a> and <a href="https://www.pikobuy.com/protocol/user" target="_blank" rel="noopener noreferrer">User Agreement</a>, checked 06 August 2026.</SourceNote>
      </div>
    </section>

    <section className="content-section">
      <div className="content-section-heading"><span>03 / ROW STANDARD</span><h2>What a trustworthy product row should tell you.</h2><p>These fields do not make a product “good.” They make the uncertainty visible enough for a buyer to investigate.</p></div>
      <div className="evidence-table">{rowChecks.map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </section>

    <section className="split-callout"><div><span>BEFORE YOU CLICK</span><h2>A row is a lead, not a promise.</h2></div><div><p>Prices, variants, seller status and availability can change after a link is collected. Compare the spreadsheet entry with the original listing, then judge the actual warehouse evidence before international dispatch.</p><a href={`/qc-method${suffix}`}>Use the complete QC method ↗</a></div></section>
  </ContentLayout>;
}
