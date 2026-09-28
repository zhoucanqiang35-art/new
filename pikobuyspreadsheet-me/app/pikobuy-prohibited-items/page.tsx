import type { Metadata } from "next";
import GuidePage, { type GuideSection } from "../guide-page";

const canonical = "https://pikobuyspreadsheet.me/pikobuy-prohibited-items";
const title = "PikoBuy Prohibited Items Guide 2026: Check Before Ordering";
const description = "Check PikoBuy prohibited items and route restrictions using live product details, destination, parcel data and official support before you order or ship.";

export const metadata: Metadata = {
  title,
  description,
  keywords: ["PikoBuy prohibited items", "PikoBuy restricted items", "PikoBuy shipping restrictions", "PikoBuy product type", "PikoBuy route eligibility"],
  alternates: { canonical },
  openGraph: { title, description, url: canonical, type: "article" },
  robots: { index: true, follow: true },
};

const sections: GuideSection[] = [
  {heading:"The short answer",paragraphs:[
    "Do not rely on a copied PikoBuy prohibited items list. The public PikoBuy pages reviewed for this guide do not publish one universal, permanent catalogue of prohibited or restricted goods. Before ordering, identify the exact item and its materials or functional components, select the real destination and product type in the live shipping estimator, then confirm the current route options and any unclear classification with official PikoBuy support.",
    "A product can require extra checks without being universally banned. Eligibility may depend on the destination, available logistics provider, product classification, packed parcel and current rules. PikoBuy says routes differ in delivery time and billing methods, and its estimator asks for destination, product type, weight and dimensions. That makes a live route check more reliable than an old screenshot or third-party list.",
    "If no suitable route appears, stop before payment or resolve the item while it is still at the warehouse. Never rename, conceal or inaccurately describe a product to obtain a route."
  ]},
  {heading:"What PikoBuy's public pages actually verify",paragraphs:[
    "PikoBuy's Beginner's Guide describes a staged process: choose an item, submit and pay for the product, review it at the warehouse, choose a suitable route, submit the parcel, pay international freight and then wait for dispatch. The public shipping estimator separately asks where the parcel is going, its product type, weight, length, width and height.",
    "PikoBuy's Shipping Terms say third-party logistics providers carry international parcels. The terms identify customs policies and uncontrollable cross-border events, including confiscation, damage, loss and peak-season delay, as risks that the customer must assess. They do not provide a universal prohibited-items table or promise that a product accepted for purchase can use every international route.",
    "This guide focuses on verification. It does not turn possible risk signals into PikoBuy rules or claim that a named product category is always accepted or prohibited."
  ]},
  {heading:"Restricted is not the same as prohibited",paragraphs:[
    "Prohibited means the relevant route will not accept an item. Restricted means acceptance may depend on classification, quantity, packaging, destination, documents or a specific logistics line. An item can also have fewer available routes without being banned from all shipping.",
    "Ask support about the product link, exact variant, seller-stated materials or components, quantity and destination. Save the dated answer for the current route instead of applying a label copied from another carrier, country or date."
  ]},
  {heading:"Step 1: identify the item before you pay",paragraphs:[
    "Start with the seller's live listing. Record the source link, exact variant, quantity, product name, visible composition, dimensions and any functional components described by the seller. Save clear screenshots with the review date because listings and options can change.",
    "Look for facts that could affect classification and turn each one into a question for the live route check. Examples of questions include whether the item contains a battery, liquid, powder, magnet, pressurised part, blade, medicine, food ingredient or other regulated component. These are screening prompts, not a PikoBuy prohibited list and not a statement that every such item is rejected.",
    "If the listing is unclear, do not guess from the photograph. Ask the seller or official PikoBuy support for the missing specification before paying. A product title alone may not describe the part that affects transport."
  ]},
  {heading:"Step 2: check destination and product type",paragraphs:[
    "Open PikoBuy's current shipping estimator and select the actual destination. Choose the closest truthful product type and enter a reasonable early weight and dimensions only for planning. The estimator is a route-discovery tool, not final approval for an item that has not reached the warehouse.",
    "Record which routes appear, the date, their displayed billing method and any warning or product limitation shown in the live interface. If the correct product type is missing or ambiguous, ask official support how it should be classified. Do not choose a different category merely because it produces more routes or a lower estimate.",
    "Repeat the check if the destination, item, quantity or parcel mix changes. A route result for one country or a simple parcel should not be reused as proof for another destination or a consolidated parcel."
  ]},
  {heading:"Step 3: keep purchase acceptance separate from shipping eligibility",paragraphs:[
    "PikoBuy says customers submit a purchasing order and make the first payment before warehouse inspection and later international shipping. A successful product order therefore should not be treated as a guarantee that every destination or route will accept the final parcel.",
    "Before the first payment, save any official classification answer and decide what you will do if the live route changes by the time the product arrives. PikoBuy says out-of-stock orders are refunded, but that statement is not a general shipping-eligibility refund promise. The public pages do not promise that PikoBuy will absorb product, return or domestic shipping costs after a route limitation is discovered."
  ]},
  {heading:"Step 4: use warehouse evidence to confirm classification",paragraphs:[
    "PikoBuy says warehouse inspection includes check-in, photo confirmation and a defect check. Match the received product to the source link, selected variant and quantity. Review visible labels, accessories and components relevant to the earlier route check.",
    "Standard photos cannot prove hidden composition or professional specifications. PikoBuy's forwarding terms say professional inspection is unavailable for special and professional products, while additional detailed photos can be purchased for forwarded goods. Ask for a targeted visible detail only when a photo can actually answer the question.",
    "If the warehouse item differs from the listing or the classification remains uncertain, pause. Do not submit the parcel until the current route accepts the item as it actually arrived."
  ]},
  {heading:"Step 5: protect the return decision",paragraphs:[
    "For eligible buy-for-me goods, PikoBuy's Returns & Exchanges page allows an application within five days after the status changes to In Warehouse, counted from the next hour; five days equal 120 hours. Seller participation, resale condition, exclusions and packaging standards also matter.",
    "A route problem does not automatically prove that the seller sent a defective product. The return page lists shipping cost exceeding the customer's budget among customer-responsibility examples, and it publishes customer-paid costs for unconditional returns. Check the live return result instead of assuming a free refund because an international route is unsuitable.",
    "Keep seals, tags, labels and accessories intact while the decision is open. Packaging or labels removed at the user's request can affect return eligibility. The five-day return window is not a warehouse-storage promise."
  ]},
  {heading:"Forwarded items need earlier verification",paragraphs:[
    "PikoBuy's Shipping Terms require forwarded goods to be unpacked and inspected at the warehouse, but they also say after-sales service for forwarded products remains with the original seller or sender. PikoBuy can only help ship the goods back.",
    "For an outside order, verify route eligibility before sending it to the PikoBuy address. Keep the outside seller, order, product specification and domestic tracking with the forwarding form. If the warehouse finds a shortage not caused by PikoBuy, the terms direct the customer to contact the sender.",
    "Do not assume warehouse receipt converts a forwarded item into an approved international shipment. The item still needs a truthful classification and a current route for the final destination."
  ]},
  {heading:"Step 6: recheck the final parcel",paragraphs:[
    "Before submission, treat the packed parcel as a new shipping unit. Recheck destination, every included item, product mix, packaging, packed weight and dimensions. PikoBuy's estimator requests these fields because the final combination affects the available comparison.",
    "If one item removes suitable routes for the rest, compare a truthful split only if the live interface permits it. Never hide a restricted component in a mixed parcel or describe the parcel as a different product type. Accurate records are also important if customs or a logistics provider later asks about the contents.",
    "Save the final itemised list, selected route, warnings, packaging request, measurements and international freight payment. Route selection, parcel submission, payment and confirmed dispatch are separate events."
  ]},
  {heading:"PikoBuy prohibited items checklist",bullets:[
    "Save the live product link, exact variant and review date",
    "Record seller-stated materials, components, quantity and dimensions",
    "Turn uncertain features into specific classification questions",
    "Select the actual destination and truthful product type",
    "Save current routes, warnings and billing information",
    "Ask official support about the exact item when the category is unclear",
    "Keep purchase acceptance separate from international route eligibility",
    "Match warehouse photos and labels to the ordered product",
    "Protect seals and return options while classification is unresolved",
    "Recheck the final parcel mix, packed weight, dimensions and route"
  ]},
  {heading:"Risk boundaries",bullets:[
    "No invented universal PikoBuy prohibited-items list",
    "No claim that a risk signal makes an item automatically prohibited",
    "No promise that purchase or warehouse receipt guarantees a route",
    "No permanent route, destination or carrier-acceptance table",
    "No instruction to rename, conceal or misclassify parcel contents",
    "No guarantee that a route remains available until payment",
    "No automatic free return for an unsuitable international route",
    "No promise of customs clearance, compensation or delivery"
  ]},
  {heading:"Concise FAQ",paragraphs:[
    "Does PikoBuy publish a complete prohibited-items list? The reviewed public pages do not provide one universal permanent list. Use the current destination, product type, live routes and official support for the exact item.",
    "Does a successful PikoBuy order mean the item can ship internationally? Not necessarily. PikoBuy's published process places product purchase before warehouse review and later route selection.",
    "How do I check a potentially restricted item? Save the exact product details, enter the truthful destination and product type in the current estimator, review the live routes, and ask official support a specific classification question when needed.",
    "Can I select a different product type to unlock a route? No. Use the truthful classification. Misdescribing contents can create logistics and customs problems.",
    "What if no suitable route appears after warehouse arrival? Pause parcel submission, ask official support to confirm the classification and current options, and review any eligible return promptly.",
    "Are forwarded goods automatically approved after warehousing? No. Forwarded goods are unpacked and inspected, but after-sales responsibility remains with the original seller or sender and international route eligibility still needs confirmation."
  ]},
  {heading:"Fact basis and editorial boundary",paragraphs:[
    "This article was reviewed on 28 September 2026 against PikoBuy's public Beginner's Guide, Shipping Terms, shipping estimator, Returns & Exchanges page and homepage. Those first-party pages support the staged order process, warehouse checks, route choice, product-type and measurement inputs, third-party logistics boundary, customs risks, return timing, packaging restrictions and forwarded-goods responsibilities.",
    "The item worksheet, screening questions, classification record and final-parcel audit are independent editorial methods. The reviewed pages do not publish a universal prohibited-items catalogue, permanent carrier table, route guarantee or automatic refund for route ineligibility, so none is invented here.",
    "No customer review or testimonial image is used. Confirm the exact item, destination and live parcel with PikoBuy's current interface or official support. Product-discovery links on this site continue to lead only to FindSpreadsheet."
  ]}
];

const faqs = [
  {question:"Does PikoBuy publish a complete prohibited-items list?",answer:"The reviewed public pages do not provide one universal permanent list. Use the current destination, product type, live routes and official support for the exact item."},
  {question:"Does a successful PikoBuy order mean the item can ship internationally?",answer:"Not necessarily. PikoBuy's published process places product purchase before warehouse review and later route selection."},
  {question:"How do I check a potentially restricted PikoBuy item?",answer:"Save the exact product details, enter the truthful destination and product type in the current estimator, review the live routes, and ask official support a specific classification question when needed."},
  {question:"Can I select a different PikoBuy product type to unlock a route?",answer:"No. Use the truthful classification. Misdescribing contents can create logistics and customs problems."},
  {question:"What if no suitable PikoBuy route appears after warehouse arrival?",answer:"Pause parcel submission, ask official support to confirm the classification and current options, and review any eligible return promptly."},
  {question:"Are forwarded goods automatically approved after PikoBuy warehousing?",answer:"No. Forwarded goods are unpacked and inspected, but after-sales responsibility remains with the original seller or sender and international route eligibility still needs confirmation."}
];

const structuredData = [
  {"@context":"https://schema.org","@type":"Article",headline:title,description,datePublished:"2026-09-28",dateModified:"2026-09-28",mainEntityOfPage:canonical,inLanguage:"en",keywords:"PikoBuy prohibited items, PikoBuy restricted items, PikoBuy shipping restrictions, PikoBuy product type, PikoBuy route eligibility",citation:["https://www.pikobuy.com/guide","https://www.pikobuy.com/protocol/shipping","https://www.pikobuy.com/shipping-cost","https://www.pikobuy.com/protocol/returns","https://www.pikobuy.com/home"],author:{"@type":"Organization",name:"PikoBuy Spreadsheet Guide"},publisher:{"@type":"Organization",name:"PikoBuy Spreadsheet Guide"},isAccessibleForFree:true},
  {"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(faq=>({"@type":"Question",name:faq.question,acceptedAnswer:{"@type":"Answer",text:faq.answer}}))},
  {"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://pikobuyspreadsheet.me/"},{"@type":"ListItem",position:2,name:"SEO Articles",item:"https://pikobuyspreadsheet.me/seo-articles"},{"@type":"ListItem",position:3,name:title,item:canonical}]}
];

export default function Page(){return <GuidePage kicker="PROHIBITED ITEMS GUIDE" title={title} intro="PikoBuy prohibited items should be checked against the exact product, destination and live route—not a copied list. Identify the item truthfully, verify its product type before ordering, confirm it again at the warehouse, and protect your return options if no suitable route is available." sections={sections} reviewedDate="Reviewed 28 September 2026" structuredData={structuredData} relatedLinks={[
  {href:"/pikobuy-product-links",label:"Record the exact product and variant before ordering"},
  {href:"/pikobuy-shipping-calculator",label:"Use truthful product and parcel inputs"},
  {href:"/pikobuy-warehouse",label:"Confirm what actually reached the warehouse"},
  {href:"/pikobuy-return-policy",label:"Protect the return decision while you verify routes"},
  {href:"/pikobuy-parcel-consolidation",label:"Check how one item affects a mixed parcel"},
  {href:"/pikobuy-customs",label:"Keep product descriptions accurate for customs"}
]}/>}
