export type EditorialSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  subsections?: {
    heading: string;
    paragraphs: string[];
  }[];
};

export type EditorialEntry = {
  dek: string;
  reviewed: string;
  readingTime: string;
  seoTitle?: string;
  published?: string;
  modified?: string;
  visual?: {
    src: string;
    alt: string;
    caption: string;
    width: number;
    height: number;
  };
  relatedLinks?: {
    label: string;
    url: string;
    note: string;
  }[];
  keyFacts: string[];
  sections: EditorialSection[];
  sources: {
    label: string;
    url: string;
    note: string;
    verifiedFacts: string[];
    buyerAction: string;
    mainUrl: string;
    mainLabel: string;
  }[];
};

const officialSources = {
  home: {
    label: "Pikobuy official homepage",
    url: "https://www.pikobuy.com/home",
    note: "The official homepage describes discovery, agent purchasing, warehouse inspection and international dispatch as separate stages.",
    verifiedFacts: [
      "Pikobuy accepts a product link, image or request and sources from multiple sellers.",
      "Packages are inspected and repackaged at its China warehouse before a shipping option is selected.",
      "This is a service workflow—not proof that a spreadsheet price, variant or link is still current.",
    ],
    buyerAction: "Use our live directory to choose a current product first; then verify the exact option before starting an agent order.",
    mainUrl: "https://findspreadsheet.com/AllProducts/",
    mainLabel: "Browse all current finds",
  },
  about: {
    label: "Pikobuy About page",
    url: "https://www.pikobuy.com/about",
    note: "The About page defines the service scope and the Chinese marketplaces named by Pikobuy.",
    verifiedFacts: [
      "The page names Taobao, 1688 and Weidian and says multiple currencies and payment methods are supported.",
      "It describes warehouse quality checks and a choice of carriers and shipping routes.",
      "It does not publish a universal international rate, guaranteed delivery time or professional authentication promise.",
    ],
    buyerAction: "Treat Pikobuy as the transaction and forwarding service; use FindsSpreadsheet as the independent product-research layer.",
    mainUrl: "https://findspreadsheet.com/Agents/",
    mainLabel: "Compare agent-platform resources",
  },
  guide: {
    label: "Pikobuy Beginner's Guide",
    url: "https://www.pikobuy.com/guide",
    note: "The official guide publishes a six-step process with two distinct payment moments.",
    verifiedFacts: [
      "Confirm style, color and size, then paste the product link or keywords into Pikobuy.",
      "The first payment covers the submitted product order; international shipping is paid later after warehouse inspection.",
      "The guide says tracking information becomes available within three days after dispatch—not that delivery takes three days.",
    ],
    buyerAction: "Save the exact seller, product URL and selected option before paying so the warehouse arrival can be checked against the order.",
    mainUrl: "https://findspreadsheet.com/AllProducts/",
    mainLabel: "Choose a product to research",
  },
  estimator: {
    label: "Pikobuy Shipping Cost Estimation",
    url: "https://www.pikobuy.com/shipping-cost",
    note: "The calculator itself shows which inputs are needed before any shipping figure is meaningful.",
    verifiedFacts: [
      "Required context includes destination country or region, product type and parcel weight.",
      "Length, width and height are separate inputs, so bulky light parcels cannot be judged by kilograms alone.",
      "A pre-order estimate is planning evidence; the packed warehouse parcel supplies the real measurements.",
    ],
    buyerAction: "Compare product price and expected shipping separately, then replace guesses with measured warehouse weight and dimensions.",
    mainUrl: "https://findspreadsheet.com/AllProducts/",
    mainLabel: "Browse products by size and type",
  },
  shipping: {
    label: "Pikobuy Shipping Policy",
    url: "https://www.pikobuy.com/protocol/shipping",
    note: "The transportation policy explains inspection limits, transfer handling and risks outside the warehouse.",
    verifiedFacts: [
      "Transferred goods are unpacked for inspection and warehouse photos are supplied for confirmation.",
      "Special or professional products do not receive professional inspection; detailed photos may need to be purchased.",
      "Parcels use third-party logistics, and customs, loss, damage, confiscation and peak delays remain cross-border risks.",
    ],
    buyerAction: "Use QC photos for visible condition only, then compare eligible routes, restrictions and protection before paying international shipping.",
    mainUrl: "https://findspreadsheet.com/AllProducts/",
    mainLabel: "Open the live product directory",
  },
  returns: {
    label: "Pikobuy Returns & Exchanges",
    url: "https://www.pikobuy.com/protocol/returns",
    note: "The return page sets a precise request window and explains when a return is still conditional.",
    verifiedFacts: [
      "The request window is 120 hours after the order becomes “Warehoused,” counted from the next hour.",
      "Eligibility still depends on seller support, seller agreement, marketable condition and intact packaging, tags or seals where required.",
      "An unconditional return can include delivery to the warehouse, return delivery to the seller and a 5 RMB service fee.",
    ],
    buyerAction: "Review warehouse photos immediately and avoid removing tags, seals or packaging before deciding whether the item should be returned.",
    mainUrl: "https://findspreadsheet.com/AllProducts/",
    mainLabel: "Research a current listing",
  },
  terms: {
    label: "Pikobuy Terms of Service",
    url: "https://www.pikobuy.com/protocol/terms",
    note: "The current terms define order acceptance, payment failure and possible cross-border charges outside the product price.",
    verifiedFacts: [
      "An order is an offer that Pikobuy or a participating merchant may accept or decline.",
      "An unsuccessful payment means the order will not be processed.",
      "Duties, taxes, brokerage fees or other cross-border costs can remain the buyer's responsibility.",
    ],
    buyerAction: "Treat the checkout total as one stage of the budget and review destination charges separately before dispatch.",
    mainUrl: "https://findspreadsheet.com/AllProducts/",
    mainLabel: "Choose a current product",
  },
  userAgreement: {
    label: "Pikobuy User Agreement",
    url: "https://www.pikobuy.com/protocol/user",
    note: "The official agreement explains what can enter the product-order payment and what is added when international freight is confirmed.",
    verifiedFacts: [
      "The purchasing-stage amount can include the product purchase price, seller-to-warehouse logistics and a service fee shown during confirmation.",
      "The agreement states that international forwarding requires payment to the chosen logistics provider plus Pikobuy's platform service fee.",
      "As reviewed on August 2, 2026, the published freight platform service fee is 8% of freight, with possible settlement differences from exchange-rate timing.",
    ],
    buyerAction: "Read the current payment breakdown before confirming because the agreement can be updated and the live amount controls the transaction.",
    mainUrl: "https://findspreadsheet.com/AllProducts/",
    mainLabel: "Build a product shortlist",
  },
  contact: {
    label: "Pikobuy Contact page",
    url: "https://www.pikobuy.com/contact",
    note: "The official contact page identifies the recommended support path and a published support email.",
    verifiedFacts: [
      "The page marks Submit a Ticket as the recommended contact method.",
      "It lists Support@pikobuy.com as the customer service email.",
      "A useful tracking request should identify the relevant parcel and the last confirmed event.",
    ],
    buyerAction: "Keep the parcel number, dispatch time, route and tracking evidence together before submitting one focused support ticket.",
    mainUrl: "https://findspreadsheet.com/AllProducts/",
    mainLabel: "Return to the live directory",
  },
  privacy: {
    label: "Pikobuy Privacy Policy",
    url: "https://www.pikobuy.com/protocol/privacy",
    note: "The privacy page describes the transaction and payment information used to process orders and related services.",
    verifiedFacts: [
      "Pikobuy says it collects order details, payment amount and time, and the payment channel.",
      "The policy says this information is used for order processing, payments, logistics and after-sales support.",
      "Users remain responsible for protecting their account credentials.",
    ],
    buyerAction: "Use the official checkout, keep account credentials private and retain the order and parcel payment records for reconciliation.",
    mainUrl: "https://findspreadsheet.com/AllProducts/",
    mainLabel: "Return to the live directory",
  },
};

const researchStandard: EditorialSection = {
  heading: "How we separate fact from advice",
  paragraphs: [
    "The facts in this article come from Pikobuy's public pages reviewed on July 29, 2026. When the official site states a process or rule, we identify it as an official fact. When we suggest a way to compare a listing, read a warehouse photo or plan a parcel, that is editorial guidance from Pikobuyy—not a promise from Pikobuy. This distinction matters because marketplace listings, shipping routes, return eligibility and prices can change after an article is published.",
    "Pikobuy does not publicly disclose reliable country-by-country user counts, a universal delivery time or one fixed international shipping rate. We therefore do not invent those numbers. Use the live Pikobuy estimator and the current order or parcel page for a real transaction. A spreadsheet is useful for discovery and comparison; the official platform remains the final source for order status, eligibility, fees and available routes.",
  ],
};

export const articleEntries: Record<string, EditorialEntry> = {
  "what-is-a-pikobuy-spreadsheet": {
    dek: "A fact-checked explanation of what a Pikobuy spreadsheet can organize, where the official Pikobuy service begins, and how to avoid confusing a research directory with the shopping agent itself.",
    reviewed: "Fact-checked Jul 29, 2026",
    readingTime: "12 min read",
    keyFacts: [
      "Pikobuy describes itself as a China shopping and forwarding agent for global shoppers.",
      "Its public pages name Taobao, Tmall, 1688, Weidian and Yupoo in the discovery workflow.",
      "A spreadsheet is an independent discovery layer; it is not Pikobuy's warehouse, checkout or shipping service.",
      "Prices, variants, return eligibility and shipping routes must be confirmed on current official pages.",
    ],
    sections: [
      {
        heading: "The short answer",
        paragraphs: [
          "A Pikobuy spreadsheet is an organized research directory for product links. It helps a shopper move from a vague idea—such as “black running shoes” or “heavyweight hoodie”—to a smaller set of listings that are worth opening. A useful spreadsheet adds structure that a raw list lacks: category, product title, source link, image, listed price, notes about what to inspect and, ideally, the date a link was last reviewed.",
          "The spreadsheet is not the shopping agent. Pikobuy's official site describes a service that helps global shoppers find items from Chinese marketplaces, place an order, receive the goods at a China warehouse, inspect them and choose an international shipping route. Pikobuyy is independent and sits before that workflow. It helps with discovery and comparison, then points to a current product or category page. It does not collect payment, receive parcels, produce warehouse photos or promise delivery.",
        ],
      },
      {
        heading: "What Pikobuy officially says it does",
        paragraphs: [
          "Pikobuy's About page says the platform provides access to Taobao, 1688 and Weidian, supports multiple currencies and payment methods, performs warehouse quality checks and offers a range of shipping carriers and routes. Its Beginner's Guide adds Tmall and Yupoo to the product-selection step. The official homepage describes a sequence of discovery, ordering, warehouse inspection and worldwide shipping.",
          "That sequence is the practical context behind every spreadsheet row. A product link is not an order and a product image is not a warehouse inspection. The link only gives Pikobuy a starting point. According to the official guide, the shopper still needs to confirm style, color and size, paste a link or keywords into Pikobuy, choose the actual options, submit the order and complete the first payment. The final purchasing price is based on the actual purchase, and the guide says an out-of-stock order is refunded.",
        ],
      },
      {
        heading: "Why a structured directory is more useful than a giant sheet",
        paragraphs: [
          "Large spreadsheets often fail for a simple reason: they optimize for quantity rather than decisions. Thousands of links may look impressive, but they create work for the visitor. The shopper still has to determine which rows are current, which product type is relevant, whether a price refers to the selected variant and what to inspect later. A smaller, well-labelled directory can be more valuable because it reduces uncertainty at each step.",
          "For discovery, categories should reflect how people compare products. Shoes need silhouette, outsole, heel and sizing checks. Hoodies need measurements, fabric weight, print or embroidery placement and ribbing. Jackets need fill, lining, closure and overall proportion. Electronics require model, plug, voltage, battery and transport restrictions. These notes do not certify quality; they tell the reader what evidence to look for after the item arrives at the warehouse.",
        ],
      },
      {
        heading: "The role of the product page",
        paragraphs: [
          "A spreadsheet card should never replace the current product page. Marketplace sellers can change images, options, prices and availability without warning. A row that was accurate last week may point to a different selection today. That is why Pikobuyy product cards use a direct source path and explain that the destination page is the final source for the item.",
          "Before saving a find, compare the title with the available variants. Check whether the displayed price belongs to the default option or to the option you actually want. Look for seller measurements rather than relying on a familiar letter size. Save the seller or store information when useful; Pikobuy's official beginner guide specifically recommends saving product or store information to make ordering easier. If the link cannot be found, the same guide directs users to customer service for help.",
        ],
      },
      {
        heading: "Where quality control enters the process",
        paragraphs: [
          "Pikobuy's official guide places warehouse inspection after the order and the first payment. Once the product reaches the warehouse, the guide says it is inspected, checked in, photographed and reviewed for defects. The homepage similarly says packages are inspected and repackaged at the China warehouse. This is much stronger evidence than a spreadsheet thumbnail, but it still has limits.",
          "Warehouse photos show visible condition and selected details; they cannot prove every material claim, internal construction feature or long-term performance. Pikobuy's shipping policy is explicit that special and professional products cannot receive professional inspection. It also tells transfer customers to use inspection photos or purchase additional detailed photos. The sensible approach is to treat QC as a visual checkpoint: confirm the ordered variant, obvious damage, measurements when shown and category-specific details before deciding whether to ship.",
        ],
      },
      {
        heading: "The cost a spreadsheet cannot calculate",
        paragraphs: [
          "A low product price is not the final landed cost. Pikobuy's shipping estimator asks for destination, product type, weight, length, width and height. Those inputs reveal why a universal “shipping per kilogram” claim is misleading: route eligibility and the billable basis can change with the parcel, and bulky packaging can matter even when the product itself is light.",
          "Use a spreadsheet price only to compare products. Keep a separate planning column for domestic delivery to the warehouse, optional services, return costs and international shipping. Do not hard-code one route or delivery promise into a product card. The official guide says routes differ in delivery time and billing method. The live estimator and the measured parcel provide the useful answer; an article can only explain what to prepare.",
        ],
      },
      {
        heading: "A practical workflow for using the spreadsheet",
        paragraphs: [
          "Start with one category and a real need. Open two or three plausible listings, not twenty. Record the exact variant, seller measurements and current CNY price. Eliminate options that do not show enough information. Then open the chosen source through Pikobuy and follow the official order flow. When warehouse photos arrive, compare them with the listing and your own checklist rather than with memory.",
          "If the item is acceptable, build the parcel only after checking route choices and packaging. If it is not acceptable, act quickly. Pikobuy's returns page says an eligible return request generally needs to be submitted within five days after the order becomes “Warehoused,” calculated as 120 hours from the next hour after that status. Eligibility still depends on seller rules, the product remaining marketable and packaging conditions. The existence of a return page is not a guarantee that every product can be returned.",
        ],
        bullets: [
          "Discovery: category, image, current link and price context.",
          "Verification: exact variant, seller measurements and current availability.",
          "Warehouse review: visible condition, ordered option and category-specific QC.",
          "Parcel planning: destination, type, measured weight, dimensions and route.",
          "Final decision: use the current official dashboard, not an old spreadsheet note.",
        ],
      },
      {
        heading: "What a trustworthy spreadsheet should disclose",
        paragraphs: [
          "A directory earns trust through limits as much as through links. Every product card should say whether the price is a live value, a dated reference or a currency conversion. It should use the actual destination image rather than an unrelated promotional picture. It should also distinguish a seller image from a warehouse QC image. Those labels prevent a visitor from believing that an item has already been inspected when only the marketplace listing has been reviewed.",
          "The same rule applies to freshness. “Updated regularly” is too vague on its own. A useful page records the date a link or policy source was checked and removes claims that cannot be reproduced. If an item disappears, redirect the visitor to a relevant category rather than silently replacing the destination with a different product. If the official platform does not publish user numbers, average delivery performance or a fixed fee, the directory should say that clearly. Precision without a verifiable source is not useful information.",
        ],
      },
      researchStandard,
    ],
    sources: [officialSources.home, officialSources.about, officialSources.guide, officialSources.estimator, officialSources.shipping, officialSources.returns],
  },
  "how-to-use-pikobuy-spreadsheet-2026": {
    dek: "A practical, source-backed workflow for turning a product directory into a shortlist, placing the correct variant, reviewing warehouse evidence and planning the parcel without guessing.",
    reviewed: "Fact-checked Jul 29, 2026",
    readingTime: "14 min read",
    keyFacts: [
      "Pikobuy's official beginner flow has six stages: select, search, submit and pay, inspect, pay shipping, then wait for the parcel.",
      "The official guide says the final price is based on actual purchasing and out-of-stock orders are refunded.",
      "Warehouse photos are a checkpoint, not proof of every hidden material or performance claim.",
      "The live parcel quote depends on destination, product type, weight and dimensions.",
    ],
    sections: [
      {
        heading: "Begin with a decision, not a keyword",
        paragraphs: [
          "The fastest way to waste time in a product spreadsheet is to search without criteria. “Shoes” can return hundreds of results, but a usable brief is narrower: everyday low-top shoes, dark color, a stated insole measurement and a target product budget. Write the decision before opening rows. This keeps an attractive thumbnail from becoming the only reason you save a listing.",
          "Choose three non-negotiables and two preferences. Non-negotiables might be size evidence, a particular color and a maximum product price. Preferences might be packaging or material. The spreadsheet can then do its real job: filter out obvious mismatches. It should not make the final quality claim because that evidence appears later, after the seller dispatches the selected item to the warehouse.",
        ],
      },
      {
        heading: "Step 1: select the product and preserve the source",
        paragraphs: [
          "Pikobuy's official Beginner's Guide begins with product selection on Taobao, Tmall, 1688, Weidian or Yupoo. It tells users to confirm style, color and size, and recommends saving the product or store information. This is practical advice because marketplace pages can change. Save the exact URL and the option you intend to buy; a screenshot of the option and size table can also help you compare the warehouse arrival later.",
          "Do not treat a translated title as a full specification. Open the option selectors. Check whether a low displayed price belongs to an accessory, deposit or different variant. Read seller measurements and note the unit. For apparel, compare garment measurements with a piece you already own. For shoes, look for foot-length or insole guidance rather than assuming an EU or US size maps perfectly.",
        ],
      },
      {
        heading: "Step 2: search through Pikobuy",
        paragraphs: [
          "The official guide says users can paste a product link or keywords into the Pikobuy search box. A direct link is usually the cleaner route because it preserves the source you already reviewed. Keyword search is useful when a link cannot be parsed or when you are still exploring, but it may return several similar items. Confirm that the result matches the seller, option and price you intended.",
          "If Pikobuy cannot find the item, its guide says to contact 24-hour customer service. That statement does not mean every product can be purchased or shipped. Marketplace availability, seller rules, prohibited items and route restrictions still matter. Use customer support to clarify the current transaction; do not infer approval from an old spreadsheet row.",
        ],
      },
      {
        heading: "Step 3: choose variants and complete the first payment",
        paragraphs: [
          "Pikobuy's third official step is “Submit And Pay.” The shopper selects color, size and quantity, submits the order and completes the first payment. The guide adds two important limits: final price is based on actual purchasing, and an out-of-stock item is refunded. These details explain why a spreadsheet price should be labelled as a listed or reference price rather than a guaranteed checkout amount.",
          "Before paying, compare the order summary with your saved source. One wrong size selection can be expensive to correct after domestic dispatch. Review quantity, color, model and any seller notes. Separate the product payment from international shipping in your budget. The official workflow places international shipping later, after the warehouse stage, so a cheap product does not tell you the final total.",
        ],
      },
      {
        heading: "Step 4: read the warehouse inspection correctly",
        paragraphs: [
          "After arrival, Pikobuy says it inspects the product, checks it into the warehouse, takes photos and looks for defects. Start with identity: is this the ordered color, size and quantity? Then check visible condition and the features that matter for the category. Shoes need both sides, the heel, toe, outsole and size evidence. Apparel needs front and back alignment, labels, seams and measurements. Bags need hardware, straps, lining and scale.",
          "QC photography has boundaries. Lighting can shift color. A flat image cannot prove comfort, composition or durability. Pikobuy's shipping policy says special and professional products cannot receive professional inspection, and it mentions purchasing additional detailed photos. Request a useful extra photo when one missing view determines your decision—for example, a measurement tape across a garment or the model label on an electronic item. Random close-ups add cost without necessarily reducing uncertainty.",
        ],
      },
      {
        heading: "Use the return window before it closes",
        paragraphs: [
          "If the warehouse evidence shows a wrong or unacceptable item, check return eligibility immediately. Pikobuy's public returns policy describes a “5-Day Return Guarantee” tied to seller and marketplace rules. It says a request can be made within five days after the status becomes “Warehoused,” beginning from the next hour and totalling 120 hours. The item must remain in a marketable state and the seller must offer the relevant guarantee.",
          "The policy also lists categories and conditions that can be ineligible, including custom goods, second-hand products, undergarments and goods whose required seals or packaging have been opened. For an unconditional return, the published formula includes shipping to the seller, shipping from the seller and a 5 RMB service fee. Seller-caused wrong items or quality issues may be treated differently, but the current case and seller decision still control. Do not remove tags or packaging merely to obtain a better photo when that could affect eligibility.",
        ],
      },
      {
        heading: "Step 5: estimate and pay international shipping",
        paragraphs: [
          "Pikobuy's fifth official step is to choose a logistics route, submit the parcel and pay international shipping. The guide says routes differ in delivery time and billing method. The official estimator asks for destination, product type, weight and dimensions. Together, those facts show why a single shipping number copied into an SEO article is not useful for a real order.",
          "Wait for warehouse measurements when possible. Compare routes by billable basis, restrictions, tracking, insurance options and estimated time—not only the headline price. Consider packaging changes deliberately. Minimal packaging may reduce dimensions, while reinforcement may protect a fragile item but add material. Pikobuy's guide says users can request minimal or reinforced packaging at the warehouse inspection stage, so packaging is a decision variable rather than an invisible constant.",
        ],
      },
      {
        heading: "Step 6: tracking and realistic expectations",
        paragraphs: [
          "After dispatch, the official guide says logistics information will be available within three days. That is a statement about initial tracking availability, not a universal delivery promise. Cross-border tracking can pause between export, airline movement, customs and local handoff. Pikobuy's shipping policy says parcels are carried by third-party logistics providers and names risks such as customs action, damage, loss and peak-period delays.",
          "Keep the parcel number and route name. Use the Pikobuy parcel page first, then the carrier once a valid tracking number is active. A lack of movement for a short period does not by itself prove a lost parcel, but a status outside the route's current guidance should be raised through official support. Spreadsheet research ends once the order begins; transaction-specific decisions belong in the official account and support channel.",
        ],
      },
      {
        heading: "A compact checklist for every order",
        paragraphs: [
          "A repeatable process is more valuable than a lucky find. Keep a simple record of source URL, intended variant, seller measurement, listed CNY price, order number, warehouse status, QC decision and parcel route. This is enough to trace what changed without turning the spreadsheet into a second order-management system.",
        ],
        bullets: [
          "Before order: source, seller, exact variant, measurements and current price.",
          "At payment: quantity, options, domestic-delivery terms and first-payment total.",
          "At warehouse: identity, visible defects, measurements and missing evidence.",
          "Before parcel: return deadline, packaging choice, measured size and route restrictions.",
          "After dispatch: parcel number, route, tracking activation and official support record.",
        ],
      },
      researchStandard,
    ],
    sources: [officialSources.guide, officialSources.estimator, officialSources.shipping, officialSources.returns, officialSources.about],
  },
  "pikobuy-qc-photo-guide": {
    dek: "A category-by-category way to read Pikobuy warehouse photos, understand what inspection can and cannot prove, and act within the current return rules.",
    reviewed: "Fact-checked Jul 29, 2026",
    readingTime: "13 min read",
    keyFacts: [
      "Pikobuy says warehouse staff inspect, check in and photograph items after arrival.",
      "Its shipping policy says special and professional products do not receive professional inspection.",
      "Additional detailed photos may be available, so ask for a decision-changing view rather than random close-ups.",
      "Return eligibility can depend on seller rules, packaging and a five-day warehouse request window.",
    ],
    sections: [
      {
        heading: "QC is a visual checkpoint, not a certificate",
        paragraphs: [
          "Pikobuy's Beginner's Guide says that after a product arrives at the warehouse, staff inspect it, check it in, take photos and look for defects. The official homepage also describes inspection and repackaging at the China warehouse. These images are valuable because they show the actual received unit before international shipping. They are not, however, a laboratory report, an authenticity opinion or a guarantee of hidden construction.",
          "The platform's shipping policy makes that boundary explicit: special and professional products cannot receive professional inspection. It tells users to check inspection photos or purchase additional detailed photos. Read QC accordingly. First confirm identity and visible condition. Then inspect category-specific details. Do not claim that a photograph proves fiber content, electronics safety, waterproofing, battery health or long-term durability.",
        ],
      },
      {
        heading: "Start with the order, not the reference photo",
        paragraphs: [
          "Before judging quality, verify that the warehouse item matches what you ordered. Compare color, size, model, quantity and obvious accessories against the saved order. A perfect-looking item in the wrong size is still a failed order. Keep a screenshot of the chosen option and seller size table from the day you paid; live listings can change and memory is unreliable.",
          "Check the warehouse status and photo set as soon as they appear. If you need to return an eligible item, time matters. Pikobuy's published returns page says requests generally must be made within five days after the order becomes “Warehoused,” calculated as 120 hours beginning from the next hour. Eligibility also depends on seller rules and the item remaining marketable.",
        ],
      },
      {
        heading: "Shoes: compare structure before tiny details",
        paragraphs: [
          "For shoes, begin with the pair as a whole. Compare left and right height, toe shape, side profile and heel position. Then inspect panel alignment, stitching lines, edge finishing and outsole pattern. A close-up logo means little if the overall silhouette is visibly inconsistent. Request a straight rear view when heel symmetry is important and a size-label or insole measurement when fit is uncertain.",
          "Do not remove anti-theft clasps or damage-protection stickers simply to improve a view. Pikobuy's returns rules list special standards for new sneakers: required clasps and anti-damage stickers must remain uncut, present and functional. Protecting return eligibility is more important than obtaining a cosmetic photograph that does not change the decision.",
        ],
      },
      {
        heading: "Apparel: measurements beat familiar size letters",
        paragraphs: [
          "For T-shirts, hoodies, jackets and trousers, confirm the size tag but do not stop there. Compare chest width, length, shoulder, sleeve and waist measurements with a garment you own. Look at the full front and back before zooming into print or embroidery. Check whether large graphics sit level, whether side seams twist and whether pockets or zippers align.",
          "Warehouse lighting may alter color, especially dark green, navy, beige and washed finishes. Compare several photos rather than treating one frame as exact color calibration. A photo can show texture, but it cannot prove the seller's fabric composition or weight claim unless that evidence is independently measured. If fabric weight is critical, ask official support what evidence can actually be provided before assuming.",
        ],
      },
      {
        heading: "Bags and accessories: inspect function points",
        paragraphs: [
          "For bags, inspect the full shape, handles, strap attachment, zip path, corners, edge paint, lining and hardware. Ask for a scale reference or measurements when size is unclear. Promotional photography often makes small bags appear larger. For belts and eyewear, verify the selected dimensions and look for obvious scratches, loose fittings or uneven finishing.",
          "QC photos can show whether included accessories arrived, but they do not prove every metal or material claim. Avoid turning a visible stamp into an authenticity conclusion. The useful question is narrower: did the ordered model arrive in visibly acceptable condition with the stated pieces? Keep editorial descriptions factual and leave brand authentication to qualified services.",
        ],
      },
      {
        heading: "Electronics: model and condition, not professional testing",
        paragraphs: [
          "Electronics need especially careful language. Verify model number, plug type, voltage information, visible ports and included accessories. Look for screen or casing damage and confirm sealed packaging when the return rule requires it. Do not infer battery capacity, electrical safety or internal component quality from a warehouse photo.",
          "Pikobuy's returns rules describe special packaging and condition standards for digital products, cameras, appliances and electronic components. Examples include undamaged permits or seals, limits on camera shutter use and no installation or welding for certain goods. Route restrictions for batteries or electronics may also affect shipping. Confirm the current product type and eligible routes through the official estimator or account before ordering.",
        ],
      },
      {
        heading: "How to request a useful extra photo",
        paragraphs: [
          "An extra photo should answer one decision. “More photos please” often produces another angle that adds little. Ask for a tape measurement across the chest, a straight heel view, a close-up of a model label, the underside of a bag, or all included accessories in one frame. State the feature and the angle.",
          "Before requesting packaging to be opened, tags removed or seals broken, check whether doing so could affect a return. Pikobuy's published policy lists several categories where original seals or packaging matter. When uncertain, ask official support in the live order rather than relying on a generic guide. The return policy and seller response for that item control the outcome.",
        ],
      },
      {
        heading: "Decision framework: keep, clarify or return",
        paragraphs: [
          "Use three outcomes. Keep when the ordered identity is correct, visible condition is acceptable and no important evidence is missing. Clarify when one specific view or measurement could resolve the decision. Consider a return when the wrong option arrived, there is visible damage or a material mismatch is supported by the evidence. Record the reason factually and submit through the current order page.",
          "An unconditional return may carry costs. Pikobuy's published formula includes shipping to the seller, shipping from the seller and a 5 RMB service fee, even where the first dispatch appeared free. Seller-caused wrong items or quality issues can be treated differently, but the official page says the actual seller agreement and circumstances matter. A spreadsheet should flag this possibility, not promise a free return.",
        ],
      },
      {
        heading: "Common QC mistakes that create false confidence",
        paragraphs: [
          "The first mistake is zooming into logos before confirming the whole item. Identity, size and overall shape carry more decision value than one sharp close-up. The second is comparing warehouse lighting with a heavily edited seller photo as if both were color-calibrated. Use several frames and look for consistency. The third is treating the absence of a visible defect as proof of invisible quality. A photograph cannot establish smell, comfort, internal wiring, material composition or durability.",
          "Another mistake is waiting because the problem feels small. A wrong tag, missing accessory or unclear model may be easy to resolve with one targeted request, but the published return window continues to run. Finally, do not request destructive handling casually. Removing seals, tags or protective pieces can affect marketable condition under the current return policy. Ask whether the missing evidence would genuinely change the decision, then request the least invasive view that answers it.",
        ],
      },
      researchStandard,
    ],
    sources: [officialSources.guide, officialSources.shipping, officialSources.returns, officialSources.home],
  },
  "pikobuy-shipping-cost": {
    dek: "A fact-based explanation of the variables behind Pikobuy shipping quotes, why product price is not landed cost, and how to compare routes without inventing a universal rate.",
    reviewed: "Fact-checked Jul 29, 2026",
    readingTime: "13 min read",
    keyFacts: [
      "Pikobuy's estimator requires destination, product type, weight, length, width and height.",
      "The beginner guide says shipping routes differ in delivery time and billing method.",
      "The shipping policy says third-party logistics and customs create unavoidable cross-border risks.",
      "The official site does not publish one universal rate or delivery time for every country and parcel.",
    ],
    sections: [
      {
        heading: "Why there is no honest one-number answer",
        paragraphs: [
          "People searching “Pikobuy shipping cost” often want a price per kilogram. Pikobuy's own estimator shows why that question is incomplete. It asks where the parcel will go, what type of product it contains, its weight, and its length, width and height. Change any of those fields and the eligible routes or quote can change. A rate copied from someone else's parcel is context, not a forecast.",
          "The product price is only the first layer. A realistic plan separates the seller price, domestic delivery to the China warehouse, optional warehouse services or packaging, possible return costs and international shipping. Taxes, customs treatment or last-mile charges may also depend on destination and route. Pikobuyy does not publish a single landed-cost promise because the official platform does not provide one universal answer.",
        ],
      },
      {
        heading: "The six inputs that matter first",
        paragraphs: [
          "Destination determines which logistics lines are available and which local conditions apply. Product type matters because batteries, liquids, cosmetics, food, branded goods or other restricted categories may have fewer routes. Actual weight is the scale measurement. Length, width and height capture bulk. Together, dimensions can produce a billable volume that matters even for a light parcel.",
          "This is why shoes shipped with boxes, padded jackets and rigid packaging can cost more than a simple product-weight calculation suggests. Do not remove protective packaging automatically to reduce cost; decide based on fragility, return status and the value of the item. Pikobuy's Beginner's Guide mentions minimal and reinforced packaging requests, indicating that packaging can be adjusted, but the right choice depends on the parcel.",
        ],
      },
      {
        heading: "Estimate before ordering, quote after warehousing",
        paragraphs: [
          "Use the official estimator early to compare scenarios. Enter a plausible destination, product type, weight and dimensions. The result can show whether a category is likely to fit your budget. It cannot know the final packed parcel before the warehouse measures it. Treat the pre-order output as a planning range rather than a bill.",
          "After all items arrive, review warehouse measurements and create the parcel. Compare the available lines at that moment. The official guide says routes differ in delivery time and billing method. Read the route details, restrictions and insurance options. A slightly higher quote may be worthwhile for a fragile or time-sensitive parcel, while a slower economy route may fit a low-value, non-urgent order.",
        ],
      },
      {
        heading: "Actual weight versus parcel volume",
        paragraphs: [
          "Actual weight is straightforward: what the packed parcel weighs on a scale. Dimensional or volumetric billing reflects the space a parcel occupies. Carriers use their own divisor or billing rules, so this article does not invent one formula for all Pikobuy routes. The important point is that a large light box can be billed differently from a compact parcel of the same actual weight.",
          "To reduce avoidable volume, remove unnecessary retail boxes only when protection, resale value and return conditions allow it. Fold soft goods efficiently. Consolidation can reduce repeated outer packaging, but a larger combined parcel can also cross route or size thresholds. Compare the quote with and without a packaging change when the official workflow permits rehearsal or customer support can clarify.",
        ],
      },
      {
        heading: "Product type and route restrictions",
        paragraphs: [
          "A route available for ordinary clothing may not accept batteries, liquids, magnetic items, food or other controlled products. Select the product type accurately in the estimator. Misclassifying an item to reveal a cheaper line does not make that line valid and can lead to delay, rejection or risk later.",
          "Pikobuy's shipping policy says parcels are carried by third-party logistics providers and that customs policies and uncontrollable cross-border factors can create confiscation, damage, loss or peak-period delays. This is a sober reminder: route selection is a risk decision as well as a price comparison. Read current restrictions and insurance terms before paying.",
        ],
      },
      {
        heading: "Delivery estimates and tracking",
        paragraphs: [
          "Pikobuy's guide says logistics information will be available within three days after dispatch. This refers to tracking becoming available; it is not a promise that the parcel will arrive in three days. Delivery estimates depend on route, export processing, flight capacity, customs and local handoff. Peak periods can lengthen pauses.",
          "Save the parcel number and exact route name. Check the Pikobuy parcel page until carrier tracking activates, then use the carrier's official tracking where available. Judge progress against the route's current estimate, not a social-media post from another country. If the shipment exceeds current guidance, contact official support with the parcel number and status history.",
        ],
      },
      {
        heading: "Returns can become part of the shipping budget",
        paragraphs: [
          "Shipping planning begins before international dispatch because an unwanted warehouse item may need domestic return shipping. Pikobuy's returns page says an unconditional return can include the shipping cost to the seller, the shipping cost from the seller and a 5 RMB service fee. Even an item advertised with free seller shipping may require repayment of the first dispatch cost under that policy.",
          "That does not mean every return has the same cost. Seller-caused wrong items or confirmed quality problems may be allocated differently, and the seller's decision and current case control. The practical lesson is to keep a small contingency and inspect warehouse photos promptly. Missing the return window can leave international shipping—or abandonment—as the remaining choices.",
        ],
      },
      {
        heading: "A shipping comparison that produces a useful answer",
        paragraphs: [
          "Build a small comparison table for the live routes: quote, billable weight, delivery estimate, product restrictions, tracking, insurance or compensation terms and packaging assumptions. Do not rank solely by price. Cross out any route that does not accept the actual product type. Then choose the trade-off that fits the order value and urgency.",
        ],
        bullets: [
          "Use the live destination and correct product type.",
          "Replace guessed weight and dimensions with warehouse measurements.",
          "Check whether packaging changes alter protection or eligibility.",
          "Read the route's current billing, restriction and risk information.",
          "Keep the official quote and parcel page as the final source.",
        ],
      },
      {
        heading: "Worked planning example without a fake quote",
        paragraphs: [
          "Suppose a shopper is comparing a pair of shoes and a hoodie. The honest calculation does not begin with an invented dollar total. First record the product prices and any domestic seller delivery. Next, estimate the unboxed and boxed dimensions separately because the shoe box may change parcel volume. Select the actual destination and correct product types in Pikobuy's estimator, then compare the routes it currently returns. If the items later arrive at different weights or sizes, replace the estimate with warehouse measurements.",
          "At the parcel stage, compare two scenarios: protective packaging preserved, and unnecessary outer packaging reduced. Note which scenario changes the billable basis and which introduces damage risk. Add optional service or insurance costs shown in the live workflow. The result is a dated decision for that parcel—not a reusable promise for every shopper. Publishing the inputs and method is more useful than publishing a dramatic low rate that readers cannot reproduce.",
        ],
      },
      researchStandard,
    ],
    sources: [officialSources.estimator, officialSources.guide, officialSources.shipping, officialSources.returns],
  },
  "pikobuy-payment-guide": {
    dek: "Understand Pikobuy payment as two separate decisions: paying for the product order first, then confirming international shipping after warehouse inspection and parcel measurements.",
    reviewed: "Fact-checked Aug 2, 2026",
    readingTime: "13 min read",
    seoTitle: "Pikobuy Payment Guide: Two Checkout Stages",
    published: "2026-08-02",
    modified: "2026-08-06",
    visual: {
      src: "/pikobuy-two-stage-payment-flow.svg",
      alt: "Diagram of the Pikobuy two-stage payment flow from product order through warehouse inspection to international shipping",
      caption: "Original Pikobuyy diagram based on Pikobuy's public Beginner's Guide. It explains the sequence, not a guaranteed price; verify every amount in the current order and parcel pages.",
      width: 1200,
      height: 630,
    },
    relatedLinks: [
      {
        label: "Pikobuy Spreadsheet 2026",
        url: "/pikobuy-spreadsheet/",
        note: "Start with the product-research hub and preserve the exact seller, option and source before the first payment.",
      },
      {
        label: "How to Use a Pikobuy Spreadsheet",
        url: "/how-to-use-pikobuy-spreadsheet/",
        note: "Follow the complete sequence from shortlist and product link to warehouse evidence and parcel planning.",
      },
      {
        label: "Pikobuy Shipping Guide",
        url: "/pikobuy-shipping-guide/",
        note: "Compare the measured parcel, eligible routes, restrictions and risk before the second payment.",
      },
      {
        label: "Pikobuy Warehouse and Parcel Consolidation Guide",
        url: "/articles/pikobuy-warehouse-consolidation-guide/",
        note: "Plan the inspection, packaging and measured-parcel decisions that sit between the two payments.",
      },
      {
        label: "Pikobuy Return Policy Guide",
        url: "/articles/pikobuy-return-policy-guide/",
        note: "Understand the warehouse request window, eligibility limits, evidence and return-cost responsibility.",
      },
    ],
    keyFacts: [
      "Pikobuy's Beginner's Guide separates the product-order payment from the later international-shipping payment.",
      "Warehouse arrival, inspection and photos sit between those two payment decisions.",
      "The current User Agreement says freight payment includes the chosen third-party logistics charge and a Pikobuy platform service fee.",
      "A product refund, return charge or destination tax should not be confused with the international-shipping quote.",
    ],
    sections: [
      {
        heading: "The short answer: Pikobuy payment happens in two stages",
        paragraphs: [
          "A Pikobuy order does not have one universal checkout that covers the product, warehouse work and international delivery in a single number. Pikobuy's official Beginner's Guide publishes two distinct payment moments. At “Submit And Pay,” the shopper selects the product options, submits the order and completes the first payment. After the seller sends the item to Pikobuy's warehouse and the warehouse checks it in, the shopper later chooses a logistics route, submits a parcel and pays international shipping.",
          "That separation is useful because the international parcel does not yet exist when the product is ordered. The warehouse has not measured the final packed weight or dimensions, and the shopper may combine several orders, change packaging or return an item. The first payment moves a specific product toward the warehouse. The second pays for a measured parcel to travel from China to the destination. Treating them as separate budgets prevents a low listing price from being mistaken for the final landed cost.",
        ],
      },
      {
        heading: "Stage one: confirm the product order before paying",
        paragraphs: [
          "The official guide tells shoppers to confirm style, color and size, save the product or store information, and then paste the product link or keywords into Pikobuy. Before the first payment, check the exact seller, chosen variant, quantity, domestic delivery information and the amount shown in the live order breakdown. A spreadsheet price is research context; it cannot control a marketplace seller's current price or option-dependent charge.",
          "Pikobuy's current User Agreement describes the purchasing-stage amount as the purchase price and logistics price of the selected goods, with possible small differences caused by exchange-rate fluctuations and settlement timing. It also says Pikobuy can add the necessary platform service fee when the buyer confirms payment for purchasing-agency goods. The agreement does not give one fixed product-order service-fee percentage that is safe to publish for every transaction, so the current confirmation page is the source for the actual amount.",
        ],
        bullets: [
          "Match the seller and source URL to the listing you researched.",
          "Confirm color, size, model, quantity and any option-dependent price.",
          "Read every line in the live order total rather than copying an old example.",
          "Keep a screenshot or record of the option and payment confirmation.",
        ],
      },
      {
        heading: "What the first payment does not settle",
        paragraphs: [
          "The first product payment is not the international shipping payment. Pikobuy's guide places “Pay Shipping” after “Warehouse Inspection,” not beside the original order. The later parcel price depends on the goods that actually arrive, the packaging plan, the destination and the routes currently available. It is therefore misleading to add a generic shipping rate to a spreadsheet card and call the result the final Pikobuy payment.",
          "The first payment also should not be presented as a guarantee that the seller will fulfil the order. Pikobuy's Terms of Service say that placing an order is an offer that Pikobuy or a participating merchant may accept or decline, and an unsuccessful payment means the order is not processed. The Beginner's Guide says final price is based on actual purchasing and an out-of-stock order is refunded. Keep the order page until the purchase and warehouse status are confirmed.",
        ],
      },
      {
        heading: "The warehouse checkpoint protects the second decision",
        paragraphs: [
          "Between the two payments, the official guide says Pikobuy inspects the warehouse arrival, checks it in, takes photos and looks for defects. Use that checkpoint to confirm the ordered identity, selected color or size, quantity and visible condition. If one missing angle or measurement would change the keep-or-return decision, request that evidence before building the parcel rather than after paying to ship it internationally.",
          "Inspection has limits. Pikobuy's shipping policy says special and professional products cannot receive professional inspection and directs users to inspection photos or additional detailed photos. Images cannot prove authenticity, internal construction, material chemistry, comfort or long-term durability. The useful question is whether the visible evidence supports the next decision: keep the item, request one clarification or submit an eligible return while time and packaging conditions still allow it.",
        ],
      },
      {
        heading: "Stage two: pay for the measured international parcel",
        paragraphs: [
          "Pikobuy's guide says the shopper chooses a suitable logistics route, submits the parcel and pays international shipping. The shipping estimator asks for destination country or region, product type, weight, length, width and height. Those inputs explain why another shopper's rate is not a reliable quote for you. A shoe box, reinforced corner protection or a combined parcel can change billable volume even when the products themselves are light.",
          "The current User Agreement says the shopper independently chooses a third-party logistics provider, pays that provider's freight and pays Pikobuy a platform service fee. As reviewed on August 2, 2026, the agreement calculates that freight platform service fee at 8% of freight and warns that exchange-rate fluctuations or settlement timing can cause small differences. Because agreements and checkout rules can change, use this as a dated policy fact—not a permanent promise—and verify the live parcel total before paying.",
        ],
      },
      {
        heading: "Payment methods, currencies and account records",
        paragraphs: [
          "Pikobuy's About page says multiple currencies and payment methods are supported. Its public footer displays Visa, Mastercard, American Express and JCB marks. That does not prove that every method is available for every account, country, currency or transaction. Payment processors can apply region, card, verification or risk controls. The responsible instruction is simple: use the methods shown in your authenticated checkout and read the final currency and amount before confirming.",
          "Pikobuy's Privacy Policy says the platform collects transaction and payment information including order details, payment amount and time, and the payment channel. Keep your own order confirmation and parcel payment record so you can reconcile the two stages. Use only the official checkout, protect the account password and do not send card details, passwords or one-time codes to a seller, spreadsheet editor or third-party chat account.",
        ],
      },
      {
        heading: "Refunds and returns are a separate money movement",
        paragraphs: [
          "An out-of-stock refund is not the same as a warehouse return. The Beginner's Guide says an out-of-stock order is refunded. Pikobuy's Returns & Exchanges page covers goods that have reached the warehouse and says an eligible request generally must be submitted within 120 hours beginning from the next hour after the order becomes “Warehoused.” Seller participation, marketable condition and packaging requirements still control whether the request can proceed.",
          "The return page says the refund total is based on the product price actually paid and that Pikobuy can return the item only when the seller agrees. For an unconditional return, its published formula includes shipping to the seller, shipping from the seller and a 5 RMB service fee. It also tells users to keep enough account balance to pay return shipping and the service fee. These amounts belong in a return decision, not inside a made-up universal international-shipping rate.",
        ],
      },
      {
        heading: "Transferred parcels need an available balance",
        paragraphs: [
          "Pikobuy also publishes rules for goods transferred to its warehouse rather than purchased through the normal agent order. Its shipping policy says transferred goods are submitted, received, photographed and stored, after which the user submits a parcel and pays shipping as usual. The policy adds a specific caution: when a transferred package arrives with shipping charges collected on delivery, Pikobuy may deduct that cost from the account balance without separate confirmation.",
          "That rule does not mean Pikobuy can deduct any unrelated amount at any time. It is a published condition for collected-on-delivery charges on transferred goods. If you use the transfer workflow, confirm the sender's domestic delivery terms and maintain enough balance for the expected inbound charge. If the amount or sender is unfamiliar, contact official support using the transfer order details before making further parcel decisions.",
        ],
      },
      {
        heading: "A payment checklist that avoids fake precision",
        paragraphs: [
          "A useful budget has separate lines rather than one attractive total. Record the seller price and domestic seller-to-warehouse charge first. Add any purchasing-stage service fee shown at confirmation. Keep optional photos, packaging or return costs separate. After warehouse measurements are available, record the chosen route's freight and the platform fee shown in the parcel checkout. Finally, consider destination duties, taxes or brokerage charges; Pikobuy's Terms of Service say these cross-border costs can be the buyer's responsibility.",
          "Do not convert every amount to USD once and keep reusing it. Currency rates, settlement timing, parcel data and routes can change. If you need a planning comparison, write the date, original currency and input assumptions beside it. Replace the estimate with the real order or parcel total at each stage. This produces a record that can be checked later instead of a number that looks exact but cannot be reproduced.",
        ],
        bullets: [
          "Product: current seller price, selected option and domestic delivery.",
          "Order: purchasing-stage fee or adjustment shown at confirmation.",
          "Warehouse: optional photo, packaging and possible return costs.",
          "Parcel: measured weight, dimensions, route freight and current platform fee.",
          "Destination: applicable duties, taxes, brokerage or last-mile charges.",
        ],
      },
      {
        heading: "Worked example without inventing a quote",
        paragraphs: [
          "Suppose you shortlist one hoodie and one pair of shoes. Before the first payment, save both seller links, exact colors, sizes and the live order breakdown. Pay only after the parsed Pikobuy options match the intended listings. When the items reach the warehouse, review the QC images and compare the hoodie measurements and shoe size evidence. Decide whether the shoe box is necessary for protection before creating the parcel.",
          "At the second stage, use the warehouse weight and dimensions rather than a social-media estimate. Select the correct destination and product type, compare eligible routes, and read the freight and platform-fee lines displayed at that time. Add any destination charges separately. The example deliberately contains no dollar total because no honest total exists without a live seller order, measured parcel, selected route, current exchange rate and destination context.",
        ],
      },
      {
        heading: "The practical conclusion",
        paragraphs: [
          "Pikobuy payment is easier to understand when the warehouse is treated as the dividing line. Stage one pays for a specific product order and the charges shown for that purchase. The warehouse then supplies photos, status and parcel measurements. Stage two pays the current international route and related platform fee. Refunds, returns and destination charges remain separate events with their own rules.",
          "This article was fact-checked against Pikobuy's public Beginner's Guide, About page, shipping estimator, Shipping Policy, Returns & Exchanges page, Terms of Service, User Agreement and Privacy Policy on August 2, 2026. Pikobuy can update its services and agreements. The current order page, parcel page and official policy text remain the final sources for a real transaction.",
        ],
      },
    ],
    sources: [
      officialSources.guide,
      officialSources.userAgreement,
      officialSources.estimator,
      officialSources.returns,
      officialSources.terms,
      officialSources.shipping,
      officialSources.privacy,
    ],
  },
  "pikobuy-warehouse-consolidation-guide": {
    dek: "Learn how the Pikobuy warehouse receives, photographs and combines orders before shipping, with practical QC, packaging and parcel-planning checks.",
    reviewed: "Fact-checked Aug 4, 2026",
    readingTime: "12 min read",
    seoTitle: "Pikobuy Warehouse and Parcel Consolidation Guide",
    published: "2026-08-04",
    modified: "2026-08-06",
    visual: {
      src: "/pikobuy-warehouse-consolidation-flow.svg",
      alt: "Pikobuy warehouse flow showing separate orders, inspection photos, packaging choices and one measured consolidated parcel",
      caption: "Original Pikobuyy planning diagram based on Pikobuy's public warehouse and shipping workflow. It does not state a storage allowance, consolidation fee or guaranteed saving; confirm live terms in your account.",
      width: 1200,
      height: 630,
    },
    relatedLinks: [
      {
        label: "Pikobuy Spreadsheet 2026",
        url: "/pikobuy-spreadsheet/",
        note: "Preserve the exact seller, variant and source for each item before it enters the warehouse workflow.",
      },
      {
        label: "Pikobuy QC Photo Guide",
        url: "/pikobuy-qc-photo-guide/",
        note: "Use warehouse images for visible checks while respecting the limits of a non-professional inspection.",
      },
      {
        label: "Pikobuy Shipping Guide",
        url: "/pikobuy-shipping-guide/",
        note: "Compare eligible routes only after the planned parcel has a real weight, dimensions and product mix.",
      },
      {
        label: "Pikobuy Payment Guide",
        url: "/articles/pikobuy-payment-guide/",
        note: "See why warehouse review and parcel preparation separate the product payment from international freight.",
      },
      {
        label: "Pikobuy Return Policy Guide",
        url: "/articles/pikobuy-return-policy-guide/",
        note: "Close the keep-or-return decision while the item is still in its documented warehouse request window.",
      },
    ],
    keyFacts: [
      "Pikobuy says it can source from multiple sellers and consolidate orders from different platforms.",
      "Its Beginner's Guide places warehouse check-in, inspection and photos before parcel submission and international shipping payment.",
      "Minimal or reinforced packaging can be requested, but the best option depends on the actual products and route rules.",
      "Pikobuy does not publish one universal storage allowance or consolidation fee on the public pages reviewed for this guide.",
    ],
    sections: [
      {
        heading: "What the Pikobuy warehouse changes",
        paragraphs: [
          "The Pikobuy warehouse is the point where separate marketplace orders become physical items that can be checked and planned as a parcel. Pikobuy's homepage says the service sources from multiple sellers and consolidates orders from different platforms. Its Beginner's Guide then explains the sequence: a product arrives, the warehouse inspects it, checks it in, takes photos and looks for defects; only after that does the shopper choose a logistics route, submit a parcel and pay international shipping.",
          "That order matters. Before arrival, product weight, packaging and seller information are still estimates or listing claims. After check-in, the dashboard can show what actually reached the warehouse. The photos can support a visible-condition review, and the eventual parcel measurements can replace a guessed shipping calculation. Consolidation is therefore not simply putting several boxes together. It is a decision about which items to keep, what packaging to retain, what protection to add and whether the combined parcel remains eligible for a suitable route.",
        ],
      },
      {
        heading: "Build a warehouse record before combining anything",
        paragraphs: [
          "A useful warehouse record begins before the seller ships. Save the source URL, seller or store, selected color, size or model, quantity and the order number. Pikobuy's official guide tells users to confirm style, color and size and recommends saving product or store information. That record gives the warehouse photos a reference. Without it, two similar black hoodies or two versions of the same shoe can be difficult to distinguish from memory.",
          "When an item is checked in, compare the received identity first: order number, product type, quantity, selected variant and any visible size label. Then inspect condition and category-specific details. Do not start with tiny cosmetic differences while the wrong color or quantity goes unnoticed. If a decisive view or measurement is missing, Pikobuy's shipping policy says users can review the supplied inspection photos or purchase additional detailed photos. Request extra evidence only when it can change the keep, return or packaging decision.",
        ],
        subsections: [
          {
            heading: "A compact item-level checklist",
            paragraphs: [
              "Keep one line per warehouse item with the order number, intended option, arrival status, visible issue, return deadline, packaging request and final parcel decision. This does not replace the official dashboard; it prevents a multi-order shipment from becoming a memory exercise. Mark facts from the dashboard separately from your own preference, such as keeping a shoe box for protection.",
            ],
          },
        ],
        bullets: [
          "Confirm identity and quantity before judging finish.",
          "Compare the received option with the saved order record.",
          "Record any missing view or measurement that would change the decision.",
          "Do not call a visual check authentication or professional testing.",
        ],
      },
      {
        heading: "Understand what warehouse inspection cannot prove",
        paragraphs: [
          "Warehouse photos are evidence of visible condition, not a laboratory report or authentication certificate. Pikobuy's User Agreement says the platform cannot review every marketplace, merchant, product or service for quality, safety, legality, authenticity or accuracy. The same agreement says professional checks may not be possible for some items and that inspectors may be limited to appearance and included accessories. The Shipping Policy likewise excludes professional inspection for special and professional products.",
          "Use the photos for claims the images can actually support: color, count, visible size tag, obvious damage, external shape, print placement, stitching or included pieces. They cannot establish material composition, battery condition, waterproofing, comfort, internal construction or long-term durability. A careful consolidation decision keeps this boundary visible. If uncertainty is unacceptable for the item value or intended use, do not assume that combining it into an international parcel will solve the evidence gap.",
        ],
      },
      {
        heading: "Parcel consolidation is a trade-off, not an automatic saving",
        paragraphs: [
          "Combining several warehouse orders can reduce repeated outer cartons and lets the shopper make one route decision for the selected items. It can also create a larger, heavier or more complex parcel. Pikobuy's shipping estimator asks for destination, product type, weight, length, width and height. Those inputs show why the word consolidated does not automatically mean cheaper. A compact clothing parcel and a parcel containing shoe boxes, structured bags or fragile goods can have very different billing and protection needs.",
          "Compare at least two realistic packing plans when volume matters. In one, keep protective product packaging. In the other, remove only packaging that is genuinely unnecessary and safe to remove. Do not strip packaging that may protect a fragile surface, preserve resale condition or support a possible return before that decision is final. The Beginner's Guide says users can request minimal packaging or reinforced packaging. Treat each as an instruction with consequences, not a universal best practice.",
        ],
        subsections: [
          {
            heading: "When separate parcels may be more sensible",
            paragraphs: [
              "A split can be reasonable when product restrictions differ, one item needs special protection, the combined dimensions remove useful route choices or the shipment value becomes uncomfortable. Pikobuy's User Agreement tells users to understand international prohibited-item rules, while its public policies discuss sensitive goods, batteries, liquids and other transport risks. Use only routes shown as eligible for the real product mix; never misclassify an item to make a cheaper route appear.",
            ],
          },
        ],
      },
      {
        heading: "Use measured parcel data before choosing a route",
        paragraphs: [
          "The early shipping estimate is a budget check, not the final parcel quote. Once the selected items and packaging plan are known, use the warehouse parcel's actual weight and dimensions. Compare the routes available for the correct destination and product type, then read their current billing method, restrictions, tracking and protection information. Pikobuy's guide explicitly says routes differ in delivery time and billing method, so another shopper's price per kilogram is not a reliable substitute.",
          "Packaging can move more than the scale reading. Reinforcement, shoe boxes and structured products can increase dimensions; removing an outer seller carton may reduce wasted space. The practical question is not how to make the parcel look smallest. It is how to create a parcel that protects the goods, remains eligible for the chosen route and produces a quote based on reproducible inputs. Save the chosen packing instruction and final measurements with the parcel record.",
        ],
        bullets: [
          "Destination country or region",
          "Accurate product type and any route restrictions",
          "Final packed weight, length, width and height",
          "Protection, tracking and current compensation terms",
          "The live freight and service-fee breakdown shown at submission",
        ],
      },
      {
        heading: "Resolve returns before submitting the parcel",
        paragraphs: [
          "International dispatch usually ends the practical warehouse review window, so check questionable items promptly. Pikobuy's Returns & Exchanges page states that an eligible request generally must be submitted within 120 hours beginning from the next hour after the order becomes Warehoused. The page also makes clear that seller support, seller agreement, marketable condition and packaging requirements still matter. A five-day label is not a guarantee that every item can be returned.",
          "Keep tags, seals and packaging intact until the decision is made, especially where category rules require them. The policy says an unconditional return can include delivery to the warehouse, return delivery to the seller and a 5 RMB service fee, while responsibility can differ for a confirmed seller error or quality issue. Do not build the parcel simply because most items are ready. First close every keep, return or clarification decision so an unwanted product is not shipped internationally by accident.",
        ],
      },
      {
        heading: "Storage terms and optional charges need a live check",
        paragraphs: [
          "The public Pikobuy pages reviewed on August 4, 2026 describe warehouse receipt, inspection, photos, storage, packaging requests and parcel submission, but they do not publish one universal free-storage period or one fixed consolidation charge that this guide can responsibly quote. Account-level rules, optional-service prices and operating policies can change. Check the current warehouse or parcel page and ask official support before delaying a shipment based on an old post or another agent's terms.",
          "Transferred goods also have distinct rules. Pikobuy's Shipping Policy says transfer items are photographed and stored before the user submits a parcel, but it does not provide after-sales service for the transferred products; the user must contact the original sender or seller, while Pikobuy can only assist with shipping them back. The policy also warns that inbound charges collected on delivery may be deducted from the account balance. Do not apply ordinary purchasing-order assumptions to a transfer order.",
        ],
      },
      {
        heading: "A practical consolidation workflow",
        paragraphs: [
          "Start with a complete arrival list, not the desire to ship quickly. Match each warehouse item to its saved order record and review the visible evidence. Resolve wrong variants, damage concerns and missing measurements. Mark each item keep, clarify or return. Only the keep group should enter parcel planning. Then compare packaging scenarios, identify any restricted or fragile products and decide whether one parcel or a split better fits the available routes and risk level.",
          "After the packing instruction is final, use the measured parcel data to compare live options. Read the current quote and service lines, retain the route name and parcel number, and pay only when the contents and destination are correct. Pikobuy's guide says tracking information becomes available within three days after dispatch; that is a tracking-activation statement, not three-day delivery. Monitor the official parcel page until carrier tracking begins.",
        ],
        bullets: [
          "Match every arrival to its exact order and intended option.",
          "Finish QC, clarification and return decisions first.",
          "Choose packaging for protection, size and route eligibility.",
          "Compare one-parcel and split-parcel scenarios when restrictions or volume differ.",
          "Submit using measured data and the current official route information.",
        ],
      },
      {
        heading: "Conclusion: consolidate evidence before products",
        paragraphs: [
          "A reliable Pikobuy warehouse workflow consolidates decisions before it consolidates goods. Preserve the source, confirm each arrival, respect the limits of warehouse photos, resolve returns, choose packaging and then compare routes using the final parcel measurements. That sequence is more useful than chasing a universal storage rule or a dramatic shipping saving that the public evidence does not support.",
          "This guide was fact-checked on August 4, 2026 against Pikobuy's public homepage, Beginner's Guide, Shipping Cost Estimation, Shipping Policy, Returns & Exchanges page and User Agreement. Pikobuy can update its services and terms. The authenticated order, warehouse and parcel pages remain the final sources for a real transaction.",
        ],
      },
    ],
    sources: [
      officialSources.home,
      officialSources.guide,
      officialSources.estimator,
      officialSources.shipping,
      officialSources.returns,
      officialSources.userAgreement,
    ],
  },
  "pikobuy-return-policy-guide": {
    dek: "Understand Pikobuy's 120-hour warehouse return window, eligibility limits, packaging rules and likely costs before submitting a return request.",
    reviewed: "Fact-checked Aug 6, 2026",
    readingTime: "12 min read",
    seoTitle: "Pikobuy Return Policy: 120-Hour Warehouse Guide",
    published: "2026-08-06",
    modified: "2026-08-06",
    visual: {
      src: "/pikobuy-return-decision-timeline.svg",
      alt: "Pikobuy return decision timeline from Warehoused status through evidence, eligibility and request submission",
      caption: "Original Pikobuyy decision diagram based on Pikobuy's public Returns & Exchanges policy reviewed on August 6, 2026. The 120-hour request window does not guarantee seller approval.",
      width: 1200,
      height: 630,
    },
    relatedLinks: [
      {
        label: "Pikobuy QC Photo Guide",
        url: "/pikobuy-qc-photo-guide/",
        note: "Review the visible warehouse evidence before deciding whether an item should be kept or returned.",
      },
      {
        label: "Pikobuy Warehouse Guide",
        url: "/articles/pikobuy-warehouse-consolidation-guide/",
        note: "Finish every keep, clarify or return decision before building an international parcel.",
      },
      {
        label: "Pikobuy Payment Guide",
        url: "/articles/pikobuy-payment-guide/",
        note: "Separate product-order payments, return costs and international shipping in the transaction record.",
      },
      {
        label: "Pikobuy Shipping Guide",
        url: "/pikobuy-shipping-guide/",
        note: "Estimate shipping early so an unexpectedly high parcel quote does not become a rushed return decision.",
      },
    ],
    keyFacts: [
      "Pikobuy's Returns & Exchanges page says the request window begins from the next hour after an order becomes Warehoused and runs for 120 hours.",
      "A request is not automatic approval: seller participation, seller agreement, item condition and category-specific packaging rules still apply.",
      "For a personal-choice return after warehousing, the published formula includes delivery to the warehouse, return delivery to the seller and a 5 RMB service fee.",
      "The policy says the refund total is based on the product price actually paid, not an estimated spreadsheet price or the full international landed cost.",
    ],
    sections: [
      {
        heading: "The short answer: five days is a decision window, not a promise",
        paragraphs: [
          "Pikobuy's public Returns & Exchanges page describes a five-day warehouse return process, but the phrase can be misunderstood. The operational rule is more precise: a buyer can request return service within 120 hours, counted from the next hour after the order status changes to Warehoused. The page also warns that a request may not be accepted after the window expires. Recording the status time is therefore the first practical step, not something to reconstruct several days later.",
          "That deadline does not make every item returnable and it does not make every return cost-free. Pikobuy says seller support, seller agreement, marketable condition, intact packaging and category rules can determine the outcome. Its policy also lists products for which the normal guarantee is unavailable or conditional. A useful return plan combines three questions: Is the request still in time? Is the item eligible in its current condition? Who is responsible for the reason and related costs?",
        ],
      },
      {
        heading: "Start the clock from the actual Warehoused status",
        paragraphs: [
          "The public policy does not say to count five calendar days from the order date, seller dispatch or warehouse delivery scan. It says the request period begins from the next hour after the order status becomes Warehoused, with five days defined as 120 hours. That distinction matters when a domestic shipment is delivered before the warehouse has completed check-in, or when several orders arrive on different days. Each order needs its own status record and review deadline.",
          "Take a screenshot or note the displayed status time as soon as the warehouse entry appears. Open the warehouse photos, compare them with the saved product page and intended option, and schedule the decision well before the final hour. The official Beginner's Guide places warehouse inspection, check-in, photos and defect review before international shipping. Use that checkpoint promptly; do not wait for every other order in a consolidation plan if one questionable item is already inside its return window.",
        ],
      },
      {
        heading: "Eligibility depends on the seller, the product and its condition",
        paragraphs: [
          "Pikobuy divides products into items that can use the return guarantee and items for which the usual service is unavailable. For an eligible item, the seller must offer the return guarantee, the product must remain in the marketable condition required by the seller and the warehouse time must not exceed five days. Even then, the notes state that Pikobuy can return the product only when the seller agrees. The service is an assisted return process, not an independent guarantee that overrides the marketplace seller.",
          "The policy identifies several common limitations. Custom-made goods are subject to negotiation and the seller's final decision. Second-hand items, undergarments, adult products, food, some bulk book orders and products bought outside mainland China are among the examples listed as unavailable. Seller-specific exclusions also matter. Before ordering an item with limited resale potential, confirm the seller's current terms rather than assuming the warehouse request button will solve the risk later.",
        ],
        subsections: [
          {
            heading: "Do not confuse a return label with eligibility",
            paragraphs: [
              "A visible return option can start a request, but the policy still requires review of timing, condition and seller rules. Describe the real reason accurately and keep evidence that matches it. Choosing a stronger-sounding reason does not change the item's condition or the seller's records, and it can make the dispute harder to resolve.",
            ],
          },
        ],
      },
      {
        heading: "Preserve tags, seals, accessories and category-specific packaging",
        paragraphs: [
          "The easiest preventable return problem is changing the item before the decision is final. Pikobuy lists products whose packaging, tags or accessories were removed at the user's request as unavailable for the standard guarantee. It also publishes special standards for multiple categories. New sneakers may need their anti-theft clasp and anti-damage sticker intact and functional. Sealed personal-care, cosmetic, food, model, game and other products may become ineligible when the one-time seal or plastic wrap is opened.",
          "Digital products and appliances have their own conditions, while cameras, books, electronic components and large appliances have separate use or packaging limits. The exact table should be checked for the product type rather than summarized into a vague rule such as keep the box. Until the keep-or-return decision is closed, avoid requesting tag removal, seal opening or packaging disposal. If a missing detail is decisive, ask whether an additional warehouse photo can show it without changing the product's return condition.",
        ],
      },
      {
        heading: "Build a clean evidence record before submitting",
        paragraphs: [
          "A return request is easier to evaluate when the evidence shows the ordered option, the received item and the specific mismatch. Save the source listing, selected color and size, order summary, warehouse status time and the relevant photos together. For a wrong product, show the expected and received options. For visible damage, identify the exact location and use the clearest warehouse image. For a measurement concern, distinguish a seller measurement from a warehouse measurement and note the tolerance or uncertainty.",
          "Warehouse photos have limits. Pikobuy's User Agreement says some products cannot receive professional inspection for quality, authenticity or internal completeness, and the public shipping policy similarly limits professional checks. A photo may support a wrong-color or visible-stain claim, but it cannot prove long-term durability, comfort or every material claim. Keep the return reason tied to evidence the warehouse or seller can actually verify.",
        ],
        bullets: [
          "Record the exact Warehoused time and calculate a deadline with a safety margin.",
          "Save the seller page, intended variant and order confirmation.",
          "Keep the original warehouse photos and identify the decisive image.",
          "Preserve tags, seals, accessories and seller packaging while the request is reviewed.",
          "Describe the factual reason without overstating what a photo proves.",
        ],
      },
      {
        heading: "Understand the fee formula before calling a return free",
        paragraphs: [
          "For an unconditional return after the product has reached the warehouse, Pikobuy's Returns & Exchanges page publishes a formula: shipping cost to the seller, shipping cost from the seller and a 5 RMB service fee. It adds that even when the seller originally offered free shipping, the buyer may need to repay the first dispatch cost when applying for return. The same page advises keeping enough account balance to cover return shipping and the service fee.",
          "Responsibility changes the expected cost. The table places personal reasons, an accidental extra purchase and a shipping quote that exceeds the buyer's budget under customer responsibility. It says a customer normally does not need to pay return costs for a seller's wrong item or a verified quality issue, although the seller's response still matters. The FAQ says a not-yet-shipped order does not incur the return charge described there; charges apply when the product has no quality problem and is already warehoused.",
        ],
      },
      {
        heading: "Know what the refund covers—and what it may not restore",
        paragraphs: [
          "The policy says the refund total is based on the product price actually paid. That is not the same as refunding every cost connected with the shopping plan. Domestic transport, return shipping and the service fee can remain separate depending on responsibility. International shipping has not yet been paid for an item that is still at the warehouse, but optional services or exchange-rate differences should not be silently assumed to be included in the product refund.",
          "Keep the original product payment and the return transaction as separate records. After approval, monitor the order and account balance until the actual refund is posted, and compare the credited amount with the published breakdown for the case. If the amount or reason is unclear, use Pikobuy's official ticket or support channel with the order number and evidence. Do not publish private order details in a public review while a support case is still being resolved.",
        ],
      },
      {
        heading: "A practical return workflow for warehouse orders",
        paragraphs: [
          "When the status becomes Warehoused, record the time and open the photos immediately. Compare the product with the intended variant and category checklist. If it is acceptable, mark it keep. If a missing angle prevents a decision, request clarification while preserving packaging. If there is a visible issue or buyer-choice return, check the seller's guarantee, the product category, its current condition and the likely cost before submitting the accurate reason through the order page.",
          "Do not submit an international parcel containing the item while the return question is open. A parcel decision changes the practical stage of the transaction and can remove the warehouse opportunity to send the product back domestically. For several arrivals, maintain a simple table with order, Warehoused time, evidence result, eligibility, expected responsibility and final action. Consolidate only the items whose keep decisions are complete.",
        ],
        bullets: [
          "Time: Is the request safely inside the 120-hour window?",
          "Eligibility: Does the seller support returns for this exact product?",
          "Condition: Are tags, seals, accessories and packaging still compliant?",
          "Evidence: Can the stated reason be shown clearly and accurately?",
          "Cost: Who is responsible, and is the account balance sufficient?",
          "Status: Has the request, seller response and refund actually completed?",
        ],
      },
      {
        heading: "Conclusion: make the return decision before parcel planning",
        paragraphs: [
          "The useful way to read Pikobuy's return policy is as a timed warehouse decision system. The 120-hour window creates urgency, but seller support, item condition, packaging standards, evidence and fee responsibility decide whether the request is workable. Review each arrival early and preserve its return condition until the decision is final.",
          "This guide was fact-checked on August 6, 2026 against Pikobuy's public Returns & Exchanges page, Beginner's Guide, Shipping Policy and User Agreement. Pikobuy and participating sellers can update their terms. The live order page, current policy and official support response remain the final sources for a specific transaction.",
        ],
      },
    ],
    sources: [
      officialSources.returns,
      officialSources.guide,
      officialSources.shipping,
      officialSources.userAgreement,
    ],
  },
  "pikobuy-tracking-guide": {
    dek: "Track a Pikobuy order without confusing seller delivery, warehouse check-in, parcel dispatch and international carrier updates.",
    reviewed: "Fact-checked Aug 10, 2026",
    readingTime: "12 min read",
    seoTitle: "Pikobuy Tracking Guide: Order & Parcel Status",
    published: "2026-08-10",
    modified: "2026-08-10",
    visual: {
      src: "/pikobuy-tracking-status-flow.svg",
      alt: "Pikobuy tracking flow from product order and seller delivery through warehouse check-in to international parcel tracking",
      caption: "Original Pikobuyy tracking map based on Pikobuy's public Beginner's Guide, Shipping Policy and Contact page reviewed on August 10, 2026.",
      width: 1200,
      height: 630,
    },
    relatedLinks: [
      {
        label: "Pikobuy Payment Guide",
        url: "/articles/pikobuy-payment-guide/",
        note: "Separate the product-order payment from the later international shipping payment and record both transactions.",
      },
      {
        label: "Pikobuy Warehouse Guide",
        url: "/articles/pikobuy-warehouse-consolidation-guide/",
        note: "Understand why seller delivery is followed by check-in, inspection and parcel preparation before international dispatch.",
      },
      {
        label: "Pikobuy Shipping Guide",
        url: "/pikobuy-shipping-guide/",
        note: "Compare route, billing and risk information before turning warehouse items into an international parcel.",
      },
      {
        label: "Pikobuy Return Policy Guide",
        url: "/articles/pikobuy-return-policy-guide/",
        note: "Use the actual Warehoused time when a questionable item may need a return decision.",
      },
    ],
    keyFacts: [
      "Pikobuy's Beginner's Guide says international tracking information becomes available within three days after a parcel is shipped.",
      "The three-day statement concerns tracking availability, not a three-day delivery promise.",
      "A product order, seller-to-warehouse shipment and international parcel are different records and should not be tracked as if they were one shipment.",
      "Pikobuy's Shipping Policy says international parcels use third-party logistics providers and remain exposed to customs and other cross-border risks.",
    ],
    sections: [
      {
        heading: "The short answer: first identify what is actually moving",
        paragraphs: [
          "Pikobuy tracking becomes much easier when the transaction is divided into its real stages. A product order can be paid while the seller has not yet sent anything. A seller can then deliver the item inside China, but that domestic movement is not the international parcel. After warehouse check-in and inspection, the shopper chooses items, submits a parcel, pays international shipping and waits for dispatch. Only then does the final cross-border tracking stage begin.",
          "This distinction prevents a common mistake: searching one number and assuming every status belongs to the same journey. Keep the product order, seller shipment, warehouse record and international parcel in separate rows. Record the identifier, last event, event time and action owner for each. If a product is still moving to the warehouse, an international carrier cannot explain it. If a parcel has not been dispatched, refreshing a tracking site will not create a carrier scan.",
        ],
      },
      {
        heading: "Use Pikobuy's six-step guide as the tracking backbone",
        paragraphs: [
          "Pikobuy's public Beginner's Guide sets out six steps: select an item; search through Pikobuy; submit the purchasing order and complete the first payment; wait for warehouse inspection; choose a shipping route and pay the international shipping fee; then wait for the parcel. The guide says warehouse inspection includes check-in, photo confirmation and a defect check. It also says the parcel is dispatched after the shopper submits it and pays the shipping fee.",
          "That sequence is more useful than memorizing isolated labels because it shows which evidence should exist at each checkpoint. Before purchase, save the seller page, selected size, color and quantity. After the first payment, use the order record to follow purchasing progress. After seller dispatch, watch the domestic shipment until the warehouse receives it. After check-in, review the warehouse photos. After parcel payment and dispatch, use the international tracking information for the cross-border journey.",
        ],
      },
      {
        heading: "Do not confuse an order number with a tracking number",
        paragraphs: [
          "An order number identifies a commercial record. A tracking number identifies a shipment handled by a logistics provider. One Pikobuy shopping plan can contain several product orders from different sellers, each arriving at the warehouse separately. Those items can later be combined into one parcel. The reverse can also happen: a buyer may split warehouse items across several international parcels because of route restrictions, weight, dimensions or risk preferences.",
          "Build a simple tracking sheet with one row per physical movement rather than one row per shopping idea. Useful columns are record type, Pikobuy order or parcel number, seller, product, domestic tracking reference, warehouse status time, international tracking reference, carrier or route, latest event, latest event time and next action. This is original editorial advice, not an official Pikobuy dashboard specification, but it mirrors the stages the official guide actually publishes.",
        ],
      },
      {
        heading: "Seller delivery is not the same as warehouse check-in",
        paragraphs: [
          "A domestic carrier event can show that a shipment reached an address, while the warehouse record still needs receiving, identification, inspection and check-in. Pikobuy's guide describes warehouse inspection as a distinct step after the product arrives. Its Shipping Policy similarly says forwarded goods are received, photographed for confirmation and stored in the warehouse. Treat carrier delivery and warehouse availability as related but separate events.",
          "When several orders are expected, compare each domestic reference with the correct product and seller. Do not mark an item ready for parcel submission merely because a domestic carrier says delivered. Wait for the warehouse record and its photos. If a forwarded package is missing goods when received, Pikobuy's Shipping Policy tells the user to contact the sender for verification and states that Pikobuy is not responsible for shortages it did not cause.",
        ],
      },
      {
        heading: "The official three-day statement starts after dispatch",
        paragraphs: [
          "Pikobuy's Beginner's Guide says tracking information will be available within three days after the parcel is shipped. The starting event matters. The statement does not begin at product payment, seller dispatch, warehouse arrival, parcel submission or international shipping payment. Confirm that the parcel has actually been shipped, note that dispatch time, and then evaluate whether the published tracking-information window has passed.",
          "It is equally important not to turn the statement into a delivery promise. The guide immediately warns that international shipping takes longer and asks users to wait for tracking updates and delivery. It also says routes differ in delivery time and billing method. A tracking number appearing within three days does not mean the parcel will arrive within three days, and an initial electronic record is not evidence that customs clearance or last-mile delivery has finished.",
        ],
      },
      {
        heading: "Read tracking events as evidence, not guarantees",
        paragraphs: [
          "A tracking event records what a carrier or logistics system has reported at a particular time. It can help establish that a parcel was accepted, processed, transferred or presented for another stage, but it cannot promise the next scan. Cross-border parcels may pass through export handling, line-haul transport, import review and a local delivery network. The public Pikobuy pages do not publish one universal event glossary or one guaranteed timetable covering every route.",
          "Use exact dates instead of descriptions such as stuck for ages. Record the last event text, its time zone when shown and the number of full days since that event. Compare it with the route information visible for the actual parcel rather than with a different buyer's route. If a status is unclear, keep the original wording in the support ticket. Rewriting it into a stronger conclusion such as lost or seized before the carrier confirms that outcome can make the case less precise.",
        ],
      },
      {
        heading: "Allow for third-party logistics and cross-border risk",
        paragraphs: [
          "Pikobuy's Shipping Policy says parcels are carried by third-party logistics providers. It lists customs policy, confiscation, damage, loss and peak-season delivery delays among risks that can arise from cross-border transport or other uncontrollable factors. The policy says Pikobuy will assist with risk assessment, alerts and logistics insurance, but it does not promise that every delay or loss can be prevented.",
          "That boundary changes how a tracking problem should be documented. Save the parcel page, chosen route, declared contents, value record, protection or insurance selection, tracking reference and screenshots of meaningful events. When asking for help, identify the last confirmed event and the elapsed time. Do not assume that Pikobuy, the international carrier, customs and the last-mile carrier are the same organization. The next responsible party depends on the parcel's confirmed stage.",
        ],
      },
      {
        heading: "What to do when tracking has not appeared or has stopped",
        paragraphs: [
          "If no tracking information is visible, first confirm that Pikobuy shows the parcel as shipped rather than merely submitted, paid or being prepared. Note the dispatch time and apply the official within-three-days statement from that point. Check the parcel record for the correct reference and route. If three days have passed after confirmed dispatch without usable tracking, prepare a concise support request with the parcel number, dispatch time, route and a screenshot showing the missing information.",
          "If tracking exists but has not changed, preserve the latest event instead of opening several conflicting reports. Check whether the route page or carrier gives a relevant operational notice, then calculate the elapsed time. Pikobuy's official Contact page marks Submit a Ticket as the recommended contact method and also lists Support@pikobuy.com. Use one well-documented case and update it with new evidence; repeated messages without new information can fragment the record.",
        ],
        bullets: [
          "Confirm the stage: order, domestic shipment, warehouse item or international parcel.",
          "Copy the exact identifier associated with that stage.",
          "Record the latest event and its timestamp before contacting support.",
          "For missing international tracking, count from confirmed parcel dispatch.",
          "Include the route, parcel number and a focused screenshot in the ticket.",
          "Keep public posts free of addresses, account details and full tracking numbers.",
        ],
      },
      {
        heading: "A practical order-and-parcel tracking routine",
        paragraphs: [
          "Review active product orders and parcels on a schedule rather than refreshing them continuously. At the purchasing stage, look for seller action and domestic movement. At the warehouse stage, check that the item, option and photos match the order, then finish any keep-or-return decision before parcel submission. At the parcel stage, retain the measured weight, dimensions, selected route and shipping payment. After dispatch, add the international tracking reference and update only meaningful events.",
          "For a consolidated parcel, keep the item list attached to the parcel record. If one product later becomes relevant to a claim, this prevents confusion about which shipment contained it. For a split shipment, create a separate row for every parcel. This small amount of record keeping is more useful than relying on browser history or memory, especially when orders from Taobao, Tmall, 1688, Weidian or Yupoo reach the warehouse on different dates.",
        ],
      },
      {
        heading: "Conclusion: track the handoffs, not just the final number",
        paragraphs: [
          "Reliable Pikobuy tracking is a handoff problem. The seller, domestic carrier, warehouse, Pikobuy parcel process, international logistics provider, customs and local carrier can each create a different record. Start by identifying the present stage, then use the identifier and evidence belonging to that stage. The official three-day statement applies only after international parcel dispatch and describes tracking availability, not delivery speed.",
          "This guide was fact-checked on August 10, 2026 against Pikobuy's public Beginner's Guide, Shipping Policy and Contact page. Routes, dashboard labels and support processes can change. The current Pikobuy order or parcel page, carrier record and official support response remain the final sources for a specific shipment. Pikobuyy provides independent research guidance and does not process orders, carry parcels or control tracking events.",
        ],
      },
    ],
    sources: [
      officialSources.guide,
      officialSources.shipping,
      officialSources.contact,
    ],
  },
};

export const guideEntries: Record<string, EditorialEntry> = {
  "beginner-research-workflow": articleEntries["how-to-use-pikobuy-spreadsheet-2026"],
  "qc-photo-checklist": articleEntries["pikobuy-qc-photo-guide"],
  "shipping-cost-planning": articleEntries["pikobuy-shipping-cost"],
  "product-link-verification": {
    dek: "A concise workflow for checking a marketplace link before it becomes an order.",
    reviewed: "Fact-checked Jul 29, 2026",
    readingTime: "7 min read",
    keyFacts: [
      "Pikobuy accepts a product link or keywords in its official search workflow.",
      "The buyer still needs to confirm style, color, size and quantity.",
      "Final price is based on actual purchasing; an out-of-stock order is refunded.",
    ],
    sections: [
      {
        heading: "Verify the source before saving it",
        paragraphs: [
          "Open the current marketplace page and record the exact seller, variant, size information and displayed CNY price. A spreadsheet thumbnail or translated title is not enough. Look for option-dependent pricing and save the product or store information; Pikobuy's Beginner's Guide recommends doing this so the order is easier to place.",
          "When you paste the link into Pikobuy, compare the parsed result with the source. If the product cannot be found, use official customer service as the guide recommends. Do not replace the missing listing with a similar item without reviewing its own seller, options and measurements.",
        ],
      },
      {
        heading: "Recheck at each handoff",
        paragraphs: [
          "Verify the order summary before the first payment, then verify the warehouse photos against the saved option. The official guide says final price is based on actual purchasing and out-of-stock orders are refunded. Those statements are why directory prices must be treated as references rather than guarantees.",
          "A good product record keeps the source URL, intended option, order number and warehouse result together. It does not pretend the source will remain unchanged forever.",
        ],
        bullets: [
          "Exact seller and URL",
          "Chosen color, size, model and quantity",
          "Seller measurements or specification",
          "Current price and date checked",
          "Warehouse photo decision",
        ],
      },
      researchStandard,
    ],
    sources: [officialSources.guide, officialSources.returns],
  },
};

export const updateEntries: Record<string, EditorialEntry> = {
  "category-structure-refreshed": {
    dek: "Ten category routes were aligned with the live directory so visitors can move from research to the relevant collection without a dead end.",
    reviewed: "Published Jul 29, 2026",
    readingTime: "3 min read",
    keyFacts: ["Category cards now open matching main-directory collections.", "Product details remain on Pikobuyy before opening an exact item."],
    sections: [{ heading: "What changed", paragraphs: ["The categories now match the live directory's practical shopping lanes: shoes, hoodies and sweaters, T-shirts, jackets, pants and shorts, headwear, accessories, jerseys, electronics and other finds. Category cards lead directly to the corresponding main-site collection, while product cards retain a Pikobuyy detail step for image, price context and review notes.", "This update removes placeholder category destinations and reduces the chance of a visitor landing on a nonexistent route. External availability can still change, so each destination should be checked during regular link review."] }, researchStandard],
    sources: [officialSources.home],
  },
  "current-link-checks-clarified": {
    dek: "Product cards now explain what was checked and what still must be confirmed on the current destination page.",
    reviewed: "Published Jul 29, 2026",
    readingTime: "3 min read",
    keyFacts: ["A saved product link can change.", "The current destination controls variants, price and availability."],
    sections: [{ heading: "What changed", paragraphs: ["Each featured item now has a detail page with the source image, listed CNY price, a dated USD conversion note, product ID and category-specific checks. The page does not claim that an old price or option remains available.", "Before ordering, visitors should confirm the current listing and then follow Pikobuy's official process: select the exact option, submit the order, review the warehouse arrival and choose shipping."] }, researchStandard],
    sources: [officialSources.guide],
  },
  "qc-guide-expanded": {
    dek: "The QC guide now separates visible checks from claims that warehouse photos cannot prove.",
    reviewed: "Published Jul 29, 2026",
    readingTime: "4 min read",
    keyFacts: ["Pikobuy says it photographs warehouse arrivals.", "Professional inspection is not available for every special product."],
    sections: [{ heading: "What changed", paragraphs: ["The guide now uses different checklists for shoes, apparel, bags and electronics instead of repeating one generic list. It emphasizes identity, visible condition and measurements, and it avoids treating photos as proof of material composition, authenticity or performance.", "Return timing and packaging conditions were added from Pikobuy's current public policy so readers understand why QC should be reviewed promptly."] }, researchStandard],
    sources: [officialSources.shipping, officialSources.returns],
  },
  "language-pages-introduced": {
    dek: "Eight language routes provide localized navigation for the main research sections.",
    reviewed: "Published Jul 29, 2026",
    readingTime: "2 min read",
    keyFacts: ["Pikobuy does not publish reliable country-by-country user counts.", "Language selection is editorial, not a claim about official market share."],
    sections: [{ heading: "What changed", paragraphs: ["English, German, French, Spanish, Italian, Polish, Dutch and Portuguese routes are available for navigation and core page labels. The selection reflects the site's European and North American search focus, not an invented ranking of Pikobuy users by country.", "Where a long article has not yet received a human-quality localization, the site should avoid presenting a machine-length translation as equivalent editorial work. English source pages remain the fact-checked editorial reference."] }, researchStandard],
    sources: [officialSources.about],
  },
};

export const faqEntries: Record<string, EditorialEntry> = {
  "what-is-a-pikobuy-spreadsheet": articleEntries["what-is-a-pikobuy-spreadsheet"],
  "does-pikobuyy-sell-products": {
    dek: "No. Pikobuyy is an independent research directory and does not sell, purchase, warehouse or ship products.",
    reviewed: "Fact-checked Jul 29, 2026",
    readingTime: "4 min read",
    keyFacts: ["Pikobuyy is independent.", "Pikobuy is the shopping and forwarding platform described on pikobuy.com."],
    sections: [{ heading: "The practical difference", paragraphs: ["Pikobuyy organizes categories, product references and editorial checklists. A product card can lead to a current source, but no payment or order is processed here. Pikobuy's official pages describe the agent workflow: sourcing, first payment, warehouse inspection, international shipping payment and parcel tracking.", "Questions about a real transaction, refund, warehouse photo, route or account must be handled through Pikobuy's official site and support."] }, researchStandard],
    sources: [officialSources.home, officialSources.guide],
  },
  "how-to-use-qc-photos": articleEntries["pikobuy-qc-photo-guide"],
  "what-affects-shipping-cost": articleEntries["pikobuy-shipping-cost"],
  "how-often-links-change": guideEntries["product-link-verification"],
  "where-the-live-directory-opens": {
    dek: "Category cards open the matching findspreadsheet.com collection; product cards first open a Pikobuyy review page.",
    reviewed: "Checked Jul 29, 2026",
    readingTime: "3 min read",
    keyFacts: ["Categories are direct navigation.", "Product detail pages preserve review context before the source."],
    sections: [{ heading: "How links are organized", paragraphs: ["The category section is designed for fast browsing and opens the corresponding main-directory collection in a new tab. A featured product follows a different path: the first click opens its Pikobuyy detail page so the visitor can see the source image, listed price context and category-specific checks. The final button opens the exact product page.", "This distinction keeps broad discovery fast while giving individual products enough context. External pages can change, so the current destination remains the final source."] }, researchStandard],
    sources: [officialSources.guide],
  },
};

export function getEditorialEntry(section: string, slug: string) {
  if (section === "articles") return articleEntries[slug];
  if (section === "guides") return guideEntries[slug];
  if (section === "updates") return updateEntries[slug];
  if (section === "faq") return faqEntries[slug];
  return undefined;
}
