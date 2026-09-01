export type ResearchArticle = {
  slug: string;
  tag: string;
  title: string;
  description: string;
  readTime: string;
  published?: string;
  updated?: string;
  keywords?: string[];
  sources?: { label: string; url: string; accessed: string }[];
  relatedLinks?: { label: string; url: string }[];
  illustration?: { src: string; alt: string; caption: string; width: number; height: number };
  sections: { heading: string; paragraphs: string[] }[];
};

export const researchArticles: ResearchArticle[] = [
  {
    slug: "how-to-use-a-lolobuy-spreadsheet",
    tag: "BEGINNER",
    title: "How to Use a LoloBuy Spreadsheet Without Buying Blind",
    description: "A fact-checked workflow for moving from product discovery to listing verification, warehouse review and a considered parcel decision.",
    readTime: "14 min read",
    sections: [
      { heading: "A spreadsheet is a discovery tool, not a promise", paragraphs: [
        "A useful LoloBuy spreadsheet solves one problem well: it turns a scattered group of marketplace listings into a directory that is easier to search. That can save time, especially when product titles are inconsistent or a marketplace is difficult to browse in another language. It does not make the underlying seller, item, price or stock more reliable. The source listing remains the transaction-level record, and the live LoloBuy order screen remains the place where current cost and service details must be checked.",
        "Treat every row as a lead. Open the product page, identify the source category, compare the available options and decide whether the listing contains enough evidence to continue. A good directory should help you reach that decision faster; it should never pressure you to treat a popular product name or attractive cover image as proof of quality."
      ]},
      { heading: "Start by verifying the source listing", paragraphs: [
        "Before submitting anything, compare the spreadsheet record with the live seller page. Check the item title, selected colour, size, model, quantity and any option-specific surcharge. Product pages can change after a directory entry is published. A seller may replace images, remove an option, change a price or reuse an old listing for a different version. If the live page and the directory disagree, the live listing should control your next step.",
        "Save the original URL and a screenshot of the option you intend to order. This simple record helps later when the warehouse item must be compared with what you selected. It also reduces disputes caused by vague instructions such as “black version” when a page contains several similar black options. Precise option names, size codes and quantities are more useful than product nicknames."
      ]},
      { heading: "Understand what LoloBuy publicly confirms", paragraphs: [
        "LoloBuy’s public homepage describes a purchasing service for products from channels in China, including online and offline sources. It also describes warehouse processing, quality inspection with photos, the ability to select stored products and submit them together as a parcel, and international shipping. Those statements support the general workflow used in this guide: purchase, warehouse intake, visible review, parcel submission and delivery tracking.",
        "They do not establish a universal result for every product. An item can require manual ordering details, a seller can refuse a return, a route can reject a product category, or an inspection can be limited by packaging and product type. Reliable guidance separates the confirmed workflow from these order-specific variables instead of turning a broad service description into a guarantee."
      ]},
      { heading: "Write an order instruction that cannot be misunderstood", paragraphs: [
        "When an item needs manual details, state the exact option, size, colour, quantity and any seller instruction in a compact format. Avoid adding requests that conflict with the listing. If a measurement or component matters, mention it before purchase rather than assuming warehouse staff will infer it from a general note. For clothing, compare the seller’s measurement chart with a garment you already own; do not rely only on familiar size labels.",
        "For electronics, confirm model, connector, regional compatibility and included accessories. For sets, list every expected piece. For shoes, check the seller’s size system and insole guidance. The goal is not to produce a long message. It is to remove ambiguity at the few points where the wrong choice would create a return, an exchange or an unusable product."
      ]},
      { heading: "Separate product price from total buying cost", paragraphs: [
        "A spreadsheet price is best used for comparison, not budgeting the final landed amount. The product price may be followed by domestic freight, option surcharges, service-related charges, packaging choices, international delivery and destination taxes or fees. Currency conversion also changes over time. A USD reference can make rows easier to compare, but it is not a checkout quote and should never be presented as one.",
        "Build a simple cost worksheet with three stages: product checkout, warehouse or optional services, and parcel delivery. Record estimates separately from final charges. This prevents a low product price from hiding an expensive shipping profile. A bulky low-cost item can be a worse value than a slightly more expensive compact item once chargeable weight and packaging are considered."
      ]},
      { heading: "Use warehouse photos as a decision checkpoint", paragraphs: [
        "The public LoloBuy information confirms quality inspection and photos, but a photograph can only show visible information. Start with identity: is it the ordered product, option and quantity? Then inspect obvious damage, colour, shape, stitching, print placement, labels where relevant, included accessories and any measurement shown. Compare more than one image because lighting and camera angle can distort colour and proportion.",
        "Do not use warehouse photos as proof of authenticity, fit, long-term durability or internal performance. A sealed device may not be opened, a battery cannot be assessed from the outside, and fabric composition cannot be established from a picture. When a missing angle would change your decision, request a precise additional view if the current service interface allows it."
      ]},
      { heading: "Choose whether to return, wait or consolidate", paragraphs: [
        "After warehouse review, make an explicit decision. If the item is wrong or visibly defective, check the live return or after-sales options immediately because seller policies and time limits can differ. If the item is acceptable, decide whether to submit it alone or wait for other stored items. LoloBuy publicly describes selecting warehouse products and submitting them together as one parcel, but consolidation is not automatically cheaper in every case.",
        "Combining items can reduce repeated base charges, yet it can also create a larger parcel, trigger volumetric pricing or mix products with different route restrictions. Review the dimensions, weight and category of the combined items before assuming one box is optimal. Keep an eye on the live storage countdown shown in the account rather than relying on an old third-party number."
      ]},
      { heading: "Compare shipping routes at the moment you submit", paragraphs: [
        "International routes are live products. Availability and price can change with destination, parcel size, weight, product classification and carrier rules. Compare the routes shown for the actual parcel rather than using a screenshot or recommendation from another buyer’s different order. Check whether the quote uses actual or volumetric weight and whether batteries, liquids, magnets or other restricted characteristics affect eligibility.",
        "Read declaration and insurance terms carefully. Follow the destination’s customs and import requirements; do not copy a declaration value from a forum post. Save the selected route, quoted amount, submitted weight, packaging choice and tracking number. This record is useful if the final billed weight changes or a support request is needed."
      ]},
      { heading: "Build a repeatable evidence trail", paragraphs: [
        "A careful first order creates a template for later orders. Keep the source URL, selected option, seller price, warehouse images, measured weight, parcel quote and tracking result together. Note what was accurate and what changed. Over time, this gives you better evidence than a collection of anonymous recommendations because it reflects the categories, destinations and risk tolerance that actually apply to you.",
        "The most useful spreadsheet is therefore not the one with the biggest headline number. It is the one that helps you reach current listings, explains uncertainty and encourages verification at each decision point. Use the directory for speed, the seller page for product detail, the warehouse record for visible condition and the parcel screen for the live shipping decision."
      ]},
      { heading: "A practical final checklist", paragraphs: [
        "Before purchase: open the current source listing, confirm the exact option and record the live product cost. Before acceptance: check identity, quantity, visible condition, measurements and accessories in the warehouse record. Before shipping: compare route restrictions, chargeable-weight method, packaging, declaration guidance and destination rules. After submission: save the parcel details and monitor tracking through the official order record.",
        "This workflow does not remove every risk. It does reduce preventable mistakes caused by stale links, vague options, unread photos and copied shipping claims. That is the proper role of an independent LoloBuy research site: make the buyer’s questions clearer, preserve the difference between facts and advice, and send the reader back to live information whenever a detail can change."
      ]}
    ]
  },
  {
    slug: "lolobuy-qc-photos-guide",
    tag: "QC",
    title: "How to Review LoloBuy QC Photos Before Shipping",
    description: "A category-specific method for using warehouse inspection images without mistaking visible evidence for a product guarantee.",
    readTime: "13 min read",
    sections: [
      { heading: "What the platform actually confirms", paragraphs: [
        "LoloBuy’s public information says products receive quality inspection and that photos are provided. That is enough to treat the warehouse stage as a genuine review checkpoint, but it is not enough to promise a fixed number of pictures or an identical inspection scope for every product. Sealed goods, specialist items and details hidden inside a product naturally limit what a visual inspection can establish.",
        "A responsible QC guide begins with that limit. Inspection photos help identify the item, compare visible options, spot obvious damage and decide whether more evidence is needed. They do not certify authenticity, material composition, safety, fit, battery condition or long-term performance. The rest of this guide focuses on what a buyer can reasonably learn from visible evidence."
      ]},
      { heading: "Check identity before quality", paragraphs: [
        "The first question is not whether the item looks good; it is whether the warehouse received what you ordered. Compare the product type, colour, size or model, quantity and selected version with your saved order record. Count detachable pieces and accessories. For sets, verify every component separately. For products with several similar options, compare the exact option code rather than relying on a translated nickname.",
        "Identity mistakes are often easier to resolve than subjective quality disagreements, especially when caught early. If the wrong item or option appears, document the mismatch with the seller page and order selection. Do not approve a parcel simply because the received item is attractive if it is not the item you paid for."
      ]},
      { heading: "Review the complete image set in a fixed order", paragraphs: [
        "Use the same sequence every time: overall front, overall back, sides, labels or model information, close details, measurements and included accessories. A fixed order prevents attention from being captured by one impressive close-up while a missing piece or incorrect option goes unnoticed. Zoom in, but also step back and compare proportions across the full item.",
        "Warehouse lighting can alter colour, and wide-angle lenses can distort shape near the edge of the frame. Compare colour across several images and use seller photos only as a reference, not a calibrated standard. If a colour difference matters, request a neutral-light or closer image when available and phrase the request around the specific uncertainty."
      ]},
      { heading: "Clothing: measurements matter more than the tag", paragraphs: [
        "For tops and outerwear, prioritize chest width, body length, sleeve length and shoulder width when those measurements are available. For trousers and shorts, look for waist, rise, inseam or outseam. Compare them with a garment that fits you. A labelled medium from one seller can differ materially from a medium elsewhere, so the tag alone is weak evidence.",
        "Then check visible construction: collar shape, seam alignment, cuffs, hems, zip path, pocket symmetry, print or embroidery placement and surface marks. Photos cannot tell you the exact fabric composition or how the garment will feel after washing. Keep those limits separate from genuine visible defects such as a broken fastener or severe misalignment."
      ]},
      { heading: "Shoes: compare the pair, not one shoe", paragraphs: [
        "View both shoes together before examining details. Compare toe shape, height, heel alignment, sole colour, panel symmetry and visible glue or stitching. Confirm the size tag and the size system used by the seller. If fit is critical, an insole measurement is more useful than a familiar size label, but even that does not guarantee comfort because width and last shape matter.",
        "Decide whether boxes and packaging are important before parcel submission. They may add protection and collector value, but they can also add bulk and volumetric weight. The QC decision and shipping decision are connected: keeping every piece of packaging can change the route cost later."
      ]},
      { heading: "Bags, wallets and accessories: inspect function points", paragraphs: [
        "Small goods should be checked against exact dimensions because close-up photos can make scale misleading. Look at zips, clasps, strap anchors, corners, edge finishing, interior compartments and included hardware. Ask for an open view when the internal layout affects the purchase decision. Reflective surfaces and dark interiors often need a more direct angle.",
        "For jewellery and watches, photos can show colour, alignment and visible finish, but they cannot confirm metal composition, water resistance, movement accuracy or skin safety. Avoid turning a clean exterior into a technical claim. If the product requires professional testing, standard warehouse imagery is not a substitute."
      ]},
      { heading: "Electronics: visible condition is only the beginning", paragraphs: [
        "For electronics, confirm the model, connector, plug type, colour, included cable and visible condition. Check whether the order interface records any available test, but do not assume a photo proves functionality. Battery health, wireless performance, internal components and certification cannot be established from an exterior image. Route restrictions may also apply to batteries or magnetic components.",
        "If a seller advertises a specification that cannot be visually verified, keep it as an unconfirmed seller claim until stronger evidence exists. A cautious decision may be to avoid the item, request a supported service or accept the uncertainty knowingly. The key is to avoid relabelling uncertainty as a passed QC check."
      ]},
      { heading: "Request additional evidence precisely", paragraphs: [
        "An effective photo request identifies one missing decision point: “show the inside label straight on,” “measure the chest from pit to pit,” or “photograph the connector next to the included cable.” Vague requests such as “better photos” can produce more images without resolving the uncertainty. Use a reference point when size or placement matters.",
        "Ask only for evidence that could change your decision. Endless close-ups can delay the order and still fail to prove hidden qualities. If the remaining concern is authenticity, internal performance or future durability, acknowledge that another warehouse photo may not answer it."
      ]},
      { heading: "Decide: accept, question or pursue after-sales", paragraphs: [
        "Finish every QC review with an explicit outcome. Accept when the item matches the order and the visible condition fits your expectations. Ask a focused question when a missing angle or measurement can resolve uncertainty. Check after-sales or return options quickly when the product is wrong or visibly defective, because seller rules and timing can vary.",
        "Keep the order selection, seller listing and warehouse images together. If support is needed, describe the mismatch factually and attach the relevant comparison. Clear evidence is more useful than emotional language, especially when the problem is an incorrect option, missing piece or obvious damage."
      ]},
      { heading: "The sixty-second repeatable method", paragraphs: [
        "First, verify product identity, option, quantity and accessories. Second, scan the full item for obvious damage or contamination. Third, compare category-specific details and measurements. Fourth, note what cannot be verified visually. Fifth, request one precise extra view only if it can change the decision. Finally, save the evidence before submitting the parcel.",
        "This method is deliberately conservative. It uses LoloBuy’s confirmed inspection-and-photo workflow without inventing a fixed photo count or claiming a universal inspection standard. Good QC research is not about promising perfection. It is about catching visible, preventable problems before international shipping makes them harder and more expensive to address."
      ]},
      { heading: "Keep category expectations realistic", paragraphs: [
        "The same visual standard should not be applied mechanically to every category. A garment can be compared through measurements and construction, while an electronic device may still contain major unknowns after a clean exterior inspection. A decorative object may depend on dimensions and surface finish; a set may depend on completeness. Start each review by naming the decision the images must support.",
        "This keeps QC practical and prevents false confidence. When the available evidence cannot answer the important question, the honest conclusion is not “passed”; it is “not verifiable from standard photos.” Buyers can then request a supported check, accept the uncertainty or choose a product with clearer evidence."
      ]}
    ]
  },
  {
    slug: "lolobuy-shipping-cost-guide",
    tag: "SHIPPING",
    title: "LoloBuy Shipping Cost Guide: Weight, Packaging and Route Decisions",
    description: "A practical way to estimate parcel costs, compare routes and avoid treating a product price as the final landed amount.",
    readTime: "15 min read",
    sections: [
      { heading: "Shipping begins before the parcel screen", paragraphs: [
        "International cost is shaped by the products you choose, not only the carrier selected later. A heavy jacket, rigid shoe box, large decorative item or battery-powered device can change parcel weight, dimensions and route eligibility. Two products with the same seller price can therefore produce very different landed costs. Planning should begin while shortlisting products, not after every item reaches the warehouse.",
        "LoloBuy’s public information confirms that stored products can be selected and submitted together as a parcel and that the platform provides international shipping. It does not make one route universally cheapest or promise a fixed delivery time. Every real parcel has to be assessed using its destination, contents, measured dimensions and the live choices shown at submission."
      ]},
      { heading: "Build the full cost stack", paragraphs: [
        "Separate costs into layers. The first layer is the seller transaction: product price, option surcharges and domestic freight where applicable. The second layer is warehouse or optional handling, including any packaging choices selected. The third layer is international transport. The fourth layer is destination-side tax, duty or handling when applicable under local rules.",
        "A spreadsheet’s converted USD figure belongs only to the first comparison layer unless it explicitly says otherwise. Exchange rates and charges can change. Record estimates and final amounts in different columns so you can see where the budget moved. This also makes future comparisons more honest: a cheap product with expensive volume is not automatically a bargain."
      ]},
      { heading: "Understand actual and volumetric weight", paragraphs: [
        "Carriers may charge by scale weight or by a dimensional formula that reflects the space a parcel occupies. Large, light boxes are the classic reason volumetric weight becomes important. The exact formula and divisor can differ by route, so use the rule displayed for the available line rather than copying a number from an old guide.",
        "Estimate dimensions before consolidating when possible. Shoe boxes, rigid presentation packaging and loosely packed clothing can increase volume. Removing packaging may reduce cost, but it can also reduce protection or remove something you wanted. Treat repacking as a trade-off, not an automatic saving."
      ]},
      { heading: "Consolidation can help, but it is not magic", paragraphs: [
        "Combining warehouse items may reduce repeated base charges and make one shipment easier to track. LoloBuy publicly describes selecting stored products and submitting them together. The useful question is not whether consolidation is available; it is which items should share a parcel. Products with different restrictions, fragile goods or very bulky packaging may be better handled differently.",
        "Compare a combined estimate with reasonable split alternatives when the parcel is large or mixed. A single parcel can cross a weight or size threshold that changes the available lines. The cheapest option on a small parcel may disappear after another item is added."
      ]},
      { heading: "Check route eligibility for the actual contents", paragraphs: [
        "Route availability can depend on destination and product characteristics such as batteries, liquids, magnets, powders, food, cosmetics or branded-goods classification. A listing being purchasable does not mean every international line will carry it. Check the restrictions shown for the current parcel and ask platform support when classification is unclear.",
        "Avoid permanent “best line” recommendations. They age quickly and may not apply to another buyer’s country or contents. A trustworthy guide teaches the comparison criteria: eligibility, chargeable-weight method, tracking, compensation or insurance scope, estimated service window and total live quote."
      ]},
      { heading: "Use warehouse measurements, not seller guesses", paragraphs: [
        "Seller listings can contain approximate product weights, incomplete dimensions or no shipping data at all. Warehouse records are more useful because they relate to the received item, but the final packed parcel can still differ after cartons, protection and repacking are added. Treat pre-packing figures as planning inputs, not final billing proof.",
        "When a quote changes, compare the item weights, packed dimensions and chargeable-weight rule. This is more productive than assuming the platform simply changed the price. Save screenshots of the parcel details and final route quote so you have a clear record if support is needed."
      ]},
      { heading: "Packaging decisions change both risk and cost", paragraphs: [
        "Minimal packaging can reduce volume, while reinforcement can protect fragile corners, shoes, electronics or structured bags. There is no universal correct choice. Consider product value, fragility, moisture sensitivity, crush risk and how much the original packaging matters to you. A box that appears unnecessary to one buyer may be part of the product for another.",
        "Make the decision before paying for international delivery and verify what each selected service actually does. Do not assume a generic label guarantees waterproofing, impact protection or the preservation of retail packaging. Keep expectations tied to the wording shown in the live parcel interface."
      ]},
      { heading: "Declarations and destination charges require local accuracy", paragraphs: [
        "Customs declarations and import charges are destination-specific. Use accurate product information and follow the legal requirements of the country receiving the parcel. Do not copy another person’s declared value simply because their parcel arrived. Different countries, product categories and parcel values can produce different obligations.",
        "A shipping quote may not represent every destination-side charge. Read the route terms and local customs guidance, especially when taxes, duties or carrier handling fees may apply. An independent product directory cannot provide universal tax advice, so this stage must be verified against the current route and destination rules."
      ]},
      { heading: "Read insurance and compensation terms before relying on them", paragraphs: [
        "The word insurance can hide important limits. Check which events are covered, the maximum compensation, excluded goods, evidence requirements and claim deadline. Loss, damage, seizure, delay and missing contents may be treated differently. Do not assume buying an optional service removes every shipping risk.",
        "Preserve the parcel record, warehouse images, declared contents, final weight and tracking events. If a problem occurs, those records can support a clearer claim. Review the current terms at checkout because coverage can differ by route and change over time."
      ]},
      { heading: "Track the parcel using the official record", paragraphs: [
        "After submission, keep the platform order number and carrier tracking number. Early tracking can remain unchanged while a parcel is processed, handed to a logistics partner or moving between systems. A quiet scan history does not automatically prove loss, but a missed expected event or an explicit exception deserves a documented support request.",
        "Use dates and status text when contacting support. Avoid relying on screenshots from unrelated parcels. If the carrier provides a destination-side number later, store both numbers together so the handoff is easier to follow."
      ]},
      { heading: "A practical pre-payment comparison", paragraphs: [
        "For each available route, record eligibility, quoted price, chargeable weight, packaging choice, tracking level, published service estimate and protection terms. Remove routes that do not accept the contents. Then compare the remaining options against your priorities instead of choosing solely by the lowest visible number. A slightly higher quote may be reasonable when tracking or product handling matters more.",
        "Finally, verify the destination address, contact details, declaration, parcel contents and selected services. Save the final screen. This disciplined comparison respects what LoloBuy publicly confirms—warehouse consolidation and international shipping—while keeping variable costs, delivery timing and route rules in the category where they belong: live decisions that must be checked for the actual parcel."
      ]},
      { heading: "Review the result after delivery", paragraphs: [
        "When the parcel arrives, compare the delivered contents with the warehouse images and saved packing record. Note the actual delivery timeline, condition of the outer carton, effectiveness of selected protection and any destination-side fee. This turns one order into useful evidence for the next rather than a vague memory of whether shipping felt expensive or slow.",
        "Do not generalize a single result into a permanent promise for every buyer. Routes, seasons, customs processing and parcel contents differ. Use the result to improve your own estimates and to ask better questions on the next order."
      ]}
    ]
  },
  {
    slug: "lolobuy-warehouse-storage-planning",
    tag: "WAREHOUSE",
    title: "LoloBuy Warehouse Storage Planning: Verify the Deadline Before You Wait",
    description: "A source-checked method for managing stored items when LoloBuy's current public materials show different storage periods.",
    readTime: "12 min read",
    published: "2026-08-22",
    updated: "2026-08-22",
    keywords: [
      "LoloBuy warehouse storage",
      "LoloBuy storage period",
      "LoloBuy warehouse deadline",
      "LoloBuy stored in warehouse",
      "LoloBuy parcel consolidation"
    ],
    sources: [
      {
        label: "LoloBuy public application copy, including the current homepage warehouse statement",
        url: "https://www.lolobuy.com/assets/index-49c06916.js",
        accessed: "22 August 2026"
      },
      {
        label: "LoloBuy Help Center — Free Storage Period",
        url: "https://www.lolobuy.com/prod-api/user/common/helpMenuDetail?id=1242300757049499",
        accessed: "22 August 2026"
      },
      {
        label: "LoloBuy Help Center — What to do after an item is stored",
        url: "https://www.lolobuy.com/prod-api/user/common/helpMenuDetail?id=1242296871158912",
        accessed: "22 August 2026"
      },
      {
        label: "LoloBuy Help Center — Product weight and warehouse stocking",
        url: "https://www.lolobuy.com/prod-api/user/common/helpMenuDetail?id=1242300744204423",
        accessed: "22 August 2026"
      }
    ],
    relatedLinks: [
      { label: "Browse the FindSpreadsheet product database", url: "https://findspreadsheet.com/" }
    ],
    sections: [
      { heading: "Why a storage guide must begin with verification", paragraphs: [
        "Warehouse storage sounds simple: wait until the products you want have arrived, then combine them into an international parcel. The difficult part is that waiting is not neutral. Seller after-sales windows can close, packaging choices can change the eventual parcel size, and an item can approach its warehouse deadline while another order is still moving through domestic delivery. A useful LoloBuy warehouse storage plan therefore needs dates, statuses and decisions rather than a vague intention to ship everything later.",
        "There is also a current source conflict that responsible guides should not hide. On 22 August 2026, English copy in LoloBuy's public application bundle said the warehouse provides 90 days of free storage. On the same date, the official Help Center article titled “Free Storage Period” said the free period for ordinary items is 180 days and described a reminder after 150 days. Because both statements are published by LoloBuy, neither number should be treated as a universal promise without checking the actual warehouse record."
      ]},
      { heading: "What the official pages currently agree on", paragraphs: [
        "Despite the different headline periods, the official material agrees on the operational point: storage is limited and the buyer must act. The Help Center says fees or disposal rules may apply after the relevant period, while the public interface tells buyers to pay attention to My Warehouse and submit qualifying goods for cross-border transport to avoid unnecessary expense or loss. That shared message is more dependable than copying one number into a permanent countdown.",
        "LoloBuy also defines “Stored in warehouse” as the stage at which the item has arrived at its warehouse and the buyer should visit My Warehouse to submit delivery to an overseas address. In other words, stored is not a passive final status. It is the beginning of the buyer's warehouse decision: accept the visible condition, resolve a problem, request a supported service, wait for compatible items or prepare a parcel."
      ]},
      { heading: "Use the item record as the controlling deadline", paragraphs: [
        "Open every stored item and record the arrival or stock-in date, the displayed storage countdown, the current item status and any warning shown in the account. If the Help Center, homepage and item record disagree, use the item-specific account information as the immediate operational signal and ask support for written clarification before relying on extra time. A screenshot with the date visible is far more useful than an old blog post if a deadline later becomes disputed.",
        "Do not calculate the last safe day by adding a remembered number to the seller's dispatch date. Storage normally begins only after the warehouse receives and processes the item, and an unmatched or unusual parcel may follow a different rule. The official storage article currently distinguishes ordinary items from unusual parcels that cannot be matched to an order, giving the latter a much shorter period. This is another reason to verify that every domestic tracking number and warehouse entry has been matched correctly."
      ]},
      { heading: "Create three warehouse groups instead of one waiting list", paragraphs: [
        "A single list of stored products hides risk. Divide the warehouse into three working groups. The first is ready: the item matches the order, visible checks are complete and it is eligible for the intended parcel. The second is unresolved: a measurement, missing component, wrong option, damage concern or after-sales request still needs action. The third is route-sensitive: batteries, liquids, magnets, fragile pieces, unusually large packaging or another characteristic may affect which shipping lines can accept the parcel.",
        "Only the ready group should be treated as a consolidation candidate. An unresolved item should not be added merely because the other products are approaching a preferred shipping date. A route-sensitive item deserves a separate live estimate before it is allowed to narrow the choices for everything else. This grouping turns the warehouse from a collection of thumbnails into a decision board."
      ]},
      { heading: "Keep the seller deadline separate from the storage deadline", paragraphs: [
        "Warehouse time and seller after-sales time answer different questions. The storage deadline concerns how long LoloBuy will hold the received item under the current account rules. A return or exchange depends on the seller, the order state, the reason, the available evidence and the current after-sales process. A long warehouse allowance does not mean a buyer can wait until the end of that allowance before reporting the wrong colour, missing piece or visible defect.",
        "Review QC evidence soon after stock-in. Compare the saved listing, selected option, quantity and warehouse photographs. If something objective is wrong, preserve the order selection and the specific image that shows the difference, then use the current after-sales channel promptly. If the concern cannot be proved visually, state exactly what additional evidence would resolve it. Storage planning should protect decision time, not consume it."
      ]},
      { heading: "Understand what was measured and how it was packed", paragraphs: [
        "The official warehouse-stocking article says the recorded dimensions refer to the outside length, width and height after the product is packaged, along with its weight before storage. It also explains that original express packaging is not always retained and lists situations in which an item cannot remain stocked in its original box. These details matter because the warehouse thumbnail may not represent the exact packaging that will later form the international parcel.",
        "Record whether retail packaging, domestic express packaging or protective material matters to you. Removing packaging can reduce volume, but it can also reduce protection or remove something that has product value. Keeping every box can increase chargeable volume. Make the choice deliberately and verify the available service wording in My Warehouse or during parcel submission rather than assuming that the seller's original carton will automatically be preserved."
      ]},
      { heading: "Choose a personal ship-by date with a safety margin", paragraphs: [
        "Your personal ship-by date should be earlier than the account's final deadline. Work backward from the earliest verified warehouse expiry, then allow time for a focused photo request, after-sales communication, packaging changes, rehearsal or pre-packing where available, and payment problems. Buyers in the United States or Europe should also consider weekends, holidays and the possibility that a preferred route is unavailable when the parcel is finally assembled.",
        "A practical rule is to set two reminders rather than one. The review reminder asks whether every item is ready, unresolved or route-sensitive. The submission reminder is the last planned day to finalize the parcel while a meaningful safety margin remains. These are editorial planning tools, not LoloBuy policy. Their purpose is to prevent the entire decision from depending on a single final-day login."
      ]},
      { heading: "Consolidate by compatibility, not by maximum quantity", paragraphs: [
        "LoloBuy's public interface describes selecting products, submitting a parcel, combining the packaging, weighing it and shipping it with tracking. That confirms consolidation as part of the workflow, but it does not prove that one large parcel is always cheapest. A larger box can be billed by volume, cross a route limit or expose every item to the restriction created by one sensitive product.",
        "Compare a sensible combined parcel with one or two split alternatives when the contents differ materially. Group ordinary clothing together if the live estimate supports it, while checking bulky shoe boxes, fragile decor or restricted electronics separately. Use warehouse weights and dimensions as planning inputs, but remember that final packed measurements can change after removal or reinforcement. The live parcel screen controls the real comparison."
      ]},
      { heading: "Run a five-minute warehouse review each week", paragraphs: [
        "Start with the oldest verified stock-in date. Check the displayed countdown and warnings, then scan for unresolved messages or services. Confirm that every item is attached to the correct order and that domestic tracking has not produced an unmatched parcel. Review the ready group against the likely destination and contents. Finally, update the two reminders and save a dated screenshot if the deadline or policy appears different from the previous review.",
        "This routine is intentionally short. Storage problems usually grow from missing small signals: an unread warehouse notice, a QC question postponed for several weeks, a parcel that was never matched, or an assumption that another item will arrive before the deadline. A brief regular review catches those signals while there is still room to act."
      ]},
      { heading: "Keep a compact evidence file", paragraphs: [
        "For each item, retain the source URL, selected option, order number, domestic tracking number, stock-in date, warehouse status, visible countdown and QC images. For the planned parcel, save the selected items, packaging choices, estimated and final measurements, route, quote and submission date. The file does not need to be elaborate; a small spreadsheet and dated screenshots are enough when the fields are consistent.",
        "This record helps with more than deadlines. It makes a support request specific, reveals which packaging choices affected volume and prevents a stale LoloBuy spreadsheet price from being confused with the final landed cost. It also provides evidence for improving the next order without turning one personal experience into a claim about every buyer."
      ]},
      { heading: "The safe conclusion when official numbers conflict", paragraphs: [
        "As of 22 August 2026, LoloBuy's own public materials do not present one consistent storage period across every page we checked. The responsible response is not to choose the larger number because it is more convenient or the smaller number because it sounds safer. Confirm the countdown and rule attached to the actual warehouse item, keep evidence of what the account shows, and obtain current support clarification when the deadline affects an important decision.",
        "Use the warehouse as an active checkpoint: review visible condition promptly, separate unresolved and route-sensitive items, plan compatible parcels and submit with time to spare. That approach remains useful even if LoloBuy later updates the public copy, because it is built around current account evidence rather than a number copied from a guide."
      ]}
    ]
  },
  {
    slug: "lolobuy-parcel-consolidation-guide",
    tag: "PARCEL",
    title: "LoloBuy Parcel Consolidation Guide: When to Combine or Split Items",
    description: "A source-checked method for deciding which LoloBuy warehouse items belong together and when a split parcel is the safer comparison.",
    readTime: "13 min read",
    published: "2026-08-26",
    updated: "2026-08-26",
    keywords: [
      "LoloBuy parcel consolidation",
      "combine LoloBuy warehouse items",
      "LoloBuy split parcel",
      "LoloBuy rehearsal parcel",
      "LoloBuy package weight"
    ],
    sources: [
      {
        label: "LoloBuy public application interface and rehearsal guidance",
        url: "https://www.lolobuy.com/assets/index-3e5642b9.js",
        accessed: "26 August 2026"
      },
      {
        label: "LoloBuy Help Center — Stored in warehouse status",
        url: "https://www.lolobuy.com/prod-api/user/common/helpMenuDetail?id=1242296871158912",
        accessed: "26 August 2026"
      },
      {
        label: "LoloBuy Help Center — Combining forwarded and purchased products",
        url: "https://www.lolobuy.com/prod-api/user/common/helpMenuDetail?id=1242300464365569",
        accessed: "26 August 2026"
      },
      {
        label: "LoloBuy Help Center — Packaging methods",
        url: "https://www.lolobuy.com/prod-api/user/common/helpMenuDetail?id=1242300751675537",
        accessed: "26 August 2026"
      },
      {
        label: "LoloBuy Help Center — Estimated weight and real weight",
        url: "https://www.lolobuy.com/prod-api/user/common/helpMenuDetail?id=1242300798075086",
        accessed: "26 August 2026"
      },
      {
        label: "LoloBuy Help Center — Domestic delivery fee for several items",
        url: "https://www.lolobuy.com/prod-api/user/common/helpMenuDetail?id=1242296838456383",
        accessed: "26 August 2026"
      }
    ],
    relatedLinks: [
      { label: "Compare current product listings on FindSpreadsheet", url: "https://findspreadsheet.com/" }
    ],
    sections: [
      { heading: "Consolidation begins after warehouse intake", paragraphs: [
        "Parcel consolidation is the decision to place two or more stored items into one international shipment. It is not the same as adding products to one shopping cart, and it is not completed when a seller dispatches an order inside China. LoloBuy's Help Center defines “Stored in warehouse” as the point at which an item has reached its warehouse and the buyer can visit My Warehouse to submit delivery to an overseas address. That warehouse record is the starting point for a real consolidation decision.",
        "The useful question is not simply, “Can these items fit in one box?” A buyer needs to decide whether the items are ready at the same time, compatible with the same route, sensible under the same packaging choice and still economical after the packed dimensions are known. Combining everything by default can hide an unresolved QC problem or allow one restricted item to reduce the shipping choices for otherwise ordinary goods."
      ]},
      { heading: "Do not confuse domestic delivery with international consolidation", paragraphs: [
        "One official LoloBuy answer says that several items from one seller may incur one Chinese domestic delivery fee when they are submitted and checked out together, while an overweight domestic package may require a balance payment. That statement concerns the seller-to-warehouse stage. It does not prove that the later international shipment will have one fixed fee, or that combining items from several sellers will always lower the final cross-border cost.",
        "Keep the two stages in separate spreadsheet columns. Record seller price and Chinese domestic freight under the purchase order, then record warehouse services, packaging and international transport under the parcel. This prevents a domestic shipping saving from being counted twice. It also makes the comparison honest when products from different sellers arrive on different days or require different decisions before they are eligible for international submission."
      ]},
      { heading: "Create ready, unresolved and route-sensitive groups", paragraphs: [
        "Before selecting a parcel, divide stored items into three groups. Ready items match the order, have sufficient visible evidence and need no open after-sales action. Unresolved items have a missing component, wrong option, damage concern, unanswered measurement or pending service. Route-sensitive items may contain batteries, liquids, magnets, fragile construction, oversized packaging or another characteristic that could affect acceptance by a shipping line. The labels are an editorial planning method, not official LoloBuy statuses.",
        "Only the ready group should enter the first consolidation comparison. Combining an unresolved item can make it harder to pursue a return or obtain focused evidence. Combining a route-sensitive item can cause the system to remove routes available to the rest of the goods. A good parcel plan therefore starts with eligibility and evidence, not with the maximum number of thumbnails a buyer can select in My Warehouse."
      ]},
      { heading: "Check whether the items are actually compatible", paragraphs: [
        "LoloBuy's public Help Center says a stocked forwarding item may be shipped together with or separately from a purchased product, provided the items do not exceed the applicable maximum weight. It also says the system will notify the buyer when goods cannot be shipped together because of security-inspection or customs-policy issues. The article does not publish one universal maximum, so the current warehouse and parcel screens must control the decision.",
        "Use that same compatibility test for ordinary purchases. Select the proposed group and inspect the routes that remain available for the actual destination and contents. If adding one item removes suitable options, compare that item separately instead of assuming customer service can override the system later. A purchasable product is not automatically compatible with every international route or with every other product in the warehouse."
      ]},
      { heading: "Compare one combined parcel with a realistic split", paragraphs: [
        "Build two scenarios before payment. Scenario A places all compatible ready items into one parcel. Scenario B separates the item most likely to change volume, fragility or route eligibility. Record the selected products, estimated packed weight, dimensions, available lines, packaging choices and total live quote for each scenario. The split should be realistic: two coherent parcels are more useful to compare than a separate shipment for every small item.",
        "A combined parcel can reduce repeated base costs, but it can also cross a size or weight threshold, become chargeable by volume or require stronger packaging. A split can cost more in repeated charges while preserving a better route for ordinary goods. There is no permanent winning structure. The better option is the one supported by the current screens for the exact products and destination, with acceptable protection and restrictions."
      ]},
      { heading: "Packaging can change the answer", paragraphs: [
        "LoloBuy's packaging article separates parcels billed by actual weight from parcels billed by volumetric weight. It describes right-sized bags and cartons, filling gaps for protection in some actual-weight cartons, and reducing excess carton space for volume-billed parcels. It also acknowledges a trade-off: cutting a carton can make it less secure even when it helps reduce volume. That is why “remove every box” is not a responsible universal rule.",
        "Decide which packaging has product value and which is merely domestic transport material. A shoe box, structured retail box or fragile product carton may provide protection or be part of what the buyer wants to keep. Soft clothing may tolerate compression more easily. Record the instruction before comparing parcels, because a quote based on boxes you later remove—or protection you later add—is not a like-for-like estimate."
      ]},
      { heading: "Treat estimated weight as a planning number", paragraphs: [
        "The official weight article distinguishes estimated weight from real weight. It describes the estimate as a warehouse-stage calculation using recorded item weight and planned packaging, while real weight is measured after parcel submission and packing. It also explains that removing original packaging can create a difference. The current public article contains route examples and formulas, but those examples should not be reused as present-day quotes without checking the live line rules.",
        "For consolidation, this means the first comparison is provisional. Save the estimate, selected packaging and chargeable-weight method, then check the parcel detail after packing. If the final amount changes, compare the real packed weight and dimensions with the earlier record before drawing a conclusion. A difference is not automatically an error; it may reflect removed packaging, added protection, the final carton or the route's current billing rule."
      ]},
      { heading: "Use rehearsal as a comparison tool, not a shipment", paragraphs: [
        "The current LoloBuy interface describes rehearsal or pre-submit as a simulation for pre-packing and freight estimation, not a real shipment. It says the buyer must still submit an actual parcel afterward. The interface also warns that rehearsal weight and volume are estimates and may fluctuate because of packaging materials and measurement differences. Those limits make rehearsal useful for a difficult comparison, but not a final delivery guarantee.",
        "Consider rehearsal when bulky packaging, mixed shapes or a volumetric route makes the ordinary estimate too uncertain to support a decision. Save the selected items, intended line, packaging service and rehearsal result. Then use the result to compare a combined and split plan, while recognising that the actual parcel still needs a live route, final packing and payment. Do not present a rehearsal number as the final billed weight."
      ]},
      { heading: "Plan for the United States or Europe without copying routes", paragraphs: [
        "Buyers in the United States and Europe should use the destination entered in their own account when comparing parcels. Route availability, product restrictions, customs treatment and carrier terms can differ by country and can change over time. A route screenshot from another buyer does not establish what is available for a different address, parcel size or product classification. This guide therefore does not name a permanent cheapest or fastest line.",
        "Check the destination address, accepted contents, chargeable-weight method, published service estimate, tracking, compensation terms and customs notices shown for each current option. Use truthful product descriptions and follow local import requirements. If one sensitive product narrows the choices for the whole parcel, test it separately. The purpose of consolidation is to improve the complete shipment decision, not merely to produce the fewest tracking numbers."
      ]},
      { heading: "Preserve evidence before clicking submit", paragraphs: [
        "Save a compact parcel record containing each order number, selected item, warehouse weight, visible dimensions, QC decision and packaging instruction. Add screenshots of the combined estimate and the most reasonable split alternative. At final submission, record the selected route, declared contents, estimate, services and payment. After packing, add the final weight, dimensions, freight adjustment and tracking number shown in the official parcel detail.",
        "This evidence is useful even when nothing goes wrong. It reveals whether a box, fragile item or route-sensitive product drove the result and improves the next consolidation decision. If support is needed, dated screens and exact order numbers are more useful than saying a parcel “became expensive.” Keep advice separate from evidence: the spreadsheet can organise the comparison, but the live LoloBuy record controls the transaction."
      ]},
      { heading: "A repeatable combine-or-split checklist", paragraphs: [
        "Combine only items that are stored, correctly matched, visibly reviewed, free of unresolved after-sales questions and accepted by an appropriate common route. Compare their packed-size risk, packaging needs and warehouse deadlines. Then price at least one sensible split if the parcel is bulky, fragile or mixed with a route-sensitive product. Recheck every live variable before payment rather than relying on an earlier screenshot, calculator or third-party recommendation.",
        "Split when one item removes useful routes, needs materially different protection, creates uncertain volume or should not wait for the rest. Consolidate when the goods are compatible and the current combined result is better for the buyer's cost, protection and tracking priorities. This method does not promise that one box is cheaper. It gives US and European buyers a defensible way to decide using current warehouse evidence instead of a slogan."
      ]}
    ]
  },
  {
    slug: "lolobuy-order-warehouse-status-guide",
    tag: "ORDER STATUS",
    title: "LoloBuy Order Status Guide: From Payment to My Warehouse",
    description: "A source-checked explanation of LoloBuy order and warehouse statuses, including what Received means and when a buyer needs to act.",
    readTime: "12 min read",
    published: "2026-08-28",
    updated: "2026-08-28",
    keywords: [
      "LoloBuy order status meaning",
      "LoloBuy Received status",
      "LoloBuy Stored in warehouse",
      "LoloBuy pending confirmation",
      "LoloBuy My Warehouse"
    ],
    sources: [
      {
        label: "LoloBuy Help Center — Status of the Shopping Agent Orders",
        url: "https://www.lolobuy.com/prod-api/user/common/helpMenuDetail?id=1242296850973779",
        accessed: "28 August 2026"
      },
      {
        label: "LoloBuy Help Center — Why a Received item is not yet in My Warehouse",
        url: "https://www.lolobuy.com/prod-api/user/common/helpMenuDetail?id=1242296857461863",
        accessed: "28 August 2026"
      },
      {
        label: "LoloBuy Help Center — What to do after an item is Stored in warehouse",
        url: "https://www.lolobuy.com/prod-api/user/common/helpMenuDetail?id=1242296871158912",
        accessed: "28 August 2026"
      },
      {
        label: "LoloBuy Help Center — How to respond to Pending for Confirmation",
        url: "https://www.lolobuy.com/prod-api/user/common/helpMenuDetail?id=1242296873911429",
        accessed: "28 August 2026"
      },
      {
        label: "LoloBuy current English interface labels",
        url: "https://www.lolobuy.com/prod-api/user/common/languageData?lang=en",
        accessed: "28 August 2026"
      }
    ],
    relatedLinks: [
      { label: "Plan around the warehouse countdown", url: "/articles/lolobuy-warehouse-storage-planning" },
      { label: "Decide when to combine or split stored items", url: "/articles/lolobuy-parcel-consolidation-guide" },
      { label: "Compare current product listings on FindSpreadsheet", url: "https://findspreadsheet.com/" }
    ],
    illustration: {
      src: "/lolobuy-order-status-flow.svg",
      alt: "Flowchart showing a LoloBuy shopping-agent order moving from payment through purchasing and domestic shipping to warehouse inspection, buyer review and parcel submission",
      caption: "Editorial status map based on LoloBuy's public English labels checked on 28 August 2026. The live order record controls each transaction.",
      width: 1200,
      height: 620
    },
    sections: [
      { heading: "Read a status as a stage, not a result", paragraphs: [
        "A LoloBuy order status tells you where a transaction sits in the shopping-agent workflow. It does not, by itself, prove product quality, predict an international delivery date or confirm that an item is ready to ship overseas. The most useful interpretation is practical: identify who currently controls the next step—the buyer, LoloBuy's purchasing team, the seller, the domestic carrier or the warehouse—and record the evidence you should expect before the status changes again.",
        "This guide uses LoloBuy's public English interface labels and Help Center pages as checked on 28 August 2026. Those sources currently describe a sequence from payment through purchasing, seller dispatch, warehouse receipt and stocking. They also include return and parcel states. Interface wording can change, translations can differ and an account may show a more specific message, so the live order detail should always control an individual order."
      ]},
      { heading: "The verified shopping-agent sequence", paragraphs: [
        "The official status page currently presents the main purchase flow as Awaiting Payment, Processing, Ordered, Shipped by Seller, Received and In Stock. Elsewhere, LoloBuy describes the warehouse-ready state as Stored in warehouse. The current English interface data also contains labels such as To be confirmed, Submitted package, Returning, Returned, Canceled and Completed. These labels describe different branches of the workflow; they are not a single promise that every order will pass through every screen in exactly the same wording.",
        "The flow diagram above is therefore an editorial map, not an official service guarantee. A customized product, pre-order, manual purchase, seller problem, incomplete address, price difference or after-sales request can interrupt the ordinary path. Avoid calculating an overseas arrival date from the first order status. International shipping begins only after the item is stocked, reviewed, selected for a parcel, packed, paid and handed to an eligible route."
      ]},
      { heading: "Awaiting Payment, Processing and Ordered", paragraphs: [
        "Verified platform fact: LoloBuy defines Awaiting Payment as an order that has been submitted but not paid. Its current Help Center status page says an unpaid shopping-agent order is automatically cancelled after 72 hours. Processing means payment has been confirmed and the purchasing team is buying from the seller; the same page says this step usually takes up to 24 hours. Ordered means the seller has received the purchase order and is preparing to dispatch it.",
        "Editorial advice: save the order number, selected option, submitted price and payment record before waiting. If Processing or Ordered lasts longer than the guidance displayed for the order, first check for a message requesting confirmation, a price adjustment or missing information. Then contact support with the order number and a dated screenshot. Do not describe Ordered as seller shipment: at that stage the official explanation says the seller is still preparing to ship."
      ]},
      { heading: "Shipped by Seller is domestic movement", paragraphs: [
        "Verified platform fact: Shipped by Seller means the seller has dispatched the package to LoloBuy's warehouse in China. The official status article currently says this domestic movement normally takes three to five days after shipping. That wording is a typical platform estimate, not a delivery guarantee. A seller-created tracking number may exist before the carrier records its first scan, and pre-orders or unusual dispatch arrangements may not follow an ordinary timetable.",
        "Editorial advice: record the domestic tracking number and the date the seller shipment first shows a carrier scan. If the order stops moving, compare the last scan with the status text instead of relying only on the number of calendar days since purchase. A Shipped by Seller order is not available for consolidation, QC approval or international route selection because the warehouse has not yet completed receipt and stocking."
      ]},
      { heading: "Received does not mean ready in My Warehouse", paragraphs: [
        "This is the most important distinction in the workflow. LoloBuy's Help Center says Received means its warehouse has signed for the package and is weighing and inspecting the item. The current status overview says QC photos are made available within 24 hours. A separate official answer explains why a Received item may not yet appear in My Warehouse: warehouse confirmation and stocking still need to happen after receipt and inspection.",
        "Treat the published 24-hour statement as current guidance to monitor, not an unconditional promise. If a received item does not progress, save the receipt status, domestic tracking delivery event and time shown in the account. Check for an abnormal-item notice or a confirmation request before escalating. The right support question is specific: ask whether intake, inspection, matching or stocking is pending for the named order."
      ]},
      { heading: "Pending for Confirmation requires a buyer decision", paragraphs: [
        "Verified platform fact: LoloBuy describes Pending for Confirmation as a state in which some product information must be checked again. Its public answer directs buyers to Shopping Agent Order when confirmation is requested around the purchased stage. When the status arises after delivery to the warehouse, it directs buyers to My Warehouse, where the available decision may be to accept or return the item. The exact reason should be read from the order message rather than guessed from the headline status.",
        "Editorial advice: answer the specific question with evidence from the live seller listing and your saved order selection. Confirm the exact colour, size, model, quantity, price difference or acceptable issue—whichever the message actually identifies. Do not write a broad approval such as “looks fine” when the platform is asking about one mismatch. A dated screenshot of the prompt and your response creates a clearer record if the order later needs after-sales support."
      ]},
      { heading: "In Stock or Stored in warehouse starts a new decision", paragraphs: [
        "Verified platform fact: the status overview describes In Stock as the point after quality checking when the item is placed in personal inventory. LoloBuy's separate Stored in warehouse article says the buyer should then visit My Warehouse and submit delivery to an overseas address. In other words, warehouse stocking ends the seller-to-warehouse stage and opens the buyer's QC, after-sales, storage and parcel-planning stage; it is not the same as international dispatch.",
        "Editorial advice: review the order selection, visible photos, quantity, recorded weight, dimensions and any warehouse note soon after stocking. Mark the item ready, unresolved or route-sensitive. If it is wrong or visibly damaged, investigate the current after-sales option before placing it in a parcel. If it is acceptable, record the live storage countdown and compare it with the arrival schedule of other items rather than assuming you can wait indefinitely."
      ]},
      { heading: "Submitted package moves the item into the parcel workflow", paragraphs: [
        "The current English interface includes Submitted package as an item status. It indicates that the stocked item has been selected into a parcel workflow, so the next controlling record is the parcel rather than the purchase order alone. LoloBuy's status overview separately describes parcel stages including Awaiting Payment, Processing, Packed and Shipped. A parcel can still need payment, final weighing or an adjustment before it is handed to a carrier.",
        "Save the parcel number and the list of included order numbers at submission. Record the packaging instructions, selected route, estimated chargeable weight and quoted amount. After packing, compare the final weight and any balance request or refund with that record. Do not tell support that an item has disappeared from My Warehouse without checking whether it is already attached to a submitted parcel, rehearsal or after-sales action."
      ]},
      { heading: "Returning, Returned, Canceled and Completed are different endings", paragraphs: [
        "The current interface lists Returning and Returned as separate item states. Returning indicates an active reverse process; Returned indicates that the return branch has reached a later state. Canceled means the purchase workflow was stopped, while Completed is a closed status. None of these labels alone proves where money has been credited, who paid domestic return freight or whether a refund has reached the original payment method. Those details belong in the after-sales and billing records.",
        "For any closed or reverse status, keep four fields separate: item movement, after-sales decision, refund record and payment destination. Save the request number, reason, evidence submitted, approval message and billing entry. If an expected refund is missing, ask about the exact refund transaction rather than reopening the product-status question. A status spreadsheet is useful precisely because it prevents physical return and financial refund from being treated as the same event."
      ]},
      { heading: "Build a status log that reveals the next action", paragraphs: [
        "Use one row per item with columns for order number, seller, exact option, payment date, current status, status-change date, domestic tracking, warehouse receipt, QC decision, confirmation request, after-sales state, storage countdown, parcel number and next action. Add a source screenshot only when the status changes or a decision is requested. This keeps the record compact while preserving the events that matter if an order stalls or a mismatch appears.",
        "The next-action column is more valuable than a colour-coded status alone. Awaiting Payment means pay or allow cancellation. Processing means monitor for a purchasing question. Ordered means wait for seller dispatch while watching messages. Shipped by Seller means follow domestic tracking. Received means allow for intake and inspection while checking for exceptions. Pending for Confirmation means respond. Stored means review and plan. Submitted package means follow the parcel record."
      ]},
      { heading: "When to contact support", paragraphs: [
        "Contact support when the live order exceeds the current guidance without explanation, domestic tracking shows delivery but LoloBuy has not acknowledged receipt, Received does not progress and no inspection or exception appears, a confirmation prompt is unclear, the warehouse record does not match the purchased option, or an after-sales and billing record disagree. Before contacting support, check account messages, the order detail, My Warehouse, parcel detail and the relevant payment record.",
        "Send one concise evidence set: order or parcel number, exact status text, date and time of the last change, domestic or international tracking number where relevant, screenshot of the mismatch, and the action requested. Avoid unsupported claims about loss, guarantees or universal processing times. The status label tells you where to investigate; the dated account record and response from LoloBuy establish what is happening to the actual transaction."
      ]}
    ]
  },
  {
    slug: "lolobuy-return-refund-evidence-guide",
    tag: "AFTER-SALES",
    title: "LoloBuy Return and Refund Evidence Guide: What to Save Before You Apply",
    description: "A source-checked evidence checklist for LoloBuy cancellations, warehouse returns, refunds and delivered-parcel after-sales requests.",
    readTime: "13 min read",
    published: "2026-08-30",
    updated: "2026-08-30",
    keywords: [
      "LoloBuy return refund evidence",
      "LoloBuy return exchange",
      "LoloBuy after-sales photos",
      "LoloBuy refund timeline",
      "LoloBuy warehouse return",
      "LoloBuy damaged parcel claim"
    ],
    sources: [
      {
        label: "LoloBuy Help Center — Return the Product",
        url: "https://www.lolobuy.com/prod-api/user/common/helpMenuDetail?id=1242296772133891",
        accessed: "30 August 2026"
      },
      {
        label: "LoloBuy Help Center — Terms of Promised Returns with no reasons",
        url: "https://www.lolobuy.com/prod-api/user/common/helpMenuDetail?id=1242296939447441",
        accessed: "30 August 2026"
      },
      {
        label: "LoloBuy Help Center — Can Shopping Agent orders be cancelled or refunded?",
        url: "https://www.lolobuy.com/prod-api/user/common/helpMenuDetail?id=1242297000395937",
        accessed: "30 August 2026"
      },
      {
        label: "LoloBuy Help Center — Problems found after receiving goods",
        url: "https://www.lolobuy.com/prod-api/user/common/helpMenuDetail?id=1242301324591491",
        accessed: "30 August 2026"
      },
      {
        label: "LoloBuy Help Center — How to apply for parcel after-sales",
        url: "https://www.lolobuy.com/prod-api/user/common/helpMenuDetail?id=1242301393535401",
        accessed: "30 August 2026"
      }
    ],
    relatedLinks: [
      { label: "Interpret the current order and warehouse status", url: "/articles/lolobuy-order-warehouse-status-guide" },
      { label: "Review warehouse QC photos before deciding", url: "/articles/lolobuy-qc-photos-guide" },
      { label: "Compare current product listings on FindSpreadsheet", url: "https://findspreadsheet.com/" }
    ],
    illustration: {
      src: "/lolobuy-return-refund-evidence-checklist.svg",
      alt: "Four-part LoloBuy return and refund evidence checklist covering the order record, warehouse issue, delivered parcel and refund ledger",
      caption: "Editorial evidence checklist based on LoloBuy's public after-sales pages checked on 30 August 2026. The live account and seller decision control each case.",
      width: 1200,
      height: 650
    },
    sections: [
      { heading: "Start by identifying the type of request", paragraphs: [
        "A cancellation, warehouse return, exchange, refund and delivered-parcel claim are not interchangeable. A cancellation tries to stop a purchase before the seller-to-warehouse process is complete. A warehouse return sends an item back to the seller after it has been bought or received. A refund records money returned after a cancellation or return is accepted. A parcel after-sales request concerns a problem discovered during or after international delivery. The evidence and controlling screen change with each stage.",
        "Before uploading anything, write one sentence that defines the requested outcome: cancel an unpurchased order, return the wrong warehouse item, exchange a size, obtain a refund after seller approval, or report a damaged international parcel. Then record the exact status, order or parcel number and time shown in LoloBuy. This first step prevents evidence for one transaction stage from being submitted through the wrong workflow."
      ]},
      { heading: "What LoloBuy currently confirms about cancellations", paragraphs: [
        "Verified platform fact: LoloBuy's public cancellation guidance separates orders by status. Its pages direct buyers to cancel eligible early-stage orders from My Orders, while a purchased order uses Return/Refund and may require negotiation with the seller. The current Return the Product article gives different handling estimates for early, processing, ordered and already-shipped stages. These are platform guidance values, not guarantees that a seller will approve every request.",
        "Editorial advice: save the submitted listing, chosen option, amount paid, order status and cancellation screen before acting. If the order is still being processed, state that you want the purchase stopped; do not frame the request as a product defect that nobody has inspected. If the seller has already shipped, include domestic tracking because the practical question has changed from stopping purchase to handling goods already moving toward the warehouse."
      ]},
      { heading: "Warehouse returns depend on eligibility and condition", paragraphs: [
        "Verified platform fact: LoloBuy's current return article tells buyers with shipped, delivered, warehouse-arrived or stored items to check the purchased product link for unconditional return or exchange support. It also says the item must remain in a condition that does not affect the seller's ability to resell it. The separate return-guarantee page says the seller must agree and describes the request window as five days, or 120 hours, after the status changes to stocked in.",
        "Do not convert that wording into a promise that every item has a five-day return right. Eligibility can depend on the seller, source platform, product condition and listing. LoloBuy's current article also says second-hand purchasing and warehouse-sale orders do not support returns. Open the live return screen immediately after QC, confirm what the actual order offers and preserve the displayed deadline before relying on a third-party summary."
      ]},
      { heading: "Build evidence around one objective mismatch", paragraphs: [
        "A strong request connects three records: what was ordered, what LoloBuy received and what is wrong. For an incorrect colour, size or model, save the seller listing and selected option beside the warehouse image that shows the received label or product. For a damaged or stained item, include an overall view for identity and a close view that shows the affected area. For a missing component, show the expected set and every component visible in the warehouse record.",
        "Avoid sending ten unrelated photos with a message that only says the item is bad. Name the observable mismatch and the remedy requested. Examples include: the size label differs from the paid option; one item from the listed set is absent; the overall product style differs from the saved listing; or visible damage appears in the warehouse image. Do not claim authenticity, internal performance or material composition when photographs cannot prove it."
      ]},
      { heading: "Preserve packaging before a return decision", paragraphs: [
        "The current return-guarantee page says some products have packaging requirements and a return or exchange can be refused when those requirements are not met. It also states that the product should remain new and suitable for resale. That makes packaging evidence part of the decision. If a return is possible, do not request box removal, tag removal, destructive inspection or parcel submission until the live return terms and support response are clear.",
        "Save photos showing tags, seals, accessories, retail packaging and the complete item as it exists at the warehouse. If packaging was already removed during normal intake, record what the warehouse photos and notes show rather than accusing a party without evidence. Ask support whether the remaining condition meets the current seller requirement. A return case is stronger when it documents the actual condition before any further service changes it."
      ]},
      { heading: "Separate return costs from the product refund", paragraphs: [
        "Verified platform fact: LoloBuy's return-guarantee page says the refund or exchange amount is based on the product price actually paid. For an unconditional return or exchange, it describes the cost as shipping to the seller, the seller's original shipping cost and a return or exchange service fee. It also tells buyers to keep enough account balance for applicable return shipping and service charges. The page does not establish one universal current cash amount.",
        "Create separate spreadsheet columns for product refund, domestic outbound freight, domestic return freight, service charge and any amount still pending. Before confirming, capture the live fee screen and ask which party is responsible. The official page says a buyer normally bears shipping when there is no quality problem, while seller responsibility for a verified quality problem depends on the request outcome. Never subtract an estimated fee from the expected refund and present the result as final."
      ]},
      { heading: "A return approval is not yet a completed refund", paragraphs: [
        "LoloBuy's current Return the Product article says that, after an accepted return request for a paid order, the refund is credited to the user's available LoloBuy balance. For shipped, warehouse-arrived or stored orders, it gives an approximate seller-dependent refund period of seven to fifteen days. A different help article likewise explains that money returns after the seller receives the item and refunds LoloBuy. These are current estimates, not delivery guarantees for funds.",
        "Track four events separately: request submitted, seller approved, return parcel delivered and refund credited. Save the after-sales number, seller decision, domestic return tracking and balance-ledger entry. If the product status changes to Returned but the balance has not changed, ask about the refund transaction rather than reopening the evidence about the product. Physical movement and financial settlement can complete on different dates."
      ]},
      { heading: "Delivered-parcel claims need a different evidence set", paragraphs: [
        "After international delivery, use the parcel record rather than the warehouse item screen. LoloBuy's public parcel after-sales article directs buyers to My LoloBuy, then Parcels, and the Apply After-sales action for the relevant parcel. It asks for a detailed problem description and parcel and product photos when goods are wrong or damaged. This branch concerns the delivered shipment; it is not a late substitute for an unresolved warehouse QC return.",
        "For visible external damage, photograph every side of the unopened parcel, the shipping label, crushed or opened areas and any courier remark before changing the packaging. If possible, check obvious damage in front of the courier and preserve any refusal or signed-damage record. Keep the original packaging. An unboxing sequence or continuous video can add context, but it should support clear still images and item identifiers rather than replace them."
      ]},
      { heading: "Match evidence to the delivered problem", paragraphs: [
        "LoloBuy's current received-goods guidance lists problem-specific evidence. Damage or large stains need photographs of the affected area. A size mismatch needs the received size label; without an identifying size mark, the page says the claim cannot be verified that way. A wrong style needs an overall product image. Missing goods require the missing order number plus images of the item list, opened packaging, received goods and parcel weighing evidence.",
        "For a weight dispute, the same page tells buyers to weigh the parcel before opening it and upload a photograph of that measurement. Add the scale display, complete unopened parcel and visible shipping label in the same evidence sequence. For missing items, identify at least one received item and map every expected order number to what is present. This gives support a reproducible comparison instead of a quantity claim without parcel context."
      ]},
      { heading: "Current public deadline wording is inconsistent", paragraphs: [
        "LoloBuy's public pages checked on 30 August 2026 do not state one consistent after-delivery evidence window. One article asks for packaging, invoice and photographs within two working days when damage is found after delivery. The same page says missing, damaged or defective-goods issues should reach customer service within 72 hours. The parcel after-sales article mentions seven days after signature or 45 days from shipment, yet also warns that an application may not be accepted when delivery was more than three days earlier.",
        "Because those statements conflict, this guide does not select the longest period as a buyer entitlement. Inspect the parcel immediately, preserve the unopened condition and submit through the live after-sales button as soon as a problem is found. Save the deadline or eligibility message shown for the actual parcel and request written clarification if the interface differs from a Help Center page. Destination law may provide separate rights, but this article does not give legal advice."
      ]},
      { heading: "Use a compact return-and-refund record", paragraphs: [
        "Keep one evidence folder per order or parcel. Name files by date and purpose: paid option, order status, warehouse overview, defect close-up, size label, packaging, parcel label, pre-opening weight, unboxing, return approval, return tracking and refund ledger. In a spreadsheet, record the item ID, parcel ID, request type, exact reason selected, deadline shown, requested remedy, responsible party, fees quoted and the next expected event.",
        "Before submitting, check that the evidence proves identity, timing and the specific mismatch. After submitting, do not alter packaging or send the item in another parcel unless the instructions allow it. Record each support response without rewriting it as a platform-wide policy. This evidence-first method cannot guarantee seller approval, but it reduces avoidable ambiguity and makes a delayed return, missing refund or parcel claim easier to audit."
      ]}
    ]
  },
  {
    slug: "lolobuy-actual-vs-volumetric-weight",
    tag: "SHIPPING",
    title: "LoloBuy Actual vs Volumetric Weight: A Route Comparison Workflow",
    description: "A source-checked workflow for comparing LoloBuy shipping routes by actual weight, parcel dimensions, chargeable weight and live route rules.",
    readTime: "13 min read",
    published: "2026-09-01",
    updated: "2026-09-01",
    keywords: [
      "LoloBuy actual vs volumetric weight",
      "LoloBuy chargeable weight",
      "LoloBuy shipping route comparison",
      "LoloBuy parcel dimensions",
      "LoloBuy freight estimate",
      "LoloBuy package removal"
    ],
    sources: [
      {
        label: "LoloBuy — Shipping Fee Estimation",
        url: "https://www.lolobuy.com/estimate",
        accessed: "1 September 2026"
      },
      {
        label: "LoloBuy current freight-estimator application module",
        url: "https://www.lolobuy.com/assets/Estimate-c984760b.js",
        accessed: "1 September 2026"
      },
      {
        label: "LoloBuy Help Center — The estimated weight and real weight",
        url: "https://www.lolobuy.com/prod-api/user/common/helpMenuDetail?id=1242300798075086",
        accessed: "1 September 2026"
      },
      {
        label: "LoloBuy Help Center — Package removal",
        url: "https://www.lolobuy.com/prod-api/user/common/helpMenuDetail?id=1242306518844916",
        accessed: "1 September 2026"
      },
      {
        label: "LoloBuy Help Center — Details on products' weight and warehouse stocking",
        url: "https://www.lolobuy.com/prod-api/user/common/helpMenuDetail?id=1242300744204423",
        accessed: "1 September 2026"
      },
      {
        label: "LoloBuy Help Center — Delivery Service Agreements for Packages Via LoloBuy",
        url: "https://www.lolobuy.com/prod-api/user/common/helpMenuDetail?id=1242300779790518",
        accessed: "1 September 2026"
      }
    ],
    relatedLinks: [
      { label: "Plan which items should share a parcel", url: "/articles/lolobuy-parcel-consolidation-guide" },
      { label: "Review the broader shipping cost checklist", url: "/articles/lolobuy-shipping-cost-guide" },
      { label: "Compare current product listings on FindSpreadsheet", url: "https://findspreadsheet.com/" }
    ],
    illustration: {
      src: "/lolobuy-chargeable-weight-route-workflow.svg",
      alt: "LoloBuy route comparison workflow from parcel weight and dimensions to chargeable weight and final route checks",
      caption: "Editorial comparison workflow based on LoloBuy's public estimator and Help Center pages checked on 1 September 2026. Live route rules control the final calculation.",
      width: 1200,
      height: 650
    },
    sections: [
      { heading: "The route decision starts with two measurements", paragraphs: [
        "A parcel has a scale weight and a physical size. A dense parcel may be expensive because it is heavy; a large, light parcel may be expensive because it occupies transport space. That is why comparing LoloBuy routes with weight alone can produce a misleading result. The useful search question is not simply which route is cheapest, but which route is cheapest after the correct billing rule is applied to the parcel you intend to send.",
        "This guide is narrower than a general shipping-cost guide. It explains how to move from warehouse measurements to a like-for-like route comparison. Prices, route names, service windows and country availability are deliberately not copied into a permanent table. LoloBuy's delivery agreement says rates and delivery times may be adjusted, and its current estimator generates options from the destination and parcel inputs entered at the time of the search."
      ]},
      { heading: "What the current freight estimator asks for", paragraphs: [
        "Verified platform fact: LoloBuy's public Shipping Fee Estimation page currently asks for a destination country or region and parcel weight in grams. It also provides fields for product category and length, width and height in centimetres. After a query, the current interface can present the shipping line, estimated cost, transit-time field, billing type, parcel limits, item eligibility, billing standard and route features. The page labels the estimate as a reference rather than a final bill.",
        "Editorial workflow: begin with the destination and the best warehouse-stage weight available. Add all three dimensions instead of leaving them blank when the parcel could be bulky. Select the closest product categories because eligibility is content-dependent. Run the same inputs for every route comparison. Changing the weight, dimensions or category between screenshots makes the resulting prices unsuitable for a fair side-by-side decision."
      ]},
      { heading: "Keep estimated, actual and chargeable weight separate", paragraphs: [
        "LoloBuy's Help Center describes estimated weight as the warehouse entry weight with original packing plus the carton expected to be used for the parcel. It describes real weight as the parcel weight measured again after the delivery order is submitted and the items are packed. Those are two stages in the parcel record. Neither term, by itself, tells you which weight a particular shipping route will bill.",
        "Chargeable weight is the number used by the route's billing rule. The current estimator distinguishes routes charged by actual weight, routes charged by volumetric weight and routes that compare physical and volumetric weight. For a comparison route, the interface says the greater value controls. Record three columns in your worksheet—estimated actual weight, calculated volumetric weight and displayed chargeable basis—so one number is not accidentally substituted for another."
      ]},
      { heading: "Read the route's billing method before its price", paragraphs: [
        "A lower headline quote is not meaningful until you know what generated it. On the current estimator, the billing section can identify actual-weight billing, volumetric-weight billing or the need to enter dimensions. For routes that compare the two, the information panel explains that the larger result is used. It also displays the divisor used in that route's volumetric formula. This route-level value is safer than copying a divisor from an old article.",
        "If dimensions are missing, treat any volume-sensitive comparison as incomplete. If a route charges only by actual weight, confirm that the rule shown applies to the entered category and parcel size. If it charges by volume or the larger value, calculate with the exact divisor displayed for that result. Do not assume two routes use the same dimensional convention simply because they appear on the same destination search."
      ]},
      { heading: "Calculate volume without turning it into a promise", paragraphs: [
        "The current estimator expresses volumetric weight as length multiplied by width multiplied by height, converted with a route-specific divisor. The three measurements must describe the outer packed parcel, not an unpacked product or the seller's retail box alone. Measure the longest points and use consistent units. A soft parcel can change shape after packing, so a warehouse or rehearsal measurement is more useful than a seller estimate.",
        "Consider an editorial example with no platform price attached. Parcel A is 30 × 30 × 20 cm, giving a volume of 18,000 cubic centimetres. Parcel B has the same scale weight but measures 45 × 40 × 30 cm, giving 54,000 cubic centimetres. Entering only the scale weight hides that difference. Enter both dimension sets in the live estimator and let each route's current divisor and billing rule determine whether the larger parcel changes the chargeable weight."
      ]},
      { heading: "Compare the complete route result", paragraphs: [
        "For each eligible result, save the estimated cost, displayed billing type, chargeable-weight logic, minimum and maximum weight, single-side or combined-dimension limits, transit-time field, product eligibility and route description. Expand the route details rather than comparing the first price row alone. The current interface can also show first-weight, continued-weight, service, fuel, customs-declaration and operation-fee fields where available.",
        "Remove any route that marks the parcel or its contents as non-shippable. Then compare the remaining choices against the same priorities: total current estimate, size tolerance, tracking or service information actually shown, and the consequences of the selected billing method. A cheap result that fails a dimension limit is not an option. A route with a shorter displayed service estimate is not a delivery guarantee, because carrier handling and customs remain variable."
      ]},
      { heading: "Packaging removal changes both dimensions and protection", paragraphs: [
        "Verified platform fact: LoloBuy's current Package removal help page describes a free option during delivery-order submission. It lists several removal levels and says necessary protective packaging can be retained according to the item's situation. The warehouse-weight page also says external dimensions and weight are measured after the product is packaged for stock-in. These statements confirm why packaging choices can change both the scale and volume inputs.",
        "Editorial decision: identify which packaging is disposable shipping material and which packaging protects or forms part of the product. Shoe boxes, presentation boxes and empty space can raise volume, but removing them may reduce crush protection or collector value. Do not select maximum removal merely to chase a smaller estimate. Save the chosen removal instruction, then compare the post-packing or rehearsal measurements when the difference could affect route selection."
      ]},
      { heading: "Use rehearsal data when the decision is sensitive", paragraphs: [
        "The current LoloBuy application describes parcel rehearsal as a simulation or pre-packing service rather than a real shipment. Its interface says the result can show estimated actual weight, dimensions, volumetric weight and whether charges are expected to follow volumetric or actual weight. It also warns that packaging materials, item condition and value-added services can cause reasonable differences at final dispatch.",
        "Rehearsal is most useful when a bulky parcel sits near a route weight or size limit, when packaging removal could materially change the box, or when splitting one consolidation might unlock a different route. Use its measurements to rerun the route comparison; do not relabel rehearsal output as the final carrier bill. The value lies in replacing a rough seller estimate with a parcel-shaped planning input."
      ]},
      { heading: "Expect settlement after final packing", paragraphs: [
        "LoloBuy's estimated-versus-real-weight article says the parcel is weighed again after the delivery order is submitted and packed. It describes a balance refund when the final calculation is lower and a supplemental-payment process when the logistics charge is higher than the estimate. The current parcel interface separately labels estimated shipping, final shipping after weigh-in, estimated chargeable weight and final chargeable weight.",
        "Save the paid estimate before shipment and compare it with the parcel-detail record afterward. Check whether the physical weight, dimensions, billing method or added-weight unit crossed a threshold. Do not expect every gram of difference to produce a proportional refund: routes can bill in first-weight and continued-weight units. If a balance adjustment is unclear, provide the before-and-after screens and ask support to identify the specific billing step."
      ]},
      { heading: "US and European buyers should rerun, not reuse", paragraphs: [
        "Destination is a required estimator input, so a result for the United States should not be reused for the United Kingdom, France, Germany or another European destination. Route availability, product eligibility, dimension limits and tax handling may differ. LoloBuy's delivery agreement also tells buyers to provide accurate parcel declarations and follow the export requirements of the origin and import requirements of the destination.",
        "Keep shipping cost separate from destination tax, duty and carrier handling unless the selected live route explicitly states how those amounts are handled. Do not copy another buyer's declaration or infer tax treatment from a route nickname. For every destination, rerun the current estimator with the actual contents and preserve the route terms shown on the day of submission. This is particularly important when a spreadsheet is shared across buyers in several countries."
      ]},
      { heading: "Build a comparison sheet that survives changing routes", paragraphs: [
        "Use one row per route and one dated snapshot per parcel version. Record destination, item categories, scale weight, length, width, height, cubic volume, route name, billing type, route divisor where displayed, volumetric result, chargeable basis, estimated price, weight limits, dimension limits, eligibility result, transit-time field, packaging choice and date checked. Add a source link to the saved estimator result or screenshot.",
        "If you test a split parcel or different packaging, create another scenario rather than overwriting the first. That makes the decision auditable: you can see whether savings came from lower physical weight, lower volume, a different billing rule or access to another eligible line. A product directory such as FindSpreadsheet can help shortlist items, but it cannot know the final packed dimensions or destination-specific route rules. Those belong in the live parcel comparison."
      ]},
      { heading: "The final five-minute route check", paragraphs: [
        "First, confirm that the destination, categories, weight and all three dimensions match the intended packed parcel. Second, remove ineligible routes. Third, identify whether each remaining route bills actual weight, volumetric weight or the greater value. Fourth, expand the details and compare limits, fee fields and route features. Fifth, save the chosen result and packaging instructions before paying.",
        "After packing, compare the final chargeable weight and final shipping amount with the saved estimate. This process does not promise the cheapest route or a fixed delivery date. It does something more useful: it makes every route compete on the same parcel facts, keeps variable platform data tied to a dated source and gives the buyer a clear record when the final measurement differs from the plan."
      ]}
    ]
  }
];
