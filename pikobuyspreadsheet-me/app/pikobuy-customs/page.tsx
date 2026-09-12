import type { Metadata } from "next";
import GuidePage, { type GuideSection } from "../guide-page";

const canonical = "https://pikobuyspreadsheet.me/pikobuy-customs";
const title = "PikoBuy Customs Guide 2026: Prepare an Honest Parcel Record";
const description = "Understand PikoBuy customs risk boundaries, prepare accurate product and value records, and know which questions belong with the carrier or destination authority.";

export const metadata: Metadata = {
  title,
  description,
  keywords: ["PikoBuy customs", "PikoBuy customs declaration", "PikoBuy import tax", "PikoBuy parcel customs", "PikoBuy customs clearance"],
  alternates: { canonical },
  openGraph: { title, description, url: canonical, type: "article" },
  robots: { index: true, follow: true },
};

const sections: GuideSection[] = [
  {heading:"The short answer",paragraphs:[
    "PikoBuy customs preparation starts with accurate records, not a promise to avoid tax or inspection. Keep product names, quantities, purchase evidence, paid prices, destination, parcel number and route together. Follow the live form and current destination rules instead of copying another buyer's declaration value.",
    "PikoBuy's public Shipping Terms say its parcels are carried by third-party logistics providers and that the platform does not assume risks caused by customs policies or uncontrollable cross-border events, including confiscation, damage, loss and peak-season delay. PikoBuy says it offers risk alerts and continues to improve logistics insurance, but the page does not promise customs clearance or publish one insurance outcome for every route.",
    "Customs rules belong to the destination. US, EU, UK and Canadian guidance treats imported goods as subject to customs processes, with possible duties or taxes. This guide organises evidence; it does not choose a legal value, tariff code or tax result."
  ]},
  {heading:"What PikoBuy publishes—and what it does not",paragraphs:[
    "PikoBuy's beginner guide places customs inside a wider shipping sequence. After warehouse inspection, the customer chooses a suitable route, submits the parcel and pays international freight. PikoBuy notes that routes differ in delivery time and billing methods. After shipment, its guide says tracking information will be available within three days.",
    "The shipping estimator asks for destination country or region, product type, weight and parcel dimensions. Those inputs show why a route must be checked against the actual goods and destination. A price or route seen for a different parcel cannot establish the customs treatment of yours.",
    "The public pages reviewed for this article do not state a universal tax-inclusive route, customs success rate, declaration amount, duty rate, clearance time or compensation amount. If a live route contains tax, declaration or insurance terms, save the exact wording shown for that parcel and date. Do not upgrade a route label into a broader guarantee."
  ]},
  {heading:"Know the three different roles",paragraphs:[
    "PikoBuy manages purchasing or forwarding, warehouse handling and parcel submission. A logistics provider carries the parcel, while the customs authority applies destination import rules. One party may transmit information for another, but their roles remain separate.",
    "This distinction matters when a parcel stops. A question about warehouse photos belongs with PikoBuy. A question about a carrier scan or delivery attempt may belong with the logistics provider. A request for import evidence, tax or admissibility may come from a carrier acting in the clearance process or from the destination authority.",
    "Use official channels and keep the same parcel facts across them. Do not give an unknown message sender your account password, verification code or payment credentials. A tracking number inside a message is not proof that the payment link or request is genuine."
  ]},
  {heading:"Build the customs evidence file before shipping",paragraphs:[
    "Start while the goods are still in the warehouse. Save the original source link, seller or sender, order number, exact variant, quantity and actual price paid. Add the warehouse item record, inspection photos and any visible model, material or product labels. For forwarded goods, keep the outside purchase and domestic shipment records because PikoBuy says product after-sales remains with the original seller or sender.",
    "Then save the final international parcel list, destination, packaging choice, packed weight and dimensions, route, shipping payment and parcel number. After dispatch, add the tracking number and dated event history. These records should agree about what was purchased, what the warehouse received and what was packed.",
    "Do not alter evidence to match a preferred outcome. If a discount, refund or replacement changed the transaction, keep its record. Accurate context is more useful than one isolated number."
  ]},
  {heading:"Describe goods plainly and accurately",paragraphs:[
    "A useful product description identifies the item rather than hiding it behind vague words such as sample, accessory or gift. Keep the ordinary product type, material or function when known, quantity and variant. The description in your private record should match the listing, warehouse evidence and parcel contents.",
    "Do not guess technical composition, battery chemistry, authenticity or tariff classification from a listing title. If the live parcel asks for information you cannot verify, use official support. Photos confirm some visible labels, but PikoBuy says professional inspection is unavailable for special and professional products.",
    "For mixed parcels, keep an itemised list rather than one description for the whole box. Separate clothing, footwear, electronics, cosmetics or other product types as the form requires. The practical goal is consistency, not keyword-rich language."
  ]},
  {heading:"Keep truthful value records",paragraphs:[
    "Retain the actual price paid for each item and evidence of legitimate discounts or refunds. Do not copy a declaration amount from a spreadsheet, social post or another customer's parcel. The correct treatment depends on the destination's rules, the transaction and the current declaration process.",
    "European Commission guidance warns that deliberately showing a value far below the price paid can lead to seizure, added costs or a fine. It also explains that customs officers may check whether the declared description and value are correct. UK guidance says senders must declare goods correctly. US Customs and Border Protection says imported online purchases must clear customs and may be subject to duty.",
    "This article does not calculate a customs value or tell you which costs must be included. Use the current official destination guidance and any lawful instructions in the live carrier or parcel process. If documentation is requested, respond with consistent records rather than inventing a replacement value."
  ]},
  {heading:"Destination checks for the US, EU, UK and Canada",paragraphs:[
    "For the United States, CBP's public internet-purchase guidance says imported merchandise must clear CBP and may be subject to duty. Check the current CBP rules for the actual product and shipment; do not treat an old low-value discussion as a permanent exemption or a promise of release.",
    "For the European Union, the European Commission says goods dispatched from outside the EU require a customs declaration and may create import VAT, duty or handling charges. It stresses accurate nature and value information. The applicable VAT rate and customs measures can depend on the destination member state and product.",
    "For the United Kingdom, GOV.UK says goods sent from abroad go through customs to check restrictions and the correct tax or duty; the parcel or courier company handles that process. For Canada, CBSA says mailed imports may face tax or duty, with duty rates varying by product and origin or manufacture. Recheck official guidance because procedures change."
  ]},
  {heading:"Restricted goods and route eligibility",paragraphs:[
    "A product being purchasable does not mean every international route accepts it or that the destination allows it. Before parcel submission, compare the actual goods with the current route restrictions and destination import rules. Batteries, liquids, powders, food, cosmetics, medicines and branded goods can raise questions that a generic spreadsheet cannot answer.",
    "Use the product type field honestly when estimating shipping and when completing the live parcel. If one item removes suitable routes or creates an unresolved compliance question, separate it from the parcel until official guidance is clear. Do not conceal a sensitive item inside a broader category.",
    "Customs admissibility and carrier acceptance are separate. A carrier may reject goods it does not transport, while customs may stop something the carrier accepted. Confirm both; one approval does not cover the other."
  ]},
  {heading:"When tracking shows a customs event",paragraphs:[
    "Read the displayed event literally and record its time, location and wording. A customs-related scan does not automatically mean seizure, tax due or release. Look for an official request linked to the actual parcel and verify it through the carrier, PikoBuy account support or destination authority before responding.",
    "Prepare the parcel and tracking numbers, itemised contents, purchase evidence and requested document. Answer only through the verified channel. Never share a PikoBuy password or verification code.",
    "PikoBuy does not publish one customs-clearance timetable. Its terms identify customs policies and peak-season delay as cross-border risks. If tracking remains unchanged, keep the latest event and contact the appropriate official channel; do not announce a fixed release date or loss outcome without evidence."
  ]},
  {heading:"PikoBuy customs checklist",bullets:[
    "Confirm the exact destination and current route before international payment",
    "Save source links, order records, variants, quantities and actual paid prices",
    "Match the parcel list to warehouse photos and final packed goods",
    "Use plain, accurate product descriptions and verified product types",
    "Keep discount, refund or replacement evidence with the transaction",
    "Check both carrier restrictions and destination import requirements",
    "Retain the parcel number, route, payment, tracking and event history",
    "Verify customs or payment requests through an official channel",
    "Recheck government guidance because rates, thresholds and procedures change"
  ]},
  {heading:"Risk boundaries",bullets:[
    "No universal declaration value or instruction to undervalue goods",
    "No tax-free, duty-free or customs-clearance guarantee",
    "No assumption that one route accepts every product type",
    "No fixed customs-processing or delivery time",
    "No invented insurance coverage, success rate or compensation outcome",
    "No claim that PikoBuy replaces the carrier or destination customs authority"
  ]},
  {heading:"Concise FAQ",paragraphs:[
    "Does PikoBuy guarantee customs clearance? No such guarantee appears on the public pages reviewed. PikoBuy's terms identify customs policy as a cross-border risk outside its assumed responsibility.",
    "What should I keep for a customs question? Keep the parcel and tracking numbers, itemised contents, source and order records, quantities, actual paid prices, warehouse evidence and route record.",
    "Can I copy another buyer's declaration value? No. Use truthful transaction evidence and the current lawful process for your destination and parcel.",
    "Does a customs tracking event mean my parcel was seized? Not by itself. Read the event literally and verify any request through the official carrier, PikoBuy support or customs channel.",
    "Who decides import tax or duty? The destination's laws and customs process determine the result. A courier may collect amounts or handle formalities, but an independent guide cannot calculate the final charge for every parcel."
  ]},
  {heading:"Fact basis and editorial boundary",paragraphs:[
    "This article was reviewed on 12 September 2026 against PikoBuy's public Shipping Terms, Beginner's Guide, shipping estimator and homepage. PikoBuy sources support the parcel sequence, route differences, estimator inputs, third-party logistics model, tracking-information window and customs-risk boundary.",
    "Destination context was checked against current public guidance from US Customs and Border Protection, the European Commission's Taxation and Customs Union, GOV.UK and the Canada Border Services Agency. The evidence-file workflow, description checks and escalation checklist are independent editorial advice, not a tax calculation or legal opinion.",
    "No customer review, invented fee, threshold, clearance time, declaration value or insurance promise appears here. Recheck the live parcel and official destination rules. Product discovery links here lead only to FindSpreadsheet."
  ]}
];

const faqs = [
  {question:"Does PikoBuy guarantee customs clearance?",answer:"No such guarantee appears on the public pages reviewed. PikoBuy's Shipping Terms identify customs policy as a cross-border risk outside its assumed responsibility."},
  {question:"What records should I keep for PikoBuy customs questions?",answer:"Keep the parcel and tracking numbers, itemised contents, source and order records, quantities, actual paid prices, warehouse evidence and selected route."},
  {question:"Can I copy another buyer's customs declaration value?",answer:"No. Keep truthful transaction evidence and follow the current lawful process for the actual destination and parcel."},
  {question:"Does a customs tracking event mean the parcel was seized?",answer:"Not by itself. Read the event literally and verify any request through the official carrier, PikoBuy support or destination customs channel."},
  {question:"Who determines import tax or customs duty?",answer:"The destination's laws and customs process determine the result. A courier may handle formalities or collect amounts, but an independent guide cannot calculate every parcel's final charge."}
];

const structuredData = [
  {"@context":"https://schema.org","@type":"Article",headline:title,description,datePublished:"2026-09-12",dateModified:"2026-09-12",mainEntityOfPage:canonical,inLanguage:"en",keywords:"PikoBuy customs, PikoBuy customs declaration, PikoBuy import tax, PikoBuy customs clearance",citation:["https://www.pikobuy.com/protocol/shipping","https://www.pikobuy.com/guide","https://www.pikobuy.com/shipping-cost","https://www.pikobuy.com/home","https://www.cbp.gov/trade/basic-import-export/internet-purchases","https://taxation-customs.ec.europa.eu/customs/customs-procedures-import-and-export/importation/buying-goods-online-coming-non-european-union-country_en","https://www.gov.uk/goods-sent-from-abroad","https://www.cbsa-asfc.gc.ca/import/postal-postale/dtytx-drttx-eng.html"],author:{"@type":"Organization",name:"PikoBuy Spreadsheet Guide"},publisher:{"@type":"Organization",name:"PikoBuy Spreadsheet Guide"},isAccessibleForFree:true},
  {"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(faq=>({"@type":"Question",name:faq.question,acceptedAnswer:{"@type":"Answer",text:faq.answer}}))},
  {"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://pikobuyspreadsheet.me/"},{"@type":"ListItem",position:2,name:"SEO Articles",item:"https://pikobuyspreadsheet.me/seo-articles"},{"@type":"ListItem",position:3,name:title,item:canonical}]}
];

export default function Page(){return <GuidePage kicker="CUSTOMS GUIDE" title={title} intro="PikoBuy customs preparation is an evidence task: describe the real goods, keep truthful transaction records and follow the current destination rules. PikoBuy coordinates the parcel, while third-party carriers and customs authorities retain separate roles." sections={sections} reviewedDate="Reviewed 12 September 2026" structuredData={structuredData} relatedLinks={[
  {href:"/shipping-guide",label:"Compare routes and product restrictions"},
  {href:"/pikobuy-tracking",label:"Read parcel tracking and customs events carefully"},
  {href:"/pikobuy-shipping-calculator",label:"Estimate the parcel with current inputs"},
  {href:"/pikobuy-forwarding-guide",label:"Document goods purchased outside PikoBuy"}
]}/>}
