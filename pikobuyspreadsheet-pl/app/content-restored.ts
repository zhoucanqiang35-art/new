export type Guide = {
  slug: string; eyebrow: string; title: string; seoTitle?: string; description: string;
  readTime: string; updated: string; intro: string[];
  sections: Array<{ heading: string; paragraphs: string[]; bullets?: string[] }>;
  internalLinks: Array<{ href: string; label: string; note: string }>;
  sources: Array<{ href: string; label: string }>; publishedDate: string; modifiedDate: string;
  editorialNote?: string;
  visual?: { src: string; alt: string; caption: string };
  faqHeading?: string;
  faq?: Array<{ question: string; answer: string }>;
};

export const primaryLinks = { products: "https://findspreadsheet.com/AllProducts/", pikobuy: "https://findspreadsheet.com/pikobuy-spreadsheet/" };

export const categories = [
  ["Shoes", "SH", "Check seller measurements, outsole details and the exact variation before opening the live collection.", "https://findspreadsheet.com/shoes/"],
  ["Hoodies", "HD", "Compare chest, length, fabric notes and print placement instead of relying on a familiar size letter.", "https://findspreadsheet.com/hoodies-sweaters/"],
  ["T-Shirts", "TS", "Use the source size chart and check the selected colour, collar, print and garment measurements.", "https://findspreadsheet.com/t-shirts/"],
  ["Jackets", "JK", "Look at insulation, dimensions and packed volume before treating an item price as the final cost.", "https://findspreadsheet.com/jackets/"],
  ["Pants", "PT", "Review waist, rise, inseam and cut; label sizes are not a cross-brand fit guarantee.", "https://findspreadsheet.com/pants-shorts/"],
  ["Hats", "HT", "Confirm head circumference, adjustment range, colour and visible hardware.", "https://findspreadsheet.com/headwear/"],
  ["Watches", "WT", "Check diameter, strap size, functions and included parts; photos cannot prove long-term performance.", "https://findspreadsheet.com/AllProducts/"],
  ["Electronics", "EL", "Confirm compatibility, battery and route restrictions before adding any electronic item to a parcel plan.", "https://findspreadsheet.com/electronics/"],
  ["Socks", "SK", "Compare size range, fibre information and pack quantity with the live seller listing.", "https://findspreadsheet.com/AllProducts/"],
  ["Accessories", "AC", "Check dimensions, material notes, closure details and every included component.", "https://findspreadsheet.com/accessories/"],
].map(([name, icon, note, href]) => ({ name, icon, note, href }));

export const countryGroups = [
  { tier: "English core", countries: "United States · United Kingdom · Canada", rationale: "English discovery pages support the main database route and are not a claim about platform user totals." },
  { tier: "DACH & Benelux", countries: "Germany · Austria · Netherlands · Belgium", rationale: "Localised search intent should be served with full, reviewed pages rather than thin translated variants." },
  { tier: "Southern Europe", countries: "France · Spain · Italy · Portugal", rationale: "Parcel, customs and sizing questions need the same complete content structure in every language." },
  { tier: "Growth markets", countries: "Poland · Sweden", rationale: "Use current destination rules and live checkout information; do not infer availability from a country landing page." },
];

type Seed = Pick<Guide, "slug" | "eyebrow" | "title" | "seoTitle" | "description"> & { decision: string; evidence: string; limits: string; checklist: string[] };
const sources = [{ href: "/sources#pikobuy-sources", label: "PikoBuy platform source record" }, { href: "/sources#findspreadsheet-sources", label: "FindSpreadsheet product-source record" }];
const links = [
  { href: "/how-to-use-pikobuy-spreadsheet", label: "Read the research workflow", note: "Keep product selection, warehouse evidence and parcel planning as separate decisions." },
  { href: "/pikobuy-qc-photo-guide", label: "Use the QC-photo guide", note: "Turn a vague photo request into a visible, checkable question." },
  { href: "/pikobuy-shipping-europe", label: "Plan a parcel by destination", note: "Compare live route, weight and dimensions before treating an estimate as final." },
];

function makeGuide(seed: Seed): Guide {
  return {
    slug: seed.slug, eyebrow: seed.eyebrow, title: seed.title, seoTitle: seed.seoTitle, description: seed.description,
    readTime: "8 min read", updated: "Updated 11 September 2026", publishedDate: "2026-09-11", modifiedDate: "2026-09-11",
    intro: [
      `${seed.title} is an independent research guide for shoppers who use a product spreadsheet before deciding whether to continue with a buying platform. It is not a price promise, seller endorsement, warehouse service or delivery guarantee.`,
      "The useful question is not whether one screenshot or comment looks reassuring. It is whether you can compare the live listing, selected option, warehouse evidence and destination-specific parcel information in a way that still makes sense when conditions change.",
      "PikoBuy publicly describes a flow that can begin with product search or a submitted link, then moves through purchase assistance, warehouse inspection, repacking and international shipping. This guide focuses on the decision point that matters for this topic without presenting the independent site as the service connected to an order.",
    ],
    sections: [
      { heading: "Start with a record you can verify", paragraphs: [
        `Before acting on any recommendation, save the exact source link, product title, selected option, seller images and the date you checked them. ${seed.decision} A short label without the surrounding listing is not enough evidence to make a later comparison.`,
        "The live seller page is the reference for option names, availability and the information shown at the point of purchase. A spreadsheet entry can help discovery, but it cannot guarantee that a price, stock status, size option or seller response remains unchanged. Recheck the live listing at the moment you commit.",
        "Keep a simple two-column note: what the page visibly states, and what still needs confirmation. This prevents a common research mistake—turning a reasonable inference into a claim that the source never made. It also gives you a clear brief if you later need to ask the service a focused question.",
      ], bullets: seed.checklist },
      { heading: "Use evidence at the right stage", paragraphs: [
        "Different evidence answers different questions. Seller photos can help identify a listed variation; warehouse photos can show an item received by the warehouse; a packed-parcel estimate can help compare routes. None of those records alone proves long-term durability, authenticity, final customs treatment or delivery performance.",
        `${seed.evidence} When a record cannot answer the decision, ask one narrow question through the order service before parcel submission. A request for a labelled measurement, a missing angle or the actual packed dimensions is more useful than a general request to “check everything.”`,
        "PikoBuy’s public homepage says items undergo inspection and repacking after arrival at its China warehouse. Treat that workflow as an opportunity to compare visible details with your saved order record, not as a blanket promise that every feature of every item has been independently verified.",
      ] },
      { heading: "Compare cost, risk and reversibility", paragraphs: [
        "A product decision should include the next cost decision. International shipping can vary with destination, product type, actual weight, packed dimensions, route restrictions and optional services. A low item price may stop looking low once the parcel stage is known, especially when volume or repeated handling is involved.",
        "The most reversible moment is normally before international dispatch. Compare the correct variant, visible condition, measurements and parcel plan while the item is still in the warehouse. Save photos, order notes and message history so that a specific issue can be described with evidence rather than memory.",
        "Do not treat another buyer’s parcel, price or timeline as a transferable quote. It may use a different route, date, item category, declaration, packaging choice or destination. A useful guide makes the variables visible instead of promising a universal outcome.",
      ] },
      { heading: "What this guide cannot decide for you", paragraphs: [
        `${seed.limits} Platform policies, seller decisions, carrier availability and customs rules can change after an article is published. Confirm the live order page, current route information and destination requirements before payment or dispatch.`,
        "This independent site does not accept payments, place orders, inspect items, choose couriers, submit declarations or handle claims. Questions about an active order, payment, shipping line, refund, tracking or support ticket belong to the service connected to that order.",
        "The practical goal is modest but valuable: reduce avoidable mismatches by documenting the facts you can check, naming the uncertainty you cannot remove, and making the next decision while options are still open. That is more useful than a generic reassurance page.",
      ] },
      { heading: "Make the next decision traceable", paragraphs: [
        "A good research record makes a later decision easier to explain. Keep the source URL, chosen variation, date, seller screenshots, order details, warehouse images and parcel-screen details together. If a value changes, you can compare the new information with the saved record instead of relying on an impression of what the page used to say.",
        "Use a clear approval rule before you receive warehouse photos or a shipping quote. For example, decide whether a missing measurement, a visibly different option, a damaged component, an unavailable route or a higher packed-volume estimate would make you pause. Writing the rule first reduces pressure to rationalise a purchase after money or time has already been spent.",
        "When information remains incomplete, choose the smallest reversible next step: ask for a specific detail, wait for warehouse evidence, compare a second listing or keep the item out of the parcel. The aim is not to remove every uncertainty. It is to avoid treating uncertainty as proof that a product, seller, route or outcome is suitable.",
      ] },
    ], internalLinks: links.filter((item) => !item.href.endsWith(seed.slug)), sources,
  };
}

const seeds: Seed[] = [
  { slug: "pikobuy-fees-total-cost", eyebrow: "Cost planning", title: "PikoBuy Fees Explained: Build a Real Total-Cost Record", description: "Separate item price, domestic delivery, parcel choices and destination charges before relying on a headline cost.", decision: "Record the item price separately from domestic delivery, optional services and later international shipping.", evidence: "PikoBuy’s public estimator asks for destination, product type, weight and parcel dimensions, showing why one per-kilogram claim is incomplete.", limits: "No independent article can quote your final total or guarantee a tax, duty, exchange-rate or carrier outcome.", checklist: ["Source item price and selected option", "Domestic delivery and service charges shown", "Estimated and actual parcel measurements", "Destination-specific shipping quote"] },
  { slug: "pikobuy-seller-listing-verification", eyebrow: "Listing checks", title: "PikoBuy Seller and Listing Verification Checklist", description: "Match a spreadsheet find to its active seller listing, options and visible product evidence.", decision: "Match item ID, title, colour, size or variation text before treating two similar-looking listings as the same item.", evidence: "The best evidence is the current source listing plus saved option text, not a copied title or an old product image.", limits: "A listing review cannot prove seller reliability, stock, fulfilment speed or how an item will perform after delivery.", checklist: ["Exact product link", "Item ID or seller reference", "Selected colour and size text", "Current images and listing status"] },
  { slug: "how-to-use-pikobuy-spreadsheet", eyebrow: "Beginner workflow", title: "How to Use a PikoBuy Spreadsheet Without Skipping the Checks", description: "Move from discovery to an order-ready research record, QC review and realistic parcel plan.", decision: "Use the spreadsheet for discovery, then verify the active seller listing before deciding whether a product deserves a closer look.", evidence: "PikoBuy describes product search or submitted links, purchase assistance, warehouse inspection and international shipping as distinct stages.", limits: "A spreadsheet route does not replace the platform’s live terms, account information or support process.", checklist: ["Choose one focused product category", "Verify source listing and options", "Prepare QC questions before arrival", "Plan shipping after warehouse data"] },
  { slug: "pikobuy-qc-photo-guide", eyebrow: "Warehouse QC", title: "PikoBuy QC Photos: What a Warehouse Image Can and Cannot Prove", description: "A category-aware QC checklist for identity, measurements, visible condition and focused photo requests.", decision: "Check item identity and requested variation before spending time on fine visual details.", evidence: "Warehouse images are useful for visible labels, colour, quantity, measurements and damage when the relevant angle is shown.", limits: "Photos cannot prove authenticity, hidden construction, comfort, material composition, battery health or long-term durability.", checklist: ["Correct item and quantity", "Size label or requested measurement", "Colour and visible variation", "Visible damage or missing components"] },
  { slug: "pikobuy-shipping-europe", eyebrow: "Parcel planning", title: "PikoBuy Shipping to Europe: Questions to Ask Before You Submit a Parcel", description: "Plan around actual weight, dimensions, product restrictions and destination rules instead of fixed shipping promises.", decision: "Compare available routes only after the warehouse items, parcel dimensions and destination are known.", evidence: "PikoBuy’s public pages present international shipping and a shipping estimate tool, while route choices remain dependent on the parcel and destination.", limits: "This page cannot promise a route, customs result, delivery date, tax treatment or final courier charge.", checklist: ["Destination and postcode if required", "Product category restrictions", "Actual weight and dimensions", "Current route terms and tracking coverage"] },
  { slug: "pikobuy-eu-vat-customs-preparation", eyebrow: "EU customs", title: "PikoBuy EU VAT and Customs Preparation Guide for 2026", description: "A checklist for separating parcel planning from destination customs and tax obligations.", decision: "Treat customs preparation as part of the buying decision, not a detail to solve after the parcel has been paid.", evidence: "European import treatment can depend on classification, value, origin, transport and destination rules rather than an agent label.", limits: "No shopping guide can guarantee clearance, a tax amount or that a particular declaration approach is accepted.", checklist: ["Destination-country official guidance", "Accurate product and value record", "Route restrictions", "Saved order and parcel evidence"] },
  { slug: "pikobuy-tracking-delay-diagnosis", eyebrow: "Tracking", title: "PikoBuy Tracking Status After Shipping: Diagnose Parcel Delays", description: "Read tracking events as a sequence of hand-offs without assuming that a quiet scan means a lost parcel.", decision: "Record the shipping line, dispatch time and each visible scan before contacting support with a precise question.", evidence: "A first scan, export hand-off, arrival scan and delivery scan can be separated by carrier processing and destination logistics.", limits: "An article cannot locate a parcel, override a carrier, predict delivery or determine a claim outcome.", checklist: ["Parcel number and route", "Dispatch date and first scan", "Latest location and timestamp", "Order screenshots and messages"] },
  { slug: "is-pikobuy-safe-buyer-checklist", eyebrow: "Buyer safety", title: "Is PikoBuy Safe to Use? A 12-Point Buyer Checklist", description: "A practical risk-control list for account hygiene, listing records, payment evidence, QC and parcel choices.", decision: "Break a broad safety question into checks you can actually complete before and after a purchase.", evidence: "Useful evidence includes live terms, payment records, source listing, warehouse images and written route information for the exact order.", limits: "A checklist cannot certify a platform, seller, payment method, parcel or delivery outcome as risk-free.", checklist: ["Use unique account security", "Save source and payment records", "Check product restrictions", "Keep QC and parcel evidence"] },
  { slug: "pikobuy-reviews-customer-experience-evidence", eyebrow: "Public reviews", title: "PikoBuy Reviews and Customer Experiences: What the Evidence Shows", description: "Read small self-selected review samples without mistaking posts for a measured success rate.", decision: "Separate a reviewer’s experience from a general conclusion about products, shipping or support.", evidence: "Public reviews can identify questions to investigate, but sample size, incentives, dates and destination differences affect what they can prove.", limits: "This article does not calculate a platform rating, verify individual posts or guarantee that another shopper will have the same outcome.", checklist: ["Date and destination", "Order type and item category", "Evidence attached to the claim", "Whether feedback is promotional or independent"] },
  { slug: "pikobuy-parcel-insurance-claim", eyebrow: "Insurance", title: "PikoBuy Parcel Insurance: Coverage, Evidence and Claim Checklist", description: "Document a parcel before dispatch and check terms before relying on optional insurance.", decision: "Read the current route and insurance terms before paying, then save evidence before an issue occurs.", evidence: "Useful claim records can include order details, warehouse photos, packed-parcel information, tracking events and communications.", limits: "This guide cannot confirm eligibility, coverage, liability, compensation or the outcome of a claim.", checklist: ["Current route terms", "Coverage and exclusions shown", "Parcel contents and photos", "Tracking and claim deadlines"] },
  { slug: "pikobuy-volumetric-weight-packaging", eyebrow: "Packing", title: "PikoBuy Volumetric Weight and Packaging: A Practical Calculator Guide", description: "Understand scale weight and dimensional weight, then compare packaging choices with their protection trade-offs.", decision: "Measure the packed parcel rather than assuming a light item will always be charged only by its scale weight.", evidence: "The public estimator requests length, width and height as well as weight, which makes packed volume an important variable.", limits: "Only the active line and final packed parcel can determine the chargeable-weight rule and billed amount.", checklist: ["Actual parcel weight", "Length, width and height", "Protective packaging choice", "Current route calculation shown"] },
  { slug: "pikobuy-return-policy", eyebrow: "Returns", title: "PikoBuy Returns and Warehouse Decision Guide", description: "Act on a visible mismatch while the item is in the warehouse and keep the order record for a precise request.", decision: "Separate an obvious wrong item or visible defect from a later change of preference, because eligibility and costs can differ.", evidence: "PikoBuy publishes returns and exchanges information, including warehouse-stage timing and category conditions that should be checked on the live policy.", limits: "This guide cannot approve a return, quote a fee or override seller and platform eligibility conditions.", checklist: ["Order status and current deadline", "Specific issue and visible evidence", "Seller and platform conditions", "Possible domestic return charges"] },
  { slug: "pikobuy-size-guide-measurements", eyebrow: "Sizing guide", title: "How to Choose the Correct Size on PikoBuy: Measurements Before Labels", description: "Use centimetre measurements, seller charts and focused warehouse requests instead of assuming labels match.", decision: "Compare a garment or shoe measurement with an item you already own and know fits, rather than converting a label by habit.", evidence: "Seller charts and warehouse images can show the listed size, insole length, chest width or garment length when the requested measurement is visible.", limits: "No conversion chart or image can guarantee fit because cut, tolerance, material stretch and personal preference vary.", checklist: ["Seller chart in centimetres", "A known-fitting reference item", "Exact selected size", "Focused QC measurement request"] },
  { slug: "pikobuy-sneaker-batch-qc-context", eyebrow: "Sneaker research", title: "PikoBuy Sneaker Batch Labels and QC Context: Compare Evidence, Not Hype", description: "Treat batch names as seller descriptors, then compare the listing, photos, measurements and visible details.", decision: "Record the exact batch label as shown by the seller and avoid assuming one label has a fixed meaning across every listing or date.", evidence: "QC photos can support a visible comparison of size label, shape, colour, outsole, stitching and supplied accessories for the received item.", limits: "This guide does not rank batches, authenticate products, label goods as replicas or promise that a seller description is accurate.", checklist: ["Exact seller batch label", "Listing version and date", "Visible QC comparison points", "Specific missing-angle request"] },
  { slug: "pikobuy-parcel-consolidation-shipping-cost", eyebrow: "Consolidation", title: "PikoBuy Parcel Consolidation: Weight, Volume and Shipping Trade-Offs", description: "Decide whether to combine warehouse items after comparing weight, dimensions, restrictions and shared-parcel risk.", decision: "Compare one combined parcel with a split plan using the same destination, product restrictions and protection choices.", evidence: "Consolidation can reduce repeated handling, but bulky packaging and dimensional charging can change the result; warehouse measurements are more useful than guesses.", limits: "This guide cannot guarantee that consolidation lowers cost or reduces customs, delay or damage risk for every parcel.", checklist: ["Items ready in warehouse", "Combined actual and volumetric weight", "Protection and box-removal trade-off", "Current route eligibility"] },
];

const restrictedItemsGuide: Guide = {
  slug: "pikobuy-prohibited-items-shipping-restrictions",
  eyebrow: "Shipping restrictions",
  title: "PikoBuy Prohibited Items: A Pre-Shipping Route Checklist",
  seoTitle: "PikoBuy Prohibited Items & Shipping Restrictions",
  description: "Check PikoBuy prohibited items, sensitive-product risks and route eligibility before buying, warehousing or submitting an international parcel.",
  readTime: "9 min read",
  updated: "Updated 11 September 2026",
  publishedDate: "2026-09-11",
  modifiedDate: "2026-09-11",
  editorialNote: "This independent guide was checked against PikoBuy’s public User Registration Agreement, Terms of Service, Shipping Terms and Beginner Guide on 11 September 2026. It is not legal, customs or carrier advice, and it does not represent or speak for PikoBuy.",
  intro: [
    "The useful time to investigate PikoBuy prohibited items and shipping restrictions is before you pay for a product, not after it reaches a warehouse. An item can be ordinary in daily life yet difficult to export because of its contents, packaging, intellectual-property status or the destination country’s rules.",
    "PikoBuy’s public agreement says users are responsible for understanding internationally prohibited items and relevant laws. It also separates clearly prohibited mail from sensitive products that may face higher delivery or customs risk. That distinction matters: “not universally prohibited” is not the same as “eligible for your route.”",
    "Use this checklist to identify the item, collect evidence and ask a narrow route question at three decision points: before purchase, after warehouse check-in and before parcel submission. The live route and destination rules remain the final operational reference.",
  ],
  visual: {
    src: "/pikobuy-restricted-items-route-check.svg",
    alt: "Decision flow for checking whether a PikoBuy item is prohibited, sensitive, route-eligible or still unconfirmed",
    caption: "An original decision aid: classify the item first, then verify the exact route and destination before parcel submission.",
  },
  sections: [
    {
      heading: "Know the four outcomes before you research a route",
      paragraphs: [
        "A practical restriction check needs more than a yes-or-no label. Put the item into one of four working outcomes: clearly prohibited under the published agreement; identified as sensitive or higher-risk; apparently ordinary but still dependent on the current route and destination; or unknown because the listing does not reveal enough information. Unknown should trigger a question, not an optimistic assumption.",
        "PikoBuy’s User Registration Agreement lists categories that must not be mailed, including items prohibited by law, explosive, flammable, corrosive, radioactive, toxic or otherwise dangerous goods, currency, perishable items and most live animals. It also covers items whose nature or packaging could harm people, other mail or postal equipment, plus anything barred by the destination or customs authorities.",
      ],
      bullets: [
        "Prohibited: stop; do not order or try another declaration",
        "Sensitive: obtain current route-specific confirmation",
        "Ordinary: still compare destination and carrier conditions",
        "Unknown: identify contents, power source and packaging before paying",
      ],
    },
    {
      heading: "Treat sensitive items as a route question, not a promise",
      paragraphs: [
        "The public agreement identifies essential oils, care solutions, lubricants, batteries and glue as sensitive items that PikoBuy may remove to support delivery. It separately warns that replicas, items containing large amounts of liquid or powder, and products containing batteries, food or medicine are subject to customs policies and can carry delivery risk. These statements are warnings, not a universal line-by-line acceptance table.",
        "Do not convert that wording into “all batteries are banned” or “small liquids are always accepted.” Eligibility can depend on the exact product, battery configuration, amount, packaging, carrier, transit path and destination. PikoBuy’s public shipping estimator asks for destination, product type, weight and dimensions, but the public pages reviewed for this article do not publish one permanent rule covering every sensitive-item and route combination.",
      ],
    },
    {
      heading: "Run the first check before purchasing",
      paragraphs: [
        "Start on the live seller page. Save the source URL, full product title, selected variation, current images and any specification panel. Look for the material or substance, battery information, liquid or powder quantity, included accessories, and whether the product is pressurised, perishable, medicinal or otherwise regulated. These are research prompts, not a new official PikoBuy classification list.",
        "Next, compare the product with PikoBuy’s current terms. If it matches a clearly prohibited category, stop. If it resembles a sensitive category or the description is incomplete, ask whether the exact item can be purchased, stored and shipped on any route to your destination. Keep the answer with the order record and note its date, because route availability and policy wording can change.",
        "Do not rely on a seller’s international-shipping claim, an old screenshot, a spreadsheet category, or another buyer’s parcel. Those sources may describe a different version, quantity, carrier or country. PikoBuy’s Beginner Guide itself tells buyers to confirm specifications, colour and size before ordering; restriction research should use the same exact-item discipline.",
      ],
      bullets: [
        "Save the exact listing and selected variant",
        "Record contents, quantity and power source shown",
        "Compare the item with the current published restrictions",
        "Ask about the exact destination when eligibility is unclear",
      ],
    },
    {
      heading: "Use warehouse evidence for identity, not legal clearance",
      paragraphs: [
        "Warehouse arrival creates a second checkpoint. PikoBuy’s Shipping Terms say forwarded goods are unpacked and inspected and that users can review inspection photos or buy additional detailed photos. The Beginner Guide describes check-in, photo confirmation and a defect check. Use those images to confirm that the received item and visible label match the product you researched.",
        "A warehouse photo can show a battery label, container size, warning symbol, model number or included component when the angle and resolution make it visible. It cannot prove the full chemical composition, establish legal import status or guarantee carrier acceptance. PikoBuy also says professional inspection is unavailable for some special or professional products, so visible condition and route eligibility remain different questions.",
      ],
    },
    {
      heading: "Recheck the live line before parcel submission",
      paragraphs: [
        "The parcel screen is the third and decisive checkpoint. Confirm the destination, product category, packed contents, actual weight and dimensions, then read the active line’s restrictions and notices. If the interface blocks a route or marks the item as sensitive, do not work around that control. Ask support for the compliant options available for the exact parcel.",
        "PikoBuy’s agreement says products bought in China must comply with Chinese law and be permitted for export. It also warns that customs policies differ by country, that sensitive parcels may draw requests for invoices or clearance documents, and that PikoBuy does not guarantee customs clearance. Carrier acceptance at dispatch therefore cannot promise admission by a transit or destination authority.",
        "Keep the declaration accurate and consistent with the order record. Never conceal a restricted component, choose a misleading product description or split an item merely to evade a rule. Misdeclaration can create legal, customs, insurance and delivery consequences, and prohibited contents can affect compensation under PikoBuy’s published parcel-insurance wording.",
      ],
      bullets: [
        "Match parcel contents to the saved order record",
        "Read the active route notice at the time of submission",
        "Save eligibility wording and any support confirmation",
        "Use an accurate description and requested documents",
      ],
    },
    {
      heading: "Decide whether to remove, return, split or stop",
      paragraphs: [
        "When an item cannot use your preferred route, compare only compliant alternatives. A removable sensitive component may change eligibility, but it may also reduce usefulness or value. Returning the item while it is still in the warehouse may be more reversible than paying for a route you did not plan for. A split parcel can isolate an eligible item from a sensitive one, yet it adds handling and may increase total shipping cost.",
        "Write down the decision criteria before acting: whether the product works without the removed component, whether a compliant route exists, the updated packed weight, the additional fee exposure, and whether the destination permits the item. If one fact is missing, pause. PikoBuy’s terms can change, sellers control domestic return acceptance, and third-party logistics providers carry international parcels, so no article can approve a live shipment.",
        "If the only proposed solution depends on hiding the item, understating it or hoping it passes inspection, stop. The useful outcome of a restriction check is not finding a loophole. It is discovering early that a product does not fit your destination, budget or risk tolerance while a safer decision may still be available.",
      ],
    },
    {
      heading: "Keep a compact evidence pack",
      paragraphs: [
        "Store one folder or note for the source listing, chosen variant, specification images, order details, warehouse photos, visible labels, route notice, support messages and final parcel contents. Add the date to each live-page screenshot. If a product name changes or a route disappears, you can explain what information supported the earlier decision without claiming the old state is still current.",
        "Use the evidence pack to ask precise questions: “Does the current line to this destination accept this item with the labelled built-in battery?” is actionable; “Can you ship electronics?” is not. If support requests a document, verify what it is, who issued it and whether it accurately describes the item. Do not create or alter evidence to force eligibility.",
        "Finally, check the official agreement again immediately before payment and dispatch. This guide records what was publicly observable on 11 September 2026, but PikoBuy expressly says its terms and services may be updated. Your live order, current route notice and destination rules take priority over any static checklist.",
      ],
    },
  ],
  internalLinks: [
    { href: "/is-pikobuy-safe-buyer-checklist", label: "Use the broader buyer-safety checklist", note: "Check account, seller, payment and evidence risks that sit outside shipping eligibility." },
    { href: "/pikobuy-seller-listing-verification", label: "Verify the seller listing first", note: "Capture the exact variation and specifications before asking a route question." },
    { href: "/pikobuy-qc-photo-guide", label: "Plan focused warehouse photos", note: "Use visible labels and components to confirm identity without treating QC as customs clearance." },
    { href: "/pikobuy-parcel-insurance-claim", label: "Review parcel-insurance evidence", note: "Understand why prohibited contents and saved route terms can matter to a later claim." },
  ],
  faqHeading: "PikoBuy restricted-item questions",
  faq: [
    { question: "Does warehouse acceptance mean an item can ship internationally?", answer: "No. Warehouse acceptance and inspection can confirm receipt and visible details, but international eligibility still depends on the item, current route, carrier, transit path and destination rules. PikoBuy’s agreement does not guarantee customs clearance." },
    { question: "Can PikoBuy remove a sensitive component from a product?", answer: "PikoBuy’s User Registration Agreement says sensitive items including essential oils, care solutions, lubricants, batteries and glue may be removed. Confirm what this means for the exact order, whether the product remains usable and whether any route accepts the remaining contents." },
    { question: "Are batteries, liquids and powders always prohibited?", answer: "The public agreement flags batteries, large amounts of liquid or powder, food and medicine as customs-sensitive, but it does not publish one universal rule for every item, route and destination. Check the live line and ask about the exact product before buying or submitting a parcel." },
    { question: "What restriction evidence should a buyer save?", answer: "Keep the live listing, selected variant, visible contents and specifications, warehouse photos, product labels, route-eligibility wording, support messages, parcel contents and the date each record was captured. The evidence should accurately describe the item." },
  ],
  sources: [
    { href: "https://www.pikobuy.com/protocol/user", label: "PikoBuy User Registration Agreement — prohibited mail, sensitive-item risks and customs limits" },
    { href: "https://www.pikobuy.com/protocol/terms", label: "PikoBuy Terms of Service — prohibited items, intellectual-property rules and enforcement" },
    { href: "https://www.pikobuy.com/protocol/shipping", label: "PikoBuy Shipping Terms — warehouse inspection and third-party logistics risks" },
    { href: "https://www.pikobuy.com/guide", label: "PikoBuy Beginner Guide — ordering, warehouse inspection and route-selection workflow" },
  ],
};

const returnedParcelGuide: Guide = {
  slug: "pikobuy-parcel-returned-to-warehouse",
  eyebrow: "Returned parcels",
  title: "PikoBuy Parcel Returned to Warehouse: Reshipment Checklist",
  seoTitle: "PikoBuy Parcel Returned to Warehouse: What to Do",
  description: "Diagnose why a PikoBuy parcel was returned, preserve evidence, correct the cause and compare compliant reshipment options before paying again.",
  readTime: "9 min read",
  updated: "Updated 13 September 2026",
  publishedDate: "2026-09-13",
  modifiedDate: "2026-09-13",
  editorialNote: "This independent guide was checked against PikoBuy’s public User Registration Agreement, Shipping Terms, Returns & Exchanges policy, Terms of Service and Beginner Guide on 13 September 2026. It cannot identify an active parcel or approve a reshipment, and it does not represent PikoBuy or any carrier.",
  intro: [
    "A PikoBuy parcel returned to warehouse is not one single problem. A parcel can fail a security check before export, be rejected after it has entered international transit, or come back because the address, delivery attempt or collection process failed. Each path changes the next question—and potentially who pays to send it again.",
    "PikoBuy’s public User Registration Agreement makes one important distinction. It says a parcel returned after a failed domestic security inspection may be reshipped free after it comes back, while a parcel already sent overseas and returned for specified international or delivery reasons requires the user to bear reshipment cost. The agreement does not publish one universal fee, handling time or automatic outcome.",
    "Use this evidence-first checklist to establish where the return happened, capture the carrier’s wording, correct the cause and compare the new route before approving another payment. A returned scan is a starting fact, not proof of blame or a promise that the same parcel can simply be sent again.",
  ],
  visual: {
    src: "/pikobuy-returned-parcel-checklist.svg",
    alt: "Decision flow for diagnosing a PikoBuy parcel returned before export or after international dispatch",
    caption: "An original returned-parcel decision aid: locate the failed hand-off, document the reason, correct it, then price a compliant reshipment.",
  },
  sections: [
    {
      heading: "First determine whether the return was domestic or international",
      paragraphs: [
        "Begin with timestamps, not assumptions. Save the parcel number, submitted route, payment record, dispatch date and every tracking event. Mark the last successful hand-off and the first event that mentions rejection, return, unsuccessful delivery or a security check. Ask support to confirm whether the parcel had left the sending country and whether it physically returned to a PikoBuy-controlled warehouse.",
        "This distinction matters because PikoBuy’s agreement treats two situations differently. A parcel marked by sending-country customs as having failed a domestic security inspection may be arranged for free reshipment after it returns. If a parcel was already sent overseas and returned because of an international security failure, no recipient signature, an incorrect or incomplete address, or delivery failure, the agreement says the user bears the reshipment cost.",
        "Do not infer the category from one translated tracking phrase. Ask for the operational return reason and recorded stage in writing. If the answer remains unclear, do not describe the return as free or chargeable.",
      ],
      bullets: [
        "Parcel number, route and original shipping payment",
        "Dispatch date and complete tracking sequence",
        "Last successful location or carrier hand-off",
        "Written return reason and confirmed receiving warehouse",
      ],
    },
    {
      heading: "Build one evidence pack before requesting action",
      paragraphs: [
        "A useful case record connects the parcel to its contents and destination. Save the submitted address exactly as shown, including recipient name, postcode, unit or apartment number, telephone number and any carrier-required tax identifier. Preserve the packed-parcel photo, weight and dimensions, contents or declaration record, route notice and support messages. Hide sensitive identifiers when sharing outside official support.",
        "Take screenshots with visible dates, but also copy tracking events as text so they can be searched and compared. If the destination carrier offered a delivery attempt, pickup window or address-correction request, keep that notice and your response. If the parcel was rejected for a product issue, link the message to the exact item, variant, visible label and quantity instead of sending a vague product category.",
      ],
    },
    {
      heading: "Match the remedy to the actual return reason",
      paragraphs: [
        "For a domestic security-check return, ask whether the contents and packaging can use the same route without a repeat failure. Free reshipment wording does not remove the need to correct a product classification, packaging or route problem. Confirm whether anything must be removed, repacked or routed differently and whether that change creates a separate charge not covered by the reshipment statement.",
        "For an address or delivery return, compare the submitted data with a destination-format checklist. Correct spelling, building number, unit, postcode, recipient name and reachable phone number. Ask whether the carrier requires the name to match an identification document. PikoBuy’s Terms of Service require accurate, complete and current shipping information; the public pages do not promise that an address can be changed after dispatch.",
        "For a sensitive-item or customs-related return, re-run the item and route check. PikoBuy’s agreement warns that batteries, food, medicine and products containing larger amounts of liquid or powder can face customs risk, and it makes no customs-clearance guarantee. Do not resend by concealing the item or using an inaccurate description. Request a compliant route for the disclosed contents or remove the item from the plan.",
      ],
      bullets: [
        "Security check: identify the exact item or packing issue",
        "Address: correct every field and confirm destination format",
        "Delivery failure: preserve attempts, notices and pickup deadlines",
        "Restriction: verify the disclosed contents against a live route",
      ],
    },
    {
      heading: "Price the second shipment as a new decision",
      paragraphs: [
        "Do not approve reshipment until you have a current quote and a clear list of what it includes. PikoBuy’s public agreement states that third-party logistics providers perform parcel forwarding and that users choose the provider and pay its shipping fee plus PikoBuy’s platform service fee. A previous price does not establish the new amount because the route, exchange rate, weight, dimensions, packaging or service terms may have changed.",
        "Ask for the current packed weight and dimensions if the parcel was opened, repacked or had an item removed. Compare the new route’s eligibility, tracking, insurance terms and chargeable-weight method. Keep the first shipment, return cost, repacking or storage if shown, and new shipment as separate lines; combining them into one number makes it difficult to challenge an unexplained charge later.",
        "The official pages reviewed for this guide do not publish a universal returned-parcel fee, storage period, processing time or fixed reshipment deadline. They also do not say that every domestic return is free—only the specified failed domestic security-inspection scenario receives that wording. Ask for the live case terms before funding the account or confirming the parcel.",
      ],
    },
    {
      heading: "Inspect the returned parcel before sending it again",
      paragraphs: [
        "Multiple journeys add handling risk. Once the parcel is physically back, ask whether the outer packaging is intact, wet, crushed, opened or relabelled. Compare the returned weight with the previous packed weight and request focused photos when a meaningful difference or visible damage appears. PikoBuy’s Shipping Terms say forwarded goods are unpacked and inspected at the warehouse, while professional inspection is unavailable for special or professional products.",
        "A photo can show a damaged carton, missing visible component, broken seal or changed label. It cannot prove hidden function, authenticity or every internal condition. Decide whether the parcel needs reinforcement, a smaller box or separation of a restricted item, then recalculate both protection and dimensional-weight trade-offs. Do not remove protective packaging solely to chase a lower quote when the goods have already travelled once.",
        "If contents are missing or damaged, pause the reshipment and document the condition before altering the parcel. PikoBuy states that international parcels are carried by third-party logistics providers and that customs action, loss, damage and delay are cross-border risks. A new dispatch can make the earlier chain of custody harder to reconstruct, so obtain the case response first.",
      ],
    },
    {
      heading: "Know when not to reship",
      paragraphs: [
        "Stop if the original cause remains unresolved, the destination cannot accept the item, the corrected address cannot be confirmed, or the new cost makes the order uneconomic. Also stop if the proposed workaround depends on an inaccurate declaration. PikoBuy’s Terms allow orders or service to be refused for prohibited or unlawful items and say related return, storage or disposal costs can fall to the customer.",
        "If you are considering returning individual goods to the seller instead, treat that as a separate warehouse-return process. PikoBuy’s Returns & Exchanges page applies eligibility, condition and timing rules, including a 120-hour application window for the published five-day warehouse return service. A parcel returning from international transport should not be assumed to restart that seller-return window.",
        "Ask support what options remain for the exact returned parcel: compliant reshipment, removal of a problem item, local disposal where lawful, or another available resolution. The public terms do not guarantee that every option exists. A good decision protects the evidence, states the unresolved fact and avoids paying again merely because money was already spent once.",
      ],
    },
    {
      heading: "Send support a concise, answerable case summary",
      paragraphs: [
        "Use one message with the parcel number, route, destination, original dispatch date, latest return event and the exact help needed. Attach the chronology and only the most relevant evidence. Ask support to confirm the domestic-or-international classification, recorded cause, parcel condition, available corrective steps, current eligible routes and an itemised amount due before reshipment.",
        "Keep observations separate from conclusions. Write “tracking shows a return event after the destination arrival scan” unless the carrier has confirmed a cause. Precise language makes it easier for support and the logistics provider to answer.",
        "Finally, save the reply and the corrected parcel screen before payment. If the terms, route or quote differs from the first attempt, record the change. This guide reflects the public PikoBuy pages checked on 13 September 2026; live order information and current written case instructions take priority over a static article.",
      ],
    },
  ],
  internalLinks: [
    { href: "/pikobuy-tracking-delay-diagnosis", label: "Reconstruct the tracking sequence", note: "Separate quiet scans from a confirmed return and record each carrier hand-off." },
    { href: "/pikobuy-prohibited-items-shipping-restrictions", label: "Recheck restricted-item eligibility", note: "Classify the exact contents before selecting a replacement route." },
    { href: "/pikobuy-volumetric-weight-packaging", label: "Recalculate weight and packaging", note: "Compare new packed dimensions after inspection, removal or reinforcement." },
    { href: "/pikobuy-parcel-insurance-claim", label: "Preserve insurance and claim evidence", note: "Keep the first journey and return record intact before another dispatch." },
  ],
  faqHeading: "PikoBuy returned-parcel questions",
  faq: [
    { question: "Will PikoBuy reship every returned parcel for free?", answer: "No. The public User Registration Agreement says free reshipment may be arranged after a parcel returns for a failed domestic security inspection. It says the user bears reshipment cost when a parcel already sent overseas returns for reasons such as an international security failure, no signature, an incorrect or incomplete address, or delivery failure." },
    { question: "What should I save when a PikoBuy parcel is returned?", answer: "Save the parcel number, route, payment, submitted address, complete tracking chronology, carrier notices, packed weight and dimensions, contents record, parcel photos and support messages. Ask for the recorded return reason and receiving warehouse in writing." },
    { question: "Can I resend the parcel as soon as it reaches the warehouse?", answer: "Pause until the original cause is understood, the returned parcel is checked for visible damage or missing contents, the address or item issue is corrected, and a current compliant route and itemised quote are confirmed." },
    { question: "Does an international return restart the five-day seller-return window?", answer: "PikoBuy’s public pages do not say that it does. The published 120-hour warehouse return window concerns eligible products after their order status first changes to In Warehouse. Ask support what resolution is available for the returned international parcel." },
  ],
  sources: [
    { href: "https://www.pikobuy.com/protocol/user", label: "PikoBuy User Registration Agreement — domestic and international returns, reshipment costs and logistics responsibilities" },
    { href: "https://www.pikobuy.com/protocol/shipping", label: "PikoBuy Shipping Terms — warehouse inspection boundaries and third-party logistics risks" },
    { href: "https://www.pikobuy.com/protocol/returns", label: "PikoBuy Returns & Exchanges — separate warehouse seller-return eligibility, timing and fees" },
    { href: "https://www.pikobuy.com/protocol/terms", label: "PikoBuy Terms of Service — shipping-information duties, cross-border charges and prohibited-item enforcement" },
    { href: "https://www.pikobuy.com/guide", label: "PikoBuy Beginner Guide — parcel submission, route choice and tracking workflow" },
  ],
};

const damagedParcelGuide: Guide = {
  slug: "pikobuy-parcel-damaged-on-arrival",
  eyebrow: "Delivery damage",
  title: "PikoBuy Parcel Damaged on Arrival: An Unboxing Evidence Checklist",
  seoTitle: "PikoBuy Parcel Damaged on Arrival: Evidence Guide",
  description: "Build a clear evidence record when a PikoBuy parcel arrives crushed, wet, opened or damaged, then report the right facts without weakening a possible claim.",
  readTime: "9 min read",
  updated: "Updated 15 September 2026",
  publishedDate: "2026-09-15",
  modifiedDate: "2026-09-15",
  editorialNote: "This independent guide was checked against PikoBuy’s public User Registration Agreement, Shipping Terms, Returns & Exchanges policy and Beginner Guide on 15 September 2026. It cannot inspect a parcel, determine liability or promise compensation, and it does not represent PikoBuy, a carrier or an insurer.",
  intro: [
    "When a PikoBuy parcel is damaged on arrival, the first few minutes matter more than a long complaint written later. A crushed corner, wet carton or broken item can involve several hand-offs, so the useful goal is to preserve what you can actually observe before packaging is discarded or contents are moved.",
    "PikoBuy’s public User Registration Agreement tells recipients to check the outer packaging carefully when signing and to contact customer service immediately if an issue appears after signing. It also says third-party logistics providers carry international parcels and their standards govern compensation matters. Those statements make a dated, continuous evidence record practical—not a guarantee of a successful claim.",
    "This checklist separates delivery-stage damage from the five-day seller-return process used while eligible goods are first in the warehouse. It shows how to record the sealed parcel, unbox methodically, compare warehouse evidence with the delivered condition and send one precise case summary.",
  ],
  visual: {
    src: "/pikobuy-damaged-parcel-evidence-flow.svg",
    alt: "Five-step evidence flow for a PikoBuy parcel damaged on arrival, from inspecting the sealed box to submitting a documented case",
    caption: "An original evidence flow: preserve the sealed condition, document the opening, compare records, classify the issue and report promptly.",
  },
  sections: [
    {
      heading: "Inspect the sealed parcel before you change it",
      paragraphs: [
        "Start with the outside. If the carrier is still present and local procedure allows it, note visible damage through the carrier’s available delivery process. Do not assume that every carrier or country offers refusal, opening in front of the driver or a damage form. Ask what can be recorded, and keep any reference number or delivery notation you receive.",
        "Photograph all six sides of the parcel before opening. Include the shipping label, tracking number, seals, tape joins and any dents, tears, water marks, punctures or areas that appear to have been reopened. Take a wide image showing the whole package and close images showing the affected area. Keep private address details inside the official case rather than posting them publicly.",
        "If the package is wet, leaking, sharp, swollen, hot or otherwise unsafe, stop handling it and follow the carrier’s and local authority’s safety instructions. This article cannot identify a hazardous parcel. Safety comes before an unboxing video.",
      ],
      bullets: [
        "Record delivery time and visible tracking event",
        "Photograph every side while the parcel is still sealed",
        "Capture labels, seals and damage at wide and close range",
        "Keep the carton, filler and damaged contents together",
      ],
    },
    {
      heading: "Create a continuous unboxing record",
      paragraphs: [
        "A single photograph of a broken item proves its condition at that moment, but it may not show how it was packed or whether the parcel arrived sealed. When practical, make one continuous video beginning with the unopened label and all sides of the box. Show the seals before cutting them, open only what is necessary, and keep each layer of padding in frame as it is removed.",
        "Pause to photograph anything significant: a puncture aligned with an item, compressed filler, moisture inside the carton, an empty compartment, a broken seal or a missing accessory. Do not repair, clean, test aggressively or throw packaging away before support explains what evidence is required. If a product could be electrically unsafe after impact or water exposure, do not power it on merely to create proof.",
        "Narrate observations rather than conclusions. ‘The right side of the carton is crushed and the shoe box beneath it is creased’ is evidence. ‘The carrier destroyed it’ assigns a cause that the images alone may not establish. Precise, neutral wording gives the platform and logistics provider something they can compare.",
      ],
    },
    {
      heading: "Compare three stages of evidence",
      paragraphs: [
        "Build a simple timeline with three columns: warehouse condition, packed-parcel condition and delivered condition. Save the product order, warehouse inspection photos, requested detailed photos, parcel photo if available, packed weight and dimensions, route, tracking history and delivery images. Match each damaged item to its order identifier and selected variation.",
        "PikoBuy’s Shipping Terms say forwarded goods are unpacked and inspected, warehouse photos are provided for confirmation, and professional inspection is unavailable for special or professional products. Its User Registration Agreement similarly limits some checks to visible appearance and accessories. Warehouse images can therefore help show a visible before-shipping condition, but they cannot prove hidden function, authenticity or the precise moment damage occurred.",
        "Look for objective differences. Was the carton intact in the packed image but punctured at delivery? Did the warehouse image show an accessory that is no longer present? Does the delivered weight differ from a reliable earlier parcel weight? A difference is a useful fact; it is not automatically proof of who is liable. Keep both the matching and conflicting evidence in the case.",
      ],
      bullets: [
        "Order and item identifiers",
        "Warehouse QC and additional-photo records",
        "Packed parcel image, weight, dimensions and route",
        "Tracking chronology and delivery-condition evidence",
      ],
    },
    {
      heading: "Classify the problem before contacting support",
      paragraphs: [
        "Use one primary category for each item: outer-packaging damage, internal impact damage, water exposure, opened or resealed parcel, missing contents, or a functional problem with no visible transport damage. A parcel may have more than one category, but separating them prevents a vague ‘everything is damaged’ report.",
        "Connect every requested remedy to evidence. For a cracked component, provide the item identifier, warehouse comparison, unboxing frame and close photograph. For missing contents, show the packing list or order record, the sealed opening sequence, all remaining contents and packaging, and any weight information. For a wet parcel, show outer and inner moisture before drying anything that can safely be documented.",
        "Do not confuse pre-existing product quality with transport damage. PikoBuy’s Returns & Exchanges page discusses wrong products, quality issues and domestic-shipping damage found when an item reaches the warehouse. A defect first alleged after international delivery needs its own delivery evidence and case review; the published 120-hour warehouse return window should not be presented as a universal international damage-claim period.",
      ],
    },
    {
      heading: "Report promptly without inventing a deadline",
      paragraphs: [
        "PikoBuy’s agreement says to contact customer service immediately when an issue arises after signing. It also says after-sales service must be requested within its validity period and that the period is calculated from delivery days and receipt-confirmation time. The public page reviewed for this article does not state one fixed number of hours or days that applies to every delivered parcel.",
        "Act promptly, preserve the time shown in tracking and ask support to confirm the deadline for the exact parcel, route and issue. Do not wait for a social-media response before opening an official case. Keep the case number, submission time, uploaded files and every reply. If support asks for a carrier damage report, inspection document or additional photograph, record the request and the date you supplied it.",
        "Confirming receipt on a website may affect the after-sales calculation under the published wording, so check the active order screen before clicking through automatically. This does not mean withholding truthful information or ignoring an actual delivery; it means reading what the live control says and preserving its timestamp.",
      ],
    },
    {
      heading: "Understand carrier, insurance and fragile-item limits",
      paragraphs: [
        "The public agreement says third-party logistics providers perform international delivery. A user may authorize PikoBuy to help communicate about a claim, but compensation matters follow the logistics provider’s standards. The Shipping Terms also identify damage, loss, customs action and peak-season delays as cross-border risks. None of that tells you the outcome of a particular case.",
        "Insurance is a separate question. PikoBuy’s public insurance wording specifically discusses possible compensation for a lost parcel when insurance was purchased and points users to the insurance terms and exclusions. It does not establish on the reviewed public page that every kind of partial damage is covered, nor does it publish one universal payout formula for damaged contents. Save the route and insurance wording shown when you paid and ask which provision applies.",
        "Fragile items have an explicit warning. The User Registration Agreement says products such as ceramics, glass and irregularly shaped goods may break during repeated transport and states that loss may fall to the user when an item deemed fragile by the logistics provider is damaged in transit. That makes protection choices and current exclusions important before shipping, but it still does not justify guessing how an individual claim will be decided.",
      ],
    },
    {
      heading: "Send one concise evidence-led case",
      paragraphs: [
        "Lead with the parcel number, route, destination, delivery date and a one-sentence problem statement. Then list affected item identifiers, describe the external package, explain the opening record and attach the smallest set of files that proves each observation. Ask support to confirm the applicable after-sales period, required carrier documents, whether the parcel or item must be retained, and the next formal step.",
        "Keep original files. Messaging apps and image editors can remove timestamps or compress detail, so preserve the camera originals alongside any annotated copies. Do not alter labels, stage damage or submit unrelated photographs. If an image is too large for the case system, retain the original and upload a clearly named copy.",
        "A strong report does not guarantee compensation. It reduces ambiguity by connecting the delivered condition to a traceable order and shipping record. This guide reflects public PikoBuy pages checked on 15 September 2026; current order controls, route terms, insurance wording and written case instructions take priority over this static checklist.",
      ],
      bullets: [
        "Parcel number, route, destination and delivery time",
        "Neutral description of packaging and item damage",
        "Ordered evidence from sealed parcel to affected item",
        "A direct question about deadline, documents and next action",
      ],
    },
  ],
  internalLinks: [
    { href: "/pikobuy-qc-photo-guide", label: "Compare the warehouse QC record", note: "Use the relevant pre-shipping angles without claiming that photos prove hidden condition." },
    { href: "/pikobuy-parcel-insurance-claim", label: "Review insurance and claim evidence", note: "Check the saved route terms, coverage wording and exclusions for the exact parcel." },
    { href: "/pikobuy-tracking-delay-diagnosis", label: "Reconstruct the carrier timeline", note: "Place dispatch, hand-offs and delivery in chronological order before reporting damage." },
    { href: "/pikobuy-parcel-returned-to-warehouse", label: "Handle a parcel returned instead of delivered", note: "Use the separate reshipment checklist when tracking confirms a return path." },
  ],
  faqHeading: "PikoBuy delivery-damage questions",
  faq: [
    { question: "What should I photograph if a PikoBuy parcel arrives damaged?", answer: "Before opening, photograph all sides, the shipping label, tracking number, seals and every dent, tear, puncture or wet area. Then record the opening, internal packaging, all contents and close views of each affected item. Preserve originals and the physical packaging until the case instructions say otherwise." },
    { question: "How quickly should I report damage after delivery?", answer: "PikoBuy’s User Registration Agreement says to contact customer service immediately if an issue appears after signing. It describes a validity period calculated from delivery days and receipt-confirmation time but does not publish one universal fixed deadline on the reviewed page. Open the official case promptly and ask for the deadline that applies to the exact parcel." },
    { question: "Does PikoBuy parcel insurance automatically cover damaged items?", answer: "The reviewed public insurance wording discusses possible compensation for loss when insurance was purchased, but it does not prove that every partial-damage case is covered. Check the insurance and route terms saved at payment, exclusions and the third-party logistics provider’s standards for the exact case." },
    { question: "Is delivery damage handled by the five-day warehouse return policy?", answer: "Not automatically. The published five-day or 120-hour process concerns eligible products after they first enter the warehouse and includes seller-return rules. Damage identified after international delivery needs prompt delivery-stage evidence and an after-sales review under the current parcel terms." },
  ],
  sources: [
    { href: "https://www.pikobuy.com/protocol/user", label: "PikoBuy User Registration Agreement — signing checks, after-sales timing, logistics responsibility and compensation limits" },
    { href: "https://www.pikobuy.com/protocol/shipping", label: "PikoBuy Shipping Terms — inspection boundaries and third-party cross-border damage risks" },
    { href: "https://www.pikobuy.com/protocol/returns", label: "PikoBuy Returns & Exchanges — separate warehouse return timing, eligibility and responsibility" },
    { href: "https://www.pikobuy.com/guide", label: "PikoBuy Beginner Guide — warehouse inspection, packing and international shipping workflow" },
  ],
};

const missingItemGuide: Guide = {
  slug: "pikobuy-missing-item-from-parcel",
  eyebrow: "Missing contents",
  title: "PikoBuy Missing Item From Parcel: A Weight and Evidence Checklist",
  seoTitle: "PikoBuy Missing Item From Parcel: Evidence Guide",
  description: "Trace a missing PikoBuy parcel item through the order, warehouse, packing and delivery records, using weight as supporting evidence rather than automatic proof.",
  readTime: "9 min read",
  updated: "Updated 17 September 2026",
  publishedDate: "2026-09-17",
  modifiedDate: "2026-09-17",
  editorialNote: "This independent guide was checked against PikoBuy’s public User Registration Agreement, Shipping Terms, Returns & Exchanges policy and Beginner Guide on 17 September 2026. It cannot inspect an order, determine where an item disappeared or promise compensation, and it does not represent PikoBuy, a seller, carrier or insurer.",
  intro: [
    "Finding a PikoBuy missing item from parcel is not enough to show when or where it went missing. The useful investigation follows the item through four records: what was ordered, what entered the warehouse, what was packed, and what was present when the delivered parcel was opened.",
    "PikoBuy’s public terms treat several situations differently. The Shipping Terms say missing goods identified when forwarded items reach the warehouse should be checked with the sender. The User Registration Agreement says international parcels are carried by third-party logistics providers, tells recipients to inspect outer packaging at delivery, and lists some delivery-shortage situations among its liability exclusions.",
    "Use this checklist to build a factual timeline, compare quantities and weights, preserve the sealed opening sequence and ask support one answerable question. Weight can strengthen or weaken a theory, but it cannot by itself prove who removed an item or whether an item was packed in the first place.",
  ],
  visual: {
    src: "/pikobuy-missing-item-evidence-chain.svg",
    alt: "Evidence chain for tracing a missing PikoBuy parcel item from order to warehouse, packed parcel and delivered unboxing",
    caption: "An original evidence chain: reconcile the order, warehouse record, packing record and delivered contents before assigning a cause.",
  },
  sections: [
    {
      heading: "Identify the exact missing unit before making a claim",
      paragraphs: [
        "Start with the order record, not the empty space in the box. Write the order or item identifier, seller, selected variation, quantity paid for and every component the live listing said was included. Separate a missing purchased item from optional packaging, a free gift, a removable accessory or a seller image that was illustrative rather than a contents list.",
        "For multipacks, count individual units and retail packs separately. ‘One sock set is missing’ is ambiguous if the order was for two packs of five pairs. A useful statement is: ‘Order item A shows quantity two; the warehouse record appears to show two sealed packs; the delivered parcel contained one sealed pack.’ Keep the original listing screenshot and payment record with that statement.",
        "If the listing changed or disappeared, do not reconstruct its contents from memory. Use saved order details and ask support what quantity was recorded at purchase. This prevents a genuine listing misunderstanding from being reported as a transport shortage.",
      ],
      bullets: [
        "Order and item identifiers",
        "Paid quantity and selected variation",
        "Included parts supported by the saved listing",
        "Exact delivered count using the same unit",
      ],
    },
    {
      heading: "Locate the first record where the item is absent",
      paragraphs: [
        "Arrange the evidence in order: seller dispatch or domestic tracking, warehouse receipt, inspection photos, any additional detailed photos, parcel submission list, packed-parcel photo, packed weight and delivered opening. Mark the last stage where the item is visible or recorded and the first stage where it is absent. Do not skip an uncertain stage by assuming the missing item must have reached it.",
        "PikoBuy’s Shipping Terms specifically address goods that customers forward to the warehouse. They say forwarded goods are unpacked and inspected and that, if goods are missing when the warehouse receives them, the user should contact the sender for verification; PikoBuy says it is not liable for missing items not caused by PikoBuy. This inbound-forwarding case is different from a purchased item shown in warehouse records but absent after international delivery.",
        "Warehouse photographs can support visible quantity and identity only when the relevant items and angles are clear. The same terms say professional inspection cannot be provided for special or professional goods. A sealed box photographed from outside does not prove every component inside it, and a group photo should not be treated as an itemised packing certificate unless the interface explicitly provides one.",
      ],
    },
    {
      heading: "Check whether anything was deliberately removed",
      paragraphs: [
        "A part that is absent at delivery was not necessarily lost. PikoBuy’s User Registration Agreement says sensitive items including essential oils, care solutions, lubricants, batteries and glue may be removed to support delivery. If the missing object matches a sensitive component, check the order notes, parcel messages and route warnings for a removal record before opening a shortage case.",
        "Confirm whether the item was removed, returned to warehouse inventory, discarded under an accepted instruction or excluded from the submitted parcel. Ask what happened to the exact component and whether the action was shown before payment. Do not assume that removal makes the remaining product eligible for every carrier or destination; route acceptance remains a separate question.",
        "Customs examination is another possible hand-off, but a customs scan alone does not prove that an authority removed the item. Keep any official inspection, resealing or seizure notice. PikoBuy’s agreement says sensitive parcels may be inspected and that it does not guarantee customs clearance, so distinguish an observed customs action from speculation based only on a tracking gap.",
      ],
    },
    {
      heading: "Preserve a continuous delivery and unboxing record",
      paragraphs: [
        "Before opening, photograph all sides of the delivered parcel, including the shipping label, seals, tape joins, punctures and any place that appears reopened. PikoBuy’s agreement tells recipients to check outer packaging when signing and to contact customer service immediately if a problem appears after signing. If the carrier offers a delivery notation or damage report, save it, but do not assume every carrier provides the same procedure.",
        "When practical, make one continuous video that begins with the sealed label and all sides, then shows each layer of packaging and every item removed. Lay the contents out without discarding filler, inner bags or small accessories. Photograph empty compartments and any mismatched seal. Keep private address and telephone details inside the official case rather than posting the raw video publicly.",
        "Do not stage a second opening or rearrange contents to make the shortage easier to see. Preserve the original file and its timestamp. A clear chain from sealed parcel to complete contents is stronger than many disconnected close-ups, though it still cannot prove what happened before the recording began.",
      ],
      bullets: [
        "All parcel sides, label, seals and visible damage",
        "One continuous opening sequence when practical",
        "Every item, inner bag, filler and empty compartment",
        "Original files plus the delivery and recording times",
      ],
    },
    {
      heading: "Use weight as a cross-check, not a verdict",
      paragraphs: [
        "Collect the warehouse or packed-parcel weight shown for the shipment and, if safe and practical, weigh the delivered parcel with all contents and packaging retained. Use the same unit and record the scale display in a photograph or video. Note whether the published figure was estimated or final, whether outer packaging changed, and whether customs or a carrier added tape or materials.",
        "A meaningful difference can support further investigation, especially when the missing item has a known measured weight. But there is no universal difference threshold in the public PikoBuy pages reviewed for this guide. Scales have different accuracy, figures may be rounded, packaging can be wet or altered, and product weights can vary. Do not subtract a seller’s approximate product weight and call the result proof.",
        "An unchanged weight does not close the case either. PikoBuy’s User Registration Agreement lists intact, unopened and unreduced-weight mail with short or damaged contents among situations where it disclaims responsibility when the cause is not attributable to PikoBuy. That wording is a reason to preserve more than weight—not a factual determination that every intact parcel claim fails.",
      ],
    },
    {
      heading: "Open the right type of case promptly",
      paragraphs: [
        "If the item was never shown or recorded at warehouse arrival, ask for an inbound or seller-stage review. If it was present in warehouse evidence but not listed in the submitted parcel, ask about parcel selection or an intentional removal. If it appears in the packed record but not in a documented delivered opening, provide the delivery and unboxing evidence for a logistics review.",
        "PikoBuy says users may authorize it to communicate about a claim with the third-party logistics provider, while compensation follows that provider’s standards. The public agreement also says after-sales service must be requested within its validity period, calculated from delivery days and receipt-confirmation time, but it does not publish one fixed universal deadline for every delivered shortage. Contact official support immediately and ask for the exact deadline and documents for the case.",
        "Do not present the warehouse five-day return rule as the delivery-shortage deadline. The Returns & Exchanges page describes eligible seller returns within 120 hours after an order first changes to In Warehouse. A shortage noticed after international delivery has a different fact pattern and needs the current parcel after-sales instructions.",
      ],
    },
    {
      heading: "Send a compact quantity-reconciliation report",
      paragraphs: [
        "Lead with the parcel number, route, destination and delivery time. Name the missing item and paid quantity, then show the four-stage reconciliation: ordered, warehouse, packed and delivered. Attach only the strongest files in chronological order, while retaining originals. Ask support to confirm the recorded packed contents, any removal note, the applicable carrier procedure and the next formal step.",
        "Keep facts and inferences separate. Write ‘the warehouse image dated 10 September shows two labelled units; the continuous opening on 16 September shows one’ rather than ‘the warehouse stole one.’ If the photograph is unclear, say so. Neutral language lets each party compare its own scan, weight and handling records without first disputing an unsupported accusation.",
        "A complete evidence pack cannot guarantee recovery or compensation. It can reveal that the issue began before international shipping, that a component was intentionally removed, or that the delivered parcel record needs a carrier review. This guide reflects public PikoBuy pages checked on 17 September 2026; live order records, route terms and written case instructions take priority over a static article.",
      ],
      bullets: [
        "One sentence naming the exact shortage",
        "Ordered, warehouse, packed and delivered quantities",
        "Chronological photos, video, weight and tracking evidence",
        "A direct question about deadline, documents and resolution",
      ],
    },
  ],
  internalLinks: [
    { href: "/pikobuy-parcel-damaged-on-arrival", label: "Use the sealed unboxing checklist", note: "Document packaging and the opening sequence before contents are moved or discarded." },
    { href: "/pikobuy-qc-photo-guide", label: "Interpret warehouse QC photos carefully", note: "Confirm what is visible without treating a sealed package or unclear angle as proof of contents." },
    { href: "/pikobuy-parcel-insurance-claim", label: "Review insurance and claim evidence", note: "Compare saved route wording and exclusions before assuming a shortage is covered." },
    { href: "/pikobuy-prohibited-items-shipping-restrictions", label: "Check sensitive-component removal", note: "Verify whether a battery, liquid or other restricted component was intentionally removed." },
  ],
  faqHeading: "PikoBuy missing-item questions",
  faq: [
    { question: "What evidence should I save when a PikoBuy parcel is missing an item?", answer: "Save the order and paid quantity, seller listing, warehouse photos, parcel submission list, packed image and weight, tracking chronology, every side of the sealed delivered parcel, a continuous opening record when practical, the complete delivered contents and all support messages." },
    { question: "Does a lower delivered weight prove an item was removed in transit?", answer: "No. A weight difference can support investigation, but scale accuracy, rounding, estimates, moisture and packaging changes can affect the comparison. Use the same unit, preserve both records and combine weight with itemised warehouse, packing and unboxing evidence." },
    { question: "Could PikoBuy have intentionally removed a component?", answer: "The User Registration Agreement says sensitive items including essential oils, care solutions, lubricants, batteries and glue may be removed. Check parcel notes and route messages, then ask what happened to the exact component rather than assuming it was lost." },
    { question: "Does the 120-hour warehouse return window cover a missing delivered item?", answer: "Not automatically. The published 120-hour rule concerns eligible products after they first enter the warehouse. A shortage discovered after international delivery should be reported immediately through the current parcel after-sales process, with support asked to confirm the exact deadline and required evidence." },
  ],
  sources: [
    { href: "https://www.pikobuy.com/protocol/user", label: "PikoBuy User Registration Agreement — signing checks, shortage exclusions, sensitive-item removal and logistics claims" },
    { href: "https://www.pikobuy.com/protocol/shipping", label: "PikoBuy Shipping Terms — forwarded-goods shortages, warehouse inspection and third-party logistics risks" },
    { href: "https://www.pikobuy.com/protocol/returns", label: "PikoBuy Returns & Exchanges — separate warehouse return timing and eligibility" },
    { href: "https://www.pikobuy.com/guide", label: "PikoBuy Beginner Guide — purchase, warehouse inspection, packing and shipping stages" },
  ],
};

const supportTicketGuide: Guide = {
  slug: "how-to-contact-pikobuy-support-order-problem",
  eyebrow: "Customer support",
  title: "How to Contact PikoBuy Support About an Order: Evidence Checklist",
  seoTitle: "How to Contact PikoBuy Support About an Order",
  description: "Build a clear PikoBuy support ticket with the right order identifiers, timeline, evidence and one answerable request—without assuming a universal response time.",
  readTime: "9 min read",
  updated: "Updated 19 September 2026",
  publishedDate: "2026-09-19",
  modifiedDate: "2026-09-19",
  editorialNote: "This independent guide was checked against PikoBuy’s public Contact page, Beginner Guide, User Registration Agreement, Terms of Service, Shipping Terms and Returns & Exchanges policy on 19 September 2026. It does not operate PikoBuy support, access orders, set response times or decide refunds, returns, carrier claims or compensation.",
  intro: [
    "If you need to contact PikoBuy support about an order, the fastest-looking message is not always the easiest one to resolve. ‘Where is my order?’ gives an agent almost nothing to identify, while twenty unsorted screenshots can hide the one record that matters. A useful case connects one order or parcel to one problem, a dated timeline and one requested next action.",
    "PikoBuy’s current Contact page presents a support email and marks ticket submission as the recommended route. Its Beginner Guide also describes customer service as available around the clock. Those statements identify official ways to ask for help; they do not publish a universal first-response time, resolution deadline or guaranteed outcome for every case.",
    "This checklist turns scattered records into a compact support brief and helps distinguish a seller issue, warehouse problem, carrier event and after-sales request.",
  ],
  visual: {
    src: "/pikobuy-support-ticket-evidence-map.svg",
    alt: "PikoBuy support ticket evidence map showing identity, timeline, evidence, requested action and follow-up record",
    caption: "An original support-ticket map: identify the case, show the timeline, attach decisive evidence, request one action and preserve the reply.",
  },
  sections: [
    {
      heading: "Use the official route and keep the case private",
      paragraphs: [
        "Start from PikoBuy’s current Contact page or the support control inside the signed-in order interface. The public Contact page identifies ticket submission as recommended and also displays a support email. Use the live official page rather than an address copied from an old post, screenshot or unofficial community account, because contact details and interface routes can change.",
        "A ticket can keep an order-specific request in one chronological thread. If you use email, retain one subject line instead of opening competing cases. Never post an order number, address, identity document, payment record or full shipping label in a public channel.",
        "Never send a password, verification code, complete card number or security code. Share only what is required to identify the order and follow the live support interface’s authentication instructions.",
      ],
    },
    {
      heading: "Open with a six-line case identity block",
      paragraphs: [
        "Make the first screen readable without opening an attachment. State the order number or parcel number, item identifier if relevant, current status, destination country, the date and time the problem became visible, and a one-sentence issue. Use the identifiers exactly as displayed in the account rather than shortening or retyping them from memory.",
        "Match the identifier to the stage. A warehouse question needs the item and order record; a dispatched-parcel problem needs the parcel number, route and tracking reference; a delivery issue also needs the delivery timestamp. Keep unrelated orders separate.",
        "PikoBuy’s Terms of Service require accurate, complete and current registration and shipping information. If the issue concerns an address, recipient name or postcode, quote the value shown on the submitted parcel record and describe the difference precisely. Do not quietly edit the story after dispatch; ask whether any correction is still possible at the current stage.",
      ],
      bullets: [
        "Order, item or parcel identifier",
        "Current status and latest timestamp",
        "Destination country and route when relevant",
        "One-sentence problem and requested next action",
      ],
    },
    {
      heading: "Name the stage before naming the remedy",
      paragraphs: [
        "PikoBuy’s published workflow separates item selection, purchasing payment, warehouse inspection, international shipping payment and delivery. Use that sequence to locate the problem. A seller who has not shipped, an item that arrived incorrectly at the warehouse, a parcel waiting for its first carrier scan and a damaged delivered parcel require different records and may involve different parties.",
        "The User Registration Agreement says PikoBuy is not the actual product seller and that international logistics providers operate independently. It also says users may authorise PikoBuy to help communicate with a third-party logistics provider, while compensation follows that provider’s standards. Ask support to identify the responsible stage and applicable process instead of demanding a seller refund for a carrier event or a carrier claim for a warehouse mismatch.",
        "If the item is still in the warehouse, check the live Returns & Exchanges page immediately. Its published five-day service uses a 120-hour application window for eligible items from the first ‘In Warehouse’ status, subject to seller, condition, packaging and category rules. Do not present that warehouse rule as the deadline for every international after-sales case.",
      ],
    },
    {
      heading: "Attach evidence in chronological order",
      paragraphs: [
        "Use a small evidence index rather than an image dump: paid order, warehouse record, parcel submission, tracking event and delivered condition. Explain what each file proves, and retain timestamped originals even if the interface requires compressed copies.",
        "For a warehouse mismatch, include the seller listing saved at purchase, selected colour or size, paid quantity and the relevant QC image. For a tracking question, provide dispatch date, route, first scan and latest scan. PikoBuy’s Beginner Guide says tracking information should be available within three days after shipping, so if that stated point has passed, ask whether the parcel was handed to the carrier and whether a tracking number or carrier confirmation exists.",
        "For a delivered parcel problem, preserve the shipping label, every side of the sealed package, seals and tape, an opening sequence when practical, all contents and the delivery timestamp. The User Registration Agreement tells recipients to inspect outer packaging at signing and contact customer service immediately when an issue appears after signing. Evidence supports review; it does not by itself prove liability or guarantee compensation.",
      ],
    },
    {
      heading: "Ask one question that support can answer",
      paragraphs: [
        "End the first message with one concrete request. Examples include: confirm whether the seller has supplied a domestic tracking number; check whether the warehouse recorded the selected size; confirm whether the parcel was handed to the named carrier; identify the after-sales deadline for this delivered parcel; or state which additional document the logistics provider requires. A specific request gives the reply a clear decision point.",
        "Avoid opening with a compensation figure unless the current terms and evidence establish that calculation. PikoBuy’s public agreement distinguishes seller responsibility, warehouse inspection limits, third-party logistics, optional insurance and exclusions. It does not publish one universal refund formula for every order problem. Ask which rule applies to the exact order and request the current written basis for any decision.",
        "If the public page and order interface appear inconsistent, include both dates and ask which rule controls the case. Preserve the date, identifier and surrounding conditions in every screenshot.",
      ],
    },
    {
      heading: "Record deadlines without inventing one",
      paragraphs: [
        "PikoBuy’s User Registration Agreement says delivered-parcel after-sales service must be requested within its validity period and that the period is calculated from delivery days and receipt-confirmation time. The reviewed public page does not state one universal number of days for every delivered-parcel issue. Open the case promptly and ask support to state the exact deadline that applies.",
        "Save the ticket number, submission time and every reply. If support requests more evidence, answer in the same thread, list the new files and record when they were sent. If no reply appears, follow up with the existing ticket reference and the unresolved question; opening duplicate tickets can split the chronology and make it less obvious which thread contains the complete record.",
        "The Contact page promotes timely replies and the Beginner Guide describes 24/7 customer service, but neither reviewed page guarantees a per-case response time. Silence after a particular number of hours does not itself prove rejection or compensation eligibility.",
      ],
    },
    {
      heading: "Use a compact support-message template",
      paragraphs: [
        "A practical opening can read: ‘Parcel [number], destination [country], delivered [date and time]. One paid item [item ID and quantity] was not present. The attached sequence shows the paid order, warehouse record, submitted parcel, sealed delivery and complete opening. Please confirm the recorded packed quantity, the applicable after-sales deadline and the next evidence required.’ Replace the facts; do not copy a missing-item allegation into an unrelated case.",
        "For a warehouse return, request eligibility review and include the first In Warehouse timestamp. For tracking, ask for hand-off confirmation and the active reference. For damage, name the visible damage and preserve the packaging.",
        "A well-built ticket cannot guarantee a refund, return, reshipment, carrier investigation or compensation. It can reduce avoidable back-and-forth and create a record of what was reported, when it was reported and what support decided. Current order screens, transaction-specific terms and written case instructions take priority over this independent checklist.",
      ],
    },
  ],
  internalLinks: [
    { href: "/pikobuy-tracking-delay-diagnosis", label: "Build a tracking chronology", note: "Separate carrier hand-offs and scan gaps before asking support where the parcel is." },
    { href: "/pikobuy-return-policy", label: "Check warehouse-return timing", note: "Use the first In Warehouse timestamp and current eligibility rules for a seller-return request." },
    { href: "/pikobuy-parcel-damaged-on-arrival", label: "Preserve delivery-damage evidence", note: "Record the sealed parcel, opening sequence and visible damage before packaging is discarded." },
    { href: "/pikobuy-missing-item-from-parcel", label: "Reconcile a missing-item case", note: "Compare ordered, warehouse, packed and delivered quantities before assigning a cause." },
  ],
  faqHeading: "PikoBuy customer-support questions",
  faq: [
    { question: "What is the official way to contact PikoBuy about an order?", answer: "PikoBuy’s current Contact page displays a support email and marks ticket submission as recommended. For an order-specific problem, start from that official page or the support control in the signed-in order interface, and keep the ticket or email reference." },
    { question: "Does PikoBuy guarantee a customer-service response time?", answer: "The Beginner Guide describes 24/7 customer service and the Contact page promotes timely replies, but the public pages reviewed on 19 September 2026 do not publish one guaranteed first-response or resolution time for every case." },
    { question: "What should the first PikoBuy support message include?", answer: "Include the exact order, item or parcel identifier; current status; relevant date and destination; one-sentence problem; a short chronological evidence index; and one requested next action. Keep sensitive credentials and full payment-card data out of the message." },
    { question: "Should I open another ticket if the first one has no answer?", answer: "Preserve the existing case reference and follow up in the same thread with the unresolved question and any requested evidence. The reviewed public pages do not publish a universal escalation interval, so check the current support interface before creating a duplicate case." },
  ],
  sources: [
    { href: "https://www.pikobuy.com/contact", label: "PikoBuy Contact page — recommended ticket route and support email" },
    { href: "https://www.pikobuy.com/guide", label: "PikoBuy Beginner Guide — 24/7 customer-service statement, six-stage workflow and tracking availability" },
    { href: "https://www.pikobuy.com/protocol/user", label: "PikoBuy User Registration Agreement — service roles, signing checks, after-sales timing and logistics communication" },
    { href: "https://www.pikobuy.com/protocol/terms", label: "PikoBuy Terms of Service — service scope, accurate-information duties and after-sales support" },
    { href: "https://www.pikobuy.com/protocol/returns", label: "PikoBuy Returns & Exchanges — warehouse timing, eligibility and evidence boundaries" },
  ],
};

const paymentOrderGuide: Guide = {
  slug: "pikobuy-order-not-processed-after-payment",
  eyebrow: "Payment troubleshooting",
  title: "PikoBuy Order Not Processed After Payment: Evidence Checklist",
  seoTitle: "PikoBuy Order Not Processed After Payment",
  description: "Reconcile a PikoBuy payment result, account transaction and order status before retrying, then build a concise evidence pack if the records do not match.",
  readTime: "9 min read",
  updated: "Updated 23 September 2026",
  publishedDate: "2026-09-23",
  modifiedDate: "2026-09-23",
  editorialNote: "This independent guide was checked against PikoBuy’s public Beginner Guide, Terms of Service, User Registration Agreement, Returns & Exchanges policy and Contact page on 23 September 2026. It cannot view an account, confirm a payment, reverse a charge, create an order or promise a refund time.",
  intro: [
    "A PikoBuy order not processed after payment is not one problem with one automatic fix. A checkout can fail before a payment is approved, a payment provider can show a pending transaction that the PikoBuy account has not recorded, or an account transaction can exist without a purchase order being generated or accepted. Treat those as different states before pressing Pay again.",
    "PikoBuy’s Terms of Service say a failed payment means the order will not be processed. Its User Registration Agreement separately says a purchasing order or shipping order will not be generated or confirmed if a necessary service fee is not paid. The same agreement notes that amounts can change slightly with exchange-rate movement and settlement timing. These clauses explain why a bank alert alone is not a reliable order-status screen.",
    "The practical goal is to match one payment attempt to one account transaction and one order state. This checklist shows what to record, how to avoid an unnecessary duplicate attempt and what to send through official support when the records disagree.",
  ],
  visual: {
    src: "/pikobuy-payment-order-reconciliation.svg",
    alt: "Five-step PikoBuy payment and order reconciliation from checkout through seller acceptance",
    caption: "An original reconciliation map: match checkout, payment-provider, account-ledger, order and seller records before retrying.",
  },
  sections: [
    {
      heading: "Identify the exact checkpoint that failed",
      paragraphs: [
        "Start with the last state you can prove. PikoBuy’s Beginner Guide separates item selection, order submission and the first payment from the later warehouse and international-shipping payment. Record whether the problem concerns a product purchase or a parcel-shipping order; the identifiers, amount and expected next status will be different.",
        "Use five checkpoints: checkout submitted, payment-provider result, PikoBuy transaction or balance record, order generated or confirmed, and seller acceptance or procurement. A green bank notification may prove that an authorisation or debit appeared, but it does not by itself prove that PikoBuy generated an order or that a seller accepted it. Conversely, a failed browser page does not prove that no payment record exists.",
        "PikoBuy’s Terms say placing an order is an offer to purchase and that PikoBuy or participating merchants may accept or reject it. Describe the visible state rather than calling every delay a payment failure. Write ‘the provider shows pending and no order ID is visible’ or ‘the account records the transaction but the order remains unconfirmed.’",
      ],
      bullets: [
        "Product purchase or international-shipping payment",
        "Checkout result and exact timestamp",
        "Provider status and transaction reference",
        "PikoBuy account transaction, order ID and current status",
      ],
    },
    {
      heading: "Pause before making a second payment attempt",
      paragraphs: [
        "If the first attempt is unclear, do not assume the safest action is to pay again. Refresh the signed-in account, check the order list and transaction record, and compare the amount, currency and timestamp with the payment-provider record. A second attempt made before reconciliation can create a second uncertain record rather than resolving the first one.",
        "Save the full checkout result, but protect sensitive data. Keep the transaction reference, merchant descriptor, amount, currency, timestamp and status. Do not send a password, verification code, full card number or card security code. PikoBuy’s Terms place account-password security on the user, and a support review should not require publishing credentials.",
        "The current Beginner Guide footer displays several payment-brand logos, but a logo is not proof that every method is available to every account, country, currency or transaction. Use only the options actually offered in the live checkout. If the provider declines the attempt, follow its current instruction rather than cycling through repeated submissions.",
      ],
    },
    {
      heading: "Check the complete amount and order-generation rule",
      paragraphs: [
        "Compare the checkout total with the recorded transaction rather than relying on the product-listing price. The User Registration Agreement says users prepay the product cost and that a necessary service fee may be added at product-payment confirmation. It states that if that service fee is not paid, the purchasing order is not generated or confirmed. At the parcel stage, international shipping and the applicable platform service fee are a separate payment, and an unpaid service fee can likewise prevent the shipping order from being generated or confirmed.",
        "That does not justify guessing a missing amount. Use the exact live checkout and account records. The same agreement says product prices and logistics amounts may differ slightly because of exchange-rate fluctuations and settlement timing. If the provider record and PikoBuy record differ, capture both currencies and amounts and ask which figure the account requires.",
        "Keep this question separate from total-cost planning. The issue here is whether the displayed amount for this transaction was completed and linked to an order. For a broader budget covering item price, domestic delivery, international shipping and destination charges, use the site’s dedicated fee guide.",
      ],
    },
    {
      heading: "Separate payment success from seller fulfilment",
      paragraphs: [
        "An order can move past payment and still fail to become a completed purchase. PikoBuy’s Beginner Guide says prices are subject to the actual purchase and that an out-of-stock order will be refunded. The Terms also allow an order to be rejected, while the User Registration Agreement explains that PikoBuy is not the actual product seller and third-party purchasers provide purchasing-agent services.",
        "If an order ID exists, inspect its status and messages before opening a payment dispute. An unprocessed payment, a generated but unconfirmed order, an out-of-stock refund and a cancelled prohibited-item order are different cases. Attach the relevant listing and selected variant when availability or seller acceptance is the issue.",
        "Do not promise yourself a specific refund arrival date. The reviewed public pages do not publish one universal processing time for every failed payment, rejected purchase, out-of-stock item or payment method. Ask support to identify whether the record is an authorisation, completed transaction, account credit, refund initiated or order cancellation, and then ask the payment provider how its displayed status is handled.",
      ],
    },
    {
      heading: "Treat deposits and balance payments as a special case",
      paragraphs: [
        "A deposit order should not be analysed like an ordinary full-payment order. PikoBuy’s User Registration Agreement warns that a deposit order may not be cancellable and that the balance must be paid by the seller’s required deadline; otherwise the deposit may be lost. Preserve the listing terms, deposit record, balance amount and deadline shown for that exact order.",
        "If the order is labelled as a deposit or presale, ask support to confirm whether the first payment was the deposit, whether a separate balance is due and which deadline controls. Do not assume that another payment is a duplicate until the order terms are clear, but do not assume that every follow-up amount is legitimate without matching it to the live order.",
        "Returns are also a separate process. PikoBuy’s published 120-hour warehouse return rule applies to eligible items after they first enter the warehouse and depends on seller, condition, packaging and category requirements. It is not a universal failed-payment refund deadline and should not be used to calculate when money will reappear.",
      ],
    },
    {
      heading: "Send one reconciliation report through official support",
      paragraphs: [
        "When the provider and PikoBuy records still conflict, use the current Contact page or the support control in the signed-in account. The Contact page marks ticket submission as recommended and displays a support email. Keep one case thread and lead with the exact account-side evidence support can check.",
        "A compact report can say: ‘Product order attempt at [time and timezone], amount [currency and value]. Payment-provider reference [last safe reference characters] shows [status]. PikoBuy transaction record shows [status], and no order ID / order ID [number] currently shows [status]. Please confirm whether this transaction was received, whether an order was generated, and whether I should wait, complete a displayed balance or use a new payment attempt.’ Attach labelled screenshots with sensitive digits hidden.",
        "Ask for the current next action and any applicable deadline, not a guaranteed outcome. Preserve the ticket number and response. A clear evidence chain can help locate the mismatch, but it cannot force a provider reversal, seller acceptance, refund or processing time. The live account record and written case decision take priority over this independent article.",
      ],
    },
  ],
  internalLinks: [
    { href: "/pikobuy-fees-total-cost", label: "Separate the full cost from the failed transaction", note: "Plan product, shipping and destination costs without confusing a budget estimate with an order-status record." },
    { href: "/pikobuy-seller-listing-verification", label: "Check the listing and selected variant", note: "Confirm whether availability, price or option details changed before the purchase was accepted." },
    { href: "/how-to-contact-pikobuy-support-order-problem", label: "Build a focused support ticket", note: "Package the transaction timeline, identifiers and one answerable request in a single case thread." },
    { href: "/pikobuy-return-policy", label: "Keep warehouse returns separate", note: "Do not apply the warehouse return window to every payment, rejection or refund situation." },
  ],
  faqHeading: "PikoBuy payment and order questions",
  faq: [
    { question: "Does a successful payment notification mean my PikoBuy order was accepted?", answer: "Not necessarily. A provider notification is one record. Check whether PikoBuy shows the transaction, generated an order ID and confirmed the order. PikoBuy’s Terms say an order is an offer to purchase that PikoBuy or a participating merchant may accept or reject." },
    { question: "Why was a PikoBuy order not generated after I paid?", answer: "The public Terms say a failed payment will not be processed, while the User Registration Agreement says a purchasing or shipping order will not be generated or confirmed if a necessary service fee is unpaid. Compare the live checkout total, provider result, account transaction and order record before asking support to identify the exact mismatch." },
    { question: "How long does a PikoBuy failed-payment or out-of-stock refund take?", answer: "The public pages reviewed on 23 September 2026 do not publish one universal refund-arrival time for every cause or payment method. Ask PikoBuy to identify the transaction state and refund reference, then check the payment provider’s current handling of that specific record." },
    { question: "Should I retry a PikoBuy payment when no order appears?", answer: "First reconcile the original attempt. Save its amount, currency, timestamp and provider reference; check the signed-in transaction and order records; and contact official support if they conflict. Retry only after the first attempt’s status and the live checkout instruction are clear." },
  ],
  sources: [
    { href: "https://www.pikobuy.com/guide", label: "PikoBuy Beginner Guide — first payment, separate shipping payment, actual purchase price and out-of-stock refund" },
    { href: "https://www.pikobuy.com/protocol/terms", label: "PikoBuy Terms of Service — failed payments, order acceptance or rejection and account security" },
    { href: "https://www.pikobuy.com/protocol/user", label: "PikoBuy User Registration Agreement — prepayment, service-fee confirmation, settlement variation and deposit orders" },
    { href: "https://www.pikobuy.com/protocol/returns", label: "PikoBuy Returns & Exchanges — separate warehouse return timing and eligibility" },
    { href: "https://www.pikobuy.com/contact", label: "PikoBuy Contact page — recommended ticket route and support email" },
  ],
};

const depositBalanceGuide: Guide = {
  slug: "pikobuy-deposit-order-balance-payment",
  eyebrow: "Deposit orders",
  title: "PikoBuy Deposit Order Balance Payment: Deadline and Evidence Checklist",
  seoTitle: "PikoBuy Deposit Order Balance Payment Checklist",
  description: "Document a PikoBuy deposit order, control the seller's balance deadline and reconcile the final payment without assuming the deposit is refundable.",
  readTime: "9 min read",
  updated: "Updated 25 September 2026",
  publishedDate: "2026-09-25",
  modifiedDate: "2026-09-25",
  editorialNote: "This independent guide was checked against PikoBuy’s public User Registration Agreement, Terms of Service, Beginner Guide, Returns & Exchanges policy and Contact page on 25 September 2026. It cannot view an order, extend a seller deadline, cancel a deposit, process a balance payment or promise a refund.",
  intro: [
    "A PikoBuy deposit order balance payment is a timed purchase commitment, not simply an ordinary checkout split into two convenient instalments. PikoBuy’s User Registration Agreement says that, under Taobao sellers’ rules, an order with a paid deposit cannot be cancelled, the buyer must proactively pay the balance within the time stated in the seller’s published information, and a missed balance deadline means the deposit will not be refunded.",
    "That makes the evidence you save before the first payment unusually important. You need the exact product and variant, the seller’s full price structure, the balance window and the cancellation language—not just a bank notification or a cropped price. The reviewed official pages do not publish one universal deposit percentage, balance date, reminder system or exception that applies to every presale.",
    "This checklist separates the seller’s presale terms, the deposit transaction, the later balance payment and the eventual warehouse stage. It is designed to help you control a deadline and describe a mismatch clearly; it does not create a right to cancel or recover a deposit.",
  ],
  visual: {
    src: "/pikobuy-deposit-balance-decision.svg",
    alt: "Five-stage PikoBuy deposit and balance payment evidence flow from seller terms to warehouse checks",
    caption: "An original deadline-control map: capture the seller terms before the deposit, then match the balance payment to the same order.",
  },
  sections: [
    {
      heading: "Confirm that the order is really a deposit presale",
      paragraphs: [
        "Start with the wording shown on the live seller listing and the PikoBuy order screen. A deposit, presale or reservation normally means the first amount is only one part of the purchase and that a second payment becomes due later. Do not infer this structure from a low displayed price alone. Save the label that identifies the first payment, the total or stated pricing method, and the balance conditions attached to the exact variant.",
        "Match the source link, seller, product title, colour, size, quantity and order identifier. PikoBuy’s User Registration Agreement explains that PikoBuy is not the actual seller and that third-party purchasers provide purchasing-agent services for goods sourced from platforms such as Taobao and 1688. The seller’s published presale information therefore matters to the timing and commitment, while PikoBuy’s account record matters to proving what you submitted and paid.",
        "If the listing calls the amount a reservation, earnest payment or another translated term, ask official support to confirm whether PikoBuy treats it as a deposit order before paying. A useful answer identifies whether a later balance is required and which seller record controls. A vague assurance that the item is available does not answer either question.",
      ],
      bullets: [
        "Exact seller link, title and selected variant",
        "Deposit label, amount, currency and payment time",
        "Full price or balance-calculation method",
        "Seller-published balance window and timezone",
      ],
    },
    {
      heading: "Capture the complete terms before paying the deposit",
      paragraphs: [
        "Save the whole presale panel, not one highlighted number. Your record should include the deposit amount, the balance amount or the way it will be calculated, the opening and closing time for balance payment, the timezone if shown, the seller’s estimated release or shipment information, the selected option and any cancellation statement. Capture the page URL and date so the screenshot has context if the listing later changes.",
        "PikoBuy’s public agreement says a paid deposit order cannot be cancelled under the referenced seller rules and that the deposit is not refunded when the balance is not paid by the due time. Treat the deposit as potentially irreversible before you authorise it. Do not rely on the ordinary warehouse return process as a plan for undoing a presale commitment later.",
        "The reviewed official pages do not state a universal deposit percentage, a standard number of days before the balance is due or a guaranteed grace period. They also do not promise that every user will receive an automatic reminder. Record the seller’s actual window and set your own calendar reminders. That reminder practice is editorial risk control, not a claim about a PikoBuy feature.",
      ],
    },
    {
      heading: "Control the balance deadline independently",
      paragraphs: [
        "Convert the seller’s displayed window into a deadline you can act on. Keep the original timestamp and timezone in your evidence; then add a local-time note without deleting the source time. Set an early review point to confirm the order still matches, and a second reminder comfortably before the closing time. Avoid planning to pay in the final minutes, when a login, provider review or unclear amount leaves little room to resolve a mismatch.",
        "The agreement says buyers must proactively pay the balance within the time specified in the seller’s published information. That wording means the absence of a message should not be treated as proof that no payment is due. Check the signed-in order record and the live presale terms yourself. If the screens disagree, open a support ticket promptly and preserve both versions.",
        "Ask support to state the controlling balance deadline, timezone, amount and order identifier in writing. Do not ask for a generic PikoBuy deadline because the reviewed public pages do not provide one. If a seller changes the visible window, save the before-and-after records and ask which terms apply to the existing order; this guide cannot decide that dispute.",
      ],
    },
    {
      heading: "Reconcile the order before the balance payment",
      paragraphs: [
        "Before paying the balance, compare the current order with the record saved at deposit time. Confirm the same seller, product, variant and quantity; the deposit is linked to the same order; the balance amount follows the published calculation; and the payment page is inside the official signed-in flow. A new amount should be explainable by the order terms, not accepted merely because the deadline is close.",
        "PikoBuy’s Beginner Guide says product prices are subject to the actual purchase, and the User Registration Agreement notes that product and logistics amounts can vary slightly with exchange-rate movement and settlement timing. Those statements do not authorise an arbitrary difference. Record the displayed currencies and amounts, then ask for an account-specific explanation when the arithmetic does not reconcile.",
        "Keep the deposit record separate from the later balance transaction. For each payment, save the timestamp, currency, amount, safe provider reference and PikoBuy account status. Hide passwords, verification codes, full card numbers and card security codes. The aim is to connect two payments to one order without exposing credentials or treating a provider notification as proof that the order was accepted.",
      ],
    },
    {
      heading: "Make a deadline decision without assuming reversibility",
      paragraphs: [
        "If the product, variant, amount or deadline appears wrong, pause long enough to document the mismatch and contact official support—but recognise the trade-off. Paying an unexplained balance may deepen the commitment, while missing the seller’s deadline can forfeit the deposit under the published agreement. There is no universally safe answer; the evidence and the current written instruction for that order must drive the decision.",
        "Use one concise request: ‘Deposit order [ID], source listing [URL], variant [details]. The saved seller terms show balance [amount] due [date, time and timezone], while the current order shows [difference]. Please confirm the correct balance, controlling deadline and next action for this order.’ Attach the deposit receipt, original terms and current screen with sensitive data hidden.",
        "PikoBuy’s Contact page marks ticket submission as the recommended route and also displays a support email. Preserve one case thread, its submission time and each reply. The reviewed pages do not publish a guaranteed response time, deadline extension or refund exception for deposit cases, so do not let an unanswered ticket become an assumed extension.",
      ],
    },
    {
      heading: "Verify the order after the balance is paid",
      paragraphs: [
        "After balance payment, confirm that the PikoBuy account links it to the intended deposit order and shows the expected procurement or order status. Save the transaction and status rather than stopping at the payment-provider screen. PikoBuy’s Terms say placing an order is an offer to purchase and that PikoBuy or participating merchants may accept or reject it, so payment evidence and order acceptance remain distinct records.",
        "When the item later reaches the warehouse, compare the received variant, quantity and visible condition with the preserved presale order. The Returns & Exchanges policy describes a five-day or 120-hour window for eligible warehouse-stage items after the first In Warehouse status, subject to seller agreement, product condition, packaging and category restrictions. That separate process is not a promise that a paid deposit can be reversed or that every presale item is eligible.",
        "International shipping is another later payment stage. PikoBuy’s Beginner Guide separates the initial product payment from parcel submission and international-shipping payment. Do not mistake completion of the balance for payment of the eventual parcel cost. Keep the seller terms, both purchase payments, warehouse record and shipping payment as separate parts of one traceable file.",
      ],
    },
  ],
  internalLinks: [
    { href: "/pikobuy-seller-listing-verification", label: "Verify the seller listing before a deposit", note: "Match the exact product, option and seller terms before the first payment creates a time-limited commitment." },
    { href: "/pikobuy-order-not-processed-after-payment", label: "Reconcile a payment and order mismatch", note: "Use the payment-status checklist when a provider record, account transaction and order state do not match." },
    { href: "/how-to-contact-pikobuy-support-order-problem", label: "Build an evidence-led support ticket", note: "Send one timeline, the safe identifiers and one answerable request through the official contact route." },
    { href: "/pikobuy-return-policy", label: "Keep warehouse returns separate", note: "Understand why the later warehouse return window does not automatically undo a deposit agreement." },
  ],
  faqHeading: "PikoBuy deposit and balance questions",
  faq: [
    { question: "Can I cancel a PikoBuy deposit order after paying the deposit?", answer: "PikoBuy’s User Registration Agreement says that, according to Taobao sellers’ rules, an order with a paid deposit cannot be cancelled. Check the exact seller terms and ask official support about the specific order; this independent guide cannot create an exception." },
    { question: "What happens if I miss the PikoBuy balance payment deadline?", answer: "The same public agreement says buyers must proactively pay the balance within the time in the seller’s published information and that the deposit will not be refunded if the balance is not paid by the due time." },
    { question: "Does PikoBuy use one balance deadline for every deposit order?", answer: "No universal deadline is published on the official pages reviewed on 25 September 2026. The agreement points to the time in the seller’s published information, so preserve the exact date, time and timezone for the order." },
    { question: "Does the 120-hour warehouse return rule guarantee a deposit refund?", answer: "No. The five-day or 120-hour rule applies to eligible items after their first In Warehouse status and remains subject to seller, condition, packaging and category requirements. It is a separate process, not a guarantee that a deposit order can be cancelled or refunded." },
  ],
  sources: [
    { href: "https://www.pikobuy.com/protocol/user", label: "PikoBuy User Registration Agreement — deposit cancellation, balance deadline, forfeiture, service roles and settlement variation" },
    { href: "https://www.pikobuy.com/protocol/terms", label: "PikoBuy Terms of Service — order acceptance or rejection, payment handling and account security" },
    { href: "https://www.pikobuy.com/guide", label: "PikoBuy Beginner Guide — first product payment, actual purchase price, warehouse stage and separate shipping payment" },
    { href: "https://www.pikobuy.com/protocol/returns", label: "PikoBuy Returns & Exchanges — separate warehouse timing, seller consent and eligibility boundaries" },
    { href: "https://www.pikobuy.com/contact", label: "PikoBuy Contact page — recommended ticket route and support email" },
  ],
};

export const guides = [...seeds.map(makeGuide), restrictedItemsGuide, returnedParcelGuide, damagedParcelGuide, missingItemGuide, supportTicketGuide, paymentOrderGuide, depositBalanceGuide];
export const getGuide = (slug: string) => guides.find((item) => item.slug === slug);
