import type { Metadata } from "next";
import ArticleShell from "../article-shell";

export const metadata: Metadata = {
  title: "LoloBuy Spreadsheet FAQ | Links, QC, Sizing and Shipping",
  description: "Evidence-based answers about LoloBuy spreadsheets, product links, warehouse photos, sizing, price changes, shipping weight and site independence.",
};

export default function FaqPage() {
  return (
    <ArticleShell eyebrow="Frequently asked questions · Reviewed 13 August 2026" title="Straight answers to the questions a spreadsheet row leaves open" lead="These answers distinguish official LoloBuy statements from this site’s independent buying-research framework. Where the official public evidence is incomplete, the answer says so instead of guessing.">
      <h2>About the site and the spreadsheet</h2>
      <h3>Is this website operated by or affiliated with LoloBuy?</h3><p>No. It is an independent informational site about spreadsheet discovery and product research. LoloBuy’s name identifies the platform being discussed; it does not indicate sponsorship, endorsement or control.</p>
      <h3>What is a LoloBuy spreadsheet?</h3><p>In this site’s usage, it is an independent structured directory of product-discovery rows that may include a title, category, image, price observation, seller source and a route used for purchasing research. A spreadsheet row is not automatically an official LoloBuy listing, a stock guarantee or a quality certificate.</p>
      <h3>What does LoloBuy publicly show about ordering?</h3><p>In the production application reviewed 13 August 2026, LoloBuy exposes product-link, manual-order, order-confirmation, warehouse, rehearsal and parcel-submission workflows. Read those routes and fields as evidence that a surface exists—not proof that every product, country or account receives the same option.</p>
      <h2>Product links, prices and stock</h2>
      <h3>Does a working link prove the product is in stock?</h3><p>No. A working destination only proves that a page could be reached at the time checked. The seller may change stock, variations, price or the entire listing. Confirm the exact option immediately before any payment decision.</p>
      <h3>Why can the spreadsheet price differ from the live page?</h3><p>A spreadsheet records a moment in time. The live seller may change the base price, variation pricing, promotional state or domestic delivery charge. The selected size, colour or version may also cost more than the figure shown in a row. Treat the live selection and checkout information as current.</p>
      <h3>What should I do if a link redirects?</h3><p>Check whether the destination still represents the same item, seller and options. A redirect to a generic homepage, search page or unrelated listing should be treated as a broken research route even if the server technically returns a page.</p>
      <h2>Measurements and QC photos</h2>
      <h3>Can I choose a size from S, M, L or an EU/US label alone?</h3><p>That is risky. Compare the seller’s stated finished-garment or foot measurements with an item that already fits. Confirm the measurement points and units. A familiar label can represent a different physical size across sellers and products.</p>
      <h3>Does a warehouse QC photo guarantee quality or authenticity?</h3><p>No. It can show visible details under particular lighting, angle and compression. It cannot establish hidden construction, material composition, durability, electrical safety or authenticity by itself. Use multiple views and a category-specific checklist.</p>
      <h3>When should I ask for another photograph?</h3><p>When the decision depends on an area that is hidden, blurred, distorted by angle or affected by lighting. A useful request identifies the exact location and view needed—for example, a centred heel view, a tape measurement from defined points, or a clear image of the model label.</p>
      <h2>Shipping and official policy</h2>
      <h3>Can this site tell me the exact LoloBuy shipping price?</h3><p>No. A current quote depends on the packed parcel, destination, available route, dimensions, weight, restrictions and any route-specific charges. This site explains actual and volumetric weight concepts but does not invent a universal divisor or fixed rate.</p>
      <h3>Does combining products into one parcel always save money?</h3><p>Not necessarily. Consolidation may change fixed-charge efficiency, but dimensions, volumetric billing, packaging and restrictions can alter the result. The official homepage says stored products can be selected and submitted as one parcel; it does not prove that every consolidated parcel is cheaper.</p>
      <h3>Is rehearsal packing the same as shipping the parcel?</h3><p>No. The current interface describes rehearsal as simulated pre-packing. It can provide a more concrete packed weight and size before real parcel submission, but it does not create international tracking or remove route restrictions.</p>
      <h3>Can I use one volumetric divisor for every LoloBuy line?</h3><p>No. The general formula explains the concept, but the divisor, rounding and charging basis must come from the current eligible line. The shipping estimator guide deliberately does not publish one universal number.</p>
      <h3>Does a tax estimate guarantee that customs will charge exactly that amount?</h3><p>No. Declaration and tax-related fields help prepare the parcel record, while customs authorities apply the destination’s current rules. An estimate or absent tax line should not be rewritten as a guaranteed customs outcome.</p>
      <h3>What should I do when tracking stops updating?</h3><p>Match the parcel and waybill, save the last confirmed event, check recipient and carrier messages, then ask one evidence-led question through the relevant transaction or carrier channel. A pause is not proof of loss, and some routes may have limited redelivery or return handling.</p>
      <h3>Where are refund, insurance, warehouse-time and compensation rules?</h3><p>They must be confirmed from the current official policy or transaction interface that applies to the order. The stable public homepage evidence reviewed for this edition was not enough to publish universal figures or outcomes for those topics.</p>
      <h2>Languages and updates</h2>
      <h3>Will the production site have separate language URLs?</h3><p>Yes. The planned production structure uses dedicated language paths, corresponding page-to-page language links, self-referencing canonical tags and an x-default version. The layout remains the same across languages; only the copy and language-specific metadata change.</p>
      <h3>How often should links and factual claims be rechecked?</h3><p>Commercial observations should be rechecked more frequently than evergreen guidance. A link, price or platform rule needs a visible review date. When a material fact changes, the affected page and update log should change together. The current product freshness record lists twelve product links and the benchmark used for USD estimates.</p>
    </ArticleShell>
  );
}
