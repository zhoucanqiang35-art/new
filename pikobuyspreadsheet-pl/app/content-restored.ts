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

export const guides = [...seeds.map(makeGuide), restrictedItemsGuide, returnedParcelGuide];
export const getGuide = (slug: string) => guides.find((item) => item.slug === slug);
