import type { Metadata } from "next";
import ArticleShell from "../components/ArticleShell";
import { serverTranslations } from "../i18n/server-translations";

export const metadata: Metadata = {
  title: "PikoBuy Spreadsheet FAQ: Products, QC, Returns & Shipping",
  description: "Direct answers about PikoBuy spreadsheet research, product links, warehouse inspection, return timing, shipping estimates, tracking and site independence.",
  alternates: { canonical: "/faq" },
};

const faqs = [
  ["What is a PikoBuy spreadsheet?", "It is an independent product-discovery format that organises possible finds, categories, source links, images, prices and research notes. A row is a starting point, not a recommendation or checkout record. It cannot guarantee stock, seller performance, the selected variant, product quality or final shipping cost. Reopen the current listing, compare the live option and preserve the date checked before using any row."],
  ["Is pikobuyspreadsheet.de an official PikoBuy website?", "No. It is an independent research site created to help visitors use the FindSpreadsheet product database and understand publicly documented PikoBuy workflow stages. It does not represent PikoBuy and does not provide account support."],
  ["Where do category and product buttons lead?", "They lead to relevant pages on findspreadsheet.com, the main live product database. This external research site does not run a checkout and does not process payments or orders."],
  ["Can I search with a product name or link?", "Yes. The homepage search sends the product clue directly to FindSpreadsheet’s live search page using the main database’s required search parameters. PikoBuy’s own beginner guide also says its users can paste a marketplace product link or keywords into the platform search. In either case, compare the current result with the intended item because links, default variants, prices and availability can change."],
  ["Are the displayed USD prices final?", "No. They are approximate research conversions from the source CNY value. The live product price, selected variant, exchange rate and platform costs can change. Confirm the current record before proceeding."],
  ["What happens when a product reaches the warehouse?", "PikoBuy’s public beginner guide describes check-in, photo confirmation and a defect check. Its forwarding terms say forwarded goods are unpacked and inspected and tell users to review the supplied inspection photos or purchase additional detailed photos. Review identity, colour, size, quantity and obvious damage first. The same terms warn that professional inspection cannot be provided for every special or professional product, so a photo should not be treated as proof of internal performance or authenticity."],
  ["How long do I have to request a return?", "PikoBuy’s published Returns & Exchanges page describes a five-day, or 120-hour, application period after an eligible order changes to In Warehouse, counted from the next hour after that status change. Eligibility still depends on the seller’s return promise, resale condition and product category. Customised goods, intimate apparel, food, second-hand goods and other listed exceptions may not qualify. Check the current order screen immediately rather than assuming every warehouse item is returnable."],
  ["What can a personal-reason return cost?", "The official Returns & Exchanges page lists the standard unconditional-return formula as the return shipment to the seller, the seller’s original domestic shipping fee and an RMB 5 service fee. It also says the first domestic delivery cost may still be charged even when the seller advertised free shipping. The actual request requires seller consent and sufficient account balance, so confirm the amount shown in the live order before submitting."],
  ["Why are there two payments?", "The public beginner guide separates the purchasing-order payment from the later international-shipping payment. First, the buyer chooses the product specifications and pays for purchasing. After the item reaches the warehouse and is inspected, the buyer chooses a route, submits a parcel and pays international freight. This separation is why a low product price should never be presented as the complete landed cost."],
  ["How should I estimate international shipping?", "Use the same inputs shown by PikoBuy’s public estimator: destination country or region, product type, weight in kilograms, and package length, width and height in centimetres. Refresh the estimate after warehouse packing because boxes, reinforcement and consolidation can change weight or volume. A calculator result is a planning figure, not a guaranteed invoice or customs quotation."],
  ["Can forwarded goods use the same after-sales process?", "Not necessarily. PikoBuy’s forwarding terms say users obtain the warehouse address, submit the forwarding form, wait for receipt and photos, then submit the parcel and pay freight. Those terms also say PikoBuy does not provide after-sales service for forwarded products; the buyer must contact the original sender or seller, while PikoBuy may only assist with shipping the goods back. Keep purchasing orders and self-forwarded goods separate when planning a return."],
  ["When should tracking appear?", "PikoBuy’s public beginner guide says tracking information should generally be available within three days after parcel shipment. That is a tracking-update statement, not a three-day delivery promise. Route timing varies, and the shipping terms state that international parcels are carried by third-party logistics providers and can face customs, loss, damage or peak-season delays."],
  ["Does PikoBuy guarantee customs clearance or delivery?", "No such guarantee appears in the official materials reviewed. PikoBuy’s shipping terms state that third-party logistics risks are unavoidable and specifically mention customs policy, confiscation, damage, loss and peak-season delay as risks outside its control. Buyers should review the live route conditions, lawful item restrictions, insurance terms and destination rules before paying international freight."],
];

export default function FAQPage({ locale = "en" }: { locale?: string } = {}) {
  const dictionary = serverTranslations[locale] || {};
  const translate = (value: string) => dictionary[value] || value;
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: translate(question),
      acceptedAnswer: { "@type": "Answer", text: translate(answer) },
    })),
  };
  return (
    <ArticleShell
      eyebrow="Frequently asked questions"
      title="Direct answers, with the boundaries left visible."
      intro="Thirteen practical answers for readers moving from product discovery to the current PikoBuy purchasing, warehouse and parcel workflow."
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <p className="lead">These answers separate spreadsheet research from platform operations. Use FindSpreadsheet to discover and compare live product records. Use the current PikoBuy account and support process for purchases, payments, warehouse actions, returns, parcel submission and tracking.</p>
      <div className="callout"><b>Fact-check basis · reviewed 24 August 2026</b><span>PikoBuy Beginner&apos;s Guide, Shipping Estimate, Shipping Terms, Returns &amp; Exchanges and Terms of Service. Policies can change, so the live account and current official policy control any transaction.</span></div>
      <div className="long-faq">
        {faqs.map(([question, answer], index) => (
          <details key={question} open={index === 0}>
            <summary><span>{String(index + 1).padStart(2, "0")}</span>{question}<b>+</b></summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
      <h2>Still deciding where to start?</h2>
      <p>Begin with one product category, compare several similar records on the main database, and keep a row only when its destination link, image set, variant and price context still make sense. Then use the complete buying guide to follow the order, warehouse and parcel decision points in sequence.</p>
    </ArticleShell>
  );
}
