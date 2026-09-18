import type { Metadata } from "next";
import GuidePage, { type GuideSection } from "../guide-page";

const canonical = "https://pikobuyspreadsheet.me/pikobuy-order-status";
const title = "PikoBuy Order Status Guide 2026: Follow Every Stage";
const description = "Understand each verified PikoBuy order stage, separate warehouse and parcel events, protect the return clock and know when tracking should begin.";

export const metadata: Metadata = {
  title,
  description,
  keywords: ["PikoBuy order status", "PikoBuy order tracking", "PikoBuy in warehouse", "PikoBuy parcel status", "PikoBuy shipped status"],
  alternates: { canonical },
  openGraph: { title, description, url: canonical, type: "article" },
  robots: { index: true, follow: true },
};

const sections: GuideSection[] = [
  {heading:"The short answer",paragraphs:[
    "A PikoBuy order status tells you which stage needs attention; it does not promise when the next stage will happen. Separate the product order, warehouse item, submitted international parcel and shipped parcel. Check the matching identifier and latest dated event before contacting support or assuming a delay.",
    "PikoBuy's public guide confirms this sequence: select the exact item, submit the purchasing order and first payment, wait for warehouse inspection, choose a route, submit the parcel, pay international shipping and then wait for tracking. The guide says tracking information becomes available within three days after the parcel is shipped—not three days after product payment, warehouse arrival or parcel submission.",
    "The public pages reviewed here do not provide a complete dictionary of every label shown inside the live account or a universal processing time for each stage. Read the exact wording in your account. This article maps only published stages and explains the evidence to keep when a status is unclear."
  ]},
  {heading:"Think in four linked records",paragraphs:[
    "One purchase can create several records. The product order covers the source item, selected option, quantity and first payment. The warehouse record covers receipt, photos, visible checks and the In Warehouse event. The international parcel record covers the approved item list, packaging, route and shipping payment. Tracking begins after dispatch.",
    "These records are related but not interchangeable. A seller can ship a product domestically without an international parcel existing. An item can be in the PikoBuy warehouse without being added to a submitted parcel. A parcel can be submitted and paid without the public guide yet treating it as shipped.",
    "Save each identifier beside its event history. When reporting a problem, say whether it concerns the product order, warehouse item, return request, parcel or tracking number. This avoids asking a carrier to solve a warehouse question or treating a seller's domestic delivery event as international tracking."
  ]},
  {heading:"Stage 1: purchasing order and first payment",paragraphs:[
    "PikoBuy's Beginner's Guide says customers select the item specifications, including colour, size and quantity, submit the order and complete the first payment. Before paying, save the source link, exact option, displayed order details and date. A generic spreadsheet title is not enough to prove which variant you selected.",
    "The guide says prices are subject to the actual purchase and that an out-of-stock order will be refunded. It does not publish one purchase-confirmation time or a complete set of labels between payment and seller dispatch. Do not invent a deadline from another buyer's screenshot.",
    "If the order details do not match what you intended, resolve that before relying on a later status. Keep the first payment record separate from international freight, which occurs only after warehouse inspection and parcel submission."
  ]},
  {heading:"Stage 2: domestic movement to the warehouse",paragraphs:[
    "After purchase, the seller or sender must get the item to PikoBuy's China warehouse. PikoBuy's public beginner guide moves from product payment to warehouse arrival but does not state a universal domestic dispatch or delivery time. The absence of an update should be judged from the live order record, not a fixed number copied from an unofficial guide.",
    "For goods you bought elsewhere, PikoBuy's forwarding terms provide a separate sequence: obtain the warehouse address through official customer service or the forwarding form, give it to the sender, submit the required forwarding form and wait for warehouse receipt. Keep the outside order and domestic tracking number because the original seller or sender remains responsible for product after-sales.",
    "If a forwarded shipment appears delivered but no warehouse record is visible, gather the forwarding form, carrier number, delivery event, sender details and item list before contacting official support. A carrier delivery scan and a completed warehouse check-in are different events."
  ]},
  {heading:"Stage 3: In Warehouse and inspection",paragraphs:[
    "PikoBuy says warehouse inspection includes check-in, photo confirmation and a defect check. Its homepage also describes quality inspection and repacking on arrival. At this stage, match the received item to the order: product identity, colour, size, quantity, visible condition and included parts.",
    "The phrase In Warehouse has a specific return consequence. PikoBuy's return policy says the five-day application window is 120 hours counted from the next hour after the order changes to In Warehouse. This is a return deadline for eligible goods, not a published promise about inspection speed or a universal warehouse storage limit.",
    "Review the photos promptly. PikoBuy's forwarding terms say customers may use the supplied inspection photos or purchase additional detailed photos, while professional inspection is unavailable for special and professional products. Ask for focused evidence when a missing view could change the keep-or-return decision."
  ]},
  {heading:"Stage 4: return question or item approval",paragraphs:[
    "An item should not move automatically from In Warehouse to an international parcel. Give it a clear decision: approve, request more evidence or start the official after-sales process. If the product, option, quantity or visible condition is wrong, save the relevant order and photo evidence before changing packaging.",
    "A timely return request is not guaranteed approval. PikoBuy says the seller must support the return, the product must remain in the required resale condition, and exclusions or special packaging rules may apply. The policy also distinguishes customer responsibility, seller responsibility and domestic-shipping damage.",
    "Do not remove labels, accessories, seals or return-sensitive packaging while the decision is unresolved. Submitting the item in an international parcel can make the original warehouse evidence and domestic return path harder to use. Resolve the item first."
  ]},
  {heading:"Stage 5: parcel submission and shipping payment",paragraphs:[
    "After approving the goods, choose the item list and packaging. PikoBuy's guide says customers may add requests such as minimal or reinforced packaging. Use the latest available packed weight and dimensions when comparing routes; the public estimator asks for destination, product type, weight, length, width and height.",
    "The guide then instructs customers to choose a suitable route, submit the parcel and pay the international shipping fee. It says routes differ in delivery time and billing methods. This second payment belongs to the international parcel, not the earlier product order.",
    "Treat submitted, paid and shipped as separate concepts unless the live account explicitly combines them. The public guide places dispatch after route choice, parcel submission and freight payment. Do not start the published three-day tracking-information window from the submission button or payment timestamp."
  ]},
  {heading:"Stage 6: shipped and tracking available",paragraphs:[
    "PikoBuy says tracking information will be available within three days after the parcel is shipped. Record the exact shipped event and count from that point. The statement concerns tracking availability; it is not a three-day delivery estimate and does not promise a carrier scan at every step.",
    "Once a tracking number appears, read events literally. A label-created or information-received event may show that shipment data exists, but it does not by itself prove physical movement. Later transit, customs and delivery events belong to the international parcel rather than the warehouse item.",
    "PikoBuy's Shipping Terms say third-party logistics providers carry parcels and identify customs policies, confiscation, damage, loss and peak-season delays as cross-border risks. A status can show the latest known event without predicting the final delivery date or outcome."
  ]},
  {heading:"How to investigate a status that looks stuck",paragraphs:[
    "First identify the record: product order, forwarding shipment, warehouse item, return request, submitted parcel or tracking number. Copy the exact current label and its timestamp. Then locate the last completed event and the next action described by PikoBuy's published sequence.",
    "Second, collect evidence that belongs to that handoff. For purchase questions, keep the source, exact option and first payment. For warehouse questions, keep the domestic tracking, In Warehouse time and photos. For parcel questions, keep the item list, packaging request, route and international payment. For tracking questions, keep the shipped time and carrier events.",
    "Finally, contact the appropriate official channel with one precise question. Do not repeatedly change the item, packaging or parcel while asking for clarification. Do not use a social-media timetable as proof that your order is late; the reviewed official pages publish only a few specific timing statements."
  ]},
  {heading:"PikoBuy order status checklist",bullets:[
    "Save the source link, exact variant, quantity and first payment",
    "Keep product order, warehouse item, parcel and tracking identifiers separate",
    "Record every important status with its displayed date and time",
    "Retain domestic tracking for externally forwarded goods",
    "Review warehouse photos as soon as In Warehouse appears",
    "Calculate the eligible return window from the published status rule",
    "Resolve mismatches before packaging or international submission",
    "Save the approved parcel list, packaging request and live route",
    "Count tracking availability from shipped, not submitted or paid",
    "Ask official support one stage-specific question with the relevant evidence"
  ]},
  {heading:"Risk boundaries",bullets:[
    "No invented account status names or exhaustive UI status dictionary",
    "No universal seller dispatch, domestic delivery or warehouse processing time",
    "No claim that In Warehouse guarantees return eligibility or approval",
    "No assumption that parcel submission means the parcel has shipped",
    "No interpretation of tracking availability as a delivery promise",
    "No fixed customs, carrier, loss or compensation outcome"
  ]},
  {heading:"Concise FAQ",paragraphs:[
    "What does In Warehouse mean on PikoBuy? It marks the warehouse stage and starts the published eligible-return application clock. Review the item and photos promptly.",
    "Is a submitted PikoBuy parcel already shipped? Do not assume so. PikoBuy's published sequence places parcel submission and freight payment before dispatch; use the exact live account event.",
    "When should PikoBuy tracking appear? The Beginner's Guide says tracking information becomes available within three days after the parcel is shipped.",
    "Does that mean delivery takes three days? No. The statement is about tracking availability, not international delivery time.",
    "What if an order status does not change? Identify the exact stage, save its timestamp and matching records, then ask official support a specific question. PikoBuy does not publish one universal duration for every stage.",
    "Are forwarded goods shown like purchased goods? They can be found on the order page after warehouse receipt, but the forwarding form, sender records and original seller after-sales responsibility remain important."
  ]},
  {heading:"Fact basis and editorial boundary",paragraphs:[
    "This article was reviewed on 18 September 2026 against PikoBuy's public Beginner's Guide, homepage, Shipping Terms, Returns & Exchanges page and shipping estimator. Those first-party sources support the order sequence, payment stages, warehouse checks, In Warehouse deadline, forwarding process, estimator inputs and tracking-information statement.",
    "The four-record model, evidence file and stage-specific escalation checklist are independent editorial advice. The reviewed pages do not publish a complete live-account status dictionary or universal time for purchasing, seller dispatch, domestic delivery, warehouse processing, parcel dispatch, customs or delivery, so none is invented here.",
    "No customer review or testimonial image is used. Recheck the actual account and official support for a specific order. Product discovery links on this site continue to lead only to FindSpreadsheet."
  ]}
];

const faqs = [
  {question:"What does In Warehouse mean on PikoBuy?",answer:"It marks the warehouse stage and starts the published eligible-return application clock. Review the item and photos promptly."},
  {question:"Is a submitted PikoBuy parcel already shipped?",answer:"Do not assume so. PikoBuy's published sequence places parcel submission and freight payment before dispatch; use the exact live account event."},
  {question:"When should PikoBuy tracking information appear?",answer:"PikoBuy's Beginner's Guide says tracking information becomes available within three days after the parcel is shipped."},
  {question:"Does PikoBuy's three-day tracking statement mean delivery takes three days?",answer:"No. The statement is about tracking availability after shipment, not international delivery time."},
  {question:"What should I do if a PikoBuy order status does not change?",answer:"Identify the exact stage, save its timestamp and matching records, then ask official support a specific question."},
  {question:"Are forwarded goods handled like PikoBuy purchasing orders?",answer:"They can be found on the order page after receipt, but the forwarding form, sender records and original seller after-sales responsibility remain important."}
];

const structuredData = [
  {"@context":"https://schema.org","@type":"Article",headline:title,description,datePublished:"2026-09-18",dateModified:"2026-09-18",mainEntityOfPage:canonical,inLanguage:"en",keywords:"PikoBuy order status, PikoBuy order tracking, PikoBuy in warehouse, PikoBuy parcel status",citation:["https://www.pikobuy.com/guide","https://www.pikobuy.com/home","https://www.pikobuy.com/protocol/shipping","https://www.pikobuy.com/protocol/returns","https://www.pikobuy.com/shipping-cost"],author:{"@type":"Organization",name:"PikoBuy Spreadsheet Guide"},publisher:{"@type":"Organization",name:"PikoBuy Spreadsheet Guide"},isAccessibleForFree:true},
  {"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(faq=>({"@type":"Question",name:faq.question,acceptedAnswer:{"@type":"Answer",text:faq.answer}}))},
  {"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://pikobuyspreadsheet.me/"},{"@type":"ListItem",position:2,name:"SEO Articles",item:"https://pikobuyspreadsheet.me/seo-articles"},{"@type":"ListItem",position:3,name:title,item:canonical}]}
];

export default function Page(){return <GuidePage kicker="ORDER STATUS GUIDE" title={title} intro="Read a PikoBuy order status as one stage in a linked process, not a delivery countdown. Keep product orders, warehouse items, submitted parcels and shipped tracking records separate so you can take the right next action without guessing." sections={sections} reviewedDate="Reviewed 18 September 2026" structuredData={structuredData} relatedLinks={[
  {href:"/how-pikobuy-works",label:"See the complete product-to-parcel sequence"},
  {href:"/pikobuy-warehouse",label:"Handle the In Warehouse decision stage"},
  {href:"/pikobuy-return-policy",label:"Protect the eligible warehouse return window"},
  {href:"/pikobuy-payment-methods",label:"Separate product and international shipping payments"},
  {href:"/pikobuy-tracking",label:"Interpret updates after the parcel is shipped"}
]}/>}
