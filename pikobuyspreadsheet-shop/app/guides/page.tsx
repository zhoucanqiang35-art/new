import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { ContentLayout, PageSearchParams, SourceNote } from "../content-layout";
import { normalizeLanguage } from "../i18n";

export const metadata: Metadata = {
  title: "PikoBuy Guides: QC Photos, Shipping, Fees & Returns",
  description: "Source-checked PikoBuy buyer guides covering the official six-step flow, warehouse QC photos, shipping planning, fees, restrictions and returns.",
};

const guideCards = [
  ["QC", "How to Read PikoBuy QC Photos", "Turn warehouse images into a category-specific decision checklist and understand what a visual inspection cannot prove.", "/guides/qc-photos", "#79e8ff"],
  ["KG", "PikoBuy Shipping Planning", "Separate product price from packaging, route availability, freight, the stated platform fee and third-party logistics risk.", "/guides/shipping", "#f8ff70"],
  ["120H", "PikoBuy Returns Explained", "Understand eligibility, the published 120-hour timing, seller acceptance, packaging conditions and the fee formula.", "/guides/returns", "#ff9fc3"],
];

const officialFlow = [
  ["01", "Choose", "Find a product on a supported marketplace and confirm variant, color and size."],
  ["02", "Search", "Paste a product link or keywords into PikoBuy so the platform can locate the item."],
  ["03", "Submit & pay", "Choose color, size and quantity, submit the order and make the first payment."],
  ["04", "Inspect", "Warehouse staff check the item in, take confirmation photos and look for visible defects."],
  ["05", "Pay shipping", "Choose a live route, submit the parcel and pay international freight."],
  ["06", "Track", "PikoBuy says tracking information becomes available within three days after dispatch."],
];

export default async function GuidesPage({ searchParams }: PageSearchParams) {
  const language = normalizeLanguage((await searchParams).lang);
  const suffix = language === "en" ? "" : `?lang=${language}`;
  return <ContentLayout language={language} kicker="BUYER GUIDES / OFFICIAL SOURCES" title="Slow down at the decisions that can still be changed." intro="These guides translate PikoBuy’s published process into practical checks. Official facts are linked; independent advice is labelled as judgment rather than a platform promise." tone="pink">
    <section className="content-section">
      <div className="guide-index-grid">{guideCards.map(([code, title, copy, href, color], index) => <a href={`${href}${suffix}`} key={code} style={{ "--card-color": color } as CSSProperties}><span>0{index + 1}</span><b>{code}</b><h2>{title}</h2><p>{copy}</p><strong>Read full guide ↗</strong></a>)}</div>
    </section>

    <section className="content-section">
      <div className="content-section-heading"><span>THE PUBLISHED FLOW</span><h2>PikoBuy’s six steps—and the question to ask at each one.</h2><p>The sequence below comes from the official beginner guide. Our added value is showing where a spreadsheet user should pause.</p></div>
      <div className="official-flow">{officialFlow.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
      <SourceNote><a href="https://www.pikobuy.com/guide" target="_blank" rel="noopener noreferrer">PikoBuy Beginner’s Guide</a>, checked 06 August 2026.</SourceNote>
    </section>

    <section className="content-section prose-grid">
      <aside className="sticky-index"><span>DECISION MAP</span><a href="#price">Price</a><a href="#evidence">Evidence</a><a href="#clock">Clock</a><a href="#parcel">Parcel</a><a href="#risk">Risk</a></aside>
      <div className="prose-body">
        <article id="price"><span>PRICE</span><h2>Separate an old row price from the actual purchase.</h2><p>PikoBuy says the final item price is based on the actual purchase. A spreadsheet price can help comparison, but it should carry a check date and must not be presented as guaranteed. Currency conversion, option-specific pricing and seller changes can all move the amount before the first payment.</p></article>
        <article id="evidence"><span>EVIDENCE</span><h2>Decide what the warehouse photographs must answer.</h2><p>The warehouse stage is most useful when the buyer already knows the category risk. Clothing needs measurements; footwear needs both profiles and insole length; fragile goods need close-ups and packaging evidence. PikoBuy allows extra detailed photos but warns that professional products may not receive professional inspection.</p></article>
        <article id="clock"><span>CLOCK</span><h2>Review QC while an eligible return may still be possible.</h2><p>The current returns page describes a 120-hour request window after the order becomes Warehoused, beginning from the next hour. It is not an automatic free refund: eligibility, seller agreement, condition, packaging and responsibility for the problem still matter.</p></article>
        <article id="parcel"><span>PARCEL</span><h2>Use live destination, product, weight and dimensions.</h2><p>PikoBuy’s shipping estimator asks for destination, product type, weight and three dimensions. The actual parcel route must still be selected at submission, where availability, price and timing may differ. Product price alone is therefore not a landed-cost estimate.</p></article>
        <article id="risk"><span>RISK</span><h2>Understand where third-party logistics begins.</h2><p>The shipping policy says international parcels are carried by third-party providers and identifies customs, confiscation, damage, loss and peak-period delays as risks. The user agreement also assigns users responsibility for prohibited items and destination rules. No spreadsheet can guarantee customs clearance.</p></article>
      </div>
    </section>

    <section className="article-promo"><span>LONG-FORM / 2026</span><h2>How to Use a PikoBuy Spreadsheet Without Skipping the Important Checks</h2><p>A source-checked walkthrough covering links, seller variants, warehouse photographs, the 120-hour policy, packaging, freight and the current 8% fee wording.</p><a href={`/seo-articles/pikobuy-spreadsheet-guide-2026${suffix}`}>Read the full article ↗</a></section>
  </ContentLayout>;
}
