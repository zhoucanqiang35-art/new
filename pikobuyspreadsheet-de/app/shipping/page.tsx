import type { Metadata } from "next";
import ArticleShell from "../components/ArticleShell";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PikoBuy Shipping Cost, Warehouse & Parcel Planning Guide",
  description: "Fact-checked notes on PikoBuy shipping estimates, weight, dimensions, forwarding, warehouse photos, route choice, tracking and logistics risk.",
  alternates: { canonical: "/shipping" },
};

export default function ShippingPage() {
  return (
    <ArticleShell
      eyebrow="Shipping & warehouse guide"
      title="Plan the parcel before a cheap find becomes expensive."
      intro="A practical explanation of the public PikoBuy shipping inputs, warehouse workflow and the decisions that belong before the second payment."
    >
      <p className="lead">PikoBuy’s public estimator asks for destination, product type, actual weight and package dimensions. That is the clearest starting point for shipping research: cost depends on the parcel and route available at the time, not on a universal price-per-kilogram promise.</p>

      <h2>The estimate needs six useful inputs</h2>
      <p>The official shipping-estimate page asks where the parcel is going, what kind of product it contains, its weight in kilograms, and its length, width and height in centimetres. A meaningful estimate therefore needs more than a product title. Record the likely packaging and do not enter zero dimensions for an item that will obviously ship in a box.</p>
      <div className="data-table">
        <div><b>Destination</b><span>Determines which routes may appear.</span></div>
        <div><b>Product type</b><span>General, sensitive or restricted goods can differ.</span></div>
        <div><b>Actual weight</b><span>Warehouse-packed weight may differ from the listing.</span></div>
        <div><b>Dimensions</b><span>Bulky parcels can be billed differently from compact ones.</span></div>
        <div><b>Protection</b><span>Reinforced packaging can add weight and volume.</span></div>
        <div><b>Selected route</b><span>Timing, restrictions and tracking vary by route.</span></div>
      </div>

      <h2>Forwarding and purchasing are related but not identical</h2>
      <p>PikoBuy’s published shipping terms describe a forwarding process in which the customer obtains a warehouse address, provides it to the sender, submits a forwarding form, waits for warehouse receipt and photos, then finds the goods in the order area and submits a parcel. The terms state that forwarded goods are unpacked and inspected, but also warn that after-sales service for forwarded products remains with the sender or seller.</p>
      <p>For a normal purchasing order, PikoBuy’s beginner guide describes searching or pasting a product link, completing the first payment, waiting for warehouse inspection, and then submitting a parcel. Both paths use the warehouse as a checkpoint, but buyers should follow the current instructions that match their order type.</p>

      <h2>Warehouse photos are part of cost control</h2>
      <p>Inspection is not only about visible defects. It is the last practical point to ask whether the correct item and variant arrived before international freight is paid. A heavy wrong-size jacket is more expensive to ship than it is to question in the warehouse. A damaged box may need reinforcement, while an unnecessary retail box may add volume.</p>
      <p>Review the photos promptly. If a return may be needed, PikoBuy’s public return terms describe a five-day or 120-hour application window for eligible goods after warehouse status. Waiting can remove options and turn a product problem into a shipping problem.</p>

      <h2>Actual weight and parcel size both matter</h2>
      <p>Spreadsheet rows often show a product price without a reliable packed weight. Use the row as a warning system: shoes with boxes, thick jackets, bags, fragile goods and electronics deserve extra margin. Clothing that appears light can still become bulky after protective packing. The estimate should be refreshed once warehouse measurements are available.</p>
      <p>Do not publish or rely on a fixed “PikoBuy cost per kilogram” without a current route quote. The official public page is structured around destination, category, weight and dimensions precisely because those details affect the result. Route pricing and availability can change.</p>
      <p>For a worked estimation method, read the <Link href="/articles/shipping-estimate-volumetric-weight">PikoBuy shipping estimate and volumetric weight guide</Link>. It shows how to replace pre-order assumptions with packed measurements without inventing a universal billing divisor.</p>

      <h2>A simple landed-cost worksheet</h2>
      <p>For research, keep product value, China-side costs, international freight, optional services, possible insurance and destination charges on separate lines. The spreadsheet’s approximate USD conversion is useful for comparing finds, but it is not an invoice and may not include the platform’s current checkout charges.</p>
      <div className="formula">Estimated landed cost = product payment + China-side costs + international freight + optional services + destination charges</div>
      <p>Only include a number when its source is clear. If a customs or tax amount is unknown, label it unknown rather than silently treating it as zero. Import rules vary by destination and item type; readers should check the law applicable to their own parcel.</p>

      <h2>How to compare routes without inventing a “best” line</h2>
      <p>The best route depends on the destination, product category, packed weight, dimensions, timing need, tracking requirements and risk tolerance. Review the live route list after warehouse packing. Confirm that the route supports the items, read its billing method and service description, and compare any insurance or declaration conditions shown.</p>
      <ul>
        <li>Choose only routes that support every item in the parcel.</li>
        <li>Compare the warehouse measurements with the pre-order estimate.</li>
        <li>Investigate a large cost jump before paying the second bill.</li>
        <li>Consider splitting only when one item creates a route or size problem; splitting can also add base charges.</li>
        <li>Keep the final route description and parcel record for later support questions.</li>
      </ul>

      <h2>Countries and market coverage</h2>
      <p>PikoBuy’s public estimator presents a country or region selector, but the company does not publish audited user counts by country on the pages reviewed. For this reason, this website does not label any country as PikoBuy’s “largest market” without evidence. The initial SEO plan prioritises the United States, United Kingdom, Germany, France, Spain, Italy, the Netherlands, Poland, Canada and Australia because they are major Western ecommerce and search-language markets; actual PikoBuy demand should be validated through Search Console impressions and live route availability.</p>

      <h2>After the second payment</h2>
      <p>PikoBuy’s beginner guide says tracking information should generally become available within three days after shipment. Its shipping terms also state that parcels are carried by third-party logistics providers and that logistics risks are unavoidable. Save the parcel number, route, payment time, item list and warehouse evidence. If tracking remains unclear beyond the platform’s stated window, use the official order-support channel.</p>

      <h2>The final ship-or-hold checklist</h2>
      <ol>
        <li>Every item matches the selected order and warehouse photos.</li>
        <li>No return or after-sales request is still unresolved.</li>
        <li>The final weight and dimensions are understood.</li>
        <li>The selected route supports the parcel’s product types.</li>
        <li>The second-payment amount still makes sense beside the item value.</li>
        <li>Tracking, insurance and destination responsibilities have been reviewed.</li>
      </ol>
      <p>Pay the international freight only when those answers are clear. The warehouse stage is valuable because it gives buyers one last clean decision point before the parcel enters third-party logistics and customs processes.</p>
    </ArticleShell>
  );
}
