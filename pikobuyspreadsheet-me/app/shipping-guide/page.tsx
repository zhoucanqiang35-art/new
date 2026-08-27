import type { Metadata } from "next";
import GuidePage from "../guide-page";

export const metadata: Metadata = {
  title: "PikoBuy Shipping Guide 2026 | Cost, Weight and Routes",
  description: "A fact-checked PikoBuy shipping guide for parcel weight, dimensions, packaging, route comparison and delivery risks.",
};

export default function Page(){return <GuidePage pageId="shipping-guide" kicker="SHIPPING GUIDE" title="PikoBuy shipping planning for the US, UK, Canada and Europe" intro="PikoBuy lets customers submit warehouse items as a parcel and choose an available international route. The useful comparison starts with the actual parcel: destination, goods type, weight, dimensions and packaging." sections={[
  {heading:"What the official process says",paragraphs:[
    "PikoBuy’s beginner guide separates product payment from international shipping payment. After the item reaches the warehouse and the customer reviews it, the customer chooses a shipping route, submits the parcel and pays the international freight charge. The platform then arranges dispatch. It also notes that routes have different delivery times and billing methods.",
    "The homepage describes worldwide delivery from the China warehouse. The shipping estimate page asks for the destination country or region, product type, weight in kilograms, and parcel length, width and height in centimetres. Those fields are a practical summary of the information required for a useful estimate.",
    "A spreadsheet cannot know the final freight cost when it contains only the product price. The packed measurements, route eligibility and live quote appear later. Treat any early shipping number as a planning estimate, not a promise."
  ]},
  {heading:"Actual weight and volumetric weight",paragraphs:[
    "Actual weight is what the parcel weighs on a scale. Volumetric weight reflects the space it occupies. A light but large parcel can be billed differently from a small parcel of the same scale weight. The exact calculation and billed figure depend on the route shown at the time of submission.",
    "Shoes with boxes, thick jackets, large bags, pillows and reinforced packaging can increase volume. Small metal accessories may be compact but add actual weight. Electronics may need protective packing and can face battery restrictions. That is why “price per kilogram” alone does not describe every parcel.",
    "During product research, record a rough weight and mark bulky items. After warehousing, replace the estimate with the available measured information. Before payment, review the final parcel data and route quote. This three-stage method prevents an early guess from becoming a false fact."
  ]},
  {heading:"Use the shipping estimate correctly",paragraphs:[
    "Select the exact destination, not a nearby country. Choose the product type that best describes the goods. Enter the latest weight and dimensions. If you are still planning, test a reasonable range rather than one optimistic number. For example, compare the effect of keeping or removing bulky retail packaging when that choice is suitable.",
    "An estimate is useful for comparing scenarios. It is not the final invoice and it cannot account for every warehouse adjustment, route change or product restriction before the parcel exists. Recheck after the goods have arrived and the packaging request is clear.",
    "Do not transfer a result from the United States to Canada, from one EU country to another, or from the United Kingdom to mainland Europe. Routes and conditions can differ by destination. Use the exact address and current options shown for the parcel."
  ]},
  {heading:"Build a cleaner parcel",paragraphs:[
    "A parcel should have a clear item list. Confirm that each item passed your basic identity and QC checks. Remove items that are wrong, unresolved or no longer worth shipping. Combining more products is not automatically better if one bulky or restricted item removes useful route options.",
    "PikoBuy’s public guide says users can request minimal packaging or reinforced packaging. Minimal packaging may reduce volume, while reinforcement may protect fragile or structured goods. The trade-off is specific to the item. A shoe box can add space but protect shape. A fragile electronic item may need more protection, not less.",
    "Keep compatible products together. Check liquids, batteries, magnets, powders, food, cosmetics and other sensitive categories against the current route rules. A listing being purchasable does not mean every international shipping line will accept it."
  ]},
  {heading:"Compare routes with the same questions",paragraphs:[
    "When several lines are available, compare them on the same basis: quoted price, billing method, weight and size limits, product restrictions, stated delivery information, tracking, insurance options and destination coverage. Avoid choosing only by the lowest headline price.",
    "Look for what is excluded. A faster line may reject the product type. A cheaper line may use different size limits or tracking. A route that worked for a friend last month may not be available for your country, parcel or goods today. Save the name and terms of the route you actually select.",
    "PikoBuy’s shipping terms say parcels are carried by third-party logistics providers. The terms also identify cross-border risks such as customs action, damage, loss and peak-season delay. No independent spreadsheet can remove those risks. It can only help you keep the parcel data organised and avoid unsupported claims."
  ]},
  {heading:"Destination notes for Western buyers",paragraphs:[
    "For the United States, use the current routes shown for the exact product mix and destination. Check product restrictions before submitting the parcel. Do not assume that a widely discussed route accepts every category or remains available.",
    "For Canada, use Canada-specific estimates and route information. A US price or delivery report is not a substitute. For the United Kingdom, keep purchase and parcel records clear and review the current service description. For European Union destinations, choose the exact country because route availability can vary. Other European destinations should also be checked individually.",
    "Import duties, taxes, declarations and customs treatment depend on the destination and circumstances. This independent guide does not provide a universal declaration value or a promise about customs outcomes. Use current official route information and follow the rules that apply to the destination."
  ]},
  {heading:"Forwarding goods you bought elsewhere",paragraphs:[
    "PikoBuy publishes a forwarding process for goods sent to its warehouse. The page describes obtaining the warehouse address, giving it to the sender, submitting the forwarding form, waiting for warehouse receipt and photo confirmation, then finding the goods in the order page and submitting a parcel normally.",
    "The same terms say forwarded goods are unpacked and inspected. If goods are missing when the warehouse receives them, the customer should contact the sender for verification. PikoBuy states that it is not responsible for missing items when the cause is not PikoBuy. The terms also say after-sales service for forwarded products remains with the sender or seller, although PikoBuy may help ship a return.",
    "This distinction matters. A buy-for-me order and a forwarding order do not create the same seller relationship. Keep the sender’s proof, domestic tracking and item list before the parcel reaches the warehouse."
  ]},
  {heading:"Tracking and realistic expectations",paragraphs:[
    "PikoBuy’s beginner guide says tracking information will be available within three days after the parcel is shipped. That is the platform’s stated process. It does not mean the parcel will receive a carrier scan immediately in every case, nor does it guarantee delivery within a fixed number of days.",
    "International tracking can pause between handoffs. Weekends, peak periods, customs and local delivery networks may affect updates. Save the parcel number, route, dispatch status and tracking number. If the stated tracking window passes without information, use the official account support channel because an independent guide cannot see the live shipment.",
    "Judge a route using its current description and your tolerance for cost, speed and risk. Avoid websites that guarantee a delivery date without knowing the route, dispatch date and destination."
  ]},
  {heading:"A practical parcel checklist",steps:[
    {title:"Clean the item list",text:"Ship only items that match the order and have enough warehouse evidence."},
    {title:"Use measured data",text:"Replace spreadsheet guesses with warehouse weight and dimensions."},
    {title:"Choose packaging",text:"Balance protection with parcel size for the actual products."},
    {title:"Check restrictions",text:"Confirm that the goods type is accepted by the current route."},
    {title:"Compare like with like",text:"Review price, billing, limits, tracking and stated service details together."},
    {title:"Save the decision",text:"Keep the parcel number, selected route, payment and tracking record."}
  ]},
  {heading:"Claims to avoid",bullets:[
    "A universal per-kilogram price with no destination, product type or dimensions.",
    "A guaranteed delivery date without a route and dispatch date.",
    "A claim that every product can use every shipping line.",
    "A customs guarantee or fixed declaration instruction for every country.",
    "A third-party site claiming it can change or refund your live parcel."
  ]}
]} />}
