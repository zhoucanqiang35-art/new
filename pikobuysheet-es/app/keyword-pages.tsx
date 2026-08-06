import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "./site-chrome";

const SITE_ORIGIN = "https://pikobuysheet.es";
const PIKOBUY_GUIDE = "https://www.pikobuy.com/guide";
const SHIPPING_ESTIMATOR = "https://www.pikobuy.com/shipping-cost";
const SHIPPING_POLICY = "https://www.pikobuy.com/protocol/shipping";
const RETURNS_POLICY = "https://www.pikobuy.com/protocol/returns";

type Section = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type KeywordPage = {
  slug: string;
  title: string;
  shortTitle: string;
  intent: string;
  description: string;
  cardDescription: string;
  keywords: string[];
  intro: string;
  checklist: string[];
  sections: Section[];
  sources: { label: string; href: string; note: string }[];
  related: string[];
  catalogueHref?: string;
};

export const keywordPages: KeywordPage[] = [
  {
    slug: "pikobuy-spreadsheet-shoes",
    title: "PikoBuy Spreadsheet Shoes: Find, Size and QC Checklist for 2026",
    shortTitle: "PikoBuy spreadsheet shoes",
    intent: "SHOES",
    description: "Browse PikoBuy spreadsheet shoes with a practical checklist for source links, sizing evidence, warehouse QC photos, packaging and shipping inputs.",
    cardDescription: "A shoe-specific workflow for sizing evidence, pair symmetry, soles, labels and parcel planning.",
    keywords: ["PikoBuy spreadsheet shoes", "PikoBuy shoe finds", "PikoBuy shoes QC", "PikoBuy spreadsheet 2026"],
    intro: "A shoe row is useful only when it helps you reach the right source, confirm the intended size system and prepare a category-specific warehouse photo review. This guide explains the checks that matter for footwear without treating a spreadsheet link, popularity count or photograph as a quality guarantee.",
    checklist: [
      "Open the exact source and confirm the model, colourway and available size system.",
      "Compare foot or insole measurements when available; do not rely on one size label alone.",
      "Ask whether warehouse images show both shoes, outsole, heel, toe box, labels and packaging.",
      "Keep item price separate from domestic delivery, optional photos, packaging and international freight.",
    ],
    sections: [
      {
        title: "Start with the exact shoe source, not the card image",
        paragraphs: [
          "Treat the spreadsheet card as an index. Open the precise product destination and check whether its title, images, colour and options still describe the same pair. A live link does not prove inventory, and an old thumbnail does not prove that the seller still offers the same batch or size range.",
          "Record the product ID or source URL before comparing alternatives. If two rows appear similar, compare the information that can actually affect the order: available variants, size chart, material wording, domestic delivery terms and the photographs shown on the current source page.",
        ],
      },
      {
        title: "Build a sizing decision from measurements",
        paragraphs: [
          "Footwear labels vary by market and seller. A practical shortlist begins with the wearer's measured foot length and, when the source provides it, the seller's recommended internal or insole length. Note whether the listing uses EU, US, UK or centimetre-based sizing and whether the recommendation refers to foot length or the inside of the shoe.",
          "If the chart is incomplete or ambiguous, keep that uncertainty visible. Do not convert one chart automatically or assume that another seller's sizing applies. The useful question for an agent or seller is specific: which listed size corresponds to a stated foot length, and is the measurement foot length or internal length?",
        ],
      },
      {
        title: "Use warehouse QC photos for visible checks",
        paragraphs: [
          "PikoBuy's public guide says warehouse staff check arrivals, take confirmation photographs and look for visible defects. For shoes, the basic review should compare the left and right shoe, toe shape, heel height, outsole pattern, major seams, colour consistency, visible labels and included accessories.",
          "Photos cannot establish long-term durability, internal construction, comfort or professional authenticity. If the standard angles do not show the detail needed for your decision, decide whether an additional detail photograph or measurement is worth requesting before the return window becomes a problem.",
        ],
        bullets: ["Both shoes in the same frame", "Toe boxes and heels from matching angles", "Outsoles and visible size labels", "Box, spare laces and listed accessories", "A measurement when sizing remains uncertain"],
      },
      {
        title: "Plan packaging, weight and the return decision",
        paragraphs: [
          "Shoes can create a very different parcel depending on whether the box is retained and how the pair is protected. PikoBuy's estimator asks for destination, product type, weight and parcel dimensions, so the product price is not the landed cost. Compare routes only after the warehouse record provides realistic parcel inputs.",
          "PikoBuy's returns page describes a five-day, 120-hour request window after the order becomes Warehoused, counted from the next hour. Timing alone does not guarantee approval: seller support, product condition, packaging and possible domestic shipping or service fees also matter. Review the photographs and decide promptly.",
        ],
      },
    ],
    sources: [
      { label: "PikoBuy beginner guide", href: PIKOBUY_GUIDE, note: "Published ordering, warehouse inspection and shipping stages." },
      { label: "PikoBuy shipping estimator", href: SHIPPING_ESTIMATOR, note: "Destination, type, weight and parcel dimension inputs." },
      { label: "PikoBuy returns policy", href: RETURNS_POLICY, note: "Eligibility, request timing, packaging and fee conditions." },
    ],
    related: ["pikobuy-spreadsheet-qc", "pikobuy-spreadsheet-shipping-guide", "how-to-use-pikobuy-spreadsheet"],
    catalogueHref: "https://findspreadsheet.com/shoes/",
  },
  {
    slug: "pikobuy-spreadsheet-hoodies",
    title: "PikoBuy Spreadsheet Hoodies: Measurements, QC and Shipping Guide",
    shortTitle: "PikoBuy spreadsheet hoodies",
    intent: "HOODIES",
    description: "Use a PikoBuy spreadsheet hoodie checklist for measurements, fabric and print details, warehouse QC photographs and parcel-volume planning.",
    cardDescription: "Measure first, then review fabric, print or embroidery, ribbing, seams and parcel volume.",
    keywords: ["PikoBuy spreadsheet hoodies", "PikoBuy hoodie finds", "PikoBuy hoodie QC", "PikoBuy clothing spreadsheet"],
    intro: "Hoodie listings are easy to browse and easy to misread. A useful row should lead to the exact source, preserve the seller's measurement evidence and prepare you to compare visible construction at the warehouse. The goal is a defensible shortlist, not a promise that a popular find will fit or feel the way you expect.",
    checklist: [
      "Compare garment measurements with a hoodie you already own.",
      "Confirm colour, size, fabric wording and print or embroidery option on the live source.",
      "Use QC photos to review alignment, seams, ribbing, hood shape and obvious marks.",
      "Expect thick garments and multiple items to affect parcel dimensions as well as weight.",
    ],
    sections: [
      {
        title: "Use the row to reach current options",
        paragraphs: [
          "Open the source page and verify that the linked product is still a hoodie, that the shown colour and design remain selectable, and that the current price context has not changed. Save the exact source URL and selected variant rather than relying on a screenshot of the spreadsheet.",
          "When several sellers appear to offer the same design, compare evidence instead of assuming the highest price or most-viewed row is better. Useful evidence includes a complete measurement chart, clear detail photos, variant-specific images and an understandable description of what is included.",
        ],
      },
      {
        title: "Measure a garment, not the letter on the tag",
        paragraphs: [
          "Measure the chest width, body length, shoulder width and sleeve length of a hoodie whose fit you know. Compare those numbers with the seller chart and note how each measurement was taken. A familiar M or L is not enough when charts, intended fit and production tolerances differ.",
          "If the listing gives only model height and weight, treat that as context rather than a personal fit guarantee. Oversized, cropped and heavyweight cuts can change how the same nominal size feels. Keep one or two acceptable measurement ranges in your notes before ordering.",
        ],
      },
      {
        title: "Review the parts warehouse photos can show",
        paragraphs: [
          "After arrival, compare the ordered colour and size with the warehouse record. Look at print or embroidery placement, spelling, symmetry, visible fabric texture, seam direction, ribbing, cuffs, hood shape, drawstrings, pocket alignment and obvious stains or holes.",
          "Lighting may change colour and a photograph cannot prove fabric composition, exact weight, shrinkage or durability. Request a measurement or closer detail only when it resolves a real decision. More photographs are not automatically better if they do not answer the remaining question.",
        ],
        bullets: ["Front and back alignment", "Tag and ordered size", "Chest or length measurement when needed", "Cuffs, ribbing and pocket symmetry", "Close view of print or embroidery"],
      },
      {
        title: "Account for volume before parcel submission",
        paragraphs: [
          "A folded hoodie can be bulkier than its product price suggests, especially when several thick garments are consolidated. PikoBuy's shipping estimate requires dimensions as well as weight. Use warehouse data and the selected packaging plan before comparing routes.",
          "If the item is wrong or visibly defective, read the current return terms immediately. The public 120-hour request window is only one condition, and user-requested changes to packaging or tags may affect whether a product remains marketable for return.",
        ],
      },
    ],
    sources: [
      { label: "PikoBuy beginner guide", href: PIKOBUY_GUIDE, note: "Product selection, payment and warehouse photo stages." },
      { label: "PikoBuy shipping estimator", href: SHIPPING_ESTIMATOR, note: "Parcel dimensions and weight are separate inputs." },
      { label: "PikoBuy returns policy", href: RETURNS_POLICY, note: "Current timing, eligibility and condition rules." },
    ],
    related: ["pikobuy-spreadsheet-qc", "pikobuy-spreadsheet-shipping-guide", "pikobuy-spreadsheet-shoes"],
    catalogueHref: "https://findspreadsheet.com/hoodies-sweaters/",
  },
  {
    slug: "pikobuy-spreadsheet-bags",
    title: "PikoBuy Spreadsheet Bags: Source, QC Hardware and Parcel Checklist",
    shortTitle: "PikoBuy spreadsheet bags",
    intent: "BAGS",
    description: "Research PikoBuy spreadsheet bag finds with a focused checklist for dimensions, closures, straps, hardware, lining, included pieces and shipping volume.",
    cardDescription: "Check dimensions, straps, closures, hardware, lining, included pieces and shape protection.",
    keywords: ["PikoBuy spreadsheet bags", "PikoBuy bag finds", "PikoBuy bag QC", "PikoBuy accessories spreadsheet"],
    intro: "Bag listings combine visible design details with practical questions about size, hardware, included pieces and parcel volume. This page turns the source row into a review plan while keeping material, authenticity and long-term durability claims within what the evidence can support.",
    checklist: [
      "Confirm dimensions and compare them with an object you know, not just a model photo.",
      "Record the selected colour, size, strap option and included accessories.",
      "Inspect closure alignment, hardware finish, edge paint, stitching, lining and obvious shape damage.",
      "Decide whether protective packaging is worth the extra parcel volume for the item.",
    ],
    sections: [
      {
        title: "Resolve the exact variant and included pieces",
        paragraphs: [
          "Open the current source and identify the exact size, colour and option represented by the spreadsheet row. A listing may combine several dimensions or bundles, so record whether the selected option includes a detachable strap, pouch, dust cover or other accessory rather than assuming every photograph applies.",
          "Translate centimetre dimensions into a practical comparison with an item you already use. Width, height and depth matter more than labels such as small or large. If capacity is important, define the objects that need to fit before you treat the row as a candidate.",
        ],
      },
      {
        title: "Create a visible-detail QC plan",
        paragraphs: [
          "Warehouse photographs can help compare front and back shape, handle placement, closure alignment, visible hardware, seams, edge finish, lining, printed text and obvious surface marks. Ask for the bottom, interior or hardware close-up only if the standard set does not show it.",
          "A photograph cannot confirm an undisclosed material composition, long-term plating wear, water resistance or professional authenticity. Keep those claims out of the decision unless the current source provides verifiable evidence and the warehouse photo can actually test it.",
        ],
        bullets: ["Front, back, sides and base", "Interior and lining", "Zips, clasps and other closures", "Straps, handles and attachments", "All pieces named in the selected option"],
      },
      {
        title: "Protect shape without ignoring shipping volume",
        paragraphs: [
          "Protective fill, a box or reinforced packaging may reduce the risk of crushing, but it can also increase parcel dimensions. The PikoBuy estimator asks for both weight and dimensions, so compare packaging choices with the bag's structure and value rather than applying the same rule to every item.",
          "When consolidating, consider whether rigid items could press against the bag or whether exposed hardware could mark another product. This is an editorial packing question, not a route guarantee; the final options and constraints belong to the live parcel screen.",
        ],
      },
      {
        title: "Make the decision while the evidence is current",
        paragraphs: [
          "If the wrong colour, size or included piece arrives, document the mismatch from the order and warehouse record. PikoBuy's public returns terms say requests are time-limited and remain subject to seller, condition, packaging and fee rules.",
          "Keep the bag only when the current source, selected variant and visible warehouse evidence agree closely enough for your own risk tolerance. A popular spreadsheet entry is a discovery signal, not a substitute for this review.",
        ],
      },
    ],
    sources: [
      { label: "PikoBuy beginner guide", href: PIKOBUY_GUIDE, note: "Warehouse inspection and optional packaging context." },
      { label: "PikoBuy shipping estimator", href: SHIPPING_ESTIMATOR, note: "Weight and three parcel dimensions are required inputs." },
      { label: "PikoBuy returns policy", href: RETURNS_POLICY, note: "Request window and marketable-condition rules." },
    ],
    related: ["pikobuy-spreadsheet-qc", "pikobuy-spreadsheet-shipping-guide", "how-to-use-pikobuy-spreadsheet"],
    catalogueHref: "https://findspreadsheet.com/accessories/",
  },
  {
    slug: "pikobuy-spreadsheet-qc",
    title: "PikoBuy Spreadsheet QC: Warehouse Photo Checklist for 2026",
    shortTitle: "PikoBuy spreadsheet QC",
    intent: "QC",
    description: "Use this PikoBuy spreadsheet QC checklist to confirm the ordered item, inspect visible defects, request useful detail photos and act within current return rules.",
    cardDescription: "A category-aware warehouse photo checklist with clear limits on what QC can prove.",
    keywords: ["PikoBuy spreadsheet QC", "PikoBuy QC photos", "PikoBuy warehouse photos", "PikoBuy QC checklist"],
    intro: "QC is a decision checkpoint between warehouse arrival and parcel submission. PikoBuy says it checks items in, takes confirmation photographs and looks for visible defects. That is useful evidence, but it is not professional authentication, destructive testing or a promise that every hidden detail is correct.",
    checklist: [
      "Match the warehouse record to the ordered product, colour, size and quantity.",
      "Apply a category-specific checklist instead of looking only for obvious damage.",
      "Request one targeted photo or measurement when it can resolve a named uncertainty.",
      "Record the review date and decide before the current after-sales window expires.",
    ],
    sections: [
      {
        title: "First confirm that the right item arrived",
        paragraphs: [
          "Begin with identity, not tiny cosmetic details. Compare the warehouse record with the source URL, ordered variant, colour, size and quantity. Check visible tags, labels, accessories and packaging only to the extent they were part of the selected option.",
          "If the warehouse record and order disagree, capture the mismatch clearly. Do not let a good-looking photograph distract from a wrong size or colour, and do not assume that a generic seller image describes the exact variant received.",
        ],
      },
      {
        title: "Use a category-specific visible check",
        paragraphs: [
          "Shoes need pair symmetry, soles, heels and sizing evidence. Hoodies need measurements, print or embroidery placement, ribbing and seams. Bags need shape, dimensions, closures, hardware, lining and included pieces. Electronics add plugs, voltage, batteries and route restrictions that photography alone may not resolve.",
          "The checklist should be short enough to use and specific enough to find a problem. Mark each item as visible and acceptable, visible and questionable, or not shown. That last category is important: not shown is not the same as passed.",
        ],
      },
      {
        title: "Request additional evidence with a purpose",
        paragraphs: [
          "An extra photograph is useful when it answers a named question, such as the insole measurement, a care label, the interior of a bag or the alignment of a print. A vague request for more pictures may add cost without improving the decision.",
          "PikoBuy's shipping policy says transferred goods are unpacked for inspection, that professional inspection is unavailable for special or professional products, and that additional detailed photographs may be purchased. Keep that boundary in mind when deciding what the warehouse can reasonably confirm.",
        ],
        bullets: ["Name the exact angle or measurement", "Explain the uncertain detail", "Compare with the selected source option", "Avoid claims the photograph cannot establish", "Save the result with the review date"],
      },
      {
        title: "Connect QC to returns and shipping",
        paragraphs: [
          "Once the item is Warehoused, the public returns page describes a five-day, 120-hour request period beginning from the next hour. Approval is not automatic. Seller support, marketable condition, category exclusions, intact packaging and fees can still decide the outcome.",
          "Do not submit the international parcel until the important visible questions are resolved. After dispatch, correcting a seller or warehouse-stage issue becomes much harder, and cross-border logistics introduces separate customs, loss, damage and delay risks described in PikoBuy's shipping policy.",
        ],
      },
    ],
    sources: [
      { label: "PikoBuy beginner guide", href: PIKOBUY_GUIDE, note: "Warehouse check-in, photos and visible-defect review." },
      { label: "PikoBuy shipping policy", href: SHIPPING_POLICY, note: "Inspection limits, extra photos and third-party logistics risks." },
      { label: "PikoBuy returns policy", href: RETURNS_POLICY, note: "Timing, eligibility, exclusions and fees." },
    ],
    related: ["pikobuy-spreadsheet-shoes", "pikobuy-spreadsheet-hoodies", "pikobuy-spreadsheet-bags"],
  },
  {
    slug: "how-to-use-pikobuy-spreadsheet",
    title: "How to Use a PikoBuy Spreadsheet in 2026: Step-by-Step Guide",
    shortTitle: "How to use a PikoBuy spreadsheet",
    intent: "BEGINNER GUIDE",
    description: "Learn how to use a PikoBuy spreadsheet from category browsing and source-link checks to ordering, warehouse QC, shipping estimates and tracking.",
    cardDescription: "The complete workflow from category and source link to warehouse QC and parcel submission.",
    keywords: ["how to use PikoBuy spreadsheet", "PikoBuy spreadsheet guide", "PikoBuy beginner guide", "PikoBuy finds"],
    intro: "The safest way to use a spreadsheet is as a research index, not as a checkout button. The row helps you discover a source; the live source, current PikoBuy order screen, warehouse evidence and parcel screen provide the information needed at each later stage.",
    checklist: [
      "Choose one category and define the product questions that matter.",
      "Open the exact source and confirm current variants, sizing evidence and price context.",
      "Paste the source into PikoBuy, select the intended options and save the order evidence.",
      "Review warehouse photos before comparing routes and paying international shipping.",
    ],
    sections: [
      {
        title: "1. Browse by intent, not by endless scrolling",
        paragraphs: [
          "Start with a category such as shoes, hoodies or bags and decide what would make a row useful. For shoes that may be sizing evidence and outsole photos; for a hoodie, garment measurements; for a bag, dimensions and included pieces. This makes it easier to reject weak rows quickly.",
          "Use popularity and recent additions only as discovery signals. They do not prove quality, seller reliability or inventory. Save a short list of exact source URLs so every later comparison can return to the current product page.",
        ],
      },
      {
        title: "2. Check the live source before ordering",
        paragraphs: [
          "Confirm that the destination still matches the spreadsheet title and category. Review the available colour, size, quantity and current product description. If a needed measurement or option is missing, write that question down rather than guessing.",
          "PikoBuy's public guide says users can start from Taobao, Tmall, 1688, Weidian or Yupoo, then paste a product link or keywords into PikoBuy. The official order screen—not the spreadsheet snapshot—controls what can currently be submitted.",
        ],
      },
      {
        title: "3. Select the exact option and complete the first payment",
        paragraphs: [
          "Choose colour, size and quantity carefully and compare the order summary with the source. Save the selected option and any important seller note. PikoBuy's guide says the final price is based on the actual purchase and that an out-of-stock item is refunded.",
          "Keep the product payment separate from the later international shipping payment. Domestic delivery, optional services, packaging, international freight and possible import charges can change the total cost after the row price.",
        ],
      },
      {
        title: "4. Review warehouse evidence with a checklist",
        paragraphs: [
          "When the item reaches the warehouse, confirm identity first, then apply the category checklist. PikoBuy says it checks items in, takes photos and looks for visible defects. Request one useful additional image or measurement only when it answers a real uncertainty.",
          "If a return may be needed, check current eligibility promptly. The published 120-hour request window is not unconditional approval; seller rules, product condition, packaging and fees still apply.",
        ],
      },
      {
        title: "5. Estimate and submit the parcel",
        paragraphs: [
          "Use the warehouse weight and realistic dimensions in the official estimator. Compare routes for the destination and product type, including restrictions, billing method, delivery estimate and available protection. The cheapest visible number is not necessarily the best fit for the parcel.",
          "After shipping, PikoBuy's guide says tracking information becomes available within three days. Use the official order channel for private tracking and current route status; an informational spreadsheet cannot infer an individual parcel's movement.",
        ],
      },
    ],
    sources: [
      { label: "PikoBuy beginner guide", href: PIKOBUY_GUIDE, note: "Six published stages from source selection to delivery." },
      { label: "PikoBuy shipping estimator", href: SHIPPING_ESTIMATOR, note: "Current parcel inputs for route estimation." },
      { label: "PikoBuy returns policy", href: RETURNS_POLICY, note: "After-sales timing and eligibility conditions." },
    ],
    related: ["pikobuy-spreadsheet-qc", "pikobuy-spreadsheet-weidian", "pikobuy-spreadsheet-taobao"],
    catalogueHref: "https://findspreadsheet.com/AllProducts/",
  },
  {
    slug: "pikobuy-spreadsheet-weidian",
    title: "PikoBuy Spreadsheet Weidian Links: How to Research and Order",
    shortTitle: "PikoBuy spreadsheet Weidian links",
    intent: "WEIDIAN",
    description: "Use PikoBuy spreadsheet Weidian links with a practical workflow for source verification, variants, order notes, warehouse QC and cost planning.",
    cardDescription: "Verify the exact Weidian source, save item context and carry the right option into PikoBuy.",
    keywords: ["PikoBuy spreadsheet Weidian", "PikoBuy Weidian links", "buy from Weidian with PikoBuy", "PikoBuy finds"],
    intro: "PikoBuy's beginner guide names Weidian as one of the source platforms users can start from. A spreadsheet can make those product links easier to discover, but the useful work is confirming the current source, carrying the exact option into PikoBuy and preserving enough context to review the warehouse arrival.",
    checklist: [
      "Open the exact Weidian item and save its source URL or item context.",
      "Confirm variant, colour, size, quantity and seller-provided measurements before submission.",
      "Paste the link into PikoBuy and compare the parsed product with the source.",
      "Use warehouse photos to confirm the ordered option rather than the spreadsheet thumbnail.",
    ],
    sections: [
      {
        title: "Treat the spreadsheet as a link index",
        paragraphs: [
          "A row may preserve a useful Weidian destination after a social post or chat message becomes hard to find. Open it and verify that the current item still matches the row's category, visible design and price context. If the source has changed or redirects to unrelated content, remove it from the shortlist.",
          "Save the exact source URL and a plain-language note describing the intended variant. This makes the later order and QC review less dependent on a thumbnail or translated title.",
        ],
      },
      {
        title: "Resolve options before pasting the link",
        paragraphs: [
          "List the intended colour, size and quantity, then look for measurements or option-specific images. If an option label is unclear, do not infer it from its position in a drop-down. Write a specific question that can be checked on the live source or order screen.",
          "PikoBuy's official guide tells users to paste a product link or keywords into its search box. After import, compare the parsed title, image, options and price context with the Weidian page before paying.",
        ],
      },
      {
        title: "Keep the product record connected to QC",
        paragraphs: [
          "The warehouse review should answer whether the received item matches the submitted option. Compare colour, size, quantity and category-specific visible details. When standard photos cannot show an important measurement or angle, decide whether a targeted request is justified.",
          "Do not describe a seller as verified or a product as authenticated merely because the link imported successfully. PikoBuy's public process describes purchasing and visible warehouse inspection, not a blanket guarantee about every third-party seller or product.",
        ],
      },
      {
        title: "Separate the source price from the delivered cost",
        paragraphs: [
          "The row price is only one layer. Domestic transport to the warehouse, optional services, packaging, international shipping and import costs may still apply. Use warehouse weight and dimensions when the item is ready rather than assigning a universal shipping estimate to a Weidian link.",
          "If the item is wrong, review current after-sales terms quickly. The official returns page says seller participation, marketable condition, time and fees can affect the result, so the spreadsheet should never promise an automatic return.",
        ],
      },
    ],
    sources: [
      { label: "PikoBuy beginner guide", href: PIKOBUY_GUIDE, note: "Names Weidian as a starting source and describes link import." },
      { label: "PikoBuy shipping estimator", href: SHIPPING_ESTIMATOR, note: "Parcel-specific inputs used after warehousing." },
      { label: "PikoBuy returns policy", href: RETURNS_POLICY, note: "Current after-sales conditions." },
    ],
    related: ["pikobuy-spreadsheet-taobao", "how-to-use-pikobuy-spreadsheet", "pikobuy-spreadsheet-qc"],
  },
  {
    slug: "pikobuy-spreadsheet-taobao",
    title: "PikoBuy Spreadsheet Taobao Links: Product, Size and QC Workflow",
    shortTitle: "PikoBuy spreadsheet Taobao links",
    intent: "TAOBAO",
    description: "Research PikoBuy spreadsheet Taobao links with a workflow for current variants, size charts, order selection, warehouse QC and shipping inputs.",
    cardDescription: "Carry current Taobao options and sizing evidence from the source page into the order and QC review.",
    keywords: ["PikoBuy spreadsheet Taobao", "PikoBuy Taobao links", "buy from Taobao with PikoBuy", "PikoBuy spreadsheet guide"],
    intro: "PikoBuy publicly lists Taobao among the platforms users can browse before importing a product link. A good spreadsheet row shortens discovery, but the live Taobao source remains necessary for options, measurements and current product context.",
    checklist: [
      "Verify that the Taobao destination still matches the row and intended product.",
      "Capture the exact variant and any seller chart or option-specific notes.",
      "Compare the PikoBuy import with the source before completing product payment.",
      "At the warehouse, review the received option with a product-specific QC checklist.",
    ],
    sections: [
      {
        title: "Verify the current Taobao product",
        paragraphs: [
          "Open the source and check the product type, seller images, selectable options and current price context. A spreadsheet record can age: a listing may change variants, become unavailable or be reused for different content. Keep only rows whose exact destination still supports the description.",
          "Record the URL and the selected option in plain language. If the page contains multiple bundles or sizes, note what each price represents instead of copying the lowest visible number as though it applied to every option.",
        ],
      },
      {
        title: "Use charts and measurements carefully",
        paragraphs: [
          "For clothing and shoes, identify whether the chart measures the body, the garment, the foot or the inside of the shoe. Compare with a known item and keep an acceptable range. Do not assume a familiar letter or regional size converts automatically.",
          "For bags, accessories and electronics, replace apparel measurements with the relevant evidence: dimensions, included pieces, plug type, voltage, battery information or other route-sensitive details. The category determines the checklist.",
        ],
      },
      {
        title: "Compare the imported order with the source",
        paragraphs: [
          "Paste the product link into PikoBuy as described in its public guide, then confirm that the parsed title, image and options still correspond to the Taobao page. Select colour, size and quantity deliberately and preserve any important note before the first payment.",
          "PikoBuy says the final price is based on the actual purchase. This is another reason to keep the current order screen separate from a spreadsheet price captured earlier.",
        ],
      },
      {
        title: "Close the loop at the warehouse",
        paragraphs: [
          "Use warehouse photos to confirm the received option and inspect visible category-specific details. If an important angle or measurement is missing, request it only when it can change the decision. A warehouse image cannot prove every material, performance or authenticity claim.",
          "Review return eligibility before parcel submission when there is a mismatch. After QC, use actual parcel inputs for shipping comparisons; item price and international freight are separate decisions.",
        ],
      },
    ],
    sources: [
      { label: "PikoBuy beginner guide", href: PIKOBUY_GUIDE, note: "Names Taobao as a source and explains link import and product payment." },
      { label: "PikoBuy shipping estimator", href: SHIPPING_ESTIMATOR, note: "Uses destination, product type, weight and dimensions." },
      { label: "PikoBuy returns policy", href: RETURNS_POLICY, note: "Warehouse-stage timing and eligibility." },
    ],
    related: ["pikobuy-spreadsheet-weidian", "how-to-use-pikobuy-spreadsheet", "pikobuy-spreadsheet-qc"],
  },
  {
    slug: "pikobuy-spreadsheet-shipping-guide",
    title: "PikoBuy Spreadsheet Shipping Guide 2026: Weight, Routes and Cost",
    shortTitle: "PikoBuy spreadsheet shipping guide",
    intent: "SHIPPING",
    description: "Plan PikoBuy spreadsheet shipping with parcel-specific weight and dimensions, route comparisons, packaging choices, tracking and cross-border risk checks.",
    cardDescription: "Move from item price to parcel inputs, route comparison, packaging and current logistics risk.",
    keywords: ["PikoBuy spreadsheet shipping guide", "PikoBuy shipping cost", "PikoBuy shipping estimator", "PikoBuy parcel guide"],
    intro: "A spreadsheet price is not a delivered-cost estimate. PikoBuy's public estimator asks for destination, product type, weight, length, width and height. Shipping decisions become meaningful only when those inputs reflect the actual warehouse parcel and the current route screen.",
    checklist: [
      "Separate product payment from domestic delivery, services, packaging and international freight.",
      "Use actual or realistic warehouse weight and three-dimensional parcel inputs.",
      "Compare route restrictions, billing method, delivery estimate and protection—not price alone.",
      "Treat customs, loss, damage and peak-season delay as risks rather than guaranteed outcomes.",
    ],
    sections: [
      {
        title: "Understand when shipping becomes a separate decision",
        paragraphs: [
          "PikoBuy's beginner flow places international shipping after purchase and warehouse inspection. Users select a route, submit the package and make the shipping payment after reviewing the arrived items. That means the spreadsheet's product price should never be presented as the complete cost.",
          "Build a cost worksheet with separate lines for the product, domestic transport, optional photos or services, packaging, international freight and possible import charges. Unknown values should remain ranges or blank until the order provides evidence.",
        ],
      },
      {
        title: "Use weight and dimensions together",
        paragraphs: [
          "The official estimator requires weight plus length, width and height. This reflects a practical reality: bulky but light products can price differently from compact products with the same scale weight, depending on the route's billing rules.",
          "Use the warehouse record and the planned consolidation or packaging. A shoe box, reinforced protection or several thick hoodies can change dimensions. Do not reuse one per-kilogram figure across unrelated parcels or destinations.",
        ],
      },
      {
        title: "Compare routes on the factors that affect your parcel",
        paragraphs: [
          "Review the routes shown for the destination and product type. Compare accepted goods, weight and size limits, billing method, estimated time, tracking, available protection and current notices. A lower headline cost can be a poor match if the route excludes the product or values speed differently from your needs.",
          "PikoBuy's guide says route time and pricing differ. The live route screen is the current source for an individual parcel; a dated article should explain the method, not freeze a price or delivery promise.",
        ],
        bullets: ["Destination and product type", "Actual and billable weight", "Parcel dimensions", "Restrictions and declared-value rules", "Tracking, protection and current notices"],
      },
      {
        title: "Keep logistics and customs risk visible",
        paragraphs: [
          "PikoBuy's shipping policy says parcels use third-party logistics providers and describes cross-border risks including customs action, damage, loss and peak delays. The company says it provides reminders and risk-estimation assistance, but those statements are not a guarantee of a particular outcome.",
          "Choose a route only after considering the product, destination and value. Keep documentation from the order and parcel, and use official support for current restrictions or a private shipment problem.",
        ],
      },
      {
        title: "Track through the official order channel",
        paragraphs: [
          "The beginner guide states that tracking information will be available within three days after shipment. That is a published process statement, not a prediction of delivery time. Carrier scans, customs and local hand-offs can still create gaps.",
          "A spreadsheet or external guide cannot see a private order. Use the official PikoBuy order page and carrier record for tracking, and date any public route advice so readers can distinguish a current source from an older example.",
        ],
      },
    ],
    sources: [
      { label: "PikoBuy shipping estimator", href: SHIPPING_ESTIMATOR, note: "Current destination, type, weight and dimension inputs." },
      { label: "PikoBuy shipping policy", href: SHIPPING_POLICY, note: "Transfer process, inspection limits and logistics risks." },
      { label: "PikoBuy beginner guide", href: PIKOBUY_GUIDE, note: "Route selection, payment and tracking sequence." },
    ],
    related: ["how-to-use-pikobuy-spreadsheet", "pikobuy-spreadsheet-qc", "pikobuy-spreadsheet-shoes"],
  },
];

export function getKeywordPage(slug: string) {
  return keywordPages.find((page) => page.slug === slug);
}

export function getKeywordMetadata(slug: string): Metadata {
  const page = getKeywordPage(slug);
  if (!page) return { title: "PikoBuy Spreadsheet Guide | PikoBuy Sheet" };
  const canonical = `${SITE_ORIGIN}/${page.slug}`;
  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: { canonical },
    openGraph: {
      type: "article",
      url: canonical,
      title: page.title,
      description: page.description,
      siteName: "PikoBuy Sheet",
      publishedTime: "2026-08-06T00:00:00-07:00",
      modifiedTime: "2026-08-06T00:00:00-07:00",
    },
    twitter: { card: "summary", title: page.title, description: page.description },
    robots: { index: true, follow: true },
  };
}

export function KeywordLandingPage({ slug }: { slug: string }) {
  const page = getKeywordPage(slug);
  if (!page) return null;
  const related = page.related.map(getKeywordPage).filter((item): item is KeywordPage => Boolean(item));
  const canonical = `${SITE_ORIGIN}/${page.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: page.title,
        description: page.description,
        datePublished: "2026-08-06",
        dateModified: "2026-08-06",
        inLanguage: "en",
        mainEntityOfPage: canonical,
        author: { "@type": "Organization", name: "PikoBuy Sheet Editorial Research" },
        publisher: { "@type": "Organization", name: "PikoBuy Sheet", url: SITE_ORIGIN },
        citation: page.sources.map((source) => source.href),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "PikoBuy Spreadsheet", item: SITE_ORIGIN },
          { "@type": "ListItem", position: 2, name: page.shortTitle, item: canonical },
        ],
      },
    ],
  };

  return (
    <main>
      <SiteHeader locale="en" active="guides" />
      <article className="keyword-page">
        <header className="keyword-hero">
          <div>
            <p>PIKOBUY SPREADSHEET 2026 / {page.intent}</p>
            <h1>{page.title}</h1>
            <span>{page.description}</span>
            <div className="keyword-meta"><time dateTime="2026-08-06">Updated August 6, 2026</time><b>Official sources checked</b></div>
          </div>
          <aside>
            <p>QUICK CHECKLIST</p>
            <ol>{page.checklist.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ol>
          </aside>
        </header>
        <div className="keyword-layout">
          <div className="keyword-body">
            <p className="keyword-intro">{page.intro}</p>
            {page.sections.map((section) => (
              <section key={section.title}>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
              </section>
            ))}
            <div className="keyword-boundary">
              <b>Independent research boundary</b>
              <p>This page organizes public source links and practical review questions. It does not sell products, represent PikoBuy, verify third-party sellers, guarantee authenticity, promise returns, or predict customs and delivery outcomes.</p>
            </div>
            <section className="related-guides">
              <p>CONTINUE THE PIKOBUY SPREADSHEET WORKFLOW</p>
              <div>{related.map((item) => <Link key={item.slug} href={`/${item.slug}`}><span>{item.intent}</span><b>{item.shortTitle}</b><i>→</i></Link>)}</div>
            </section>
          </div>
          <aside className="keyword-sources">
            <p>PRIMARY SOURCES</p>
            {page.sources.map((source) => <a key={source.href} href={source.href} target="_blank" rel="noopener noreferrer"><b>{source.label} ↗</b><span>{source.note}</span></a>)}
            {page.catalogueHref && <a className="catalogue-link" href={page.catalogueHref} target="_blank" rel="noopener noreferrer"><b>Browse matching finds ↗</b><span>Open the corresponding category or catalogue on FindsSpreadsheet.</span></a>}
            <small>Official policy pages take priority if they change after this review date.</small>
          </aside>
        </div>
      </article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <SiteFooter locale="en" />
    </main>
  );
}
