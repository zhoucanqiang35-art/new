import type { Metadata } from "next";
import ArticleShell from "../../article-shell";

export const metadata: Metadata = {
  title: "LoloBuy Customs Declaration and Tax Fields | Parcel Guide",
  description:
    "A factual guide to the declaration currency, English item name, quantity, weight, declared cost and tax notices in LoloBuy parcel submission.",
};

export default function CustomsDeclarationPage() {
  return (
    <ArticleShell
      eyebrow="Shipping guide 04 · Declaration record"
      title="Describe the parcel accurately before customs sees it"
      lead="A declaration is not a place to copy a vague spreadsheet title or guess what produces the lowest tax. It is a structured description of what the parcel contains, prepared under the live route and destination instructions."
      ctaTitle="Follow the shipment after submission"
      ctaText="Use the tracking guide to connect the parcel record, waybill and logistics events without treating every pause as a loss."
      ctaHref="/shipping/lolobuy-tracking-exceptions/"
      ctaLabel="Read the tracking guide →"
    >
      <div className="article-meta"><span>Reviewed 13 Aug 2026</span><span>Official route observed: /submitParcel</span><span>10–12 min read</span></div>
      <div className="article-note"><strong>What the official interface proves:</strong> the current parcel-submission flow includes declaration currency and method plus item-level fields such as an English cargo name, quantity, weight and declared cost. Tax-related choices or notices can also appear. The interface does not guarantee a particular customs outcome.</div>

      <h2>Separate product discovery from customs description</h2>
      <p>A spreadsheet title is written to help someone find or recognise a product. A customs description serves a different purpose: it should identify the actual type of goods in understandable terms. Copying a branded marketing title, seller shorthand or an unrelated generic label can make the record less accurate.</p>
      <p>Start from the stored items that will actually enter the parcel. Group only items that can be truthfully described together under the current form instructions. If different products require different descriptions, quantities or values, record separate lines rather than forcing the whole parcel into one vague phrase.</p>

      <h2>Fields observed in the current submission flow</h2>
      <table className="evidence-table"><thead><tr><th>Field</th><th>Practical job</th><th>Check before submission</th></tr></thead><tbody>
        <tr><td>Declaration currency</td><td>Defines the currency used for the declared amounts.</td><td>The currency matches the amounts entered and the live route instruction.</td></tr>
        <tr><td>Declaration method</td><td>Controls how the application expects declaration information to be completed.</td><td>The selected method fits the current parcel and does not leave required fields unresolved.</td></tr>
        <tr><td>English item or cargo name</td><td>Describes the goods in a form intended for international handling.</td><td>The wording is specific, accurate and corresponds to the actual contents.</td></tr>
        <tr><td>Quantity</td><td>States how many units the declaration line represents.</td><td>The total agrees with the items placed in the parcel.</td></tr>
        <tr><td>Weight</td><td>Associates a weight with the declared goods under the interface rules.</td><td>Units are clear and totals do not conflict with the parcel record.</td></tr>
        <tr><td>Declared cost or amount</td><td>Records a monetary value for the declared line.</td><td>The amount is supported by the actual transaction and entered in the selected currency.</td></tr>
        <tr><td>Tax type or tax number</td><td>Collects destination- or route-dependent tax information when requested.</td><td>The live instructions are followed and the recipient supplies accurate information.</td></tr>
      </tbody></table>

      <h2>Write a useful English item name</h2>
      <p>A useful name identifies what the object is rather than only a brand, collection or seller phrase. “Cotton T-shirt,” “polyester shorts,” “wallet” or “sports cap” is more informative than an internal spreadsheet code. The exact wording should match the goods and any instructions shown by the platform; this article does not provide a universal customs vocabulary for every country.</p>
      <p>Avoid descriptions that are false, incomplete or deliberately designed to hide the contents. Accurate wording also helps later if the parcel record must be compared with a customs request, delivery exception or support conversation.</p>

      <h2>Reconcile quantity, weight and value</h2>
      <p>Declaration lines should add up to the parcel you are actually sending. Count the units, check that item-level weights and the parcel record are not obviously contradictory, and keep the selected currency visible. If the form calculates totals, review the result rather than assuming the arithmetic is correct merely because the interface accepted it.</p>
      <p>Use the real transaction evidence available to you when entering value. This site does not advise undervaluation, misdescription or dividing a true amount into misleading entries. Customs authorities—not a spreadsheet or independent guide—make the final assessment under the destination’s rules.</p>

      <figure className="evidence-figure">
        <div className="decision-flow">
          <div><small>CONTENTS</small><strong>List the goods</strong><p>Start from the stored items selected for this parcel.</p></div>
          <div><small>DESCRIBE</small><strong>Name them clearly</strong><p>Use accurate English item names under the live instructions.</p></div>
          <div><small>RECONCILE</small><strong>Check totals</strong><p>Quantity, weight, value and currency should describe one coherent parcel.</p></div>
          <div><small>PRESERVE</small><strong>Save the record</strong><p>Keep the submitted declaration, route notice and charge display together.</p></div>
        </div>
        <figcaption>Independent declaration workflow based on fields observed in LoloBuy’s current parcel-submission interface.</figcaption>
      </figure>

      <h2>Read tax notices literally</h2>
      <p>The current application includes customs and tax risk notices and can request tax-related information depending on the route or destination. A warning that customs inspection can create tax risk does not mean that every parcel will be charged the same amount. Conversely, the absence of an estimated tax line does not prove that no customs charge can occur.</p>
      <p>Keep platform estimates, carrier collection and customs assessment conceptually separate. If a route advertises a tax-handling model, save the exact current terms rather than shortening it to “tax free.” Commercial labels can have conditions, limits and destination-specific meanings that an informal phrase erases.</p>

      <h2>The recipient is part of the customs workflow</h2>
      <p>The parcel address, contact information and any requested tax identifier should be reviewed together. If customs or the carrier requests information, the recipient may need to cooperate within a deadline. Incorrect contact details can turn a solvable request into a delivery exception.</p>
      <p>Before submission, confirm the recipient understands that an international parcel can generate a request for identification, value evidence, tax information or payment depending on the destination and shipment. This is a risk-management step, not a prediction that the request will occur.</p>

      <h2>Keep the evidence behind the declaration</h2>
      <p>Save the relevant product or order record, selected variation, quantity, paid amount, domestic freight where shown and the final declaration summary. If several purchases are combined, keep a simple mapping between each stored item and its declaration line. This makes later questions easier to answer without reconstructing the parcel from memory.</p>
      <p>Evidence should remain private and be shared only through an authoritative platform, carrier or customs channel when required. A public forum is not an appropriate place for recipient identity, full address, tax number, order evidence or an unredacted parcel record.</p>

      <h2>Declaration accuracy and shipping protection are different jobs</h2>
      <p>An accurate description does not decide whether packaging is sufficient, and protective packaging does not correct an inaccurate declaration. Review the two jobs separately: the packing record explains how the goods are protected and measured, while the declaration record explains what the parcel contains and the values entered under the live instructions.</p>
      <p>This separation matters after a problem. Damage evidence belongs with packing and delivery records; a customs information request belongs with the declaration and transaction evidence. Mixing the two can hide the specific fact that needs clarification.</p>

      <h2>A declaration audit before clicking submit</h2>
      <ol>
        <li>Compare the selected stored items with every declaration line.</li>
        <li>Use accurate English names rather than spreadsheet shorthand.</li>
        <li>Reconcile item quantities with the parcel contents.</li>
        <li>Check weight units and obvious conflicts with the packed parcel.</li>
        <li>Confirm the currency and support for each declared amount.</li>
        <li>Complete tax-related fields only with accurate recipient information.</li>
        <li>Read the current line notice and preserve the submitted summary.</li>
      </ol>

      <h2>What this page cannot tell you</h2>
      <p>This guide cannot determine the legal classification, duty rate, import eligibility or documentation requirement for every product and country. Those questions depend on the goods, destination and current law. When the live route notice or customs authority requires information beyond the interface fields described here, use that authoritative instruction.</p>

      <div className="source-footnotes"><h2>Primary source reviewed</h2><ol><li><a href="https://www.lolobuy.com/" target="_blank" rel="noopener noreferrer">LoloBuy official web application</a>, parcel-submission declaration, tax-information and notice structures reviewed 13 August 2026. Customs outcomes and destination law are outside the application field evidence.</li></ol></div>
    </ArticleShell>
  );
}
