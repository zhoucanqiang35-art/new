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
  description: string;
  readTime: string;
  updated: string;
  intro: string[];
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  sources: { label: string; href: string }[];
};

export const guides: Guide[] = [
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
