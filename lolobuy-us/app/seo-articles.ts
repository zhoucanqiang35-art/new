type SeoSource = {
  label: string;
  href: string;
  note: string;
};

type SeoSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

type SeoGuidePage = {
  kicker: string;
  title: string;
  summary: string;
  readTime: string;
  visual: "workflow" | "qc" | "shipping" | "tracking" | "cost";
  sections: SeoSection[];
  sources: SeoSource[];
  cta?: { label: string; href: string };
};

const officialSources: SeoSource[] = [
  {
    label: "Warehouse inspection & photo evidence",
    href: "/sources#warehouse-inspection",
    note: "LoloBuy's homepage says it conducts a quality inspection and takes photos after the merchant sends goods to the warehouse. Use those images to compare visible shape, color, seams, print placement, accessories and measurements with the listing. Photos cannot authenticate a product or prove every material claim.",
  },
  {
    label: "Storage, consolidation & parcel evidence",
    href: "/sources#storage-and-parcel",
    note: "The official homepage currently advertises up to 90 days of free storage. Treat that as time-sensitive platform information and confirm the current rule in your account before relying on it. Once items are ready, parcel decisions can include consolidation, packaging and available shipping lines.",
  },
];

export const seoGuidePages: Record<string, SeoGuidePage> = {
  "guides/how-lolobuy-works": {
    kicker: "BEGINNER GUIDE / OFFICIAL WORKFLOW",
    title: "How LoloBuy works: from a product link to an international parcel",
    summary: "A practical, source-led walkthrough for first-time shoppers, separating LoloBuy's public process from the independent checks that still belong to the buyer.",
    readTime: "15 min read • reviewed 10 Aug 2026",
    visual: "workflow",
    sections: [
      {
        heading: "What LoloBuy is—and what a spreadsheet adds",
        paragraphs: [
          "LoloBuy presents a cross-border shopping service that helps users purchase goods from Chinese online and offline channels. Its public site describes a link-based starting point: a shopper submits a product link, the order is purchased, the seller sends the item to a warehouse, and the item can later become part of an international parcel. That is the platform workflow. A LoloBuy spreadsheet serves a different purpose. It organizes discovery, so a shopper can move through product categories and compare possible listings without keeping dozens of unsorted browser tabs. The spreadsheet does not replace the seller page, the LoloBuy order screen or the buyer's own judgment. A useful row should lead to a current product page and make the item easier to investigate; it should never be treated as proof of authenticity, inventory, seller reliability or final quality.",
          "This distinction matters because discovery and transaction are two separate decisions. LoloBuy.us provides research prompts and category routes. FindSpreadsheet.com contains the wider product index. LoloBuy.com remains the source for the current order, warehouse and parcel transaction. Keeping those roles clear makes the process easier to audit and prevents an attractive spreadsheet card from being mistaken for an official endorsement.",
        ],
      },
      {
        heading: "Step 1: inspect the source listing before you paste the link",
        paragraphs: [
          "Do the slow work before payment. Open the original listing and record the exact variant, color, size and quantity you intend to buy. Read the size chart as measurements, not as familiar labels: one seller's medium can differ materially from another seller's medium. Compare the stated measurements with an item you already own and note whether the chart describes body measurements or finished-garment measurements. Look for seller photos that show multiple angles, packaging or included accessories, and keep a screenshot of the selected option. If the listing relies on vague claims such as 'best batch' or 'premium material' without evidence, treat those phrases as marketing rather than verified facts.",
          "Also decide what would make you reject the item at the warehouse. Examples include a wrong color, a measurement outside your acceptable range, visible damage, missing accessories or an incorrect model. Setting those criteria before ordering helps you judge warehouse photos consistently later. It is much harder to make a clear decision after money has been spent and excitement has taken over.",
        ],
        bullets: [
          "Save the original product URL and seller name.",
          "Capture the selected variant, color, size and quantity.",
          "Copy the size chart or important measurements.",
          "Write down the visible details you will check after warehouse arrival.",
        ],
      },
      {
        heading: "Step 2: understand the purchase and domestic-delivery stage",
        paragraphs: [
          "After an order is submitted, the merchant still has to accept and dispatch it. The seller's domestic shipment to LoloBuy's warehouse is not the same as international shipping to the United States or Europe. A quiet order status can therefore mean several different things: the purchase is waiting to be completed, the seller has not shipped, the domestic carrier has not scanned the parcel, or the warehouse has not yet processed the arrival. Read the status in context instead of assuming that one timestamp represents the entire journey.",
          "When a seller reports that an option is unavailable or proposes a substitution, compare the replacement against your saved order details before accepting it. A small wording change can conceal a different size, color or version. Keep messages tied to the order record and avoid sending sensitive payment or identity information outside the platform's normal support process. If the seller never dispatches, use the current LoloBuy account options and official support guidance rather than instructions copied from an old review, because cancellation and refund rules can change.",
        ],
      },
      {
        heading: "Step 3: treat warehouse arrival as a decision point",
        paragraphs: [
          "LoloBuy's public homepage states that the service conducts a quality inspection and takes photos after the merchant sends goods to the warehouse. Those photographs are valuable because they show the received item before international dispatch, when clarification may still be possible. Start by confirming order accuracy: product type, quantity, color, size label and obvious included parts. Then compare overall shape and proportions before zooming into seams, print placement, surface condition, hardware or packaging damage. If fit matters, request or review a measurement image instead of estimating size from camera perspective.",
          "Warehouse photography has limits. It cannot establish authenticity, long-term durability, exact fiber content, smell, comfort, waterproofing or the internal condition of electronics. A clean photograph is evidence that no obvious issue appears in that view; it is not a universal quality certificate. The separate QC guide on this site uses a repeatable viewing order so that shoppers can describe visible problems precisely without making claims that the images cannot support.",
        ],
      },
      {
        heading: "Step 4: use storage time to plan, not to postpone indefinitely",
        paragraphs: [
          "At the time of this review, LoloBuy's public homepage advertises up to 90 days of free storage. The phrase 'up to' matters, and storage conditions are time-sensitive. Confirm the rule displayed in your account for the relevant item before relying on it. Record the warehouse-arrival date and set an earlier personal deadline so you have time to resolve a QC question, wait for another item or submit a parcel without approaching the limit. A spreadsheet should never present a storage allowance as permanent, because platforms can change free periods, overdue handling or exceptions.",
          "Consolidation can reduce the number of outbound parcels, but it also changes weight, dimensions, packaging decisions and the value concentrated in one shipment. Group items intentionally. A heavy or rigid item may affect how delicate goods should be packed. Batteries, liquids, oversized objects and other restricted contents can also limit available routes. Before combining everything, look at the destination, item mix and current line restrictions shown by the platform.",
        ],
      },
      {
        heading: "Step 5: build the parcel from the cost components upward",
        paragraphs: [
          "The product price is only one layer of total cost. Depending on the order and destination, the stack can include seller domestic delivery, platform charges shown during the transaction, optional services, packaging, international freight, insurance choices, currency conversion and taxes or duties. Use the live LoloBuy parcel screen for current values. Static fee tables age quickly and can be misleading when route availability, fuel surcharges, dimensional rules or promotions change.",
          "Record both actual weight and package dimensions when they are available. Some lines may calculate a chargeable weight that differs from scale weight, particularly when a light parcel occupies substantial volume. Removing retail packaging may reduce volume but can also reduce protection or remove parts you wanted to keep. The correct choice is not always the smallest number on the screen; it is the option whose cost, protection, restrictions and tracking coverage fit the parcel you are actually sending.",
        ],
      },
      {
        heading: "Step 6: compare shipping lines without inventing certainty",
        paragraphs: [
          "International routes can differ by destination, contents, declared parcel characteristics, carrier limits and current operational conditions. Compare the fields visible for your prepared parcel: eligibility, chargeable-weight method, stated estimate, tracking coverage, compensation or insurance terms and recent notices. Do not assume that a line recommended in a social post will be offered for your address or item mix. A route that worked for another customer last month may not match your parcel today.",
          "Treat delivery estimates as planning ranges rather than promises. Warehouse processing, carrier pickup, export handling, flight or line-haul movement, customs, destination-carrier transfer and final delivery are separate stages. Build a buffer if an item is intended for an event, and avoid orders whose success depends on every stage completing at the fastest possible speed. The shipping guide goes deeper into these comparisons without quoting stale prices.",
        ],
      },
      {
        heading: "Step 7: preserve a clean record through delivery",
        paragraphs: [
          "Keep the product URL, order number, warehouse photos, parcel number, chosen line and support messages together until the shipment is complete. Tracking wording can change during handoffs, so save the last meaningful event and its timestamp rather than relying on a cropped status screenshot. If customs or a carrier asks for information, use official channels and provide only what is necessary for the shipment. If a parcel is marked delivered but is missing, verify the address, delivery location and local carrier record promptly.",
          "After delivery, compare the result with the warehouse evidence and your original notes. This is the most useful feedback loop: it shows whether your sizing method, QC priorities, packaging choice and cost estimate were accurate. Avoid turning one successful or unsuccessful order into a universal claim about every seller, product or route. A disciplined record improves your next decision without pretending that a single experience proves how the entire platform will perform.",
        ],
      },
      {
        heading: "A beginner's final check before paying or shipping",
        paragraphs: [
          "Before product payment, confirm the listing, selected option, measurements and your warehouse rejection criteria. Before international shipping, confirm the received variant, visible condition, measurements, parcel contents, address, current route eligibility and total displayed cost. Recheck changing terms at LoloBuy.com on the day you act. This site dates platform observations, labels independent advice and avoids guarantees precisely because cross-border orders contain variables that no spreadsheet can eliminate.",
          "Used this way, a LoloBuy spreadsheet is not a shortcut around research. It is a starting map. The value comes from moving through that map methodically: discover a listing, verify what can be verified, document decisions and return to the live platform for every transaction-specific fact.",
        ],
      },
    ],
    sources: officialSources,
    cta: { label: "Continue to the FindSpreadsheet homepage", href: "https://findspreadsheet.com/" },
  },

  "guides/qc-photos": {
    kicker: "QC FIELD GUIDE / VISIBLE EVIDENCE",
    title: "How to read LoloBuy warehouse photos without overclaiming",
    summary: "A seven-frame method for checking order accuracy, measurements and visible defects while respecting what photographs cannot prove.",
    readTime: "16 min read • reviewed 10 Aug 2026",
    visual: "qc",
    sections: [
      {
        heading: "Why warehouse photos deserve a method",
        paragraphs: [
          "LoloBuy's public website says the warehouse performs a quality inspection and takes photographs after the merchant's goods arrive. That creates an important pause between domestic delivery and international shipping. The photographs can help a buyer detect a wrong variant, visible damage, obvious asymmetry, missing pieces or a measurement problem while the item is still at the warehouse. Their value depends on how carefully they are read. Random zooming encourages confirmation bias: shoppers notice the details they already hope to see and miss the basic evidence that matters most.",
          "A method turns the image set into a repeatable inspection. The goal is not to decide whether an item is 'perfect.' The goal is to compare what arrived with what was ordered, identify visible differences, and decide whether more information is needed before parcel submission. This guide uses seven frames: order match, overall silhouette, paired symmetry, construction details, color and surface, measurements, and packaging or included parts.",
        ],
      },
      {
        heading: "Frame 1: verify the order before judging quality",
        paragraphs: [
          "Begin with facts that are easy to compare: product type, quantity, color, size label, model and obvious accessories. Place the original listing or your saved screenshots beside the warehouse set. A beautifully photographed item can still be the wrong variant. Check whether the ordered color has been represented consistently under warehouse lighting and whether the size tag matches the option recorded in the order. For multi-part products, count the pieces and note any accessory, strap, insert, lace or adapter that was part of the seller's description.",
          "Do not let minor detail inspection distract from a fundamental mismatch. If the warehouse item is not the option you purchased, describe the discrepancy in plain language and reference the order record. 'Ordered navy, received black' is more actionable than 'this looks wrong.' If the seller listing has disappeared, the screenshot you saved before payment becomes especially useful.",
        ],
      },
      {
        heading: "Frame 2: read the silhouette before zooming in",
        paragraphs: [
          "A full front, back and side view reveals proportion, shape and obvious deformation. For footwear, inspect the toe profile, sidewall, heel alignment and the way the pair sits on a level surface. For clothing, look at shoulder width, sleeve relationship, body length, hem and the way panels hang. For bags, compare the panel outline, handle position and whether the body stands or collapses in a way that matches the listing. For headwear, examine crown shape, brim curve and symmetry.",
          "Camera angle matters. A wide-angle image taken close to the item can exaggerate the nearest section, while an item photographed off-center may appear asymmetric. Look for the same shape across more than one view. If only detail crops are available and the overall form is important, request a straight, full-item photograph rather than guessing from fragments.",
        ],
        bullets: [
          "Use a straight front view for overall proportion.",
          "Use side views for profile and depth.",
          "Use the back view to catch construction differences hidden from the front.",
          "Compare the item on a level surface when alignment matters.",
        ],
      },
      {
        heading: "Frame 3: compare left with right and front with back",
        paragraphs: [
          "Paired comparison is one of the fastest ways to spot visible issues. On shoes, compare toe height, panel placement, heel tabs and outsole contact. On clothing, compare sleeve length, pocket height, cuff width and the position of repeated graphics. On a bag, compare handle anchoring, side-panel shape and hardware placement. Perfect mathematical symmetry is not always expected, particularly in soft materials, but a clear difference should be investigated.",
          "Use stable reference points rather than intuition. A seam intersection, edge, eyelet row or panel corner makes a better reference than the statement that one side 'feels off.' If the difference could be caused by folding or loose laces, ask for the item to be positioned consistently. Specific requests reduce back-and-forth: name the two areas, the view you need and the reason the existing image is inconclusive.",
        ],
      },
      {
        heading: "Frame 4: inspect construction details without inventing material claims",
        paragraphs: [
          "Now zoom into seams, edges, print placement, embroidery, zippers, closures and hardware. Look for skipped stitching, loose threads, broken edges, peeling, dents, stains or obvious misalignment. On printed clothing, compare the graphic's location and scale with the listing. On jewelry or accessories, check visible surface finish, clasp operation if shown, and whether stones or decorative elements appear present. On electronics, photography can confirm exterior condition and included parts, but it cannot establish long-term function or safety.",
          "Describe only what the pixels support. A photograph may show a smooth-looking surface, but it cannot confirm a specific leather grade. It may show a fabric label, but not prove that the full garment has the stated fiber content. It may show clean stitching in three views, but not guarantee every hidden seam. Separating observation from inference is what makes a QC note credible.",
        ],
      },
      {
        heading: "Frame 5: handle color, texture and lighting carefully",
        paragraphs: [
          "Warehouse lighting, camera white balance, screen settings and compression can all change perceived color. Compare several images and use neutral objects in the frame as rough references, but avoid making a final color judgment from one strongly tinted photograph. If the listing and warehouse images differ significantly, request a photograph under neutral light or beside a simple color reference. For dark items, ask for enough exposure to see surface condition without washing out the color.",
          "Texture is even harder to prove. A photograph can reveal obvious pilling, scratches, stains or uneven finish, but it cannot reliably communicate softness, thickness, smell, flexibility or exact composition. When those properties are decisive, acknowledge the uncertainty. A request for an additional close-up may reduce uncertainty, but it cannot convert a visual inspection into a laboratory test.",
        ],
      },
      {
        heading: "Frame 6: use measurement photos instead of size guesses",
        paragraphs: [
          "Size labels are weak evidence because seller conventions vary. A measurement image is more useful when it shows the item laid consistently with a ruler or tape aligned to the points that matter. For a T-shirt or hoodie, common comparisons include chest width, body length and sleeve length. For pants, waist, rise, inseam and leg opening may matter. For footwear, outsole or insole length can be more useful than the printed size alone. Compare the photographed number with a similar item you already own and understand how it was measured.",
          "Perspective can distort a ruler if the camera is not perpendicular, and fabric can stretch or fold. If a measurement appears close to your limit, request a clearer view rather than rounding in the favorable direction. Record your acceptable tolerance before ordering. A one-centimeter difference may be irrelevant for one garment and decisive for another; the buyer, not the photograph, defines that threshold.",
        ],
      },
      {
        heading: "Frame 7: check packaging, included parts and transit vulnerability",
        paragraphs: [
          "The last frame asks whether the item is complete and how it may behave inside an international parcel. Look for damaged boxes, crushed corners, exposed sharp hardware, leaking containers or delicate surfaces that could rub against other goods. Confirm included parts that matter to use: straps, adapters, laces, screws, protective pieces or manuals. Packaging shown in a warehouse photo is not automatically the packaging that will remain after parcel preparation, so confirm removal or reinforcement choices in the live account.",
          "Reducing packaging can lower volume, but protection has value. A rigid box may be unnecessary for a soft garment and useful for a structured or fragile item. Consider the entire parcel rather than one product in isolation. Heavy goods can damage lighter ones, and loose metal parts can mark nearby surfaces unless secured.",
        ],
      },
      {
        heading: "What QC photos cannot prove",
        paragraphs: [
          "Warehouse images cannot reliably prove authenticity, legality, long-term durability, exact material composition, comfort, waterproofing, scent, battery health, internal electronics condition or seller behavior on a future order. They also cannot guarantee that no hidden defect exists outside the photographed views. Avoid labels such as 'verified,' '1:1' or 'perfect quality' unless a claim has a specific, defensible meaning and evidence that actually supports it. LoloBuy.us does not use the presence of QC photos as a product certification.",
          "This limitation does not make the photos useless. It makes precise language important. 'No visible stain in the front and back views' is a supportable observation. 'The item has no defects' is not. Credible QC work increases the amount of useful evidence while keeping the conclusion proportional to that evidence.",
        ],
      },
      {
        heading: "How to request a useful clarification and record the decision",
        paragraphs: [
          "A good request identifies the item, the exact area, the missing angle and the comparison required. Instead of 'send better photos,' write that you need a straight view of the left heel beside the right heel, or a chest-width measurement with the garment laid flat. Keep the request tied to the order record and avoid including private account or payment data that support does not need.",
          "Before shipping, save the warehouse images and note why you accepted or rejected the visible condition. After delivery, compare the physical item with the image set. That feedback helps refine future inspection priorities and reveals which photographic clues were meaningful. It remains one order, not proof of universal seller or platform performance, but it turns experience into a better personal method.",
        ],
      },
    ],
    sources: officialSources,
    cta: { label: "Continue to the FindSpreadsheet homepage", href: "https://findspreadsheet.com/" },
  },

  "guides/shipping": {
    kicker: "PARCEL GUIDE / SHIPPING",
    title: "How to plan a LoloBuy parcel before choosing a shipping line",
    summary: "A destination-aware framework for packaging, chargeable weight, restrictions, tracking and delivery expectations—without stale rate tables.",
    readTime: "15 min read • reviewed 10 Aug 2026",
    visual: "shipping",
    sections: [
      {
        heading: "Why shipping research begins before parcel submission",
        paragraphs: [
          "International shipping is not a final button added to the product price. The item mix, destination, package dimensions, actual weight, restricted contents, packaging choices and current carrier conditions can all change which routes appear and what they cost. Planning begins while products are still being selected. A bulky low-price item may have a very different landed-cost profile from a compact item at the same purchase price, and a battery or liquid may reduce route eligibility for the entire parcel.",
          "LoloBuy's public process describes warehouse handling and international parcel movement, but the live account is where a buyer must confirm current line availability and transaction-specific terms. This guide therefore avoids quoting a permanent 'best line' or fixed price. Instead, it explains the fields that remain useful even when the available routes change.",
        ],
      },
      {
        heading: "Build the parcel inventory first",
        paragraphs: [
          "Create a simple inventory before consolidation. For each item, record the warehouse status, quantity, reported weight, rough dimensions, special content and whether retail packaging is important. Mark fragile, rigid, sharp, liquid, magnetic or battery-containing products for extra review. Confirm that every item has passed your warehouse-photo check before it is grouped. One unresolved item can delay the whole parcel or force a last-minute decision.",
          "Then consider compatibility. Heavy objects should not be free to crush soft or delicate goods. Hardware should be secured so it does not scratch nearby surfaces. Structured products may need shape protection, while compressible clothing may tolerate reduced volume. Packaging is a system: removing one box can save space, but it can also transfer risk to the surrounding items.",
        ],
        bullets: [
          "List every item and its warehouse order number.",
          "Flag contents that may face route restrictions.",
          "Record whether original packaging must be kept.",
          "Resolve QC questions before consolidation.",
        ],
      },
      {
        heading: "Separate actual weight from chargeable weight",
        paragraphs: [
          "Actual weight is what the parcel weighs on a scale. Chargeable weight is the value a line uses to price the shipment and may depend on actual weight, dimensional weight or a route-specific rule. Dimensional weight reflects the space a parcel occupies, which is why a large lightweight box can cost more than its scale weight suggests. The platform's current parcel estimate and the selected line's rule are more reliable than an old rate table copied into an article.",
          "If dimensions are driving cost, ask whether unnecessary packaging can be removed or whether the item can be packed more efficiently without creating unacceptable damage risk. Do not assume that maximum compression is always wise. Shoes, hats, bags and other structured goods may arrive deformed if volume is reduced aggressively. Compare the savings with the role that packaging plays.",
        ],
      },
      {
        heading: "Check eligibility before comparing prices",
        paragraphs: [
          "The cheapest displayed route is irrelevant if the parcel or destination is not eligible. Review destination coverage, maximum weight and dimensions, content restrictions and current notices. Batteries, liquids, aerosols, powders, magnets, food, oversized products and some branded goods may have special handling or route limitations. Regulations and carrier policies can differ across the United States and European destinations, so a line visible for one address may not be visible for another.",
          "Use the exact prepared parcel rather than a hypothetical example. A recommendation from another shopper does not establish eligibility for your contents. If the platform flags an item, read the current explanation and ask support for route-specific clarification. Do not misdescribe contents to force a route; accurate declarations and compliance with local law remain the buyer's responsibility.",
        ],
      },
      {
        heading: "Compare routes with a consistent scorecard",
        paragraphs: [
          "Once eligibility is clear, compare routes using the same fields. Start with the displayed shipping cost and chargeable weight, then add the stated delivery estimate, tracking coverage, carrier handoffs, insurance or compensation terms, parcel limits and recent operational notices. A lower price may be reasonable for a low-urgency parcel; stronger tracking or clearer compensation terms may matter more for another shipment. The scorecard keeps one attractive number from hiding a weakness elsewhere.",
          "Take a dated screenshot of the options you are comparing. Route names and availability can change, and the details shown at submission are more useful than memory later. Read estimates as ranges, not guaranteed dates. No independent spreadsheet can promise customs clearance or carrier performance.",
        ],
        bullets: [
          "Eligibility for destination and contents.",
          "Chargeable-weight method and total displayed cost.",
          "Tracking depth and likely handoffs.",
          "Current estimate, notices and parcel limits.",
          "Insurance or compensation terms shown for the route.",
        ],
      },
      {
        heading: "Plan for the United States and Europe as different destinations",
        paragraphs: [
          "The United States and Europe are not one shipping market. Customs thresholds, tax treatment, prohibited goods, address formats, delivery networks and data requirements can differ by country. Within Europe, the destination country still matters. Do not copy a declaration method or tax assumption from a shopper in another jurisdiction. Check current official customs information for the destination and the instructions shown by the platform or carrier.",
          "Address accuracy is universal. Use the recipient's full legal delivery details as required, include apartment or unit information, verify the postal code and provide a reachable contact method when the carrier requires it. Transliteration, diacritics and phone-number formats can cause problems when entered carelessly. Review the final label information before submission rather than after dispatch.",
        ],
      },
      {
        heading: "Understand the timeline as multiple queues",
        paragraphs: [
          "A parcel can pass through warehouse preparation, label creation, carrier pickup, export processing, line-haul transport, customs, destination-carrier intake and local delivery. Each is a separate queue. Tracking may be silent while the parcel moves between scan points or waits for data to synchronize. A label-created event does not necessarily mean the carrier has physically collected the parcel, and arrival in the destination country does not mean customs or last-mile processing is complete.",
          "Build a time buffer for gifts, travel or events. A route estimate describes an expected operating window under current conditions, not the latest safe order date for an important deadline. Weather, holidays, capacity constraints, customs questions and incorrect addresses can extend the journey. The only responsible promise is that uncertainty remains.",
        ],
      },
      {
        heading: "Decide on packaging with evidence, not habit",
        paragraphs: [
          "Packaging choices should respond to the contents. Moisture protection may matter for textiles. Edge and surface protection may matter for structured items. Empty space can allow movement, while excessive compression can deform goods. Retail boxes can add weight and volume but may protect shape or contain useful product information. Decide item by item rather than applying a universal 'remove all boxes' rule.",
          "If the platform provides photos or measurements of the prepared parcel, compare them with your inventory before final submission. Confirm that requested removals or reinforcements have been reflected. Keep a record of the package condition and declared contents until delivery. This gives you a clearer basis for any later question than a general statement that the parcel was 'packed badly.'",
        ],
      },
      {
        heading: "Know when insurance or compensation terms matter",
        paragraphs: [
          "Insurance and compensation are not useful as labels alone. Read what events are covered, the declared-value rules, documentation requirements, exclusions, claim windows and maximum amount shown for the current route. Coverage for total loss may differ from coverage for damage, delay, customs action or missing contents. Do not assume that buying an optional service removes every risk.",
          "Keep invoices, parcel records, warehouse images, packaging evidence and tracking events. If a problem occurs, follow the platform's current claim process and deadlines. A complete record does not guarantee a result, but it makes the claim specific and verifiable.",
        ],
      },
      {
        heading: "The final parcel-submission check",
        paragraphs: [
          "Before paying for international shipping, verify the recipient address, parcel inventory, packaging requests, displayed weight and dimensions, route eligibility, current cost, stated estimate, tracking terms and coverage details. Read any restriction or customs notice presented for the destination. Save the parcel number and the submission screen. If a field is unclear, pause and ask a precise question before dispatch, when choices may still be changed.",
          "A good shipping decision is not the route someone calls fastest or cheapest. It is the route that fits the actual parcel, destination and tolerance for cost, time and tracking uncertainty on the date of submission. That standard stays useful even when every price on the platform changes.",
        ],
      },
    ],
    sources: officialSources,
    cta: { label: "Continue to the FindSpreadsheet homepage", href: "https://findspreadsheet.com/" },
  },

  "guides/tracking": {
    kicker: "PARCEL GUIDE / TRACKING",
    title: "How to read LoloBuy parcel tracking as a sequence—not a promise",
    summary: "A plain-language framework for label creation, carrier handoffs, customs, quiet scans and useful escalation records.",
    readTime: "14 min read • reviewed 10 Aug 2026",
    visual: "tracking",
    sections: [
      {
        heading: "Start with a complete parcel record",
        paragraphs: [
          "Tracking is easier to interpret when the basic record is complete. Save the LoloBuy parcel number, selected line, recipient country, submission date and any downstream carrier number shown later. Keep the parcel inventory and address confirmation with the same record. A cropped screenshot of the latest event is not enough because it removes the route, dates and earlier sequence that give the status meaning.",
          "LoloBuy's public workflow includes international parcel handling and tracking, but the exact events depend on the current route and carriers involved. Treat the live account as the source for your shipment. This guide explains common patterns without claiming that every line uses the same wording or timing.",
        ],
      },
      {
        heading: "Label created is data—not necessarily movement",
        paragraphs: [
          "A label-created or information-received event often means shipment data has entered a carrier system. The parcel may still be waiting for warehouse preparation, pickup or the first physical scan. This is why a tracking number can exist before visible transport begins. Compare the event with the LoloBuy parcel status and the time since submission rather than treating the timestamp as proof that the parcel has left the warehouse.",
          "If information is incomplete, wait for the current processing window shown by the platform before escalating. When you do ask, distinguish between 'a number has been issued' and 'the carrier has recorded physical receipt.' That question is more useful than asking why tracking is broken.",
        ],
      },
      {
        heading: "Read export movement as a chain of handoffs",
        paragraphs: [
          "An international parcel may move from warehouse preparation to a logistics consolidator, export facility, line-haul operator or airline before appearing in a destination carrier's system. Different systems may use translated or abbreviated event names, and some events can appear later in batches. A status such as departed facility, handed to carrier or export processing should be interpreted as one handoff in a longer chain, not as a guaranteed flight or delivery date.",
          "Record the last event, location and timestamp. If a new tracking number appears, preserve the earlier number too. The handoff between upstream and destination carriers is a common point where one page stops updating while another begins.",
        ],
      },
      {
        heading: "A quiet scan does not automatically mean loss",
        paragraphs: [
          "Tracking can remain unchanged while a parcel travels between scan points, waits for transport capacity, undergoes security or customs processing, or waits for systems to exchange data. The meaning of silence depends on the route's current estimate, the last known event and any platform notice. One or two quiet days cannot be interpreted the same way across all lines.",
          "Avoid repeatedly opening support cases before the route's stated guidance suggests action; duplicate requests can make the record harder to follow. Instead, maintain a dated timeline. When the silence exceeds current guidance, provide the parcel number, line, last event and elapsed time in one clear message.",
        ],
      },
      {
        heading: "Understand customs events without guessing the outcome",
        paragraphs: [
          "Arrival at customs, clearance processing or held for information does not by itself establish whether a parcel will clear, incur charges or be returned. Customs authorities and carriers may request documents, payment or clarification based on destination law and shipment data. Respond through official channels and keep copies of what was requested and submitted. Never send identity or payment information to an unverified link received by message.",
          "A spreadsheet cannot predict a customs outcome. Product type, declared information, destination rules and enforcement decisions can all matter. The responsible approach is accurate shipment information, compliance with local law and prompt response to legitimate requests.",
        ],
      },
      {
        heading: "Watch for the destination-carrier number",
        paragraphs: [
          "After customs or destination entry, a local postal or parcel carrier may receive the shipment. Its tracking page can provide more detailed last-mile scans than the upstream line. Look for a new number or carrier name in the LoloBuy record or existing tracking details, then verify it on the carrier's official site. Do not use random tracking links from search ads or messages.",
          "Once the local carrier has the parcel, address problems, delivery attempts, pickup instructions and proof of delivery may need to be handled with that carrier. Keep LoloBuy's parcel record because it connects the upstream and downstream journey.",
        ],
      },
      {
        heading: "Act quickly on exceptions that need the recipient",
        paragraphs: [
          "Some events deserve prompt action: an incorrect address, customs information request, failed delivery attempt, pickup deadline, return-to-sender notice or delivered status when the parcel is missing. Verify the event on the official platform or carrier page, then follow the stated action. For a delivered-but-missing parcel, check the exact address, household members, reception area and available proof of delivery before reporting it.",
          "Describe the exception precisely. Include the parcel number, event text, timestamp, destination and what you have already checked. Avoid sending passwords, full payment details or unrelated identity documents. A useful escalation is complete enough to investigate and narrow enough to protect your information.",
        ],
      },
      {
        heading: "Build an escalation packet before contacting support",
        paragraphs: [
          "A strong packet contains the LoloBuy parcel number, downstream number, shipping line, submission date, destination, last meaningful event, elapsed time and relevant screenshots. Add the parcel inventory if contents are missing or damage is reported. If a carrier or customs authority issued a reference number, include it. Put the information in chronological order so the next person does not have to reconstruct the journey from scattered images.",
          "Ask a specific question: whether the carrier has physically received the parcel, whether a new destination number exists, whether more information is required, or which current claim process applies. Clear questions are easier to answer than 'where is my parcel?' and create a better record if a later claim becomes necessary.",
        ],
      },
      {
        heading: "Separate delay, loss, damage and missing contents",
        paragraphs: [
          "These are different problems and may have different evidence requirements. Delay concerns time and status. Loss concerns a parcel that cannot be located under the route's current process. Damage concerns the physical condition on arrival. Missing contents concerns a discrepancy between the submitted parcel inventory and what was delivered. Do not assume that one compensation rule covers them all.",
          "Photograph the delivered package before and during opening if there is visible damage or tampering. Keep labels and packaging until the issue is documented. Compare the contents with the warehouse and parcel records. Then use the current route and platform rules for reporting deadlines and required evidence.",
        ],
      },
      {
        heading: "Use delivery history to improve the next parcel",
        paragraphs: [
          "After delivery, save the actual timeline: submission, first physical scan, export movement, destination arrival, customs, local-carrier receipt and delivery. Note gaps and handoffs. This does not predict the next shipment, but it gives you a more honest personal baseline than a social-media claim based on someone else's route and destination.",
          "Add context to the timeline: destination country, parcel weight range, major holidays and the exact route name shown at submission. Without those fields, a delivery time is only a number and is easy to compare with the wrong shipment. Keep personal addresses and phone numbers out of any public review. If you share an experience, describe the route and dates accurately, separate the carrier record from your interpretation, and make clear that a past delivery does not guarantee a future result.",
          "Tracking is evidence of recorded events, not a promise of what happens next. Read it chronologically, verify important updates on official pages and escalate with a complete record when current guidance supports action. That approach cannot remove uncertainty, but it prevents silence, translation differences and carrier handoffs from being mistaken for facts they do not prove. It also produces a useful history that can be compared with a later parcel without turning either journey into a universal claim.",
        ],
      },
    ],
    sources: officialSources,
    cta: { label: "Continue to the FindSpreadsheet homepage", href: "https://findspreadsheet.com/" },
  },

  "guides/fees-and-weight": {
    kicker: "COST GUIDE / NO STATIC RATE CLAIMS",
    title: "How to estimate LoloBuy order cost, chargeable weight and landed spend",
    summary: "A reusable worksheet for comparing product price, domestic delivery, packaging, international freight and destination costs.",
    readTime: "15 min read • reviewed 10 Aug 2026",
    visual: "cost",
    sections: [
      {
        heading: "Why the product price is not the decision price",
        paragraphs: [
          "A low listing price can look decisive until domestic delivery, platform charges, optional services, packaging, international shipping, currency conversion and destination taxes are added. Not every order uses every cost layer, but ignoring possible layers makes two products or sellers impossible to compare fairly. The right question is not only 'what does this item cost?' It is 'what is the current estimated cost to receive this item at my destination under the choices I am making?'",
          "LoloBuy's live order and parcel screens are the source for transaction-specific figures. This guide does not publish a static fee table because fees, exchange rates, coupons, routes and carrier prices can change. It provides a worksheet structure that remains useful when the numbers move.",
        ],
      },
      {
        heading: "Layer 1: listing price and selected variant",
        paragraphs: [
          "Record the exact price of the selected size, color or model rather than the lowest headline price on the listing. Some seller pages show a range or a placeholder that changes after a variant is chosen. Include quantity and note whether a seller coupon, promotion or minimum order applies. Save the price and date, because the listing may later change.",
          "Compare like with like. A cheaper option without the required accessory, size or packaging is not the same product decision. If a spreadsheet row summarizes a price, confirm it on the live destination page before ordering. The spreadsheet should help discovery, not freeze a seller's changing number into a promise.",
        ],
      },
      {
        heading: "Layer 2: domestic delivery and order-stage charges",
        paragraphs: [
          "The seller's shipment to the LoloBuy warehouse is a domestic movement inside China and is separate from international freight. Record any domestic delivery charge shown for the order. Also record platform or service charges that appear during purchase, along with optional services you deliberately select. Do not rely on a fee mentioned in an older video or guide; use the amount and terms shown in the current transaction.",
          "If a seller sends several items together or a promotion changes domestic delivery, note the allocation method you use. Consistency matters more than false precision. The goal is to understand where money is going and avoid attributing every charge to international shipping.",
        ],
      },
      {
        heading: "Layer 3: warehouse options and packaging decisions",
        paragraphs: [
          "Warehouse-stage choices can affect cost directly through optional services and indirectly through parcel size or protection. Examples can include requested measurements, extra photographs, packaging removal or reinforcement when those options are offered in the live account. Record the displayed price before confirming a service. Do not assume that every service is available or priced the same for every item.",
          "Packaging removal is a trade-off. It may reduce volume or weight, but retail packaging may protect shape, separate parts or preserve information. Estimate the cost effect only after considering damage risk. A saved dollar that causes a crushed structured item is not an efficient decision.",
        ],
      },
      {
        heading: "Layer 4: actual weight, dimensions and chargeable weight",
        paragraphs: [
          "Actual weight comes from the scale. Dimensions describe the space the package occupies. A shipping line may price using actual weight, dimensional weight or another current rule, creating a chargeable weight different from the scale number. This is why a light but bulky parcel can cost more than expected. Record all three values when available: actual weight, dimensions and the chargeable weight displayed for the selected line.",
          "Do not apply a dimensional divisor copied from another carrier without confirming the rule shown for the current route. Lines can differ. If the difference between actual and chargeable weight is large, inspect packaging choices and parcel shape, then compare the protection trade-off before asking for repacking.",
        ],
        bullets: [
          "Actual weight: measured mass of the prepared parcel.",
          "Dimensions: length, width and height of the package.",
          "Chargeable weight: the billable value under the selected line's current rule.",
          "Displayed freight: the live amount tied to that parcel and route.",
        ],
      },
      {
        heading: "Layer 5: international shipping and route-specific terms",
        paragraphs: [
          "Compare the shipping amount only after route eligibility is established. A line can differ in chargeable-weight calculation, minimum billing unit, maximum dimensions, tracking, estimated delivery and compensation terms. Use the current parcel screen and save a dated record of the option selected. Static prices are especially weak evidence because fuel costs, capacity, surcharges and promotions can change.",
          "If you are splitting parcels, compare total freight and fixed charges across the split, not just each smaller quote. Splitting may reduce concentration risk or solve a restriction, but can create multiple minimum charges and tracking records. Consolidation may reduce duplication but increase dimensions or place more value in one shipment.",
        ],
      },
      {
        heading: "Layer 6: currency conversion and payment records",
        paragraphs: [
          "Keep the currency of each displayed amount and the amount charged by your payment method. Platform conversion, card conversion and issuer fees are separate possibilities; do not assume the headline exchange rate equals the final settled rate. Use the actual payment record for post-order analysis and avoid publishing personal card details in a support message or review.",
          "For planning, use a conservative conversion buffer rather than pretending to know the exact settlement rate in advance. For comparison after payment, replace estimates with actual charged amounts. This keeps the worksheet honest and improves the next estimate.",
        ],
      },
      {
        heading: "Layer 7: destination tax, duty and delivery costs",
        paragraphs: [
          "Destination charges depend on local law, product classification, value and current customs treatment. The United States and European countries do not share one universal threshold or tax process. Check official destination guidance and any information presented for the route. Do not copy another shopper's declaration or assume that their outcome establishes what will happen to your parcel.",
          "Also consider charges that may occur after arrival, such as carrier handling or local pickup travel, when relevant. These are not always predictable, so label them as possible rather than guaranteed. Accurate declarations and compliance with local law are part of the landed-cost decision.",
        ],
      },
      {
        heading: "Turn the layers into a comparison worksheet",
        paragraphs: [
          "Create columns for estimated and actual values. A practical row can include product and variant, quantity, listing price, domestic delivery, order-stage charges, optional warehouse services, allocated packaging, international freight, payment conversion, destination charges and total. Add actual weight, dimensions, chargeable weight, route and dates in separate fields. The worksheet then explains why two apparently similar items produced different landed costs.",
          "Do not force unknown values to zero. Mark them as not yet known and add a reasonable planning buffer separately. After delivery, replace estimates with actual figures and record the difference. A good cost model reveals uncertainty instead of hiding it.",
        ],
      },
      {
        heading: "Use unit cost carefully when consolidating",
        paragraphs: [
          "When several items share one parcel, international freight can be allocated by actual weight, chargeable-volume contribution, item value or a simpler agreed method. No allocation is perfect, but it should be consistent with the question you are asking. Weight-based allocation is easy; it can understate the cost of bulky lightweight items. Value-based allocation may help with financial exposure; it does not explain freight physics.",
          "Keep both parcel total and allocated item estimates. The parcel total is the amount actually paid. The allocation is an analytical tool. Never present an allocated item shipping cost as an official LoloBuy charge unless the platform itself billed it that way.",
        ],
      },
      {
        heading: "The final cost check",
        paragraphs: [
          "Before product payment, confirm variant price, quantity, domestic delivery and current order-stage charges. Before parcel payment, confirm inventory, weight, dimensions, packaging, route eligibility, chargeable weight, displayed freight, coverage choices and destination information. Save the dated screens that support the numbers. If a figure can change, label the date rather than turning it into an evergreen claim.",
          "The cheapest listing can become the more expensive delivered item, and the cheapest route can become a poor choice if it does not fit the parcel's protection or tracking needs. A landed-cost worksheet does not guarantee the result. It makes the decision visible, comparable and easier to improve.",
        ],
      },
    ],
    sources: officialSources,
    cta: { label: "Continue to the FindSpreadsheet homepage", href: "https://findspreadsheet.com/" },
  },
};
