import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "../components/ArticleShell";

export const metadata: Metadata = {
  title: "How to Use PikoBuy: Complete Spreadsheet & Buying Workflow",
  description: "A fact-checked PikoBuy beginner workflow covering product links, the first payment, warehouse inspection, QC, returns, parcel submission and tracking.",
  alternates: { canonical: "/guides" },
};

export default function GuidesPage() {
  return (
    <ArticleShell
      eyebrow="Complete beginner guide"
      title="From a product clue to a checked PikoBuy parcel."
      intro="A practical, evidence-first workflow for readers who discover an item in a spreadsheet and want to understand what should happen before they commit to international shipping."
    >
      <p className="lead">A PikoBuy spreadsheet is most useful at the beginning of the research process. It can organize possible finds, preserve a product link and help you compare categories, but it cannot confirm stock, guarantee a seller, select the correct variant or predict a final international shipping bill. Treat each row as a lead that still needs a live check.</p>

      <h2>What the official PikoBuy workflow actually shows</h2>
      <p>PikoBuy’s public beginner guide describes six broad stages: select an item from a Chinese marketplace or source page, paste the product link or keywords into PikoBuy, submit and pay for the purchasing order, wait for warehouse inspection, choose a shipping route and pay international freight, then wait for the parcel and tracking. That structure matters because the product payment and the international shipping payment happen at different stages.</p>
      <p>This site separates those stages so a buyer does not treat a low source price as the total cost. The main spreadsheet is for discovery. PikoBuy handles the purchasing and warehouse workflow. Third-party logistics providers move the international parcel. Each stage has different evidence, costs and risks.</p>

      <h2>Step 1 — narrow the product category</h2>
      <p>Start with the type of item, not the most exciting title. Shoes need size information, side-profile and sole photos, and box expectations. Jackets need measurements, material detail, lining and likely parcel volume. Bags need dimensions, interior images, hardware detail and strap information. Electronics need the exact model, included accessories, voltage or charging requirements, and route restrictions where applicable.</p>
      <p>Category-first research prevents weak comparisons. A ¥100 shoe and a ¥100 T-shirt do not create the same inspection questions or parcel impact. Open several similar records on FindSpreadsheet, compare the same fields and keep a short list. A row should remain only when you can explain why it deserves another check.</p>

      <div className="callout"><b>Minimum shortlist fields</b><span>Product type · live source match · selected option · useful images · size or dimensions · source price · likely parcel impact · date checked</span></div>

      <h2>Step 2 — verify the live listing before ordering</h2>
      <p>PikoBuy’s official guide says users can paste a product link or keywords into its search box. Before proceeding, compare the live page with the spreadsheet record. Check that the image, seller or source page, model, available colour, size and listed price still match. A link can continue working while the item or default variant changes.</p>
      <p>Do not rely on a title alone. If the live page presents several versions, identify which one the spreadsheet price represents. If the listing is unclear, save the item or store information and resolve the uncertainty before the first payment. A spreadsheet should reduce searching time, not remove the need to read the live listing.</p>

      <h2>Step 3 — understand the first payment</h2>
      <p>The public PikoBuy guide describes the purchasing-order stage as selecting colour, size and quantity, submitting the order and completing the first payment. It also notes that prices are subject to the actual purchase and that an out-of-stock item is refunded. This first payment is connected to obtaining the product; it is not the final international freight payment.</p>
      <p>For a line-by-line budget and decision checklist, read the <Link href="/articles/first-vs-second-payment">PikoBuy first and second payment guide</Link>.</p>
      <p>Before paying, record the selected variant and the amount displayed. A screenshot or written note is useful when the listing contains many options. Make sure the option name, quantity and size are not hidden behind a default selection. If the product matters enough to order, it matters enough to document.</p>

      <h2>Step 4 — use warehouse inspection as a decision point</h2>
      <p>According to PikoBuy’s public workflow, warehouse intake includes check-in, photo confirmation and a defect check. The shipping terms also explain that forwarded goods are unpacked and inspected, that users should review the inspection photos, and that additional detailed photos may be available as a paid request. The policy warns that professional inspection is not available for every special or professional product.</p>
      <p>Inspection photos should answer category-specific questions. For footwear, compare both sides, heels, soles, size labels and the selected colour. For clothing, check the front, back, label, visible measurements where supplied, print placement and obvious defects. For bags and small goods, inspect dimensions, interior, stitching and hardware. For electronics, a warehouse photo cannot replace technical testing unless the service explicitly confirms that testing was performed.</p>
      <p>QC is not a certificate of authenticity or a guarantee of future performance. It is a visual checkpoint before international dispatch. If an important angle or measurement is absent, request clarification while the item is still in the warehouse rather than hoping the uncertainty disappears after delivery.</p>

      <h2>Step 5 — make the return decision quickly</h2>
      <p>PikoBuy’s published return terms describe a five-day warehouse return window for eligible products. The policy explains that applications are counted within 120 hours after the status changes to “In Warehouse”, that seller rules and product condition still matter, and that some categories or customised goods may not qualify. A return for personal reasons can include return shipping, the seller’s original domestic shipping and an RMB 5 service fee.</p>
      <p>This is why the warehouse review should not be postponed. Check the images, variant and measurements soon after intake. If the wrong colour or size arrived, or an obvious defect is visible, use the platform’s current process and preserve the evidence. Do not assume every item is automatically returnable merely because it is still in the warehouse.</p>

      <h2>Step 6 — estimate before parcel submission</h2>
      <p>PikoBuy provides a public shipping-estimate form that asks for destination country or region, product type, weight, length, width and height. Those inputs show why product price alone is not enough. A light but bulky item can create a different route or cost result from a compact item with the same actual weight.</p>
      <p>The <Link href="/articles/shipping-estimate-volumetric-weight">shipping estimate and volumetric weight guide</Link> gives a repeatable pre-order and post-warehouse calculation workflow.</p>
      <p>Compare the estimate with the warehouse-packed information before paying international freight. Consider whether boxes can safely be removed, whether fragile goods need protection and whether one restricted or unusually bulky item affects the rest of the parcel. The cheapest visible route is not automatically the best route; review the route description, supported item types, tracking, insurance information and destination requirements shown at the time.</p>

      <h2>Step 7 — second payment, dispatch and tracking</h2>
      <p>The official guide says the buyer selects a suitable shipping route, submits the parcel and pays the international shipping fee. PikoBuy then arranges dispatch. It states that tracking information should generally become available within three days after shipment, while international delivery itself takes longer and route timing varies.</p>
      <p>The <Link href="/articles/first-vs-second-payment">two-payment explainer</Link> separates product-side costs, parcel inputs and possible destination charges without inventing a final price.</p>
      <p>PikoBuy’s shipping terms state that international parcels are carried by third-party logistics providers and that logistics risks must be evaluated by the user. Keep the parcel number, route, payment record and item list together. If tracking does not appear within the expected window, contact the official support channel with specific information rather than relying on a general spreadsheet page.</p>

      <h2>A five-minute spreadsheet review</h2>
      <ol>
        <li><b>Minute one:</b> choose one category and remove unrelated rows.</li>
        <li><b>Minute two:</b> open the current main-database record and confirm the destination link still matches.</li>
        <li><b>Minute three:</b> check variant, images, sizing or dimensions and the recorded price.</li>
        <li><b>Minute four:</b> note likely weight, packaging or restricted-item questions.</li>
        <li><b>Minute five:</b> keep the row only if you can write one clear reason for further research.</li>
      </ol>

      <h2>Common mistakes worth avoiding</h2>
      <p>The first mistake is treating the spreadsheet as a recommendation rather than an index. The second is ordering from an old row without comparing the current listing. The third is approving warehouse intake without reviewing the photos. The fourth is waiting too long to investigate a possible return. The fifth is judging value from the product price while ignoring package dimensions and international freight.</p>
      <p>A reliable workflow does not promise that every find will be good. It helps weak records fail earlier, while the cost of changing direction is still low. That is the standard this research site is designed to support.</p>
    </ArticleShell>
  );
}
