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
];

export function findEditorialArticle(slug: string) {
  return editorialArticles.find((article) => article.slug === slug);
}
