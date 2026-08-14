import { guideCoreArticles, type SeoArticle } from "./seo-articles";

const commonDate = "12 August 2026";

function refreshGuide(article: SeoArticle): SeoArticle {
  return {
    ...article,
    published: commonDate,
    sections: article.sections.map((section) => ({
      ...section,
      paragraphs: section.paragraphs.map((paragraph) => paragraph.replaceAll("11 August 2026", commonDate)),
    })),
  };
}

export const guideArticles: SeoArticle[] = [
  {
    ...refreshGuide(guideCoreArticles[0]),
    slug: "beginner",
    label: "COMPLETE BEGINNER GUIDE",
    published: commonDate,
    title: "How PikoBuy Works: A Complete Guide from Product Link to Delivery",
    dek: "A source-backed walkthrough of PikoBuy's six published stages, with the decisions a buyer should make before ordering, at the warehouse and before international shipping.",
  },
  {
    ...refreshGuide(guideCoreArticles[1]),
    slug: "qc",
    label: "COMPLETE QC GUIDE",
    published: commonDate,
    title: "How to Read PikoBuy Warehouse QC Photos Before Shipping",
    dek: "A practical, category-aware method for comparing the received item with the order while respecting what warehouse photographs cannot prove.",
  },
  {
    ...refreshGuide(guideCoreArticles[2]),
    slug: "shipping",
    label: "COMPLETE SHIPPING GUIDE",
    published: "13 August 2026",
    title: "PikoBuy Shipping: Weight, Packaging, Route Choice and Total Delivery Cost",
    dek: "A fact-checked guide to parcel inputs, order and forwarding paths, sensitive goods, packaging, insurance, return movement and delivery-day evidence.",
    readingTime: "12 min read",
    sections: [
      ...refreshGuide(guideCoreArticles[2]).sections,
      {
        heading: "Purchasing orders and self-forwarded orders create different responsibilities",
        paragraphs: [
          "A normal purchasing order begins with a marketplace item submitted through PikoBuy. Self-forwarding begins when the buyer or another seller sends goods to the warehouse address supplied by PikoBuy. The published shipping terms describe a separate forwarding form, warehouse receipt, photographs and storage before the buyer submits a parcel and pays international shipping. Record which path applies because it changes what the warehouse and platform can reasonably verify.",
          "PikoBuy's forwarding terms say forwarded goods may be unpacked and inspected, but the platform cannot provide professional inspection for special or professional products. The terms also say that missing items not caused by PikoBuy are not compensated and that PikoBuy does not provide product after-sales service for forwarded goods, although it may help ship an item back. Cash-on-delivery domestic fees may be deducted from the account balance. A forwarding label is therefore not equivalent to a purchasing guarantee.",
        ],
      },
      {
        heading: "Sensitive goods need a live route check, not a generic promise",
        paragraphs: [
          "PikoBuy's user agreement gives concrete examples of sensitive goods: essential oils, care solutions, lubricants, batteries and glue. It says such components may be removed in some handling situations. These examples should be treated as warnings, not as a complete permanent list. Route acceptance depends on the declared product, destination and current carrier rules, so the live parcel screen and current official terms control.",
          "Describe contents accurately and separate three questions: can the warehouse handle the item, does an available route accept it, and can it lawfully enter the destination. A route appearing for ordinary goods does not prove acceptance for a battery or liquid. If no suitable route appears, the responsible choice may be domestic return, separate handling where allowed, or not shipping the item. No spreadsheet should advise concealing components or changing declarations to obtain a cheaper line.",
        ],
      },
      {
        heading: "Insurance, claims and return movement need their own budget lines",
        paragraphs: [
          "Where insurance is offered, PikoBuy's user agreement describes it as optional and ties compensation to the insured amount, applicable standards and exclusions. Prohibited or excluded goods and causes outside the coverage may not qualify. Save the available terms, selected coverage, insured amount, parcel value and payment record. Insurance can improve a documented claim position, but it does not remove customs, carrier, packaging or prohibited-goods risk.",
          "The same agreement distinguishes domestic and overseas return movement. A parcel returned domestically for a security issue may be sent again after it comes back under the applicable case, while an overseas return caused by security, an address problem, no signer or delivery failure can leave the user responsible for reshipment. Verify recipient details before submission and keep a separate contingency for correction or reshipment rather than hiding it inside the expected carrier charge.",
        ],
      },
      {
        heading: "Delivery-day evidence can determine whether a claim is usable",
        paragraphs: [
          "When the parcel arrives, inspect the exterior before discarding or opening damaged packaging. If it is crushed, wet, opened or resealed, photograph the unopened parcel, shipping label and affected sides. Preserve the tracking record and then document the internal condition and contents. PikoBuy's user agreement advises checking the parcel and outer packaging at receipt and contacting support promptly when there is a problem.",
          "Escalate through the official order or ticket channel with the parcel number, delivery date, carrier event and concise evidence. The public contact page lists ticket submission as recommended alongside email, Discord and Reddit. Keep private names, addresses, order records and payment details inside authenticated support. An independent guide can explain the evidence sequence, but it cannot open a carrier claim or determine compensation for a specific parcel.",
        ],
        bullets: [
          "Identify purchasing-order or self-forwarding responsibility before shipment.",
          "Declare sensitive components and check current route acceptance.",
          "Save insurance terms, insured amount and exclusions when coverage is selected.",
          "Budget international return or reshipment separately from the expected route charge.",
          "Photograph damaged outer packaging before it is discarded.",
          "Use the official order or ticket channel for private parcel evidence.",
        ],
      },
    ],
    sources: [
      ...guideCoreArticles[2].sources,
      { label: "PikoBuy Contact", url: "https://www.pikobuy.com/contact", note: "Official ticket, email and community support routes" },
    ],
  },
  {
    slug: "returns",
    label: "COMPLETE RETURNS GUIDE",
    title: "PikoBuy Returns and Exchanges: How the 120-Hour Warehouse Window Works",
    dek: "A plain-English reading of PikoBuy's published return rules, including eligibility, evidence, seller responsibility, stated fees and the decisions that cannot wait.",
    published: commonDate,
    readingTime: "9 min read",
    graphic: [
      { number: "01", title: "Check", note: "Confirm live eligibility" },
      { number: "02", title: "Document", note: "Save order and QC evidence" },
      { number: "03", title: "Apply", note: "Act inside the stated window" },
      { number: "04", title: "Follow", note: "Use the official order record" },
    ],
    sections: [
      {
        heading: "Start the return decision when the item enters the warehouse",
        paragraphs: [
          "A return guide is most useful before a questionable item has been sitting in storage for several days. PikoBuy's published returns page says an application can be made within five days after an order status changes to In Warehouse. The page explains that counting starts from the next hour and identifies five days as 120 hours. That wording gives buyers a practical trigger: review the order and warehouse evidence as soon as the status changes instead of waiting until parcel submission.",
          "The 120-hour reference is not a promise that every product will be accepted. The same policy separates products that are eligible from products that are not eligible for the free five-day service, and seller consent still matters. Use the countdown shown in the official interface, if available, as the order-specific reference. This independent guide can explain the published rule, but it cannot see an account, approve a request or extend a deadline.",
        ],
      },
      {
        heading: "Eligibility depends on the product and its resale condition",
        paragraphs: [
          "PikoBuy's policy says a returnable item must meet several conditions: the seller offers the guarantee, the product remains in the resale condition required by the seller, and it has been in the warehouse no more than five days. This means time alone is not enough. Packaging, labels, seals, accessories and any buyer-requested handling can affect whether a seller will take an item back. Avoid requesting irreversible packaging changes before you have completed the keep-or-return review.",
          "The official page lists examples that may not qualify, including customized products, intimate apparel, food, second-hand goods, products sourced outside mainland China and items subject to separate seller rules. It also lists special packaging standards for categories such as new sneakers, cosmetics, digital products, cameras, models, electronic components and sealed consumables. Read the live category rule rather than assuming that a general five-day headline overrides product-specific conditions.",
        ],
      },
      {
        heading: "Match the evidence before choosing a reason",
        paragraphs: [
          "A useful return file has four pieces: the source listing, the exact option selected, the order record and the warehouse photos. Compare them in that order. Confirm colour, size, quantity, visible model and included components before evaluating finer quality details. If the source listing has changed, use any saved option text, chart or image from the ordering date. The goal is to describe an observable mismatch rather than reconstruct the order from memory.",
          "Keep the language factual. Ordered blue and received black is clearer than item looks bad. Listing shows two pieces and the warehouse record shows one is a specific quantity issue. A visible hole or stain can be marked in the relevant photo. If lighting or camera angle may explain the concern, request one targeted additional view when the official service offers it and when the answer could change the decision. General requests for better QC waste time and often produce no decisive evidence.",
        ],
      },
      {
        heading: "Separate seller responsibility from a change of mind",
        paragraphs: [
          "The PikoBuy returns table distinguishes customer-responsibility situations from seller-responsibility situations. Customer examples include no longer wanting the item, ordering the wrong product, buying too many, finding that international shipping exceeds the budget or disagreeing with a seller who maintains that the item has no quality issue. Seller examples include sending the wrong colour or size and visible quality issues such as holes or stains. That distinction can affect who is expected to bear return costs.",
          "Do not overstate the result. The policy says customers normally do not bear return costs when the return was not caused by them, but it also notes that a seller may insist otherwise. PikoBuy says it can return goods only with the seller's consent. A clear evidence record helps the platform communicate the case, yet it does not guarantee that the seller will accept the reason or that every cost will be waived. Follow the case status inside the official order system.",
        ],
      },
      {
        heading: "Understand the stated cost of an unconditional return",
        paragraphs: [
          "For an unconditional return, the official page lists three components: shipping the item back to the seller, the seller's original shipping fee and an RMB 5 service fee. It also says that even when a seller originally offered free shipping, the buyer may need to pay the first delivery cost when requesting a return. This is an important budgeting fact because free shipping on the product page does not necessarily mean cost-free reversal after warehouse receipt.",
          "The page advises keeping enough money in the account balance to cover the return shipping and service fee. Actual amounts other than the stated RMB 5 component depend on the case, seller and domestic logistics, so this guide does not invent a universal return total. Read the amount shown in the live request before confirming. If a policy or checkout amount differs from this dated summary, the current PikoBuy interface and official support should be treated as the final reference.",
        ],
      },
      {
        heading: "Protect packaging and labels until the decision is final",
        paragraphs: [
          "Return eligibility often depends on whether the item can be resold. PikoBuy's page says products whose packaging, labels or accessories were removed at the user's request may be treated as not returnable. The special-standards table adds category-specific requirements: anti-theft buckles and tamper-proof stickers on new sneakers should remain intact, sealed personal-care goods should stay sealed, and model or collectible packaging should not be opened when its tape or plastic seal matters.",
          "This creates a sensible order of operations. First inspect the standard warehouse record. Second, identify the uncertainty that affects your decision. Third, check whether a requested photo, measurement, unpacking or label removal could damage resale condition. Only then request additional handling. A photograph can be useful, but an unnecessary request is not worth losing a viable return path. When the packaging itself is important, state that requirement before any removal or consolidation request.",
        ],
      },
      {
        heading: "Do not confuse a return request with an instant refund",
        paragraphs: [
          "Submitting inside the time window begins a process; it does not mean the money is already returned. PikoBuy's policy says the seller must consent and that the total refund is based on the actual product price paid. Domestic return movement, seller receipt and case review can occur before the platform resolves the order. Keep screenshots or records of the request, stated reason, evidence and any amount shown, but avoid sharing private order identifiers publicly.",
          "Monitor the official order page rather than relying on a social-media estimate of processing time. If the case needs clarification, use the platform's ticket or support route and refer to the exact order inside the authenticated channel. Do not send account passwords, payment details or private support records to an external spreadsheet website. PikoBuy's public contact page lists support email, ticket submission, Discord and Reddit, with ticket submission identified as recommended.",
        ],
      },
      {
        heading: "Use a three-way warehouse decision",
        paragraphs: [
          "A practical framework has three outcomes. Keep the item when the option matches, the relevant measurements work and no visible issue changes its intended use. Clarify when one answerable question remains and the response could change the decision. Apply for a return when the evidence shows a material mismatch or defect, or when a customer-choice return remains eligible and the total cost is acceptable. Ranking the issue by consequence prevents minor uncertainty from consuming the whole window.",
          "The decision threshold is product-specific. A small measurement difference can matter greatly for fitted clothing but less for a loose accessory pouch. A surface mark can be critical on a display object and irrelevant on disposable packaging. Focus on intended use, replaceability, the cost of returning, the cost of shipping internationally and the evidence available. A responsible guide helps organize those trade-offs; it should never promise a refund outcome.",
        ],
      },
      {
        heading: "Keep a clean record for future spreadsheet checks",
        paragraphs: [
          "When a product record is updated after a return, separate observation from conclusion. Wrong size label visible is an observation supported by a photo. Seller sent the wrong item is a conclusion that also depends on the recorded option. Return requested on a date and accepted or declined on a date are status facts. Poor quality is too vague unless the specific visible problem and evidence are identified. This discipline makes future link research more useful.",
          "Do not turn a single return into a platform-wide statistic or customer rating. If public experience evidence is used later, identify its source, date and limitations. Product links, policies and seller behavior can change. The lasting value comes from showing what happened, which official rule was consulted and what remained uncertain. That approach is more credible to users and search engines than invented success rates or anonymous testimonials.",
        ],
        bullets: [
          "Review the order as soon as its status changes to In Warehouse.",
          "Confirm whether the product and packaging meet current eligibility rules.",
          "Preserve the listing, selected option, order record and relevant QC photos.",
          "Describe visible mismatches precisely and choose the truthful return reason.",
          "Read every fee shown before confirming the official request.",
          "Keep private order data inside PikoBuy's authenticated support channels.",
        ],
      },
    ],
    sources: [
      { label: "PikoBuy Returns & Exchanges", url: "https://www.pikobuy.com/protocol/returns", note: "Eligibility, 120-hour timing, reasons, fees and special standards" },
      { label: "PikoBuy Beginner's Guide", url: "https://www.pikobuy.com/guide", note: "Warehouse check-in, photo confirmation and defect-check stage" },
      { label: "PikoBuy User Agreement", url: "https://www.pikobuy.com/protocol/user", note: "Five-day service context and inspection limitations" },
      { label: "PikoBuy Contact", url: "https://www.pikobuy.com/contact", note: "Official support routes" },
    ],
  },
  {
    slug: "fees",
    label: "COMPLETE FEES GUIDE",
    title: "PikoBuy Fees and Two Payments: A Complete Cost-Planning Guide",
    dek: "A source-backed explanation of the product-side order, the later parcel payment, the published shipping-stage platform fee and the costs a spreadsheet cannot know in advance.",
    published: commonDate,
    readingTime: "9 min read",
    graphic: [
      { number: "01", title: "Product", note: "Price and domestic-side amounts" },
      { number: "02", title: "Warehouse", note: "Observed weight and dimensions" },
      { number: "03", title: "Parcel", note: "Route, packaging and shipping" },
      { number: "04", title: "Landing", note: "Destination charges and risk" },
    ],
    sections: [
      {
        heading: "Why a PikoBuy order can involve two separate payments",
        paragraphs: [
          "PikoBuy's beginner guide separates the buying path into a purchasing-order payment and a later international shipping payment. The first occurs after the buyer chooses the specification, colour, size and quantity. The second happens after the item reaches the warehouse, the buyer chooses a route and a parcel is submitted. This is not an unexplained duplicate charge; the two payments correspond to different decisions made with different information available.",
          "At the product stage, the completed parcel does not yet exist. Final warehouse weight, dimensions, packaging choices, consolidation and available routes are unknown. A third-party spreadsheet can record an observed product price, but it cannot honestly promise the final delivered total. The most useful approach is to maintain separate budget lines and update them as the seller, warehouse and parcel stages replace assumptions with live figures.",
        ],
      },
      {
        heading: "What belongs in the first product-side budget",
        paragraphs: [
          "The first budget starts with the selected merchandise and any domestic-side amounts shown during official ordering. PikoBuy's guide says prices are subject to the actual purchase and that an out-of-stock order will be refunded. The user agreement says buyers pay the product purchase price and logistics costs and warns that calculations can vary slightly with exchange-rate fluctuations and settlement timing. A saved spreadsheet number is therefore a dated observation, not a quote.",
          "Before paying, confirm the exact option, quantity and seller page. Check whether domestic delivery, seller discounts or option-specific pricing changes the total. If the source listing is incomplete, do not use a low spreadsheet price to fill the gap. Save the actual official order amount and date. When comparing products, compare like with like: a base option, a complete set and a custom configuration may share one listing but produce very different first payments.",
        ],
      },
      {
        heading: "The warehouse creates the inputs for the second payment",
        paragraphs: [
          "After arrival, PikoBuy describes check-in, photo confirmation and a defect check. The warehouse stage also gives the buyer better evidence about what will enter the international parcel. Weight, dimensions, packaging and consolidation affect the route calculation. PikoBuy's public estimator asks for destination country or region, product type, weight in kilograms and length, width and height in centimetres, showing why a destination-free universal shipping price is not credible.",
          "Use early seller information to create a range, then replace it with warehouse observations. A bulky light item may be affected by the space it occupies, while a compact heavy item may be driven mainly by scale weight. PikoBuy does not publish one universal dimensional formula on the estimator page reviewed for this guide, so we do not invent one. The calculation shown for the live route and parcel should control.",
        ],
      },
      {
        heading: "Read the published platform fee with a date attached",
        paragraphs: [
          "PikoBuy's user agreement reviewed on 11 August 2026 says parcel forwarding uses third-party logistics providers and that the platform service fee is calculated at 8% of the shipping fee. It notes that the actual calculation may differ slightly because of exchange-rate fluctuations and settlement times. The agreement says this fee is added when shipping payment is confirmed and that the shipping order will not be generated or confirmed if it is not paid.",
          "This is a current policy fact, not a permanent rate guarantee. Agreements can be updated, and an order may present details that a summary cannot predict. Before submitting the parcel, compare the shipping amount, the platform fee and the complete official total. If the checkout differs from an older article or screenshot, use the current checkout and reopen the official agreement. A trustworthy content page shows the source and verification date instead of hiding a changing fee inside a timeless claim.",
        ],
      },
      {
        heading: "Packaging can lower volume or add protection",
        paragraphs: [
          "The official beginner guide mentions minimal packaging and reinforced packaging as examples of warehouse requests. Minimal packaging may remove unnecessary retail material and reduce volume. Reinforcement can protect fragile or structured goods while adding material, weight or dimensions. Neither option is automatically cheaper after risk is considered. A damaged low-cost parcel can be more expensive than a slightly higher protected-shipping amount.",
          "Decide item by item. Basic clothing may tolerate simpler packaging, while ceramics, glass, electronics, structured accessories and presentation items may need additional protection. If a retail box has value to you, record that before requesting removal. Re-estimate after the request, because the billable parcel can change. Do not publish packaging savings as guaranteed percentages unless they come from an identifiable before-and-after parcel record and are clearly presented as one case.",
        ],
      },
      {
        heading: "Compare routes beyond the headline amount",
        paragraphs: [
          "PikoBuy's guide says routes differ in delivery time and billing methods. Price is only one part of a route decision. Review whether the line accepts the product type, the billable weight shown, estimated transit range, tracking, insurance or compensation conditions where offered, size limits and destination service. The cheapest available line may be unsuitable for a battery, liquid, powder, magnet, fragile item or another specially classified product.",
          "Route availability can change with destination, logistics capacity, season and classification. Read the live notes when the parcel is submitted, not an old social-media screenshot. Describe the contents accurately and follow current restrictions. PikoBuy's Terms of Service prohibit illegal and infringing activity and state a zero-tolerance policy toward counterfeit goods and products that infringe intellectual-property rights. No shipping method converts a prohibited item into an acceptable one.",
        ],
      },
      {
        heading: "Destination duties and taxes sit outside a spreadsheet price",
        paragraphs: [
          "PikoBuy's Terms of Service say cross-border transactions may incur duties, taxes, brokerage fees or other charges and that the user is responsible for them. The user agreement says PikoBuy makes no guarantee of customs clearance. These costs and outcomes depend on the destination, product, declared information and current rules. An external database cannot promise tax-free delivery, a fixed customs amount or a parcel that will never be inspected.",
          "For planning, keep possible destination charges as a separate line rather than hiding them inside shipping. Review the current import rules for the destination and use accurate parcel information. If a purchase only makes financial sense when duties are assumed to be zero, the plan is fragile. The objective is not to predict every government or carrier charge perfectly; it is to recognize the costs that remain uncertain before committing to the product.",
        ],
      },
      {
        heading: "Build low, expected and high cost scenarios",
        paragraphs: [
          "A single total looks precise but conceals unsettled inputs. Build three scenarios before ordering. The low case can use compact packaging and the lower plausible suitable route. The expected case should use realistic seller information, normal packaging and the route most likely to fit the product. The high case should allow for larger warehouse dimensions, reinforcement, a more expensive acceptable route and destination charges. Keep every assumption visible.",
          "This method is especially useful for bulky low-price goods, several items intended for consolidation and categories with route restrictions. If the purchase only works under the low case, reconsider it before the first payment. When warehouse data arrives, replace assumptions rather than creating a second disconnected estimate. A transparent revision history explains why the parcel total changed and prevents the product price from being confused with the total delivery cost.",
        ],
      },
      {
        heading: "What an honest spreadsheet should display",
        paragraphs: [
          "A useful product record labels the currency, observation date and scope of every amount. Product price, domestic delivery, international shipping, platform fee and destination charges should not be collapsed into one undocumented figure. The record should say when shipping is only an estimate and identify the destination and parcel assumptions behind it. It should direct buyers to the official estimator and checkout for current route-specific calculations.",
          "Avoid invented discounts, guaranteed shipping totals, universal volumetric formulas and copied screenshots without dates. When a real parcel example is used, show its destination, category, measured weight, dimensions, packaging, route date and limitations; do not imply that every buyer will receive the same result. Search value comes from helping readers understand the bill, not from publishing a persuasive number that the site cannot verify.",
        ],
        bullets: [
          "Keep the product-side order separate from the parcel-side payment.",
          "Record currency, observation date and the exact option behind a product price.",
          "Estimate with destination, type, weight and all three parcel dimensions.",
          "Verify the current platform fee in the live agreement and checkout.",
          "Compare route restrictions and protection, not only the lowest amount.",
          "Leave a separate allowance for destination duties, taxes and brokerage.",
        ],
      },
    ],
    sources: [
      { label: "PikoBuy Beginner's Guide", url: "https://www.pikobuy.com/guide", note: "Two-payment sequence, warehouse stage, packaging and route differences" },
      { label: "PikoBuy User Agreement", url: "https://www.pikobuy.com/protocol/user", note: "Product costs, 8% shipping-stage fee and logistics risk" },
      { label: "PikoBuy Shipping Estimate", url: "https://www.pikobuy.com/shipping-cost", note: "Destination, type, weight and dimension inputs" },
      { label: "PikoBuy Terms of Service", url: "https://www.pikobuy.com/protocol/terms", note: "Destination charges, service scope and prohibited items" },
      { label: "PikoBuy Shipping Terms", url: "https://www.pikobuy.com/protocol/shipping", note: "Third-party logistics and forwarding process" },
    ],
  },
  {
    slug: "tracking",
    label: "COMPLETE TRACKING GUIDE",
    title: "PikoBuy Tracking: How to Read Parcel Updates Without Guessing",
    dek: "A practical guide to the first tracking update, carrier stages, quiet periods, customs events, evidence keeping and the point at which official support is the right next step.",
    published: commonDate,
    readingTime: "9 min read",
    graphic: [
      { number: "01", title: "Dispatch", note: "Warehouse hands off the parcel" },
      { number: "02", title: "Transit", note: "Carrier and export events appear" },
      { number: "03", title: "Customs", note: "Border processing may create gaps" },
      { number: "04", title: "Delivery", note: "Local carrier completes the route" },
    ],
    sections: [
      {
        heading: "Tracking is an event history, not a live location",
        paragraphs: [
          "A parcel tracker does not usually show a continuous dot moving across a map. It publishes events when a warehouse, carrier, export facility, customs authority or last-mile operator records something. The absence of a new scan between facilities is therefore not the same as proof that the parcel has stopped. A useful tracking review asks which stage is documented, how long the route currently expects and whether the latest event requests action.",
          "Keep the parcel submission date, shipment date, route name, carrier and tracking number together. These fields prevent different clocks from being mixed. The time since parcel payment is not always the same as time in carrier transit, and an estimated delivery range may start from handoff rather than order creation. Use the wording shown for the actual route instead of borrowing expectations from a different line or another buyer's parcel.",
        ],
      },
      {
        heading: "Allow for PikoBuy's published first-update window",
        paragraphs: [
          "PikoBuy's beginner guide says tracking information will be available within three days after the parcel is shipped. The phrase after shipment matters. It does not promise an immediate scan after international shipping is paid, and it does not guarantee delivery within three days. Treat it as the platform's published expectation for tracking information to become available, then check the shipment status and route record before assuming something is wrong.",
          "If no number or event appears after the official shipment status and the stated window has passed, confirm that you are viewing the correct parcel and that the interface has refreshed. Record the shipment date and take a dated screenshot of the blank or unchanged status if support evidence becomes necessary. Do not publish a private tracking number openly. Use PikoBuy's authenticated ticket or official contact route for an order-specific investigation.",
        ],
      },
      {
        heading: "Read the route as a sequence of operational stages",
        paragraphs: [
          "A normal cross-border route can include warehouse dispatch, carrier acceptance, consolidation or line-haul preparation, export processing, international transport, destination customs, handoff to a local carrier and final delivery. The exact labels differ by provider and language. Several labels may describe the same operational stage, and a third-party tracker may translate them differently from the carrier. Look for the underlying change rather than reacting to every wording variation.",
          "Repeated information can also be normal when a shipment is scanned by several facilities or systems. A status such as information received may indicate that a shipping record exists before a physical acceptance scan is public. Departure can refer to a local facility rather than the origin country. Arrival at destination may refer to a regional hub rather than the delivery address. Read the timestamp, location and next event together before drawing a conclusion.",
        ],
      },
      {
        heading: "Quiet periods need route context",
        paragraphs: [
          "International line-haul can produce fewer public scans than domestic delivery. A parcel may move inside a consolidated shipment, wait for a transport departure or cross a long distance before the next system posts an event. Weekends, peak seasons, weather, capacity limits and customs handling can lengthen a quiet period. None of those possibilities proves what happened to one parcel, but they explain why scan frequency is not a reliable speedometer.",
          "Compare the quiet period with the current estimate and terms for the chosen route, not with the fastest parcel found online. Save the latest event and date, then check at a reasonable interval rather than refreshing constantly. When the route is outside its published expectation, or when a status explicitly asks the sender or recipient to act, move from observation to official support. A third-party spreadsheet has no access to carrier investigations.",
        ],
      },
      {
        heading: "Customs events require accuracy, not promises",
        paragraphs: [
          "PikoBuy's user agreement says customs inspections can occur and that the platform makes no promise or guarantee regarding customs clearance. The Terms of Service say cross-border transactions can incur duties, taxes, brokerage fees or other charges. A customs-processing status is not automatically a seizure, and a request for documents is not automatically a delivery failure. Follow the actual event and any instruction from the carrier or authority.",
          "Use accurate parcel and recipient information and review the destination's current import requirements. Do not ask an external guide how to hide contents, misdeclare a parcel or bypass a restriction. PikoBuy's Terms prohibit illegal and infringing activity and state a zero-tolerance policy toward counterfeit goods and intellectual-property infringement. If a carrier or customs authority requests an invoice or other document, respond through the legitimate channel and keep a copy of what was provided.",
        ],
      },
      {
        heading: "Know what the risk terms actually say",
        paragraphs: [
          "PikoBuy's shipping terms state that parcels are carried by third-party logistics providers and identify cross-border risks such as customs action, confiscation, damage, loss and peak-season delay. The user agreement discusses delayed-delivery and parcel-insurance contexts, but compensation depends on the route, coverage, cause and third-party provider standards. A delay caused by customs, weather, government action or other listed force-majeure events may be treated differently from a carrier-controlled delay.",
          "Do not translate the existence of insurance or compensation language into a guaranteed payout. Keep the route conditions shown when the parcel was submitted, any insurance selection, declared or insured amount, payment record and tracking history. Those documents are more useful than a later recollection. If a claim becomes necessary, submit it through the official order or support process and follow the evidence requirements for the actual line.",
        ],
      },
      {
        heading: "Use the official carrier record when one is available",
        paragraphs: [
          "PikoBuy's parcel view is the platform record, while the named carrier may publish its own operational events. Compare both when the carrier and number are available. A universal tracking aggregator can be convenient, but it may cache data, translate labels or miss a handoff to a destination carrier. The official carrier page and PikoBuy order remain stronger evidence than a screenshot copied from an unrelated tracking website.",
          "At handoff, a new local number may appear. Preserve the original number and record the linked local identifier rather than replacing one with the other. Confirm the delivery address only inside authenticated services; never paste a full address, phone number or private order screenshot into a public comment seeking help. If a delivery event looks incorrect, contact the named local carrier and PikoBuy using the official records.",
        ],
      },
      {
        heading: "Escalate with a concise evidence package",
        paragraphs: [
          "PikoBuy's contact page lists support email, ticket submission, Discord and Reddit and marks ticket submission as recommended. For an order-specific problem, the authenticated ticket is the clearest place to keep private details. State the parcel number inside the official channel, route, shipment date, latest event, date of that event and the specific question. For example: no first tracking event after the published window, or destination carrier requests sender action.",
          "Avoid sending a long emotional narrative without the event record. Support needs to identify the parcel and understand what changed. Attach only relevant screenshots and redact information when using any public community channel. Do not share passwords, payment-card information or authentication codes. This independent site cannot contact PikoBuy on a user's behalf and should never collect credentials under the pretext of tracking assistance.",
        ],
      },
      {
        heading: "Maintain a tracking record that helps rather than alarms",
        paragraphs: [
          "A useful spreadsheet records shipment date, route, carrier, first public event date, latest event, latest event date, destination handoff number if any and a neutral status such as within expectation, action requested or support contacted. It should not label a parcel lost simply because several days passed without a scan. Conclusions need the route expectation, carrier response or official claim result behind them.",
          "When publishing experience analysis, remove private identifiers and distinguish one parcel from a platform-wide performance claim. A set of selected success or delay stories is not a reliable on-time rate. If a future article uses a public sample, explain how cases were selected, what dates and routes they cover and what remains unknown. Honest limits make the evidence more convincing than invented delivery percentages or unsupported customer ratings.",
        ],
        bullets: [
          "Start timing from the shipment status, not only the parcel-payment date.",
          "Keep the route, carrier, number and latest event together.",
          "Allow for PikoBuy's published first-tracking-information window.",
          "Compare the platform record with the official carrier when available.",
          "Treat customs and quiet periods as stages to interpret, not automatic loss.",
          "Escalate through official support with dates and the exact event record.",
        ],
      },
    ],
    sources: [
      { label: "PikoBuy Beginner's Guide", url: "https://www.pikobuy.com/guide", note: "Shipment stage and published first-tracking-information timing" },
      { label: "PikoBuy Contact", url: "https://www.pikobuy.com/contact", note: "Official support email, ticket and community routes" },
      { label: "PikoBuy Shipping Terms", url: "https://www.pikobuy.com/protocol/shipping", note: "Third-party carriers and cross-border logistics risks" },
      { label: "PikoBuy User Agreement", url: "https://www.pikobuy.com/protocol/user", note: "Customs, delayed-delivery, insurance and compensation context" },
      { label: "PikoBuy Terms of Service", url: "https://www.pikobuy.com/protocol/terms", note: "Destination charges, service scope and prohibited activity" },
    ],
  },
];

export function getGuideArticle(slug: string) {
  return guideArticles.find((article) => article.slug === slug);
}
