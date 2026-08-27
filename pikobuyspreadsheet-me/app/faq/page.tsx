import type { Metadata } from "next";
import GuidePage from "../guide-page";

export const metadata: Metadata = {
  title: "PikoBuy FAQ 2026 | Orders, QC, Returns and Shipping",
  description: "Plain-English answers based on PikoBuy's public beginner guide, shipping terms, estimate form and returns policy.",
};

export default function Page(){return <GuidePage pageId="faq" kicker="PLAIN ANSWERS" title="PikoBuy spreadsheet FAQ" intro="These answers use PikoBuy’s public platform pages reviewed on 26 August 2026. They explain the published process in simple language. Live orders, payments and parcels must still be handled through the official account." sections={[
  {heading:"What is PikoBuy?",paragraphs:["PikoBuy presents itself as a China purchasing and forwarding platform. It helps users search or submit products, buys from sellers on the user’s behalf, receives goods at a China warehouse and offers international parcel shipping."]},
  {heading:"What is a PikoBuy spreadsheet?",paragraphs:["It is an independently organised list of possible products, source links, categories, prices, photos and notes. It can make discovery faster, but it does not prove that every link, seller, price or item is current."]},
  {heading:"How can I search for an item?",paragraphs:["PikoBuy’s public pages say users can search directly, paste a product link, submit an image or make a sourcing request. Its beginner guide specifically describes pasting a link or keywords into the search box."]},
  {heading:"Which source sites does the beginner guide mention?",paragraphs:["The guide names Taobao, Tmall, 1688, Weidian and Yupoo as examples. A source marketplace name does not certify the seller or product. Always compare the live listing with the order."]},
  {heading:"What should I confirm before the first payment?",paragraphs:["Confirm the exact specification, colour, size and quantity. PikoBuy states that prices are subject to the actual purchase. If an item is out of stock, its guide says the order will be refunded."]},
  {heading:"What happens when an item reaches the warehouse?",paragraphs:["PikoBuy describes warehouse check-in, photo confirmation and a defect check. Its homepage also mentions quality inspection and repacking. Review the actual photos and order details promptly."]},
  {heading:"Can I request more QC photos?",paragraphs:["PikoBuy’s forwarding terms say users can view inspection photos or purchase additional detailed photos. Ask for one clear angle or measurement that can change your decision."]},
  {heading:"Do QC photos guarantee quality or authenticity?",paragraphs:["No. Photos show visible details only. They cannot prove hidden condition, exact material composition, long-term durability, internal electronic performance or authenticity."]},
  {heading:"How do I estimate shipping?",paragraphs:["PikoBuy’s estimate page asks for destination country or region, product type, weight, length, width and height. Use the latest warehouse or parcel measurements. An early estimate is not the final freight invoice."]},
  {heading:"Why are there two payments?",paragraphs:["The beginner guide describes a first payment for the product order and a later payment for international shipping after the parcel and route are selected."]},
  {heading:"Does every route accept every item?",paragraphs:["No. Availability can depend on the destination, goods type, weight, dimensions and current route rules. Check the options shown for the exact parcel."]},
  {heading:"When should tracking appear?",paragraphs:["PikoBuy’s beginner guide says tracking information will be available within three days after dispatch. This is the platform’s stated process, not a guaranteed delivery time."]},
  {heading:"What risks does PikoBuy mention for international shipping?",paragraphs:["Its shipping terms say third-party logistics are used and identify risks including customs action, damage, loss and peak-season delay. Review current route and insurance information before payment."]},
  {heading:"What is the published warehouse return window?",paragraphs:["PikoBuy’s return page describes a five-day window for eligible goods. It explains this as 120 hours after the order status becomes “In Warehouse,” counted from the next hour. Seller support, resalable condition and category rules still apply."]},
  {heading:"Are all products returnable?",paragraphs:["No. PikoBuy lists non-returnable and specially regulated categories, including customised goods, intimate apparel, food and items with sealed-packaging requirements. Read the current policy for the exact product."]},
  {heading:"Can a customer-choice return cost money?",paragraphs:["Yes. PikoBuy’s policy says an unconditional return can include return shipping, the seller’s original shipping charge and a service fee. Responsibility and the exact case affect the result."]},
  {heading:"How does forwarding differ from buy-for-me?",paragraphs:["For forwarding, you arrange for a sender to deliver goods to the PikoBuy warehouse and submit a forwarding form. PikoBuy’s terms say after-sales service for forwarded goods remains with the sender or seller, although the platform may help send a return."]},
  {heading:"Can this independent site change an order or refund?",paragraphs:["No. This site helps with research and sends product discovery to FindSpreadsheet. Account, payment, warehouse, return, refund and tracking questions require PikoBuy’s official account or support channel."]}
]} />}
