export type RankingPageEntry = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  intro: string;
  keyFacts: string[];
  sections: Array<{
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }>;
  faqs: Array<{ question: string; answer: string }>;
  related: string[];
  mainUrl: string;
  mainLabel: string;
};

const official = {
  guide: "pikobuy.com/guide",
  estimator: "pikobuy.com/shipping-cost",
  shipping: "pikobuy.com/protocol/shipping",
  returns: "pikobuy.com/protocol/returns",
  about: "pikobuy.com/about",
};

const sharedFaqs = [
  {
    question: "Is Pikobuyy the official Pikobuy website?",
    answer:
      "No. Pikobuyy is an independent product-research directory. Pikobuy provides the purchasing, warehouse and international forwarding service described on pikobuy.com.",
  },
  {
    question: "Are spreadsheet prices guaranteed?",
    answer:
      "No. A spreadsheet records a listed or reference price. The current seller page and the actual purchase determine the available option and final product price.",
  },
  {
    question: "Does a warehouse photo prove authenticity or quality?",
    answer:
      "No. Warehouse photos can help confirm the received variant and visible condition. They cannot prove authenticity, material composition, comfort, internal construction or long-term durability.",
  },
];

export const rankingEntries: Record<string, RankingPageEntry> = {
  "pikobuy-spreadsheet": {
    slug: "pikobuy-spreadsheet",
    title: "Pikobuy Spreadsheet 2026",
    description:
      "Browse the Pikobuy spreadsheet for Taobao, Weidian and 1688 finds, with categories, listed prices, QC notes and fact-checked shopping guides updated for July 2026.",
    eyebrow: "Main ranking guide · Fact-checked July 30, 2026",
    intro:
      "This Pikobuy spreadsheet is an independent research layer for product discovery. It organizes finds by category, preserves useful price and source context, and explains what to check before a listing becomes an order. It does not replace the current seller page, Pikobuy’s warehouse evidence or the route quote shown for a real parcel.",
    keyFacts: [
      "Pikobuy’s official guide separates product payment from later international-shipping payment.",
      "The official shipping estimator requires destination, product type, weight, length, width and height.",
      "Pikobuy says warehouse arrivals are inspected and photographed, but its shipping policy excludes professional inspection for special and professional products.",
      "An eligible return request generally has a 120-hour window beginning from the next hour after the order becomes “Warehoused.”",
    ],
    sections: [
      {
        heading: "What a useful Pikobuy spreadsheet does",
        paragraphs: [
          "A useful spreadsheet is more than a page of product links. It should tell a visitor what kind of item a link represents, where the source leads, which listed option produced the visible price, when the information was reviewed and what evidence still needs to be checked. That structure turns a large marketplace into a smaller, comparable shortlist.",
          "Pikobuy’s public About page says the platform helps global shoppers access marketplaces including Taobao, 1688 and Weidian. Its beginner guide also names Tmall and Yupoo in the product-selection step. The spreadsheet belongs before that official order workflow: discover and compare here, then verify the exact seller, option, availability and current price before submitting anything.",
        ],
        bullets: [
          "Category and product name",
          "Current source path and product identifier where available",
          "Listed CNY price with a dated USD reference—not a guaranteed checkout price",
          "Product-type checks for measurements, construction and visible condition",
          "A clear path to the live product directory on findspreadsheet.com",
        ],
      },
      {
        heading: "How to use the spreadsheet without losing the source",
        paragraphs: [
          "Begin with one category and one use case. A general search for “shoes” can produce hundreds of visually similar results; a shortlist based on style, size evidence, material description and budget is easier to verify. Open the Pikobuyy product review first, record the seller or product identifier, then open the exact find on the main directory.",
          "Pikobuy’s official guide tells users to confirm style, color and size, save product or store information, and paste a product link or keywords into Pikobuy. It then separates “Submit And Pay” from the later “Pay Shipping” step. Preserve the source and selected option before the first payment so the warehouse arrival can be compared with what was actually requested.",
        ],
      },
      {
        heading: "QC notes: what the photos can and cannot establish",
        paragraphs: [
          "The official guide says Pikobuy inspects, checks in and photographs a product after it reaches the warehouse. Use those photos to confirm the model, color, size label, quantity and visible condition. For shoes, compare shape, panel alignment, outsole, heel and size markings. For apparel, compare measurements, print placement, seams, cuffs and visible fabric weight. For bags, compare overall shape, hardware placement, stitching and measurements.",
          "Keep the limits explicit. Pikobuy’s shipping policy says special and professional products cannot receive professional inspection and directs users to inspection photos or additional detailed photos. A photograph cannot establish authenticity, fiber composition, battery health, waterproofing, comfort or durability. Request an extra image only when a missing angle or measurement would change the decision.",
        ],
      },
      {
        heading: "Shipping cost needs parcel data, not a copied rate",
        paragraphs: [
          "Pikobuy’s estimator asks for destination, product type, weight, length, width and height. Its guide says routes differ in delivery time and billing method. Those official inputs are why this site does not invent one price per kilogram or one delivery time for every country.",
          "Make an early estimate before ordering, but replace it with warehouse measurements after the real items arrive and the packaging plan is known. Compare eligible routes, billing basis, restrictions, tracking and protection. Product price, seller-to-warehouse delivery, optional photos or packaging, international shipping and possible return costs should remain separate lines in the budget.",
        ],
      },
      {
        heading: "Returns: review warehouse evidence quickly",
        paragraphs: [
          "Pikobuy’s returns page says an eligible request can be made within five days after the status becomes “Warehoused,” beginning from the next hour and totalling 120 hours. Eligibility still depends on the seller offering the guarantee, the item remaining marketable and category-specific packaging or condition rules.",
          "The same page states that an unconditional return can include shipping to the seller, shipping from the seller and a 5 RMB service fee. It also says Pikobuy can return the item only when the seller agrees. Do not describe this as universal free returns, and do not remove tags, seals or protective packaging before checking whether that action could affect eligibility.",
        ],
      },
      {
        heading: "Source record",
        paragraphs: [
          `Official pages reviewed on July 30, 2026: ${official.about}, ${official.guide}, ${official.estimator}, ${official.shipping} and ${official.returns}. Official process statements are kept separate from Pikobuyy’s independent comparison advice.`,
          "Marketplace listings, routes, eligibility and policies can change. The current product page, live parcel estimator and the user’s order page remain the final sources for a real transaction.",
        ],
      },
    ],
    faqs: [
      ...sharedFaqs,
      {
        question: "How often should a Pikobuy spreadsheet be checked?",
        answer:
          "Check the destination before every order. Seller images, variants, prices and availability can change even when the saved URL stays the same.",
      },
      {
        question: "Where do the category and product buttons go?",
        answer:
          "They lead to the corresponding live category, product or search result on findspreadsheet.com so visitors can continue in the main product directory.",
      },
    ],
    related: [
      "how-to-use-pikobuy-spreadsheet",
      "pikobuy-qc-photo-guide",
      "pikobuy-shipping-guide",
      "is-pikobuy-safe",
    ],
    mainUrl: "https://findspreadsheet.com/AllProducts/",
    mainLabel: "Browse all current finds",
  },
  "pikobuy-spreadsheet-shoes": {
    slug: "pikobuy-spreadsheet-shoes",
    title: "Pikobuy Spreadsheet Shoes: 2026 QC Checklist",
    description:
      "Use a practical Pikobuy shoes spreadsheet workflow for source checks, size evidence, warehouse photos, packaging and shipping estimates.",
    eyebrow: "Category guide · Shoes",
    intro:
      "A shoe find should be evaluated as a source, a selected size and an actual warehouse arrival—not from one promotional image. This page explains the evidence to preserve and the checks that reduce avoidable mistakes.",
    keyFacts: [
      "Confirm the exact model, color and size before the first product payment.",
      "Warehouse photos help with visible shape, alignment and condition but cannot prove comfort or authenticity.",
      "A shoe box can materially change parcel dimensions and volumetric billing.",
      "New-sneaker return standards can require anti-theft clasps and anti-damage stickers to remain intact.",
    ],
    sections: [
      {
        heading: "Build the shortlist from measurable details",
        paragraphs: [
          "Start with the intended silhouette, color, use and seller measurements. Letter or regional sizes are not enough on their own. Save the source, selected option and any insole or outsole measurement the seller provides. The official Pikobuy guide specifically tells users to confirm style, color and size and to save product or store information.",
          "A listed price is context, not a guaranteed total. Check whether it belongs to the selected size and color, then keep domestic seller delivery and international parcel cost separate.",
        ],
      },
      {
        heading: "Read warehouse shoe photos in a fixed order",
        paragraphs: [
          "Confirm identity first: model, color, pair count, size label and included accessories. Then compare shape, toe profile, panel alignment, heel height, outsole pattern, stitching and visible marks. Ask for a measurement photo when size evidence is decisive and the standard set does not show it.",
          "Do not infer comfort, material composition, internal construction or authenticity from warehouse images. Pikobuy’s shipping policy explicitly limits professional inspection for special and professional products.",
        ],
      },
      {
        heading: "Protect return eligibility and estimate the parcel",
        paragraphs: [
          "Review photos promptly. Pikobuy’s return rules describe a 120-hour eligible-request window beginning from the next hour after “Warehoused,” while seller rules and marketable condition still apply. For new sneakers, the same page lists intact anti-theft clasps and anti-damage stickers among special standards.",
          "Estimate shipping with and without the box if both packaging choices are available. Use destination, product type, measured weight and measured dimensions in the live estimator. Removing a box may reduce volume, but it can also reduce protection; make that trade-off deliberately.",
        ],
      },
      {
        heading: "Official record checked",
        paragraphs: [
          `Facts checked against ${official.guide}, ${official.estimator}, ${official.shipping} and ${official.returns} on July 30, 2026.`,
        ],
      },
    ],
    faqs: sharedFaqs,
    related: ["pikobuy-spreadsheet", "pikobuy-qc-photo-guide", "pikobuy-shipping-guide"],
    mainUrl: "https://findspreadsheet.com/shoes/",
    mainLabel: "Open current shoe finds",
  },
  "pikobuy-spreadsheet-hoodies": {
    slug: "pikobuy-spreadsheet-hoodies",
    title: "Pikobuy Spreadsheet Hoodies: Measurements & QC",
    description:
      "Compare Pikobuy hoodie finds with a practical checklist for measurements, print placement, warehouse photos and parcel planning.",
    eyebrow: "Category guide · Hoodies and sweaters",
    intro:
      "Hoodie listings often look similar while fit, measurements, fabric weight and print placement differ. Preserve the intended option and use warehouse evidence to check the received unit instead of relying on the listing hero image.",
    keyFacts: [
      "Seller measurements are more useful than a familiar letter size.",
      "Warehouse photos can show print placement, seams and visible condition.",
      "Photos cannot prove fiber composition, weight or long-term shrinkage.",
      "Parcel cost changes with the measured garment and packaging.",
    ],
    sections: [
      {
        heading: "Record the option before ordering",
        paragraphs: [
          "Save color, marked size, seller measurements and the specific graphic or blank version. Compare chest width, body length, sleeve length and shoulder width when provided. If the seller uses a different measurement method, do not treat two size charts as directly interchangeable.",
          "Pikobuy’s guide places option selection before the first payment and says the final price is based on actual purchasing. Recheck the order summary rather than assuming the spreadsheet card controls the transaction.",
        ],
      },
      {
        heading: "QC checks for hoodies and sweaters",
        paragraphs: [
          "Confirm the selected color and size label, then inspect print position, embroidery alignment, seam condition, cuff and waistband shape, zipper line, drawstring, pockets and obvious marks. A tape-measure photo can reduce uncertainty when the listing chart and received label do not tell the same story.",
          "Keep the evidence boundary clear. A photo does not prove fabric composition, grams per square metre, warmth, comfort, colorfastness or durability. Use visible evidence only for visible claims.",
        ],
      },
      {
        heading: "Plan volume as well as weight",
        paragraphs: [
          "A single hoodie may compress, but reinforcement or combined items can increase dimensions. Pikobuy’s estimator requires destination, type, weight and all three dimensions. Make an early estimate, then recalculate after the warehouse reports the actual parcel.",
        ],
      },
      {
        heading: "Official record checked",
        paragraphs: [
          `Facts checked against ${official.guide}, ${official.estimator}, ${official.shipping} and ${official.returns} on July 30, 2026.`,
        ],
      },
    ],
    faqs: sharedFaqs,
    related: ["pikobuy-spreadsheet", "pikobuy-qc-photo-guide", "pikobuy-shipping-guide"],
    mainUrl: "https://findspreadsheet.com/hoodies-sweaters/",
    mainLabel: "Open current hoodie finds",
  },
  "pikobuy-spreadsheet-bags": {
    slug: "pikobuy-spreadsheet-bags",
    title: "Pikobuy Spreadsheet Bags: Source & QC Guide",
    description:
      "Research Pikobuy bag finds with checks for dimensions, shape, hardware, warehouse photos, packaging and current links.",
    eyebrow: "Category guide · Bags",
    intro:
      "Bag research should preserve dimensions, intended color and visible construction details. Warehouse images can confirm the received unit’s visible condition, while the live listing and parcel quote remain the final sources for options and cost.",
    keyFacts: [
      "Record dimensions and the selected color or material description before ordering.",
      "Inspect visible shape, seams, edges, handles, hardware and closure alignment.",
      "Warehouse photos do not prove material composition or authenticity.",
      "Structured packaging can increase parcel dimensions and billable volume.",
    ],
    sections: [
      {
        heading: "Shortlist by use and dimensions",
        paragraphs: [
          "Begin with the intended use, carried items and required dimensions. Save the seller’s width, height, depth and strap information when available. Confirm whether the visible price belongs to the exact size or color you want.",
          "The Pikobuy guide tells users to save product or store information and select the exact option before submitting and paying. Preserve that record so a similar-looking warehouse arrival can be checked against the intended listing.",
        ],
      },
      {
        heading: "Visible QC checks",
        paragraphs: [
          "Confirm color, size and included accessories. Compare the overall silhouette, panel symmetry, edge finish, stitching, handle attachment, hardware placement, zipper or closure line, interior layout and visible marks. Request one decisive detail image when the standard set misses a closure, label or measurement that changes the decision.",
          "Do not turn visual similarity into an authenticity claim. Photos cannot prove composition, coating, hardware durability, water resistance or long-term wear.",
        ],
      },
      {
        heading: "Packaging affects the shipping quote",
        paragraphs: [
          "A structured bag may need internal support or reinforcement, while a soft bag may compress. Pikobuy’s guide says minimal or reinforced packaging can be requested and its estimator requires parcel dimensions. Compare protection and volume after the warehouse measurements are known.",
        ],
      },
      {
        heading: "Official record checked",
        paragraphs: [
          `Facts checked against ${official.guide}, ${official.estimator}, ${official.shipping} and ${official.returns} on July 30, 2026.`,
        ],
      },
    ],
    faqs: sharedFaqs,
    related: ["pikobuy-spreadsheet", "pikobuy-qc-photo-guide", "pikobuy-shipping-guide"],
    mainUrl: "https://findspreadsheet.com/search.html?keywords=bags&channelid=2",
    mainLabel: "Search current bag finds",
  },
  "pikobuy-qc-photo-guide": {
    slug: "pikobuy-qc-photo-guide",
    title: "Pikobuy QC Photo Guide 2026",
    description:
      "Use Pikobuy warehouse photos to confirm the ordered variant, visible condition and measurements without treating photos as professional authentication.",
    eyebrow: "Warehouse evidence guide",
    intro:
      "Pikobuy’s official guide says staff inspect, check in and photograph items after they arrive at the warehouse. The useful question is not whether a photo looks good; it is which decision the visible evidence can support.",
    keyFacts: [
      "Check identity before cosmetic detail: model, color, size, quantity and accessories.",
      "Use photos for visible condition and measurements.",
      "Special and professional products do not receive professional inspection under Pikobuy’s shipping policy.",
      "Review evidence early because eligible returns are time-limited and condition-dependent.",
    ],
    sections: [
      {
        heading: "A repeatable four-pass review",
        paragraphs: [
          "First compare the warehouse arrival with the order: product type, selected option, color, size label, quantity and included parts. Second review visible condition: stains, holes, tears, scratches, broken edges, seam problems and obvious asymmetry. Third compare category-specific construction. Fourth identify one missing view or measurement that would actually change the decision.",
          "A repeatable order is safer than jumping between random close-ups. Keep the saved seller image and order summary beside the warehouse set so the comparison uses evidence rather than memory.",
        ],
        bullets: [
          "Identity and ordered option",
          "Visible defects and damage",
          "Measurements or labels",
          "One decisive missing angle",
        ],
      },
      {
        heading: "What photos cannot prove",
        paragraphs: [
          "Pikobuy’s shipping policy says special and professional products cannot receive professional inspection and tells users to use inspection photos or purchase additional detailed photos. That is a clear boundary. A warehouse image cannot prove authenticity, material chemistry, internal electronics safety, battery condition, waterproofing, comfort or long-term durability.",
          "State only what is visible. “The left seam appears uneven in this image” is supportable. “This item is authentic and will last for years” is not.",
        ],
      },
      {
        heading: "Extra photos should answer a decision",
        paragraphs: [
          "Request a tape measurement, size label, sole, hardware close-up, model sticker or missing reverse view when it resolves a specific uncertainty. Avoid paying for random close-ups that do not alter the keep-or-return decision.",
          "Before requesting opened packaging, removed tags or disturbed seals, check the current return requirements. Pikobuy lists categories whose packaging, labels, anti-theft clasps, anti-damage stickers or seals must remain intact.",
        ],
      },
      {
        heading: "Act within the applicable return window",
        paragraphs: [
          "Pikobuy’s returns page describes an eligible request within 120 hours beginning from the next hour after “Warehoused.” It also requires seller eligibility and marketable condition. The page says Pikobuy can return a product only when the seller agrees. Review the actual order promptly and use official support for a live case.",
        ],
      },
      {
        heading: "Official record checked",
        paragraphs: [
          `Facts checked against ${official.guide}, ${official.shipping} and ${official.returns} on July 30, 2026.`,
        ],
      },
    ],
    faqs: sharedFaqs,
    related: ["pikobuy-spreadsheet", "how-to-use-pikobuy-spreadsheet", "pikobuy-shipping-guide"],
    mainUrl: "https://findspreadsheet.com/AllProducts/",
    mainLabel: "Choose a product to research",
  },
  "how-to-use-pikobuy-spreadsheet": {
    slug: "how-to-use-pikobuy-spreadsheet",
    title: "How to Use a Pikobuy Spreadsheet in 2026",
    description:
      "Follow a source-backed Pikobuy spreadsheet workflow from category shortlist and exact option to warehouse QC and international shipping.",
    eyebrow: "Beginner workflow",
    intro:
      "Use the spreadsheet as a research record, then follow the current official order process. The strongest workflow keeps product discovery, product payment, warehouse evidence and international shipping as separate decisions.",
    keyFacts: [
      "Select and save the exact seller, color, size and quantity.",
      "The first payment covers the submitted product order.",
      "Warehouse inspection and photos occur before route selection.",
      "International shipping is selected and paid after the warehouse stage.",
    ],
    sections: [
      {
        heading: "1. Start with a narrow category",
        paragraphs: [
          "Choose the product type and intended use before comparing price. Filter by measurements, visible construction, seller information and the details that matter for that category. Save a small shortlist instead of opening dozens of nearly identical items.",
        ],
      },
      {
        heading: "2. Preserve the exact source and option",
        paragraphs: [
          "Pikobuy’s guide tells shoppers to confirm style, color and size and save product or store information. Record the source, seller, intended option, listed price and date checked. Then open the current main-directory result and verify that the destination still matches.",
        ],
      },
      {
        heading: "3. Submit the product order carefully",
        paragraphs: [
          "The official flow says to paste the link or keywords into Pikobuy, choose color, size and quantity, submit the order and complete the first payment. It also says final price is based on actual purchasing and an out-of-stock order is refunded. Compare the order summary with your saved source before paying.",
        ],
      },
      {
        heading: "4. Review the warehouse arrival",
        paragraphs: [
          "After arrival, Pikobuy says it inspects, checks in and photographs the item. Confirm the ordered option and visible condition. Use measurements or one useful extra photo when needed. Do not treat the image set as professional authentication.",
        ],
      },
      {
        heading: "5. Build and price the parcel",
        paragraphs: [
          "The official guide places route selection and international-shipping payment after warehouse inspection. Use the measured weight and dimensions, correct destination and product type. Compare route restrictions, billing method, tracking and protection rather than copying another shopper’s rate.",
        ],
      },
      {
        heading: "6. Track the dispatched parcel",
        paragraphs: [
          "Pikobuy’s guide says logistics information becomes available within three days after dispatch. That describes tracking availability, not universal delivery in three days. The shipping policy says third-party logistics, customs action, damage, loss and peak delays are cross-border risks.",
        ],
      },
      {
        heading: "Official record checked",
        paragraphs: [
          `Facts checked against ${official.guide}, ${official.estimator}, ${official.shipping} and ${official.returns} on July 30, 2026.`,
        ],
      },
    ],
    faqs: sharedFaqs,
    related: ["pikobuy-spreadsheet", "pikobuy-qc-photo-guide", "pikobuy-shipping-guide"],
    mainUrl: "https://findspreadsheet.com/AllProducts/",
    mainLabel: "Start with the live directory",
  },
  "is-pikobuy-safe": {
    slug: "is-pikobuy-safe",
    title: "Is Pikobuy Safe? A Fact-Based Risk Checklist",
    description:
      "Assess Pikobuy with a fact-based checklist covering platform workflow, seller listings, warehouse evidence, returns, shipping and customs risk.",
    eyebrow: "Independent risk guide",
    intro:
      "“Safe” is not one yes-or-no property. A real assessment separates the shopping platform, third-party seller, selected product, payment, warehouse evidence, return eligibility, logistics route and destination rules.",
    keyFacts: [
      "Pikobuy publicly describes a six-stage order and forwarding workflow.",
      "Marketplace seller accuracy and product quality remain separate risks.",
      "Warehouse photos support visible checks but are not professional authentication.",
      "Pikobuy’s shipping policy states that third-party logistics and customs create unavoidable risks.",
    ],
    sections: [
      {
        heading: "What the official workflow establishes",
        paragraphs: [
          "Pikobuy’s About page describes product sourcing, multiple payment methods, warehouse checks and route choice. Its beginner guide provides six stages: select products, search, submit and pay, warehouse inspection, pay shipping and wait for the parcel. Those public pages establish an operational workflow; they do not guarantee every seller, item or parcel outcome.",
        ],
      },
      {
        heading: "Seller and listing risk",
        paragraphs: [
          "Pikobuy sources from third-party marketplaces. A seller can change images, variants, price or availability. Preserve the exact source and option, confirm the order summary and treat a spreadsheet price as a reference. Product claims that cannot be verified from the current listing should not be repeated as facts.",
        ],
      },
      {
        heading: "Warehouse evidence and return risk",
        paragraphs: [
          "Use warehouse photos for identity and visible condition. The shipping policy excludes professional inspection for special and professional products. The returns page says eligible requests are time-limited, seller-dependent and subject to marketable condition and packaging rules. An unconditional return can include two domestic shipping charges and a 5 RMB service fee.",
        ],
      },
      {
        heading: "International logistics risk",
        paragraphs: [
          "Pikobuy’s shipping policy says parcels are carried by third-party providers and names customs action, confiscation, damage, loss and peak-period delay as risks. Read current route restrictions and protection terms. A route existing for one parcel does not mean it is eligible for every destination or product type.",
        ],
      },
      {
        heading: "A practical safety checklist",
        paragraphs: [
          "Use a unique password, confirm the domain before signing in, preserve transaction records, verify the exact product option, inspect warehouse evidence promptly, keep packaging intact until the return decision is made, and use the live route quote for the real parcel. Contact official Pikobuy support for an active order or account issue.",
        ],
      },
      {
        heading: "Official record checked",
        paragraphs: [
          `Facts checked against ${official.about}, ${official.guide}, ${official.shipping} and ${official.returns} on July 30, 2026.`,
        ],
      },
    ],
    faqs: [
      ...sharedFaqs,
      {
        question: "Does Pikobuyy guarantee a transaction?",
        answer:
          "No. Pikobuyy is independent and cannot guarantee a seller, product, route, customs outcome, refund or delivery. Use the current official order and support pages for a live case.",
      },
    ],
    related: ["pikobuy-spreadsheet", "pikobuy-qc-photo-guide", "pikobuy-shipping-guide"],
    mainUrl: "https://findspreadsheet.com/Agents/",
    mainLabel: "Compare shopping-agent resources",
  },
  "pikobuy-shipping-guide": {
    slug: "pikobuy-shipping-guide",
    title: "Pikobuy Shipping Guide 2026",
    description:
      "Plan Pikobuy international shipping with the variables that change route eligibility and cost: destination, product type, weight, dimensions and packaging.",
    eyebrow: "Parcel planning guide",
    intro:
      "A useful shipping answer starts with a real destination and parcel, not a universal price per kilogram. Pikobuy’s public estimator and guide identify the inputs that must be known before a quote can be meaningful.",
    keyFacts: [
      "The estimator requires destination, product type, weight and three dimensions.",
      "The official guide says routes differ in delivery time and billing method.",
      "Packaging can change both protection and billable dimensions.",
      "Third-party logistics and customs create risks beyond the product price.",
    ],
    sections: [
      {
        heading: "Separate the product order from the parcel",
        paragraphs: [
          "Pikobuy’s guide has two payment moments. The first covers the submitted product order. After warehouse inspection, the shopper chooses a logistics route, submits the parcel and pays international shipping. A spreadsheet price should therefore never be presented as the total landed cost.",
        ],
      },
      {
        heading: "Collect the six required quote inputs",
        paragraphs: [
          "The public estimator asks where the parcel will go, the product type, weight, length, width and height. Enter the correct destination and type because restrictions can affect which lines appear. Use an early estimate for budget screening, then replace it with warehouse measurements.",
        ],
        bullets: [
          "Destination country or region",
          "Product type",
          "Weight in kilograms",
          "Length in centimetres",
          "Width in centimetres",
          "Height in centimetres",
        ],
      },
      {
        heading: "Compare routes by more than headline price",
        paragraphs: [
          "The official guide says lines differ in delivery time and billing method. Compare the billable basis, restrictions, tracking, protection or insurance options and current estimated time. A copied rate from another parcel does not control a different destination, product type, weight or volume.",
        ],
      },
      {
        heading: "Treat packaging as a decision variable",
        paragraphs: [
          "Pikobuy says minimal or reinforced packaging can be requested at the warehouse stage. Minimal packaging may reduce dimensions; reinforcement may protect a fragile item while adding weight or volume. Shoe boxes, structured bags and electronics packaging can materially change the quote.",
        ],
      },
      {
        heading: "Understand tracking and cross-border risk",
        paragraphs: [
          "The guide says logistics information becomes available within three days after dispatch. That is not a three-day delivery promise. The shipping policy says parcels use third-party logistics and identifies customs action, damage, loss and peak-period delay as risks. Read the current line description and protection terms before payment.",
        ],
      },
      {
        heading: "Official record checked",
        paragraphs: [
          `Facts checked against ${official.guide}, ${official.estimator} and ${official.shipping} on July 30, 2026.`,
        ],
      },
    ],
    faqs: [
      ...sharedFaqs,
      {
        question: "What is the Pikobuy shipping price per kilogram?",
        answer:
          "There is no single useful rate for every parcel. Destination, product type, route, actual or volumetric weight, dimensions and packaging can change the quote.",
      },
    ],
    related: ["pikobuy-spreadsheet", "how-to-use-pikobuy-spreadsheet", "pikobuy-qc-photo-guide"],
    mainUrl: "https://findspreadsheet.com/AllProducts/",
    mainLabel: "Research products before estimating",
  },
};

export const rankingSlugs = Object.keys(rankingEntries);
