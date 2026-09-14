import Link from "next/link";
import { SiteHeader } from "@/app/components/SiteHeader";

const faq = [
  ["What is PikoBuy?", "PikoBuy is a China purchasing and forwarding platform. It helps users buy products, receive them at a China warehouse and submit parcels for international shipping."],
  ["Which marketplaces does PikoBuy support?", "Its official beginner guide names Taobao, Tmall, 1688, Weidian and Yupoo, plus other platforms. Users can paste a product link or search with keywords."],
  ["What is a PikoBuy spreadsheet?", "It is an independent product-discovery list. It can organise links, images, categories and price references, but it does not replace the current seller listing."],
  ["Why are there two payments?", "The first payment covers the purchasing order. After the item reaches the warehouse, the user chooses a route and pays the international shipping fee."],
  ["What happens at the warehouse?", "PikoBuy says it checks items in, takes confirmation photos and checks visible defects. Users may also request options such as minimal or reinforced packaging."],
  ["Do warehouse photos guarantee quality or authenticity?", "No. Photos help check visible identity and condition. They cannot guarantee authenticity, hidden materials, durability, sizing, battery health or customs outcomes."],
  ["How long is the return window?", "For eligible products, PikoBuy states that a return request can be submitted within five days, or 120 hours, after the status changes to In Warehouse."],
  ["Can every product be returned?", "No. The seller must support the return, the product must remain resalable and category rules apply. Custom goods, intimate apparel, food and some opened or sealed products may not qualify."],
  ["What does an unconditional return cost?", "PikoBuy lists return shipping, the seller’s original shipping fee and an RMB 5 service fee. Responsibility can differ when the seller sent the wrong item or there is a confirmed quality issue."],
  ["Does the same return service cover forwarded goods?", "Not automatically. PikoBuy’s shipping terms say it does not provide after-sales service for goods users forward themselves. The user must contact the sender or seller."],
  ["What affects the shipping estimate?", "PikoBuy’s estimator asks for destination, product type, weight, length, width and height. Route availability, billing method and product restrictions also matter."],
  ["When does tracking appear?", "PikoBuy’s beginner guide says tracking information is available within three days after dispatch. This is not a three-day delivery promise."],
  ["Can PikoBuy guarantee customs-free delivery?", "No. Its shipping terms identify customs action, confiscation, damage, loss and peak-season delay as cross-border logistics risks."],
  ["Where do database, category and product buttons lead?", "They lead only to the FindSpreadsheet homepage. The search box leads to the matching FindSpreadsheet search results."],
];

export default function FAQPage(){return <main><SiteHeader/><div className="article-header"><Link className="back" href="/">← Back to homepage</Link><p className="section-label">Fact checked · 28 August 2026</p><h1>PikoBuy Spreadsheet FAQ</h1><p>Short answers based on PikoBuy’s official beginner guide, shipping terms, shipping estimator and returns policy.</p></div><div className="faq-list">{faq.map(([q,a])=><section className="faq-item" key={q}><h2>{q}</h2><p>{a}</p></section>)}</div></main>}
