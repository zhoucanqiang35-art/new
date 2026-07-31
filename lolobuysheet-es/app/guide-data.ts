export type BuyerGuideStep = {
  heading: string;
  action: string;
  why: string;
  checks: string[];
};

export type BuyerGuide = {
  slug: string;
  stage: string;
  title: string;
  summary: string;
  outcome: string;
  readTime: string;
  verified: string;
  facts: string[];
  steps: BuyerGuideStep[];
  sources: { label: string; href: string }[];
};

export const buyerGuides: BuyerGuide[] = [
  {
    slug: "source-listing-and-first-payment",
    stage: "Before ordering",
    title: "Source Listing & First-Payment Checklist",
    summary:
      "Confirm the original marketplace listing, exact variation and first-payment line items before money leaves your account.",
    outcome: "A saved order record you can compare with the warehouse item later.",
    readTime: "5 min checklist",
    verified: "July 31, 2026",
    facts: [
      "LoloBuy acts as a purchasing intermediary; the marketplace seller remains responsible for the listing and domestic fulfilment.",
      "The official buying flow separates product/domestic delivery payment from the later international parcel payment.",
      "A pasted product link can still open a manual shopping-agent form, so the buyer must enter the variation and remarks precisely.",
    ],
    steps: [
      {
        heading: "Save the source before it changes",
        action:
          "Keep the original product URL and a screenshot showing seller, title, selected colour, size, quantity, price and domestic postage.",
        why:
          "Seller pages can change after purchase. A saved source gives you a concrete comparison when the warehouse photos arrive.",
        checks: [
          "The URL opens the intended item rather than a seller home page.",
          "Colour and size are selected on the source page, not only written in a vague remark.",
          "Quantity, accessories and seller measurement notes are visible.",
        ],
      },
      {
        heading: "Treat spreadsheet labels as discovery, not proof",
        action:
          "Use a spreadsheet to find a listing, then recheck the live source and the LoloBuy order form yourself.",
        why:
          "A third-party label cannot guarantee stock, authenticity, seller performance, future price or the exact item LoloBuy will receive.",
        checks: [
          "Do not rely on “verified,” “best batch” or “live stock” without dated evidence.",
          "Recheck the seller and variation immediately before payment.",
          "Keep risky or unclear listings out of a first order.",
        ],
      },
      {
        heading: "Read the first payment line by line",
        action:
          "Separate product price, Chinese domestic delivery, conversion and payment fees before confirming.",
        why:
          "International shipping is a later payment. The first checkout is not the landed cost.",
        checks: [
          "The charged currency and conversion are understood.",
          "Domestic postage is included or clearly shown as pending.",
          "There is budget left for services, international freight, tax or duty and a possible return.",
        ],
      },
      {
        heading: "Watch for an agent confirmation",
        action:
          "Check account messages and email until the order is purchased, especially when the seller changes price or availability.",
        why:
          "An unanswered confirmation can pause the order and reduce the time available to choose an alternative.",
        checks: [
          "Any price difference is accepted or rejected deliberately.",
          "A substitute colour or size is never approved by silence.",
          "Order remarks are specific enough for another person to follow.",
        ],
      },
    ],
    sources: [
      {
        label: "Official: How to purchase on LoloBuy",
        href: "https://www.lolobuy.com/helpCenter/1242296499766165",
      },
      {
        label: "Official: Three things to know before using the shopping-agent service",
        href: "https://www.lolobuy.com/helpCenter/1242296835769402",
      },
    ],
  },
  {
    slug: "warehouse-qc-photo-checklist",
    stage: "Warehouse arrival",
    title: "Warehouse QC Photo Checklist",
    summary:
      "Use warehouse photos to catch visible order mismatches without treating photographs as authentication or a quality guarantee.",
    outcome: "A documented keep, ask-for-more-evidence or return decision.",
    readTime: "7 min checklist",
    verified: "July 31, 2026",
    facts: [
      "Published standard inspection focuses on visible details such as style, quantity, colour, size, model, damage and obvious defects.",
      "Standard photos are evidence of what the camera shows; they do not prove authenticity, materials, internal construction, electronics function or fit.",
      "No-inspection, standard-inspection, sampling and extra-photo outcomes are not equivalent.",
    ],
    steps: [
      {
        heading: "Confirm which service was applied",
        action:
          "Open the warehouse service record before judging the thumbnail and confirm whether standard inspection or another service was used.",
        why:
          "A stored package can have limited or no product inspection. The existence of one image does not prove a full QC process.",
        checks: [
          "Service type is visible in the item record.",
          "The warehouse item number matches the intended order.",
          "Photo count and angles are sufficient for the decision you need to make.",
        ],
      },
      {
        heading: "Compare the order, not your memory",
        action:
          "Place the saved listing beside the warehouse gallery and compare colour, size tag, model, quantity and promised accessories.",
        why:
          "Specific comparisons expose wrong variations more reliably than a general impression of quality.",
        checks: [
          "Ordered and received colour names match.",
          "Size label or measurement evidence matches the order.",
          "All units and visible accessories are present.",
        ],
      },
      {
        heading: "Run a visible-defect pass",
        action:
          "Inspect overall shape, paired-item symmetry, seams, print placement, closures, stains, scratches, crushing and missing parts.",
        why:
          "These are observable issues that warehouse photography can sometimes reveal before international shipping.",
        checks: [
          "No obvious exterior damage is hidden by packaging.",
          "Front, rear, side, label and sole/interior views are present when relevant.",
          "Lighting differences are not mistaken for a confirmed colour defect.",
        ],
      },
      {
        heading: "Request only decision-changing evidence",
        action:
          "Ask for a measured or custom angle when the missing evidence would change keep-versus-return.",
        why:
          "More photos are useful only when they answer a precise question within the available return window.",
        checks: [
          "Measurement instructions name exact start and end points.",
          "Custom-photo requests identify the label, defect or hidden area.",
          "The return deadline is checked before waiting for extra evidence.",
        ],
      },
    ],
    sources: [
      {
        label: "Official: Standard inspection service",
        href: "https://www.lolobuy.com/helpCenter/1242300728672386",
      },
      {
        label: "Official: Scope of inspection",
        href: "https://www.lolobuy.com/helpCenter/1242300746301580",
      },
      {
        label: "Official: Standard photo service",
        href: "https://www.lolobuy.com/helpCenter/1242300722511995",
      },
    ],
  },
  {
    slug: "parcel-and-shipping-cost-checklist",
    stage: "Parcel planning",
    title: "Parcel & Shipping-Cost Checklist",
    summary:
      "Plan from warehouse evidence, route billing and packed dimensions instead of multiplying a seller weight by a community rate.",
    outcome: "A parcel plan with a realistic range rather than a false exact quote.",
    readTime: "6 min checklist",
    verified: "July 31, 2026",
    facts: [
      "The amount shown before packing can be an estimate or deposit; packed weight can create a refund or supplemental charge.",
      "A route may bill actual weight or volumetric weight according to its published rule.",
      "Packaging removal can reduce volume, while reinforcement and protective services can add weight.",
    ],
    steps: [
      {
        heading: "Start with warehouse records",
        action:
          "Record each item’s stored weight, external dimensions, fragility, packaging priority and route restrictions.",
        why:
          "Seller estimates do not describe the final consolidated and packed parcel.",
        checks: [
          "Rigid and bulky items that may set carton size are identified.",
          "Soft goods that can compress are separated from fragile goods.",
          "Battery, liquid, food, branded or other restricted categories are flagged for route review.",
        ],
      },
      {
        heading: "Compare billing methods",
        action:
          "Read the live route card for actual-weight, volumetric-weight, first-weight and incremental billing rules.",
        why:
          "The cheapest rate per kilogram can be more expensive for a large, light carton.",
        checks: [
          "The route’s divisor or volumetric rule is read from the current checkout.",
          "Weight bands and minimum charges are included.",
          "Tax treatment, insurance and destination restrictions are compared separately.",
        ],
      },
      {
        heading: "Choose packaging after the keep decision",
        action:
          "Balance box removal, compression and reinforcement against fragility and return rights.",
        why:
          "Reducing volume can save freight, but irreversible package removal can weaken protection or end return eligibility.",
        checks: [
          "All QC and return questions are closed first.",
          "Retail packaging that matters is distinguished from the domestic express carton.",
          "Added protective material is included in the cost range.",
        ],
      },
      {
        heading: "Keep a margin until final weighing",
        action:
          "Treat the pre-pack price as a planning number and compare it with the final packed weight and dimensions.",
        why:
          "Consolidation and packing change the billable shipment. No static guide can promise a final charge in advance.",
        checks: [
          "The parcel contents match the submitted item list.",
          "Final weight and dimensions are saved.",
          "A refund or extra payment is checked before assuming the original estimate was final.",
        ],
      },
    ],
    sources: [
      {
        label: "Official: Estimated weight and real weight",
        href: "https://www.lolobuy.com/helpCenter/1242300798075086",
      },
      {
        label: "Official: Packaging methods",
        href: "https://www.lolobuy.com/helpCenter/1242300751675537",
      },
      {
        label: "Official: Customs risks",
        href: "https://www.lolobuy.com/helpCenter/1242300933013835",
      },
    ],
  },
  {
    slug: "returns-and-refunds-checklist",
    stage: "Problem resolution",
    title: "Returns & Refunds Deadline Checklist",
    summary:
      "Separate seller-return eligibility, LoloBuy handling, warehouse timing and international parcel after-sales before choosing a remedy.",
    outcome: "A timely request with the evidence and costs needed for a realistic decision.",
    readTime: "6 min checklist",
    verified: "July 31, 2026",
    facts: [
      "Published return terms use a 120-hour warehouse window for certain eligible returns, but seller acceptance and product condition still matter.",
      "Domestic return freight and service charges may apply even when a seller accepts the item.",
      "Product-order returns and international parcel after-sales are separate processes with different evidence.",
    ],
    steps: [
      {
        heading: "Identify the stage of the problem",
        action:
          "Decide whether the item is not yet purchased, with the seller, stored in the warehouse, packed or already shipped internationally.",
        why:
          "Cancellation, seller return and parcel after-sales are not interchangeable remedies.",
        checks: [
          "The current order and parcel status is saved.",
          "No irreversible packing or removal service is requested while a return is considered.",
          "The applicable policy is opened from the live account page.",
        ],
      },
      {
        heading: "Start the clock at warehouse arrival",
        action:
          "Review photos immediately and submit an eligible return request well before 120 hours.",
        why:
          "The storage period can be months, while a return decision can be limited to days.",
        checks: [
          "Warehouse time and time zone are understood.",
          "The return reason names a specific mismatch or visible issue.",
          "Seller-return conditions and excluded categories are checked.",
        ],
      },
      {
        heading: "Calculate the remedy, not only the refund",
        action:
          "Compare expected refund with domestic return freight, service charge, exchange delay and replacement risk.",
        why:
          "An accepted return can still cost money and time. A low-value issue may have a different best outcome than a wrong size or unusable item.",
        checks: [
          "Refund destination and processing status are understood.",
          "Domestic freight and handling deductions are visible.",
          "An exchange is not treated as instant or guaranteed.",
        ],
      },
      {
        heading: "Preserve parcel evidence after dispatch",
        action:
          "Photograph the sealed parcel, exterior damage and contents, and record an opening video when loss or damage is plausible.",
        why:
          "After international dispatch, warehouse records, carrier scans and delivery evidence support a parcel claim.",
        checks: [
          "Parcel number and tracking history are saved.",
          "Damage is documented before packaging is discarded.",
          "The claim describes missing or damaged items precisely.",
        ],
      },
    ],
    sources: [
      {
        label: "Official: Return the product",
        href: "https://www.lolobuy.com/helpCenter/1242296772133891",
      },
      {
        label: "Official: Terms of promised returns",
        href: "https://www.lolobuy.com/helpCenter/1242296939447441",
      },
      {
        label: "Official: Parcel after-sales application",
        href: "https://www.lolobuy.com/helpCenter/1242301393535401",
      },
    ],
  },
  {
    slug: "warehouse-storage-checklist",
    stage: "Storage control",
    title: "Warehouse Storage & Consolidation Checklist",
    summary:
      "Control return deadlines, conflicting storage information, package-removal decisions and parcel groups in one working record.",
    outcome: "A warehouse control sheet with separate return and ship-before dates.",
    readTime: "5 min checklist",
    verified: "July 31, 2026",
    facts: [
      "The dedicated storage article currently states 180 days free storage and describes a reminder after 150 days.",
      "An older official buying guide still says 90 days, so the live warehouse countdown must be treated as the controlling operational evidence.",
      "Storage time is not return time; published return conditions can require action within 120 hours.",
    ],
    steps: [
      {
        heading: "Create two deadlines per item",
        action:
          "Record both the earliest return decision deadline and a conservative ship-before date.",
        why:
          "The official help centre currently contains 180-day and older 90-day storage references, while return timing is much shorter.",
        checks: [
          "The live warehouse countdown is saved.",
          "The return deadline is not copied from the storage deadline.",
          "A reminder email is not used as the only deadline control.",
        ],
      },
      {
        heading: "Resolve QC before consolidation",
        action:
          "Mark each item keep, return or awaiting evidence before selecting a parcel group.",
        why:
          "An unresolved item can be accidentally packed and lose a practical return option.",
        checks: [
          "QC result and open questions are recorded.",
          "Extra-photo requests are complete.",
          "No return candidate is selected for package removal or parcel submission.",
        ],
      },
      {
        heading: "Group items for a reason",
        action:
          "Build parcel groups by route eligibility, volume, fragility, value and urgency rather than item count alone.",
        why:
          "Consolidation can reduce repeated base charges, but it can also create a heavier, bulkier or route-ineligible parcel.",
        checks: [
          "A bulky box is not allowed to dominate soft-goods volume without review.",
          "Restricted items are checked against the intended route.",
          "High-value or fragile items are considered separately.",
        ],
      },
      {
        heading: "Save the warehouse-to-parcel handoff",
        action:
          "Keep the submitted item list, packaging instructions, final photos, weight, dimensions and declared contents.",
        why:
          "These records show what left the warehouse if the carrier or destination stage creates a problem.",
        checks: [
          "Parcel contents match the control sheet.",
          "Final measurements are compared with the estimate.",
          "Tracking and service selections are stored until delivery is complete.",
        ],
      },
    ],
    sources: [
      {
        label: "Official: Free storage period",
        href: "https://www.lolobuy.com/helpCenter/1242300757049499",
      },
      {
        label: "Official: Product weight and warehouse stocking",
        href: "https://www.lolobuy.com/helpCenter/1242300744204423",
      },
      {
        label: "Official: What to do after an item is stored",
        href: "https://www.lolobuy.com/helpCenter/1242296871158912",
      },
    ],
  },
];

export function getBuyerGuide(slug: string) {
  return buyerGuides.find((guide) => guide.slug === slug);
}
