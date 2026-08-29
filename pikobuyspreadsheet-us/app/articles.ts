export type ArticleSection = { heading: string; paragraphs: string[]; checklist?: string[] };
export type ResearchArticle = {
  slug: string;
  title: string;
  tag: string;
  description: string;
  reviewed: string;
  intro: string[];
  sections: ArticleSection[];
};

export const researchArticles: ResearchArticle[] = [
  {
    slug: "pikobuy-shipping-to-us-real-estimate",
    title: "PikoBuy Shipping to the US: How to Build a Real Estimate",
    tag: "US shipping",
    description: "A practical way to estimate a US parcel with destination, product type, weight, dimensions and route limits—without pretending there is one fixed price per kilogram.",
    reviewed: "Fact-checked against PikoBuy public pages on August 29, 2026",
    intro: [
      "A useful PikoBuy shipping estimate starts with the parcel you will actually send, not a price copied from a comment or an old screenshot. PikoBuy’s public shipping calculator asks for the destination country or region, product type, weight, length, width and height. That is a clear signal that a single universal price per kilogram is not enough. The final choice also depends on which routes are available when the parcel is submitted.",
      "This guide explains a simple US-focused planning method. It does not promise a delivery date, customs result or final charge. PikoBuy states that international parcels are carried by third-party logistics providers and that cross-border risks can include customs action, damage, loss and peak-season delay. The sensible goal is therefore to create a working budget, verify the live quote and leave room for change."
    ],
    sections: [
      { heading: "1. Separate the two payments", paragraphs: [
        "PikoBuy’s beginner guide describes a purchase stage and a later international shipping stage. At the purchase stage, the shopper selects the specification, colour, size and quantity, submits the order and makes the first payment. After the item reaches the warehouse, the user chooses a shipping route, submits a parcel and pays the international shipping fee. Treating these as separate costs prevents a common budgeting error: assuming the displayed item price includes delivery to the United States.",
        "Your first worksheet should therefore have separate lines for the item amount, seller-to-warehouse delivery if applicable, return or service costs if a problem occurs, optional photo or packaging requests, and international parcel shipping. Do not merge these into a confident total before the warehouse has measured the parcel. The product page price can also change, and PikoBuy’s guide says prices are subject to the actual purchase and out-of-stock orders are refunded."
      ], checklist: ["Item and selected option", "Domestic delivery to warehouse", "Optional inspection or packaging request", "International parcel quote", "Contingency for changes"] },
      { heading: "2. Start with the destination and product type", paragraphs: [
        "For a US estimate, select the United States as the destination in the live shipping calculator and choose the closest accurate product type. Product type matters because logistics lines can apply different rules to ordinary clothing, electronics, batteries, liquids, branded goods or other restricted items. A route visible for one category may not be available for another. Never change the product type simply to make a cheaper line appear; an incorrect declaration can create delays or rejection later.",
        "Check every item in a mixed parcel before using the calculator. A hoodie and a pair of shoes may be ordinary goods, while earbuds can introduce battery-related restrictions. The strictest item can reduce the routes available for the entire parcel. If a product is unclear, keep it out of the first estimate until its classification is confirmed in the current platform flow. This is more reliable than assuming that every PikoBuy product can travel on every US route."
      ] },
      { heading: "3. Use warehouse weight, not a guess", paragraphs: [
        "The item listing weight is only an early reference. The warehouse parcel can include boxes, protective material, labels and consolidation packaging. If several orders are combined, the final package will differ from any single seller listing. Build an early low and high estimate, but replace it with the warehouse measurement before paying for international shipping. Small differences can matter when a route bills in weight steps.",
        "Keep a simple record for each item: expected weight, warehouse-reported weight and whether original packaging will remain. When the actual figure is higher than expected, investigate before submitting the parcel. The cause may be a shoe box, heavy seller packaging, an incorrect quantity or a product that is simply heavier than the description suggested. A spreadsheet is useful here because it makes the difference visible rather than hiding it inside one total."
      ] },
      { heading: "4. Measure the box because volume can matter", paragraphs: [
        "PikoBuy’s public estimator asks for length, width and height as well as kilograms. That means dimensions are part of the estimate. Carriers often compare actual weight with a volume-based billing method, although the exact divisor and rule can vary by route. Do not insert a random volumetric formula and present it as PikoBuy’s universal rule. Enter the actual parcel dimensions into the current calculator and compare the routes shown there.",
        "Bulky packaging can make a light order expensive. Shoe boxes, puffer jackets and protective cases are common examples. PikoBuy’s guide says users can add requests such as minimal packaging or reinforced packaging at the warehouse stage. Those choices involve a trade-off: reducing packaging can lower size, while reinforcement can protect the contents but increase weight or volume. Decide based on the product, not only on the lowest possible quote."
      ] },
      { heading: "5. Compare routes on more than price", paragraphs: [
        "The cheapest visible route is not automatically the best route. Compare the route’s accepted product types, billing method, estimated range shown at checkout, tracking method and any current restrictions. PikoBuy’s guide explicitly notes that routes differ in delivery time and billing methods. Because route availability can change, a route mentioned in an old review should not be treated as a permanent option for US shoppers.",
        "Create a short comparison table on the day you are ready to submit the parcel. Record the quote, chargeable weight, stated time range, insurance option if shown, and the reason you selected or rejected the line. This turns route choice into a documented decision. If the quote changes later, you can see whether the cause was weight, dimensions, product classification or a change in available logistics rather than guessing."
      ] },
      { heading: "6. Understand tracking and delivery uncertainty", paragraphs: [
        "PikoBuy’s beginner guide says tracking information will be available within three days after dispatch. Read that as the platform’s stated tracking-update window, not a promise that the parcel will move visibly every day. International tracking often contains quiet periods between export handling, airline movement, customs processing and transfer to a US last-mile carrier. Save the parcel number and the date the platform marks it shipped.",
        "A delivery estimate is still only an estimate. PikoBuy’s shipping terms say parcels use third-party logistics providers and identify risks such as customs policies, confiscation, damage, loss and peak-season delays. No independent spreadsheet can remove those risks. If a purchase is needed for a fixed event, use a conservative deadline and avoid ordering so late that the slow end of the stated range would already be unacceptable."
      ] },
      { heading: "7. Plan for customs without inventing a result", paragraphs: [
        "US customs treatment depends on the actual goods, declared information, value and current rules. This guide cannot decide classification or taxes for a specific parcel. Describe products accurately and follow the current declaration fields presented during parcel submission. Do not use false descriptions or copied values from another shopper’s parcel. A successful result for somebody else does not guarantee the same result for yours.",
        "Keep purchase records, product descriptions and payment evidence until delivery is complete. If the carrier or customs authority requests information, accurate records are more useful than an informal spreadsheet label. PikoBuy states that customs-related factors are outside its control, so a responsible budget should not assume zero delay or zero additional cost. For a high-value or unusual shipment, obtain professional advice appropriate to the goods."
      ] },
      { heading: "8. A final US estimate workflow", paragraphs: [
        "Before ordering, record the exact variant, quantity and item amount. After warehouse arrival, review the inspection images, confirm quantity and visible condition, and decide whether packaging should be reduced or reinforced. Then record the warehouse weight and dimensions, select the correct destination and product type in the live estimator, compare the available routes and keep a buffer for recalculation.",
        "Only pay for shipping after the parcel details and route conditions make sense. Take a screenshot or note the quote date because rates and routes can change. After dispatch, save the tracking number and allow for the platform’s stated update window. This method will not make international shipping certain, but it produces a clear, repeatable decision based on current parcel data instead of a misleading flat-rate claim."
      ], checklist: ["Confirm inspection images", "Record final weight and dimensions", "Use the correct product type", "Compare live routes", "Keep a budget and timing buffer", "Save parcel and tracking details"] }
    ]
  },
  {
    slug: "pikobuy-shipping-europe-vat-routes",
    title: "PikoBuy Shipping to Europe: VAT, Routes and Parcel Checks",
    tag: "Europe",
    description: "A clear checklist for European buyers covering parcel data, live routes, VAT questions, customs uncertainty and evidence to keep.",
    reviewed: "Fact-checked against PikoBuy public pages on August 29, 2026",
    intro: [
      "Europe is not one shipping destination. A parcel going to France, Germany, Italy, Poland, the Netherlands or Sweden can face different route availability, local handling and tax treatment. PikoBuy’s calculator therefore starts by asking for the destination country or region. It also asks for product type, weight and parcel dimensions. A useful European estimate must use those current inputs rather than a price copied from another country.",
      "This article gives a practical way to prepare a European parcel. It does not claim that one route is tax-free, customs-free or guaranteed. PikoBuy’s shipping terms state that third-party logistics providers carry parcels and that customs policies and uncontrollable cross-border events can create loss, damage, confiscation or delay. The right approach is accurate parcel data, a live route comparison and careful records."
    ],
    sections: [
      { heading: "1. Choose the exact European destination", paragraphs: [
        "Do not select a neighbouring country because its example quote looks cheaper. Enter the country where the parcel will actually be delivered. Route availability, last-mile partners and pricing can differ even inside the European Union. If you are comparing two legitimate delivery addresses, calculate them separately using the same parcel details and record the date of each quote.",
        "The destination also affects what tax and customs questions need attention. EU member states share important VAT rules, but final handling can still depend on the parcel, carrier and local authority. Non-EU European destinations have their own systems. Avoid broad claims such as ‘Europe has no customs’ or ‘this line includes every tax’ unless the live route terms for your exact shipment clearly state what is included."
      ] },
      { heading: "2. Confirm the product before discussing VAT", paragraphs: [
        "A product’s description, value and category matter. Record the real item name, quantity, paid price and selected variant. A spreadsheet nickname such as ‘accessory’ may be useful for browsing but is not enough for a declaration. If the parcel contains different types of goods, list them separately in your planning sheet. Accurate descriptions are safer than copying a generic declaration from social media.",
        "PikoBuy can help purchase goods from sources such as Taobao, Tmall, 1688, Weidian and Yupoo through its documented workflow, but the platform’s involvement does not remove the buyer’s responsibility to understand destination rules. The official guide says prices are subject to the actual purchase. Keep the final paid amount and order record because a listing snapshot may not match what was charged."
      ] },
      { heading: "3. Build the parcel after warehouse inspection", paragraphs: [
        "PikoBuy’s public process places warehouse inspection before international shipping. Once goods arrive, the platform describes check-in, photo confirmation and defect checks. Use that stage to confirm that the warehouse received the expected product, colour, size and quantity. If a visible problem exists, deal with it before combining the item into an international parcel.",
        "The warehouse stage is also where weight and packaging become clearer. Original boxes, protective materials and consolidation can affect the final parcel. PikoBuy says users may request minimal or reinforced packaging. A compact clothing parcel and a box-heavy footwear parcel can produce very different quotes even when their item values are similar. Make the packaging decision before relying on the calculator result."
      ] },
      { heading: "4. Use weight and dimensions together", paragraphs: [
        "The public shipping estimator requests kilograms and length, width and height in centimetres. Enter the warehouse figures when available. Early estimates can use a sensible range, but label them as preliminary. Do not publish or rely on one fixed per-kilogram rate because the same weight can produce a different charge when the box is larger or the route uses a different billing method.",
        "For each live quote, record the route name, entered weight, dimensions, product type and destination. This makes comparisons fair. If you change two inputs at once, you cannot tell why the price moved. A simple table also helps you spot whether removing unnecessary packaging materially changes the result or whether a different route is driving the difference."
      ] },
      { heading: "5. Read the current route terms", paragraphs: [
        "PikoBuy’s beginner guide says shipping routes differ in delivery time and billing methods. Route names and availability can change, so this article does not recommend a permanent ‘best’ line. When submitting the parcel, compare only the routes currently offered for the exact destination and product type. Check restrictions, tracking, chargeable weight and any insurance information shown.",
        "If a route mentions tax handling, read the current wording carefully and save it with the quote date. Do not transform a short label into a wider promise. ‘Tax included’ for one route and parcel does not necessarily mean every customs charge, prohibited-item issue or declaration problem is covered. When the meaning is unclear, ask the platform for clarification before payment rather than relying on an old community answer."
      ] },
      { heading: "6. Understand return timing before shipping abroad", paragraphs: [
        "PikoBuy’s public returns policy says qualifying items may be eligible for a return request within five days after the status changes to ‘In Warehouse’, measured as 120 hours from the next hour. Eligibility depends on the seller’s return service, the item remaining resalable and product-specific exclusions. This is a warehouse-stage window, not a general promise that every item can be returned after international delivery.",
        "For a buyer-requested unconditional return after warehousing, the public policy lists return shipping to the seller, the seller’s original shipping fee and a RMB 5 service fee. Even a seller that offered free shipping can create a first-delivery charge on return. The seller must consent, and special items can be non-returnable. Check photos quickly so the window is not lost while you are still planning the European parcel."
      ] },
      { heading: "7. Prepare for customs and tracking uncertainty", paragraphs: [
        "PikoBuy’s shipping terms identify customs policies and other uncontrollable factors as risks borne by the user, while saying the platform may assist with risk alerts and logistics insurance improvements. This means a route estimate should not be presented as a guaranteed customs result. Keep truthful declarations and evidence of the item and payment. If a product has special restrictions, obtain advice relevant to the destination.",
        "The beginner guide states that tracking information will be available within three days after dispatch. That does not mean daily scans are guaranteed. Cross-border parcels can have gaps between export processing, line-haul movement, customs and the local carrier. Save the tracking number, dispatch date and last update. Contact support with those facts if the parcel exceeds the route’s current expectations."
      ] },
      { heading: "8. A practical European buyer checklist", paragraphs: [
        "Start with the exact destination, product description, paid price and category. Confirm the warehouse images before the return window closes. Record actual weight and dimensions, then use the live estimator. Compare routes based on eligibility, total quote, billing method, tracking and the current tax wording. Keep a buffer because rates, routes and customs handling can change.",
        "The strongest plan is specific and dated. It says which destination, parcel and live quote were checked, and it separates confirmed platform information from personal assumptions. That is less exciting than a promise of cheap, fast and tax-free shipping, but it is much more useful. It gives the shopper a defensible record and makes it easier to identify what changed if the final cost or timeline differs."
      ], checklist: ["Exact destination country", "Accurate item and value record", "Warehouse photos checked promptly", "Final weight and dimensions", "Live route terms saved", "VAT/customs assumptions clearly labelled", "Tracking record retained"] }
    ]
  },
  {
    slug: "pikobuy-qc-photos-category-checklist",
    title: "PikoBuy QC Photos: A Category-by-Category Checklist",
    tag: "Warehouse QC",
    description: "What warehouse photos can confirm for shoes, clothing, bags, jewellery, watches and electronics—and what they cannot prove.",
    reviewed: "Fact-checked against PikoBuy public pages on August 29, 2026",
    intro: [
      "PikoBuy’s public workflow says items are checked in at the China warehouse, photographed for confirmation and checked for visible defects before international shipping. Its forwarding terms add that users should review inspection photos and may purchase additional detailed photos. That makes QC images a decision tool, but not a guarantee of authenticity, exact material, perfect fit or long-term durability.",
      "A good QC review starts with the order record and asks visible, specific questions. The same photo set cannot answer every product type. Shoes need shape and outsole views; clothing needs measurements and construction details; bags need hardware and interior views. This guide keeps the process simple and shows when an additional image is worth requesting."
    ],
    sections: [
      { heading: "1. Check identity before quality", paragraphs: [
        "First match the warehouse item to what was ordered. Compare product title or ID, selected colour, size, model, quantity and any obvious option. A sharp photo of the wrong variant is still a failed order. Keep the seller images and order selection beside the warehouse images so you are comparing the same claim. Do not rely on memory, especially when several similar products arrive together.",
        "Next look for visible damage, contamination, missing pieces and major construction errors. QC photos can reveal stains, holes, broken hardware, crushed packaging or an obviously wrong colour. They cannot reliably prove fibre content, electronics battery health, waterproofing, comfort or durability unless a specific test is provided. Separate what is visible from what you merely hope is true."
      ] },
      { heading: "2. Sneakers and other footwear", paragraphs: [
        "For shoes, request or inspect a pair view from the top, both outer sides, both inner sides, heels, toe boxes and outsoles. Compare symmetry, shape, panel alignment, stitching and obvious glue marks. Confirm the size label and, when fit is uncertain, request an insole or outsole measurement. A printed size number alone does not guarantee the expected internal length.",
        "If return eligibility matters, avoid asking the warehouse to remove or damage return-sensitive packaging. PikoBuy’s public return standards say new sneakers may need anti-theft buckles and tamper-proof stickers to remain intact. Check the box and accessories only as far as necessary. QC can show visible branding details, but it should not be presented as an independent authentication service."
      ], checklist: ["Pair and symmetry", "Toe and heel shape", "Side panels and stitching", "Outsoles", "Size label and measurement", "Box and accessories"] },
      { heading: "3. T-shirts, hoodies and sweaters", paragraphs: [
        "For tops, confirm front and back, colour, collar or hood shape, sleeve construction, cuffs, hem and visible print or embroidery. Ask for measurements that match how you shop: chest width, body length, shoulder width and sleeve length. Compare centimetres with a garment that already fits instead of trusting a generic small, medium or large label.",
        "Zoom in on print edges, embroidery density, loose threads and alignment. Lighting can change how colour appears, so a photo is not a perfect colour instrument. Fabric weight, fibre content and softness are also difficult to prove visually. Treat labels as evidence of what is printed, not laboratory confirmation of material. If one feature determines whether you keep the item, request a dedicated close-up."
      ] },
      { heading: "4. Jackets, pants and shorts", paragraphs: [
        "Jackets need front, back, lining, zipper, cuff, pocket and closure checks. For insulated garments, photos can show obvious uneven filling but cannot establish warmth performance. Record chest, length and sleeves. Pants and shorts need waist, rise, inseam or outseam, leg opening and pocket checks. Confirm whether the waist was measured flat and whether it stretches.",
        "Look for zipper alignment, missing buttons, open seams and inconsistent washes. Distressed products should be compared with the seller’s description because intentional marks can resemble damage. Ask the warehouse to photograph any uncertain area closely before deciding. Do not ship an item internationally while a visible issue remains unresolved; the seller-side return window can be much shorter than the international delivery process."
      ] },
      { heading: "5. Bags and accessories", paragraphs: [
        "For bags, confirm overall dimensions, front, back, base, sides, handles, strap, zipper and interior. Inspect hardware colour and finish, stitching at stress points, pocket layout and included dust bag or accessories. If a laptop or specific object must fit, compare the internal dimensions rather than only the external size. A wide-angle image can make proportions deceptive.",
        "For belts, jewellery and small accessories, request a scale reference or measurement. Check clasp function only if the warehouse offers that inspection and doing so will not harm return eligibility. Photos can show visible scratches, missing stones and gross colour differences. They cannot prove metal composition, plating thickness or skin safety. Avoid turning visual evidence into a material guarantee."
      ] },
      { heading: "6. Watches and electronics", paragraphs: [
        "For watches, confirm the model appearance, dial, hands, case, crown, clasp, strap and included packaging. A photo may show that the display or hands are active, but it cannot establish timekeeping accuracy, water resistance or long-term movement condition. For electronics, match the model, connector, colour, quantity and package contents. Check for obvious screen or casing damage.",
        "Ask whether power-on or functional testing is available, but do not assume it is part of standard visual QC. PikoBuy’s forwarding terms say professional inspection cannot be provided for special and professional products. Electronics may also affect shipping-route eligibility. Keep seals intact when return rules require it; PikoBuy’s public standards contain specific packaging conditions for several digital and electronic categories."
      ] },
      { heading: "7. How to request useful additional photos", paragraphs: [
        "A useful request is short and measurable: ‘Please photograph the chest width with the tape straight, in centimetres,’ or ‘Please show both heel tabs at the same distance.’ Avoid vague instructions such as ‘check quality.’ The warehouse can respond more effectively when the image, angle and measurement are clear. Combine related requests so the reviewer understands the comparison you need.",
        "Prioritise decision-changing evidence. If you would keep the item regardless of a tiny stitch variation, do not delay the parcel for many cosmetic close-ups. If the item must fit a 35-centimetre laptop, an internal width measurement is essential. Record the requested photo and result in your spreadsheet so that the final keep, return or exchange decision has a visible reason."
      ] },
      { heading: "8. Decide within the return window", paragraphs: [
        "PikoBuy’s public return policy describes a five-day, 120-hour application window after qualifying goods enter the warehouse. Eligibility also depends on seller participation, resale condition and category exclusions. Review warehouse photos soon after arrival instead of waiting until every order in a large haul is complete. A delayed review can remove options even when the problem was visible from the start.",
        "If the item is wrong or damaged, choose the accurate return reason and keep the evidence. The public policy says seller-caused wrong items or quality issues are handled differently from a buyer changing their mind. Returns still require seller consent. When you keep the item, save the final QC notes with the order. The goal is not perfect certainty; it is a documented decision based on the best visible evidence available before international shipping."
      ], checklist: ["Match item and variant", "Inspect category-specific views", "Request only decision-changing details", "Separate visible facts from assumptions", "Review before the return deadline", "Record the keep or return reason"] }
    ]
  },
  {
    slug: "how-to-use-pikobuy-spreadsheet",
    title: "How to Use a PikoBuy Spreadsheet Without Guessing",
    tag: "Beginner guide",
    description: "A complete workflow from product discovery and live listing checks to warehouse photos, return timing, parcel submission and tracking.",
    reviewed: "Fact-checked against PikoBuy public pages on August 29, 2026",
    intro: [
      "A PikoBuy spreadsheet is a discovery and organisation tool. It can help you find product records, compare categories and remember what to check. It is not the seller, the PikoBuy platform, a promise of current stock or a guarantee of quality. The safest workflow moves from spreadsheet discovery to the live product record, then through PikoBuy’s documented purchase, warehouse and shipping stages.",
      "PikoBuy’s public beginner guide describes six stages: select an item, search by link or keyword, submit and pay for the purchase, review warehouse inspection, choose and pay for shipping, and wait for tracking. This article turns that flow into a practical checklist. It focuses on facts that can be verified and clearly labels the parts that remain uncertain."
    ],
    sections: [
      { heading: "1. Use the spreadsheet to discover, not to assume", paragraphs: [
        "Start with a category or a specific need. Record the product name, source record, visible price reference, item ID if available and the date you checked it. A spreadsheet can become outdated, so treat price and availability as leads. Open the current product page before deciding. Compare the selected option, seller images and description rather than trusting a short spreadsheet title.",
        "PikoBuy’s home page says users can search directly, submit product links or images, or make sourcing requests. Its beginner guide also says links or keywords can be pasted into the search box. Use the most direct current record available. If an old link no longer resolves, search by identifying keywords or the item information; do not replace it with a random similar product without checking the differences."
      ] },
      { heading: "2. Confirm the exact variant before payment", paragraphs: [
        "PikoBuy’s guide tells shoppers to choose the specification, colour, size and quantity before submitting the purchasing order and making the first payment. Write those exact selections in your sheet. For clothing, compare the seller’s centimetre measurements with an item you own. For shoes, check the size system and internal length if provided. For electronics, confirm model and compatibility.",
        "The public guide says the actual purchase price controls and that out-of-stock orders are refunded. That means a spreadsheet price is not a final invoice. Check the amount displayed in the current purchase flow and any seller-side delivery charge. If a price difference is too large for your budget, stop and reassess. A clear spending limit is better than assuming the old reference will be honoured."
      ] },
      { heading: "3. Keep one row for every decision", paragraphs: [
        "A useful tracking row contains the item, selected variant, quantity, paid amount, order status, warehouse arrival date, QC result, return deadline, estimated weight, final parcel and tracking number. Add a notes column for the reason you kept or returned the item. This reduces mistakes when several similar orders arrive on different dates.",
        "Do not label an item ‘approved’ simply because photos exist. Record what was checked: correct colour, visible size label, measured chest, no obvious stain, or missing accessory. Specific notes make the spreadsheet useful later. They also separate observations from claims that photos cannot prove, such as authenticity, exact fibre content, battery health or long-term durability."
      ] },
      { heading: "4. Review warehouse inspection promptly", paragraphs: [
        "PikoBuy’s documented process says the warehouse performs check-in, photo confirmation and a defect check. Review the images against your saved order information. Confirm identity first, then category-specific visible details and measurements. If the standard photos do not show a feature that determines your decision, request a focused additional image where the service is available.",
        "Timing matters. PikoBuy’s returns policy says eligible goods can have a five-day application window after the status becomes ‘In Warehouse’, calculated as 120 hours from the next hour. Not every item qualifies, and seller consent is required. Some categories and opened or altered packaging can be excluded. Review each arrival instead of waiting for the final item in a large order."
      ] },
      { heading: "5. Understand returns before you need one", paragraphs: [
        "A buyer changing their mind is not the same as a seller sending the wrong item. PikoBuy’s public return policy lists buyer-responsible unconditional return costs as shipping back to the seller, the seller’s original shipping charge and a RMB 5 service fee. It also says free shipping at purchase can still create a first-delivery charge when returning the product.",
        "For seller mistakes or quality issues, responsibility can differ, but the platform says it can only return the item with the seller’s consent. Products must remain in the condition required for resale, and special rules apply to sneakers, sealed goods, electronics and other categories. Keep packaging intact until the QC decision is complete. If the item is not eligible, do not describe a hoped-for seller exception as a guaranteed return right."
      ] },
      { heading: "6. Build the parcel with actual data", paragraphs: [
        "After you decide which items to keep, plan the parcel. PikoBuy’s shipping estimator asks for destination, product type, weight and length, width and height. Use warehouse figures when possible. If the parcel has bulky boxes, decide whether minimal packaging is appropriate. If the goods are fragile, reinforced packaging may be more important than the smallest quote.",
        "Separate product cost from international shipping cost. Compare only routes currently shown for the correct destination and product type. PikoBuy’s guide says routes differ in delivery time and billing methods. Record the quote date, entered parcel data and route terms. This prevents an old estimate from being presented as a permanent rate when logistics conditions change."
      ] },
      { heading: "7. Treat international shipping as a managed risk", paragraphs: [
        "PikoBuy’s shipping terms state that third-party providers carry international parcels. They identify unavoidable risks including customs policies, confiscation, damage, loss and peak-season delay. No spreadsheet can guarantee that a parcel avoids these events. Use accurate product information, follow current route rules, consider available protection and avoid deadlines that leave no room for delay.",
        "The beginner guide says tracking information will be available within three days after the parcel is shipped. Save the dispatch date and tracking number, then allow for gaps between international stages. A missing daily scan is not automatically proof that the parcel is lost. If the shipment exceeds the live route expectation, contact support with the order and tracking facts rather than relying on unrelated community timelines."
      ] },
      { heading: "8. The no-guessing checklist", paragraphs: [
        "A strong workflow is simple: discover the item, open the current record, confirm the exact variant and live amount, save the order facts, review warehouse photos promptly, resolve any return question, record final parcel measurements, compare current routes and retain tracking evidence. Each step answers one question before the next payment is made.",
        "The spreadsheet remains valuable because it keeps those answers together. Its role is organisation and research, not replacing PikoBuy’s current order pages or the seller’s rules. When a fact can change—price, stock, route, fee or policy—add a checked date. When a result cannot be guaranteed—fit, authenticity, customs or delivery—say so clearly. That produces useful guidance without turning uncertainty into marketing copy."
      ], checklist: ["Open the current product record", "Confirm variant and live amount", "Save order and warehouse dates", "Review QC within the return window", "Use final parcel measurements", "Compare current routes", "Keep tracking evidence"] }
    ]
  }
];

export const factualFaqs = [
  ["What does PikoBuy do?", "PikoBuy publicly describes itself as a China purchasing and forwarding service. Users can search products or submit links, images or sourcing requests; PikoBuy purchases from sellers, receives goods at its China warehouse and offers international parcel routes."],
  ["Which shopping sources does PikoBuy’s guide mention?", "Its beginner guide names Taobao, Tmall, 1688, Weidian and Yupoo, while also referring to other platforms. A product still needs to be checked in the current PikoBuy purchase flow before payment."],
  ["What happens after an item reaches the warehouse?", "PikoBuy’s public guide describes warehouse check-in, photo confirmation and a visible defect check. Users can also add requests such as minimal or reinforced packaging. Photos are useful evidence, but they do not guarantee authenticity, material, fit or durability."],
  ["How is international shipping estimated?", "PikoBuy’s public estimator asks for destination country or region, product type, weight, length, width and height. Because these inputs and available routes can change, there is no reliable universal price per kilogram."],
  ["Does PikoBuy guarantee a delivery date?", "No such guarantee should be assumed. PikoBuy says routes differ in delivery time and billing methods, and its shipping terms identify customs action, damage, loss and peak-season delay as possible third-party logistics risks."],
  ["When should tracking appear?", "PikoBuy’s beginner guide says tracking information will be available within three days after dispatch. This is the platform’s stated update window, not a promise of daily scans or delivery within three days."],
  ["How long is the warehouse return application window?", "For qualifying items, PikoBuy’s public returns policy describes a five-day window after the order becomes ‘In Warehouse’, measured as 120 hours from the next hour. Eligibility, seller consent, resale condition and category exclusions still apply."],
  ["What can an unconditional warehouse return cost?", "PikoBuy’s published rule lists shipping back to the seller, the seller’s original shipping charge and a RMB 5 service fee for a buyer-requested unconditional return. Even an originally free-shipping item can create a first-delivery charge on return."],
  ["Can every item be returned?", "No. The policy lists non-returnable or condition-sensitive categories, and the seller must accept the return. Customized goods, intimate apparel, food, second-hand items and products with altered seals or packaging are among the examples requiring special attention."],
  ["Does PikoBuy provide after-sales service for forwarded goods?", "PikoBuy’s forwarding terms say it does not provide after-sales service for goods sent to its warehouse through the forwarding process. The user must contact the sender or seller; PikoBuy can assist by shipping the goods back."],
  ["Is this the official PikoBuy website?", "No. This is an independent product-research site. Platform facts are checked against current public PikoBuy pages, while product and database buttons direct only to FindSpreadsheet."],
  ["What is the safest way to use a PikoBuy spreadsheet?", "Use it to discover and organise products, then confirm the current listing, option, amount and availability. Review warehouse photos promptly, record actual parcel data and compare the live routes before paying for international shipping."]
] as const;
