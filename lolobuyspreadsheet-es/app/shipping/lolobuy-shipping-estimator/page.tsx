import type { Metadata } from "next";
import ArticleShell from "../../article-shell";

export const metadata: Metadata = {
  title: "How to Use the LoloBuy Shipping Estimator | Weight and Dimensions",
  description:
    "A field-by-field guide to LoloBuy shipping estimates, actual and volumetric weight, route limits and quote records, reviewed 13 August 2026.",
};

export default function ShippingEstimatorPage() {
  return (
    <ArticleShell
      eyebrow="Shipping guide 01 · Estimate and billable weight"
      title="Use the shipping estimator without turning an estimate into a promise"
      lead="The useful question is not ‘What is LoloBuy shipping?’ It is ‘What inputs produced this route result for this destination and this parcel today?’ This guide shows how to preserve that context."
      ctaTitle="Choose a route after the estimate"
      ctaText="Continue with the delivery-line guide to compare eligibility, limits, timing language and route notices."
      ctaHref="/shipping/lolobuy-delivery-lines/"
      ctaLabel="Compare delivery lines →"
    >
      <div className="article-meta"><span>Reviewed 13 Aug 2026</span><span>Official route observed: /estimate</span><span>10–12 min read</span></div>
      <div className="article-note"><strong>What the official interface proves:</strong> the current freight-estimate surface asks for destination, restriction information, warehouse, weight and package length, width and height, then returns route-dependent information. It does not prove a permanent price or one divisor for every line.</div>

      <h2>Start with a parcel description, not a guessed price</h2>
      <p>Before opening an estimator, write down the parcel you are trying to model. Include the destination, the items likely to travel together, any battery, liquid, branded, fragile or otherwise restricted characteristic shown by the platform, the warehouse involved, an estimated scale weight and three package dimensions. Leaving out the dimensions may make a light but bulky parcel look cheaper than it becomes after packing.</p>
      <p>A spreadsheet product row cannot provide a final international-shipping price. It may help identify the product, but international freight is calculated later, after the platform knows more about the parcel. Domestic seller freight, product price, international freight, customs charges and optional services are separate cost categories and should not be collapsed into one number.</p>

      <h2>The inputs observed in the current estimator</h2>
      <table className="evidence-table"><thead><tr><th>Input</th><th>How to use it</th><th>Common error</th></tr></thead><tbody>
        <tr><td>Destination</td><td>Select the actual destination rather than a nearby country used only to browse prices.</td><td>Assuming routes and charges are interchangeable between countries.</td></tr>
        <tr><td>Restriction information</td><td>Describe or select the parcel characteristics the live interface requests.</td><td>Testing an ordinary-goods quote for a parcel that contains a restricted item.</td></tr>
        <tr><td>Warehouse</td><td>Use the warehouse associated with the stored goods or the option displayed for the estimate.</td><td>Treating warehouse choice as irrelevant to route availability.</td></tr>
        <tr><td>Weight</td><td>Enter the best current scale-weight estimate and keep the unit visible in the record.</td><td>Entering product-only weight while forgetting cartons and protective material.</td></tr>
        <tr><td>Length, width and height</td><td>Use external packed dimensions in the order requested by the form.</td><td>Using garment measurements or an unpacked product size as parcel dimensions.</td></tr>
      </tbody></table>

      <h2>Actual weight and volumetric weight answer different questions</h2>
      <p>Actual weight is what the packed parcel weighs on a scale. Volumetric weight is a space-based calculation derived from the parcel’s external dimensions and a divisor specified by the relevant route or carrier. A large, light parcel can occupy enough transport space that a volumetric measure becomes important even when its scale weight is modest.</p>
      <p>The general teaching formula is length × width × height ÷ divisor. The formula explains the concept; it does not identify the correct divisor. Different lines can use different rules, rounding methods or thresholds. This site therefore does not publish one “LoloBuy divisor.” Read the charging basis presented for the current route and save it with the quote.</p>

      <figure className="evidence-figure">
        <div className="decision-flow">
          <div><small>MEASURE</small><strong>Scale weight</strong><p>Record the complete packed parcel rather than only the products.</p></div>
          <div><small>MEASURE</small><strong>External size</strong><p>Capture length, width and height after packaging choices are considered.</p></div>
          <div><small>COMPARE</small><strong>Route rule</strong><p>Read the line-specific weight basis, divisor or threshold if displayed.</p></div>
          <div><small>RECORD</small><strong>Quoted result</strong><p>Save the route, date, inputs, limits, notices and fee details together.</p></div>
        </div>
        <figcaption>This is an independent decision diagram, not an official calculator. Use the live LoloBuy result for the current parcel.</figcaption>
      </figure>

      <h2>Read route results as a comparison table</h2>
      <p>The current application structures can expose real versus volumetric measures, transit-time wording, maximum-edge or combined-dimension limits, weight ranges and charge information. Each result should be read as one candidate line under the inputs you supplied. A cheaper result is not automatically usable if the parcel exceeds a limit or includes an ineligible item.</p>
      <p>Transit-time numbers should remain labelled as estimates unless the live route terms explicitly state otherwise. Record the unit and the wording shown. “Estimated days” is not the same claim as “delivery guaranteed by a date,” and an estimate usually does not include every possible warehouse, customs or last-mile delay.</p>

      <h2>Packaging is part of the estimate</h2>
      <p>Removing an unnecessary retail box can reduce volume, while reinforced corners, double boxing or protective fill can increase it. Neither choice is automatically correct. Shoes, structured bags, electronics and fragile objects may need more protection than compressible clothing. The packing goal should be to balance protection, route eligibility and billable size—not simply to minimise one dimension.</p>
      <p>If packing uncertainty is large enough to change the available lines or the cost comparison, a rehearsal result may be more useful than repeated guessing. Rehearsal is still a pre-packing stage, not dispatch, but it can replace assumed dimensions with a more concrete packed measurement when the service is available.</p>

      <h2>Keep the estimate separate from the complete purchase cost</h2>
      <p>A freight result should not be added to an old spreadsheet price and presented as a guaranteed “total cost.” Product price can change with the selected variation; domestic seller freight can appear before warehouse arrival; optional photos or packing services can be separate; and international freight can later reflect final measurements or conditional charges. Customs assessment is another decision outside the product row.</p>
      <p>Build a cost record with separate columns for the observed product amount, selected-option amount, domestic freight, warehouse or optional services, international shipping estimate, later shipping adjustment and customs or recipient-side charge. A blank field means “not yet known,” not zero. This structure makes it possible to update one component without rewriting the others.</p>

      <h2>Use ranges when measurements are still uncertain</h2>
      <p>If exact packed dimensions are unavailable, test a clearly labelled reasonable range instead of choosing one optimistic number. For example, compare the same item set under a compact packing assumption and a protected packing assumption. The purpose is not to predict the warehouse result precisely; it is to discover whether the route decision remains stable when the package changes.</p>
      <p>If the same eligible lines remain in roughly the same order, the early estimate may be enough for planning. If a modest size increase removes the preferred line or materially changes the displayed charge, the decision is sensitive to packing and rehearsal becomes more valuable. Save both scenarios so the later measured result can be compared with the assumptions that produced the plan.</p>

      <h2>Save enough evidence to reproduce the quote</h2>
      <ol>
        <li>Capture the date and destination.</li>
        <li>List every item and restriction included in the model.</li>
        <li>Record weight and dimensions with units.</li>
        <li>Save each eligible route name and its displayed limits.</li>
        <li>Preserve timing wording rather than rewriting it as a guarantee.</li>
        <li>Capture the complete charge breakdown and any discount condition.</li>
        <li>Repeat the estimate after final or rehearsal measurements materially change.</li>
      </ol>

      <h2>What the estimate cannot settle</h2>
      <p>An estimate cannot decide customs assessment, seller after-sales rights, product authenticity, warehouse condition or final delivery success. It also cannot prove that a line offered today will still be available after another item is added or the packed dimensions change. Treat it as a planning result with a timestamp, not a permanent menu.</p>

      <div className="source-footnotes"><h2>Primary source reviewed</h2><ol><li><a href="https://www.lolobuy.com/" target="_blank" rel="noopener noreferrer">LoloBuy official web application</a>, current <code>/estimate</code> route definition and freight-estimate interface structures reviewed 13 August 2026. The route may require live inputs or account context to show transaction-specific results.</li></ol></div>
    </ArticleShell>
  );
}
