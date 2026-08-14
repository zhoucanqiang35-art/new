export type DeepGuideSection = {
  id: string;
  label: string;
  title: string;
  paragraphs: string[];
  points?: string[];
  callout?: string;
};

export type DeepGuide = {
  sourceContext: string;
  sections: DeepGuideSection[];
};

export const deepGuides: Record<string, DeepGuide> = {
  "how-pikobuy-works": {
    sourceContext:
      "This guide follows the six stages published in PikoBuy’s beginner guide. It separates statements made by PikoBuy from our practical record-keeping advice, and it does not imply access to any user account or order.",
    sections: [
      {
        id: "select-and-search",
        label: "01 / BEFORE PAYMENT",
        title: "Selection and search are two different checks",
        paragraphs: [
          "PikoBuy’s first stage begins outside the order screen. Its guide tells shoppers to select a product from Taobao, Tmall, 1688, Weidian or Yupoo, then confirm the style, colour and size. That is more important than it sounds. A spreadsheet title may describe the general item, while the live source page can contain several variants with different materials, dimensions or prices. Save the original item and store information before converting the link so that you can trace the listing later.",
          "The second stage is the hand-off to PikoBuy. The official guide says a shopper can paste a product link or search with keywords. A successful import only shows that the platform can read or locate a listing; it is not evidence that the seller, option, stock level or product quality has been independently verified. If the item cannot be found, the guide directs the shopper to customer service. At this point, compare the imported title, image and visible options with the source rather than treating the imported screen as a substitute for it.",
        ],
        points: [
          "Keep the raw source URL and item identifier.",
          "Write down the exact colour, size, style and quantity you intend to select.",
          "Capture the source price with its currency and check date.",
          "Do not use a platform name as a permanent quality label.",
        ],
      },
      {
        id: "first-payment",
        label: "02 / PURCHASE ORDER",
        title: "The first payment is for purchasing—not final delivery",
        paragraphs: [
          "At stage three, PikoBuy asks the user to choose product options, submit the order and complete the first payment. The beginner guide also says that the final product price is based on the actual purchase and that an out-of-stock item will be refunded. The useful interpretation is that the initial product screen is still an order request: price and availability can change when the purchasing team reaches the seller.",
          "Keep the product budget separate from the parcel budget. Domestic seller shipping, option-specific price differences, payment conversion and later international freight are not the same cost. A spreadsheet page should therefore show the recorded source price as a dated reference, not label it as the delivered total. If the order changes or fails, preserve the status and refund record rather than silently replacing the original entry with a new price.",
        ],
        points: [
          "Check every selected option before confirming the purchasing order.",
          "Record any domestic delivery charge shown at purchase.",
          "Treat an out-of-stock refund as an order event, not proof that another listing is equivalent.",
          "Never calculate landed cost from product price alone.",
        ],
        callout:
          "Two-payment model: product purchasing comes first; international parcel shipping is selected and paid later.",
      },
      {
        id: "warehouse",
        label: "03 / WAREHOUSE",
        title: "Warehouse photos are a decision point, not decoration",
        paragraphs: [
          "PikoBuy describes stage four as warehouse inspection: the item is checked in, photographed and examined for defects. This is the moment to compare what arrived with what you ordered. Count pieces, verify the visible colour and option, review obvious stains or damage, and check category-specific details. For clothing that may mean collar shape, print placement and measurements; for a bag it may mean dimensions, hardware and the inside view.",
          "A warehouse photograph has limits. It cannot reliably prove fibre composition, long-term durability, internal electronics condition or authenticity. PikoBuy’s forwarding terms also state that professional inspection cannot be provided for special or professional products and that users may purchase additional detailed photos. Ask for a missing decisive view while the item is still in the warehouse. Do not wait until international dispatch to notice that the evidence was incomplete.",
        ],
        points: [
          "Compare the photographed item with the saved source listing.",
          "Request measurements when fit depends on more than a size label.",
          "Keep packaging, labels and accessories intact while a return may still be needed.",
          "Use account support for an order-specific defect or mismatch.",
        ],
      },
      {
        id: "parcel",
        label: "04 / SECOND PAYMENT",
        title: "Parcel submission creates the international-shipping decision",
        paragraphs: [
          "Stage five begins after warehouse review. The official guide says the shopper chooses a logistics route, submits the parcel and pays international shipping. It specifically warns that routes differ in delivery time and billing method. Compare the destination, product restrictions, chargeable weight, tracking level and available risk protection—not only the lowest number in the route list.",
          "Packaging can change the final parcel. PikoBuy’s guide mentions minimal and reinforced packaging requests during warehouse handling. Removing unnecessary packaging may reduce dimensions, but removing structural protection from crush-sensitive goods can create a different risk. Reinforcement can protect an item while increasing volume. Save the final parcel weight and dimensions used for the route decision so that the second payment can be understood later.",
        ],
        points: [
          "Review every warehouse item before consolidation.",
          "Compare actual weight and any route-specific dimensional billing rule.",
          "Check restrictions for the product type and destination.",
          "Save the selected route, parcel data and payment record together.",
        ],
      },
      {
        id: "tracking",
        label: "05 / AFTER DISPATCH",
        title: "The three-day tracking note starts after shipment",
        paragraphs: [
          "PikoBuy’s sixth stage is waiting for the parcel. Its beginner guide says logistics information will be available within three days after the parcel is shipped. That statement should not be counted from the date a product reached the warehouse or from the moment the parcel was submitted. Preserve the dispatch timestamp and look for the first carrier event from that point.",
          "A tracking page can remain quiet while data moves between the warehouse, logistics provider and destination carrier. PikoBuy’s shipping terms say international parcels are carried by third-party logistics providers and identify risks such as customs action, damage, loss and peak-season delay as cross-border factors that cannot be eliminated. A three-day tracking note is not a promised delivery time. For a parcel-specific problem, use the official order record and support channel.",
        ],
        points: [
          "Separate parcel submission, dispatch and first carrier scan.",
          "Read the event description and location, not only a broad status label.",
          "Do not publish one past transit time as a universal route promise.",
          "Keep customs and destination delivery events distinct from warehouse processing.",
        ],
      },
      {
        id: "audit-record",
        label: "06 / RESEARCH RECORD",
        title: "What a useful spreadsheet should preserve",
        paragraphs: [
          "The six stages create six different evidence points. A useful spreadsheet can help a reader find the source item, but it should not collapse product selection, purchase, warehouse inspection and international shipping into one vague “verified” status. Record what was checked and what remains unknown. When the live source changes, update the note and retain the previous check date instead of presenting the row as permanently current.",
          "For a repeatable order record, keep the raw product URL, intended options, first-payment amount, warehouse photo decision, final parcel weight and dimensions, route choice, second payment, dispatch date and first tracking event. This makes later questions easier to diagnose and keeps editorial research separate from PikoBuy’s account-specific services.",
        ],
        callout:
          "Independent boundary: this site explains public information. Only PikoBuy can inspect a user’s order, payment, refund, warehouse record or parcel.",
      },
    ],
  },
  "returns-exchanges": {
    sourceContext:
      "This page is based on PikoBuy’s current Returns & Exchanges policy. The policy contains eligibility conditions, seller-consent rules, fees and product-specific packaging standards; the phrase “120 hours” is not a universal promise that every item can be returned.",
    sections: [
      {
        id: "eligibility",
        label: "01 / ELIGIBILITY",
        title: "A five-day window does not make every product returnable",
        paragraphs: [
          "PikoBuy’s policy divides products into eligible and non-eligible groups. For the standard process, the seller must offer the return guarantee, the item must remain in the resale condition required by the seller, and the product must have been in the warehouse for no more than five days. The policy also says PikoBuy can return a product only with the seller’s consent. Those conditions matter more than the headline alone.",
          "Before ordering, look for the seller’s return protection and preserve the listing evidence. After warehouse arrival, do not request removal of tags, labels, accessories or protective packaging while you are still deciding. A product that was eligible on arrival can become difficult or impossible to return if the requested handling means it no longer meets the seller’s resale or special packaging standard.",
        ],
        points: [
          "Seller offers a return guarantee.",
          "Item remains complete and resalable.",
          "Warehouse time has not exceeded the policy window.",
          "Seller consent and category-specific conditions still apply.",
        ],
      },
      {
        id: "clock",
        label: "02 / THE CLOCK",
        title: "How PikoBuy defines the 120-hour period",
        paragraphs: [
          "The official policy says the application must be made within five days after the order status changes to “In Warehouse.” It explains that counting starts from the next hour after that status change and defines five days as 120 hours. Applications may not be accepted after the period. That is why the status timestamp—not the seller’s dispatch date, domestic tracking delivery time or the day you happen to open the photos—should control your reminder.",
          "Treat warehouse arrival as an active review event. Open the photo set, compare the item with the selected option and decide whether an extra detail photo is necessary. If the evidence shows a mismatch or visible defect, use the account’s return process promptly. Waiting for other items to arrive for consolidation can consume the return window even though the parcel itself has not been submitted.",
        ],
        points: [
          "Save the exact time the status became “In Warehouse.”",
          "Set a personal review deadline earlier than the policy deadline.",
          "Do not count from international parcel submission.",
          "Do not assume a support message automatically pauses the clock.",
        ],
        callout:
          "The policy states that the count starts from the next hour after “In Warehouse”; five days equals 120 hours.",
      },
      {
        id: "fees",
        label: "03 / COST",
        title: "An unconditional return can include three separate charges",
        paragraphs: [
          "For a return without a product-quality issue, PikoBuy lists the calculation as shipping back to the seller, the seller’s original shipping fee and an RMB 5 service fee. The policy adds that even when the seller advertised free shipping at purchase, the first-delivery cost can still be charged during the return. That means the refundable product amount and the net amount received after return-related charges are not necessarily identical.",
          "The policy asks users to keep enough account balance to cover the return shipping and service charge. Before applying, identify whether the reason is a personal decision, a wrong quantity, an unexpectedly high international shipping estimate, a seller mismatch or a quality issue. Selecting the reason accurately matters because responsibility affects who normally bears the domestic return cost.",
        ],
        points: [
          "Return freight from warehouse to seller.",
          "Seller’s original domestic shipping fee.",
          "RMB 5 service fee for an unconditional return.",
          "Actual refund is based on the product price paid, subject to applicable deductions.",
        ],
      },
      {
        id: "responsibility",
        label: "04 / RESPONSIBILITY",
        title: "Customer-caused and seller-caused returns are handled differently",
        paragraphs: [
          "PikoBuy’s examples place “I no longer want it,” ordering the wrong item or quantity, shipping cost exceeding the buyer’s budget, and a seller finding no quality problem on the customer side. In those cases the unconditional-return fee structure applies. This is why shipping research belongs before parcel submission and, where possible, before ordering bulky or heavy products.",
          "Seller-side examples include the wrong product, wrong colour or size, holes and stains. The policy says customers normally do not bear the return cost when the cause is not theirs, although it also notes the seller may insist on a shipping fee. Domestic-shipping damage is listed separately. Preserve clear warehouse photos, the selected options and the source listing because those records make the cause easier to explain.",
        ],
        points: [
          "Describe the visible issue precisely.",
          "Attach the relevant order selection and warehouse image.",
          "Avoid claiming a hidden defect that the evidence cannot show.",
          "Keep account-specific discussion inside official support.",
        ],
      },
      {
        id: "excluded",
        label: "05 / EXCLUSIONS",
        title: "The non-returnable list is broader than customized goods",
        paragraphs: [
          "The policy identifies customized products, intimate apparel, adult products, food, second-hand goods, certain overseas-origin products and other seller-specified goods among categories that may not qualify for the free five-day process. It also lists products whose packaging, labels or accessories were removed at the user’s request. For non-covered items, PikoBuy may negotiate, but the seller’s decision controls the outcome.",
          "Special standards apply to several opened or sealed categories. New sneakers may need anti-theft buckles and tamper-proof stickers intact. Personal-care, fragrance, cosmetic, pet, food and similar goods may need disposable seals preserved. Electronics, cameras, appliances, models, games and books have their own condition rules. Read the current official table for the exact product rather than reducing the policy to a generic clothing rule.",
        ],
        points: [
          "Do not remove protective seals before deciding.",
          "Keep tags, boxes, manuals and accessories together.",
          "Check the current official special-standards table.",
          "Assume specialist categories need more evidence, not fewer checks.",
        ],
      },
      {
        id: "return-checklist",
        label: "06 / ACTION CHECKLIST",
        title: "What to do while the item is still in the warehouse",
        paragraphs: [
          "First, verify eligibility and the warehouse timestamp. Second, compare the selected option with the photographed item. Third, preserve packaging and capture the evidence that supports the reason. Fourth, estimate the domestic return cost and make sure the account balance can cover applicable charges. Finally, submit the request through the account before the deadline and retain its status.",
          "This independent guide cannot decide whether a particular return will be approved. It can only help a reader understand the public policy and prepare a clearer record. Use PikoBuy’s official account and support channels for the seller’s response, final fee allocation, refund amount and any exception.",
        ],
        callout:
          "Do not wait for international shipment. The standard return process is a warehouse-stage decision.",
      },
      {
        id: "special-standards",
        label: "07 / PRESERVE CONDITION",
        title: "Special packaging standards can decide whether a return remains possible",
        paragraphs: [
          "The official table does not use one condition test for every product. New sneakers may need an anti-theft buckle and tamper-proof sticker to remain intact. Sealed personal-care goods, fragrances, cosmetics, pet products, food and certain consumables may become ineligible once the disposable seal is opened. Cameras, appliances, electronic components, models, games and books each have different condition limits. A buyer should therefore read the row that matches the actual category before asking the warehouse to remove a box, cut a tag, open a seal or test an item.",
          "This matters because packaging decisions happen while the product is still in the warehouse. Minimal packaging may later reduce parcel volume, but removing the wrong retail protection can also remove evidence of resale condition. Keep a simple record of seals, tags, accessories, manuals and visible packaging before authorizing changes. If inspection photos do not show the decisive condition, ask official support whether an additional image is available before the return window closes. The purpose is not to manufacture a claim; it is to preserve the evidence needed to describe the item accurately.",
        ],
        points: [
          "Match the product to the current special-standards row.",
          "Do not cut, open or discard return-sensitive material prematurely.",
          "Photograph the condition before requesting packaging changes.",
          "Use the official account for the final eligibility decision.",
        ],
      },
    ],
  },
  "shipping-cost-guide": {
    sourceContext:
      "This guide reads the fields shown on PikoBuy’s official shipping estimator together with its public shipping terms. An estimator result is a planning figure, not a guaranteed charge, route availability promise or customs outcome.",
    sections: [
      {
        id: "six-inputs",
        label: "01 / ESTIMATOR",
        title: "The six visible inputs and what each one changes",
        paragraphs: [
          "PikoBuy’s estimator asks where the parcel will ship from its warehouse, the product type, weight in kilograms, and length, width and height in centimetres. Destination can change the available carriers, service level and restrictions. Product type helps screen routes that may not accept a category. Weight and the three measurements describe the parcel rather than the unboxed product.",
          "Enter a realistic packed parcel. A jacket folded for shipment, a boxed pair of shoes and an electronics item with protective material occupy different volumes even when their product-page prices look similar. If the warehouse has not produced final parcel data, label the result as a planning estimate and record the assumptions beside it. Re-run the comparison when the actual parcel is prepared.",
        ],
        points: [
          "Destination country or region.",
          "Product type.",
          "Weight in kilograms.",
          "Length, width and height in centimetres.",
        ],
      },
      {
        id: "product-price",
        label: "02 / COST BOUNDARY",
        title: "Source price is not international shipping cost",
        paragraphs: [
          "A product row on FindSpreadsheet records a source price and product context. PikoBuy’s workflow handles international shipping later, after the item reaches the warehouse and the user chooses a logistics route. Combining those numbers into one early “delivered price” hides domestic shipping, option changes, packaging and route-specific charges.",
          "Use separate columns for source price, first-payment amount, domestic seller shipping, estimated international freight and final international freight. Add the exchange-rate date when converting currencies. This does not make the estimate exact; it makes the uncertainty visible and prevents a low product price from being mistaken for a low landed cost.",
        ],
        points: [
          "Keep product and freight budgets separate.",
          "Retain the source currency.",
          "Date every conversion and estimate.",
          "Replace an estimate only when final parcel data exists.",
        ],
      },
      {
        id: "weight-volume",
        label: "03 / WEIGHT & VOLUME",
        title: "Why dimensions matter even for a light parcel",
        paragraphs: [
          "The official estimator collects three dimensions as well as scale weight. That is a strong signal that volume can affect route comparison. A light parcel can occupy substantial carrier space, while a dense parcel may be billed mainly by its actual weight. The exact chargeable-weight rule or divisor can vary by route, so do not publish one universal formula unless the selected route itself provides it.",
          "Measure the packed outer dimensions, not the clothing measurement or retail-box label. If you test a volumetric calculation for planning, identify the divisor as a route assumption and compare the result with actual weight. The higher figure may influence the quote, but the official route details and final warehouse calculation should control the decision.",
        ],
        points: [
          "Use final outer packaging measurements.",
          "Do not reuse one dimensional divisor across every route.",
          "Compare actual and assumed volumetric weight.",
          "Record whether boxes or protective material are included.",
        ],
      },
      {
        id: "packaging",
        label: "04 / PACKAGING",
        title: "Minimal and reinforced packaging solve different problems",
        paragraphs: [
          "PikoBuy’s beginner guide says a user can add requests such as minimal or reinforced packaging at the warehouse stage. Minimal packaging can reduce volume where retail material adds little protection. Reinforcement can be sensible for crush-sensitive, sharp, fragile or moisture-sensitive items. Either decision can alter the dimensions entered in the estimator.",
          "Do not remove packaging mechanically. A shoe box may affect volume, but it can also help preserve shape; electronics may need original protection; accessories with hardware can damage neighbouring goods if not separated. Ask what risk the packaging controls, then compare the new dimensions after any change. A smaller quote is not a saving if the item becomes more likely to arrive damaged.",
        ],
        points: [
          "Identify crush, moisture, edge and movement risks.",
          "Remove only packaging that is genuinely unnecessary.",
          "Re-measure after repacking.",
          "Keep category-specific return requirements in mind before removing seals or labels.",
        ],
      },
      {
        id: "route-risk",
        label: "05 / ROUTE & RISK",
        title: "A route comparison needs more than the cheapest estimate",
        paragraphs: [
          "PikoBuy’s beginner guide says logistics routes differ in delivery time and billing method. Its shipping terms state that parcels are carried by third-party logistics providers. Compare the route’s accepted product types, tracking, billing unit, delivery expectation, insurance or risk-protection terms and destination coverage alongside price.",
          "The shipping terms also identify customs policies and uncontrollable cross-border events such as confiscation, damage, loss and peak-season delays as risks that cannot be removed by a headline estimate. This does not mean every parcel will encounter a problem; it means an estimator should not be presented as a guarantee of delivery time, customs treatment or compensation.",
        ],
        points: [
          "Check product restrictions and destination coverage.",
          "Compare tracking and billing method.",
          "Read current risk-protection terms.",
          "Do not turn an estimated transit range into a delivery promise.",
        ],
      },
      {
        id: "estimate-checklist",
        label: "06 / REPEATABLE CHECK",
        title: "A practical way to record a shipping estimate",
        paragraphs: [
          "Save the destination, product type, packed kilograms, three dimensions, packaging assumption, route and check date. Repeat the estimate with final warehouse data before the second payment. If the result changes, preserve the earlier assumption and note what changed—weight, dimensions, product classification, packaging or route availability.",
          "For account-specific pricing, available lines and parcel restrictions, rely on the live PikoBuy account and official support. This page explains public inputs and decision logic; it cannot see a user’s warehouse parcel or calculate a guaranteed charge.",
        ],
        callout:
          "Best use: compare realistic scenarios. Worst use: publishing one estimate as a permanent price for every user and destination.",
      },
      {
        id: "consolidation-scenarios",
        label: "07 / PARCEL SCENARIOS",
        title: "Consolidation changes both the number and the question",
        paragraphs: [
          "A shipping estimate becomes more useful when it describes the parcel you actually intend to submit. Combining several warehouse items can reduce repeated outer packaging, but it can also create a larger box, mix product restrictions or require more protection between hard and soft goods. The official estimator asks for one product type, one weight and one set of dimensions, so a mixed parcel may need more careful classification than a single-item test. Do not add several product weights and assume the result is the final packed parcel.",
          "Create at least two planning scenarios before the warehouse produces final data. The first can keep retail boxes or fragile-item protection; the second can remove only packaging that is genuinely unnecessary. Record which goods are included, the assumed outer dimensions and any route restriction that could split the parcel. Once final warehouse measurements are available, discard neither scenario: compare them with the actual parcel to understand why the estimate changed. That audit trail is more useful than claiming the earlier estimate was simply wrong.",
        ],
        points: [
          "List every item included in the planned parcel.",
          "Separate restricted or fragile goods when a route requires it.",
          "Model packaging choices before treating consolidation as a saving.",
          "Replace assumptions with the final warehouse record before payment.",
        ],
      },
      {
        id: "dispatch-boundary",
        label: "08 / AFTER PAYMENT",
        title: "Dispatch, tracking visibility and delivery are three different events",
        paragraphs: [
          "PikoBuy’s beginner guide says tracking information will be available within three days after the parcel is shipped. That statement should be read from the dispatch event, not from product purchase, domestic warehouse arrival or parcel submission. It describes when logistics information may appear; it is not a promise that the parcel will reach the destination within three days. Save the submission time, freight-payment time, dispatch time and first carrier scan as separate events.",
          "The shipping terms state that third-party logistics providers carry international parcels and identify customs action, damage, loss and peak-season delay among cross-border risks. A route estimate cannot remove those variables. If tracking remains quiet beyond the published guidance, use the carrier reference and official PikoBuy account support rather than filling the gap with an invented status. For an editorial spreadsheet, publish only the latest observed event and its date; do not convert one historical parcel into a universal transit-time claim.",
        ],
        points: [
          "Start the tracking-visibility clock at dispatch.",
          "Keep the first carrier scan separate from the warehouse timeline.",
          "Do not present an estimate as a customs or delivery guarantee.",
          "Escalate parcel-specific questions through official support.",
        ],
      },
    ],
  },
};
