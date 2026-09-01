import type { Metadata } from "next";
import { primaryLinks } from "../content";
import SiteFooter from "../site-footer";
import SiteHeader from "../site-header";
import { indexableRobots, pageAlternates } from "../seo";

export const metadata: Metadata = {
  title: "Sources & Editorial Policy | PikoBuy Spreadsheet Europe",
  description: "The official pages, verification rules and editorial boundaries used by PikoBuy Spreadsheet Europe.",
  robots: indexableRobots,
  alternates: pageAlternates("/sources"),
};

const sourceGroups = [
  { id: "pikobuy-sources", title: "PikoBuy platform source record", external: false, links: [
    ["Official homepage", "", "Product sourcing, purchasing assistance, warehouse inspection and global shipping overview. Verified 30 August 2026."],
    ["Beginner guide", "", "Six-step flow covering selection, search, first payment, warehouse inspection, shipping payment and tracking availability within three days after shipment. Verified 1 September 2026."],
    ["Shipping estimator", "", "Destination, product type, weight in kilograms and parcel length, width and height in centimetres. Verified 26 August 2026."],
    ["Shipping terms", "", "Forwarding process, inspection boundaries, third-party logistics and cross-border risks including loss, damage and peak-season delays. Verified 1 September 2026."],
    ["Returns & Exchanges", "", "Five-day/120-hour application window, eligibility, exclusions, responsibility and published fee formula. Verified 26 August 2026."],
    ["User Registration Agreement", "", "Third-party logistics boundaries, insured-delay definition, compensation exclusions, international returns, parcel insurance and customs document requests. Verified 1 September 2026."],
    ["Terms of Service", "", "Platform scope, logistics tracking support, force-majeure limits, cross-border charges, seller-of-record limitation and policy changes. Verified 1 September 2026."],
  ]},
  { id: "eu-customs-sources", title: "European Union VAT and customs source record", external: false, links: [
    ["Temporary low-value customs duty guidance", "", "European Commission explanation of the €3-per-tariff-item duty applying to qualifying distance-sale consignments up to €150 from 1 July 2026 until 1 July 2028. Last updated 20 July 2026; verified 30 August 2026."],
    ["Customs formalities for low-value consignments", "", "European Commission record of the end of the €22 import VAT exemption, customs declarations for all imported goods and the IOSS and special-arrangements mechanisms. Verified 30 August 2026."],
    ["VAT taxable amount for imported goods", "", "European Commission explanation that the import VAT base can include customs value, duties, charges and incidental costs such as packing, transport and insurance. Verified 30 August 2026."],
    ["Calculation of customs duties", "", "European Commission overview of tariff classification, origin and customs value, including transaction value as the main valuation method. Verified 30 August 2026."],
  ]},
  { id: "findspreadsheet-sources", title: "FindSpreadsheet product sources", external: true, links: [
    ["FindSpreadsheet home", "https://findspreadsheet.com/", "Main database context, product count claim and categories."],
    ["All products", "https://findspreadsheet.com/AllProducts/", "Searchable product catalogue and detail routes."],
    ["PikoBuy spreadsheet guide", "https://findspreadsheet.com/pikobuy-spreadsheet/", "Current main-site research workflow."],
  ]},
];

export default function SourcesPage() {
  return <main className="article-page sources-page">
    <div className="preview-bar">Independent research hub · 2026</div>
    <SiteHeader />
    <section className="article-hero shell"><div className="breadcrumbs"><a href="/">Home</a><span>/</span><b>Sources</b></div><p className="eyebrow"><span /> Transparency</p><h1>Sources, limits and editorial policy.</h1><p className="article-deck">A clear record of what we verify, how we describe changing information, and what this independent site never claims.</p></section>
    <section className="source-policy shell"><div className="policy-grid"><article><span>01</span><h2>Official first</h2><p>Platform procedures, deadlines and fees are checked against the most relevant PikoBuy page, not copied from an unrelated guide.</p></article><article><span>02</span><h2>No invented country data</h2><p>PikoBuy does not publish public country-level user shares. Market priorities are labelled as a localisation plan, not official usage statistics.</p></article><article><span>03</span><h2>Changing data stays qualified</h2><p>Prices, routes, promotions, availability and seller decisions are described with verification dates and a reminder to confirm the current page.</p></article></div>
      {sourceGroups.map((group) => <div className="source-group" id={group.id} key={group.title}><h2>{group.title}</h2>{group.links.map(([label, href, note]) => group.external ? <a href={href} key={href}><div><b>{label}</b><p>{note}</p></div><span>Open FindSpreadsheet ↗</span></a> : <div className="source-record" key={label}><div><b>{label}</b><p>{note}</p></div><span>Verified record</span></div>)}</div>)}
    </section>
    <section className="cta"><div className="shell"><div><p>Start with live product data</p><h2>Browse the database, then verify before paying.</h2></div><a className="button button-invert" href={primaryLinks.products}>Browse all products <span>↗</span></a></div></section>
    <SiteFooter />
  </main>;
}
