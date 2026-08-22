export type FaqItem = {
  slug: string;
  question: string;
  shortAnswer: string;
  description: string;
  mainLink: string;
  mainLinkLabel: string;
  sections: Array<{ heading: string; paragraphs: string[]; bullets?: string[] }>;
};

export const faqItems: FaqItem[] = [
  {
    slug: "is-this-the-official-pikobuy-website",
    question: "Is this the official PikoBuy website?",
    shortAnswer: "No. This is an independent research site built to help shoppers use FindSpreadsheet product data more carefully.",
    description: "Understand the relationship between this independent PikoBuy spreadsheet resource, FindSpreadsheet and the PikoBuy platform.",
    mainLink: "https://findspreadsheet.com/pikobuy-spreadsheet/",
    mainLinkLabel: "Open the PikoBuy spreadsheet on FindSpreadsheet",
    sections: [
      { heading: "What this website does", paragraphs: ["PikoBuy Spreadsheet Europe is an independent research and navigation resource. It organises product categories, warehouse-QC checks, shipping questions and return considerations around the live product database on FindSpreadsheet.", "It does not operate PikoBuy accounts, accept orders, collect parcel payments or make decisions about seller returns. PikoBuy's current Terms of Service identify the platform operator as Hongkong Niuniubox Technology Co., LTD and describe product search, purchasing assistance, inspection, international shipping and after-sales support as platform services. This website provides none of those account services.", "Platform features, routes and policies can change, so time-sensitive decisions should always be confirmed inside the service you actually use. Facts in these FAQs were rechecked against PikoBuy's public home, beginner guide, estimator, shipping terms, return policy and Terms of Service on 22 August 2026."] },
      { heading: "Where the product records come from", paragraphs: ["Product buttons on this site lead to matching pages on FindSpreadsheet, the owner’s main product database. Category buttons lead to the corresponding category rather than an unrelated guide, while product cards lead to a named product-detail page.", "This separation matters: the external site explains the research process; the main site holds the live product discovery pages."] },
      { heading: "How to use the independence notice", paragraphs: ["Treat the site as a checklist and discovery layer, not as a guarantee. Confirm the source listing, variant, price, availability, restrictions and current purchase route before paying."], bullets: ["Use the main database for current product discovery.", "Use this site for research checklists and explanations.", "Verify live platform rules before making a time-sensitive decision."] },
    ],
  },
  {
    slug: "how-to-use-a-pikobuy-spreadsheet",
    question: "How do I use a PikoBuy spreadsheet?",
    shortAnswer: "Choose a category, open the matching product page, verify its options, then review warehouse QC before submitting a parcel.",
    description: "A practical sequence for moving from a FindSpreadsheet product page to product verification, warehouse QC and parcel planning.",
    mainLink: "https://findspreadsheet.com/pikobuy-spreadsheet/",
    mainLinkLabel: "Open the complete PikoBuy spreadsheet guide",
    sections: [
      { heading: "Start with a specific product page", paragraphs: ["Begin with a category or product-detail page on FindSpreadsheet. A useful record should give you enough information to identify the item and compare it with the original seller listing. Do not rely on a cropped image or a shortened title alone."], bullets: ["Check the product title and item ID.", "Compare the gallery with the seller source.", "Confirm the required colour, style and size."] },
      { heading: "Separate product payment from parcel planning", paragraphs: ["PikoBuy's official beginner guide uses two payment stages. First, the shopper selects colour, size and quantity, submits the purchasing order and pays for the product. After warehouse check-in and inspection, the shopper selects a shipping route, submits a parcel and pays international shipping.", "Product price therefore does not describe final landed cost. Domestic delivery, packing, actual weight, parcel dimensions, route restrictions and destination can change the shipping total. Plan for the later parcel decision and re-run the estimate after warehouse measurements are available."] },
      { heading: "Use QC as a decision point", paragraphs: ["The beginner guide describes warehouse inspection as check-in, photo confirmation and a defect check. Compare those photos against a checklist prepared before ordering: correct model, colour, size label, quantity, visible damage and the details that matter for that category.", "If something appears wrong, raise it before parcel submission. PikoBuy's return policy gives eligible warehouse items a five-day window counted as 120 hours from the next hour after the status changes to In Warehouse, so delaying the QC decision can reduce practical options."] },
    ],
  },
  {
    slug: "how-to-check-a-product-link-before-ordering",
    question: "How should I check a product link before ordering?",
    shortAnswer: "Match the title, item ID, images, options and seller information, then confirm that the listing is still active.",
    description: "A product-link verification checklist for avoiding mismatched variants, stale listings and incomplete product information.",
    mainLink: "https://findspreadsheet.com/AllProducts/",
    mainLinkLabel: "Browse current product-detail pages",
    sections: [
      { heading: "Confirm product identity", paragraphs: ["Product discovery pages are a starting point. PikoBuy's beginner guide tells shoppers to confirm product specifications, colour and size on the source platform before ordering. Compare the FindSpreadsheet record with the current seller page and make sure the item ID, main images and description refer to the same item.", "Save the source link and option text. PikoBuy states that prices are subject to the actual purchase and that an out-of-stock order may be refunded, so neither an old spreadsheet price nor a product card is a guaranteed live quotation."], bullets: ["Match the item ID when available.", "Check that the requested variant appears in the seller options.", "Confirm the listing has not been replaced with a different product."] },
      { heading: "Read options literally", paragraphs: ["Colour names, batch names and size labels can look similar while referring to different products. Record the exact option you intend to buy. For clothing and shoes, use measurements and the seller’s current size information instead of assuming that a familiar size label will fit the same way."] },
      { heading: "Check what can still change", paragraphs: ["Price, availability, seller response, domestic delivery and platform restrictions are time-sensitive. A spreadsheet record cannot guarantee that all of them remain unchanged. Recheck the live page at the moment of purchase."] },
    ],
  },
  {
    slug: "what-to-check-in-pikobuy-qc-photos",
    question: "What should I check in warehouse QC photos?",
    shortAnswer: "Check identity first, then quantity, size labels, colour, measurements, visible damage and category-specific details.",
    description: "A structured warehouse-photo checklist that separates visible evidence from details a photograph cannot prove.",
    mainLink: "https://findspreadsheet.com/pikobuy-spreadsheet/",
    mainLinkLabel: "Use the main spreadsheet before reviewing QC",
    sections: [
      { heading: "Check the basics before fine details", paragraphs: ["First confirm that the warehouse received the correct product and quantity. A close-up logo check is not useful if the colour, model or size is wrong."], bullets: ["Correct item and quantity.", "Correct colour and visible variant.", "Correct size label or requested measurement.", "No obvious tears, stains, crushing or missing parts."] },
      { heading: "Use category-specific checks", paragraphs: ["Shoes may require outsole, toe shape, heel alignment and insole measurements. Clothing may require chest width, length, print placement, seams and wash labels. Bags may require hardware, straps, zippers and internal compartments.", "Prepare the checklist before ordering so that you know which photo or measurement to request."] },
      { heading: "Know the limits of a photo", paragraphs: ["Warehouse images can show visible condition, but they cannot prove comfort, long-term durability, exact material composition, battery health or authenticity. PikoBuy's shipping terms say professional inspection cannot be provided for special and professional products and direct users to inspection photos or optional additional detailed photos.", "Use an extra photo to answer a specific visible question, such as a measurement, label or missing angle. Avoid turning a visual check into a claim the evidence cannot support."] },
    ],
  },
  {
    slug: "how-to-estimate-pikobuy-shipping-to-europe",
    question: "How do I estimate shipping to Europe?",
    shortAnswer: "Use destination, product type, actual weight and parcel dimensions; do not rely on one universal price-per-kilogram claim.",
    description: "A safer way to plan parcel shipping for European destinations without inventing fixed rates or customs guarantees.",
    mainLink: "https://findspreadsheet.com/pikobuy-spreadsheet/",
    mainLinkLabel: "Open the main PikoBuy spreadsheet resource",
    sections: [
      { heading: "Collect the inputs that affect the quote", paragraphs: ["PikoBuy's public estimator asks for destination country or region, product type, weight in kilograms, and length, width and height in centimetres. Those fields show why international-shipping estimates depend on more than product price.", "Use warehouse values when available and label pre-purchase numbers as estimates. Route availability, product type, actual weight and packed dimensions can all affect the choices and quoted cost."], bullets: ["Destination country and postcode when required.", "Product category and any route restrictions.", "Actual parcel weight.", "Packed length, width and height."] },
      { heading: "Account for volumetric weight", paragraphs: ["Large, light parcels can be charged using volumetric weight rather than scale weight. That is why shoe boxes, bulky jackets and protective packaging can materially change a quote. Compare packing choices only after you understand what protection you are giving up."] },
      { heading: "Keep customs claims qualified", paragraphs: ["No independent guide can guarantee customs clearance, tax treatment or delivery time for every parcel. PikoBuy's shipping terms state that third-party logistics providers carry parcels and identify customs action, confiscation, damage, loss and peak-season delay as cross-border risks that cannot be eliminated.", "Use the live route information and the destination's current official requirements before paying. After dispatch, PikoBuy's beginner guide says tracking information should become available within three days, so a missing immediate first scan is not by itself proof of loss."] },
    ],
  },
  {
    slug: "what-to-know-about-returns-and-after-sales",
    question: "What should I know about returns and after-sales?",
    shortAnswer: "Act while the item is still in the warehouse, document the issue clearly and confirm current eligibility, timing and fees.",
    description: "A warehouse return checklist covering evidence, seller acceptance, exclusions, timing and possible costs.",
    mainLink: "https://findspreadsheet.com/AllProducts/",
    mainLinkLabel: "Return to the live product database",
    sections: [
      { heading: "Raise problems before international shipping", paragraphs: ["The best time to deal with a wrong variant, visible defect or missing item is while the product remains in the warehouse. Once a parcel has entered international transit, the practical options can be much narrower.", "Keep the order record, product link and relevant warehouse photos together so the issue can be described precisely."] },
      { heading: "Separate a visible problem from preference", paragraphs: ["A clearly wrong size label or damaged item is different from changing your mind. PikoBuy's published policy lists customer-responsibility cases such as no longer wanting the product, ordering the wrong item or finding shipping over budget, and seller-responsibility cases such as a wrong variant or verified quality issue.", "Eligibility can still depend on seller acceptance, product category, resale condition, timing and evidence. Customised goods, intimate apparel, food, second-hand items, certain opened products and goods whose labels or packaging were removed at the user's request are among the published exclusions or conditional categories."], bullets: ["Identify the exact problem.", "Mark the relevant photo or measurement.", "Check the current request deadline.", "Confirm domestic return freight or service fees before proceeding."] },
      { heading: "Use the current deadline and fee rule", paragraphs: ["PikoBuy's current public policy says an application should be made within five days after the order changes to In Warehouse, counted as 120 hours from the next hour after that change. For an unconditional warehouse return, the published formula is shipping back to the seller plus the seller's original shipping fee plus RMB 5.", "Even a seller that advertised free shipping may require the original delivery charge to be paid on return. Platform rules can change, so confirm the live order page and current policy before relying on the figures for a new order."] },
    ],
  },
];

export function getFaq(slug: string) {
  return faqItems.find((item) => item.slug === slug);
}
