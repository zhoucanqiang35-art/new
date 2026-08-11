export type EditorialSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type EditorialArticle = {
  slug: string;
  title: string;
  description: string;
  keyword: string;
  readTime: string;
  checked: string;
  published?: string;
  modified?: string;
  locales?: "all" | "en";
  processSteps?: string[];
  processAlt?: string;
  sources?: { label: string; url: string; checked: string }[];
  sections: EditorialSection[];
};

export const mainSiteUrl = "https://findspreadsheet.com/";
export const communityReviewUrl = "https://www.reddit.com/r/repweidiansneakers/comments/1u70yls/preliminary_thoughts_my_experience_with_lolobuy/";

export const guideArticles: Record<"beginner" | "qc" | "shipping", EditorialSection[]> = {
  beginner: [
    {
      heading: "Start with the link, not the thumbnail",
      paragraphs: [
        "LoloBuy's public buying flow is link-led: the platform says users can paste a product link to begin an order and that it can assist with purchases from channels in China. That makes the source URL the most important piece of information in a spreadsheet entry. A thumbnail, English nickname, or converted dollar price can help discovery, but none of those fields proves that the seller listing is unchanged.",
        "Open the destination page and compare the title, selected colour, size, quantity, domestic delivery charge, seller information, and current price. If the listing has been removed, redirected, or rewritten, stop there. Do not assume a similar-looking replacement is the same product. A careful shortlist keeps the URL and a screenshot of the exact variant together so the warehouse item can later be compared with the order you actually placed.",
      ],
    },
    {
      heading: "Separate the product payment from international shipping",
      paragraphs: [
        "The transaction has two distinct stages. First, the item is purchased and sent through domestic logistics to the warehouse. Later, eligible warehouse items are selected for an international parcel. Keeping those stages separate prevents a common budgeting mistake: the product price is not the delivered cost.",
        "Before paying for the item, budget for China-side delivery, optional services, international freight, destination taxes or duties, and the possibility that a return may involve domestic shipping. LoloBuy's live account screens control the real total. A spreadsheet price is best treated as a dated reference, not a quote or a promise.",
      ],
    },
    {
      heading: "Use the warehouse as a decision point",
      paragraphs: [
        "LoloBuy states that goods arriving at the warehouse are checked for visible issues and that product photographs are provided. The warehouse stage is therefore more than a waiting room: it is the point where you compare what arrived with the seller listing and your saved order evidence.",
        "Check the item count, colour, labelled size, visible construction, obvious damage, and any measurements that matter. Photos cannot prove fibre composition, long-term durability, authenticity, or fit on your body. If the evidence is incomplete or a mismatch is visible, contact support before submitting the item in a parcel. Once international shipping begins, solving a seller-side problem is usually harder and more expensive.",
      ],
    },
    {
      heading: "Build the parcel only after every item passes",
      paragraphs: [
        "LoloBuy's warehouse interface says users can choose a combination of stored products, submit a waybill, pay freight, and receive logistics tracking. That supports consolidation, but it does not mean every item can use every route. Product type, dimensions, weight, destination, and carrier rules can change the eligible choices.",
        "Review each stored item individually, then compare the live routes using chargeable weight, restrictions, estimated transit information, protection options, and the handling of undeliverable parcels. If rehearsal or pre-packing is available, use it when size or packaging materially affects the quote. The platform describes rehearsal as a simulation rather than a real shipment, designed to return packed weight and dimensions before the actual parcel is submitted.",
      ],
    },
    {
      heading: "A beginner's final five checks",
      paragraphs: [
        "A good first order is deliberately boring: a manageable number of items, saved evidence, no rushed parcel submission, and no reliance on a coupon headline. The objective is to understand the complete workflow before increasing the value or complexity of a haul.",
      ],
      bullets: [
        "The live listing still matches the product, variant, and price you intended to buy.",
        "Every warehouse item has been compared with its order evidence and visible QC photos.",
        "The parcel quote uses final or rehearsed dimensions rather than a product-only estimate.",
        "The selected route accepts the contents and destination, with customs and delivery limits understood.",
        "Order numbers, parcel numbers, payment records, screenshots, and tracking details are saved outside the platform.",
      ],
    },
  ],
  qc: [
    {
      heading: "What LoloBuy says happens at the warehouse",
      paragraphs: [
        "LoloBuy's public service language says warehouse staff check the appearance of received goods and provide product photographs. Its current warehouse interface also refers to quality-inspection storage and free inspection pictures. Those statements support using warehouse images as a visible-condition checkpoint, but they do not turn a photograph into a laboratory test or an authenticity certificate.",
        "The right question is not simply, 'Do the photos look good?' It is, 'Do the photos show the item, variant, quantity, and visible condition that I ordered?' Start with the seller listing, order confirmation, and any saved size or colour evidence beside the warehouse images.",
      ],
    },
    {
      heading: "Run a fixed inspection sequence",
      paragraphs: [
        "Use the same order every time so enthusiasm for the product does not make you skip basic checks. First confirm item count and variant. Next inspect overall shape and symmetry. Then zoom into labels, stitching, print alignment, edges, closures, soles, hardware, and any area that commonly receives shipping damage. Finish with measurements when fit or scale matters.",
        "For apparel, compare the labelled size with the order and request or review chest, shoulder, length, waist, rise, or inseam measurements as appropriate. For footwear, compare both size labels, both shoes, sole shape, pair symmetry, and visible glue or material damage. For bags and accessories, inspect hardware, closures, corners, strap attachment points, and the position of printed or stitched elements.",
      ],
    },
    {
      heading: "Know what a photo cannot establish",
      paragraphs: [
        "Colour can shift under warehouse lighting and across screens. Softness, smell, weight in hand, internal reinforcement, and long-term durability are difficult or impossible to judge from standard photographs. A clear logo does not prove authenticity, and a tape-measure image does not guarantee how an item will fit a particular body.",
        "Write conclusions in evidence language: 'the photo shows', 'the label reads', or 'the measured length appears to be'. Avoid turning a visual impression into a guarantee. If a critical detail is outside the frame, ask for a focused image instead of guessing.",
      ],
    },
    {
      heading: "Handle a mismatch before parcel submission",
      paragraphs: [
        "If the item appears wrong, document the mismatch in one short message: order number, expected detail, observed detail, and the photo that shows it. LoloBuy's service language says users can contact the purchasing provider about return or exchange when warehouse goods do not meet the order, subject to platform agreements and service rules. That wording matters because it is not a universal promise that every seller or item accepts a return.",
        "Wait for the live response before adding the item to an international parcel. Save the conversation and any deadline shown in the account. Do not assume the outcome of one community report applies to a different seller, listing type, or reason for return.",
      ],
    },
    {
      heading: "QC decision rule",
      paragraphs: [
        "Ship only when the available evidence is consistent with the order and the remaining uncertainty is acceptable to you. Request more evidence when a decisive area is missing. Start a support conversation when the evidence points to the wrong item, wrong variant, missing quantity, or visible damage. A calm, repeatable checklist is more useful than a generic green-light or red-light comment.",
      ],
      bullets: [
        "Order match: title, count, colour, size, and variant.",
        "Visible condition: stains, tears, dents, scratches, deformation, and missing parts.",
        "Construction: symmetry, seams, print placement, closures, edges, and attachment points.",
        "Measurements: only the dimensions that affect your decision.",
        "Evidence gap: any critical detail that is not visible enough to judge.",
      ],
    },
  ],
  shipping: [
    {
      heading: "Shipping begins with stored-item eligibility",
      paragraphs: [
        "LoloBuy's warehouse flow lets users select stored products and build a parcel, but route availability is conditional. The destination, item category, batteries or liquids, branded-goods rules, actual weight, packed dimensions, and carrier restrictions can all affect what appears in the live account.",
        "Check eligibility before optimising price. A cheap route is irrelevant if it does not accept the contents, provides unsuitable tracking, excludes the destination, or has delivery limitations you cannot accept. Treat route names and availability as live data rather than permanent features of a guide.",
      ],
    },
    {
      heading: "Understand actual and volumetric weight",
      paragraphs: [
        "Actual weight is what the packed parcel weighs on a scale. Volumetric weight is a carrier calculation based on the space the parcel occupies. A bulky but light package can therefore be charged above its scale weight. The divisor and charging rule depend on the route, so a universal formula should not be presented as a final LoloBuy price.",
        "Shoeboxes, rigid packaging, puffer jackets, and large accessories can change dimensions substantially. Compare the live chargeable weight and packaging choices instead of looking only at product weight. Removing packaging may reduce volume, but it can also reduce protection or resale value; that is a trade-off, not an automatic saving.",
      ],
    },
    {
      heading: "Use rehearsal when dimensions drive the decision",
      paragraphs: [
        "LoloBuy describes rehearsal or pre-packing as a simulation, not an actual shipment. The selected items are packed so the user can review weight and dimensions before submitting the real parcel. That is especially useful when estimated size is uncertain or several items will be consolidated.",
        "After rehearsal, compare the resulting dimensions, chargeable weight, available routes, packaging notes, and total freight. A rehearsal result is still tied to the selected items and packing configuration; changing the contents or packaging can change the quote.",
      ],
    },
    {
      heading: "Plan for customs and last-mile limits",
      paragraphs: [
        "The official parcel interface warns users to declare contents truthfully under destination-country customs rules and notes that customs inspections, taxes, returns, or confiscation can occur. It also states that the platform cannot control customs outcomes. This is why no independent guide should promise a tax-free or risk-free route.",
        "Some live route notices also warn that overseas redelivery or return services may be unavailable. Use a complete, deliverable address, monitor tracking, and act quickly on carrier or customs requests. Keep invoices, parcel contents, declared values, and support records accessible until delivery is complete.",
      ],
    },
    {
      heading: "Pre-submit parcel checklist",
      paragraphs: [
        "The lowest displayed freight number is not automatically the best route. Compare the whole delivery proposition and choose based on evidence available in the account at the time of submission.",
      ],
      bullets: [
        "Every item has passed visible QC and is eligible for the selected destination and route.",
        "Packed or rehearsed weight and dimensions are understood, including volumetric charging.",
        "Packaging choices balance volume reduction with protection.",
        "Tracking, insurance or protection, customs, return, and redelivery limits have been read.",
        "The live total, address, declaration, and parcel contents are correct before payment.",
      ],
    },
  ],
};

export const editorialArticles: EditorialArticle[] = [
  {
    slug: "how-to-use-lolobuy-spreadsheet",
    locales: "en",
    title: "How to Use a LoloBuy Spreadsheet Without Treating It Like a Store",
    description: "A practical, evidence-led workflow for using a LoloBuy spreadsheet to discover products, verify live listings, review warehouse evidence, and plan a parcel.",
    keyword: "LoloBuy spreadsheet guide",
    readTime: "14 min read",
    checked: "Fact-checked 4 Aug 2026",
    sections: [
      {
        heading: "A spreadsheet is a discovery layer, not the seller",
        paragraphs: [
          "A good LoloBuy spreadsheet removes friction from product discovery. It groups links into familiar categories, gives a readable product name, shows a representative image, and may convert a price into dollars for an international audience. That is useful, but it is not the transaction. The spreadsheet does not own the seller listing, hold the stock, inspect the physical item, calculate the final parcel, or decide whether a shipping route is available.",
          "That distinction is the foundation of careful shopping. Treat every spreadsheet card as a lead that needs to be verified at its destination. The live page controls the current title, seller, selected variant, quantity, domestic delivery charge, and price. If a link redirects, the product has changed, or the intended variant is no longer visible, the correct response is to stop and reassess—not to assume the thumbnail is still accurate.",
          "This site sends product cards directly to the matching FindSpreadsheet page because that is the maintained product index for the project. From there, the original ordering destination and live details should be checked again. The chain of evidence matters more than how attractive the card looks.",
        ],
      },
      {
        heading: "What the official LoloBuy flow actually confirms",
        paragraphs: [
          "LoloBuy's public homepage says it assists users with purchasing products from channels in China, both online and offline, and that a user can paste a product link to begin an order. Its service language explains that purchased goods travel through domestic logistics to a designated warehouse, where the appearance of the goods is checked and product photographs are provided. The warehouse interface then allows stored goods to be selected and combined into a parcel, followed by weighing, shipping, and logistics tracking.",
          "Those points support a clear workflow: find a source link, confirm the order, wait for domestic delivery, inspect warehouse evidence, and submit an international parcel only when the item is acceptable. They do not support fixed promises about a seller's stock, a permanent exchange-rate conversion, a guaranteed number of photographs for every situation, a universal delivery time, or a single shipping price.",
          "This is why a fact-checked guide should be comfortable saying 'check the live account.' That phrase is not a lack of detail; it identifies which information is too variable to publish as a permanent fact. Route eligibility, promotions, payment options, fees, and policy deadlines can change after an article is written.",
        ],
      },
      {
        heading: "Verify the live listing before you pay",
        paragraphs: [
          "Open the destination page and compare it with the spreadsheet card. Check the product title, main image, seller, available colours, sizes, quantity, price, and China-side delivery. Read the seller's description and size information instead of relying on a shortened English label. If a translated name is vague, the images and variant selector usually contain more useful evidence.",
          "Save a screenshot that includes the selected variant and price. Record the original URL and any item identifier. For clothing, keep the size chart used for the decision. For footwear, save the selected size system rather than only the number, because regional labels can differ. For products sold in sets, confirm exactly what the selected option includes.",
          "A price converted to USD should always carry a date or an exchange-rate note. Currency conversion does not include domestic freight, service charges, optional services, international shipping, or destination taxes. Budgeting from the card alone creates the illusion of precision while leaving out the costs that often matter most.",
        ],
        bullets: [
          "Live URL resolves to the intended product rather than a shop homepage or replacement listing.",
          "Selected colour, size, configuration, and quantity match the saved reference.",
          "Current item price and domestic delivery are visible before payment.",
          "Seller notes, size information, and included accessories have been read.",
          "A screenshot and the original URL are saved for later warehouse comparison.",
        ],
      },
      {
        heading: "Budget in two stages",
        paragraphs: [
          "The product order and the international parcel are separate financial decisions. Stage one covers the item and its movement to the warehouse. Stage two covers the packed parcel moving from the warehouse to the destination country. The second stage cannot be known precisely from a product thumbnail because freight depends on the final package, route, and destination.",
          "Create a budget with separate lines for product price, domestic delivery, optional warehouse services, international freight, potential customs charges, and a contingency for changes or returns. Do not treat a promotional coupon headline as cash value until the live checkout shows that it applies to the route and parcel you selected. Coupon packs may contain conditions, minimums, expiry dates, or several separate discounts.",
          "For a first order, keeping the item count and value manageable is a form of research. It lets you observe the full workflow—from seller purchase through tracking—before committing a larger amount to a process you have not yet experienced.",
        ],
      },
      {
        heading: "Turn warehouse photographs into a real decision",
        paragraphs: [
          "When an item arrives at the LoloBuy warehouse, compare it with the evidence saved at checkout. Start with objective matches: item count, colour, labelled size, variant, visible accessories, and overall shape. Then inspect condition: stains, tears, scratches, dents, deformation, misaligned printing, uneven stitching, missing hardware, or obvious damage.",
          "Warehouse images have limits. They cannot reliably establish material composition, comfort, long-term durability, authenticity, or how an item will fit your body. Colour also changes with lighting and screen calibration. Write down what the image shows rather than what you hope it proves. If a critical area is not visible, request a focused photograph when that option is available.",
          "A mismatch should be raised before parcel submission. Send support the order number, the expected detail, the observed detail, and the image that demonstrates the difference. LoloBuy's public service language refers to return or exchange requests under platform agreements and provider rules; it does not mean every seller, listing type, or reason is automatically eligible. Save the response and any deadline displayed in the account.",
        ],
      },
      {
        heading: "Build the parcel from approved items only",
        paragraphs: [
          "The LoloBuy warehouse interface says users can select product combinations, submit a waybill, pay freight, and receive logistics tracking. Consolidation can be efficient, but the right parcel is not always the largest possible parcel. Every additional item changes weight, dimensions, value, and sometimes route eligibility.",
          "Review actual and volumetric weight. Actual weight comes from the scale; volumetric weight reflects the space occupied. A light but bulky parcel can be charged at a higher weight, and the formula can vary by route. Packaging decisions therefore involve trade-offs. Removing a shoebox may reduce volume, while keeping it may provide protection or preserve packaging that matters to the buyer.",
          "LoloBuy describes rehearsal or pre-packing as a simulation that provides packed weight and dimensions before a real parcel is submitted. It can be useful when estimates are too uncertain to choose a route. After rehearsal, recheck the available routes and live total because the result is tied to the selected contents and packing configuration.",
        ],
      },
      {
        heading: "Compare shipping routes as complete services",
        paragraphs: [
          "Do not choose a route from price alone. Compare whether it accepts the contents, destination coverage, chargeable weight, tracking, estimated transit information, protection or insurance terms, customs handling, and what happens if delivery fails. Some route notices in LoloBuy's interface warn that overseas redelivery or return may not be available, so address accuracy and active tracking can be critical.",
          "Customs outcomes are outside a spreadsheet's control. LoloBuy's parcel interface tells users to declare contents truthfully and warns that destination-country customs may inspect, tax, return, or confiscate parcels. No guide can honestly promise a tax-free or risk-free route. The useful advice is to understand the destination rules, keep records, and respond promptly to a carrier or customs request.",
          "After submission, follow the parcel record in the LoloBuy account and the carrier tracking number when it is issued. Scan timing and status wording can differ. Keep the parcel number, declared contents, payment record, address, and tracking details until delivery is complete.",
        ],
      },
      {
        heading: "A disciplined spreadsheet workflow",
        paragraphs: [
          "The best way to use a LoloBuy spreadsheet is deliberately unexciting. Discover a product, verify the destination, save the exact order evidence, wait for the warehouse, inspect the item, solve mismatches, review packed weight, compare eligible routes, and monitor the parcel. Each step answers a different question; skipping a step merely moves uncertainty further into the transaction.",
          "A spreadsheet earns trust by showing its limits. It should date price checks, link to the maintained destination, distinguish platform facts from buyer advice, and avoid permanent claims about variable fees or delivery. Used that way, it becomes a practical research tool rather than a shortcut that encourages rushed buying.",
        ],
      },
    ],
  },
  {
    slug: "lolobuy-qc-photo-checklist",
    locales: "en",
    title: "LoloBuy QC Photos: A Complete Warehouse Inspection Checklist",
    description: "A detailed method for reviewing LoloBuy warehouse photographs, documenting visible mismatches, and deciding whether to ship, request more evidence, or contact support.",
    keyword: "LoloBuy QC photos",
    readTime: "15 min read",
    checked: "Fact-checked 4 Aug 2026",
    sections: [
      {
        heading: "QC is a decision gate, not a decorative gallery",
        paragraphs: [
          "LoloBuy's public service wording says goods are checked when they reach the warehouse and that product photographs are provided. The current warehouse interface also refers to quality-inspection storage and inspection pictures. That makes QC an identifiable stage between domestic delivery and international parcel submission.",
          "The value of that stage depends on how the images are used. Quickly scrolling through photographs and deciding that an item 'looks fine' is not quality control. A useful review compares the physical item with the order evidence and looks for visible reasons to approve it, request more information, or stop the parcel decision.",
          "Start by opening the seller listing screenshot, order confirmation, selected variant, and size chart beside the warehouse photographs. Without that reference, it is easy to inspect the wrong question—for example, admiring overall appearance while missing that the labelled size or colour is different from the order.",
        ],
      },
      {
        heading: "Pass one: confirm identity and quantity",
        paragraphs: [
          "Before looking at craftsmanship, confirm that the photographed item appears to be the item ordered. Check item count, product type, colour, selected model, labelled size, and included parts. For a two-piece set, make sure both pieces are visible. For a pair of shoes, inspect both shoes and both size labels. For an accessory sold with a strap, pouch, or removable component, confirm that the expected pieces are present.",
          "Compare any product or SKU identifier shown in the account with the saved order. If the seller listing offered similar variants, identify the feature that separates them: colour of hardware, logo placement, sole colour, sleeve style, capacity, or included accessory. Use concrete attributes rather than a general resemblance.",
          "When the count or variant is wrong, document it immediately. A clear support message says what was ordered, what arrived, and which image shows the difference. Avoid long emotional descriptions; precise evidence is easier to review.",
        ],
      },
      {
        heading: "Pass two: inspect overall shape and symmetry",
        paragraphs: [
          "Zoom out before zooming in. Look at the item's silhouette, proportions, and left-to-right symmetry. Apparel should lie in a way that reveals panel shape and obvious twisting. Shoes should be compared as a pair for height, toe shape, sole alignment, and material consistency. Bags should be viewed from the front, back, sides, base, and interior when those angles are available.",
          "Packaging pressure can temporarily affect soft goods, so distinguish a crease that may relax from structural deformation, broken reinforcement, or crushed hardware. If the photographs do not show enough angles to make that distinction, the evidence is incomplete rather than automatically acceptable.",
          "At this stage, mark every concern before investigating details. A simple numbered note—left shoe shape, back print alignment, scratched buckle—makes the second review more systematic and helps frame any request for an additional image.",
        ],
      },
      {
        heading: "Pass three: check construction and visible condition",
        paragraphs: [
          "For apparel, inspect seams, stitch spacing, hems, collar shape, zipper installation, button placement, print edges, embroidery, visible stains, pulls, and holes. For footwear, check stitching, glue marks, sole attachment, toe shape, heel alignment, eyelets, lace components, and visible material damage. For bags and accessories, inspect corners, edge paint, hardware finish, strap anchors, closures, lining, and printed or stitched elements.",
          "Use the seller images as a comparison, but remember that promotional photographs may use ideal lighting or a sample item. The goal is to identify an observable mismatch or defect, not to claim laboratory precision from a compressed warehouse image.",
          "Reflections, shadows, lens distortion, and image compression can create false alarms. If a mark appears in only one photograph, compare other angles. If it remains ambiguous and would change the shipping decision, request a close-up rather than guessing.",
        ],
      },
      {
        heading: "Pass four: use measurements intelligently",
        paragraphs: [
          "Measurements are most useful when they answer a specific fit or scale question. For a T-shirt, chest width and length may matter more than a labelled size. For trousers, waist, rise, inseam, and thigh can be relevant. For a bag, width, height, and depth may determine whether it meets the intended use. For footwear, insole or outsole measurements can sometimes supplement the size label.",
          "A tape-measure photograph is evidence of an approximate dimension under the displayed setup. The tape may not be perfectly straight, the fabric may be stretched or folded, and different sellers use different measurement methods. Allow for reasonable measurement variation and compare like with like.",
          "Do not request every possible dimension by default. Identify the measurement that would cause you to keep or reject the item. Focused requests reduce confusion and produce evidence tied to a decision.",
        ],
      },
      {
        heading: "What warehouse photographs cannot prove",
        paragraphs: [
          "QC photographs are strongest for visible facts and weakest for hidden or long-term qualities. They cannot reliably prove fibre or leather composition, comfort, smell, internal structure, water resistance, electrical safety, long-term durability, or how the item behaves after washing. They also cannot establish authenticity merely because a logo, label, or box is visible.",
          "Colour is particularly uncertain. Warehouse lighting, camera processing, and your display can all shift tone. A large colour-family mismatch may be visible, but a subtle shade judgment should be described cautiously. The same principle applies to texture and sheen.",
          "Use evidence language in your notes. Say 'the left label reads size 42' instead of 'the shoes will fit.' Say 'no tear is visible in the supplied images' instead of 'the item has no defects.' This wording keeps the conclusion proportional to the evidence.",
        ],
      },
      {
        heading: "When to request more evidence",
        paragraphs: [
          "Request a focused photograph when a decisive area is missing, too distant, obstructed, or blurred. A good request identifies one location and one purpose: show both shoe size labels side by side; photograph the back print straight-on; place a tape across the chest below the armholes; show the scratched corner under neutral light.",
          "Do not ask for a generic 'better QC.' Staff need to know what evidence is required. Number the concern and refer to the existing photograph when possible. Keep the message neutral and short.",
          "If the live account displays a charge or limit for an additional service, review it before confirming. This guide does not publish a permanent free-photo count because such operational details can change.",
        ],
      },
      {
        heading: "How to document a mismatch or visible defect",
        paragraphs: [
          "Create a compact evidence packet: order number, seller URL, selected variant, screenshot from purchase time, warehouse image, and one sentence describing the difference. If the issue is measurable, include the seller measurement and the warehouse measurement without exaggerating precision.",
          "LoloBuy's service language says a buyer can contact the purchasing provider for return or exchange when warehouse goods do not meet the order, subject to the platform agreement and provider rules. That qualification is important. Eligibility may depend on seller policy, item condition, listing type, timing, and the reason for the request. Do not submit the item internationally while the issue is unresolved.",
          "Save support replies and any deadline shown in the account. If a return is approved, verify who pays domestic return freight and what status will confirm completion. A positive outcome reported by one shopper is useful evidence that a case happened, not a guarantee that a different case will be handled identically.",
        ],
      },
      {
        heading: "Use a three-outcome decision",
        paragraphs: [
          "Every review should end in one of three outcomes. Ship: the visible evidence matches the order and remaining uncertainty is acceptable. Request evidence: a decisive detail is not shown clearly enough. Contact support: the evidence shows a wrong item, wrong variant, missing part, or visible condition problem.",
          "This framework is better than crowdsourced green-light or red-light comments because it is tied to your order and risk tolerance. Someone else's tolerance for glue marks, measurement variation, packaging damage, or colour shift may be different from yours.",
        ],
        bullets: [
          "Identity: product, count, colour, model, labelled size, and included parts.",
          "Condition: stains, tears, scratches, dents, deformation, and missing hardware.",
          "Construction: symmetry, seams, prints, edges, soles, closures, and attachment points.",
          "Measurements: only the dimensions that materially affect the decision.",
          "Limits: note every important characteristic the images cannot establish.",
          "Records: save the order evidence, QC images, support messages, and final decision.",
        ],
      },
    ],
  },
  {
    slug: "lolobuy-shipping-rehearsal-weight-routes",
    locales: "en",
    title: "LoloBuy Shipping Guide: Rehearsal, Weight, Routes and Customs",
    description: "A fact-checked LoloBuy shipping guide covering consolidation, actual and volumetric weight, rehearsal packing, route comparison, customs, and parcel tracking.",
    keyword: "LoloBuy shipping guide",
    readTime: "16 min read",
    checked: "Fact-checked 4 Aug 2026",
    sections: [
      {
        heading: "International shipping is a second transaction",
        paragraphs: [
          "A product card price does not tell you what the item will cost at your door. LoloBuy's flow first moves purchased goods through domestic logistics to the warehouse. After the goods are stored and inspected, the user selects eligible items, builds a parcel, chooses a route, and pays international freight. Treating these as two transactions produces a more realistic budget and a better decision process.",
          "Before buying the product, consider whether its weight, size, packaging, or category could make international shipping disproportionate to its item price. A low-cost bulky item can be expensive to ship, while a compact item may add little to an existing parcel. The accurate decision comes later from packed or rehearsed parcel data, not from the product photograph.",
          "Keep a contingency for optional services, domestic returns, customs, and quote changes. A promotional shipping coupon is not the same as a cash balance; the live checkout must show whether it applies to the chosen route and parcel.",
        ],
      },
      {
        heading: "Approve every warehouse item before consolidation",
        paragraphs: [
          "LoloBuy's warehouse interface says users can freely choose a product combination and submit a parcel. Consolidation is useful because several stored items can share packaging and one international shipment, but combining items before QC is finished turns one unresolved problem into a parcel-level problem.",
          "Review each item for identity, variant, visible condition, and important measurements. Resolve wrong sizes, missing pieces, damage, or other mismatches first. When only approved items are selected, the parcel quote reflects goods you actually intend to keep.",
          "Check storage information in the live account as well. LoloBuy's current public interface advertises a free-storage period, but countdowns, extensions, and eligibility should be confirmed for the specific items. A guide should not encourage waiting until a deadline to make a parcel decision.",
        ],
      },
      {
        heading: "Actual weight and volumetric weight answer different questions",
        paragraphs: [
          "Actual weight is the mass measured on a scale. Volumetric weight converts the parcel's dimensions into a billing weight because carriers must price the space a package occupies. The chargeable weight may be the higher of the two, depending on the route's rule. That is why two parcels with the same scale weight can have different freight costs.",
          "Do not publish or rely on one universal volumetric divisor. Carriers and routes use different formulas, units, minimums, rounding, and billing increments. Use the calculation displayed for the live route. If the route quotes by volume, reducing empty space can matter more than removing a small amount of product weight.",
          "Bulky footwear boxes, rigid gift packaging, puffer jackets, helmets, large bags, and protective fillers can increase dimensional weight. Compact clothing and small accessories may consolidate more efficiently, but eligibility and protection still matter.",
        ],
      },
      {
        heading: "Packaging choices are trade-offs",
        paragraphs: [
          "Removing a retail box may reduce volume, but it can expose the product to crushing or remove packaging that the buyer values. Vacuum packing can reduce the volume of soft goods, while unsuitable compression could affect shape. Reinforcement adds material and weight but may protect a fragile parcel. There is no universally correct option.",
          "Decide what must arrive intact, what packaging can be discarded, and which items need separation or reinforcement. Record the chosen services before payment. If the live interface offers packaging instructions, write concise, non-conflicting requests.",
          "After any material packaging change, recheck dimensions, chargeable weight, eligible routes, and total. A quote based on the old packing assumption is no longer reliable.",
        ],
      },
      {
        heading: "What LoloBuy rehearsal does",
        paragraphs: [
          "LoloBuy describes rehearsal or pre-packing as a simulation rather than a real shipment. Selected items are packed so the account can show weight and dimensions before the user submits the actual parcel. This is most valuable when estimated dimensions create uncertainty about route or price.",
          "Use rehearsal for bulky or mixed parcels, for parcels close to a route threshold, or when removing packaging could materially change chargeable weight. Review the result rather than treating the word 'rehearsal' as a discount. The useful output is evidence: packed dimensions, weight, packing notes, and the routes available for that configuration.",
          "If the contents or packaging instructions change after rehearsal, expect the parcel data and quote to change. Rehearsal reduces uncertainty; it does not freeze carrier prices or guarantee customs outcomes.",
        ],
      },
      {
        heading: "Compare routes as complete delivery services",
        paragraphs: [
          "Start with content and destination eligibility. Then compare chargeable weight, total freight, estimated transit information, tracking, handoff carriers, protection or insurance terms, customs handling, compensation limits, and delivery exceptions. The cheapest number is not necessarily the lowest-risk or best-value route.",
          "Read every route notice visible in the live account. LoloBuy's interface warns that some routes may not offer overseas redelivery or return services. That can make address accuracy and prompt tracking especially important. Other routes may restrict certain product categories or destinations.",
          "Do not copy an old route recommendation from another buyer without checking whether the destination, contents, parcel size, and current availability match. Route names can persist while prices and operational conditions change.",
        ],
        bullets: [
          "Does the route accept every selected item and the destination postcode?",
          "Which weight is chargeable, and how does the route round it?",
          "What tracking is provided and which carrier handles final delivery?",
          "What protection, compensation, redelivery, or return limits apply?",
          "What customs or declaration instructions are shown at submission?",
        ],
      },
      {
        heading: "Customs declarations must be truthful",
        paragraphs: [
          "LoloBuy's parcel interface tells users to declare parcel contents truthfully under the destination country's customs rules. It warns that customs may inspect a parcel and that duties, return, or confiscation can occur. The platform also states that it cannot control customs outcomes.",
          "No independent guide can make a route tax-free, customs-proof, or risk-free. Avoid advice that depends on false descriptions or unrealistic values. Use standard, accurate product categories, keep order and payment evidence, and understand the import rules that apply at the destination.",
          "If customs or the carrier requests information, respond within the stated deadline. Keep the parcel number, contents list, declared value, invoice or payment record, and tracking details together. Delayed responses can turn a manageable request into a failed delivery.",
        ],
      },
      {
        heading: "Check the address as if redelivery does not exist",
        paragraphs: [
          "Enter a complete recipient name, street address, unit number, city, region, postcode, country, and reachable phone number in the format required by the destination. Check spelling and numbers character by character. An auto-filled address is not proof that every field is correct.",
          "Because some route notices warn that overseas redelivery or return may be unavailable, monitor the parcel instead of waiting for a delivery problem. When a carrier number is issued, follow both the LoloBuy parcel record and the carrier record. Status wording and scan times may differ, especially during handoffs.",
          "If tracking shows an exception, contact the relevant carrier or LoloBuy support with the parcel number and screenshot. Do not wait until the parcel has completed a return path before asking what action is required.",
        ],
      },
      {
        heading: "Keep evidence until delivery is complete",
        paragraphs: [
          "Save the selected items, QC decision, rehearsal result, packaging choices, route, address, declaration, payment, parcel number, and tracking number. Screens can change after submission, and a concise record makes any support request easier to understand.",
          "When the parcel arrives, photograph the exterior before opening if damage is visible. Compare the contents with the stored-item list and retain packaging until the contents are checked. Any claim process is governed by the live route and service terms, so act within the displayed deadline rather than relying on a general guide.",
        ],
      },
      {
        heading: "The final parcel decision",
        paragraphs: [
          "Submit only when every item is approved, packed weight and dimensions are understood, the route accepts the contents and destination, the address and declaration are correct, and the live total is acceptable. Shipping research should narrow uncertainty, not hide it behind an estimated number.",
          "A useful LoloBuy shipping guide therefore avoids permanent price tables and guaranteed delivery claims. It teaches the reader how to interrogate the live quote: what is being charged, why the weight is chargeable, which limitations apply, and which records should be saved. That method remains useful even when routes and prices change.",
        ],
      },
    ],
  },
  {
    slug: "lolobuy-total-cost-fees-checklist",
    title: "LoloBuy Total Cost: A Two-Payment Fees Checklist for 2026",
    description: "Calculate LoloBuy total cost across item payment, China delivery, warehouse services, international freight, payment fees, and import charges.",
    keyword: "LoloBuy total cost",
    readTime: "13 min read",
    checked: "Fact-checked 10 Aug 2026",
    published: "2026-08-10",
    modified: "2026-08-10",
    locales: "en",
    processSteps: ["Item price", "China delivery", "Warehouse decisions", "International freight", "Import and delivery"],
    processAlt: "LoloBuy total-cost sequence: item price, Chinese domestic delivery, warehouse decisions, international freight, and destination charges",
    sources: [
      { label: "How to purchase on LoloBuy", url: "https://www.lolobuy.com/helpCenter/1242296499766165", checked: "10 Aug 2026" },
      { label: "Delivery fee for several items from one seller", url: "https://www.lolobuy.com/helpCenter/1242296838456383", checked: "10 Aug 2026" },
      { label: "Why a paid order may require an outstanding balance", url: "https://www.lolobuy.com/helpCenter/1242296867095670", checked: "10 Aug 2026" },
      { label: "Estimated weight and real weight", url: "https://www.lolobuy.com/helpCenter/1242300798075086", checked: "10 Aug 2026" },
      { label: "Supplemental parcel payments", url: "https://www.lolobuy.com/helpCenter/1242300801155283", checked: "10 Aug 2026" },
      { label: "Packaging methods", url: "https://www.lolobuy.com/helpCenter/1242300751675537", checked: "10 Aug 2026" },
      { label: "MyBank payment announcement for Italy", url: "https://www.lolobuy.com/noticeDetail?id=679826937547894", checked: "10 Aug 2026" },
    ],
    sections: [
      {
        heading: "The product-card price is only the first line",
        paragraphs: [
          "A LoloBuy product link can show what a seller currently asks for an item and variant. It cannot answer the larger question most international buyers care about: what will the order cost at the door? Several parties control different parts of that total—the seller, Chinese carrier, warehouse, international logistics provider, payment channel, and destination authorities.",
          "LoloBuy's official purchase guide separates the process into an item payment and a later international-parcel payment. At the first checkout, the buyer pays for the product and Chinese local delivery. After the item reaches the warehouse and the buyer selects goods for a parcel, LoloBuy collects an international shipping deposit and a customs-related charge shown at submission. The logistics provider's final packed weight and dimensions can then create a refund or an additional payment.",
          "That structure makes a permanent all-in price table misleading. A better LoloBuy total cost estimate is a worksheet with dated evidence, a realistic range, and a blank space for costs that are not known yet. The objective is not to predict the final cent before ordering. It is to prevent a cheap item from becoming an unexpectedly expensive parcel.",
        ],
      },
      {
        heading: "Stage one: price the item and China-side delivery",
        paragraphs: [
          "Start with the exact seller listing, selected colour or model, size, quantity, and price at the moment of checkout. Save a screenshot and the original URL. A spreadsheet card or converted USD figure is a discovery reference; the seller's live page and the LoloBuy order confirmation control the actual item-side amount. If the order uses a manual form, copy every option precisely and keep the seller's measurement or configuration notes.",
          "Add Chinese domestic delivery as its own line. LoloBuy's help centre says that several items from one seller can be charged one domestic delivery fee when they are submitted and checked out together, although an overweight seller parcel can still produce a balance. This is a conditional saving, not a general promise that every item in a multi-seller basket shares one fee. Group by seller and checkout event when you record it.",
          "Do not close the first-payment column immediately after authorisation. Another official help page explains that a paid shopping-agent order may require an outstanding balance when the seller's price changes or when Chinese domestic delivery differs from the submitted amount. Treat any request as a reconciliation task: compare the seller listing, order number, reason, and revised line item before paying. Never describe a price change as a platform fee unless the account actually labels it that way.",
        ],
        bullets: [
          "Live item price for the exact variant and quantity.",
          "Chinese domestic delivery, recorded per seller and checkout.",
          "Any confirmed seller-price or domestic-freight balance.",
          "Currency and payment-channel amount shown before authorisation.",
        ],
      },
      {
        heading: "The warehouse is a cost decision, not free time",
        paragraphs: [
          "Warehouse arrival changes what you know. The item can be weighed, photographed, and compared with the order evidence. This is when a buyer decides whether the product is acceptable, needs more evidence, should be returned if eligible, or can join a parcel. Optional services and packaging instructions may add cost, but skipping a decision-critical check can be more expensive if a wrong or damaged item is sent internationally.",
          "Keep warehouse costs separate from freight. Record paid extra photographs, measurements, special handling, packaging removal, reinforcement, insurance or protection only when they appear in the live account. LoloBuy's purchase guide lists package removal, reinforcement and insurance as additional parcel services, while its packaging guidance distinguishes volume-focused from actual-weight packing.",
          "The rational question is whether a service changes the decision or the chargeable parcel. Removing a large shoe box may reduce volume, but it can reduce protection and may affect return options. Reinforcement can add weight while reducing damage risk. A useful worksheet records the reason for the choice beside the charge rather than automatically selecting every option or removing every box.",
        ],
      },
      {
        heading: "Stage two: treat international freight as a deposit first",
        paragraphs: [
          "LoloBuy's current purchase guide describes the parcel payment as an international shipping fee deposit calculated from estimated weight, the selected shipment method, and the destination. It also says the final shipping fee is calculated from package size and weight verified by the shipping company. That means the number visible before packing is evidence for planning, not necessarily the final landed freight amount.",
          "Record the route, destination, estimated weight, estimated dimensions if shown, billing unit, deposit, and selected parcel services. Do not copy a per-kilogram figure from another buyer whose destination, contents, packaging, route or date differs. Two parcels with the same product value can have very different freight because international delivery prices the shipment, not the retail value alone.",
          "Evaluate a route beyond price. Eligibility, tracking, compensation, insurance, redelivery, return handling and customs instructions can change its practical value. The lowest deposit is not cheaper if it excludes the contents, creates unacceptable risk, or cannot deliver to the actual postcode.",
        ],
      },
      {
        heading: "Reconcile estimated, actual and volumetric weight",
        paragraphs: [
          "LoloBuy's weight explanation distinguishes estimated weight from the real packed weight. The estimate combines warehouse item information with a packaging assumption. The real weight is measured after parcel submission and packing. Removing original packaging, compressing soft goods, using a different carton or adding reinforcement can change the final result.",
          "The same help page explains volumetric weight: a carrier can convert parcel dimensions into a billing weight for bulky, light shipments. It publishes examples of different divisors for several routes, but those examples should not be treated as permanent universal rules. Use the formula, rounding method and billing increment displayed for the route in the live checkout. The chargeable weight may be the greater of actual and volumetric weight.",
          "LoloBuy says an overpayment against final freight is returned to the user's account, while its supplemental-payment page explains that a shortfall can generate an additional amount. This is why the worksheet needs three separate fields—deposit, final freight, and adjustment. A refund to an account balance is not the same as an immediate reversal to the original card or bank account, and a supplemental request should be matched to the parcel record before payment.",
        ],
      },
      {
        heading: "Payment-method fees belong beside each payment",
        paragraphs: [
          "A two-stage process can involve a payment channel more than once: once for the item-side order and again for the international parcel. Record the base amount, settlement currency, displayed percentage charge, displayed fixed charge, and the amount your bank or card actually debits for each transaction. If the platform credits a wallet or balance, also record the credited amount. This reveals conversion spread and issuer charges that a product-price column cannot show.",
          "LoloBuy's July 7, 2026 announcement is a useful example of why fees must be scoped. It introduced MyBank for eligible users in Italy paying in euros and stated a 1.65% transaction fee plus a fixed CNY 1.71 processing fee at launch. Those figures describe one country, currency and payment method on a stated date. They are not a universal LoloBuy service fee and should be rechecked in the live checkout before use.",
          "Apply the same discipline to coupons and credits. Record a discount only after checkout accepts it, and keep shipping coupons separate from item discounts. A headline coupon value may represent several conditional coupons rather than cash. The final comparison is the amount paid after eligibility rules, expiry, minimum spend and route restrictions are applied.",
        ],
      },
      {
        heading: "Leave room for returns, tax and delivery problems",
        paragraphs: [
          "A landed-cost plan needs a contingency column because not every possible charge belongs to LoloBuy. A seller return can involve Chinese domestic return freight or handling. Destination VAT, sales tax, duty, brokerage or carrier collection depends on the country, product, declared information and route. A delivery exception can create storage, redelivery or return costs. None of these should be guessed as zero merely because they are absent from the first checkout.",
          "Use truthful descriptions and values and consult the current destination rules. Keep the order confirmation, payment records, parcel contents, declaration, freight adjustment and carrier number together. If customs or a carrier asks for evidence, a complete record is more useful than a spreadsheet containing only product links and converted prices.",
          "Contingency is not a prediction that something will go wrong. It is a decision threshold. Before placing the item order, decide the maximum delivered total you would accept. If the later parcel quote pushes the estimate beyond that limit, you can reconsider the parcel composition, packaging or route using real warehouse evidence instead of paying because money has already been spent.",
        ],
      },
      {
        heading: "Build a landed-cost worksheet that can be audited",
        paragraphs: [
          "Use one row per item for seller-side costs and one linked parcel record for shared international costs. Do not force a precise per-item freight allocation before the parcel is packed. If you need category profitability or a personal cost comparison later, allocate final shared costs by a consistent method—such as chargeable weight contribution—and label the method. The operational total should still reconcile to the actual parcel invoice.",
          "Add a source and checked date beside every variable figure. Use the seller URL for item price, the order record for domestic delivery, the warehouse record for weight and services, the parcel record for freight, the payment statement for the real debit, and destination documents for import charges. This turns the sheet into an evidence trail rather than guesses.",
        ],
        bullets: [
          "Item: seller, URL, variant, quantity, live price and screenshot date.",
          "China side: domestic delivery, seller adjustment, return contingency and warehouse services.",
          "Parcel: selected items, packing choices, route, deposit, final chargeable weight and adjustment.",
          "Payment: settlement currency, platform-displayed fee, issuer charge, credited amount and coupon actually applied.",
          "Destination: tax, duty, brokerage, carrier charge and final delivered date.",
          "Control: evidence link, checked date, maximum acceptable total and unresolved assumptions.",
        ],
      },
      {
        heading: "The honest answer to ‘How much does LoloBuy cost?’",
        paragraphs: [
          "The defensible answer is a structure, not a universal percentage: item price plus Chinese domestic delivery and confirmed item-side adjustments; then decision-relevant warehouse services; then international freight based on the packed parcel and live route; then payment-channel and destination charges that actually apply. Subtract only discounts that the checkout accepts, and reconcile any freight refund or supplemental payment after packing.",
          "This method is less dramatic than publishing a single cheap number, but it is more useful. It lets a buyer compare alternatives before committing, recognize which party controls each cost, and update only the line that changed. Most importantly, it prevents the spreadsheet price from being mistaken for a delivered quote. Check every live amount again before authorising payment because platform methods, carrier rules and destination charges can change after this article's August 10, 2026 verification date.",
        ],
      },
    ],
  },
  {
    slug: "lolobuy-return-refund-process",
    title: "LoloBuy Return and Refund Process: A Status-by-Status Guide for 2026",
    description: "A fact-checked guide to LoloBuy cancellations, warehouse returns, exchanges, refund timing, seller approval, fees, deadlines, and evidence.",
    keyword: "LoloBuy return and refund process",
    readTime: "12 min read",
    checked: "Fact-checked 11 Aug 2026",
    published: "2026-08-11",
    modified: "2026-08-11",
    locales: "en",
    processSteps: ["Check status", "Confirm eligibility", "Save evidence", "Submit request", "Reconcile refund"],
    processAlt: "LoloBuy return and refund process: check order status, confirm seller eligibility, save evidence, submit the request, and reconcile the refund",
    sources: [
      { label: "Return the Product: status, deadlines and refund timing", url: "https://www.lolobuy.com/helpCenter/1242296772133891", checked: "11 Aug 2026" },
      { label: "Terms of Promised Returns with no reasons", url: "https://www.lolobuy.com/helpCenter/1242296939447441", checked: "11 Aug 2026" },
      { label: "Can shopping-agent orders be cancelled or refunded?", url: "https://www.lolobuy.com/helpCenter/1242297000395937", checked: "11 Aug 2026" },
      { label: "Handling defective products and quality issues", url: "https://www.lolobuy.com/helpCenter/1242297021695144", checked: "11 Aug 2026" },
      { label: "How to purchase on LoloBuy", url: "https://www.lolobuy.com/helpCenter/1242296499766165", checked: "11 Aug 2026" },
    ],
    sections: [
      {
        heading: "First identify the transaction you are trying to reverse",
        paragraphs: [
          "A cancellation, return, exchange and refund are not four names for the same event. A cancellation tries to stop an order before the seller-side purchase or shipment is complete. A return sends a received item back to the seller. An exchange adds another seller decision and another domestic delivery cycle. A refund is the money movement that may follow a successful cancellation or return. The correct LoloBuy action therefore starts with the current order status, not with a generic support message.",
          "LoloBuy's official return guide directs users to My LoloBuy and My Orders to inspect that status. Its current status examples include Awaiting Payment, Not Processed, Under Review, In Process, Ordered, Shipped, Delivered, Arrived at Warehouse and Stored. Labels can change with interface updates, so use the wording shown in the live account and save a screenshot before acting. The status determines whether the platform can stop its own processing, must negotiate with a seller, or must wait for the item to enter warehouse storage.",
          "This distinction matters because the word 'refund' can make a slow seller-side return sound like an instant card reversal. The platform may acknowledge an application quickly while the seller still has to accept a cancellation, receive a returned product or release funds. Plan around the complete chain rather than one button click.",
        ],
      },
      {
        heading: "Check eligibility before ordering, not after a QC surprise",
        paragraphs: [
          "Open the original seller listing and look for the return or exchange rule attached to the exact product and variant. LoloBuy's guide says that shipped, delivered, warehouse-arrived or stored items should be checked against the purchased product link to see whether unconditional returns or exchanges are supported. It also says the product must be capable of being returned without affecting the seller's ability to resell it. A category-wide assumption is not enough; seller terms and product condition control the practical outcome.",
          "The official five-day guarantee article describes eligible and ineligible products and says a return or exchange still depends on the seller agreeing. It also lists packaging requirements for some product types. This makes original boxes, tags, accessories and protective materials decision-relevant. Removing packaging to reduce parcel volume can be sensible only after the item has passed QC and the return decision is closed. Do not discard evidence or packaging while a mismatch is unresolved.",
          "Some orders carry stricter limits. LoloBuy's current return page says second-hand purchasing and warehouse treasure-hunt orders do not support returns. The platform's manual-order warning also says products from certain third-party channels may not offer the same return or exchange service as mainstream marketplaces. Treat those orders as higher-commitment purchases and verify the live warning before payment.",
        ],
      },
      {
        heading: "Use the stored date as a real deadline",
        paragraphs: [
          "For an item already moving through Chinese domestic logistics, the warehouse may be the first practical point at which a normal return request becomes available. LoloBuy's current guide says orders marked Shipped, Delivered or Arrived at Warehouse need to reach Stored status before the user applies. It then states that the application should be made within five days after the storage date and that late applications will not be accepted.",
          "A separate official guarantee article expresses the same window more precisely: the clock starts from the next hour after the status changes to Stocked in, and five days equals 120 hours. Because interface wording and timestamps can vary, do not calculate the last safe moment from memory. Record the stored timestamp, inspect the item promptly, and submit well before the displayed deadline. A support conversation that begins after the window is not a substitute for an in-account application filed on time.",
          "Do not submit the item in an international parcel while the seller-side problem is open. Once it leaves the warehouse, the cost, parties and available remedies change. The best time to solve a wrong colour, incorrect size, missing unit or visible defect is while the item and its packaging remain in China and the warehouse evidence can still be tied directly to the order.",
        ],
      },
      {
        heading: "Build a return request that another person can verify",
        paragraphs: [
          "A short evidence packet is more useful than an emotional paragraph. Save the order number, seller URL, selected variant, order confirmation, stored timestamp and the relevant warehouse photographs. Write one sentence describing what was expected and one sentence describing what the evidence shows. If the issue is measurable, include the seller's measurement and the warehouse measurement. If the issue is visible damage, identify the exact photo and area rather than claiming that the whole item is unusable.",
          "Choose the return reason that matches the evidence. The official guarantee page specifically tells users to select responsibility according to the actual situation. That decision can affect shipping costs and how the seller evaluates the request. A no-fault change of mind is different from a seller sending the wrong product, and both are different from a feature that photographs cannot prove. Do not describe a colour shift caused by lighting as a confirmed defect without stronger evidence.",
          "Keep screenshots of the submitted application, any seller response, return tracking number, warehouse or service charges, and the final account transaction. If a support agent asks for clarification, reply within the same order context. A compact chronological record makes it easier to see whether the case is waiting on LoloBuy processing, seller consent, domestic return delivery or the seller's refund.",
        ],
        bullets: [
          "Order number, live status and stored timestamp.",
          "Seller URL, ordered variant, quantity and amount paid.",
          "Warehouse photos or measurements showing the claimed mismatch.",
          "Requested outcome: cancel, return, exchange or partial resolution.",
          "Application time, reply, return tracking and final balance entry.",
        ],
      },
      {
        heading: "Read response times as service stages, not guarantees",
        paragraphs: [
          "LoloBuy's August return guide publishes different response targets by order status. It says applications for Awaiting Payment, Not Processed or Under Review orders receive an immediate response; In Process orders receive a response within 24 hours; Ordered purchases within 72 hours; and Shipped, Delivered, Arrived at Warehouse or Stored orders within 48 hours. These figures describe the platform's handling of the request before or while it communicates with the seller.",
          "The same page separates response time from estimated refund arrival. For early statuses it lists immediate, 24-hour or 72-hour refund estimates. For shipped through stored statuses, it says timing depends on the seller and gives an approximate range of seven to fifteen days. An older official cancellation FAQ describes the same dependency: after a warehouse return, money is credited only after the seller receives the item and refunds the purchasing side.",
          "Use these numbers to decide when to follow up, not to promise a completion date. Weekends, seller response, domestic return transit, item inspection and dispute evidence can extend the case. When following up, identify the last completed stage and its timestamp. 'Return delivered to seller on this date; refund not yet credited' is more actionable than 'my refund is late.'",
        ],
      },
      {
        heading: "Calculate the cost of a no-fault return before submitting",
        paragraphs: [
          "A return can recover the product amount and still cost money. LoloBuy's five-day guarantee article describes an unconditional return or exchange cost as shipping to the seller, shipping associated with the seller side, and a return or exchange service fee. It also says the user normally bears shipping when there is no quality issue, while the seller may bear it for an accepted quality issue. Actual responsibility and amounts must be confirmed in the live request because the seller, product and reason matter.",
          "The same official page warns that a product advertised with free seller shipping can still create two-way shipping costs on return, and that seller shipping insurance may not produce a successful claim for the purchasing account. It also tells users to maintain enough LoloBuy balance to cover return shipping and service charges. Before approving the request, compare the expected refund with all displayed return costs and with the value of keeping the item.",
          "For an exchange, include another delivery cycle and more time. The official cancellation FAQ says exchanges can involve two domestic shipments and gives a general seven-to-twenty-day reference depending on the seller. An exchange is therefore most defensible when the replacement is important, clearly available and worth the extra delay. If timing is critical, a refund and new order may be easier to audit, but only the live seller options can confirm what is possible.",
        ],
      },
      {
        heading: "Reconcile the refund to the place it actually arrives",
        paragraphs: [
          "LoloBuy's current return guide says that, after a successfully paid return request is accepted, the refund is credited to the user's available LoloBuy account balance. That is not the same as an immediate reversal to the original card, bank account or payment wallet. Check the bill or balance ledger for the amount, currency and order reference before treating the case as complete.",
          "Compare the refund with the amount actually paid for the product, then list any non-refundable domestic delivery, service or return costs separately. The five-day guarantee page says the refund or exchange total is based on the product price actually paid. If a coupon, seller adjustment or currency conversion was involved, do not expect the original product-card number to reconcile automatically. Use the order ledger and final balance entry as the accounting evidence.",
          "If the amount differs, ask for a line-by-line explanation tied to the order rather than assuming a hidden percentage fee. Keep the response with the seller decision, return tracking and account entry. A complete return record should answer five questions: what was paid, why the order was reversed, what costs were charged, where the refund was credited, and what amount remains available for withdrawal or future use under the live account rules.",
        ],
      },
      {
        heading: "A practical decision rule for LoloBuy returns",
        paragraphs: [
          "Cancel as early as possible when the order itself is wrong. At the warehouse, inspect immediately and preserve packaging until the item passes. If there is a mismatch, submit a factual request within the five-day window and keep the item out of an international parcel. Confirm seller eligibility, likely responsibility, displayed fees and the destination of the refund before agreeing to the return or exchange.",
          "The most important limitation is that LoloBuy facilitates a purchase from third-party sellers; it does not make every seller policy identical. A platform response is not seller approval, an estimated timeline is not a guarantee, and an account-balance credit is not necessarily a payment-method reversal. The strongest case combines a timely application with clear order evidence and a product that remains eligible for resale.",
          "Recheck the live help page and account before acting because statuses, time limits, fees and seller rules can change after this article's August 11, 2026 verification date. This guide is a decision framework, not a substitute for the terms attached to a specific transaction.",
        ],
      },
    ],
  },
];

export function findEditorialArticle(slug: string) {
  return editorialArticles.find((article) => article.slug === slug);
}

export function isEditorialArticleAvailable(article: EditorialArticle, locale: string) {
  return article.locales !== "en" || locale === "en";
}
