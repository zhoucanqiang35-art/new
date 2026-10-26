export type Article = { slug: string; title: string; dek: string; sections: { heading: string; paragraphs: string[] }[] };

export const articles: Article[] = [
  {
    slug: "pikobuy-order-flow-explained",
    title: "How to Read a PikoBuy Order Flow Before You Commit",
    dek: "A research-first walkthrough of the public order, warehouse and parcel stages — and the decisions that still belong to the buyer.",
    sections: [
      { heading: "Start with the right mental model", paragraphs: [
        "A buying-agent order is not one transaction with one outcome. It is a chain of separate decisions: choosing an original listing, asking the platform to purchase it, reviewing what reaches the warehouse, and selecting an international parcel option. The public PikoBuy beginner guide describes that sequence in six stages. Treating those stages as one blurred promise is how buyers miss the moments when a decision is still reversible.",
        "The useful question is not ‘Will this work?’ It is ‘What evidence will I have before the next commitment?’ That small shift keeps a spreadsheet from becoming a stack of impulsive links. A good row records the source URL, option, stated size, listed price, photos already available, and the reason the item is worth checking. It does not claim that a seller will ship, that stock is real, or that a warehouse photo will prove authenticity."
      ] },
      { heading: "Stage one: identify the original item precisely", paragraphs: [
        "PikoBuy’s public guide says users can select items on marketplaces such as Taobao, Tmall, 1688, Weidian and Yupoo, then confirm the specifications, colour and size. That means the source listing remains important. Before pasting a link, capture the variant you actually intend to buy. A title can cover multiple colours, fabrics or batches, and a single product page can contain seller notes that change the choice.",
        "For apparel, save the seller’s measurements rather than relying on a letter size. For shoes, note the stated size system and any outsole or insole measurement. For accessories and electronics, record the exact model, configuration and included items. This is not busywork: later warehouse photos can only be compared against something you wrote down. If the source itself is unclear, a spreadsheet row should be marked as unverified instead of made to look certain."
      ] },
      { heading: "Stage two: use search, a link, an image or a sourcing request carefully", paragraphs: [
        "The platform says a buyer can search directly, submit a product link, submit an image, or submit a sourcing request. These are different starting points, not interchangeable proof. A pasted product link is the clearest reference because it ties your request to a specific listing. A keyword search is broader and needs extra checking because similarly named items can resolve to different listings. An image or sourcing request can be useful when you cannot locate a link, but it is the moment to ask what detail will identify the intended item.",
        "Keep the request concise and factual: the original URL when available, the required option, and a question only where the source is ambiguous. Avoid assuming that an image match means the same material, batch, seller or price. The public homepage says PikoBuy helps confirm product details and proceed with the purchase process; it does not convert a vague request into a guarantee of equivalence."
      ] },
      { heading: "Stage three: separate the item price from the parcel decision", paragraphs: [
        "The beginner guide describes a first payment when the purchasing order is submitted, followed later by a separate international shipping payment when the buyer submits a parcel. Keeping those two decisions separate is practical. The listing price is only one part of a final spend; domestic shipping, warehouse services, parcel weight, volume and route rules may matter later. A low item price is therefore not a complete cost comparison.",
        "Build a simple note beside every prospective item: estimated item total, an unknown-weight flag, and any packaging feature that could influence volume. Do not invent a delivery price from another buyer’s parcel. PikoBuy’s shipping-estimate page asks for destination, product type, weight and dimensions, which is a clear reminder that destination and parcel attributes affect a quote. Use an estimate to compare options, not as a promise of the final charge."
      ] },
      { heading: "Stage four: warehouse arrival creates evidence, not certainty", paragraphs: [
        "PikoBuy’s guide says that after an item reaches the warehouse it is checked in, photographed for confirmation and checked for defects. Its homepage also describes inspection and repacking at the China warehouse. This is the first point at which a buyer can compare a physical item against the source record. It is valuable, but its limits matter: a set of photos does not test long-term durability, prove a brand claim, or reveal every hidden flaw.",
        "Review the photos in a fixed order. First, compare the visible colour, silhouette and option. Second, look for the category-specific evidence: size label and measurements for clothing; shape, outsole and label placement for footwear; connectors, ports, buttons or model markings for electronics. Third, look for damage that affects your decision now. If an important detail is absent, treat it as absent. The public guide says buyers can add requests such as minimal or reinforced packaging; a request can focus the check, but it should not be described as a guarantee."
      ] },
      { heading: "Stage five: choose a parcel route from stated needs, not a slogan", paragraphs: [
        "The public guide says buyers select a suitable route, submit a parcel and pay the international shipping fee. It also says routes differ in delivery time and billing method. That is the right frame for choosing: compare the option’s stated destination coverage, billing basis, restrictions and current estimate against your own needs. A route that looks inexpensive can be a poor fit if it treats your parcel dimensions differently or has conditions you have not read.",
        "PikoBuy’s shipping terms add an important boundary. They say parcels are carried by third-party logistics providers and that customs policies and uncontrollable cross-border events can create risk. Do not write ‘safe customs’, ‘guaranteed delivery’ or a fixed arrival date into a spreadsheet. Instead, record the route selected, the parcel details submitted and the estimate seen on that date. This gives you an auditable record without pretending to control a third-party carrier."
      ] },
      { heading: "Stage six: tracking is a status signal, not the end of risk", paragraphs: [
        "The public guide says tracking information becomes available within three days after a parcel is shipped. Read that as the platform’s current guidance, not as a universal timing promise. A label can exist before a carrier scans a parcel, and international tracking can update unevenly. Save the parcel number and the submitted route, then judge progress from the carrier events shown for that shipment rather than from a generic timeline.",
        "If a status is unclear, the strongest support request is specific: parcel number, route, the exact status text and when it last changed. Avoid sending a generic ‘where is my parcel?’ message without facts. The same evidence-first approach used for a source link and warehouse photos remains useful after dispatch."
      ] },
      { heading: "The spreadsheet standard that actually helps", paragraphs: [
        "A high-quality PikoBuy spreadsheet does not tell readers what to buy. It helps them see what they still need to verify. Give each row a focused category, source context, selected option, sizing note, photo status, weight-awareness note and date checked. Mark assumptions as assumptions. When a row has no usable source or its options are unclear, say so plainly rather than filling the gap with confidence.",
        "That is also the sustainable SEO angle. Helpful content explains the decision process in a way a reader can repeat. It does not recycle claims about instant delivery, authentication or seller quality that the public materials do not make. Use the platform’s published flow as a map, keep each stage distinct, and let the buyer make the final call with the evidence in front of them."
      ] }
    ]
  },
  {
    slug: "qc-photos-shipping-returns-checklist",
    title: "PikoBuy QC Photos, Shipping and Returns: A Buyer’s Evidence Checklist",
    dek: "What the public guidance says is checked, how to read the limits of warehouse photos, and why shipping and return rules should be reviewed before a parcel is submitted.",
    sections: [
      { heading: "Why a checklist beats confidence", paragraphs: [
        "The most expensive mistake in a spreadsheet workflow is treating a photo, an estimate or a return label as a broad promise. They are pieces of information with a specific use. PikoBuy’s public materials describe warehouse check-in, photo confirmation, defect checking, repacking, route selection, a shipping estimator and return conditions. A practical buyer reads each one for what it can answer — and does not stretch it beyond that.",
        "Use a checklist so the same questions are asked every time: what did the original listing say, what arrived at the warehouse, what can the photos show, what does the chosen route bill for, and is the item still eligible for a return request? This approach is slower than reacting to a single attractive image, but it reduces the chance that a small unknown becomes a parcel-sized problem."
      ] },
      { heading: "What warehouse QC is documented to cover", paragraphs: [
        "The public beginner guide describes warehouse inspection as check-in, photo confirmation and a defect check once items arrive. The homepage says items undergo quality inspection and repacking on arrival at the China warehouse. For a buyer, the clear benefit is that there is a review point before international submission. The exact scope should still be read modestly. An inspection is not a laboratory test, an expert appraisal or a promise that every issue will be found.",
        "The shipping terms make that limit even clearer for forwarded goods: they say inspection photos can be viewed and additional detailed photos can be purchased, while professional inspection cannot be provided for special and professional products. In other words, start with the available photos, request a closer view only when a specific unanswered question matters, and do not call a picture set ‘full authentication’."
      ] },
      { heading: "Read QC photos by category", paragraphs: [
        "For clothing, confirm the colour, size label, print or embroidery placement, obvious stains or tears, and any measurement that the listing made important. A sleeve laid differently in a photo does not prove a fit. For shoes, compare the overall shape, outsole, visible size label and pair consistency; do not pretend that one angle can settle every construction question. For watches and accessories, check visible hardware, clasp, face, finish and dimensions where shown. For electronics, verify the exact visible model, port layout and accessories rather than assuming a generic image represents a specific configuration.",
        "The useful format is ‘seen / not seen / needs clarification’. It prevents a common error: writing a long verdict after only one photo. If the item has a feature that cannot be checked from a still image — battery performance, material composition, internal components or long-term wear — say that it cannot be confirmed from the warehouse evidence."
      ] },
      { heading: "Packaging requests should match a real risk", paragraphs: [
        "PikoBuy’s guide says buyers can add requests such as minimal packaging or reinforced packaging. That makes packaging a decision, not an afterthought. Minimal packaging may reduce bulk for some items; reinforced packaging may be more relevant for fragile goods. The point is to state what you need and understand that packaging can influence both parcel dimensions and the evidence you receive later.",
        "Do not use a general instruction such as ‘make it safe’ and then assume every risk is removed. Be concrete: retain a box only if it matters to the item, ask for visible protection where damage is a concern, and keep in mind that a parcel is eventually handled by external carriers. The shipping terms say logistics risks are unavoidable and include events beyond the platform’s control. A packaging request is a sensible mitigation, not insurance or a delivery guarantee."
      ] },
      { heading: "Use the shipping estimator as an input, not a promise", paragraphs: [
        "The public shipping-estimate form requests a destination country or region, product type, weight, length, width and height. Those fields tell you what a useful comparison must include. A quote cannot be meaningfully copied from a random online post if the destination or parcel dimensions differ. Before submitting a parcel, check that the inputs you are using match the item group you actually have in the warehouse.",
        "The public guide says routes differ in delivery time and billing methods. That is a reason to compare the terms of a route, not merely the first number you see. Record the date of the estimate, destination, parcel weight and dimensions. If the final parcel changes because items are combined, packaging changes or dimensions are measured differently, revisit the estimate rather than treating an early screenshot as a contract."
      ] },
      { heading: "International shipping has third-party and customs risk", paragraphs: [
        "PikoBuy’s shipping terms say parcels are carried by third-party logistics providers. They also state that customs policies and uncontrollable cross-border logistics factors can create risks such as confiscation, damage, loss or peak-season delay. That wording matters because it prevents a misleading content claim: no independent spreadsheet should promise customs clearance, an arrival date or compensation for every event.",
        "A stronger planning habit is to keep the parcel small enough to understand, check route restrictions before paying, and maintain your own record of what was submitted. If a carrier status later needs clarification, those facts are more useful than a generic expectation. The public guide’s tracking statement — information available within three days after shipping — should likewise be treated as current platform guidance, not a forecast for every carrier scan or delivery."
      ] },
      { heading: "Returns must be assessed before international submission", paragraphs: [
        "PikoBuy’s returns page says return eligibility depends on the third-party seller’s rules, the item being in the required resalable condition and the item being in the warehouse for no more than five days. It lists categories that may not be returnable, including customised goods, second-hand goods and certain intimate or consumable products. The published page also says applications are counted from the item becoming ‘In Warehouse’, with five days defined as 120 hours.",
        "This creates a practical deadline. When warehouse photos appear, review them promptly. Do not wait until a parcel has been submitted internationally to decide whether the original item was correct. A return can involve shipping and service fees, and the page says the total refund is based on the actual price paid and requires the seller’s consent. None of that is a reason to promise a refund in an article; it is a reason to check eligibility early and read the current official terms for the exact order."
      ] },
      { heading: "How to ask a useful support question", paragraphs: [
        "A concise evidence packet gets farther than a broad complaint. For an item issue, provide the order reference, original selected option, the specific photo or detail that differs, and the action you want considered. For a parcel question, provide the parcel number, route, destination and latest tracking event. Keep screenshots and listings for your own records, because the source page can change after purchase.",
        "For forwarded goods, the shipping terms say after-sales service for the product itself is not provided and the buyer may need to contact the sender or seller; PikoBuy can assist with returning goods to that party. This is another reason not to blur agent logistics with seller responsibility. Identify whether your question concerns the original product, warehouse handling or a carrier event before raising it."
      ] },
      { heading: "A better FAQ starts with honest limits", paragraphs: [
        "Good FAQ content does not sound impressive by avoiding uncertainty. It tells a reader what is publicly documented, what depends on a seller or carrier, and what they must confirm for their own order. That makes it more useful for a first-time buyer and more credible for search. The evidence checklist is simple: source listing, selected option, warehouse photos, measured parcel details, route terms and time-sensitive return eligibility.",
        "Use this site to compare rows and organise those checks, then open the relevant FindSpreadsheet result when you are ready to research an item. The site is independent: it does not receive payment, create orders, manage parcels or decide refunds. Those boundaries are not a weakness; they are what keep the information clear."
      ] }
    ]
  },
  {
    slug: "pikobuy-spreadsheet-2026-checklist",
    title: "PikoBuy Spreadsheet 2026: Links, QC Photos and Shipping Checks",
    dek: "A practical PikoBuy spreadsheet workflow for narrowing a large list into a small, explainable shortlist.",
    sections: [
      { heading: "What a useful spreadsheet should do", paragraphs: [
        "A PikoBuy spreadsheet is most useful when it helps a buyer compare rather than rush. A row should preserve enough context to be checked again: the original source URL, the selected variation, visible photos, sizing notes, a price snapshot and a weight note. A row that only repeats a popular name or a copied price is not evidence; it is only a reminder to research further.",
        "Start by choosing the category you actually want. Shoes, clothing, bags and electronics require different checks, so a mixed scrolling list hides important differences. A category-first view makes it easier to notice when a listing has no measurements, an incomplete source link, vague photos or an estimate that does not match the intended parcel." ] },
      { heading: "Read source links before you save a row", paragraphs: [
        "A source link is a starting point, not a permanent product record. Before saving it, check whether the title, option, visible photos and stated price still describe the same item. Marketplace pages can change variants, stock and notes. Record the specific colour, size or configuration you are considering rather than assuming that every option under a listing is interchangeable.",
        "Keep raw source clues separate. Taobao, Weidian, 1688 and Yupoo pages can play different roles in research, and an album or image page is not automatically an order page. If the source cannot be tied to a clear item and option, mark the row as incomplete. A smaller set of explainable rows is more useful than a large folder of claims." ] },
      { heading: "Use QC photos for visible comparisons", paragraphs: [
        "Warehouse photos are valuable because they let a buyer compare an arrived item against the record made from the source listing. Use a fixed check: visible colour and option first, then category-specific details, then obvious damage or missing parts. For clothing, look for the size label and important measurements. For electronics, confirm visible model markings, ports and included accessories where shown.",
        "Photos do not prove authenticity, internal performance, material composition or long-term durability. Treat a detail that is not visible as unknown, not as confirmed. When a specific missing view matters, frame a narrow question around that visible uncertainty instead of turning a photo set into a broad quality promise." ] },
      { heading: "Add size and weight context early", paragraphs: [
        "Letter sizes are not enough for a reliable spreadsheet note. Store the seller's measurements and compare them with an item that already fits the buyer. This is especially important when a listing uses its own chart or when several cuts share one product page. Measurements make a row more useful without pretending that fit can be guaranteed online.",
        "Weight awareness belongs beside the item, not only at the shipping stage. Material, packaging and the number of items can all change a parcel decision. Keep an estimate or an unknown-weight flag, then reassess once warehouse measurements are available. This prevents a low item price from being mistaken for a complete value comparison." ] },
      { heading: "Turn browsing into a short decision record", paragraphs: [
        "Write one plain-language reason for every row you keep: a clear source, useful photos, a measurement match, a specific material detail or a sensible comparison with similar items. If you cannot explain why the row belongs in the shortlist, it is probably too early to save it. This simple rule reduces duplicate links and makes a later review faster.",
        "Use dates as well. A source page, visible price, warehouse photo and shipping estimate are all time-sensitive observations. Recording when you checked them avoids presenting an old screenshot as a current promise. It also gives a reader a method they can repeat, which is more useful than a one-line recommendation." ] },
      { heading: "The research boundary", paragraphs: [
        "An independent spreadsheet guide can help a buyer compare public information, but it cannot confirm stock, act as a seller, submit a parcel or decide a refund. Keep those responsibilities distinct. Platform, seller, carrier and customs decisions should not be rewritten as guarantees in a category card or article.",
        "The strongest PikoBuy spreadsheet is therefore not the longest one. It is the one that makes uncertainty visible, directs a user toward the right evidence and gives every saved link a reason to exist. That approach supports better decisions and creates content that remains useful after a trend changes." ] }
    ]
  },
  {
    slug: "pikobuy-shipping-weight-parcel-guide",
    title: "PikoBuy Shipping Weight Guide: Parcel Size, Estimates and Route Checks",
    dek: "How to use item weight, dimensions and route conditions as planning inputs without turning an estimate into a delivery promise.",
    sections: [
      { heading: "Separate an item total from a parcel decision", paragraphs: [
        "An item price and an international parcel are different decisions. The price visible on a source listing may be only one part of the eventual amount a buyer considers. Warehouse services, packaging, parcel dimensions, destination and route rules can matter later. A useful spreadsheet keeps those questions separate instead of calling a low listed price a complete deal.",
        "Make an early note beside each item: a likely weight range when known, bulky-packaging risk and whether the item needs protective handling. The note is not a final quote. Its purpose is to stop a shortlist from filling with items that only look economical before parcel context is considered." ] },
      { heading: "Why dimensions matter as much as kilograms", paragraphs: [
        "A parcel can be priced using more than its scale weight, depending on the route and its published billing method. Bulky shoes, boxed goods and reinforced packaging can change the dimensions even when the item itself is light. That is why one buyer's screenshot is a poor estimate for another buyer's parcel.",
        "When comparing a shipping estimate, keep the destination, product type, stated weight, length, width and height together. If any of those values change after items are combined or repacked, revisit the estimate. A comparison becomes more honest when its inputs are visible." ] },
      { heading: "Build a parcel plan from the warehouse evidence", paragraphs: [
        "Wait for warehouse information before treating a plan as final. Once items are together, check which ones are fragile, unusually shaped or likely to need retained packaging. A buyer can then decide whether compact packaging or additional protection matches the actual risk. The decision should be tied to the item, not copied from a generic haul video.",
        "Keep a parcel record with the item list, observed photos, selected route, measured details and date of the estimate. This makes it easier to understand what changed if a later total differs. It also makes any support question more specific than a general complaint about a price." ] },
      { heading: "Compare routes by conditions, not slogans", paragraphs: [
        "A route should be compared using its stated destination coverage, billing basis, limitations, tracking expectations and current estimate. The fastest-sounding label or lowest initial number may not be the best fit for a particular parcel. Read the conditions that apply to the destination rather than relying on a claim made for another country.",
        "Do not describe a shipping option as customs-safe, guaranteed or fixed-time. Cross-border delivery includes third-party carrier and customs factors that a spreadsheet cannot control. Accurate content explains the inputs a buyer can compare and leaves outcomes outside the buyer's control clearly labelled." ] },
      { heading: "Use estimates to decide, then check again", paragraphs: [
        "An estimate is useful when it helps compare alternatives before a parcel is submitted. It is less useful when it is copied into a guide as if it applies forever. Save the date, inputs and route used for each estimate, then repeat the check when the warehouse details are known.",
        "This habit is especially useful for a multi-item parcel. Removing one bulky box, separating a fragile item or changing a destination can change the meaningful comparison. The best result is not a universal shipping number; it is a buyer who understands what the number depends on." ] },
      { heading: "A concise pre-submit checklist", paragraphs: [
        "Before submitting a parcel, confirm the item list, selected options, warehouse photos, visible condition, parcel measurements, route restrictions and estimate date. Save the parcel reference once it is available. These records do not guarantee an outcome, but they reduce avoidable uncertainty.",
        "Use a guide such as this one to organise the checks. Use the official order channel for account, payment, route availability, tracking and after-sales questions. Keeping that boundary clear makes the article more credible and helps a buyer ask the right question in the right place." ] }
    ]
  },
  {
    slug: "pikobuy-source-links-taobao-weidian-1688-guide",
    title: "PikoBuy Source Links: How to Check Taobao, Weidian, 1688 and Yupoo",
    dek: "A source-link checklist for identifying what a listing actually says before it becomes a spreadsheet recommendation.",
    sections: [
      { heading: "The source page is the first evidence", paragraphs: [
        "A spreadsheet row should begin with a source page that can be understood, not just opened. Before saving a link, identify the seller-facing title, visible product type, available options, price context and photos. If those elements are unclear, the row cannot responsibly claim that it represents a particular item.",
        "Save the exact variation being considered. One link may include several colours, sizes, materials or configurations. A product name copied into a spreadsheet without the selected option makes the later QC comparison much weaker." ] },
      { heading: "Treat platform names as source clues", paragraphs: [
        "Taobao, Weidian and 1688 listings may each show product information differently, while Yupoo is often used as a visual catalogue. Their names alone do not prove product quality, stock, seller identity or price stability. They are useful clues that tell a buyer where to look next.",
        "Do not turn a seller album, a search result or an image into a claim that an item can be purchased exactly as shown. Look for the link between the visual reference, the option and the orderable listing. When that link is missing, write 'needs source confirmation' rather than filling the gap with confidence." ] },
      { heading: "Check options before you compare prices", paragraphs: [
        "Price comparison only makes sense when the options match. A lower number may refer to a smaller size, a different configuration, an accessory-only choice or a placeholder variation. Read the option labels and visible notes before describing one row as better value than another.",
        "For items where fit or configuration matters, write the source measurement or model specification beside the price. That transforms a row from a loose recommendation into a comparison a reader can audit. It also makes a later warehouse photo more useful." ] },
      { heading: "Use images to ask narrower questions", paragraphs: [
        "Listing images can show colour, shape, visible branding, accessories or product variants, but they cannot answer every question. Use them to identify which view needs confirmation later. For example, a clothing image may make a size chart important; an electronics image may make a port layout or included accessory important.",
        "Avoid language that claims an image proves authenticity, materials, internal parts or long-term performance. A better note separates what is visible from what is still unknown. This protects a reader from treating a polished listing image as evidence of a delivered item." ] },
      { heading: "Keep links current and explainable", paragraphs: [
        "Source listings change. A link that worked when it was added may later show a different option, price or availability. Add a checked date and revisit high-priority rows before sharing them. If a link is dead or no longer matches its description, remove it or mark it outdated instead of keeping it for a large item count.",
        "A concise reason for each row is more durable than a broad endorsement: clear measurements, useful photos, a coherent option or a relevant comparison. That gives readers a way to decide whether the link deserves their own review." ] },
      { heading: "A research-first standard", paragraphs: [
        "The purpose of a PikoBuy source-link guide is not to certify sellers or tell a buyer what to order. It is to make source information legible before a decision is made. Direct a buyer to verify the original listing, selected option and current conditions in the appropriate official channel.",
        "When a row makes its limits clear, it is more valuable to both readers and search engines. It describes a repeatable method—source, option, images, measurements, weight context and date—rather than a claim that cannot be checked later." ] }
    ]
  },
  {
    slug: "pikobuy-size-guide-measurements",
    title: "PikoBuy Size Guide: Compare Measurements Before You Order",
    dek: "A measurement-first method for clothing, shoes and accessories that avoids treating a size label as a guarantee.",
    sections: [
      { heading: "Why labels alone are not enough", paragraphs: [
        "A letter size is a shortcut, not a measurement. Different sellers can use the same label for different cuts, fabrics and intended fits. A PikoBuy spreadsheet becomes more useful when it stores the dimensions shown by the source listing rather than treating S, M, L or a shoe number as a universal answer.",
        "Start with an item the buyer already owns and likes. Measure it consistently, then compare those measurements with the source chart. This method does not guarantee fit, but it gives a buyer a concrete comparison rather than an assumption based on a familiar label." ] },
      { heading: "Record the measurement that matters to the item", paragraphs: [
        "For tops, chest width, shoulder width, garment length and sleeve length may be more useful than a generic size name. For trousers and shorts, check waist, rise, inseam and leg opening where listed. For shoes, note the size system and any stated insole or outsole measurement. For bags and accessories, dimensions and strap length can matter more than a clothing-style size.",
        "Copy the unit exactly as it is presented, then convert only when needed for a comparison. Do not hide uncertainty created by an incomplete chart. A row can say that a key measurement is missing; that is more helpful than guessing." ] },
      { heading: "Compare cut, fabric and intended use", paragraphs: [
        "Measurements tell more when they are paired with the visible cut and material description. A loose outer layer, a stretch fabric and a rigid jacket can respond differently even when one width looks similar on paper. Write down the intended fit—close, regular, relaxed or oversized—if the source makes it clear.",
        "A listing image can add context, but it should not replace the chart. Pose, camera distance and styling can change how a garment appears. Use the image to identify the cut, then make the decision from the source measurements and the buyer's own reference item." ] },
      { heading: "Use warehouse photos as a second comparison", paragraphs: [
        "Warehouse photos can help confirm visible labels, proportions and any measurement view that is provided. Compare them with the original notes you saved. If a relevant label, dimension or option is not visible, treat it as an unanswered question rather than an implied match.",
        "This is also the point to notice obvious differences between the recorded option and the arrived item. A clear record of the source size, selected variation and needed measurement makes that review more precise and keeps a request focused on observable details." ] },
      { heading: "Avoid false certainty in size content", paragraphs: [
        "No independent guide can promise a fit from a chart or photograph. Bodies, preferences, production variation and measuring method all matter. Avoid claims such as 'true to size' unless you explain the source and limits of the observation; even then, it is safer to direct readers back to measurements.",
        "The most useful size article teaches a repeatable process: choose a comparable owned item, measure it, read the source chart, record the selected option, compare the visible warehouse evidence and decide before parcel submission. This is practical advice without a false guarantee." ] },
      { heading: "What to keep in a spreadsheet row", paragraphs: [
        "A size-ready row includes the product category, source URL, selected variation, source chart values, unit, the buyer's comparison note and the date checked. For shoes and accessories, include the relevant length or dimension. For clothing, make the key garment measurements easy to scan.",
        "This compact structure helps readers compare similar items and return to a source page with a purpose. It also prevents a popular label from being confused with a verified fit. When the evidence is incomplete, the right next step is more checking—not stronger wording." ] }
    ]
  }
];

export const factualFaq = [
  ["Can a PikoBuy request start with a link or an image?", "The public site says buyers can search directly or submit a product link, image or sourcing request. A link is the clearest reference; an image or keyword still needs a precise option and source check."],
  ["What happens when an item reaches the warehouse?", "PikoBuy’s beginner guide describes check-in, photo confirmation and a defect check. The homepage also describes inspection and repacking. These steps create evidence to review; they do not guarantee every hidden issue will be found."],
  ["Do QC photos prove authenticity or long-term quality?", "No. Photos can help compare visible details against the source listing. They cannot prove authenticity, material composition, internal performance or long-term durability."],
  ["Can I request more detailed photos?", "The shipping terms say buyers can view inspection photos or purchase additional detailed photos. Ask for a specific missing detail rather than treating extra images as a blanket guarantee."],
  ["How is an international shipping estimate formed?", "The public estimator asks for destination, product type, weight and dimensions. Use it as a current comparison input, since a different parcel, route or destination can change the result."],
  ["When should I expect tracking information?", "The public beginner guide says tracking information is available within three days after a parcel is shipped. That is platform guidance, not a guaranteed carrier scan or delivery date."],
  ["Are customs, loss or delivery delays risk-free?", "No. PikoBuy’s shipping terms say third-party logistics providers carry parcels and describe customs and uncontrollable cross-border logistics risks. Do not rely on any route as a customs or delivery guarantee."],
  ["When can a warehouse item be considered for return?", "The public returns page says eligibility depends on seller rules, resale condition and the item being in the warehouse for no more than five days. Some categories are excluded, and seller consent and fees may apply."],
  ["Can this independent site place an order or manage a refund?", "No. PikoBuyFins is a research guide. It does not accept payments, place orders, ship parcels or decide refunds."],
  ["What should I save before submitting a parcel?", "Keep the original listing, selected option, warehouse photos, stated parcel weight and dimensions, selected route, estimate date and parcel number. These details make later comparisons and support requests clearer."]
];
