import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "../../components/ArticleShell";

export const metadata: Metadata = {
  title: "PikoBuy First and Second Payment Explained: A Buyer’s Budget Guide",
  description: "Understand what PikoBuy’s first payment and second international shipping payment cover, when each happens, and what to verify before paying.",
  alternates: { canonical: "/articles/first-vs-second-payment" },
};

export default function FirstVsSecondPaymentArticle() {
  return (
    <ArticleShell
      eyebrow="Payment guide"
      title="PikoBuy first and second payment: what changes between them?"
      intro="A practical budget guide for buyers who want to know why paying for an item does not finish the international order—and what evidence to check before each payment."
      updated="27 August 2026"
      footerDatabaseLink={false}
      asideAction={(
        <div className="aside-card dark-card">
          <span className="kicker">Continue researching</span>
          <h3>Check before you pay.</h3>
          <p>Use the buying guide for the full order sequence, then review shipping inputs once warehouse evidence is available.</p>
          <Link className="button button-light" href="/guides">Open buyer workflow →</Link>
        </div>
      )}
    >
      <p className="lead">The short answer is that the two payments fund different stages. PikoBuy’s public beginner guide places the first payment at the purchasing-order stage, after the buyer selects specifications, colour, size and quantity. It places the international shipping payment later, after the item reaches the warehouse, inspection occurs and the buyer submits a parcel. Paying once does not yet define the final international parcel.</p>

      <div className="callout"><b>Official sources checked · 27 August 2026</b><span>PikoBuy Beginner&apos;s Guide, Shipping Estimate, Shipping Terms, Returns &amp; Exchanges, Terms of Service and User Registration Agreement. Statements labelled “official” below summarize those public pages. Budgeting steps and decision rules are independent editorial recommendations, not platform promises. No third-party user reports are used in this article.</span></div>

      <h2>The two-payment structure in one view</h2>
      <figure className="data-table" role="img" aria-label="Four-stage diagram showing the PikoBuy first payment, warehouse inspection, parcel submission, and second international shipping payment">
        <div><b>1 · First payment</b><span>Purchasing order: selected item, colour, size and quantity are submitted for purchase.</span></div>
        <div><b>2 · Warehouse checkpoint</b><span>The item is checked in, photographed and reviewed for visible defects according to the official beginner workflow.</span></div>
        <div><b>3 · Parcel decision</b><span>The buyer chooses which warehouse items to submit together and reviews packaging and route options.</span></div>
        <div><b>4 · Second payment</b><span>International shipping is paid for the submitted parcel before dispatch is arranged.</span></div>
      </figure>
      <p>This sequence explains the apparent gap. The warehouse cannot provide a final parcel basis before it receives the item. Actual weight, packed dimensions, product type, chosen route and destination all matter later. The first payment starts procurement; the second moves an assembled parcel across borders.</p>

      <h2>What the first PikoBuy payment is for</h2>
      <p><b>Official fact:</b> PikoBuy’s beginner guide says the buyer chooses the item specifications, submits the purchasing order and completes the first payment. It also says prices are subject to the actual purchase and an out-of-stock order will be refunded. The current User Registration Agreement adds that a purchasing-agent order requires advance payment for the selected products and China-side logistics, with actual calculation potentially differing because of exchange-rate movements and settlement timing.</p>
      <p>That means a spreadsheet price is not enough to approve payment. A row may have been accurate when checked but may point to a listing whose seller, options or price have changed. Open the live source, identify the exact variant and compare the order summary with what you intend to buy. If the cheapest visible price belongs to a smaller size, accessory or deposit rather than the complete item, the row is not ready for payment.</p>
      <p><b>Editorial recommendation:</b> Before the first payment, write a four-line order record: product link, exact option, quantity and observed price with the date. Keep one image or note showing the selected option. This is not bureaucracy; it creates a reference for warehouse inspection. Without it, a buyer can see a perfectly clear warehouse photo and still be unable to prove whether the item matches the order.</p>

      <h2>What the first payment does not settle</h2>
      <p>The first payment is not a prepaid promise covering every later cost. It does not yet settle international freight, because the international parcel has not been finalized. It also does not guarantee a customs outcome, delivery date, product quality beyond what can be checked, or a particular shipping route. PikoBuy’s Terms of Service say cross-border transactions may incur duties, taxes, brokerage fees or other charges for which the user is responsible.</p>
      <p>It is useful to separate “paid” from “finished.” After the purchase is placed, the seller still has to supply the item, domestic transport must reach the warehouse, and the warehouse evidence needs review. An out-of-stock refund mentioned in the beginner guide concerns the purchasing order; it is not evidence that every change of mind or every warehouse item qualifies for a free return.</p>

      <h2>The warehouse is the decision gate between payments</h2>
      <p><b>Official fact:</b> PikoBuy’s beginner workflow describes warehouse check-in, photo confirmation and a defect check. The shipping terms say forwarded goods are unpacked and inspected, while warning that professional inspection cannot be provided for every special or professional product. The photos are therefore a practical checkpoint, not a certificate of authenticity, internal function or long-term durability.</p>
      <p>Use the checkpoint to answer five questions: Is it the correct item? Does the colour and size match the order? Is the quantity complete? Are visible defects or missing parts apparent? Is the product still worth shipping once likely parcel impact is considered? The separate <Link href="/articles/qc-photo-checklist">QC photo checklist</Link> gives category-specific angles and limitations.</p>
      <p>If something is wrong, act while options still exist. PikoBuy’s published return terms describe a 120-hour application period after eligible goods change to “In Warehouse,” subject to seller rules, product condition and exclusions. A late warehouse review can turn a fixable purchasing problem into an unavoidable shipping decision. Read the <Link href="/articles/warehouse-return-window">warehouse return-window guide</Link> before assuming a return will be accepted.</p>

      <h2>What determines the second payment</h2>
      <p><b>Official fact:</b> The beginner guide says the buyer chooses a suitable shipping route, submits the parcel and pays the international shipping fee. It warns that routes differ in delivery time and billing methods. PikoBuy’s public estimator asks for destination country or region, product type, weight, length, width and height. Those fields show why the second amount cannot be inferred reliably from the item price alone.</p>
      <p>Consider two hypothetical items with no invented price attached: a compact metal accessory and a light padded jacket. The jacket may weigh less but occupy more space after packing. Depending on the live route’s billing method, dimensions may materially affect the quotation. Conversely, a dense compact item may be driven mainly by actual weight. The correct comparison uses the warehouse parcel data and route terms displayed at the time—not a universal cost-per-kilogram copied from an old post.</p>
      <div className="formula">Second-payment review = destination + eligible product type + packed weight + packed dimensions + selected route and services</div>
      <p>For a fuller explanation of these inputs, see the site’s <Link href="/shipping">shipping and warehouse guide</Link>. It covers route comparison, packaging choices and the difference between an estimate and a final live quotation.</p>

      <h2>A realistic budget before ordering</h2>
      <p><b>Editorial recommendation:</b> Build a range rather than one optimistic total. Put the product-side amount in one column, the international parcel in another and possible destination charges in a third. Do not fill unknown cells with zero. Label them “not known until warehouse” or “check destination rules.” This keeps uncertainty visible instead of hiding it inside a false total.</p>
      <ul>
        <li><b>Product stage:</b> selected item price, China-side logistics shown at checkout and any clearly disclosed platform charge.</li>
        <li><b>Warehouse stage:</b> optional detailed photos, packing requests or return-related costs only when actually selected or applicable.</li>
        <li><b>International stage:</b> the live parcel quotation, selected route and optional services shown before submission.</li>
        <li><b>Destination stage:</b> possible duties, taxes, brokerage or carrier collection under the destination’s current rules.</li>
      </ul>
      <p>Use the official shipping estimator early as a planning tool, then replace the estimate with warehouse data. If the item is bulky or fragile, leave more uncertainty in the range. If the order only makes sense under the cheapest imaginable freight outcome, it probably is not ready for the first payment.</p>

      <h2>When consolidation helps—and when it complicates the decision</h2>
      <p>Combining warehouse items can avoid treating every product as a separate international parcel, but consolidation is not automatically cheaper in every case. One restricted, fragile or unusually bulky item can affect route eligibility or packing. The useful question is not “Can these items be combined?” but “Does the combined parcel still have a suitable route, sensible dimensions and acceptable risk?”</p>
      <p><b>Editorial recommendation:</b> Group items by compatible handling needs. Soft clothing may share a parcel naturally. Fragile goods may need reinforcement. Batteries, liquids, magnets or other controlled product types require the current route rules. Never remove protective packaging merely to reduce size unless the damage risk is understood.</p>

      <h2>Second-payment checklist</h2>
      <ol>
        <li>Confirm every submitted item against its warehouse photos and order record.</li>
        <li>Resolve returns or missing evidence before the applicable warehouse window closes.</li>
        <li>Review the parcel’s measured weight and dimensions, not only pre-order guesses.</li>
        <li>Check that the chosen route accepts every product type in the parcel.</li>
        <li>Read the route’s current billing, tracking, insurance and restriction details.</li>
        <li>Keep destination taxes and customs obligations separate from the shipping quotation.</li>
        <li>Save the parcel number, item list, payment record and warehouse evidence.</li>
      </ol>
      <p>PikoBuy’s shipping terms state that third-party logistics providers carry international parcels and that customs action, damage, loss and peak-season delay are among the risks outside the platform’s direct control. Paying the second amount starts the dispatch stage; it does not erase those risks. Choose a route for the actual parcel and your tolerance for uncertainty, not just the smallest number on screen.</p>

      <h2>What to do if the total is higher than expected</h2>
      <p>Pause before paying. First, verify that the parcel contains only the items you intended to submit. Second, compare measured dimensions with the packaging request. Third, check whether another eligible route uses a different billing method or service level. Fourth, decide whether safe packaging changes are possible. Fifth, contact official support when a measurement, fee or route condition is unclear.</p>
      <p>Do not assume that a high international quotation proves an error. Bulky packaging, destination, product restrictions and route availability can all change the result. Likewise, do not assume a lower route is equivalent: timing, tracking, compensation conditions and accepted item types may differ. The goal is an explainable choice, not merely the lowest displayed quote.</p>

      <h2>A worked decision example without invented prices</h2>
      <p>Suppose a buyer finds a jacket in a spreadsheet. Before the first payment, they reopen the current listing, confirm the size and colour, and save the observed option. At warehouse intake, the label matches, the photos show no obvious defect and the buyer decides the jacket is worth keeping. The packed dimensions are larger than the pre-order guess, so the buyer refreshes the estimate and compares only routes that accept the product.</p>
      <p>If the total remains acceptable, the buyer submits the parcel and makes the second payment. If it no longer fits the budget, the buyer checks return eligibility and timing before doing anything irreversible. This example does not predict the outcome or cost; it shows where each decision belongs.</p>

      <h2>The practical rule</h2>
      <p>Make the first payment only when the live product and selected option are clear. Make the second payment only when the warehouse evidence, parcel measurements, route conditions and wider landed-cost range are clear. Between them, use the warehouse as a real decision gate—not a waiting room.</p>
      <p>When you need to recheck the live product lead before building that record, open the relevant category on <a href="https://findspreadsheet.com/AllProducts/" target="_blank" rel="noreferrer">FindSpreadsheet’s product database</a>. Treat the row as discovery context, then verify every current order and payment detail in the live service.</p>
    </ArticleShell>
  );
}
