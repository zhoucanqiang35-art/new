export type ArticleSection = { heading: string; paragraphs: string[]; checklist?: string[] };
export type ArticleLink = { label: string; href: string };
export type ResearchArticle = {
  slug: string;
  title: string;
  seoTitle?: string;
  tag: string;
  description: string;
  reviewed: string;
  published?: string;
  keywords?: string[];
  intro: string[];
  sections: ArticleSection[];
  faq?: [string, string][];
  sources?: ArticleLink[];
  related?: ArticleLink[];
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
  },
  {
    slug: "how-to-find-pikobuy-product-links",
    title: "How to Find and Check PikoBuy Product Links",
    seoTitle: "How to Find PikoBuy Product Links (2026 Guide)",
    tag: "Product search",
    description: "Learn how to find PikoBuy product links, search by URL or keyword, verify the exact variant and avoid stale spreadsheet records before ordering.",
    reviewed: "Fact-checked against PikoBuy public pages on August 31, 2026",
    published: "2026-08-31",
    keywords: [
      "how to find PikoBuy product links",
      "PikoBuy product search",
      "PikoBuy Taobao links",
      "PikoBuy Weidian links",
      "PikoBuy 1688 links",
      "PikoBuy spreadsheet"
    ],
    intro: [
      "Finding a product is not the same as confirming that it is still orderable. A PikoBuy spreadsheet, a seller URL and a keyword search can all lead you toward an item, but the current PikoBuy purchase page is where you must recheck the actual option, quantity and amount before paying. This matters for US and European shoppers because an old price, an unavailable colour or the wrong size can create a problem long before international shipping begins.",
      "PikoBuy’s public pages support several discovery methods. The home page says users can search directly or submit product links, images or sourcing requests. The beginner guide says shoppers may start with products from Taobao, Tmall, 1688, Weidian, Yupoo and other platforms, then paste a product link or keywords into the PikoBuy search box. The workflow below turns those public statements into a repeatable link-checking process without claiming that every seller, item or option will always be available."
    ],
    sections: [
      {
        heading: "1. Start with the most specific product record you have",
        paragraphs: [
          "Use a direct seller URL when it still opens and clearly identifies the intended item. A direct link usually preserves more evidence than a short product name: the seller page may show available variants, measurements, images and a product identifier. Copy the complete URL rather than a shortened or cropped version. Also save the product name, source platform and the date you checked it. If the listing changes later, those notes help explain what you originally intended to buy.",
          "A spreadsheet entry is useful when it helps you discover a category or recover a product record, but it should be treated as a dated reference. Open the linked record and compare it with the spreadsheet title, image and visible reference price. Do not assume that a familiar thumbnail proves the seller page is unchanged. A seller can replace images, edit options or reuse a listing. Your goal at this stage is identity: confirm that the live page still describes the product you actually want."
        ],
        checklist: ["Complete source URL", "Source platform", "Product name or ID", "Date checked", "Live page matches the intended item"]
      },
      {
        heading: "2. Paste the link into PikoBuy and read the result",
        paragraphs: [
          "PikoBuy’s beginner guide instructs users to paste a product link or keywords into its search box. When a direct URL resolves, inspect the result rather than moving immediately to payment. Compare the title, main images, seller information if displayed, variant list and quantity controls with the source record. A successful import only shows that the platform parsed a record; it does not prove that every option is in stock or that a spreadsheet price is current.",
          "If the page displays an unexpected item, stop. Recopy the original address from the seller page, removing any accidental text before or after the URL. Check whether the source listing itself redirects or has been removed. Do not choose a visually similar item simply because the original link fails. A substitute can differ in material, dimensions, version or seller. If the exact product matters, keep the failed URL and item details for a sourcing request instead of quietly changing the order."
        ]
      },
      {
        heading: "3. Use keyword and image search when a link is unavailable",
        paragraphs: [
          "PikoBuy’s home page says users can search directly and can submit images or sourcing requests; its guide also permits keyword search. Build a precise query from stable details: product type, model or design name, colour, material, dimensions and any visible item number. Remove promotional adjectives that do not identify the item. For example, a query built from a jacket type, colour and model code is more useful than a long translated title filled with words such as premium, fashionable or new.",
          "Image search can help locate visually similar records, but similarity is only a lead. Compare construction, labels, dimensions, included parts and seller images before treating a result as the same product. A close visual match may be a different version or a different seller’s listing. When the result cannot be verified, label it as an alternative in your notes. Do not overwrite the original product record, because keeping both records makes the difference visible before payment."
        ]
      },
      {
        heading: "4. Confirm the exact option before the first payment",
        paragraphs: [
          "PikoBuy’s public beginner guide says the purchasing order stage requires the user to select specifications, colour, size and quantity, submit the order and complete the first payment. Check every one of those fields. For clothing, compare the seller’s centimetre measurements with a garment that fits; a letter size alone is not enough. For shoes, confirm the sizing system and an internal or insole measurement when available. For electronics or accessories, check model, connector, region and compatibility.",
          "Record the selected text exactly as it appears in the live flow. This prevents a vague spreadsheet note such as black medium from becoming attached to the wrong option. Confirm the displayed amount and any seller-to-warehouse delivery charge. PikoBuy’s guide says prices are subject to the actual purchase and states that an out-of-stock order will be refunded. That is why an old spreadsheet amount should remain a reference, not a promise or final invoice."
        ],
        checklist: ["Specification", "Colour", "Size or measurements", "Quantity", "Current amount", "Seller-side delivery charge if shown"]
      },
      {
        heading: "5. Save enough evidence to resolve a mismatch",
        paragraphs: [
          "Before paying, save the source URL, PikoBuy result, selected options and visible amount. A dated screenshot can supplement the written record, but keep searchable text as well. Give each item one row in your tracking sheet with the product ID, selected variant, quantity, first-payment amount and order number when issued. This is especially useful when several nearly identical products arrive at the warehouse on different days.",
          "Good records make support questions specific. Instead of saying that the item looks wrong, you can identify the order, requested option and visible difference. They also help you distinguish a seller-side change from a mistaken selection. Do not store payment-card details or account passwords in the sheet. The record should document the purchase decision without creating a new security risk."
        ]
      },
      {
        heading: "6. Recheck identity at the warehouse",
        paragraphs: [
          "Link verification continues after purchase. PikoBuy’s public workflow says that after an item reaches its China warehouse, it is checked in, photographed for confirmation and checked for visible defects. Compare those warehouse photos with the source record and the options you saved. Confirm the product, colour, visible size label, quantity and included parts before judging smaller quality details. If the wrong variant arrived, a beautiful photo does not make it the correct order.",
          "Ask for a focused additional image when a decision-changing detail is missing and that service is available. The forwarding terms say users can view inspection photos or purchase additional detailed photos, while noting that professional inspection is not available for special and professional products. Use photos for visible facts, not claims they cannot prove. An image may show a label or measurement; it cannot guarantee authenticity, fibre composition, battery health, fit or long-term durability."
        ]
      },
      {
        heading: "7. Act quickly if the live item and received item differ",
        paragraphs: [
          "Do not wait until every item in a large order reaches the warehouse before reviewing the first arrival. PikoBuy’s public return policy describes a five-day application period for qualifying goods after the status changes to In Warehouse, measured as 120 hours from the next hour. Eligibility also depends on the seller’s return service, the product remaining resalable and category-specific exclusions. The seller must agree to the return.",
          "Use the accurate reason when requesting help. The policy distinguishes a seller sending the wrong product or an item with a quality problem from a buyer changing their mind or choosing incorrectly. Costs and responsibility can differ. Keep packaging, labels and seals intact until you decide, because altering them can affect eligibility for some categories. A clear source link, option record and warehouse image give the request a traceable chain of evidence."
        ]
      },
      {
        heading: "8. Use a simple link-verification workflow every time",
        paragraphs: [
          "The repeatable process is short: save the complete source record, paste the URL into PikoBuy, compare the imported result, verify the exact option and current amount, record the first payment, then match the warehouse photos to the saved order. If a direct link fails, search with specific keywords or an image and keep any alternative separate until its identity is confirmed. This sequence reduces silent substitutions and makes each decision reviewable.",
          "No product-link method can guarantee stock, seller behaviour or final quality. The useful standard is narrower: each link should lead to a current record, each selected option should be written down, and each warehouse item should be compared with that record before international shipping. For the next stage, use the warehouse QC checklist to inspect category-specific details, then the shipping guides to plan a parcel using actual weight, dimensions and live route information."
        ],
        checklist: ["Verify the current source", "Compare the PikoBuy result", "Confirm every option", "Record the live amount", "Match warehouse photos", "Resolve differences before parcel submission"]
      }
    ],
    faq: [
      ["Can I search PikoBuy without a product link?", "Yes. PikoBuy’s public home page says users can search directly or submit product links, images or sourcing requests, and its beginner guide says the search box accepts links or keywords."],
      ["Which seller platforms does PikoBuy’s guide mention?", "The public beginner guide names Taobao, Tmall, 1688, Weidian and Yupoo, while also referring to other platforms. Availability of a particular listing or option still needs to be checked in the current purchase flow."],
      ["Is a PikoBuy spreadsheet price final?", "No. Treat it as a reference. PikoBuy’s guide says prices are subject to the actual purchase, so confirm the current amount, selected option and any seller-side delivery charge before paying."],
      ["What should I do if the warehouse item does not match the link?", "Compare the source record, selected option and warehouse photos, then contact support promptly with the order details. PikoBuy’s return policy sets a limited application window for qualifying warehouse items and requires seller consent."]
    ],
    sources: [
      { label: "PikoBuy home page — discovery and purchasing overview (accessed August 31, 2026)", href: "https://www.pikobuy.com/home" },
      { label: "PikoBuy Beginner's Guide — search, order and warehouse workflow (accessed August 31, 2026)", href: "https://www.pikobuy.com/guide" },
      { label: "PikoBuy Returns & Exchanges — eligibility and application window (accessed August 31, 2026)", href: "https://www.pikobuy.com/protocol/returns" },
      { label: "PikoBuy Shipping Terms — inspection scope for forwarded goods (accessed August 31, 2026)", href: "https://www.pikobuy.com/protocol/shipping" }
    ],
    related: [
      { label: "How to Use a PikoBuy Spreadsheet Without Guessing", href: "/articles/how-to-use-pikobuy-spreadsheet" },
      { label: "PikoBuy QC Photos: A Category-by-Category Checklist", href: "/articles/pikobuy-qc-photos-category-checklist" },
      { label: "Browse PikoBuy spreadsheet categories", href: "/categories" }
    ]
  },
  {
    slug: "pikobuy-warehouse-consolidation-guide",
    title: "PikoBuy Warehouse Consolidation: A Pre-Shipping Guide",
    seoTitle: "PikoBuy Warehouse Consolidation Guide (2026)",
    tag: "Warehouse planning",
    description: "A practical PikoBuy warehouse consolidation guide covering receipt checks, return timing, packaging choices, parcel data and shipment submission.",
    reviewed: "Fact-checked against PikoBuy public pages on September 2, 2026",
    published: "2026-09-02",
    keywords: [
      "PikoBuy warehouse consolidation",
      "PikoBuy warehouse",
      "combine PikoBuy orders",
      "PikoBuy parcel submission",
      "PikoBuy package consolidation",
      "PikoBuy shipping from China"
    ],
    intro: [
      "Warehouse consolidation is the point where separate purchases become one international-shipping decision. PikoBuy says it can centrally manage orders from different sources, and its public contact page says items from different sellers can be combined into one package. That can simplify shipment planning, but combining everything automatically is not always the best choice. A missing item, a return deadline, a restricted product or bulky packaging can change the sensible parcel plan.",
      "This guide explains how to move from warehouse arrival to parcel submission without inventing a storage period, fixed consolidation fee, guaranteed route or delivery date. It uses PikoBuy’s current public workflow: goods arrive, the warehouse checks them in and provides photo confirmation, the buyer reviews the items and packaging choices, then selects an available route and pays the international shipping charge. The practical goal is to resolve item-level problems before they become parcel-level problems."
    ],
    sections: [
      {
        heading: "1. Separate purchased orders from forwarded goods",
        paragraphs: [
          "PikoBuy documents two related paths. In the buy-for-me path, it purchases items from sellers and centrally manages orders from different sources. In the forwarding path, the user obtains the PikoBuy warehouse address, gives it to the sender, completes a forwarding form and waits for the warehouse to receive the goods. Use the correct order record for each item because responsibility and after-sales handling differ between the two paths.",
          "PikoBuy’s forwarding terms say every forwarded item must be unpacked and inspected. They also state that PikoBuy does not provide after-sales service for forwarded goods; the user must contact the sender or seller, while PikoBuy can help ship goods back. If an incoming forwarded parcel is missing items for reasons not caused by PikoBuy, the terms direct the user to verify the problem with the sender. Keep seller, sender and domestic-tracking records attached to each forwarded item."
        ],
        checklist: ["Order type: purchased or forwarded", "Seller or sender", "Domestic tracking number", "Expected quantity", "Warehouse order record"]
      },
      {
        heading: "2. Reconcile each warehouse arrival before combining",
        paragraphs: [
          "PikoBuy’s beginner guide describes warehouse check-in, photo confirmation and a defect check. Start with identity rather than cosmetic details. Match the order number, product, selected colour, size or specification, quantity and visible accessories. When several similar orders arrive, compare each warehouse record with the exact saved selection instead of relying on thumbnails or memory.",
          "Create a simple status for every item: received and matched, needs more evidence, return issue, or ready for parcel. Do not mark an entire haul ready because most items look correct. One uncertain product can delay or restrict the final shipment. If the photos do not show a decision-changing detail, PikoBuy’s forwarding terms say users can view the inspection photos or purchase additional detailed photos. Ask for a precise angle or measurement rather than a vague request to check quality."
        ]
      },
      {
        heading: "3. Review arrivals while return options still exist",
        paragraphs: [
          "Waiting for every seller can be convenient for consolidation, but it can conflict with return timing. PikoBuy’s public returns policy describes a five-day application period for qualifying items after the status changes to In Warehouse, calculated as 120 hours from the next hour. Eligibility also depends on the seller offering the service, the item remaining in the required resale condition and product-specific exclusions.",
          "Review each arrival promptly even when you intend to ship everything together later. Keep packaging, labels, seals and accessories intact until the decision is complete. The policy says PikoBuy can only return an item with seller consent, and a buyer-requested unconditional return can include return shipping, the seller’s original shipping charge and a RMB 5 service fee. Do not let a possible consolidation saving erase a time-limited option to resolve a wrong item."
        ],
        checklist: ["Warehouse arrival time recorded", "Return eligibility checked", "QC reviewed promptly", "Packaging kept resalable", "Any issue opened before parcel submission"]
      },
      {
        heading: "4. Decide which items belong in the same parcel",
        paragraphs: [
          "PikoBuy states that items from different sellers can be combined into one package, but that statement is not a guarantee that every product is suitable for every route. Group items only after checking their product types, fragility, dimensions and current route eligibility. A parcel containing ordinary clothing may have different options from one that also includes batteries, liquids, electronics or other restricted goods.",
          "Consider splitting when one item makes the whole parcel unusually bulky, fragile or difficult to route. Shoe boxes, large accessories and protective cases can increase dimensions. A delicate item may need reinforcement that adds size and weight to everything around it. The cheapest-looking consolidation is not automatically the lowest-risk plan. Compare the actual parcel alternatives in the live flow instead of assuming that one large carton always costs less than two smaller ones."
        ]
      },
      {
        heading: "5. Choose packaging requests for the contents",
        paragraphs: [
          "PikoBuy’s beginner guide says users can add requests such as minimal packaging or reinforced packaging during the warehouse stage. Minimal packaging may reduce unnecessary bulk, while reinforcement may better protect fragile or easily crushed goods. Those choices pull in opposite directions, so choose based on the contents rather than applying one instruction to every parcel.",
          "List any packaging requirement before the warehouse prepares the shipment. Identify which original boxes must remain, which seller packaging may be unnecessary and which items need protection from movement or pressure. Do not ask staff to remove seals, labels or packaging that still matters for a return decision. After repacking, use the resulting parcel figures rather than an earlier estimate based only on the products."
        ],
        checklist: ["Original boxes to keep", "Packaging that may be reduced", "Fragile items to reinforce", "Return-sensitive seals to preserve", "Final repacked data to recheck"]
      },
      {
        heading: "6. Estimate with the finished parcel data",
        paragraphs: [
          "PikoBuy’s public shipping estimator requests the destination country or region, product type, weight, length, width and height. Enter the warehouse or packed-parcel figures when available. A product listing weight is only an early reference because seller packaging, consolidation materials and protective requests can change the international parcel.",
          "Record all calculator inputs with the quote date. This is especially important for US and European buyers comparing more than one packing plan. Change one variable at a time: parcel contents, packaging, weight, dimensions or destination. PikoBuy does not publish one universal rate per kilogram on the estimator page, so do not turn a single quote into a permanent rate or apply another shopper’s route result to a different parcel."
        ]
      },
      {
        heading: "7. Compare the live routes before paying",
        paragraphs: [
          "The beginner guide says routes differ in delivery time and billing methods. Compare only the routes currently shown for the exact destination, product type and parcel. Check the live restrictions, chargeable figures, tracking information and any available protection terms. Avoid naming one permanent best route because availability and conditions can change.",
          "PikoBuy’s shipping terms say international parcels are carried by third-party logistics providers and identify customs action, confiscation, damage, loss and peak-season delay as possible risks. Consolidation does not remove those uncertainties. Use accurate product descriptions and values, preserve purchase evidence and leave time and budget margin. If a route term is unclear, ask support before payment instead of relying on an old review or screenshot."
        ]
      },
      {
        heading: "8. Submit the parcel only after a final audit",
        paragraphs: [
          "Before submission, make one parcel manifest with every included item, quantity, warehouse order number and visible status. Confirm that unresolved returns and evidence requests are excluded. Match the final destination, product type, weight and dimensions to the quote you intend to use. Save the selected route terms and amount at the time of payment.",
          "PikoBuy’s public guide places parcel submission and payment before dispatch, and says tracking information will be available within three days after shipment. Treat that as the platform’s stated tracking-update window, not a delivery promise. Save the parcel number, dispatch date and tracking record. A disciplined consolidation workflow is complete when every item has a traceable decision and the final parcel matches the data used to choose its route."
        ],
        checklist: ["Every included item listed", "No unresolved return issue", "Final weight and dimensions confirmed", "Correct destination and product type", "Current route terms saved", "Parcel and tracking numbers retained"]
      }
    ],
    faq: [
      ["Can PikoBuy combine items from different sellers?", "PikoBuy’s public contact page says items from different sellers can be combined into one package. The final parcel still needs to meet the current product, route, weight and dimension requirements."],
      ["Should I wait for every order before checking warehouse photos?", "No. Review each arrival promptly. PikoBuy’s return policy describes a limited five-day application period for qualifying warehouse items, so waiting for the final seller may remove an earlier item’s return option."],
      ["Does minimal packaging always make shipping cheaper?", "It can reduce unnecessary bulk, but no saving is guaranteed. The live quote depends on the packed parcel, destination, product type, weight, dimensions and available route. Fragile goods may justify reinforcement instead."],
      ["What information should I save before parcel submission?", "Keep the item manifest, warehouse order numbers, QC decisions, final weight and dimensions, destination, product type, selected route terms, payment amount, parcel number and tracking record."]
    ],
    sources: [
      { label: "PikoBuy home page — purchase, inspection, repacking and global shipping overview (accessed September 2, 2026)", href: "https://www.pikobuy.com/home" },
      { label: "PikoBuy Beginner's Guide — warehouse, packaging, parcel and tracking flow (accessed September 2, 2026)", href: "https://www.pikobuy.com/guide" },
      { label: "PikoBuy Shipping Terms — forwarding receipt, inspection and logistics risks (accessed September 2, 2026)", href: "https://www.pikobuy.com/protocol/shipping" },
      { label: "PikoBuy Returns & Exchanges — eligibility, timing and packaging conditions (accessed September 2, 2026)", href: "https://www.pikobuy.com/protocol/returns" },
      { label: "PikoBuy Contact page — combining items from different sellers (accessed September 2, 2026)", href: "https://www.pikobuy.com/contact" },
      { label: "PikoBuy Shipping Estimate — destination, product type, weight and dimensions (accessed September 2, 2026)", href: "https://www.pikobuy.com/shipping-cost" }
    ],
    related: [
      { label: "PikoBuy QC Photos: A Category-by-Category Checklist", href: "/articles/pikobuy-qc-photos-category-checklist" },
      { label: "PikoBuy Shipping to the US: How to Build a Real Estimate", href: "/articles/pikobuy-shipping-to-us-real-estimate" },
      { label: "PikoBuy Shipping to Europe: VAT, Routes and Parcel Checks", href: "/articles/pikobuy-shipping-europe-vat-routes" }
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
