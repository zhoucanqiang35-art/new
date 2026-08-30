export const primaryLinks = {
  products: "https://findspreadsheet.com/AllProducts/",
  pikobuy: "https://findspreadsheet.com/pikobuy-spreadsheet/",
  official: "/sources#pikobuy-sources",
};

export const categories = [
  { name: "Shoes", icon: "SH", note: "Sneakers, runners and everyday footwear — check shape, outsole and sizing.", href: "https://findspreadsheet.com/shoes/" },
  { name: "Hoodies", icon: "HD", note: "Heavyweight hoodies, zip-ups and sweaters — compare fabric, fit and measurements.", href: "https://findspreadsheet.com/hoodies-sweaters/" },
  { name: "T-Shirts", icon: "TS", note: "Everyday tees and graphic prints — inspect the collar, print placement and length.", href: "https://findspreadsheet.com/t-shirts/" },
  { name: "Jackets", icon: "JK", note: "Outerwear for every season — review lining, zips, measurements and packed size.", href: "https://findspreadsheet.com/jackets/" },
  { name: "Pants", icon: "PT", note: "Trousers and shorts in varied cuts — confirm waist, inseam and material.", href: "https://findspreadsheet.com/pants-shorts/" },
  { name: "Headwear", icon: "HW", note: "Caps, beanies and other headwear — check shape, stitching and listed size.", href: "https://findspreadsheet.com/headwear/" },
  { name: "Accessories", icon: "AC", note: "Bags, belts and small accessories — inspect hardware, scale and finish.", href: "https://findspreadsheet.com/accessories/" },
  { name: "Jerseys", icon: "JR", note: "Football, basketball and retro kits — review patches and print alignment.", href: "https://findspreadsheet.com/jersey/" },
  { name: "Electronics", icon: "EL", note: "Devices and add-ons — verify model, battery details and route limits.", href: "https://findspreadsheet.com/electronics/" },
  { name: "More finds", icon: "+", note: "Mixed product discoveries that sit outside the main collections.", href: "https://findspreadsheet.com/other-stuff/" },
];

export const countryGroups = [
  {
    tier: "English launch markets",
    countries: "United States · United Kingdom · Canada · Australia",
    rationale: "English-first search demand, active agent-shopping communities, and the simplest first content cluster.",
  },
  {
    tier: "Priority European markets",
    countries: "Germany · France · Spain · Italy · Netherlands",
    rationale: "Large ecommerce audiences where local-language shipping, VAT and parcel-planning pages can add real value.",
  },
  {
    tier: "Expansion markets",
    countries: "Portugal · Poland · Belgium · Ireland · Austria · Sweden",
    rationale: "Useful second-wave locales after verified translations and route-specific information are ready.",
  },
];

export type Guide = {
  slug: string;
  eyebrow: string;
  title: string;
  seoTitle?: string;
  description: string;
  readTime: string;
  updated: string;
  publishedDate?: string;
  modifiedDate?: string;
  editorialNote?: string;
  visual?: { src: string; alt: string; caption: string };
  intro: string[];
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  internalLinks?: { label: string; href: string; note: string }[];
  faqHeading?: string;
  faq?: { question: string; answer: string }[];
  sources: { label: string; href: string }[];
};

export const guides: Guide[] = [
  {
    slug: "pikobuy-fees-total-cost",
    eyebrow: "Cost planning",
    title: "PikoBuy Fees Explained: Estimate Your Total Cost Before Ordering",
    seoTitle: "PikoBuy Fees Explained: Total Cost Guide",
    description: "A fact-checked way to separate product cost, China delivery, international freight, PikoBuy's published freight fee and possible import charges before ordering.",
    readTime: "12 min read",
    updated: "Verified 26 August 2026",
    publishedDate: "2026-08-26",
    modifiedDate: "2026-08-26",
    editorialNote: "Independently researched from PikoBuy's public guide, estimator and agreements. This page is not a quote, calculator or guarantee from PikoBuy.",
    visual: {
      src: "/pikobuy-total-cost-stack.svg",
      alt: "Diagram showing the PikoBuy cost stack from product payment through warehouse, international freight, platform fee and possible destination charges",
      caption: "Original cost-planning diagram. Add only charges shown for your order; a blank category is not evidence that its value is zero.",
    },
    intro: [
      "A low product price is not the same as a low delivered price. With a purchasing agent, the final amount is assembled in stages: the seller's product price, delivery inside China, the measured international parcel, platform charges shown at payment, and any duties, taxes or brokerage collected for the destination. The honest answer to \"How much will PikoBuy cost?\" is therefore a worksheet, not a universal price-per-kilogram claim.",
      "PikoBuy's current beginner guide describes two payments. The first is made when the product order is submitted. The second comes after warehouse inspection, when the shopper chooses a shipping route and pays international freight. Its User Registration Agreement adds an important dated fact: the platform service fee for parcel forwarding is currently calculated at 8% of the shipping fee, subject to possible small differences from exchange rates and settlement timing.",
      "This guide turns those published rules into a practical pre-order estimate. It shows what you can know before buying, what remains a range until the warehouse measures the parcel, and what must be checked outside PikoBuy because destination-country charges are not determined by a product card.",
    ],
    sections: [
      {
        heading: "Start with the official two-payment structure",
        paragraphs: [
          "The first payment belongs to the purchase stage. PikoBuy's guide says the shopper selects the exact colour, size and quantity, submits the purchasing order and pays. It also warns that the actual purchase price controls and that an out-of-stock order may be refunded. A spreadsheet price is useful for discovery, but the live order confirmation is the figure to record.",
          "PikoBuy's User Registration Agreement says the purchasing-stage amount includes the price of the selected products and related logistics costs, with small differences possible because of exchange-rate movement and settlement timing. The same agreement says PikoBuy may add a necessary service fee when the product payment is confirmed, but the public clause does not give one universal percentage for that product-stage fee. Do not fill that box with a number borrowed from another agent; copy the amount shown on your own confirmation screen.",
          "The second payment is for the international parcel. After the warehouse checks in and photographs the products, the shopper chooses an available route, submits the parcel and pays freight. That separation is useful: you can estimate early, then replace assumed weight, dimensions and packing choices with warehouse information before committing to international shipping.",
        ],
        bullets: [
          "Payment one: product, seller-to-warehouse delivery and any charge displayed at checkout",
          "Warehouse checkpoint: identity, condition, measured item information and packing decision",
          "Payment two: selected international route, freight and the displayed forwarding platform fee",
          "Possible later collection: destination duties, taxes, brokerage or other official charges",
        ],
      },
      {
        heading: "Build the estimate from six separate cost buckets",
        paragraphs: [
          "Use six rows rather than one total: product price; domestic seller-to-warehouse delivery; product-stage service or payment charges shown at checkout; optional warehouse services and packing; international freight plus its platform fee; and destination charges. Keeping the rows separate prevents a known cost from being hidden inside an attractive estimate and makes it obvious which values still need evidence.",
          "For the product and domestic-delivery rows, use the selected variant rather than the lowest headline price. A listing may group several sizes, bundles or models under one page. Save the exact option text and current order breakdown. If you are comparing several products, record each seller's domestic delivery separately before assuming that consolidation removes it; consolidation happens after items have travelled to the warehouse.",
          "For optional services, enter only what the live warehouse or parcel screen offers and what you intend to request. Extra photographs, reinforced packing, insurance or other handling may affect cost, but the public pages reviewed for this article do not establish one permanent menu of prices. A good worksheet leaves the amount pending until it is shown instead of inventing a standard charge.",
        ],
      },
      {
        heading: "Estimate freight with parcel inputs, not hope",
        paragraphs: [
          "PikoBuy's public shipping estimator asks for destination country or region, product type, weight in kilograms, and parcel length, width and height in centimetres. Those fields explain why a stranger's screenshot is not your quote. A light shoebox can cost more than expected when its outside dimensions produce a higher chargeable size, while a dense parcel may be driven mainly by scale weight.",
          "Before warehouse arrival, run a low and high scenario. The low scenario can assume efficient consolidation and removal of packaging you genuinely do not need. The high scenario should allow for the outer carton, protective material and measurement uncertainty. Do not sacrifice necessary protection merely to force the smaller result; a damaged fragile item can be more expensive than a slightly larger parcel.",
          "After warehouse intake, rerun the estimate with the best available measurements and honest product type. PikoBuy's guide says routes differ in delivery time and billing method, so compare the live options rather than applying one formula to every line. Route availability, restrictions and prices can change. The final parcel page is the decision point, not the number saved before purchase.",
        ],
      },
      {
        heading: "Apply the published 8% freight platform fee correctly",
        paragraphs: [
          "PikoBuy's User Registration Agreement currently states that the platform service fee for parcel forwarding is 8% of the shipping fee. It also says the shopper pays freight to the independently selected third-party logistics provider and pays the platform fee to PikoBuy. The shipping order is not generated or confirmed if the required payment is not completed.",
          "For planning, the arithmetic is simple: estimated forwarding payment equals the live freight quote plus 0.08 multiplied by that freight quote. If a hypothetical parcel shows freight of CNY 200, the published formula produces a CNY 16 platform fee and CNY 216 before insurance, optional handling or destination charges. This is an illustration, not a current route quote.",
          "Treat 8% as a dated policy fact, not an eternal promise. The agreement notes that exchange-rate fluctuation and settlement timing can produce small differences, and PikoBuy reserves the ability to update its terms. Check the fee line again when paying. Also keep the freight fee separate from any service or payment charge shown during the first product payment; the public agreement does not justify assuming they are the same fee.",
        ],
      },
      {
        heading: "Keep customs, tax and brokerage outside the shipping quote",
        paragraphs: [
          "PikoBuy's Terms of Service says cross-border transactions may incur duties, taxes, brokerage fees or other charges and makes the user responsible for them. Its shipping terms also state that parcels are carried by third-party logistics providers and that customs action, confiscation, damage, loss and peak-season delays cannot be eliminated.",
          "That means an international shipping estimate is not automatically a delivered-duty-paid total. Check the destination country's current customs authority guidance and the exact route wording before paying. Do not rely on an old community post, and do not describe a route as tax-free or customs-safe unless the current official route terms for the actual parcel expressly establish that treatment.",
          "In the worksheet, mark duties, import tax and brokerage as either confirmed, estimated from an official destination rule, or unknown. Unknown does not mean zero. If the classification, value threshold or recipient obligation is unclear, keep a contingency rather than forcing the spreadsheet to produce a falsely precise delivered price.",
        ],
      },
      {
        heading: "Include the cost of changing your mind",
        paragraphs: [
          "Returns matter to cost planning because international freight is selected after warehouse inspection. PikoBuy's Returns & Exchanges page even lists an international shipping quote that exceeds the buyer's budget as a customer-responsibility reason for returning an item. Estimating freight before the first payment reduces the risk of paying domestic delivery only to discover that the parcel no longer makes financial sense.",
          "For an eligible unconditional return after warehouse arrival, the published formula is shipping back to the seller, the seller's original delivery charge and an RMB 5 service fee. The page warns that the original delivery charge can still be payable even when the seller advertised free shipping. Eligibility also depends on timing, seller support, resale condition, packaging and category rules.",
          "Do not automatically add the full return formula to every order total. Use it as a risk row when size, condition, option accuracy or seller policy makes a return reasonably possible. Preserve labels, seals and packaging until the warehouse decision is complete, and review photos promptly because the published application window for eligible products is 120 hours from the next hour after the status changes to In Warehouse.",
        ],
      },
      {
        heading: "Use one worksheet and three checkpoints",
        paragraphs: [
          "Checkpoint one is before the product order: record the exact variant, live product total, domestic delivery and a low-to-high parcel estimate. If the high scenario already breaks the budget, stop before paying. Checkpoint two is after warehouse intake: confirm the received item, update weight and dimensions, decide on packaging and compare the currently available routes.",
          "Checkpoint three is the final parcel screen. Copy the freight, the displayed platform fee, optional services, insurance choice and any route-specific statement. Then add only destination charges supported by current official information. Keep screenshots with the order because live prices and route names can change after payment.",
          "The final decision is not simply whether the total is affordable. Compare delivered cost with the quality of evidence you have: seller information, exact option, warehouse photos, measurements, route eligibility and return position. A product that is slightly cheaper but poorly documented can carry more financial risk than a better-recorded alternative.",
          "A disciplined estimate stays editable. Replace assumptions as evidence arrives, label every unconfirmed amount, and never present the result as a PikoBuy quotation. That is the difference between a useful cost plan and a number designed only to persuade someone to click Buy.",
        ],
      },
    ],
    faq: [
      {
        question: "What is PikoBuy's international shipping platform fee?",
        answer: "PikoBuy's User Registration Agreement, reviewed on 26 August 2026, states that the parcel-forwarding platform service fee is calculated at 8% of the shipping fee. Verify the current amount on the live parcel payment screen because terms, exchange rates and settlement details can change.",
      },
      {
        question: "Does the PikoBuy shipping estimate include customs and tax?",
        answer: "Do not assume it does. PikoBuy's Terms of Service lists duties, taxes, brokerage and other cross-border charges as possible costs for which the user is responsible. Check the exact route terms and current destination-country rules.",
      },
      {
        question: "Can I know the full PikoBuy cost before buying?",
        answer: "You can build a planning range, but the final parcel cost is not known until warehouse measurements, packing choices and live routes are available. Record product-stage charges first, then replace estimated freight inputs after warehouse intake.",
      },
      {
        question: "What should I put in a PikoBuy cost worksheet?",
        answer: "Use separate rows for the selected product, domestic delivery, checkout charges, optional warehouse services, international freight, the displayed freight platform fee, insurance if chosen, and possible destination duties, tax or brokerage.",
      },
    ],
    sources: [
      { label: "PikoBuy official beginner guide", href: "/sources#pikobuy-sources" },
      { label: "PikoBuy official shipping estimator", href: "/sources#pikobuy-sources" },
      { label: "PikoBuy User Registration Agreement", href: "/sources#pikobuy-sources" },
      { label: "PikoBuy Terms of Service", href: "/sources#pikobuy-sources" },
      { label: "PikoBuy Returns & Exchanges", href: "/sources#pikobuy-sources" },
    ],
  },
  {
    slug: "pikobuy-seller-listing-verification",
    eyebrow: "Pre-order checks",
    title: "PikoBuy Seller and Listing Verification Checklist Before You Pay",
    seoTitle: "PikoBuy Seller Verification Checklist",
    description: "A practical PikoBuy seller verification checklist for checking the source link, exact variant, price, stock evidence and seller signals before payment.",
    readTime: "11 min read",
    updated: "Published 28 August 2026",
    publishedDate: "2026-08-28",
    modifiedDate: "2026-08-28",
    editorialNote: "Independent editorial guidance based on PikoBuy's public beginner guide, Terms of Service and User Registration Agreement as observed on 28 August 2026. It is not an authenticity service, seller endorsement or guarantee.",
    visual: {
      src: "/pikobuy-listing-verification-flow.svg",
      alt: "Five-step PikoBuy listing verification flow covering source link, item identity, variant, seller evidence and final decision",
      caption: "Original pre-payment decision flow. A listing passes only when the link, item, selected option and seller evidence agree; uncertainty should be resolved before payment.",
    },
    intro: [
      "A product link that opens in PikoBuy is not automatically a verified product. It proves that the platform can search or display information from the submitted address; it does not prove that the seller has stock, that the cheapest visible price belongs to your option, or that the goods are authentic, legal and suitable for international shipping.",
      "PikoBuy's current beginner guide tells shoppers to find an item on Taobao, Tmall, 1688, Weidian, Yupoo or another platform, confirm its specifications, colour and size, save the item or store information, and then paste the product link or keywords into PikoBuy. Its User Registration Agreement draws an equally important boundary: PikoBuy displays links and helps facilitate purchasing, but is not the seller and says it cannot check every platform, merchant, product or service for quality, safety, legality, authenticity or accuracy.",
      "The useful response is a repeatable check before the first payment: preserve the source, match the exact item and variant, assess seller signals without treating them as guarantees, and decide whether to proceed, clarify or reject the listing.",
    ],
    sections: [
      {
        heading: "Understand what a successful link import does—and does not—prove",
        paragraphs: [
          "PikoBuy's public flow says a shopper can paste a product link or keywords into its search box and receive purchasing assistance. The homepage also presents product-link submission as one way to discover items. These statements support a narrow conclusion: the platform is designed to accept or find source listings. They do not establish that every address will import perfectly or that the resulting page independently verifies the seller's claims.",
          "Treat the imported PikoBuy page as a working copy of a live seller listing. If the source has disappeared, redirects to a different item, or shows materially different options, do not rely on an old spreadsheet title or thumbnail.",
          "Keep the complete source URL and the PikoBuy page generated from it, with the date checked. Shortened links, screenshots and copied titles are supporting evidence, not substitutes for the original address.",
        ],
        bullets: [
          "Pass: the source opens and the imported page represents the same product.",
          "Clarify: the source is accessible but key option text or seller information is missing.",
          "Reject: the link redirects to another item, is no longer available, or cannot be matched reliably.",
        ],
      },
      {
        heading: "Match listing identity before comparing price",
        paragraphs: [
          "Start with identity, not the headline price. Compare the source title, main images, item identifier where visible, category and distinctive features with the PikoBuy display. For clothing, that might be the print, pocket layout or fabric version. For shoes, compare the model, colourway, sole and option labels. For electronics, match the exact model, connector, capacity and included accessories rather than assuming that one product page contains only one specification.",
          "A seller may group several products or bundles under one address. The lowest displayed amount can belong to a small accessory, deposit, replacement part or basic configuration rather than the product shown in the hero image. Open the option selector and write down the exact combination you plan to buy. Then confirm that the quantity and price on PikoBuy correspond to that combination, not merely to the listing's starting price.",
          "Save one screenshot showing the source page and seller, one showing the selected option and price, and one showing any size chart or specification table you relied on. A compact record is easier to use at the warehouse than dozens of decorative images.",
        ],
      },
      {
        heading: "Confirm the exact variant in plain language",
        paragraphs: [
          "Translate the selected option into a short order sentence: product, colour, size or model, quantity, and any bundle or custom instruction. For example, 'navy jacket, seller size XL, one piece, no custom text' is more useful than 'the blue one.' Compare each part of that sentence with both the source page and the PikoBuy checkout selection.",
          "Measurements deserve their own line because familiar size letters are not interchangeable across sellers. Save the current chart and compare like-for-like measurements with an item you own. Ask about any critical missing dimension before ordering.",
          "PikoBuy's guide explicitly says to confirm specifications, colour and size before submitting the purchasing order. The first payment occurs after those options and quantity are selected. Once payment is made, the agent buys according to that submitted information; a vague private expectation is not stronger evidence than the actual order record.",
        ],
      },
      {
        heading: "Use seller signals as filters, not guarantees",
        paragraphs: [
          "PikoBuy's User Registration Agreement recommends choosing Taobao shops with credibility of three stars or above that have paid the Taobao deposit. It warns that low-credibility shops without a deposit can create risks involving non-shipment, false shipment and after-sales disputes. This is a published caution, not proof that every shop above the threshold is reliable or that a lower-rated seller will fail.",
          "Record the platform, shop name, visible credibility level and deposit indicator only when you can observe them. Add the seller's stated return position if displayed, but remember that ratings and sales counts do not authenticate a product.",
          "For 1688, PikoBuy's agreement is especially cautious: it says PikoBuy does not guarantee product quality or provide precise inventory services for the standard purchasing-agent service, and describes sample and after-sales support as limited. That makes specification clarity and seller communication more important, particularly for minimum quantities, mixed variants, wholesale descriptions or products whose material cannot be judged from images.",
        ],
      },
      {
        heading: "Resolve price, stock and deposit warnings before payment",
        paragraphs: [
          "PikoBuy's beginner guide says prices are subject to the actual purchase and that an out-of-stock order may be refunded. Therefore, the number visible on a spreadsheet or imported page is not a permanent quotation. Compare the selected-option price immediately before payment and keep enough budget flexibility for a changed seller price or domestic delivery charge. If the live amount differs materially, reassess the purchase instead of treating the earlier card as binding.",
          "A selectable option can still be unavailable when the purchaser contacts the seller, and a generic inventory number may not refer to your exact colour or size. Mark stock as 'shown available,' not 'guaranteed,' and retain any current confirmation.",
          "Deposit listings require extra care. PikoBuy's agreement states that, under Taobao seller rules, an order with a paid deposit cannot be cancelled and that the balance must be paid within the seller's stated time or the deposit will not be refunded. Before placing such an order, identify the deposit amount, total price, balance deadline, release schedule and cancellation position. Reject the listing if you cannot explain those terms in your own worksheet.",
        ],
      },
      {
        heading: "Do a legality, authenticity and shipping-suitability screen",
        paragraphs: [
          "Link verification is not authenticity verification. PikoBuy's User Registration Agreement says it cannot examine every merchant and product for authenticity, legality, safety or accuracy. Its Terms of Service prohibit counterfeit goods and products that infringe intellectual-property rights and say the platform may cancel orders, refuse service, return or dispose of prohibited items. Do not use the platform's ability to display a listing as evidence that the item is permitted or genuine.",
          "Batteries, liquids, powders, fragile goods, electrical appliances and customised products can require extra checks or face route limits. PikoBuy says professional inspection may be unavailable for some products and may cover only external condition and accessories. A warehouse photo cannot close gaps about internal performance, materials or authenticity.",
          "Also check whether the product can legally be bought, exported and imported at the destination. A seller's willingness to list an item is not permission to ship it. When the legal position or route eligibility is unclear, stop before the first payment and use the current official rules or support channel. Losing a small discount is safer than paying for goods that cannot enter a usable shipping route.",
        ],
      },
      {
        heading: "Make a documented proceed, clarify or reject decision",
        paragraphs: [
          "Proceed only when the source link and imported page match, the exact option is recorded, the selected price is acceptable, the seller evidence meets your risk threshold and no unresolved legal or shipping warning remains. 'Proceed' means the evidence is sufficient for the next stage; it is not a promise of quality, authenticity, stock or delivery.",
          "Choose 'clarify' for an ambiguous size chart, bundle, model number, deposit term or return condition. Write one precise question and preserve the response instead of hoping warehouse QC will resolve it.",
          "Reject the listing when identity cannot be matched, essential terms remain hidden, the price belongs to another option, seller evidence is materially weak, or the product appears prohibited or unsuitable for transport. Record the reason.",
          "The final file can remain small: complete source URL, platform and seller, item ID if shown, selected variant sentence, price and domestic delivery, seller signals, return or deposit notes, risk flags, screenshots and decision date. That record turns product-link checking from a vague impression into a repeatable pre-payment control.",
        ],
      },
    ],
    internalLinks: [
      { label: "Browse PikoBuy product categories", href: "/product-categories", note: "Start with a focused category, then apply the checklist to the live seller listing." },
      { label: "Open the product-link FAQ", href: "/faq/how-to-check-a-product-link-before-ordering", note: "Use the concise answer when you need a quick reminder of the matching steps." },
      { label: "Estimate total PikoBuy cost", href: "/pikobuy-fees-total-cost", note: "After the listing passes, place the selected price into a complete landed-cost worksheet." },
      { label: "Prepare for warehouse QC", href: "/pikobuy-qc-photo-guide", note: "Turn the saved option evidence into a category-specific inspection plan." },
    ],
    faqHeading: "Questions about PikoBuy listing and seller checks",
    faq: [
      {
        question: "Does a PikoBuy product link prove that a seller is reliable?",
        answer: "No. A working link shows that PikoBuy can search or display the source listing. PikoBuy's agreement says it cannot verify every merchant or product for quality, safety, legality, authenticity or accuracy.",
      },
      {
        question: "What should I save before paying for a PikoBuy order?",
        answer: "Save the complete source URL, seller or shop name, item ID when visible, exact selected variant, current price, relevant size or specification evidence, seller signals and the date checked.",
      },
      {
        question: "What seller credibility does PikoBuy recommend for Taobao?",
        answer: "PikoBuy's User Registration Agreement recommends Taobao shops with three stars or above that have paid the Taobao deposit. Treat this as a filter, not a guarantee of product quality or successful after-sales service.",
      },
      {
        question: "Can warehouse QC fix a poorly checked listing?",
        answer: "Not completely. Warehouse photos can help compare visible identity, option and condition, but PikoBuy says professional inspection may be unavailable for some products and does not guarantee authenticity, internal quality or performance.",
      },
    ],
    sources: [
      { label: "PikoBuy official beginner guide", href: "/sources#pikobuy-sources" },
      { label: "PikoBuy User Registration Agreement", href: "/sources#pikobuy-sources" },
      { label: "PikoBuy Terms of Service", href: "/sources#pikobuy-sources" },
      { label: "PikoBuy official homepage", href: "/sources#pikobuy-sources" },
    ],
  },
  {
    slug: "how-to-use-pikobuy-spreadsheet",
    eyebrow: "Beginner guide",
    title: "How to Use a PikoBuy Spreadsheet Without Guessing",
    description: "A practical product-to-warehouse workflow for shoppers using FindSpreadsheet and PikoBuy.",
    readTime: "12 min read",
    updated: "Verified 22 August 2026",
    intro: [
      "A useful PikoBuy spreadsheet is a research tool, not a promise that every product is suitable. The goal is to move from a broad product idea to a short list whose source page, options, price, sizing and shipping implications you have actually checked.",
      "PikoBuy's official beginner flow separates product payment from international shipping. That makes early product research important: an inexpensive item can still be a poor choice if its dimensions, route restrictions or return conditions make the final parcel uneconomical.",
      "The practical way to use a spreadsheet is therefore not to click the first attractive row. It is to create an evidence trail: save the source listing, record the exact variant, compare measurements, estimate the likely parcel, and decide in advance which warehouse photos would make you approve or reject the item. That approach matches PikoBuy's published sequence while keeping the buyer responsible for the decisions that a platform photo or product title cannot make.",
    ],
    sections: [
      {
        heading: "Start with one product category",
        paragraphs: [
          "Open the category closest to what you want rather than scanning every row. Shoes need outsole, heel and insole checks; clothing needs garment measurements; bags need scale and hardware photos; electronics require model and logistics checks. Category-first browsing reduces irrelevant comparisons.",
          "On FindSpreadsheet, open the product detail rather than relying on a card title. Confirm the displayed images, listed price context and available source or agent routes. Treat a product card as a lead until the live source page confirms the selected colour, size, quantity and current availability.",
          "PikoBuy's beginner guide tells shoppers to confirm specification, colour and size on Taobao, Tmall, 1688, Weidian, Yupoo or another source before ordering. That instruction is more important than it looks. Sellers may group several models under one listing, show a low starting price for a basic option, or use colour names that are not obvious from the main photo. Open the option selector and write down the exact text of the choice you intend to submit.",
          "Build a short comparison table instead of a long wish list. For each candidate, record the seller, item ID, selected option, product price, domestic delivery if shown, measurements and any characteristic that could affect shipping. Three well-documented candidates are more useful than thirty unsorted links because the comparison exposes missing information before money is committed.",
        ],
        bullets: ["Compare three to five similar items.", "Save the source URL and item ID.", "Check measurements, not only letter sizing.", "Note fragile, battery, liquid or bulky characteristics."],
      },
      {
        heading: "Understand the two-payment workflow",
        paragraphs: [
          "PikoBuy's official guide describes a first payment for the product order and a later payment for international shipping. After the seller sends the product to the warehouse, PikoBuy checks it in, provides photo confirmation and checks visible defects. Only after this stage do you submit a parcel and choose a route.",
          "Do not evaluate a product using item price alone. Before the first payment, estimate packed weight and dimensions, consider domestic shipping and decide whether the item is likely to be combined with other purchases. This is especially important for shoes with boxes, padded jackets and other volume-heavy goods.",
          "The first payment covers the purchasing order described by PikoBuy: the shopper selects colour, size and quantity, submits the order and pays for the purchase stage. PikoBuy also warns that the actual purchase price controls and that an out-of-stock order may be refunded. A spreadsheet price is therefore useful for discovery, but it is not a frozen quotation. Recheck the live order screen before paying and keep a screenshot of the chosen variant.",
          "The second payment occurs after warehouse intake, when the shopper chooses a shipping route, submits a parcel and pays the international shipping fee. Because the two stages are separate, the final cost cannot be calculated from the product card alone. A sensible pre-order budget includes a range for domestic delivery, packing choices and international transport, then gets updated when the warehouse provides actual item information.",
        ],
      },
      {
        heading: "Use QC photos as a decision point",
        paragraphs: [
          "Warehouse photos can confirm visible colour, shape, tags, stitching, print placement, obvious damage and whether the received option matches the order. They cannot prove authenticity, long-term durability, exact material composition or a guaranteed fit.",
          "If the item differs from the selected option or has a visible defect, check the return window immediately. PikoBuy's published return terms describe a five-day warehouse application period for eligible items, with exclusions and potential fees. Waiting too long can remove practical options.",
          "Start with identity before discussing quality. Confirm that the received quantity, colour, model and size label match the order. Then move to category-specific details: pair symmetry and outsole condition for shoes; chest, length and print position for clothing; dimensions, straps and hardware for bags; model numbers and visible condition for electronics. A close-up is only useful when it answers a question you wrote down before purchase.",
          "PikoBuy's public shipping terms also set a boundary around inspection. Forwarded goods are unpacked and inspected, but the company says professional inspection is not available for special or professional products. The same page tells users to rely on inspection photos or purchase additional detailed photos. In practical terms, warehouse QC can reduce visible uncertainty; it cannot certify authenticity, internal construction, battery health, long-term performance or fit on your body.",
        ],
      },
      {
        heading: "Submit the parcel only after a route check",
        paragraphs: [
          "PikoBuy states that available routes can differ in delivery time and billing method. Re-run the shipping estimator with the destination, product type, weight and realistic outside dimensions. Compare route restrictions and insurance or compensation terms where available before paying.",
          "After dispatch, PikoBuy says tracking information may take up to three days to appear. A blank scan immediately after shipment is therefore not automatically evidence that the parcel has stopped moving.",
          "Use PikoBuy's estimator with the destination country or region, the most accurate product type, weight in kilograms and the outside length, width and height in centimetres. Those are the fields the public tool requests. If you do not yet know the final measurements, test a realistic low and high scenario rather than inventing a universal price per kilogram. Bulky retail packaging can change the result even when the products themselves are light.",
          "Route names, billing methods and delivery estimates should be compared on the live parcel screen. PikoBuy's shipping terms explain that parcels are carried by third-party logistics providers and that customs action, damage, loss and peak-season delays remain possible. Save the route details visible when you pay, keep customs and tax claims qualified, and never describe a route as guaranteed, tax-free or risk-free unless the live terms for that exact shipment explicitly say so.",
        ],
      },
      {
        heading: "Keep a compact evidence file",
        paragraphs: [
          "A simple evidence file makes the whole workflow easier to manage. Save the original product URL, item ID, selected option, seller screenshots, order record, warehouse photos, measurements, parcel estimate and the route terms shown at payment. Name files by order number or product so that a wrong variant or visible defect can be explained without searching through unrelated screenshots.",
          "Finally, separate facts from decisions. PikoBuy can show an order status, warehouse photos and available routes; the seller controls stock and may influence return approval; the logistics provider carries the international parcel; and the shopper decides whether the visible evidence and current cost are acceptable. A spreadsheet works best when it supports those decisions instead of pretending to replace them.",
        ],
      },
    ],
    sources: [
      { label: "PikoBuy official beginner guide", href: "/sources#pikobuy-sources" },
      { label: "FindSpreadsheet product database", href: "https://findspreadsheet.com/AllProducts/" },
      { label: "PikoBuy return policy", href: "/sources#pikobuy-sources" },
    ],
  },
  {
    slug: "pikobuy-qc-photo-guide",
    eyebrow: "Warehouse checks",
    title: "PikoBuy QC Photo Guide: What You Can and Cannot Verify",
    description: "Category-specific checks for warehouse photos before international shipping.",
    readTime: "12 min read",
    updated: "Verified 22 August 2026",
    intro: [
      "PikoBuy says items are checked in, photographed and reviewed for visible defects when they reach its warehouse. These photographs are most useful when you compare them against the exact option you ordered and use a checklist designed for that product category.",
      "QC photographs reduce uncertainty; they do not remove it. A photograph cannot establish long-term durability, hidden construction, material composition, electronics performance or final fit with certainty.",
      "The most reliable QC process begins before the order is placed. Save the seller's current images, the exact option text and the measurements you expect, then write a category-specific checklist. When the warehouse set appears, compare evidence in a fixed order: identity, quantity, option, visible condition, measurements and only then finer details. This prevents a striking close-up from distracting you from a wrong model or size.",
    ],
    sections: [
      {
        heading: "Check the order before judging quality",
        paragraphs: [
          "First confirm quantity, colour, size label and the main product identity. A beautifully photographed item is still wrong if it is not the selected variant. Compare the warehouse set with saved screenshots or the current seller page, because listings can change after purchase.",
          "PikoBuy's beginner guide describes warehouse inspection as check-in, photo confirmation and a defect check. That wording supports a visual acceptance decision, not a laboratory report. Look for the evidence that the warehouse can reasonably photograph: correct item count, visible option, obvious stains or holes, crushing, missing detachable parts and the condition of external packaging.",
          "Use the order record as the baseline rather than memory. Match the item ID when available and compare distinctive features such as panel layout, pocket count, hardware colour, print design or model number. If the seller changed the live page after purchase, your saved screenshot may be the clearest record of what was selected at the time of payment.",
        ],
        bullets: ["Correct item and quantity", "Selected colour and size", "Visible damage or missing parts", "Packaging condition", "Measurement photo when fit is uncertain"],
      },
      {
        heading: "Shoes and footwear",
        paragraphs: [
          "Request or review a pair view, both side profiles, heels, toe boxes, outsoles and size labels. Look for pair symmetry, alignment, glue marks, obvious creasing and whether the insole or stated measurement corresponds to the size you intended to buy.",
          "A size label alone is not a fit guarantee. Compare an available insole measurement with footwear you already own, and remember that a shoebox can materially increase parcel volume.",
          "Review both shoes as a pair. Compare heel height, toe shape, panel alignment, lace length and the way the left and right shoes sit on a flat surface. Check the outsole for obvious marks and confirm that removable accessories are present. Minor lighting differences or camera angle can make symmetry hard to judge, so ask for a straighter angle when the existing set does not answer the question.",
          "For sizing, use a measurement that can be compared with footwear you already wear comfortably. Seller charts, internal labels and insole measurements are different forms of evidence and may not agree. Record which one you relied on. If preserving the shoebox matters for collection value or protection, include it in the shipping plan; if it does not, compare the likely parcel-volume trade-off before requesting removal.",
        ],
      },
      {
        heading: "Clothing, bags and accessories",
        paragraphs: [
          "For clothing, check shoulder width, chest width, body length, sleeve length, collar or cuff shape, print placement and visible stitching. For bags, focus on dimensions, strap length, closures, hardware, lining and close-up finish. Small accessories need a scale reference so the product is not judged from a misleading crop.",
          "Strong lighting can shift colour, while compression and folding can change garment shape. Use the entire image set and measurements rather than making a decision from a single front photo.",
          "For garments, create a measurement diagram before ordering. Chest width should be compared like-for-like—usually flat across the garment—and length, shoulder and sleeve points should match the way your reference garment was measured. A warehouse ruler photo can be useful, but only if its endpoints are visible and the garment is laid reasonably flat. Allow for normal measuring variation rather than treating one millimetre as proof of a defect.",
          "For bags and accessories, scale is a common source of disappointment. Confirm outside dimensions, strap or handle length, closure type, pockets and included accessories. Ask for close-ups of high-stress areas such as strap attachments, zips and buckles when they are not visible. A polished product photograph can communicate style, while a warehouse image should answer whether the received item matches the ordered configuration.",
        ],
      },
      {
        heading: "Approve, request detail, or act on a return",
        paragraphs: [
          "Approve only when the ordered option and visible condition are acceptable. If a necessary angle or measurement is missing, request additional detail where the service permits it. When a visible problem may justify a return, check eligibility immediately rather than waiting until parcel submission.",
          "PikoBuy's published terms state that eligibility depends on seller rules, resale condition and the warehouse time limit. Some categories and altered packaging are excluded. The seller's consent can still determine the outcome.",
          "If the problem is visible, describe it precisely. Instead of saying that the item looks bad, identify the order option and point to the photograph showing the wrong colour, size label, missing part, stain or hole. Keep the request factual and separate a confirmed mismatch from a preference change. This distinction matters because PikoBuy's return terms assign costs differently depending on responsibility.",
          "Do not request packaging removal or other irreversible handling until you have considered return eligibility. The official return page lists items whose packaging, labels or accessories were removed at the user's request among products that may not qualify for the standard service. Certain sealed products and electronics also have special resale standards. Approve handling instructions only after the identity and visible condition checks are complete.",
        ],
      },
      {
        heading: "Electronics and professional products need stricter limits",
        paragraphs: [
          "For electronics, record the exact model, colour, connector type, included accessories and any visible regulatory or battery information shown on the source listing. Warehouse photos may confirm an external label and physical condition, but they do not establish battery health, internal specification or long-term performance. PikoBuy's shipping terms also say professional inspection cannot be provided for special and professional products, so avoid describing a visual check as functional certification.",
          "The return policy gives some electronics special resale standards, including undamaged network-access licensing and no sign of water damage for certain digital products, plus additional requirements for cameras and components. The practical lesson is to keep seals and packaging intact until you understand the effect of opening them. Check route restrictions separately because a product that can be bought is not automatically suitable for every international line.",
        ],
      },
      {
        heading: "Turn the photo set into a decision record",
        paragraphs: [
          "Finish the QC review with one of three outcomes: approve, request specific additional evidence, or start an after-sales request while the item is still eligible. Save the image set and write a one-sentence reason for the decision. That note is valuable later when several similar products arrive and you need to remember why one was accepted and another was returned.",
          "A good QC checklist is deliberately modest. It confirms what the photographs can show and keeps everything else qualified. It does not promise authenticity, perfect colour accuracy, exact feel, hidden workmanship or guaranteed fit. This boundary makes the guide more useful because it protects the shopper from treating limited visual evidence as certainty.",
        ],
      },
    ],
    sources: [
      { label: "PikoBuy official beginner guide", href: "/sources#pikobuy-sources" },
      { label: "PikoBuy returns and exchanges", href: "/sources#pikobuy-sources" },
    ],
  },
  {
    slug: "pikobuy-shipping-europe",
    eyebrow: "Europe shipping",
    title: "PikoBuy Shipping to Europe: Build a Realistic Parcel Estimate",
    description: "How destination, product type, weight and dimensions shape a PikoBuy shipping estimate.",
    readTime: "13 min read",
    updated: "Verified 22 August 2026",
    intro: [
      "There is no single honest PikoBuy shipping price per kilogram for every European parcel. PikoBuy's public estimator asks for destination, product type, weight, length, width and height because route availability and billing can change with all of those inputs.",
      "A useful estimate should be treated as a planning range, not a guaranteed invoice. The final parcel is quoted after warehouse intake, inspection, packing choices and route selection.",
      "The aim of a serious shipping guide is not to produce one attractive number. It is to show which inputs are known, which are assumptions and which must be confirmed later. PikoBuy's own beginner guide places international shipping after warehouse inspection: the shopper chooses a route, submits the parcel and makes a second payment. That order of events explains why an early estimate can guide a purchase but cannot replace the final quote.",
    ],
    sections: [
      {
        heading: "Enter parcel information, not item information",
        paragraphs: [
          "Use the packed outside dimensions of the consolidated parcel, not the dimensions of one product. Include a reasonable allowance for the carton and protective material. Choose the most accurate product type, because sensitive goods, batteries, liquids and branded items may have different route availability.",
          "The public PikoBuy estimator exposes six useful inputs: destination country or region, product type, weight in kilograms, and length, width and height in centimetres. Record each one next to its source. Warehouse weight and dimensions are stronger evidence than a seller's approximate product description; before warehouse intake, clearly label every number as an estimate.",
          "Build at least two scenarios. A lower scenario can assume efficient consolidation and no unnecessary retail packaging. A higher scenario should allow for a sturdier carton, protective material and measurement variation. If the order contains several products, estimate the combined parcel rather than adding individual item quotes without considering how they will actually be packed together.",
        ],
        bullets: ["Actual destination country", "Accurate product type", "Estimated packed weight", "Outside length, width and height", "Packaging and box-removal plan"],
      },
      {
        heading: "Why volumetric weight matters",
        paragraphs: [
          "A large, light parcel can occupy more cargo space than its scale weight suggests. Some routes therefore compare actual weight with a volume-based chargeable weight. PikoBuy's visible estimator does not publish one universal divisor for every route, so a single formula should not be presented as applicable to all services.",
          "Test at least two scenarios: the likely packed size and a slightly larger parcel. If the quote changes sharply, reducing unnecessary shoe boxes or bulky retail packaging may matter more than removing a small amount of physical weight.",
          "Volumetric billing exists because a large light box consumes transport space. The exact calculation can vary by route, and PikoBuy's visible estimator does not publish one divisor that should be applied to every service. Avoid copying a formula from another line and presenting it as PikoBuy's universal rule. Instead, enter realistic outside dimensions into the live estimator and compare the results returned for the routes currently offered.",
          "Packaging choices have consequences beyond price. Removing a shoebox can reduce volume, but it also removes structure and may affect presentation or return options. Reinforced packaging can add weight and size while reducing crushing risk. PikoBuy's beginner guide says users can request minimal or reinforced packaging at the warehouse; the best choice depends on the fragility and value of the contents, not only the cheapest estimate.",
        ],
      },
      {
        heading: "Compare route fit, not only the lowest number",
        paragraphs: [
          "Check estimated delivery time, tracking, restrictions, billing method and any insurance or compensation terms. PikoBuy's shipping terms state that third-party logistics providers carry parcels and that customs, confiscation, damage, loss and peak-season delay risks cannot be eliminated.",
          "Customs treatment and taxes depend on the destination and current rules. Country pages should explain where users must verify official local information, rather than promising tax-free or risk-free delivery.",
          "The cheapest line is not automatically the best fit. Compare what the live route page says about estimated transit, tracking, chargeable-weight method, product restrictions and any insurance or compensation option. Save the exact route name and the terms shown at the time of payment, because marketing names and availability can change and because two routes with similar prices may handle sensitive goods differently.",
          "PikoBuy's shipping terms state that its parcels are carried by third-party logistics providers. The same terms say cross-border risks such as customs action, confiscation, damage, loss and peak-season delays cannot be eliminated. This does not mean every parcel will encounter a problem; it means a responsible estimate includes uncertainty and never turns an estimated delivery range into a guarantee.",
        ],
      },
      {
        heading: "A practical Europe parcel workflow",
        paragraphs: [
          "Estimate before buying, check again after warehouse measurements, compare available routes, confirm restrictions, and only then submit the parcel. Save the route name and terms visible at payment time. After dispatch, allow for the tracking delay described in PikoBuy's official guide before escalating a missing first scan.",
          "Begin with the shopping list. Mark bulky, fragile, battery-powered, liquid or otherwise sensitive items, and decide whether they belong in one parcel. Run a preliminary estimate before the first payment so that a low product price does not hide an obviously uneconomic shipping profile. When items reach the warehouse, compare the received quantity and condition before spending time optimising the box.",
          "Next, update the estimate with warehouse information and packaging instructions. Compare at least two routes on more than price, then review the destination's current tax, import and prohibited-item rules using official local sources. Submit only after the route accepts the product type and the budget still makes sense. Keep the parcel record, declared contents, route terms and tracking number together.",
        ],
      },
      {
        heading: "Understand forwarding and inspection boundaries",
        paragraphs: [
          "PikoBuy's shipping terms describe a separate forwarding process for goods sent to its warehouse: obtain the warehouse address, submit the forwarding form, wait for warehouse receipt and photo confirmation, then submit the parcel and pay shipping. The terms say forwarded goods must be unpacked and inspected, but they also place responsibility for missing inbound items on the sender when the loss was not caused by PikoBuy.",
          "The same page says PikoBuy does not provide after-sales service for forwarded products and can only assist with shipping goods back to the seller or sender. That distinction should influence what you forward. Keep seller contact details and purchase evidence, and resolve any ambiguity about model or quantity before the product leaves the original seller whenever possible.",
        ],
      },
      {
        heading: "Track the parcel without inventing certainty",
        paragraphs: [
          "PikoBuy's beginner guide says tracking information will be available within three days after shipment. A missing first scan during that window is therefore not, by itself, evidence of loss. Record the dispatch date, route and tracking number, then check the carrier history at sensible intervals instead of repeatedly changing the conclusion from one blank screen.",
          "Once tracking begins, distinguish a normal handover gap from a prolonged exception. Delivery estimates can be affected by customs processing, carrier transfer, public holidays and peak seasons. If the parcel exceeds the live route's expected range, contact support with the parcel number and screenshots. Keep the wording factual: describe the last scan and elapsed time, not an unsupported claim about where the parcel must be.",
        ],
      },
      {
        heading: "Use a landed-cost worksheet",
        paragraphs: [
          "For a more realistic decision, record product price, domestic delivery, return-risk allowance, international shipping estimate, payment or service charges shown at checkout, and possible destination duties or taxes. Do not add charges that are not actually displayed, but do not omit a category merely because the amount is not known yet. Mark it as pending and update the worksheet when the live platform provides the figure.",
          "The worksheet is most valuable as a comparison tool. It can show that a slightly more expensive product with smaller packed dimensions is cheaper to land, or that removing packaging saves little compared with the protection it provides. The result is still a planning range, but it is a transparent range built from observable inputs rather than a persuasive price-per-kilogram headline.",
        ],
      },
    ],
    sources: [
      { label: "PikoBuy official shipping estimator", href: "/sources#pikobuy-sources" },
      { label: "PikoBuy shipping terms", href: "/sources#pikobuy-sources" },
      { label: "PikoBuy beginner guide", href: "/sources#pikobuy-sources" },
    ],
  },
  {
    slug: "pikobuy-eu-vat-customs-preparation",
    eyebrow: "EU customs planning",
    title: "PikoBuy EU VAT and Customs Preparation Guide for 2026",
    seoTitle: "PikoBuy EU VAT & Customs Guide",
    description: "Prepare a PikoBuy parcel for EU VAT and customs with truthful records, a document checklist, cost scenarios and the new low-value import duty from July 2026.",
    readTime: "12 min read",
    updated: "Published 30 August 2026",
    publishedDate: "2026-08-30",
    modifiedDate: "2026-08-30",
    editorialNote: "Independent educational guidance based on PikoBuy's public terms and European Commission customs material checked on 30 August 2026. It is not tax, customs or legal advice, and it does not confirm the treatment of any particular parcel.",
    visual: {
      src: "/pikobuy-eu-customs-preparation-flow.svg",
      alt: "Five-step preparation flow for a PikoBuy parcel entering the European Union, from item records to customs documents and a landed-cost reserve",
      caption: "Original EU parcel-preparation flow. The exact route, destination authority and customs declaration remain controlling; this diagram is a record-keeping checklist, not a clearance promise.",
    },
    intro: [
      "Preparing a PikoBuy parcel for Europe is no longer as simple as asking whether it is below €150. Import VAT has applied to low-value commercial goods since July 2021, and the European Commission confirms that a temporary €3 customs duty began on 1 July 2026 for items in distance-sale consignments worth no more than €150. The €3 is calculated per tariff-classification item, not automatically once per parcel or once per physical unit.",
      "PikoBuy's Terms of Service separately warns that cross-border transactions may create duties, taxes, brokerage fees and other charges, with the user responsible for those costs. Its User Registration Agreement says a recipient may be asked for invoices or customs-clearance documents and that PikoBuy does not guarantee customs clearance. Those statements make preparation a buyer task rather than a promise attached to a route name.",
      "This guide focuses on the work that can be done before dispatch: preserve an accurate product and payment record, understand which value is being discussed, confirm how VAT is handled for the chosen route, and keep a reserve for costs that the international freight quote does not prove are included.",
    ],
    sections: [
      {
        heading: "Separate VAT, customs duty and carrier charges",
        paragraphs: [
          "Three different amounts are often collapsed into the word customs. Import VAT is a consumption tax. Customs duty is a tariff charge governed by the nature, origin and value of the goods, including the temporary low-value rule described below. A postal operator or courier may also charge a presentation, brokerage or handling fee for completing or advancing the import process. One amount does not automatically include the others.",
          "PikoBuy's public terms do not establish one universal tax-inclusive service for every European route. They say duties, taxes, brokerage and other cross-border charges may occur. Therefore, do not treat a shipping quote as a delivered-duty-paid total unless the live route terms and payment breakdown for your parcel clearly state what is included. A route nickname or an old community screenshot is not enough evidence.",
          "Before paying for shipping, create four separate rows: international freight and PikoBuy charges; VAT already collected or still potentially due; customs duty; and carrier or customs-handling costs. Label an amount as zero only when current evidence supports zero. Otherwise mark it pending and keep a reserve.",
        ],
      },
      {
        heading: "Apply the July 2026 low-value rule accurately",
        paragraphs: [
          "The European Commission's guidance, last updated on 20 July 2026, says a temporary €3 customs duty applies from 1 July 2026 until 1 July 2028 to distance-sale goods in consignments valued up to €150, regardless of whether VAT is handled through IOSS, special arrangements or standard VAT. It replaced the earlier customs-duty relief that many older guides still describe.",
          "The charge is per item based on tariff classification, not simply per parcel and not necessarily per physical piece. The Commission's example treats five T-shirts as one tariff item and charges €3, while a T-shirt and a watch are two tariff items and attract €6. Classification matters, so a mixed parcel can produce a different result from a parcel containing several identical products.",
          "The declarant—such as the seller, importer, IOSS holder, special-arrangements user or representative—is generally responsible for paying this duty. That does not prove that the cost is invisible to the shopper or included in a PikoBuy payment. Check the actual route breakdown, carrier notice and import documents. The Commission also distinguishes this duty from a proposed EU handling fee whose amount and application date were still to be determined in its published guidance; do not add an invented handling-fee number to a budget.",
          "For consignments above €150, do not extend the temporary flat-duty example. The normal tariff framework may apply, and the rate depends on classification and origin. Use the destination customs authority or EU tariff resources for the actual goods rather than guessing a percentage.",
        ],
      },
      {
        heading: "Understand the VAT base before estimating",
        paragraphs: [
          "EU guidance says import VAT is calculated on the customs value plus duties, taxes and other charges, as well as incidental expenses not already included in the customs value. Those incidental expenses can include commission, packing, transport and insurance up to the first destination in the EU country of importation. Multiplying the product-card price alone by a VAT rate can therefore understate the taxable amount.",
          "The VAT rate is destination-specific and can also depend on the product. Avoid putting one Europe-wide percentage in a PikoBuy worksheet. Confirm the current rate and any special treatment with the destination country's official tax or customs authority. The transaction value—the total paid or payable for the imported goods—is the main customs-valuation method, subject to additions and deductions under customs rules.",
        ],
      },
      {
        heading: "Do not assume PikoBuy uses IOSS for your parcel",
        paragraphs: [
          "The Import One Stop Shop is an EU mechanism through which eligible sellers or platforms can declare and pay VAT on distance sales of imported goods in consignments not exceeding €150. EU customs guidance also describes special arrangements and standard import VAT collection. These are alternative compliance routes, not a coupon that the shopper can attach after dispatch.",
          "The PikoBuy pages reviewed for this article do not publicly prove that every European route uses IOSS, name an IOSS intermediary, or state that VAT is universally collected at checkout. Accordingly, this guide does not claim that PikoBuy is IOSS-registered or that a particular line is tax prepaid. Look for an explicit VAT line on the live payment breakdown and retain the invoice or electronic record that identifies how VAT was handled.",
        ],
      },
      {
        heading: "Build a truthful customs document pack",
        paragraphs: [
          "PikoBuy says customs may contact the recipient for invoices or clearance documents, particularly when a parcel is considered unusual, oversized, overweight or sensitive. Prepare the file before dispatch rather than searching after a deadline. Keep the product order, seller page or item description, selected variants and quantities, payment confirmation, domestic and international shipping records, warehouse or parcel number, carrier tracking number and any VAT evidence.",
          "Descriptions should be specific enough to identify the goods: for example, 'two cotton T-shirts' is more useful than 'gift' or 'accessories.' Keep the genuine price, quantity, material and intended use when known. Do not ask for a false value, misleading gift label, split description or incorrect category to reduce charges. Under-declaration can delay a parcel, trigger evidence requests and create legal or financial consequences.",
          "Check names and addresses across the order, parcel and identity document before shipment. If the destination authority or carrier asks for an identification or tax number, use the current official instructions and a secure submission channel. Do not send sensitive documents to an address copied from an unsolicited message without verifying the carrier or authority.",
        ],
        bullets: [
          "Exact item description, material or model where relevant, quantity and true purchase value",
          "Order confirmation, payment evidence and seller or source record",
          "PikoBuy parcel number, route record, shipping payment and tracking number",
          "Evidence of VAT collection only when it is actually shown",
          "Destination contact details and any document request from a verified authority or carrier",
        ],
      },
      {
        heading: "Screen product compliance before submitting the parcel",
        paragraphs: [
          "Paying VAT and duty does not make prohibited, unsafe or non-compliant goods importable. PikoBuy's terms prohibit counterfeit and intellectual-property-infringing products. Its agreement also warns about customs risks for goods such as liquids, powders, batteries, food and medicine and says shoppers are responsible for understanding prohibited items and destination laws.",
          "Check the destination rules for the actual product, not only the shipping route's ability to accept it at origin. Cosmetics, electronics, toys, protective equipment, food products, medicines and goods using protected marks can require licences, safety evidence, labelling or other compliance. A seller listing, warehouse photo or available route does not certify EU product compliance.",
        ],
      },
      {
        heading: "Use a final pre-dispatch decision checklist",
        paragraphs: [
          "First, confirm that every item in the parcel matches the order and is lawful to export and import. Second, save the true value, quantity, description and payment evidence. Third, review the live route—not a remembered route name—for its accepted product types, billing method and any explicit VAT or duty statement. Fourth, calculate a landed-cost range with separate VAT, duty and possible carrier-fee rows.",
          "Proceed only if the high scenario remains affordable and the document pack is complete. Clarify before dispatch if the payment page and route wording disagree, the VAT treatment is not understandable, or the product needs compliance evidence you do not have. Reject or return the item when import legality is doubtful or a truthful declaration cannot be made.",
          "After dispatch, keep the customs file until delivery and any appeal or return period has ended. If contacted, respond with consistent documents and describe what is observable rather than speculating. Customs decisions belong to the destination authority, so no independent guide, agent or carrier can guarantee clearance.",
        ],
      },
    ],
    internalLinks: [
      { label: "Estimate the complete PikoBuy cost", href: "/pikobuy-fees-total-cost", note: "Add VAT, duty and carrier charges as separate rows in the broader landed-cost worksheet." },
      { label: "Compare PikoBuy shipping inputs for Europe", href: "/pikobuy-shipping-europe", note: "Build the freight estimate from destination, product type, weight and outside parcel dimensions." },
      { label: "Review the warehouse QC guide", href: "/pikobuy-qc-photo-guide", note: "Confirm item identity and visible condition before paying for international dispatch." },
      { label: "Check returns before international shipping", href: "/pikobuy-return-policy", note: "Understand the published warehouse window and limitations if an item should not be shipped." },
    ],
    faqHeading: "PikoBuy VAT and customs questions for Europe",
    faq: [
      {
        question: "Are PikoBuy parcels under €150 customs-duty free in the EU?",
        answer: "Not as a general rule after 1 July 2026. European Commission guidance says a temporary €3 customs duty applies per tariff-classification item to distance-sale consignments up to €150 until 1 July 2028, with limited exceptions. Check the actual declaration and current destination guidance.",
      },
      {
        question: "Does PikoBuy collect EU VAT through IOSS?",
        answer: "The public PikoBuy pages reviewed on 30 August 2026 did not establish universal IOSS use for European routes. Check the live payment breakdown and retain explicit VAT or import documentation rather than assuming that VAT is prepaid.",
      },
      {
        question: "What documents should I keep for PikoBuy customs clearance?",
        answer: "Keep the exact item description, quantity and genuine value, order and payment evidence, source listing, parcel and shipping records, tracking number, and any explicit VAT record. Follow verified requests from the destination authority or carrier for additional documents.",
      },
      {
        question: "Can PikoBuy guarantee that a parcel clears EU customs?",
        answer: "No. PikoBuy's User Registration Agreement says it makes no customs-clearance promise or guarantee. The destination authority applies the law to the actual goods and declaration.",
      },
    ],
    sources: [
      { label: "PikoBuy Terms of Service", href: "/sources#pikobuy-sources" },
      { label: "PikoBuy User Registration Agreement", href: "/sources#pikobuy-sources" },
      { label: "PikoBuy official beginner guide", href: "/sources#pikobuy-sources" },
      { label: "European Commission low-value import guidance", href: "/sources#eu-customs-sources" },
      { label: "European Commission VAT and customs guidance", href: "/sources#eu-customs-sources" },
    ],
  },
  {
    slug: "pikobuy-return-policy",
    eyebrow: "Returns explained",
    title: "PikoBuy 5-Day Return Policy: Timing, Eligibility and Fees",
    description: "A plain-English explanation of the published warehouse return window and important exclusions.",
    readTime: "13 min read",
    updated: "Verified 22 August 2026",
    intro: [
      "PikoBuy's published Returns & Exchanges page describes a five-day return service for eligible products after warehouse entry. The policy is more conditional than the headline sounds: seller participation, resale condition, category exclusions, packaging and timing can all affect the result.",
      "This guide summarises the current public wording for research. The policy displayed in your account and the seller's decision govern an actual order, so always verify the current terms before acting.",
      "The safest way to use the policy is to prepare before buying and act quickly after warehouse intake. Save the seller's return information, avoid irreversible packaging requests until inspection is complete, and review warehouse photos as soon as they appear. When a problem exists, describe it with the order option and the relevant image rather than relying on a general complaint.",
    ],
    sections: [
      {
        heading: "The 120-hour warehouse clock",
        paragraphs: [
          "The official policy says a return application should be submitted within five days after the order status changes to In Warehouse, counted as 120 hours from the next hour after that status change. Applications after the period may not be accepted.",
          "Review QC photos and measurements as soon as they appear. Do not wait until every item in a future consolidated parcel has arrived before deciding whether the first item is acceptable.",
          "PikoBuy explains the clock precisely: the five-day period is 120 hours, counted from the next hour after the status changes to In Warehouse. This detail matters because 'five days' should not be interpreted as five convenient business days or as a deadline that begins when the shopper first notices the photographs. Record the status-change time and set an earlier internal deadline for your own review.",
          "The policy also describes the service as a seller-provided third-party platform guarantee. PikoBuy can process the request and communicate, but an actual return still depends on the product, seller rules and current order state. If the deadline is close, submit a clear request through the available order page instead of waiting for a consolidated parcel plan or a later general enquiry.",
        ],
      },
      {
        heading: "Eligibility is not automatic",
        paragraphs: [
          "An item generally needs a seller return guarantee, resale condition and no more than five days in the warehouse. Custom products, intimate apparel, food, second-hand goods and other seller-specified categories can be excluded. Removing labels, packaging or accessories at the user's request may also affect eligibility.",
          "Even when PikoBuy communicates with the seller, the official policy notes that a return can depend on seller consent. A spreadsheet or product card should never label every item as freely returnable.",
          "The official page divides products into returnable and not returnable. A returnable item must meet all listed conditions: the seller offers the guarantee, the product remains in the resale condition the seller requires, and warehouse time is no more than five days. That is a combined test. Meeting the time limit alone does not make a customised, opened or otherwise excluded product eligible.",
          "Published examples of categories that may not qualify include customised goods, second-hand products, goods from outside mainland China, intimate apparel, adult products, food, certain bulk book orders and other items separately specified by the seller. Products whose packaging, labels or accessories were removed at the user's request are also listed. Treat these as reasons to check the current product and seller rule before ordering, not as an excuse to assume every item in a category will receive the same decision.",
        ],
      },
      {
        heading: "Understand the possible cost",
        paragraphs: [
          "For an unconditional return without a product quality issue, the published formula includes shipping back to the seller, the seller's original shipping fee and an RMB 5 service fee. The policy also warns that a buyer may need to pay the original delivery charge even when the seller advertised free shipping.",
          "Where the seller shipped the wrong item or a verified quality issue exists, the seller would normally bear return costs, although the published policy still describes exceptions where a seller insists otherwise.",
          "Responsibility should be selected according to the actual situation. The policy gives customer-responsibility examples such as no longer wanting the product, ordering the wrong item or finding that international shipping exceeds the budget. It gives seller-responsibility examples such as sending the wrong colour or size and verified quality issues such as holes or stains. The evidence and seller's response can affect the final classification.",
          "For a customer-choice return after warehouse arrival, the published formula is shipping back to the seller plus the seller's original shipping fee plus RMB 5. The page warns that the original delivery charge may still be payable even when the seller advertised free shipping. The total refund is based on the product price actually paid, and the account needs enough balance to cover the relevant return and service costs.",
        ],
      },
      {
        heading: "Build return checks into product research",
        paragraphs: [
          "Before ordering, look for seller return information, category exclusions and whether you are likely to request packaging removal. After arrival, compare the ordered option, QC photos and measurements immediately. Keep screenshots and use a reason that accurately describes the problem.",
          "Build the return check into the purchase record. Save the source link, selected option, size chart, seller promise and any packaging or customisation request. After warehouse intake, compare the order record with the photographs in a fixed sequence: identity, quantity, option, visible condition and measurements. If the item is acceptable, approve it; if not, write a concise factual description and attach the clearest evidence available.",
          "Avoid overclaiming. A warehouse image can support a statement that a visible stain exists or that the size label differs from the order. It usually cannot prove how the garment feels, how an electronic device will perform over time or whether an item is authentic. Select the most accurate reason and separate objective evidence from disappointment or preference.",
        ],
      },
      {
        heading: "Protect resale condition and special packaging",
        paragraphs: [
          "PikoBuy publishes special standards for categories where seals, tags or packaging affect resale. New sneakers may need anti-theft buckles and tamper-proof stickers intact. Sealed personal-care goods, fragrances, cosmetics, pet products and similar categories may need their disposable packaging unopened. Certain digital products must show no water damage and retain required licensing labels, while cameras, components, games, collectables and books have their own conditions.",
          "The practical rule is simple: do not request label removal, packaging disposal, product installation or unnecessary opening until the return decision is complete. If a basic visual check can be done without breaking a seal, preserve the seal. When additional inspection would change the product's resale condition, ask support how that action affects eligibility before approving it.",
        ],
      },
      {
        heading: "Submit a request that can be assessed",
        paragraphs: [
          "A useful return request identifies the order, exact variant, warehouse status time, requested outcome and evidence. Point to the photograph showing the mismatch or defect and state what was ordered versus what arrived. Keep the language neutral. A precise comparison gives support and the seller something concrete to assess, while a vague statement such as 'bad quality' may not identify a policy-relevant issue.",
          "PikoBuy says it can only return a product with the seller's consent. For orders not covered by the guarantee, the official FAQ says PikoBuy will verify a claimed quality issue and communicate with the seller; if no quality issue exists, the standard return service may not be available, though PikoBuy says it will try to communicate. This is assistance, not an assurance that the seller will accept every request.",
        ],
      },
      {
        heading: "Prevent avoidable return losses",
        paragraphs: [
          "Many return problems can be reduced before payment. Compare measurements rather than relying only on familiar size labels, read option text literally, confirm the seller's current return promise, and estimate international shipping before buying a bulky item. A return prompted by an unexpectedly high shipping quote is listed by PikoBuy as a customer-responsibility situation, so early parcel planning has a direct after-sales value.",
          "Finally, recheck the current policy for every new order. Deadlines, fees, seller terms and category standards can change. This article records PikoBuy's public wording verified on 22 August 2026, but the live order page and current policy control the practical decision. Keep the evidence, act before the internal deadline and do not remove packaging until the item is accepted.",
        ],
      },
    ],
    sources: [
      { label: "PikoBuy official Returns & Exchanges", href: "/sources#pikobuy-sources" },
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
