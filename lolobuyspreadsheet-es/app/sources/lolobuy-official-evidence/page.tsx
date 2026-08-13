import type { Metadata } from "next";
import ArticleShell from "../../article-shell";

export const metadata: Metadata = {
  title: "LoloBuy Official Website Evidence Audit | Reviewed 13 August 2026",
  description: "A factual audit of the ordering, warehouse, freight estimate, rehearsal and parcel-submission features visible in LoloBuy's current official web application.",
};

export default function LoloBuyOfficialEvidencePage() {
  return (
    <ArticleShell
      eyebrow="Official evidence file · Reviewed 13 August 2026"
      title="What LoloBuy’s official website actually confirms"
      lead="LoloBuy’s public website is a working application rather than a conventional brochure. That makes the interface itself useful evidence—but only if route names, form fields and status labels are read as observations, not turned into promises the platform never made."
      ctaTitle="See the rest of the evidence record"
      ctaText="Compare the official-platform file with database observations and the editorial verification standard."
      ctaHref="/sources/"
      ctaLabel="Return to the source ledger →"
    >
      <div className="article-meta"><span>Primary source: lolobuy.com</span><span>Public release: 1.0.1</span><span>Build shown: 3 Aug 2026</span><span>Review: 13 Aug 2026</span></div>
      <div className="article-note"><strong>Bottom line:</strong> the current public application supports a three-stage model—create or confirm a purchase request, review the item after warehouse arrival, then submit selected stored items as an international parcel. It does not establish one universal price, delivery time, QC standard, return outcome, insurance rule or shipping formula.</div>

      <h2>How this evidence was collected</h2>
      <p>We reviewed the production homepage and the routes, labels and form structures delivered by LoloBuy’s own current web application. The homepage identifies itself as release 1.0.1 and displays a build timestamp of 3 August 2026. On the review date, the application exposed public route definitions for freight estimation, product details, keyword and image search, manual ordering, order confirmation, stored items, rehearsal, parcel submission, order details and parcel details.</p>
      <p>This method can confirm that a surface exists in the current build and can show what information the interface is designed to collect. It cannot tell us that every country, user, product or parcel will receive every option. Some controls are conditional, some commercial terms are transaction-specific and some answers appear only after the user enters a destination, item, weight or account-level information.</p>

      <h2>Route-level observation record</h2>
      <table className="evidence-table"><thead><tr><th>Production route observed</th><th>Evidence role</th><th>Boundary</th></tr></thead><tbody>
        <tr><td><code>/estimate</code></td><td>Freight planning with destination, restrictions, warehouse, weight and dimensions.</td><td>Results require live inputs and do not create a permanent public rate.</td></tr>
        <tr><td><code>/player/stored</code></td><td>Stored-item stage before items are selected for a parcel.</td><td>Route existence does not prove identical storage or QC terms for every item.</td></tr>
        <tr><td><code>/submitRehearsal</code> and <code>/player/rehearsal</code></td><td>Simulated pre-packing request and rehearsal record.</td><td>Rehearsal is not dispatch and does not create carrier tracking.</td></tr>
        <tr><td><code>/submitParcel</code></td><td>Address, packaging, line, declaration, notice and charge review.</td><td>Fields and available services can be conditional.</td></tr>
        <tr><td><code>/player/parcel</code> and <code>/parcelDetail/:id</code></td><td>Parcel list, measurements, charges, waybill and logistics evidence.</td><td>A route definition does not guarantee delivery, redelivery, return or compensation.</td></tr>
      </tbody></table>
      <p>Some transaction routes can require sign-in or an eligible stored item before their full controls are visible. The evidence file records route definitions and interface structures delivered by the current production application; it does not claim that anonymous visitors can complete every workflow.</p>

      <figure className="evidence-figure">
        <div className="decision-flow">
          <div><small>01 / ORDER</small><strong>Define the item</strong><p>Link, title, variation, current price, domestic freight, quantity and reference images.</p></div>
          <div><small>02 / WAREHOUSE</small><strong>Review arrival evidence</strong><p>Stored-item status, quality information, normal photos and optional detailed-photo surfaces.</p></div>
          <div><small>03 / PLAN</small><strong>Estimate or rehearse</strong><p>Destination, restrictions, weight and dimensions shape the available route comparison.</p></div>
          <div><small>04 / PARCEL</small><strong>Submit the shipment</strong><p>Address, packing, line, declaration, notices and itemised charge fields come together.</p></div>
        </div>
        <figcaption>Independent evidence map based on functions visible in LoloBuy’s production application on 13 August 2026. It explains the observed workflow; it is not an official service guarantee.</figcaption>
      </figure>

      <h2>1. Product discovery and ordering are separate from fulfilment</h2>
      <p>The application contains product-detail, keyword-search, image-search and manual-order routes. The manual-order interface asks for more than a pasted URL: it includes a product title, specification or SKU, commodity price, domestic freight, quantity and supporting images, followed by add-to-cart or buy-now actions. That field structure tells us something practical. A source link identifies where an item was found, while the option, price and image identify what the buyer intends to request.</p>
      <p>It would be wrong to convert the existence of this form into the claim that any Chinese marketplace item can always be purchased. Seller restrictions, unsupported goods, changed listings or platform-specific conditions can still intervene. The safe conclusion is narrower: LoloBuy provides structured ways to identify a product request, and users should review every generated order field before payment.</p>

      <h2>2. Order status labels describe domestic progress first</h2>
      <p>The current interface defines stages including pending payment, processing, ordering, shipped, arrived in warehouse, cancelled, returning, returned, submitted package and completed. These labels separate product acquisition from international parcel delivery. In particular, “shipped” in the product-order sequence describes movement toward the warehouse; it should not automatically be read as international dispatch to the buyer’s address.</p>
      <p>The distinction matters for anyone starting from a spreadsheet. Paying for the product does not complete the international-shipping decision. Warehouse arrival creates a new decision point: confirm what arrived, inspect the evidence available for that stored item, resolve any important discrepancy and only then select items for a parcel.</p>

      <h2>3. Warehouse photos are evidence, not a blanket QC guarantee</h2>
      <p>LoloBuy’s current application contains a stored-items area, a quality-information component, normal-photo labels and an additional detailed or HD photo service surface. These elements support the statement that users can encounter warehouse-related visual evidence. They do not support the much stronger claim that every item is fully inspected against one universal checklist or that photographs prove authenticity, internal construction, electrical safety or durability.</p>
      <p>A photograph is useful when the question is visible and specific: Does the colour broadly match? Is the selected label shown? Are both shoes present? Is the printed placement visibly skewed? It is much weaker for hidden materials or long-term performance. The honest editorial response is to ask what a particular image actually shows, then name what remains unobserved.</p>

      <h2>4. Freight estimates depend on parcel inputs</h2>
      <p>The estimate interface asks for destination, restriction information, warehouse choice, weight and package length, width and height. Its result structures can expose transit-time information, real versus volumetric weight, maximum-edge or combined-dimension limits, weight ranges and fees. This confirms that the route comparison depends on both where the parcel is going and what the packed parcel looks like.</p>
      <p>It does not justify publishing a single permanent rate or volumetric divisor for “LoloBuy shipping.” A route can apply different charging logic or eligibility constraints, and available lines can change with destination, restricted contents and dimensions. The useful action is to enter the current parcel data and compare the actual result, not to force every shipment into an old formula copied from a forum post.</p>

      <h2>5. Rehearsal is pre-packing, not dispatch</h2>
      <p>The rehearsal interface describes a simulated pre-packing step. It can produce packed weight and dimensions before the user proceeds to a real parcel. This is especially useful when consolidation or protective packaging may materially change the route comparison. It is also easy to misunderstand: a rehearsal result is not an international shipment, does not create tracking and does not override route restrictions.</p>
      <p>The correct sequence is to resolve product-level questions first, then use rehearsal when a more concrete packed size would improve the shipping decision. After that, the real parcel still requires its own review and submission.</p>

      <h2>6. Parcel submission combines address, route and customs decisions</h2>
      <p>The submit-parcel flow contains address and product information, packaging and value-added service choices, route selection, declaration currency and method, English declaration item names, quantities, weights and declared costs. Fee-detail structures can conditionally include shipping, first- and continued-weight charges, customs-related charges, fuel, service or operation fees, value-added services, tax and discounts.</p>
      <p>The word “conditionally” is essential. Seeing a charge label in application code does not mean it appears on every parcel. The transaction-specific review should answer three questions: Is the address correct? Is the chosen line eligible for these items and dimensions? Do the declaration and fee breakdown accurately describe what is being submitted?</p>

      <h2>What the current official application supports—and what it does not</h2>
      <table className="evidence-table"><thead><tr><th>Observed official surface</th><th>Supported conclusion</th><th>Unsupported leap</th></tr></thead><tbody>
        <tr><td>Product detail, search and manual order</td><td>The application provides multiple ways to identify or enter a product request.</td><td>Every pasted product will be purchasable, returnable or internationally shippable.</td></tr>
        <tr><td>Structured order fields</td><td>A link may need a title, variant, price, freight, quantity and image to become a clear request.</td><td>A spreadsheet’s saved price or option is permanently current.</td></tr>
        <tr><td>Order and warehouse statuses</td><td>Domestic purchasing, warehouse arrival and parcel submission are distinct stages.</td><td>One guaranteed processing time or delivery date applies to every order.</td></tr>
        <tr><td>Normal and detailed-photo surfaces</td><td>Photo-related evidence can be associated with stored items.</td><td>Every item receives identical inspection or photographs prove authenticity.</td></tr>
        <tr><td>Estimate and rehearsal routes</td><td>Weight, dimensions, destination and restrictions can affect route comparison.</td><td>One permanent rate, divisor or shipping line applies universally.</td></tr>
        <tr><td>Parcel and fee-detail fields</td><td>Submission joins address, packaging, line, declaration and component-charge decisions.</td><td>Every displayed charge type or service is charged on every parcel.</td></tr>
      </tbody></table>

      <h2>Notices that deserve real attention</h2>
      <p>The current application includes route notices warning that some lines may not offer overseas redelivery or return and advising users to monitor logistics and contact support when tracking becomes abnormal. It also presents customs and tax risk notices. These are not reasons to assume a bad outcome; they are reasons to read the selected line’s live terms instead of applying another route’s experience to the current parcel.</p>
      <p>For the same reason, this evidence file does not publish a universal storage duration, insurance promise, compensation amount, refund policy or return window. Those claims require a stable, current official statement tied to the relevant scenario. If the answer is shown only inside a specific order or parcel, the user should rely on that live transaction record.</p>

      <h2>A practical reader checklist</h2>
      <ol>
        <li>Use LoloBuy’s live order fields to confirm the exact item, option, price and domestic freight.</li>
        <li>Follow the product status until warehouse arrival; do not confuse domestic shipment with international dispatch.</li>
        <li>Judge warehouse photos only against visible, category-specific questions.</li>
        <li>Enter current destination, weight, dimensions and restrictions before comparing routes.</li>
        <li>Use rehearsal as a packing estimate when dimensions matter, not as proof that a parcel has shipped.</li>
        <li>Review the address, declaration, line notices and component charges immediately before parcel submission.</li>
      </ol>

      <div className="source-footnotes"><h2>Primary source reviewed</h2><ol><li><a href="https://www.lolobuy.com/" target="_blank" rel="noopener noreferrer">LoloBuy official web application</a>, production homepage, release metadata, route definitions and interface labels reviewed 13 August 2026. Public release displayed: 1.0.1; build timestamp displayed: 3 August 2026.</li></ol></div>
    </ArticleShell>
  );
}
