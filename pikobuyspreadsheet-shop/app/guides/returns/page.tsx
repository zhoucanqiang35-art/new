import type { Metadata } from "next";
import { ContentLayout, PageSearchParams, SourceNote } from "../../content-layout";
import { normalizeLanguage } from "../../i18n";

export const metadata: Metadata = {
  title: "PikoBuy Returns: 120-Hour Window, Eligibility & Fees",
  description: "Understand PikoBuy’s published five-day return window, seller acceptance, eligible and excluded goods, fee formula and packaging conditions.",
};

const eligibility = [
  ["Potentially eligible", "The seller offers a return guarantee, the item remains marketable under seller rules and warehouse time has not exceeded five days."],
  ["Seller agreement", "PikoBuy states it can return the product only when the seller agrees; the platform facilitates rather than guarantees acceptance."],
  ["Common exclusions", "Customized and second-hand goods, undergarments, food, overseas-origin goods and seller-specified exceptions appear on the official list."],
  ["Packaging removed", "Items whose packaging, tags or accessories were removed at the user’s request can be ineligible."],
  ["Special standards", "Sneakers, personal-care items, electronics, cameras, collectibles, books and other categories may need seals or protective elements intact."],
  ["Actual refund basis", "The official notes say the refund total is based on the product price actually paid."],
];

const responsibility = [
  ["Buyer changed mind", "Buyer", "Return shipping to seller + seller’s original domestic shipping + 5 RMB service fee."],
  ["Wrong product ordered", "Buyer", "The same unconditional-return formula may apply if the issue came from the buyer’s choice."],
  ["International shipping exceeds budget", "Buyer", "The official table treats this as a personal-reason return."],
  ["Seller sent wrong size or color", "Seller", "The customer normally does not pay, although the policy notes a seller may still insist on shipping cost."],
  ["Visible quality issue", "Seller", "Holes, stains and comparable seller-attributable problems normally move cost responsibility away from the buyer."],
  ["Domestic transit damage", "Other", "PikoBuy says it will verify the actual situation and handle the case according to responsibility."],
];

export default async function ReturnsPage({ searchParams }: PageSearchParams) {
  const language = normalizeLanguage((await searchParams).lang);
  return <ContentLayout language={language} kicker="FULL GUIDE / RETURNS" title="The PikoBuy 120-hour warehouse clock, explained." intro="The official returns page describes a five-day request period for eligible products, but timing alone does not create an automatic or free refund." tone="pink">
    <section className="return-timeline"><div><span>0H</span><b>Status becomes Warehoused</b><small>The published count begins from the next hour.</small></div><i>→</i><div><span>120H</span><b>Published request limit</b><small>A request after this point might not be accepted.</small></div><i>→</i><div><span>SELLER</span><b>Agreement still required</b><small>PikoBuy says the item can be returned only when the seller agrees.</small></div></section>

    <section className="content-section prose-body wide-prose">
      <h2>What “five-day return” actually means</h2><p>PikoBuy’s page describes a service based on the return rules offered by third-party sellers. It says a buyer can request return service within five days after an order becomes “Warehoused,” starting from the next hour, and defines those five days as 120 hours. A late request might not be accepted.</p><p>This is a request window, not a promise that every item qualifies. The seller must offer the relevant return guarantee, the product must remain in a marketable state and the warehouse timing condition must be met. PikoBuy also says it can return the item only when the seller agrees.</p><p>Use the time shown in the order record rather than estimating from when you first saw the photographs. If the status changes during the night or in another time zone, record the displayed timestamp and ask support when the deadline is unclear. The policy’s wording—counting from the next hour—is precise enough that waiting until “day five” is unnecessarily risky. Review the item promptly and leave time for an extra photograph or support clarification.</p><p>The official page also describes the wider guarantee as being within seven days after the seller-side receipt, corresponding to five days after warehouse stock-in. Buyers do not need to calculate the seller-side clock themselves; the actionable instruction on the page is to submit from the PikoBuy order page within the five-day Warehoused window.</p>

      <h2>Why packaging and seals matter before QC</h2><p>The official page lists items whose packaging, tags or accessories were removed at the user’s request among unavailable cases. Its special-standards table goes further. New sneakers may need anti-theft and anti-damage elements intact; personal-care goods may need one-time seals; electronic products must avoid specified damage; camera shutter use is limited; model and collectible packaging cannot be opened; books must remain free of wear and stains.</p><p>The practical lesson is simple: do not request destructive inspection just to obtain a photograph unless you accept that the return option may disappear. Ask for exterior evidence first and read the category’s live rule.</p><p>“Marketable state” should be treated as a preservation instruction. Keep all visible tags, inserts, spare parts, retail packaging and protective films together. Do not request engraving, washing, installation, seal removal or a test that changes the product unless the live policy and seller permit it. Even when a modification would answer a quality question, it can also make the goods unsellable.</p><p>For electronics and collectibles, the trade-off is especially sharp. The returns page requires one-time seals to remain intact for various categories, while the user agreement says professional inspection may be unavailable for some sealed or specialist goods. If you need proof that only opening or operating the product can provide, decide before ordering whether you can accept the limited warehouse evidence.</p>

      <h2>What an unconditional return may cost</h2><p>The published formula is shipping back to the seller, the seller’s original domestic shipping cost, plus a 5 RMB service fee. The page says the first dispatch cost may have to be repaid even when the seller originally advertised free shipping. Keep enough account balance to cover the stated costs after making a request.</p><p>When the seller shipped the wrong product or a verified quality problem exists, the policy says the customer normally does not need to pay the return cost, although it also warns that a seller may insist otherwise. Choose the reason that matches the evidence rather than selecting the reason that appears cheapest.</p><p>The official responsibility table treats several situations as customer reasons: simply no longer wanting the product, ordering the wrong or an extra item, deciding international freight is over budget, and disagreeing with the seller when the seller concludes there is no quality issue. That is why landed-cost planning belongs before the first payment. A return may still be possible, but avoidable domestic shipping and service costs can erase the apparent saving.</p><p>For a seller error, match the warehouse evidence to the submitted option. A photograph of the size label, color and complete item can show a wrong variant more clearly than a general complaint. For a visible quality problem, include the whole-item view and a close-up so the issue’s location and scale are understandable. PikoBuy and the seller still determine the outcome; the record simply makes the claim more precise.</p>

      <h2>What if the item has not shipped?</h2><p>The official FAQ says a return request on an order that is “not shipped” does not incur the warehouse return charge. It explains that charges apply when a product has no quality issue and is already stocked in the warehouse. This is different from cancelling a deposit order: the user agreement warns that some Taobao deposit orders cannot be cancelled and a missed balance payment may forfeit the deposit.</p><p>Order status therefore changes the correct question. Before the seller dispatches, ask whether the purchase can still be cancelled under the seller’s rules. After stock-in, ask whether the item is eligible, preserved and inside the 120-hour request window. After international dispatch, the domestic warehouse-return policy is no longer the same process. Do not use “refund,” “cancel” and “return” interchangeably when contacting support.</p>

      <h2>Separate eligibility, responsibility and refund value</h2><p>These three decisions are related but not identical. Eligibility asks whether a return request can be made. Responsibility asks who caused the problem and who normally bears which costs. Refund value concerns the product amount and deductions actually processed. PikoBuy’s notes say the refund total is based on the product price actually paid, while its fee table separately describes shipping and service charges.</p><p>This separation helps avoid false expectations. An eligible personal-reason return can still cost money. A strong seller-error claim can still depend on seller agreement and verification. A request submitted on time can still fail if packaging was removed or a category is excluded. Use the policy table as a decision tree, not as a slogan promising “free returns.”</p>

      <h2>A practical action sequence</h2><ol><li>Record the exact time the status changes to Warehoused.</li><li>Review all standard photographs immediately.</li><li>Request only the additional detail needed to document the issue.</li><li>Keep tags, seals, accessories and protective packaging intact.</li><li>Save the original listing and submitted order options.</li><li>Describe the visible issue or mismatch without exaggeration.</li><li>Select the return reason that matches the facts.</li><li>Keep enough account balance for any published shipping and service fee.</li><li>Save the request and support replies until the case is complete.</li><li>Recheck the live policy because seller rules and platform terms can change.</li></ol>

      <SourceNote><a href="https://www.pikobuy.com/protocol/returns" target="_blank" rel="noopener noreferrer">PikoBuy Returns & Exchanges</a> and <a href="https://www.pikobuy.com/protocol/user" target="_blank" rel="noopener noreferrer">User Agreement</a>, checked 06 August 2026.</SourceNote>
    </section>

    <section className="content-section">
      <div className="content-section-heading"><span>ELIGIBILITY MAP</span><h2>Six facts to check before assuming a return is available.</h2><p>This summary is not a substitute for the full live policy or the seller’s own decision.</p></div>
      <div className="evidence-table">{eligibility.map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </section>

    <section className="content-section">
      <div className="content-section-heading"><span>COST RESPONSIBILITY</span><h2>The reason for the return changes the fee logic.</h2><p>Condensed from examples on the official returns page; the actual case still depends on verification and seller agreement.</p></div>
      <div className="responsibility-table"><header><span>Situation</span><span>Likely responsibility</span><span>Published treatment</span></header>{responsibility.map(([situation, party, treatment]) => <article key={situation}><b>{situation}</b><span>{party}</span><p>{treatment}</p></article>)}</div>
    </section>
  </ContentLayout>;
}
