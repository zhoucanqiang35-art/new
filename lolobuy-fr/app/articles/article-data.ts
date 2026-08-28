export type ArticleSection = { heading: string; paragraphs: string[]; checklist?: string[] };

export type Article = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  readTime: string;
  reviewed: string;
  published?: string;
  modified?: string;
  sources?: string[];
  englishOnly?: boolean;
  intro: string;
  sections: ArticleSection[];
  takeaway: string;
};

export const articles: Record<string, Article> = {
  "lolobuy-spreadsheet-guide": {
    slug: "lolobuy-spreadsheet-guide",
    title: "How to Use a LoloBuy Spreadsheet Without Losing the Source",
    description: "A practical, source-aware method for moving from a spreadsheet find to a LoloBuy warehouse record and an international parcel without losing the product details that matter.",
    eyebrow: "LOLOBUY SPREADSHEET GUIDE",
    readTime: "About 10 minutes",
    reviewed: "Official public pages reviewed 26 August 2026",
    intro: "A spreadsheet is useful because it turns a large product market into a shortlist. It is risky when the row becomes more trusted than the live product page. The safest approach is simple: treat every row as a discovery record, preserve the original source, and recheck the changing details at each stage of the LoloBuy workflow.",
    sections: [
      {
        heading: "Start with what LoloBuy actually says it does",
        paragraphs: [
          "LoloBuy’s public homepage describes a purchasing service that begins with a product link. A shopper pastes a link, places an order and pays the product price plus freight within mainland China. The seller then sends the item to LoloBuy’s warehouse. The platform says the warehouse checks visible defects and details such as size and colour, provides inspection feedback and pictures, stores the item, and lets the user select stored goods for an international parcel.",
          "That sequence is the useful backbone for a spreadsheet. It also shows why one row cannot be the whole record. A row may help you discover a shoe, jacket or accessory, but the order eventually passes through a seller listing, a selected variation, a warehouse item and a parcel. Each stage can contain different information. If you save only the product name and price, you may struggle to prove which colour, size or seller page you meant when a problem appears.",
          "LoloBuy’s public page currently displays 180 days of free storage and refers to 100 logistics routes. Those are dated platform statements, not promises from this guide. Account rules, route availability and promotions can change. Record the date whenever a number matters, and check the live account again before making a decision."
        ]
      },
      {
        heading: "Build a product record that survives a changing listing",
        paragraphs: [
          "A useful spreadsheet row should answer six questions: what is the product, where did the listing come from, which variation do you want, what did the seller show, what did the warehouse receive, and what happened next? You do not need a complicated database. A few consistent columns are more valuable than a large sheet filled with copied marketing text.",
          "Keep the original product URL in its own column. Save the seller or shop name when it is visible, the product title, the exact selected colour and size, quantity, the price shown at the time of review, and the review date. If the listing provides a seller item number or another stable identifier, preserve that too. Product titles are often shortened, translated or reused, so a title alone is a weak reference.",
          "Add one short note explaining why the item was saved. For example: ‘Need chest width before approval,’ ‘Compare sole shape with seller photos,’ or ‘Check plug type before shipping.’ This turns the spreadsheet into a decision tool. It also prevents a common mistake: collecting hundreds of links without knowing which detail should be checked later."
        ],
        checklist: [
          "Original product URL and seller name",
          "Exact colour, size, style and quantity",
          "Price shown and date checked",
          "Seller images or key measurement notes",
          "One clear warehouse-QC request",
          "Order, warehouse and parcel references when available"
        ]
      },
      {
        heading: "Recheck the live listing before paying",
        paragraphs: [
          "A spreadsheet price is a snapshot. Before paying, open the current listing and confirm that the intended variation still exists. Match the thumbnail, written option and price. A low headline price may belong to a different colour, a deposit, an accessory or the smallest option. If the translated title is vague, use the seller images and option sequence rather than guessing.",
          "Measurements deserve a separate check. Letter sizes are not consistent across sellers. For clothing, compare the seller’s stated chest, shoulder, length, waist or inseam against a garment that already fits. For shoes, note whether the listing uses EU sizing, foot length or an internal measurement. If the page provides no useful measurements, write that uncertainty into the record instead of silently assuming a familiar size.",
          "The official help centre includes topics about discounted prices, products that appear in stock, order modifications, cancellations and refunds. That is a useful reminder that seller-side information can change after a row is created. When the order status asks for confirmation, read the message in the account and respond to the actual issue rather than relying on the spreadsheet note."
        ]
      },
      {
        heading: "Use warehouse pictures as a second record, not decoration",
        paragraphs: [
          "When the item reaches the warehouse, compare it with the source record. Start with identity: product type, quantity, selected colour, selected size and obvious style details. Then inspect visible condition. Look for major marks, damaged packaging, mismatched pairs, broken hardware, incorrect print placement or an obviously different shape. The most important question is not ‘Does this look good?’ but ‘Does this match what I ordered and the checks I wrote down?’",
          "LoloBuy publicly describes free quality-inspection pictures and inspection feedback. The number, angle and detail of images available in a particular order should be verified inside the account. A photograph can show a visible seam, surface mark, label position or measurement ruler. It cannot prove authenticity, hidden construction, exact fibre content, internal electronics, waterproofing or long-term durability. Keep that boundary clear in both the spreadsheet and any article written from it.",
          "If the photos do not answer the decision question, record what is missing. A request such as ‘Please show the outsole and size tag in one clear frame’ is more useful than ‘More photos please.’ If a problem is visible, save the relevant image and the warehouse or order reference before requesting a return or clarification."
        ]
      },
      {
        heading: "Keep the parcel stage separate from the product stage",
        paragraphs: [
          "A good product find does not automatically make a good parcel. LoloBuy says stored products can be selected and submitted together, but the final shipping choice depends on the destination, contents, weight, dimensions, restrictions and routes available at that moment. Add parcel fields only after you know which warehouse items will actually be combined.",
          "Record the parcel number, included warehouse items, packed weight, dimensions, chosen route, quoted price and quote date. If the platform displays both actual and chargeable weight, keep both. This makes later comparisons fair. Comparing an unpacked product estimate with a packed consolidated parcel can create a false impression that a line suddenly became expensive.",
          "Do not publish a fixed ‘best route’ copied from someone else’s screenshot. LoloBuy’s public estimator asks for a destination, weight in grams, category and optional length, width and height; it displays available routes only after a destination is selected. That design itself tells you which inputs matter. Use the live tool and your actual parcel data."
        ]
      },
      {
        heading: "A simple routine that is easy to repeat",
        paragraphs: [
          "First, discover the item through FindSpreadsheet and save the main-site product page. Second, open the current source and record the exact option, price and date. Third, decide the one or two details that warehouse pictures need to answer. Fourth, compare the received item with the original record. Fifth, keep only approved warehouse items in the parcel shortlist. Finally, obtain a live route quote using the real destination and parcel information.",
          "If something goes wrong, work from the order record. LoloBuy’s Help Center tells users to select an order for help with goods, shipping, returns or refunds, and provides a Contact Us path for unresolved cases. A complete spreadsheet record helps you explain the issue in concrete terms: which order, which variation, which warehouse image and which parcel.",
          "This method is deliberately modest. It does not claim that a spreadsheet guarantees quality or that inspection pictures remove every risk. It makes the process easier to audit. That is what a useful spreadsheet should do: keep the source, the decision and the evidence connected from the first click to the final parcel."
        ]
      }
    ],
    takeaway: "Use the spreadsheet to preserve evidence, not to replace the live listing. Save the source, selection, date, QC question, warehouse result and parcel reference as separate parts of one decision trail."
  },

  "lolobuy-qc-photo-checklist": {
    slug: "lolobuy-qc-photo-checklist",
    title: "A Practical LoloBuy QC Photo Checklist for Clothing, Shoes and Accessories",
    description: "A category-by-category method for reading LoloBuy warehouse inspection photos without claiming that photographs prove more than they can show.",
    eyebrow: "WAREHOUSE QC METHOD",
    readTime: "About 11 minutes",
    reviewed: "Official public pages reviewed 26 August 2026",
    intro: "Warehouse photographs are most useful when you already know what question each image should answer. This checklist begins with LoloBuy’s published warehouse process, then separates visible evidence from assumptions. It is designed for ordinary shoppers comparing clothing, shoes and accessories before parcel submission.",
    sections: [
      {
        heading: "What the official process confirms",
        paragraphs: [
          "LoloBuy’s public homepage says goods purchased from different sellers are sent to its China warehouse. It describes a warehouse inspection for visible defects and details such as size and colour, followed by inspection feedback. The order summary on the same page refers to free quality-inspection pictures and currently displays 180 days free of storage charge.",
          "Those statements support a sensible workflow: receive the item, confirm that it matches the order, review visible condition and decide whether to keep, question or return it. They do not mean every possible defect will be visible or that every product claim can be verified from a photograph. The available pictures and after-sales options for a specific order must be checked inside the live account.",
          "Before opening the pictures, write down the ordered variation. Include size, colour, style, quantity and any critical seller claim you can actually inspect. This avoids judging the item from memory. If a seller offered several nearly identical options, save a screenshot or note of the selected one before the listing changes."
        ]
      },
      {
        heading: "Run the identity check first",
        paragraphs: [
          "Begin with the simplest questions. Is the correct product type present? Is the quantity right? Does the colour broadly match the selected option? Can you see the stated size or model where a tag or label is expected? If the order is a pair, do both items appear to match each other? A beautiful close-up is not useful when the warehouse received the wrong variation.",
          "Next, compare the overall shape with the seller page. Look at proportions, panel layout, pocket position, hardware and major graphics. Lighting can change colour, and a wide-angle camera can distort shape, so do not reject an item because two photographs have slightly different tones. Focus on large, repeatable differences that remain visible across more than one angle.",
          "If the pictures show a ruler, read where the ruler starts and ends. A ruler lying beside a garment is not the same as a clear measurement from seam to seam. For a measurement that determines fit, ask for a frame that shows both endpoints. Record the result in the spreadsheet rather than relying on a chat message you may not find later."
        ],
        checklist: [
          "Correct product, quantity and selected variation",
          "Visible size or model information where applicable",
          "Overall shape and major design details",
          "Matching pair or set components",
          "Clear measurement endpoints for fit-critical dimensions"
        ]
      },
      {
        heading: "Clothing: inspect fit signals before small finishing details",
        paragraphs: [
          "For T-shirts, hoodies and jackets, start with measurements. Chest width, body length, shoulder width and sleeve length usually matter more than a tiny loose thread. Compare the measured garment with an item you already wear, using the same measurement method. A size label alone is weak evidence because seller sizing may differ from the sizing familiar in your country.",
          "Then check construction visible from the outside. Look at seam direction, symmetry, zipper alignment, pocket position, cuff shape and whether the garment lies evenly. For prints or embroidery, compare placement, scale and obvious spelling against the seller image. Creases from folding are normal; a permanent mark, tear or badly misaligned component is a different issue.",
          "For sets, confirm that both pieces are present and correspond to the same colour and size choice. If the top and bottom use separate sizing, record both. For trousers and shorts, prioritise waist, rise, inseam and overall length. A flattering seller photo does not answer those fit questions.",
          "Fabric weight, exact fibre composition, warmth and durability are difficult to prove from a photograph. A close-up may show texture, but it cannot reliably confirm a material claim. Write ‘not verifiable from photos’ when appropriate. Honest uncertainty is better than turning visual impression into a factual statement."
        ]
      },
      {
        heading: "Shoes: treat the pair as two products that must agree",
        paragraphs: [
          "Start by confirming size information on both shoes and, if relevant, the box. Look for a clear view of the size label rather than assuming the order record guarantees what arrived. Compare left and right shoe shape, colour, panel placement and sole. Mismatched sizing, different shades or visibly different construction between the pair should be raised before shipping.",
          "Use top, side, heel and outsole views for different questions. The top view helps compare toe shape and symmetry. Side views show panel alignment and sole attachment. Heel views reveal whether the backs sit evenly. The outsole helps confirm tread pattern and visible wear. One flattering angle cannot answer all four.",
          "If fit is uncertain, an internal-length measurement may help, but the method needs to be clear. A tape placed on top of the shoe is not an internal measurement. Ask what can reasonably be measured and compare it with the method used for your reference shoe. Packaging also affects parcel volume, so decide separately whether a box is important to you.",
          "Photos cannot prove long-term comfort, cushioning performance, glue durability or authenticity. They can reveal visible glue marks, damage, asymmetry and obvious variation errors. Keep your decision within that evidence boundary."
        ]
      },
      {
        heading: "Accessories: scale, hardware and function need different views",
        paragraphs: [
          "For bags and wallets, record dimensions before judging scale. A product photographed alone can look larger than it is. Ask for length, height and depth when those measurements affect use. Check the number and position of compartments, closure type, strap presence and any removable pieces listed by the seller.",
          "Inspect visible hardware for missing parts, severe scratches, obvious colour differences and closure alignment. For a zip, a still image can show teeth and puller condition but not guarantee smooth operation. For sunglasses, confirm the selected frame and lens colour and look for obvious asymmetry or surface damage. A photo does not certify UV performance.",
          "For hats, compare crown shape, brim form, circumference or adjustable closure. For belts, confirm length, width, buckle type and visible hole spacing. Small accessories are easy to approve quickly, but a wrong dimension can make the item unusable even when the finish looks acceptable."
        ]
      },
      {
        heading: "Turn a visible problem into a clear support request",
        paragraphs: [
          "When a concern appears, identify the exact image and the exact difference. ‘Photo 3 shows a dark mark near the right pocket’ is easier to investigate than ‘quality is bad.’ Attach the seller reference when the issue is a wrong variation. If a measurement is unclear, state the two points that should be measured.",
          "The LoloBuy Help Center publicly lists topics for order changes, cancellations, refunds, promised returns and handling defective products. It also tells users to select an order for help with goods, shipping, return or refund issues. That means the order record—not a general social post—is the right place to start when action is required.",
          "Keep copies of the order details, important warehouse pictures and support response until the decision is complete. Return conditions and timing can depend on the seller, item status and current platform rules. Do not assume that a general statement applies to every listing.",
          "A disciplined QC review is not about finding a perfect item. It is about deciding whether the visible evidence matches the product you ordered and the level of uncertainty you are willing to accept. Confirm identity, inspect category-specific details, request only the missing evidence that affects the decision, and stop short of claims the photographs cannot support."
        ]
      }
    ],
    takeaway: "QC photos can confirm visible identity, variation, measurements and condition. They cannot prove authenticity, hidden construction, exact materials or long-term performance."
  },

  "lolobuy-international-shipping-guide": {
    slug: "lolobuy-international-shipping-guide",
    title: "LoloBuy International Parcel Planning: Weight, Volume and Route Checks",
    description: "A plain-language guide to using LoloBuy’s public freight-estimation inputs and planning a warehouse parcel without relying on fixed prices or old route screenshots.",
    eyebrow: "INTERNATIONAL PARCEL PLANNING",
    readTime: "About 11 minutes",
    reviewed: "Official public pages reviewed 26 August 2026",
    intro: "International shipping is not one price attached to one product. It is a parcel decision shaped by destination, contents, weight, dimensions and the routes available at the time of submission. LoloBuy’s public freight estimator makes those inputs visible. This guide explains how to use them without turning an estimate into a promise.",
    sections: [
      {
        heading: "Read the estimator as a list of variables",
        paragraphs: [
          "LoloBuy’s public Shipping Fee Estimation page asks for a destination country or region, weight in grams, a product category and optional length, width and height in centimetres. It notes that available routes are displayed after the destination is selected. The category control allows up to three selections on the public page reviewed for this article.",
          "Those fields explain why a single universal shipping table is unreliable. Two parcels with the same weight can receive different options because their dimensions, contents or destinations differ. A route visible for one country may not appear for another. A quote made before the warehouse knows the packed dimensions is useful for planning, but it is not the final parcel charge.",
          "LoloBuy’s homepage currently refers to 100 logistics routes and global shipping. Treat that as a description of the platform’s network, not as a statement that every route accepts every product or serves every destination. The useful question is always narrower: which routes are available for this parcel, to this destination, today?"
        ]
      },
      {
        heading: "Separate actual weight from chargeable weight",
        paragraphs: [
          "Actual weight is what the packed parcel weighs on a scale. Many carriers also consider volume because a large light box occupies more transport space than a compact parcel of the same weight. A route may calculate a dimensional or volumetric weight from length, width and height and charge using whichever basis its current rules specify.",
          "This is why shoes with boxes, padded jackets, large bags and protective packaging can cost more than a product-only weight suggests. The product row may show or imply one item weight, but the international parcel also includes boxes, wrapping and consolidation materials. Do not compare two quotes unless you know whether both use packed figures.",
          "Record actual packed weight, dimensions and any chargeable weight displayed by the platform. If you request packaging changes, obtain a new figure before choosing a route. Removing unnecessary packaging may reduce volume, but it can also reduce protection. The right decision depends on fragility, replacement difficulty and your tolerance for damage—not only the lowest number."
        ],
        checklist: [
          "Destination country or region",
          "Actual packed weight in grams",
          "Packed length, width and height",
          "Product categories and restricted contents",
          "Displayed chargeable weight, route and quote date"
        ]
      },
      {
        heading: "Classify the contents before comparing routes",
        paragraphs: [
          "The estimator asks for category because contents matter. Clothing, footwear, electronics, liquids, batteries, fragile goods and other special items may not share the same available lines. A parcel with mixed categories can be more complicated than separate simple parcels. Select the closest honest category and read the live restrictions for each displayed route.",
          "Do not hide or misdescribe contents to obtain a cheaper line. An inaccurate declaration can create delays, returns, disposal, extra charges or customs problems. If an item contains a battery, liquid, magnet or another restricted component, confirm whether the route accepts it. A product title may not make that feature obvious, so check the actual item specification.",
          "LoloBuy’s public Help Center includes Shipping & Logistics sections for route introductions, logistics search, mail restrictions and customs matters. Those topics are the correct live references when a parcel raises a specific question. This independent guide deliberately avoids publishing a fixed restricted-item list because route and destination rules can change."
        ]
      },
      {
        heading: "Consolidate for a reason, not by habit",
        paragraphs: [
          "LoloBuy says shoppers can select products stored in the warehouse and submit them as one parcel. Consolidation can reduce repeated base packaging and make tracking simpler. It does not automatically make every combination cheaper. A larger box may cross a size threshold, increase volumetric weight or remove a route that was available for a smaller parcel.",
          "Create a parcel shortlist before submitting. Group items by destination, urgency, fragility and restrictions. A low-value soft-clothing parcel may justify a different balance of cost and protection from a parcel containing fragile electronics or a difficult-to-replace item. If one product creates a route restriction for the entire group, compare the cost and risk of separating it.",
          "The platform’s public page currently displays 180 days of free storage. That may give users time to consolidate, but it should be treated as a dated statement reviewed on 26 August 2026. Check the account’s current storage clock and rules for each item. Waiting for another seller shipment is useful only when it does not create storage or return problems for goods already received."
        ]
      },
      {
        heading: "Compare route details, not just the first price",
        paragraphs: [
          "For each available route, note the quote, chargeable weight, size limits, content restrictions, tracking level, compensation terms and any delivery estimate shown in the live account. A cheaper route can be reasonable for a replaceable item when its restrictions and tracking are acceptable. A more expensive route is not automatically faster or safer; read the actual service description.",
          "Keep the quote date. Promotions, fuel costs, capacity and route availability can change. A screenshot from another shopper may use a different country, weight, parcel size or category. Even your own earlier estimate may no longer match after warehouse packing. Use old quotes to understand a range, not to promise a final cost.",
          "Taxes and customs handling are destination-specific. Do not copy a duty statement from one country to another. Review the customs information shown for the current route and destination, and make accurate declarations. If the legal or tax consequence matters, consult the appropriate destination authority or qualified adviser rather than relying on a product spreadsheet."
        ]
      },
      {
        heading: "Keep a parcel record until delivery is complete",
        paragraphs: [
          "Before paying for international shipping, save the list of included warehouse items, packaging choice, packed weight, dimensions, route, quoted amount and parcel number. After submission, keep the tracking number and important status updates. This creates a clear timeline if the parcel stops moving or arrives with a problem.",
          "Tracking events are scans, not a continuous map. A gap does not automatically mean a parcel is lost, and a repeated status can reflect handover between carriers or customs processing. Use the logistics-search route provided by the platform and compare the event date, location and carrier. Avoid making a firm delivery prediction from one early scan.",
          "LoloBuy’s Help Center tells users to select an order for help with shipping and provides Contact Us when the listed topics do not resolve the problem. A support request should include the parcel number, route, last meaningful tracking event and the date. Keep the description factual and specific.",
          "The most reliable shipping workflow is therefore short: wait for real warehouse data, enter the correct destination and contents, compare routes using packed weight and dimensions, read restrictions, save the quote and monitor the parcel reference. It is less exciting than a claim about the ‘cheapest line,’ but it remains useful when prices and routes change."
        ]
      }
    ],
    takeaway: "Plan with the real packed parcel. Destination, content category, actual weight, dimensions and current route eligibility matter more than an old screenshot or a product-only estimate."
  },

  "lolobuy-fees-exchange-rate-ledger": {
    slug: "lolobuy-fees-exchange-rate-ledger",
    title: "LoloBuy Fees and Exchange Rates: Build a Cost Ledger Before You Ship",
    description: "A practical method for recording LoloBuy product cost, China domestic freight, payment conversion, warehouse extras and international parcel charges without treating a changing quote as a fixed fee.",
    eyebrow: "LOLOBUY COST CONTROL",
    readTime: "About 12 minutes",
    reviewed: "Official public pages and Help Center reviewed 28 August 2026",
    published: "2026-08-28",
    modified: "2026-08-28",
    englishOnly: true,
    sources: [
      "LoloBuy public homepage and live English interface, checked 28 August 2026",
      "LoloBuy Help Center: “How to Purchase on LoloBuy?”, checked 28 August 2026",
      "LoloBuy Help Center: “Shopping Agent Service”, checked 28 August 2026",
      "LoloBuy Help Center: “Status of the Shopping Agent Orders”, checked 28 August 2026",
      "LoloBuy Help Center: “Details on products’ weight and warehouse stocking”, checked 28 August 2026"
    ],
    intro: "A cheap product can become an expensive purchase when its costs are recorded as one vague total. LoloBuy’s public workflow separates the item, delivery inside China, warehouse decisions and international parcel. Your records should do the same. This guide gives you a simple cost ledger that works even when prices, exchange rates, payment methods and routes change.",
    sections: [
      {
        heading: "Begin with a cost map, not a single ‘LoloBuy fee’",
        paragraphs: [
          "People searching for LoloBuy fees often want one percentage. The public process is more useful when read as several cost events. LoloBuy’s Help Center says the buyer pays for the item and Chinese local delivery before a purchasing agent places the order. After the seller ships to the warehouse, the user reviews the stored item and later submits a separate international parcel. The international shipping deposit is based on estimated weight, route and destination, while the final amount can change after the carrier verifies the packed size and weight.",
          "That means the first product payment is not a landed-cost quote. It may cover the merchandise and delivery to the China warehouse, but it does not tell you the final cost to receive the goods in France, Germany, the United States or another destination. Optional warehouse work, packaging choices, payment conversion and destination charges may occur at different times. Combining them too early makes it difficult to see which decision changed the result.",
          "Use one row for each charge or adjustment. Give every row a date, currency, reason, order or parcel reference, and evidence such as an account receipt or card statement. A ledger is more reliable than memory because it preserves both the platform-side figure and what your payment provider actually settled. It also lets you compare two orders without pretending that they had identical products, packaging or shipping routes."
        ]
      },
      {
        heading: "Record the product and China domestic freight separately",
        paragraphs: [
          "Before payment, save the exact product option, quantity, seller price and the date checked. Then record delivery from the seller to LoloBuy’s China warehouse as its own line. The official purchase guide treats the product price and Chinese local delivery fee as separate inputs, even when the checkout displays them together. Keeping both figures prevents a common comparison error: calling one seller more expensive when the difference is actually domestic freight.",
          "Seller-side discounts can complicate the record. A headline price may apply to another size, colour, minimum quantity, deposit or campaign. Do not enter it until the selected option and checkout agree. If a manual shopping-agent order is required, preserve the filled product link, specification, quantity, commodity price and freight-to-warehouse figure. The current interface warns that certain third-party or manual-order products may involve extra service conditions, so review the live confirmation rather than assuming the standard flow applies.",
          "For a multi-item seller order, decide how you will allocate one domestic freight amount. The simplest method is to keep it on a separate seller-order row. If you need item-level landed cost, allocate it consistently—by quantity, merchandise value or measured weight—and name the method. Do not switch methods between products simply to make one item look cheaper."
        ],
        checklist: [
          "Exact product option, quantity and seller price",
          "China domestic freight as a separate line",
          "Seller discount and date actually applied",
          "Order reference and payment confirmation",
          "Any manual-order or special-service notice"
        ]
      },
      {
        heading: "Separate a platform claim from the charge on your order",
        paragraphs: [
          "LoloBuy’s current ‘Shopping Agent Service’ Help Center page advertises a standard purchasing service with a zero service fee. That is a dated public statement checked on 28 August 2026, not permission to label every future order ‘fee-free.’ The same public interface distinguishes standard purchasing, express purchasing and value-added services, and its manual-order warning says some third-party platform products may have additional service fees. The only figure that belongs in your ledger is the one shown for the specific order you are about to approve.",
          "Use a three-column check: published description, live order charge and final settled charge. The first column records what the public help page said on the review date. The second records the account’s checkout or confirmation screen. The third records the amount actually deducted or refunded. If all three match, the record is clear. If they differ, you have a precise question for support instead of the vague claim that ‘the fee changed.’",
          "Optional services should never be hidden inside the merchandise price. Custom photographs, special packaging, rehearsal or preview services, reinforcement, package removal, insurance or extended storage may be useful, but each answers a different problem. Record the service name, why it was selected, quoted amount and result. This helps you learn whether the service saved cost, reduced uncertainty or simply added expense."
        ]
      },
      {
        heading: "Capture exchange rates without inventing a universal rate",
        paragraphs: [
          "LoloBuy’s purchase guide says multiple currencies and several payment methods are available. It does not follow that every user receives the same conversion. Your total may be affected by the display currency, the platform’s conversion at that moment, the payment channel, the card network and the card issuer. A public currency selector is not the same thing as the final rate applied to your statement.",
          "For every payment, save five values: the original RMB-based amount if shown, the platform display currency, the platform total, the amount settled by your bank or wallet, and the transaction date. If your bank adds a foreign-transaction charge, keep that on a separate line. Then calculate an effective rate only for your own transaction: settled home-currency amount divided by the underlying RMB amount. Label it ‘effective order rate,’ not ‘the LoloBuy exchange rate.’",
          "Refunds need the same discipline. A refund may be credited on a different date from the purchase, when currency values or payment-provider treatment differ. Compare the original settled amount with the actual returned amount and record any unrecovered difference separately. Do not state that the platform kept an exchange-rate difference unless the account record and payment statement support that conclusion."
        ]
      },
      {
        heading: "Pause the ledger at the warehouse decision gate",
        paragraphs: [
          "When an order reaches the warehouse, it becomes a new decision rather than an automatic instruction to ship. Confirm that the order status, received quantity, selected variation and visible condition match the source record. LoloBuy’s published standard inspection scope includes visible appearance information such as style, quantity, colour, size, model, damage and defects, but it also lists limits for sealed goods, electronics and details that cannot be verified. Inspection photos reduce some uncertainty; they do not convert every seller claim into a fact.",
          "At this point, add the measured warehouse weight and dimensions if the account provides them, but do not call them final parcel figures. The official warehouse help material describes measurement after the individual product is packaged for storage. International shipping is calculated on the later packed parcel, which may combine items, remove packaging or add protection. Product weight, warehouse stock-in weight and parcel chargeable weight are three different fields.",
          "If the item is wrong or visibly defective, record the return decision before building a parcel. Shipping a disputed item internationally usually makes the problem harder to resolve. Save the order reference, relevant QC image, date and support outcome. A clean decision trail is more valuable than a long narrative: approved, clarification requested, return requested, or excluded from parcel."
        ]
      },
      {
        heading: "Estimate the parcel twice: before and after packing",
        paragraphs: [
          "The first parcel estimate is for planning. Use the destination, honest product category, expected packed weight and dimensions. Its job is to reveal whether the basket still makes economic sense and whether one bulky or restricted item changes the available routes. Record the quote date and inputs. Never copy another shopper’s shipping price into your ledger because their destination, contents, packaging and chargeable weight may be different.",
          "The second estimate is the decision figure. Build it after selecting the actual warehouse items and packaging choices. Save the route, packed actual weight, dimensions, any displayed volumetric or chargeable weight, shipping deposit, discounts and optional parcel services. LoloBuy’s purchase guide states that the final shipping fee is calculated after the carrier verifies package size and weight and that a difference from the deposit may be returned to the user’s account. The current order-status help also tells users to watch for added charges or refunds caused by final-weight differences.",
          "Do not erase the estimate when an adjustment arrives. Add a new ledger line. Keeping both numbers shows whether the change came from packaging, verified weight, route pricing or another named adjustment. It also improves future estimates because you can compare estimated and final data from your own parcels rather than relying on an anonymous screenshot."
        ],
        checklist: [
          "Destination and honest content category",
          "Items included in the submitted parcel",
          "Packed actual dimensions and weight",
          "Displayed volumetric or chargeable weight",
          "Route, deposit, adjustment and quote dates",
          "Optional packaging or protection services"
        ]
      },
      {
        heading: "Calculate landed cost only when the evidence is complete",
        paragraphs: [
          "Your working total can include merchandise, China domestic freight, confirmed purchasing or payment charges, optional warehouse services, allocated international shipping, payment-provider conversion costs and any destination charge you actually paid. Keep taxes or customs amounts separate until an official assessment or carrier invoice exists. Destination rules can change, and this guide does not estimate legal liability from a product title.",
          "For a consolidated parcel, choose and document how international shipping is allocated. Weight is easy but may understate the cost of bulky light products. Chargeable weight is better when you can trace it to an item or sub-package. Merchandise value may suit insurance analysis but not space consumption. If exact allocation is impossible, label the result an estimate and keep the whole parcel total beside it.",
          "A useful comparison ends with two numbers: item-level landed cost and unreconciled parcel-level cost. The second should approach zero as refunds, surcharges and destination invoices arrive. If it does not, investigate the named entries rather than forcing the spreadsheet to balance. This is the practical purpose of a LoloBuy fee ledger: not to promise the cheapest purchase, but to show where the money went and which next decision can still be changed."
        ]
      }
    ],
    takeaway: "Treat LoloBuy cost as a timeline: product, China freight, payment conversion, warehouse choices, packed parcel and final adjustments. Record each event in its original currency and reconcile it only when the evidence arrives."
  }
};
