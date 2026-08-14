import type { Metadata } from "next";
import ArticleShell from "../article-shell";

export const metadata: Metadata = {
  title: "LoloBuy Guides | Spreadsheet, QC, Links and Shipping Research",
  description: "Detailed independent guides for reading LoloBuy spreadsheet rows, checking product links, reviewing QC photos and understanding shipping weight.",
};

export default function GuidesPage() {
  return (
    <ArticleShell eyebrow="Practical guide library · Reviewed 13 August 2026" title="Detailed guides for the decisions a spreadsheet row cannot make for you" lead="The strongest pages answer a complete practical question. These guides separate what LoloBuy publicly states from independent methods for checking links, measurements, warehouse photos and parcel assumptions.">
      <h2>Start with the correct guide</h2>
      <div className="article-index">
        <a href="/guides/lolobuy-link-ordering/"><small>10–12 min</small><strong>From Product Link to LoloBuy Order</strong><span>Read →</span><p className="article-summary">A field-by-field guide to product-link checks, manual-order inputs, variations, price observations and the official order-status sequence.</p></a>
        <a href="/guides/lolobuy-warehouse-workflow/"><small>10–12 min</small><strong>LoloBuy Warehouse Workflow and Photo Evidence</strong><span>Read →</span><p className="article-summary">What “stored” means, what the current warehouse interface exposes, how photo options fit the workflow and what visible evidence cannot prove.</p></a>
        <a href="/guides/lolobuy-parcel-submission/"><small>12–14 min</small><strong>How to Submit a LoloBuy Parcel Carefully</strong><span>Read →</span><p className="article-summary">A decision-focused walkthrough of address, delivery line, packaging, declaration, route limits, rehearsal and the displayed fee breakdown.</p></a>
        <a href="/shipping/"><small>Five-part library</small><strong>LoloBuy Shipping Research Centre</strong><span>Open →</span><p className="article-summary">Separate, non-duplicative guides for estimation, route eligibility, rehearsal packing, customs declarations and tracking exceptions.</p></a>
        <a href="/seo-articles/what-is-a-lolobuy-spreadsheet/"><small>12–15 min</small><strong>What Is a LoloBuy Spreadsheet—and How Should You Use One?</strong><span>Read →</span><p className="article-summary">A full workflow from discovery row to live seller page, variation check, evidence record and purchasing decision.</p></a>
        <a href="/seo-articles/how-to-check-lolobuy-product-links/"><small>11–14 min</small><strong>How to Check a LoloBuy Product Link Before Ordering</strong><span>Read →</span><p className="article-summary">A link-integrity method built around the official paste-a-link workflow and the reality that listings, redirects, options and prices change.</p></a>
        <a href="/seo-articles/lolobuy-size-chart-guide/"><small>13–16 min</small><strong>LoloBuy Size Chart Guide: Measure the Product, Not the Letter</strong><span>Read →</span><p className="article-summary">Separate body and garment measurements, normalize units and document a size choice without inventing a universal fit rule.</p></a>
        <a href="/guides/qc-photo-checklist/"><small>8 min</small><strong>How to Read Warehouse QC Photos</strong><span>Read →</span><p className="article-summary">A category-aware inspection order for identity, shape, symmetry, construction, measurements, labels and evidence limits.</p></a>
        <a href="/guides/shipping-cost-and-weight/"><small>6 min</small><strong>Actual Weight vs Volumetric Weight</strong><span>Read →</span><p className="article-summary">The concise concept guide; use the shipping centre when you need the full estimate, route, packing, declaration and delivery workflow.</p></a>
        <a href="/seo-articles/lolobuy-qc-photo-guide/"><small>12–15 min</small><strong>LoloBuy QC Photo Guide: A Defect-Finding Workflow</strong><span>Read →</span><p className="article-summary">A longer, evidence-led article showing how to turn photographs into a written decision instead of a vague “pass” or “fail.”</p></a>
      </div>
      <h2>How the guides are researched</h2>
      <p>LoloBuy-specific facts begin with the platform’s own public website. On 13 August 2026, the current production application continued to expose ordering, warehouse, estimate, rehearsal, parcel-submission and parcel-detail route definitions. We use those surfaces narrowly and do not stretch them into undocumented promises about every QC service, warehouse period, route, refund, discount or compensation outcome.</p>
      <p>The rest of each guide is clearly labelled independent educational guidance. That distinction matters. A general volumetric-weight formula can explain the concept, but the divisor and billing rule must still come from the current route. A photo checklist can organise visible evidence, but it cannot guarantee authenticity, hidden construction or long-term performance.</p>
      <h2>What makes a guide genuinely useful</h2>
      <div className="checklist-grid"><div className="checklist-card"><h3>It names the decision</h3><p>Readers should know exactly what they can decide after using the page—and what remains uncertain.</p></div><div className="checklist-card"><h3>It preserves the source date</h3><p>Commercial rules change. A review date prevents an old observation from silently becoming a current claim.</p></div><div className="checklist-card"><h3>It uses category examples</h3><p>Shoe sizing, jacket construction and electronic compatibility cannot be reduced to one universal checklist.</p></div><div className="checklist-card"><h3>It offers a repeatable method</h3><p>A strong article produces a record: link, variant, measurements, visible facts, unresolved questions and decision.</p></div></div>
      <h2>Recommended reading order for a first purchase</h2>
      <ol><li>Read the spreadsheet guide to understand what a row represents.</li><li>Use the product-link guide before relying on a saved link or thumbnail.</li><li>Apply the category-specific measurement checks before choosing a variation.</li><li>Use the QC-photo guide only after you have a clear expectation to compare against.</li><li>Open the shipping centre before interpreting estimates, routes, declarations or tracking.</li><li>Return to the source ledger whenever a claim sounds like a platform promise.</li></ol>
      <div className="article-note">No guide on this site replaces the current terms, quote, restriction notice or after-sales option shown by LoloBuy or the underlying seller at the time of your transaction.</div>
    </ArticleShell>
  );
}
