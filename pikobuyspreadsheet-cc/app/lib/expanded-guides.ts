import type { DeepGuide } from "./deep-guides";
import { articles } from "./site-data";

type Profile = {
  decision: string;
  scenario: string;
  evidence: string;
  boundary: string;
  record: string;
};

const profiles: Record<string, Profile> = {
  "six-step-order-process": {
    decision: "identify which stage owns the next decision instead of treating selection, purchase, warehouse review and shipping as one event",
    scenario: "a saved clothing link imports correctly, the chosen size is purchased, warehouse photographs reveal a different colour, and the parcel has not yet been submitted",
    evidence: "source option, purchasing order, warehouse status, photographs, parcel measurements and dispatch scan",
    boundary: "a public guide cannot see whether an account payment cleared or whether a particular warehouse request was accepted",
    record: "stage, responsible party, timestamp, evidence available, unresolved question and next official action",
  },
  "product-link-guide": {
    decision: "prove that the raw listing, imported result and intended option still describe the same item",
    scenario: "a source page shows several visually similar variants and the lowest displayed price belongs to an accessory rather than the photographed main product",
    evidence: "raw domain, item identifier, seller, gallery, selected variant, quantity, currency and dated source price",
    boundary: "a successful link import proves technical readability, not seller reliability, stock, quality or authenticity",
    record: "raw URL, converted destination, visible option, mismatch note, last successful check and replacement history",
  },
  "qc-photo-guide": {
    decision: "request the few decisive warehouse views that can change a keep-or-return decision",
    scenario: "a jacket looks correct from the front but the listing promised a removable lining and the standard warehouse set does not show the inside or zipper path",
    evidence: "front, back, labels, measurements, category-specific close-ups, packaging condition and any visible mismatch",
    boundary: "photographs cannot prove fibre composition, internal electronics, long-term durability, fit or authenticity",
    record: "requested view, question it answers, image received, visible observation, remaining uncertainty and action date",
  },
  "volumetric-weight": {
    decision: "compare a parcel as packed rather than assuming scale weight alone determines international freight",
    scenario: "a light pair of boxed shoes occupies more carrier space than a dense folded garment even though the source prices are similar",
    evidence: "destination, product type, packed kilograms, length, width, height, packaging choice and route billing rule",
    boundary: "the public estimator exposes inputs but does not publish one universal chargeable-weight divisor for every route",
    record: "measurement unit, packing assumption, actual weight, dimensions, route result, calculation date and revised parcel data",
  },
  "tracking-guide": {
    decision: "separate parcel submission, freight payment, dispatch and the first carrier event before judging a tracking delay",
    scenario: "an order reached the warehouse days ago, but the parcel was dispatched only yesterday and no carrier scan has appeared yet",
    evidence: "parcel number, route, submission time, payment time, dispatch timestamp, first scan and latest dated carrier event",
    boundary: "the three-day statement concerns tracking visibility after shipment; it is not a three-day delivery promise",
    record: "event name, system showing it, timestamp, carrier reference, latest observed location and support case if opened",
  },
  "forwarding-guide": {
    decision: "keep sender responsibility, PikoBuy forwarding handling and international parcel shipping as separate records",
    scenario: "a seller sends goods to the forwarding warehouse with domestic cash on delivery and one piece appears missing at arrival",
    evidence: "warehouse address instruction, forwarding form, sender tracking, received photographs, account balance and parcel submission",
    boundary: "PikoBuy states that forwarded-product after-sales service remains with the sender or seller and specialist inspection may be limited",
    record: "sender, domestic tracking, declared pieces, received pieces, inspection note, return route and international parcel ID",
  },
  "payment-process": {
    decision: "separate the first product-purchase payment from the later international-freight payment",
    scenario: "a low source price changes after option selection, domestic delivery is added, and freight is still unknown because the final parcel does not exist",
    evidence: "source currency, chosen option, actual purchase amount, domestic charge, conversion reference, parcel data and freight payment",
    boundary: "an editorial USD estimate is not an invoice and cannot explain account-specific coupons, provider charges or refunds",
    record: "cost type, original currency, amount, rate date, payer event, refund status and supporting order screen",
  },
  "warehouse-inspection": {
    decision: "use arrival photographs to answer visible questions while the item is still reviewable in the warehouse",
    scenario: "an electronics listing names several specifications, but the arrival images show only the outer case and model label",
    evidence: "piece count, selected option, visible model or size label, obvious damage, requested detail photographs and packaging condition",
    boundary: "basic check-in and defect review do not equal professional testing, internal inspection or a guarantee of performance",
    record: "ordered option, photographed observation, decisive missing view, request time, response and keep-or-return decision",
  },
  "packaging-guide": {
    decision: "balance protection, shape retention and parcel volume instead of automatically removing or reinforcing every package",
    scenario: "minimal packaging could reduce a soft garment parcel, while removing a shoe box may affect structure and return condition",
    evidence: "product fragility, current retail packaging, planned protection, packed weight, three dimensions and route billing method",
    boundary: "packaging can reduce risk but cannot eliminate damage, customs action, loss or other cross-border variables",
    record: "original packaging, requested change, reason, photographs before change, final dimensions and route comparison",
  },
  "buyer-safety": {
    decision: "replace broad words such as safe or verified with dated observations and visible limits",
    scenario: "a familiar brand name, attractive gallery and low price create confidence even though the seller, exact option and local import treatment remain unresolved",
    evidence: "live source, seller context, option match, warehouse photographs, policy conditions, destination rules and official account status",
    boundary: "no independent spreadsheet can guarantee a seller, product, customs outcome, parcel delivery or refund decision",
    record: "claim, supporting source, check date, uncertainty, responsible official channel and reason for proceeding or pausing",
  },
  "support-guide": {
    decision: "send account, order, payment, refund and parcel cases to a channel that can actually inspect the record",
    scenario: "a parcel-specific tracking problem is posted publicly without an order reference while the independent site has no account access",
    evidence: "official support email, ticket route, order or parcel reference, status screenshot and a concise description of the expected resolution",
    boundary: "independent editorial pages can explain public rules but cannot enter an account, change an order or approve a refund",
    record: "official channel, case number, submission time, evidence attached, latest reply and resolved or unresolved status",
  },
  "taobao-links": {
    decision: "match the Taobao item and chosen SKU before allowing a spreadsheet title or thumbnail to stand in for the listing",
    scenario: "one Taobao page contains several colours and bundles, and the displayed starting price belongs to the least expensive configuration",
    evidence: "Taobao item ID, shop, option text, gallery, quantity, source price, domestic shipping and last successful access",
    boundary: "PikoBuy naming Taobao as a supported source does not verify every Taobao seller or listing",
    record: "raw Taobao URL, item ID, selected SKU, currency, image match, availability note and import result",
  },
  "weidian-links": {
    decision: "preserve Weidian seller and variant context so a converted link remains traceable",
    scenario: "two Weidian sellers reuse similar photographs while their option names, price and included pieces differ",
    evidence: "Weidian item ID, seller page, full gallery, variant, included pieces, source price and visible update context",
    boundary: "the platform name and a working import do not prove current stock, seller performance or product quality",
    record: "raw Weidian URL, seller, item ID, selected option, gallery comparison, check date and status change",
  },
  "1688-links": {
    decision: "read quantity tiers, units and supplier specifications before treating a 1688 price as a one-piece retail price",
    scenario: "a supplier page shows a low unit price that applies only above a minimum quantity and a different specification is selected by default",
    evidence: "supplier, product ID, minimum order, tier price, unit, variant, specification, domestic shipping and current availability",
    boundary: "PikoBuy support for 1688 links does not remove supplier minimums or make every displayed figure the final purchase amount",
    record: "raw URL, tier, unit, intended quantity, option, calculated source total, check date and purchasing result",
  },
  "yupoo-links": {
    decision: "treat a Yupoo album as photographic research until price, stock and an orderable source are independently visible",
    scenario: "an album provides detailed images but no current price, inventory state or direct purchasing destination",
    evidence: "album owner, album URL, image update context, style reference, stated price evidence, stock evidence and external order route",
    boundary: "photographs and an album title do not by themselves create a complete seller or purchase record",
    record: "album, image set, referenced model, missing commercial fields, linked source, last check and unavailable status",
  },
  "sizing-guide": {
    decision: "compare garment or product measurements instead of converting familiar size letters by country",
    scenario: "two items both labelled XL use different charts, and one chart describes body dimensions while the other describes the finished garment",
    evidence: "measurement diagram, unit, garment-versus-body definition, selected size, comparable owned item and warehouse measurement",
    boundary: "a letter size, model height or photograph cannot guarantee fit for a particular person",
    record: "measurement name, method, source value, comparison value, tolerance, selected option and warehouse confirmation",
  },
  "spreadsheet-checklist": {
    decision: "apply one repeatable twelve-field gate before publishing or opening a product route",
    scenario: "a row has a persuasive title and affiliate-ready link but lacks the raw source, option, currency, date and category-specific evidence",
    evidence: "category, title, raw URL, item ID, images, option, size, source price, weight, policy note, status and check date",
    boundary: "a completed checklist improves traceability but cannot convert missing seller or product evidence into certainty",
    record: "the twelve fields, reviewer, source result, unresolved fields, publication decision and next scheduled check",
  },
  "source-link-comparison": {
    decision: "show readers which URL is the raw source, which is an agent-ready destination and which is the editorial record",
    scenario: "a converted destination still opens, but its underlying item changed and the spreadsheet retained an old photograph and price",
    evidence: "destination domain, raw item ID, redirect chain, saved record, image set, selected option and last successful check",
    boundary: "conversion is a navigation function, not verification of the seller, listing or resulting order",
    record: "raw link, converted link, final destination, spreadsheet URL, relationship between them, check date and correction history",
  },
  "spreadsheet-maintenance": {
    decision: "change an update date only after a real verification event and record what changed",
    scenario: "a template deployment refreshes every timestamp even though no product, policy or outgoing link was rechecked",
    evidence: "source response, option or price comparison, official wording, broken-link result, correction note and reviewer date",
    boundary: "a recent date without a documented check is presentation, not evidence of freshness",
    record: "page, field reviewed, previous value, current value, source, material impact, reviewer and next check",
  },
  "shoes-spreadsheet": {
    decision: "compare shape, outsole, heel structure, size label and packed weight before choosing a shoes record",
    scenario: "two pairs share a model name but differ in outsole pattern, heel construction, colour option and box condition",
    evidence: "profile, toe shape, outsole, heel, size label, insole or length evidence, pair count, box and packed weight",
    boundary: "warehouse photographs cannot guarantee comfort, material composition, performance or authenticity",
    record: "model, colour, size system, source option, decisive views, packaging choice, weight and last source check",
  },
  "hoodies-spreadsheet": {
    decision: "compare measurements, fabric surface, cuffs, print placement and weight rather than relying on an oversized label",
    scenario: "two hoodies use the same front graphic while their body length, chest width, fabric weight and cuff construction differ",
    evidence: "chest width, body length, sleeve, hood, fabric close-up, cuffs, print position, size label and weight",
    boundary: "a photograph cannot reliably prove fibre percentage, warmth, shrinkage or long-term print durability",
    record: "selected style, size chart, measurement method, warehouse measurements, visible construction, weight and status",
  },
  "t-shirts-spreadsheet": {
    decision: "compare collar, shoulder, body length, stitching, print position and fabric view for each T-shirt row",
    scenario: "similar thumbnails hide different collar heights, graphic scale and body proportions across multiple source options",
    evidence: "front, back, collar, shoulder width, chest, body length, hem, print close-up, label and source option",
    boundary: "images cannot establish exact fabric composition, wash performance or fit without measurements",
    record: "style, colour, size, garment measurements, print evidence, source price, item ID and check date",
  },
  "jackets-spreadsheet": {
    decision: "inspect outer material claim, lining, zipper path, cuffs, measurements and expected parcel volume",
    scenario: "a jacket front looks correct while the listing offers different linings and the selected option changes both weight and bulk",
    evidence: "front, back, lining, closures, pockets, cuffs, size measurements, removable pieces, weight and packaging",
    boundary: "photographs cannot prove weather resistance, fill composition, warmth or hardware longevity",
    record: "selected construction, measurements, lining evidence, hardware views, packaging decision, weight and last check",
  },
  "pants-shorts-spreadsheet": {
    decision: "record how waist, inseam and rise were measured before comparing pants or shorts",
    scenario: "two listings use the same nominal waist size but one measures the relaxed waistband and the other lists a body measurement",
    evidence: "waist method, rise, inseam, outseam, hem, pockets, closure, fabric view, size label and packed weight",
    boundary: "a size label and model photograph do not establish garment dimensions or fit",
    record: "product type, size, measurement definitions, source chart, warehouse measurements, option, price and date",
  },
  "headwear-spreadsheet": {
    decision: "compare crown, brim, embroidery, closure, inside label and circumference for headwear",
    scenario: "two caps share a front logo while their crown depth, brim curve, back closure and fit range differ",
    evidence: "front, side, back, top, inside, embroidery close-up, closure, circumference and packaging shape",
    boundary: "photographs cannot guarantee fit, material composition, colour accuracy under different lighting or shape after transit",
    record: "style, size range, crown and brim observations, closure, decisive images, protection request and check date",
  },
  "accessories-spreadsheet": {
    decision: "use dimensions and close-ups to distinguish accessory variants that look similar in one thumbnail",
    scenario: "wallet options share an exterior image but differ in dimensions, interior layout, closure and included packaging",
    evidence: "length, width, depth, hardware, edges, closure, interior, markings, included pieces and source option",
    boundary: "visible finish does not prove material composition, hardware durability or authenticity",
    record: "accessory type, dimensions, selected variant, close-up evidence, included pieces, source price and check date",
  },
  "jerseys-spreadsheet": {
    decision: "compare patch placement, number alignment, fabric texture, sleeve details and measurements for jerseys",
    scenario: "one listing contains player, fan and blank variants with different patches, printing and sizing under the same main image",
    evidence: "front, back, sleeves, collar, patches, name and number, fabric close-up, measurements and selected variant",
    boundary: "warehouse images cannot guarantee performance fabric claims, licensing, print durability or fit",
    record: "team or style, season reference, chosen personalization, patch set, measurements, source option and date",
  },
  "electronics-spreadsheet": {
    decision: "verify exact model, compatibility, included parts, packaging and seller specification before treating a device row as comparable",
    scenario: "a tablet title groups several storage and connectivity variants while the low price belongs to the least capable option",
    evidence: "model label, specification screen if available, region, storage, connectivity, included accessories, plug, packaging and condition claim",
    boundary: "external photographs cannot prove internal condition, battery health, genuine components, software support or long-term function",
    record: "exact model, selected specification, compatibility question, included parts, visible condition, source claim and check date",
  },
  "other-stuff-spreadsheet": {
    decision: "give a miscellaneous item a real product identity and borrow the correct checks from the nearest specific category",
    scenario: "an item is labelled other even though its material, dimensions, fragility, included pieces and shipping restrictions determine the decision",
    evidence: "plain-language product type, use, material claim, dimensions, included pieces, fragility, likely weight and restrictions",
    boundary: "a miscellaneous label cannot erase regulated, return-sensitive, electrical, food, personal-care or transport conditions",
    record: "actual product type, category rationale, decisive evidence, source option, risk note, package assumption and date",
  },
  faq: {
    decision: "answer recurring questions without turning a short summary into account support or a universal promise",
    scenario: "a reader interprets a five-day return headline or three-day tracking note without checking eligibility, event timing and the official account record",
    evidence: "the exact official workflow, estimator, shipping term, return rule or contact page behind each answer",
    boundary: "FAQ answers explain public information and cannot decide an individual payment, parcel, return or refund",
    record: "question, short answer, conditions, official source, last review date and full guide for deeper context",
  },
  about: {
    decision: "make the independent role, commercial destination and editorial limits clear before a user clicks",
    scenario: "a visitor sees a PikoBuy word mark and could otherwise assume the research site operates the PikoBuy warehouse or support desk",
    evidence: "independence statement, source policy, FindSpreadsheet destination, correction method and account-support boundary",
    boundary: "the site does not represent PikoBuy, process payments, inspect goods, control sellers or access private records",
    record: "publisher role, source type, outgoing destination, review date, correction route and affiliation statement",
  },
  updates: {
    decision: "publish a change log that names the record checked and the material result",
    scenario: "forty routes and eight product records exist while an older note still reports thirty-eight routes and six products",
    evidence: "route inventory, product-link response, source review, wording change, translation status and build date",
    boundary: "a deployment date alone is not evidence that every linked product or policy was rechecked",
    record: "date, affected page, evidence checked, before and after state, material impact, reviewer and next action",
  },
};

type CategoryBrief = {
  unit: string;
  measurement: string;
  photos: string;
  optionTrap: string;
  warehouse: string;
  parcel: string;
  reject: string;
  fields: string;
  notes: [string, string, string, string, string, string, string];
};

const categoryBriefs: Record<string, CategoryBrief> = {
  "shoes-spreadsheet": {
    unit: "one model, colourway, size system and seller option—not a model name shared by several versions",
    measurement: "the stated size system, the labelled size and any insole or outsole length that can be measured consistently",
    photos: "lateral and medial profiles, toe shape, heel construction, outsole pattern, tongue or inside size label, both shoes and the box condition",
    optionTrap: "the gallery shows one outsole and heel shape while the selectable colourway or batch uses another construction",
    warehouse: "count the pair, compare left and right symmetry, read the size labels and request the missing outsole or heel view before accepting",
    parcel: "a rigid shoe box can protect shape yet add volume; removing it changes protection, resale condition and the evidence available for a return",
    reject: "size system is unstated, only one angled photograph exists, the selected colour is absent from the gallery, or the box decision is hidden",
    fields: "model reference, colourway, source option, size system, labelled size, length evidence, outsole view, pair count, box choice, packed weight and check date",
    notes: [
      "For footwear, begin by separating performance silhouette, colourway and size system. Sellers may group several visual versions under one familiar model name. A shortlist is credible only when the option text, outsole shown and labelled size all point to the same pair.",
      "Insole length is useful only when the insole can be removed and the endpoints are clear. Outsole length is not a direct substitute. When neither is available, compare the seller chart with a known pair and keep the fit conclusion conditional.",
      "The outsole and heel views often reveal a mismatch that a side profile hides. Ask for both shoes in one frame as well: this can expose colour, size-label or construction differences between the left and right item without implying anything about performance.",
      "A batch or colour selection can change panel material, outsole colour and even included packaging. Save the SKU wording before payment and compare the warehouse pair with that wording, not merely with the first gallery image.",
      "Delay box removal until identity, size and visible-condition questions are closed. A box can support shape and retain return evidence, while also increasing chargeable volume. The record should show who made that trade-off and on what parcel data.",
      "Remove a footwear row when size-system evidence is missing or when no image ties the chosen colour to the shown sole. Those gaps affect selection directly; more lifestyle photographs do not repair them.",
      "A footwear record should let another reviewer reconstruct the exact pair from model, colour, size, sole and label evidence. If a replacement seller is used, create a new record rather than transferring the previous pair's observations.",
    ],
  },
  "hoodies-spreadsheet": {
    unit: "one colour, print version and measured garment size, because an oversized label does not define actual proportions",
    measurement: "pit-to-pit width, body length, shoulder, sleeve and—where the seller supplies it—garment weight, with the measurement method written beside every number",
    photos: "front and back, hood shape, drawcord and eyelets, cuff and hem ribbing, pocket alignment, print edges, fabric surface and the inside label",
    optionTrap: "two hoodies reuse the same front graphic but differ in blank weight, body length, cuff construction or rear artwork",
    warehouse: "lay the garment flat, compare print placement with the chosen option, look for visible stains or skewed seams and request decisive dimensions",
    parcel: "thick fleece compresses differently from a light knit; vacuum packing may reduce volume but can crease prints or change presentation",
    reject: "the chart does not say whether values describe the body or garment, the print version is ambiguous, or no back and cuff evidence is available",
    fields: "style, colour, blank or print version, size chart method, chest, length, sleeve, fabric close-up, print placement, weight, packing request and review date",
    notes: [
      "Hoodie titles frequently describe a graphic or aesthetic while the decision depends on the underlying blank. Treat colour, print version, hood construction and measured size as the identity. This prevents different weights and cuts from being ranked as one product.",
      "For an oversized garment, the letter on the tag is particularly weak evidence. Compare laid-flat chest and length with a hoodie already owned, then add shoulder and sleeve only when those proportions affect the intended silhouette.",
      "A fabric close-up should show surface and visible knit without being used to declare fibre content. Cuff, hem and pocket views help explain construction. Front and back frames are needed whenever a listing offers more than one graphic arrangement.",
      "The safest option note repeats the seller's colour and print wording verbatim. If the source groups blank, small-logo and large-print variants, attach the selected price to that exact text rather than to the overall hoodie title.",
      "Thick fleece can create a larger parcel than a source thumbnail suggests. Before compression, consider whether the print, hood or structured trim may be affected. Record the post-packing measurements instead of assuming the product weight predicts freight.",
      "Pause a row when the size chart lacks a measurement method or the back design is not shown. These are decision fields, not optional decoration. A seller photograph of a model does not replace finished-garment dimensions.",
      "The final hoodie schema should connect cut, print, measurements and parcel weight. That combination explains both why the garment was shortlisted and why a later option or packaging change may invalidate the earlier comparison.",
    ],
  },
  "t-shirts-spreadsheet": {
    unit: "one cut, colour and graphic placement in one measured size rather than every shirt grouped beneath the same campaign image",
    measurement: "shoulder width, chest width and body length measured on the finished shirt, plus collar height when neckline shape affects the comparison",
    photos: "flat front and back, collar rib, shoulder seam, sleeve and hem stitching, print scale, print texture, care label and selected colour",
    optionTrap: "the lowest price belongs to a blank or small graphic while the hero image presents a larger front-and-back print",
    warehouse: "compare graphic position against seams, check the collar for visible distortion, confirm the selected colour and request flat measurements before parcel submission",
    parcel: "a shirt is usually low-volume, so the more important packaging question is protecting a large print from sharp folds without adding unnecessary bulk",
    reject: "one lifestyle image replaces the option gallery, dimensions are missing, the print cannot be matched to the chosen SKU, or price context is unclear",
    fields: "cut, colour, graphic version, shoulder, chest, length, collar detail, front and back evidence, source price, currency, selected SKU and last check",
    notes: [
      "For T-shirts, one campaign name can conceal several cuts and print scales. Define the row by cut, colour and graphic placement first. A product is not comparable merely because the same artwork appears in its thumbnail.",
      "Chest width and body length usually explain more than a regional size conversion. Shoulder width adds context for a dropped or fitted sleeve, while collar height helps when neckline shape is central to the style. Store how each value was taken.",
      "Flat front and back images make graphic scale easier to judge against seams. A close view of collar rib and stitching can document visible construction, but it should not be stretched into a claim about fabric composition or wash life.",
      "When the starting price belongs to a blank or front-only version, the row must not show a front-and-back graphic at that price. Select the intended SKU again and preserve the amount generated by that choice.",
      "A large print can be damaged by a hard fold even though the shirt itself is easy to compress. Ask for a fold that protects the decoration, then use the final parcel dimensions for route research rather than adding generic garment weight.",
      "Exclude a shirt when the gallery never shows the chosen colour or reverse side, or when dimensions come from an unidentified size. Those gaps make option matching and fit comparison impossible to reproduce.",
      "A strong T-shirt row links the graphic version to the exact measurements and price. If artwork, collar or cut changes, treat the result as a separate product state and give it its own date.",
    ],
  },
  "jackets-spreadsheet": {
    unit: "one outer shell, lining configuration and size, since detachable pieces can change both the product and its parcel",
    measurement: "shoulder, chest, body length and sleeve together with visible evidence for the lining, fill claim, closures and removable components",
    photos: "front, back, inside lining, main zipper path, snaps, cuffs, pockets, hem, labels and every detachable hood or liner named by the option",
    optionTrap: "a listing uses one exterior image for thin, lined and padded versions whose weight, warmth claim and packed volume are not comparable",
    warehouse: "confirm the chosen lining and colour, count removable pieces, inspect visible hardware alignment and request an inside view if the standard set omits it",
    parcel: "outerwear is both compressible and shape-sensitive; reinforcement may protect hardware while vacuum packing may affect loft or leave a bulky final volume",
    reject: "lining type is not tied to the SKU, the inside is never shown, removable pieces are not counted, or measurements belong to another version",
    fields: "shell option, lining option, colour, size, four garment measurements, closure and pocket evidence, detachable pieces, packed weight, dimensions and date",
    notes: [
      "Outerwear comparisons fail when a title hides different linings. Define the product by shell, insulation or lining option, detachable components and size. The exterior colour alone cannot establish which version the seller will supply.",
      "Shoulder, chest, sleeve and body length should be matched to the selected construction. A thick lining can alter internal fit even when exterior measurements appear similar, so the record should keep the lining evidence beside the chart.",
      "The inside view is often more decisive than another front photograph. Follow the zipper from collar to hem, inspect cuffs and pocket closures, and count detachable pieces. These observations document visible construction without promising warmth or weather resistance.",
      "If thin, lined and padded options share a gallery, reopen the selection after price changes. The chosen text, price and photographed lining must agree. Otherwise the attractive hero image may describe a different parcel and fit problem.",
      "Jackets create a deliberate packaging conflict: compression may reduce volume while reinforcement protects hardware and preserves loft. Decide after warehouse review and save the final packed dimensions, because the source listing cannot settle the freight figure.",
      "Reject an outerwear row when lining, removable parts or interior measurements cannot be tied to the SKU. A complete exterior gallery does not compensate for uncertainty about the product configuration being purchased.",
      "The jacket record must preserve construction and parcel consequences together. If the lining option changes, update measurements, expected weight and packaging analysis rather than changing only the price field.",
    ],
  },
  "pants-shorts-spreadsheet": {
    unit: "one garment type, cut and size with a declared waist method, because nominal waist labels are not interchangeable measurements",
    measurement: "waist measured relaxed and, if elastic, stretched; front rise, back rise, inseam, outseam and leg opening with the units and method preserved",
    photos: "front and back laid flat, waistband and closure, pocket openings, crotch seams, side profile, hems, labels and any printed or embroidered detail",
    optionTrap: "one seller chart gives body waist while another gives the garment laid flat, making identical numbers describe very different products",
    warehouse: "ask how the waist was measured, compare pocket and closure layout with the selected style, and check that shorts length or trouser inseam matches the intended option",
    parcel: "dense denim, hardware and multi-pocket construction affect weight more than a thumbnail suggests, while folded dimensions depend on fabric thickness",
    reject: "the waist method is absent, trousers and shorts share one chart, rise or inseam is missing when fit depends on it, or the pictured closure differs",
    fields: "garment type, cut, colour, size, waist method, rises, inseam, outseam, hem, closure, pocket plan, weight, SKU and review date",
    notes: [
      "Separate shorts, trousers and convertible styles before comparing size. The same nominal waist can describe a relaxed elastic band, a stretched band or a body target. Identity therefore includes garment type, cut and measurement method.",
      "Record the waistband laid flat and state whether it is relaxed or stretched. Rise, inseam and outseam answer different fit questions; do not calculate one from another unless the pattern and measurement path are known.",
      "Front and back flat views show pocket layout, yoke, closure and leg shape. A close-up of crotch and hem seams can document visible construction. Model photographs help with styling but cannot replace the laid-flat evidence.",
      "Listings sometimes reuse one chart for both trousers and shorts. Confirm that the selected product type and size produce the chart being saved. If the source cannot tie them together, the measurement data should remain unresolved.",
      "Dense denim and metal hardware may weigh more than a light-looking image implies. Folded bulk also varies with fabric thickness. Shipping research should use the warehouse parcel result, not a generic clothing assumption copied from another row.",
      "Remove a candidate when the waist method is missing or when inseam is decisive but absent. A nominal size and attractive fit photo cannot make those comparisons repeatable.",
      "The finished row should show measurement definitions before values. That lets another reviewer distinguish an option change from a method change and prevents an apparent size discrepancy from being reported as fact without analysis.",
    ],
  },
  "headwear-spreadsheet": {
    unit: "one crown shape, brim treatment and closure rather than every cap carrying a similar front emblem",
    measurement: "inside circumference or stated fit range, crown depth and brim width or curve when those values are available or can be requested",
    photos: "straight front, both sides, rear closure, top panels, under-brim, inside sweatband and label, plus a close-up of embroidery edges",
    optionTrap: "the same logo appears on low-profile, structured and trucker crowns that sit differently despite sharing an adjustable label",
    warehouse: "check panel symmetry, brim shape, closure type, inside label and embroidery placement while preserving the crown for a return decision",
    parcel: "flattening saves space but can permanently change a structured crown or brim, so protection should be chosen from construction rather than price alone",
    reject: "fit range is only described as one size, rear and inside views are missing, crown construction is unclear, or the packing plan would crush the product",
    fields: "headwear type, crown, brim, closure, circumference, embroidery position, internal label, structure-protection request, source option and date",
    notes: [
      "Headwear identity begins with construction: structured or unstructured crown, panel count, brim treatment and closure. A shared front emblem is not enough because those choices determine shape and fit even when every option is called adjustable.",
      "Circumference or fit range should be paired with crown depth when possible. Measure along the inside wearing line rather than the outside edge. Brim width and curve can be described visually if a consistent measurement is unavailable.",
      "A top view shows panel symmetry, while rear and inside views confirm closure and labels. Embroidery should be viewed close enough to describe visible edges and placement, but a photograph cannot prove thread durability or colour under all lighting.",
      "Low-profile, trucker and structured variants may sit under one seller title. Preserve the chosen crown and closure wording with the price; do not allow the front logo to become the only option identifier.",
      "Flattening may reduce parcel volume but can permanently reshape a crown or brim. Keep the product supported until return questions are settled, then document any protection request and the final dimensions used for shipping comparison.",
      "Reject a cap row when the rear closure and interior are hidden or when one size lacks a fit range. These omissions prevent basic identity and fit review, regardless of how clear the front logo appears.",
      "A headwear row earns publication when crown, brim, closure, fit and protection can be traced together. If the seller changes from structured to unstructured stock, create a new state rather than retaining the old evidence.",
    ],
  },
  "accessories-spreadsheet": {
    unit: "one precise accessory type with dimensions and included pieces, not a broad brand-style label that hides different interiors or hardware",
    measurement: "length, width and depth for the closed object, strap or chain length where relevant, and the dimensions of the intended contents when compatibility matters",
    photos: "all exterior faces, opening and closure, hardware attachment, edge finish, interior compartments, labels, removable straps and included packaging",
    optionTrap: "wallets, cases or glasses share an exterior photograph while their interior layout, size, colour, closure or included box differs by SKU",
    warehouse: "match the interior and hardware to the selected option, count accessories, inspect visible edge finish and request a scale or measured view if size is decisive",
    parcel: "small accessories may be light but vulnerable to pressure, scratching or bent hardware; protective packaging can matter more than weight savings",
    reject: "dimensions are absent, only the closed exterior is visible, included pieces are unspecified, or the option cannot be matched to the interior shown",
    fields: "actual product type, dimensions, colour, closure, interior plan, hardware, removable pieces, included packaging, source SKU, price and check date",
    notes: [
      "Accessory is too broad to be the comparison object. Name the actual item—wallet, case, belt, glasses or small bag—and define its selected dimensions, colour, closure and included pieces before considering price.",
      "Measure the closed object along consistent outer edges. Strap length, compartment size or device compatibility may be more decisive than overall width, so choose dimensions from the intended use rather than applying one template to every accessory.",
      "Exterior views establish colour and visible finish; an open view establishes layout. Hardware attachments, edge treatment and removable straps need their own frames. These images document appearance but do not prove material composition or long-term strength.",
      "A shared exterior can conceal several interior arrangements. Reopen the SKU after choosing colour and size, then compare the interior and included packaging with that selection. The cheapest option may be a case or component rather than the complete item shown.",
      "Small size does not mean no packaging decision. Hard lenses, polished hardware and sharp corners may need separation or crush protection. Record why protection was kept and compare the final parcel instead of assuming removal is always efficient.",
      "Pause an accessory row when dimensions or the open interior are missing, or when included straps and boxes are unclear. Those fields define utility and total product contents; another exterior angle will not replace them.",
      "The final record should connect intended use to dimensions, layout and included pieces. That structure prevents a later seller substitution from inheriting evidence simply because the outer appearance remains similar.",
    ],
  },
  "jerseys-spreadsheet": {
    unit: "one season reference, cut, patch set and personalization choice, because a single listing may contain fan, player, blank and named versions",
    measurement: "chest and length for the selected cut, with sleeve and shoulder detail when charts distinguish player and fan constructions",
    photos: "front and back laid flat, collar, sleeves, crest and sponsor patches, name and number alignment, hem labels and fabric texture",
    optionTrap: "the hero photograph shows patches and player printing that are optional extras or absent from the lowest-priced blank variant",
    warehouse: "confirm every chosen patch and personalization element, compare number alignment with the centre line, and inspect visible pulls or skewed heat-applied details",
    parcel: "fold location matters because a hard crease across names, numbers or heat-applied patches can be more consequential than a small volume reduction",
    reject: "the season or patch set is ambiguous, personalization is not written into the option, the back is hidden, or the size chart mixes different cuts",
    fields: "team or style, season, cut, colour, size, patch set, personalization, chest and length, front and back evidence, SKU, price and date",
    notes: [
      "Jersey identity is a configuration: season reference, player or fan cut, patch package, name and number, colour and size. A team name alone groups products whose construction and personalization are not directly comparable.",
      "Chest and length must belong to the chosen cut. A player-style chart may not describe a fan-style option in the same listing. Keep the chart label with the numbers and compare a known garment using the same laid-flat method.",
      "Front and back flat images reveal patch, sponsor, name and number alignment. Sleeve and collar frames complete the visual set; a fabric close-up can show texture but cannot confirm performance or licensing claims.",
      "Optional patches and printing often change the selected amount. Save the option summary after all custom choices, and never assign the blank-jersey starting price to the photographed personalized version.",
      "Fold lines across applied names, numbers or patches can matter more than saving a small amount of volume. Request a protective fold after visible review, then use actual packed data for the international route decision.",
      "Remove a row when the back is hidden, personalization is absent from the selection text or the chart does not identify its cut. Those gaps make both appearance and sizing claims unstable.",
      "A reproducible jersey entry ties every visible patch and personalized element to the selected SKU. When a season or patch package changes, preserve the prior state instead of silently updating the image alone.",
    ],
  },
  "electronics-spreadsheet": {
    unit: "one exact model, region, storage and connectivity configuration with a complete list of included parts",
    measurement: "model and specification identifiers first, followed by physical dimensions and packed weight; external size never substitutes for internal configuration",
    photos: "model label, all sides, ports, screen or specification page if available, plug and charger, accessories, serial-sensitive areas safely obscured, seals and packaging",
    optionTrap: "a title combines Wi-Fi and cellular models or several storage capacities while the displayed starting price belongs to the least capable configuration",
    warehouse: "read the model label, count included parts, compare plug and regional compatibility and treat any functional status as unproven unless the official record shows a test",
    parcel: "protective packaging raises size and weight but removal can expose screens, connectors or batteries to damage; route restrictions may also depend on the product type",
    reject: "model suffix or region is missing, the SKU does not identify storage or connectivity, accessories are unlisted, or cosmetic photographs are presented as a functional test",
    fields: "manufacturer model, suffix, region, storage, connectivity, plug, included parts, condition claim, photographs, packaging, weight, source option and date",
    notes: [
      "Electronics must be identified by model and configuration, not a product family name. Region, storage, connectivity and condition claim can change compatibility and price. The row should describe one exact selection before comparing it with another device.",
      "Physical dimensions and weight support parcel planning, while the model suffix supports technical identity. Keep those evidence types separate. A case that fits externally does not prove network, software, voltage or accessory compatibility.",
      "A model label and port view are more useful than repeated glamour shots. Count chargers, cables and adapters, and show seals or packaging where relevant. External photographs cannot establish battery health, internal parts or long-term function.",
      "When a title groups Wi-Fi, cellular and multiple storage options, select the intended configuration and record the resulting price. Do not let the lowest-capacity amount describe a higher-capacity image or specification summary.",
      "Protective packaging may raise both weight and volume, but removing it can expose screens, ports and batteries to risk. Product type can also affect available routes, so use the official route result for the exact parcel.",
      "Reject a device entry when model suffix, region or included parts are missing. A visually clean exterior is not a substitute for configuration identity, and seller claims should not be presented as an independent functional test.",
      "The electronics schema should separate seller specification, visible warehouse observation and unresolved function. That makes compatibility research honest and prevents a photograph from carrying claims it cannot support.",
    ],
  },
  "other-stuff-spreadsheet": {
    unit: "one plain-language product identity assigned to the closest defensible category before any generic other label is used",
    measurement: "the dimensions, weight, material claim and component count that actually control fit, compatibility, fragility or shipping for that product",
    photos: "a complete exterior, scale reference, labels, openings, connectors or closures, included pieces and the category-specific view borrowed from the nearest specialist checklist",
    optionTrap: "an unusual item is placed in a miscellaneous bucket even though one option is electrical, fragile, sealed, customized or subject to different transport conditions",
    warehouse: "first identify what the object is, then count pieces and apply the inspection sequence for its real function rather than using a generic front-photo check",
    parcel: "unclassified products require an explicit restriction and packaging review; neither weight nor a broad category name reveals battery, liquid, food or fragility issues",
    reject: "the item cannot be named precisely, included pieces or dimensions are missing, restrictions are unknown, or no specialist category supplies an adequate inspection method",
    fields: "plain product name, intended use, nearest category, material claim, dimensions, component count, fragility, restriction note, packed assumption, source option and date",
    notes: [
      "The miscellaneous collection should be a temporary research position, not an excuse to omit identity. Name the object and intended use, then assign the nearest inspection framework. A reader must understand what is being compared before any price ranking begins.",
      "Choose measurements from function: compatibility dimensions for a part, capacity for a container, component count for a set, or external size for parcel planning. Generic length and width fields are insufficient when they do not answer the product's actual decision.",
      "Photograph the complete object, labels and every included piece, then borrow close-ups from the nearest specialist category. Electrical connectors, seals, closures or fragile surfaces deserve different evidence, so one front view cannot serve every miscellaneous item.",
      "A broad option can hide battery, liquid, food, customized or sealed variants. Match the chosen configuration before purchase and flag any feature that may affect return eligibility or transport. Do not assume the category label screens those conditions.",
      "Packaging decisions should follow fragility and restrictions. A dense metal part, crush-sensitive collectible and liquid container require different protection even if their weights match. Retain assumptions until the warehouse produces final parcel data.",
      "Reject an other row when the product cannot be named, the component count is unclear or no restriction review has been done. Ambiguous classification is itself a decision problem and should remain visible.",
      "The completed entry records why the product stayed outside a standard collection and which specialist checks were borrowed. If that rationale disappears, move the item into the correct category rather than preserving an unhelpful miscellaneous label.",
    ],
  },
};

const workflowSlugs = new Set(["six-step-order-process", "forwarding-guide", "payment-process"]);
const sourceSlugs = new Set(["product-link-guide", "taobao-links", "weidian-links", "1688-links", "yupoo-links", "source-link-comparison"]);
const inspectionSlugs = new Set(["qc-photo-guide", "warehouse-inspection", "packaging-guide", "sizing-guide", "spreadsheet-checklist"]);
const logisticsSlugs = new Set(["volumetric-weight", "tracking-guide"]);

function sourceContext(profile: Profile, article: (typeof articles)[number]) {
  return `${article.quickAnswer} In ${article.title}, the first-party citation supports only the public process or policy described beside it. Our separate editorial task is to ${profile.decision}. The page reports no test purchase and cannot access a private order; ${profile.boundary}.`;
}

function workflowGuide(slug: string, profile: Profile): DeepGuide {
  const article = articles.find((item) => item.slug === slug)!;
  return {
    sourceContext: sourceContext(profile, article),
    sections: [
      {
        id: `${slug}-sequence`, label: "01 / EVENT MAP", title: `Map the events in ${article.title}`,
        paragraphs: [
          `${article.summary} Start by drawing a line between the event that creates a request and the later event that confirms an outcome. For this page the working objective is to ${profile.decision}. That distinction prevents a search result, purchase request, warehouse arrival, parcel submission or carrier scan from being presented as though each proves the next one happened. The record should name the actor, the time and the evidence produced at every hand-off.`,
          `Use the article's four checkpoints to label that line: ${article.checks.join(" ")} Each checkpoint identifies a different owner and produces different evidence. Keep the order or parcel reference, but attach the event that makes it meaningful; this prevents the ${slug.replaceAll("-", " ")} record from collapsing intention, confirmation and later handling into one status.`,
        ], points: article.checks,
      },
      {
        id: `${slug}-source-reading`, label: "02 / OFFICIAL WORDING", title: "Read the published workflow without stretching it",
        paragraphs: [
          `${article.facts.join(" ")} Each statement answers a limited process question. None tells us that a particular external seller is dependable, that a chosen option remains in stock, or that a private transaction will finish in a specific way. Keep those official statements beside their exact sources and give every later inference its own editorial label.`,
          `For this subject the evidence set is ${profile.evidence}. Relate it directly to the published anchors—${article.facts.join(" ")}—and identify which source owns each statement. If a private account result differs, preserve it as an individual case and use official support; one transaction should not silently rewrite the general ${slug.replaceAll("-", " ")} explanation.`,
        ], callout: `Published-information limit: ${profile.boundary}.`,
      },
      {
        id: `${slug}-ledger`, label: "03 / DECISION LEDGER", title: "Build a record that survives the next hand-off",
        paragraphs: [
          `A useful ledger contains ${profile.record}. Write one row per decision event rather than overwriting the row whenever the status changes. That small choice preserves the difference between what a shopper intended, what a seller supplied, what the warehouse observed and what a carrier later reported. It also prevents a refund, replacement or repack from erasing the reason the original decision changed.`,
          `Build the ledger around ${article.checks[0].toLowerCase()} and ${article.checks[1].toLowerCase()} Then preserve ${article.checks[2].toLowerCase()} and ${article.checks[3].toLowerCase()} Keep original currencies, units and identifiers beside any conversion. A screenshot should carry its URL, option and time so the next reviewer knows exactly which ${slug.replaceAll("-", " ")} event it was intended to support.`,
        ], points: [`Minimum record: ${profile.record}.`, "Keep intention and confirmed outcome in separate fields.", "Attach the source owner and timestamp to every changing value.", "Archive a reversal instead of silently replacing it."],
      },
      {
        id: `${slug}-case`, label: "04 / CASE ANALYSIS", title: "Work the problem from the first unresolved event",
        paragraphs: [
          `Consider an editorial example: ${profile.scenario}. Begin at the last event that is supported by a dated record. Then ask which later event is missing or contradicts it. Do not leap straight to delivery, return or support language when the unresolved issue is still option identity, purchasing confirmation or warehouse evidence. The narrowest unanswered question usually identifies both the record to gather and the official screen that owns the answer.`,
          `Now test the case against the page's three known errors: ${article.mistakes.join(" ")} The counter-check for ${slug.replaceAll("-", " ")} should locate the first point at which evidence and assumption diverge. Keep an incomplete result visible; a gap is more useful than a positive or negative verdict that cannot be traced to an event.`,
        ], callout: `Case rule: ${profile.decision}.`,
      },
      {
        id: `${slug}-cost-and-time`, label: "05 / COST & TIME", title: "Do not let one price or date swallow the full process",
        paragraphs: [
          `Process pages often become misleading when several financial events are collapsed into one number. Source price, actual purchasing amount, domestic delivery, return costs and international freight belong to different stages. The same is true of time: seller dispatch, warehouse arrival, parcel submission, warehouse dispatch and first carrier visibility are different clocks. Store them separately even when an interface summarizes them on one screen.`,
          `For this workflow, the practical decision is to ${profile.decision}. Keep every planning amount or timing assumption provisional until the responsible event settles it. The final record must expose ${profile.record}; those fields show where a change belongs instead of forcing product, payment, warehouse and shipping updates into the same cell.`,
        ],
      },
      {
        id: `${slug}-failure-review`, label: "06 / FAILURE REVIEW", title: "Diagnose the three shortcuts most likely to mislead",
        paragraphs: [
          `${article.mistakes[0]} The missing element is the precise event that supports the claim. ${article.mistakes[1]} Here the page treats a partial observation as an answer to a broader operational question. ${article.mistakes[2]} This turns a conditional, dated state into a permanent expectation. Correct each problem by restoring the source, option or parcel reference and the timestamp at which it was observed.`,
          `Correct the shortcuts by applying ${article.checks.join(" ")} A useful ${slug.replaceAll("-", " ")} guide spends words on the stage, evidence and counterexample unique to that task. It should stop at this limit—${profile.boundary}—rather than padding an account-specific gap with generic advice.`,
        ], points: article.mistakes,
      },
      {
        id: `${slug}-close`, label: "07 / CLOSE THE LOOP", title: "Finish with an owner, an unresolved field and a next action",
        paragraphs: [
          `Before using this guide, verify that the record exposes ${profile.evidence}. The conclusion should say what is supported, what remains unknown and which person or system owns the next action. If the answer is an official account decision, prepare the relevant order or parcel reference and use PikoBuy’s published channel. An independent article should never imitate an approval, transaction update or support reply.`,
          `The publication result should be conditional on ${profile.evidence}. Proceed only when those fields support ${profile.decision}; pause where they conflict; and hand off the private outcome when ${profile.boundary}. Retain the actual review date and remove permanent labels that conceal which ${slug.replaceAll("-", " ")} event was checked.`,
        ], callout: `Required limit: ${profile.boundary}.`,
      },
    ],
  };
}

function sourceGuide(slug: string, profile: Profile): DeepGuide {
  const article = articles.find((item) => item.slug === slug)!;
  const platform = slug.split("-")[0] === "product" ? "multi-platform source" : slug.split("-")[0] === "source" ? "link chain" : slug.split("-")[0];
  return {
    sourceContext: sourceContext(profile, article),
    sections: [
      {
        id: `${slug}-identity`, label: "01 / IDENTITY", title: `Define the ${platform} object before comparing it`,
        paragraphs: [
          `${article.summary} The first task is identity, not price. The page must make it possible to ${profile.decision}. Save the visible domain, seller or album context and the most stable item identifier before any conversion. A title can be rewritten and a thumbnail reused; an identifier plus option and date gives a later reviewer a stronger path back to the same object.`,
          `Apply four identity controls in order: ${article.checks.join(" ")} Together they preserve what ${platform} showed before conversion and what the PikoBuy search result displayed afterwards. If one checkpoint fails, keep the conflict in the row; do not repair it by borrowing a title, photograph or price from another destination.`,
        ], points: article.checks,
      },
      {
        id: `${slug}-commercial-fields`, label: "02 / OPTION & PRICE", title: "Find the commercial condition hidden behind the starting figure",
        paragraphs: [
          `For this route, inspect ${profile.evidence}. A displayed number may belong to the cheapest size, a deposit, one component, a minimum quantity or an unselected variant. Preserve the currency and the exact option that produces the amount. If the source uses a range, keep the range until a chosen SKU produces a more specific result; do not publish the lower endpoint as though every pictured version costs the same.`,
          `The current facts for this route are: ${article.facts.join(" ")} Read them as a sequence, not as a promise of availability. The source observation, import result and actual purchasing outcome can differ. Give each its own date and preserve the earlier state when a seller, option, quantity or amount changes.`,
        ], callout: `Import limit: ${profile.boundary}.`,
      },
      {
        id: `${slug}-visual-match`, label: "03 / VISUAL MATCH", title: "Use the gallery as a comparison set, not a quality certificate",
        paragraphs: [
          `Compare the full image set before deciding two destinations represent the same item. Look for option-specific changes in colour, components, shape, print placement, packaging or measurements. One shared hero image is weak identity evidence: sellers can reuse promotional photography, and one listing can present several products beneath it. Write down which frame supports which visible field instead of attaching a general photo passed label.`,
          `Use the page's known failure modes as a counter-check: ${article.mistakes.join(" ")} For ${platform}, the gallery supports only the visible option details that can be matched to the saved identifier. Stock, seller performance and hidden product qualities remain separate questions; when the listing does not answer one, mark it unknown instead of extending the photograph beyond its evidence.`,
        ],
      },
      {
        id: `${slug}-handoff`, label: "04 / CONVERSION HAND-OFF", title: "Check what changed when the link entered PikoBuy",
        paragraphs: [
          `${article.facts.join(" ")} These official statements describe the search and purchasing workflow, not a marketplace endorsement. After pasting or searching, compare the imported title, primary image, visible seller context, options and amount with the raw source. A technical match means the route can be read; a research match means the exact product context survived the hand-off.`,
          `The hand-off record should contain ${profile.record}. If the ${platform} object cannot be found after import, keep those fields with an unavailable status and open a new candidate separately. This preserves why the earlier route ended. An import or account issue that depends on private data belongs with official support, accompanied by the item reference and a clear screenshot.`,
        ],
      },
      {
        id: `${slug}-scenario`, label: "05 / WORKED EXAMPLE", title: "Resolve a plausible mismatch without guessing",
        paragraphs: [
          `Use this hypothetical case: ${profile.scenario}. First isolate the field that changes the buying decision. Then compare its evidence across the raw page, saved record and imported destination. The lowest price or most familiar image should not win automatically. The correct outcome may be a matched option, a corrected spreadsheet note, an unavailable status or a decision to abandon the route.`,
          `Challenge that outcome using the most relevant check for this page: ${article.checks[0]} Then apply ${article.checks[1].toLowerCase()} and ${article.checks[2].toLowerCase()} If the evidence still cannot distinguish the intended object, the public status is unresolved. An ambiguous ${platform} source should never receive a confident purchasing conclusion merely because it imported successfully.`,
        ], callout: `Matching objective: ${profile.decision}.`,
      },
      {
        id: `${slug}-version-control`, label: "06 / VERSION CONTROL", title: "Keep the old observation when the external page changes",
        paragraphs: [
          `A maintainable source record contains ${profile.record}. Use an observed date for price and availability, a separate last-opened date for the destination and a correction date when editorial text changes. Automatic deployment dates are not source checks. This separation shows whether a stale statement came from a changed marketplace page, a broken redirect or an editorial oversight.`,
          `For ${platform}, end the old version when its seller, identifier, option structure or commercial role changes materially. Keep the last known state and record ${article.checks[3].toLowerCase()} A visually similar replacement starts a fresh row; it does not inherit the previous seller context, source amount or evidence merely because the thumbnail looks familiar.`,
        ], points: [`Store ${profile.record}.`, "Preserve raw and converted destinations together.", "Date price, availability and editorial changes separately.", "Archive changed identifiers; do not recycle their history."],
      },
      {
        id: `${slug}-publish`, label: "07 / PUBLISHING GATE", title: "Publish only the claim that the evidence can reproduce",
        paragraphs: [
          `${article.mistakes.join(" ")} These shortcuts fail for different reasons: one confuses source identity with verification, one strips price from its option, and one mistakes an old capture for a current commercial state. A reviewer should reopen the exact destination, repeat the option selection and confirm that the saved image and amount still describe the same object.`,
          `The final ${platform} page must expose its destination, the dated observation and the unresolved fields summarized by this boundary: ${profile.boundary}. A reviewer should be able to reproduce ${profile.decision}. That is a narrower and more defensible claim than saying the marketplace or PikoBuy approved an independent row.`,
        ], callout: `Required record: ${profile.record}.`,
      },
    ],
  };
}

function inspectionGuide(slug: string, profile: Profile): DeepGuide {
  const article = articles.find((item) => item.slug === slug)!;
  return {
    sourceContext: sourceContext(profile, article),
    sections: [
      {
        id: `${slug}-question`, label: "01 / INSPECTION QUESTION", title: "Turn a vague QC request into a visible question",
        paragraphs: [
          `${article.summary} The inspection task is to ${profile.decision}. Begin with a sentence that a photograph or measurement could actually answer: does the label show the selected size, is the promised lining present, are both pieces included, or what is the laid-flat width? A request for more photos without a decision question often produces extra images that repeat the same angle.`,
          `Use ${article.checks[0].toLowerCase()} as the first observable question, then ${article.checks[1].toLowerCase()} The next two controls—${article.checks[2].toLowerCase()} and ${article.checks[3].toLowerCase()}—define what the ${slug.replaceAll("-", " ")} review must settle before a broader interpretation is written.`,
        ], points: article.checks,
      },
      {
        id: `${slug}-official-limit`, label: "02 / SERVICE BOUNDARY", title: "Match the request to the inspection PikoBuy publicly describes",
        paragraphs: [
          `${article.facts.join(" ")} Those statements support a basic warehouse or research step, not laboratory testing or a guarantee. The evidence relevant here is ${profile.evidence}. Before requesting anything, identify which field can be seen, which can be measured and which cannot be established through this process at all.`,
          `${profile.boundary}. Apply that limit to ${profile.evidence}. Fields that the evidence can show belong in the observation column; hidden composition, performance or future durability stay unresolved. This gives ${slug.replaceAll("-", " ")} a useful scope without turning a basic photograph, measurement or checklist into a guarantee.`,
        ], callout: `Inspection boundary: ${profile.boundary}.`,
      },
      {
        id: `${slug}-shot-list`, label: "03 / EVIDENCE PLAN", title: "Order the evidence from identity to decisive detail",
        paragraphs: [
          `Start with identity: source item, selected option, quantity and a complete exterior view. Move next to the category field that can disqualify the item—such as a size label, internal lining, model number, closure or included component. End with measurements or close-ups that resolve a remaining conflict. This sequence avoids spending attention on cosmetic detail before confirming that the warehouse item is the product that was ordered.`,
          `For this ${slug.replaceAll("-", " ")} task, store ${profile.record}. Connect the requested evidence to ${article.checks[0].toLowerCase()} and ${article.checks[1].toLowerCase()} When another view resolves the question, append the observation and time; preserving the earlier gap explains why the request existed and may matter in a return or correction review.`,
        ], points: [`Identity evidence: ${article.checks[0]}`, `Visible-detail check: ${article.checks[1]}`, `Decision evidence: ${article.checks[2]}`, `Close-out: ${article.checks[3] || "Record the result and date."}`],
      },
      {
        id: `${slug}-measurement`, label: "04 / MEASUREMENT CONTROL", title: "A number is useful only when its method travels with it",
        paragraphs: [
          `Record the unit, start and end points, whether the item lies flat, and whether the value describes a body, garment, retail package or final parcel. Two charts can use the same label for different measurement methods. Keep the source value and any warehouse value side by side; a difference may reflect method, tolerance, option mismatch or an incorrect listing, and should not be assigned a cause without evidence.`,
          `Keep this page's decisive fields—${profile.evidence}—in their original units and context. Any conversion should sit beside the source value with its operation stated. If ${article.checks[2].toLowerCase()} cannot be repeated with the same method, leave the result conditional rather than assigning an exact fit, condition or parcel conclusion.`,
        ],
      },
      {
        id: `${slug}-scenario`, label: "05 / DECISION CASE", title: "Use the missing view to control the next action",
        paragraphs: [
          `Imagine this editorial scenario: ${profile.scenario}. List what the standard evidence does show, then write the single missing observation that could change the outcome. If that observation is available through an additional photo or measurement, request it while the product is still in the warehouse. If it requires specialist testing or a private seller decision, the article should stop and direct the matter to the correct official process.`,
          `Test the case against ${article.mistakes.join(" ")} Those errors show what a false positive would look like on this page. The evidence should support both a keep condition and a pause condition; when it supports neither, mark ${slug.replaceAll("-", " ")} unresolved instead of turning the request into a hunt for reassurance.`,
        ], callout: `Practical objective: ${profile.decision}.`,
      },
      {
        id: `${slug}-timing`, label: "06 / WAREHOUSE TIMING", title: "Resolve visible questions before packaging and parcel choices remove options",
        paragraphs: [
          `Warehouse review is a decision window, not a decorative gallery. Preserve tags, seals, boxes and included pieces while eligibility or seller consent may still matter. A packaging request can change dimensions and protection, but it may also change the condition evidence available for a return. Inspect first, decide second and authorize repacking only after the product record is sufficiently clear.`,
          `When evidence supports a problem, gather ${profile.record}. Then use the official account for the actual return or support result. The editorial ${slug.replaceAll("-", " ")} method can organize those materials, but ${profile.boundary}; it cannot pause a deadline or predict the seller's response.`,
        ],
      },
      {
        id: `${slug}-quality-gate`, label: "07 / QUALITY GATE", title: "Reject confident wording when the image set cannot support it",
        paragraphs: [
          `${article.mistakes.join(" ")} Correcting these errors requires a narrower claim, not more enthusiastic language. State which views were available, which field they answered and what stayed hidden. Remove all-purpose phrases such as full QC, perfect or guaranteed when the evidence is a limited photograph set or an editorial checklist.`,
          `Before publishing ${slug.replaceAll("-", " ")}, ask whether another reviewer can reconstruct ${profile.record}. Exact citations must support the public facts, examples must stay labelled, and the next-action list must name any decisive unobserved field. The page succeeds when it makes this uncertainty actionable: ${profile.boundary}.`,
        ], points: article.mistakes, callout: `Do not exceed this evidence: ${profile.evidence}.`,
      },
    ],
  };
}

function logisticsGuide(slug: string, profile: Profile): DeepGuide {
  const article = articles.find((item) => item.slug === slug)!;
  return {
    sourceContext: sourceContext(profile, article),
    sections: [
      {
        id: `${slug}-start-event`, label: "01 / START EVENT", title: "Choose the correct parcel event before interpreting the number",
        paragraphs: [
          `${article.summary} The analysis must first ${profile.decision}. A useful record identifies when the parcel was measured, submitted, paid, dispatched and first visible to a carrier. These events cannot borrow one another’s timestamps. A warehouse item can exist for days before a parcel is created, and a submitted parcel can exist before an external tracking feed shows an event.`,
          `The required sequence for ${slug.replaceAll("-", " ")} is: ${article.checks.join(" ")} Give each checkpoint an event time, the system that showed it and its parcel reference. This makes the page's specific distinction—${profile.decision}—visible without relying on a broad shipped, pending or calculated badge.`,
        ], points: article.checks,
      },
      {
        id: `${slug}-inputs`, label: "02 / INPUT CONTROL", title: "Preserve the parcel data that the route comparison actually used",
        paragraphs: [
          `${article.facts.join(" ")} These official facts describe visible inputs or timing, not a universal price or delivery promise. For this page the practical evidence is ${profile.evidence}. Store the destination, product type, packed measurements, selected route and observation date together. A figure detached from those inputs cannot be reproduced when packaging or route availability changes.`,
          `For this topic, retain ${profile.record}. If those fields are assumptions, label the result as planning evidence and show the assumption date. When ${article.checks[2].toLowerCase()} changes the parcel or timeline, append the new result rather than carrying the earlier ${slug.replaceAll("-", " ")} figure forward as settled.`,
        ], callout: `Calculation limit: ${profile.boundary}.`,
      },
      {
        id: `${slug}-scenario`, label: "03 / SCENARIO", title: "Explain the apparent contradiction with parcel evidence",
        paragraphs: [
          `Consider this research example: ${profile.scenario}. The source price cannot explain the outcome, and neither can one weight value viewed in isolation. Reconstruct the packed measurements or dispatch sequence, then identify the rule or event that belongs to the selected route. The result may be a volume-sensitive estimate, a packaging change, a dispatch-to-scan gap or an unresolved account issue.`,
          `Challenge the scenario with the route-specific checks: ${article.checks[0]} ${article.checks[1]} Then apply ${article.checks[3].toLowerCase()} If the public source does not supply the needed calculation or event, keep the result unresolved and take the private parcel reference to official support; do not import a rule from a different route.`,
        ], callout: `Scenario decision: ${profile.decision}.`,
      },
      {
        id: `${slug}-cost-boundary`, label: "04 / COST BOUNDARY", title: "Keep merchandise, handling and international transport as separate lines",
        paragraphs: [
          `A low source amount does not imply low international freight, and an editorial currency conversion is not an invoice. Record merchandise price in its original currency, actual purchasing amount, domestic seller delivery, any return cost, the planning freight estimate and final parcel charge on separate lines. This makes it possible to explain a change without inventing a single landed-cost figure before the evidence exists.`,
          `The ${slug.replaceAll("-", " ")} cost record must expose ${profile.evidence}. Save the rejected interpretation or route when its reason matters. This lets a later reviewer see whether the decision turned on size, timing, acceptance, tracking or another page-specific field instead of treating the headline amount as the whole explanation.`,
        ],
      },
      {
        id: `${slug}-risk-language`, label: "05 / RISK LANGUAGE", title: "Describe logistics uncertainty without pretending every delay is normal",
        paragraphs: [
          `International transport involves third-party providers and cross-border events, but that does not justify a vague wait forever response. Anchor the review to the last confirmed event, the published timing statement relevant to it and the latest dated carrier information. Escalation should be based on missing or contradictory evidence, not copied anecdotes from a different route and destination.`,
          `${profile.boundary}. The operational advice therefore stops at ${article.checks[3].toLowerCase()} Readers should know whether this ${slug.replaceAll("-", " ")} page explains an estimator input, event sequence or public timing statement; it has not inspected a carrier contract or private parcel outcome.`,
        ],
      },
      {
        id: `${slug}-audit-trail`, label: "06 / AUDIT TRAIL", title: "Keep enough data to repeat the route or timing check",
        paragraphs: [
          `The minimum audit trail is ${profile.record}. Retain original units and event timestamps. If a route quote changes after repacking, append the new dimensions and result. If a scan appears later, append the carrier event rather than replacing the dispatch time. Versioned records turn a confusing change into a sequence that can be explained.`,
          `A new review date for ${slug.replaceAll("-", " ")} requires a real action drawn from ${article.checks.join(" ")} A deployment is not that action. If one dynamic field is no longer available, keep its prior date or mark it unavailable while preserving ${profile.record}.`,
        ], points: [`Store ${profile.record}.`, "Keep assumptions beside estimates.", "Append changed parcel data and carrier events.", "Do not auto-refresh the verification date."],
      },
      {
        id: `${slug}-review`, label: "07 / FINAL REVIEW", title: "Make the next logistics action unambiguous",
        paragraphs: [
          `${article.mistakes.join(" ")} Each error mixes evidence from different parcels, stages or rules. Replace it with the exact destination, selected route, packed data and event time relevant to the case. A reader should be able to see whether the next action is remeasure, compare routes, wait for the published visibility window, or contact official support with a parcel reference.`,
          `Before publication, trace the official facts—${article.facts.join(" ")}—to their exact pages. Label the ${profile.scenario} example as editorial, remove unsupported numerical promises and state ${profile.boundary}. The article is complete when its own parcel evidence and next action are visible together.`,
        ], points: article.mistakes,
      },
    ],
  };
}

function categoryGuide(slug: string, profile: Profile, brief: CategoryBrief): DeepGuide {
  const article = articles.find((item) => item.slug === slug)!;
  return {
    sourceContext: sourceContext(profile, article),
    sections: [
      {
        id: `${slug}-comparison-unit`, label: "01 / COMPARISON UNIT", title: "Define one product before ranking several rows",
        paragraphs: [
          `${article.summary} For this collection, the defensible comparison unit is ${brief.unit}. Write that identity at the top of the row before looking at popularity or source price. Otherwise, visually similar entries can be ranked together even though their selected configurations, construction or included pieces are not comparable.`,
          brief.notes[0],
        ], points: article.checks,
      },
      {
        id: `${slug}-measurement-plan`, label: "02 / MEASUREMENT PLAN", title: "Choose dimensions that answer this category’s fit question",
        paragraphs: [
          `The core measurement set is ${brief.measurement}. Keep the seller’s original values and units, and note whether they describe a body, the finished product or its package. If you add a conversion, place it beside the original. A clean number without a method is weaker than a slightly uncertain number whose endpoints and technique are documented.`,
          brief.notes[1],
        ], callout: `Category measurement rule: ${brief.measurement}.`,
      },
      {
        id: `${slug}-photo-sequence`, label: "03 / PHOTO SEQUENCE", title: "Request views in the order a decision needs them",
        paragraphs: [
          `For this category, a purposeful sequence is ${brief.photos}. Begin with whole-object identity, then move to the detail most likely to disqualify the item. A request for random extra photographs wastes the warehouse review window if none answers the remaining question. Tie every requested frame to a visible field in the row.`,
          brief.notes[2],
        ],
      },
      {
        id: `${slug}-variant-trap`, label: "04 / VARIANT TRAP", title: "Do not let the hero image choose the SKU for you",
        paragraphs: [
          `A typical mismatch in this collection occurs when ${brief.optionTrap}. Match the option text and selected price to the exact version rather than assuming the most attractive gallery frame is included. If the source uses a starting amount, store it as a range or conditional price until the intended option produces its own figure.`,
          brief.notes[3],
        ], callout: `Common category mismatch: ${brief.optionTrap}.`,
      },
      {
        id: `${slug}-parcel-choice`, label: "05 / PACKAGING & PARCEL", title: "Make the protection decision from construction, not habit",
        paragraphs: [
          `The key packaging trade-off is that ${brief.parcel}. Record the current retail packaging, the requested change and the reason. Then compare final packed weight and dimensions when choosing an international route. Source price cannot answer this question, and product weight alone cannot reproduce a parcel quote.`,
          brief.notes[4],
        ],
      },
      {
        id: `${slug}-reject-rules`, label: "06 / REJECTION RULES", title: "Know which missing field should remove a row from the shortlist",
        paragraphs: [
          `Reject or pause a candidate when ${brief.reject}. These are not cosmetic editorial preferences. Each missing field prevents a repeatable comparison or hides a decision that must be made before purchasing. An unknown field can stay visible if it is non-decisive; a decisive unknown should not be buried beneath a high-resolution hero image or a low starting price.`,
          brief.notes[5],
        ], points: article.mistakes,
      },
      {
        id: `${slug}-record-schema`, label: "07 / RECORD SCHEMA", title: "Store the fields another reviewer would need tomorrow",
        paragraphs: [
          `A complete row for this category keeps ${brief.fields}. Those fields combine identity, comparison evidence, parcel context and date. They are intentionally more detailed than title, image and link because those three fields cannot explain why a product was shortlisted or why a later change invalidated it.`,
          `${brief.notes[6]} The row is ready only when another reviewer can restate ${brief.unit} without relying on the category name, hero image or an unexplained price alone.`,
        ], points: [`Record ${brief.fields}.`, `Decision boundary: ${profile.boundary}.`, "Use a dated observation instead of a permanent approval label.", "Open the current category collection for discovery; open the exact product record for facts."],
        callout: `Minimum evidence for this category: ${profile.evidence}.`,
      },
    ],
  };
}

function trustGuide(slug: string, profile: Profile): DeepGuide {
  const article = articles.find((item) => item.slug === slug)!;
  return {
    sourceContext: sourceContext(profile, article),
    sections: [
      {
        id: `${slug}-role`, label: "01 / PUBLISHER ROLE", title: "State who can know and change the underlying record",
        paragraphs: [
          `${article.summary} The page must first make it possible to ${profile.decision}. An independent research site can reopen public pages, document product records and explain an editorial method. It cannot inspect an account, approve a return, change a payment, control a seller or alter a parcel. Those limits belong near the decision, not hidden in a footer.`,
          `Apply the page-specific actions in order: ${article.checks.join(" ")} They define what ${slug.replaceAll("-", " ")} can responsibly ask a reader to do. The linked destination should reveal whether it leads to a FindSpreadsheet record, a PikoBuy policy or an official support route, so descriptive brand use never turns into an implied affiliation.`,
        ], points: article.checks,
      },
      {
        id: `${slug}-claim-register`, label: "02 / CLAIM REGISTER", title: "Give every important sentence an owner, source and date",
        paragraphs: [
          `${article.facts.join(" ")} These are the page’s factual anchors. The evidence set is ${profile.evidence}. Store the exact destination, section checked and review date for each material claim. A generic homepage citation is inadequate when the statement concerns returns, estimator inputs, forwarding terms or contact routes because those facts live on different official pages.`,
          `The claim register for this topic keeps ${profile.record}. Use those fields to separate the page's factual anchors from its advice. Where the official source is silent, the ${slug.replaceAll("-", " ")} page must say so; where a FindSpreadsheet product record supplies the observation, cite that exact record instead of presenting its description as PikoBuy wording.`,
        ], callout: `Authority limit: ${profile.boundary}.`,
      },
      {
        id: `${slug}-scenario`, label: "03 / TRUST TEST", title: "Resolve a realistic confusion before it reaches the reader",
        paragraphs: [
          `Consider this editorial scenario: ${profile.scenario}. Identify which visual or wording created the mistaken assumption. Then add the missing source label, affiliation boundary, date or destination disclosure at the point of confusion. A disclaimer somewhere else is not enough if the call to action, logo treatment or support wording still implies a relationship that does not exist.`,
          `Now challenge the scenario with the known failure modes: ${article.mistakes.join(" ")} A careful reader must be able to reproduce the check and see why the error would matter specifically on ${slug.replaceAll("-", " ")}. If not, restore ${profile.record}; softer wording alone cannot repair missing provenance.`,
        ],
      },
      {
        id: `${slug}-freshness`, label: "04 / FRESHNESS CONTROL", title: "A new date must correspond to a real review action",
        paragraphs: [
          `Policy, product and deployment dates serve different purposes. Reopening a policy can support a new policy-review date. Rechecking a product URL, image, option and price can support a product-record date. Rebuilding the interface only supports a software change log. Never update all three because one of them happened; that creates the appearance of freshness without evidence.`,
          `Freshness for this route means ${article.checks[0].toLowerCase()} and ${article.checks[1].toLowerCase()} If no material wording changed, record that result. If the source vanished, retain the last successful check. A conclusion-changing correction should show its before and after state so the ${slug.replaceAll("-", " ")} history remains auditable.`,
        ],
      },
      {
        id: `${slug}-support-boundary`, label: "05 / OFFICIAL HAND-OFF", title: "Move private outcomes to the channel that can inspect them",
        paragraphs: [
          `Account, order, payment, refund and parcel questions require private data. The research site can help a reader gather an order or parcel reference, status screenshot, relevant timestamp and concise expected resolution. It should then direct the case to the official support route published by PikoBuy. It must not ask for passwords, payment credentials or sensitive account details.`,
          `${profile.boundary}. For ${slug.replaceAll("-", " ")}, that means the hand-off package should contain ${profile.record}. Community discussion may add context, but it cannot issue the private decision. If a response suggests a broader policy change, reopen the current public source before changing this or any dependent guide.`,
        ],
      },
      {
        id: `${slug}-correction`, label: "06 / CORRECTION DESIGN", title: "Correct the claim and every page that inherited it",
        paragraphs: [
          `A correction begins with the cited sentence, not a vague update label. Reopen the source, compare the current wording and identify whether the problem was a factual error, stale product observation, broken link, translation issue or editorial judgment. Update dependent pages and leave a concise log that names the affected record and material change.`,
          `${article.mistakes.join(" ")} Repair each problem by restoring ${profile.evidence} and then recording ${profile.record}. Deleting the earlier state may make the ${slug.replaceAll("-", " ")} page look cleaner, but it removes the evidence needed to explain the correction and makes recurrence more likely.`,
        ], points: article.mistakes,
      },
      {
        id: `${slug}-publish`, label: "07 / PUBLICATION TEST", title: "Make the page useful even when the reader never clicks",
        paragraphs: [
          `Before publication, a skeptical reader should be able to find ${profile.evidence}. The page should also preserve ${profile.record}. Check that every important outbound link exposes its destination, every current claim has a real review action and every example is labelled as an example. Remove any phrase that sounds like access to a seller, warehouse or account when no such access exists.`,
          `The final ${slug.replaceAll("-", " ")} test is whether the reader can ${profile.decision}. If the article changes that real decision, its search value comes from usefulness. If it merely repeats a brand and supplies another link, the missing work is the evidence set—${profile.evidence}—not an extra block of keywords.`,
        ], callout: `Transparent record: ${profile.record}.`,
      },
    ],
  };
}

function expandedGuide(slug: string): DeepGuide | undefined {
  const article = articles.find((item) => item.slug === slug);
  const profile = profiles[slug];
  if (!article || !profile) return undefined;
  if (categoryBriefs[slug]) return categoryGuide(slug, profile, categoryBriefs[slug]);
  if (workflowSlugs.has(slug)) return workflowGuide(slug, profile);
  if (sourceSlugs.has(slug)) return sourceGuide(slug, profile);
  if (inspectionSlugs.has(slug)) return inspectionGuide(slug, profile);
  if (logisticsSlugs.has(slug)) return logisticsGuide(slug, profile);
  return trustGuide(slug, profile);
}

export const expandedGuides = Object.fromEntries(
  Object.keys(profiles).filter((slug) => slug !== "faq").map((slug) => [slug, expandedGuide(slug)]).filter((entry) => entry[1]),
) as Record<string, DeepGuide>;
