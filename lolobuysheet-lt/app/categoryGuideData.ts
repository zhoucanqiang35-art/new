export type CategoryFaq = {
  question: string;
  answer: string;
};

export type CategoryGuide = {
  seoTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  guideTitle: string;
  paragraphs: string[];
  faqs: CategoryFaq[];
  relatedLinks: { label: string; href: string }[];
};

export const categoryGuideData: Record<string, CategoryGuide> = {
  jackets: {
    seoTitle: "LoloBuy Jackets Spreadsheet Guide: Sizing and QC",
    metaDescription: "Compare LoloBuy jacket listings with a practical guide to measurements, warehouse photos, construction checks and shipping decisions.",
    h1: "LoloBuy Jackets Spreadsheet and Buying Guide",
    intro: "Use jacket listings as a shortlist, then verify fit, construction and packing details before you accept an item for international shipping.",
    guideTitle: "How to compare jackets before you order",
    paragraphs: [
      "A jacket listing is difficult to judge from its cover image because the parts that determine usefulness are usually measurements, internal construction and seasonal weight. Start with the seller's current page rather than a saved screenshot. Record the exact colour, size and version, then compare the size chart with a jacket you already wear. Chest width, shoulder width, sleeve length and back length are more useful than a familiar size letter. If a measurement is missing, treat fit as unresolved instead of assuming that an overseas label matches your usual size.",
      "At the warehouse, first confirm that the received garment matches the selected option. Review the front and back, then inspect the zip path, snaps, cuffs, hem, pockets, lining and any detachable pieces. A photograph can reveal an incorrect colour, obvious marks or visible construction problems, but it cannot prove warmth, waterproofing, fibre composition or long-term durability. When a missing view would change your decision, request one precise photograph or measurement if the current account offers that service. Save the order selection and warehouse evidence together.",
      "Outerwear can also change a parcel's shipping profile. A padded or oversized jacket may occupy much more space than its product price suggests, while rigid packaging can increase the packed dimensions further. Do not use a fixed jacket weight from another buyer as your estimate. Wait for the warehouse record, compare the packed measurements and check the live routes available for your destination. If packaging reduction is offered, weigh protection against size rather than automatically removing everything. Route rules, volumetric calculations and restricted-item policies must be checked on the actual parcel screen.",
      "Finish with a three-part decision. Keep the jacket when the option, visible condition and measurements support your needs. Ask a focused question when one missing fact can still resolve the uncertainty. Check the live after-sales path promptly when the item is wrong or visibly defective. This evidence-first process is slower than buying from a thumbnail, but it reduces the common mistakes that become expensive after international shipment: choosing by label alone, overlooking a missing component and budgeting from an unmeasured box.",
    ],
    faqs: [
      { question: "How should I choose a jacket size from a LoloBuy listing?", answer: "Compare the seller's current measurements with a jacket that fits you. Prioritize chest, shoulder, sleeve and back length, and do not treat the size letter as a universal standard." },
      { question: "Can warehouse photos confirm that a jacket is waterproof or warm?", answer: "No. Photos can document visible construction and condition, but they cannot establish waterproof performance, insulation quality, fabric composition or future durability." },
      { question: "Which jacket details are useful to check during QC?", answer: "Confirm the ordered option, then inspect closures, cuffs, seams, pockets, lining and included detachable parts. Request a precise missing view only when it can change the decision." },
      { question: "Will removing jacket packaging always reduce shipping cost?", answer: "Not necessarily. Use the warehouse measurements and live route calculation because protection, packed volume and route rules all affect the final decision." },
    ],
    relatedLinks: [
      { label: "Review warehouse photos", href: "/articles/lolobuy-qc-photos-guide" },
      { label: "Compare shipping weight", href: "/articles/lolobuy-actual-vs-volumetric-weight" },
    ],
  },
  "t-shirts": {
    seoTitle: "LoloBuy T-Shirts Spreadsheet Guide: Fit, Print and QC",
    metaDescription: "Use this LoloBuy T-shirt guide to compare measurements, print placement, fabric clues and warehouse evidence before shipping.",
    h1: "LoloBuy T-Shirts Spreadsheet and Fit Guide",
    intro: "Compare T-shirt listings through measurements and visible construction, not only a size label or promotional image.",
    guideTitle: "A measurement-first T-shirt workflow",
    paragraphs: [
      "T-shirts look simple, yet small differences in cut can decide whether an item is wearable. Open the current seller listing and record the selected colour, size and design before ordering. Compare chest width, body length and shoulder width with a shirt you own. If the page gives circumference rather than flat width, make sure you are comparing the same measurement method. Terms such as oversized, boxy and slim are descriptions, not measurements, and the same size label can represent different dimensions across sellers.",
      "Print and embroidery options require a second layer of verification. Save the listing image that corresponds to the exact option, including front and back designs. During warehouse review, confirm the colour and size tag first, then compare the collar shape, shoulder seams, sleeve alignment, hem, print scale and placement. Neutral lighting is helpful when colour matters, but photographs are not calibrated colour measurements. A clean image also cannot confirm the precise fabric composition, softness, shrinkage or how the print will behave after washing.",
      "For a useful additional request, identify one decision point. A flat chest measurement can resolve sizing uncertainty; a straight-on front view can clarify print position; a close view can document an obvious mark. Asking for generally better photos may add images without answering the question. Keep expectations proportional to the item: visible defects and incorrect options are suitable for image review, while feel, long-term wear and laundering performance remain uncertain until the garment is used.",
      "T-shirts are often consolidation candidates because several items can be packed together, but the best parcel still depends on measured weight, dimensions, other contents and available routes. Do not multiply a guessed garment weight by the number of shirts. Use the warehouse figures, compare a combined parcel with sensible alternatives and retain the order, QC and parcel records. The spreadsheet should speed up discovery; the live listing and warehouse evidence should control the purchase and shipping decisions.",
    ],
    faqs: [
      { question: "Are LoloBuy T-shirt size labels the same as US or European sizes?", answer: "Do not assume they are. Compare the live seller chart with a T-shirt that fits you, using the same measurement method for chest, length and shoulders." },
      { question: "What should I check in T-shirt warehouse photos?", answer: "Verify the selected colour and size, then review the collar, seams, print or embroidery placement, hem and visible surface condition." },
      { question: "Can QC photos prove T-shirt fabric quality?", answer: "No. Images may show texture and visible finish, but they cannot confirm exact fibre composition, softness, shrinkage or long-term print durability." },
      { question: "Should several T-shirts be consolidated into one parcel?", answer: "Compare the actual combined parcel with split options. Measured weight, packed size, other contents and destination routes determine whether consolidation is sensible." },
    ],
    relatedLinks: [
      { label: "Use a spreadsheet without buying blind", href: "/articles/how-to-use-a-lolobuy-spreadsheet" },
      { label: "Plan parcel consolidation", href: "/articles/lolobuy-parcel-consolidation-guide" },
    ],
  },
  shoes: {
    seoTitle: "LoloBuy Shoes Spreadsheet Guide: Sizing, QC and Shipping",
    metaDescription: "Use this practical LoloBuy shoes guide to compare sizing, request useful warehouse photos and review live shipping information before ordering.",
    h1: "LoloBuy Shoes Spreadsheet and Buying Guide",
    intro: "Shortlist shoes by style, then verify the seller's size system, pair consistency and packed shipping profile before making a parcel decision.",
    guideTitle: "How to review shoes without relying on the cover image",
    paragraphs: [
      "Begin with the live seller page because a spreadsheet row can outlast a price, option or size chart. Save the exact colourway and size system shown for the option you intend to order. Compare the seller's foot-length or insole guidance with footwear that fits you, and note whether the chart refers to foot length, insole length or a regional size. Those values are not interchangeable. An insole measurement can improve the evidence when available, but it still cannot guarantee comfort because width, last shape and personal preference matter.",
      "When warehouse images arrive, compare both shoes together before zooming into details. Confirm the size tags and selected colour, then review toe shape, heel alignment, sole profile, panel symmetry, stitching and visible glue. Check that expected accessories are present. Lighting and camera angle can distort colour and proportion, so use several views rather than judging from one close-up. Standard photographs cannot prove authenticity, hidden materials, cushioning performance or long-term durability, and this directory does not certify sellers or batches.",
      "If an uncertainty can be resolved visually, make the request specific: photograph both heel tabs straight on, show the size tags, or measure the removable insole if the service and construction allow it. Avoid asking for a vague quality check. The goal is to obtain evidence for a decision, not to accumulate pictures. When the item is incorrect or visibly defective, preserve the seller option, order record and warehouse images, then review the current after-sales controls promptly rather than relying on an old return deadline.",
      "Shoes and their boxes can create a very different parcel from soft clothing. Keeping a box may add protection or be important to the buyer, but it can also increase packed volume. There is no reliable universal shoe weight or guaranteed saving from removing packaging. Compare the warehouse weight and dimensions, current packing choices and live destination routes. Decide whether to keep, reduce or reinforce packaging based on the actual pair and its value to you, then save the submitted parcel details for later tracking or support.",
    ],
    faqs: [
      { question: "How do I choose the correct shoe size from a LoloBuy spreadsheet?", answer: "Open the live seller chart and distinguish foot length, insole length and regional sizing. Compare like-for-like measurements with footwear that fits you." },
      { question: "What should I inspect in LoloBuy shoe warehouse photos?", answer: "Confirm both size tags and the selected colour, then compare the pair's toe shape, heels, soles, panels, stitching, visible glue and included accessories." },
      { question: "Are shoe links or batches on this page verified as safe or authentic?", answer: "No. The page is a discovery guide and does not certify sellers, batches or authenticity. Recheck the live listing and treat unsupported quality claims as unverified." },
      { question: "Should I remove the shoe box before international shipping?", answer: "Use the actual warehouse measurements and current packing options. Removing a box may reduce volume, but it also changes protection and does not guarantee a lower charge on every route." },
    ],
    relatedLinks: [
      { label: "Read the QC photo guide", href: "/articles/lolobuy-qc-photos-guide" },
      { label: "Compare route chargeable weight", href: "/articles/lolobuy-actual-vs-volumetric-weight" },
      { label: "Prepare return evidence", href: "/articles/lolobuy-return-refund-evidence-guide" },
    ],
  },
  "hoodies-sweaters": {
    seoTitle: "LoloBuy Hoodies Spreadsheet Guide: Measurements and QC",
    metaDescription: "Compare LoloBuy hoodies and sweaters using measurements, visible finishing, warehouse evidence and live parcel calculations.",
    h1: "LoloBuy Hoodies and Sweaters Spreadsheet Guide",
    intro: "Use measurements and warehouse evidence to compare hoodies and knitwear whose fit and packed bulk may differ from their listing photos.",
    guideTitle: "How to compare hoodies and sweaters",
    paragraphs: [
      "A hoodie or sweater can look similar across listings while differing substantially in cut, thickness and finishing. Start on the current seller page and save the exact colour, size and design option. Compare chest width, body length, shoulder and sleeve measurements with a garment you own. For dropped-shoulder or oversized cuts, the shoulder number may not describe fit in the usual way, so use the full set of measurements. Fabric-weight language can be useful context, but do not turn an unverified seller description into a measured fact.",
      "At warehouse review, confirm the option and size before examining details. Check the hood shape, drawstrings, cuffs, hem, pocket alignment, zip path where present, knit consistency and print or embroidery placement. Look for obvious stains, pulls or holes across more than one view. Photos can document visible texture and construction, but they cannot establish exact fibre composition, warmth, softness, colourfastness or performance after washing. Separate what the image shows from what the seller claims.",
      "Additional evidence should answer a precise concern. A flat chest or length measurement can address fit; a close view can clarify embroidery or a suspected surface mark. If the item differs from the selected option, save the relevant listing image and warehouse view side by side. Check the live return or after-sales path promptly because timing and seller cooperation can vary. Avoid quoting a fixed return window unless it is displayed for that order at the time of action.",
      "Thick fleece and knitwear may compress, but they can still contribute considerable parcel volume. Do not estimate shipping by copying another buyer's garment weight. Use warehouse measurements, packing choices and the current route list for the destination. When consolidating with other items, compare the combined chargeable weight with reasonable splits and consider product restrictions. The useful outcome is a recorded decision based on the actual garments, not a general promise that one large parcel is always cheaper.",
    ],
    faqs: [
      { question: "How should I choose a hoodie size?", answer: "Compare chest, length, shoulder and sleeve figures with a hoodie that fits you. Account for oversized or dropped-shoulder cuts instead of relying on the label alone." },
      { question: "Can warehouse photos confirm hoodie fabric weight or composition?", answer: "Not reliably. Images can show visible texture and construction, but exact weight, fibre content, warmth and wash performance require stronger evidence." },
      { question: "Which hoodie details should be checked before shipping?", answer: "Verify colour and size, then inspect the hood, drawstrings, cuffs, hem, pockets, closures and print or embroidery placement." },
      { question: "Do thick hoodies always cost more to ship?", answer: "Packed volume can matter, but there is no universal answer. Compare the measured parcel and chargeable-weight rule for each live route." },
    ],
    relatedLinks: [
      { label: "Understand warehouse status", href: "/articles/lolobuy-order-warehouse-status-guide" },
      { label: "Plan storage and parcel timing", href: "/articles/lolobuy-warehouse-storage-planning" },
    ],
  },
  "pants-shorts": {
    seoTitle: "LoloBuy Pants and Shorts Guide: Fit, QC and Shipping",
    metaDescription: "Compare LoloBuy pants and shorts through waist, rise and inseam measurements, warehouse photos and evidence-based parcel planning.",
    h1: "LoloBuy Pants and Shorts Spreadsheet Guide",
    intro: "Compare bottoms with measurement-led checks for cut, hardware and visible construction before international shipping.",
    guideTitle: "A practical fit workflow for pants and shorts",
    paragraphs: [
      "Bottoms are especially sensitive to measurement method. A listed waist may be a flat width, a full circumference or an unstretched elastic measurement. Open the live seller chart and identify the method before comparing it with trousers or shorts that fit you. Record waist, hip, rise and inseam or outseam as available, along with the selected cut and colour. A familiar size number is not enough because relaxed, straight, tapered and oversized shapes distribute those measurements differently.",
      "At warehouse intake, confirm the size tag and option, then review the waistband, fly, buttons or zip, belt loops, pocket placement, hems and visible seams. For denim or washed garments, compare the overall tone across several images because lighting can change its appearance. A photo can document obvious damage, a missing drawstring or a visibly incorrect wash; it cannot guarantee fabric stretch, comfort, composition or shrinkage. Treat those as remaining product uncertainties rather than passed checks.",
      "When fit is the deciding concern, request one useful measurement if the current service allows it and the existing evidence is insufficient. State the endpoints clearly, such as flat waistband or full outseam, so the result can be compared with your reference garment. Save the seller chart used at purchase because listings can change. If the wrong size or option arrives, pair that saved record with the warehouse evidence and use the current after-sales route without assuming an old published deadline applies.",
      "For parcel planning, soft bottoms may pack efficiently, but heavy denim, hardware and multiple items can still affect actual weight. Do not rely on a fixed category average. Compare the final warehouse figures and live routes after the parcel contents are selected. Consolidation can reduce repeated base charges, while a larger parcel can also change chargeable weight or route eligibility. Record both the combined quote and any realistic split alternative before paying so the decision remains auditable.",
    ],
    faqs: [
      { question: "Which measurements matter most for pants and shorts?", answer: "Use the seller's measurement method and compare waist, hip, rise and inseam or outseam with a garment that fits you." },
      { question: "What should warehouse photos show for bottoms?", answer: "Check the ordered size and colour, waistband, closures, pockets, seams, hems, hardware and any visible wash or surface problem." },
      { question: "Can a size tag confirm that pants will fit?", answer: "No. Tags are not universal, and cut changes how measurements feel. The current chart and a like-for-like garment comparison provide better evidence." },
      { question: "Are pants and shorts always efficient to consolidate?", answer: "Not always. Use actual warehouse weight, packed dimensions, other parcel contents and current route rules to compare combined and split options." },
    ],
    relatedLinks: [
      { label: "Plan parcel consolidation", href: "/articles/lolobuy-parcel-consolidation-guide" },
      { label: "Compare shipping costs", href: "/articles/lolobuy-shipping-cost-guide" },
    ],
  },
  "short-sets": {
    seoTitle: "LoloBuy Short Sets Guide: Sizing, Completeness and QC",
    metaDescription: "Review LoloBuy short-set listings by checking both garments, measurements, colour consistency, included pieces and warehouse evidence.",
    h1: "LoloBuy Short Sets Spreadsheet and QC Guide",
    intro: "Treat every coordinated set as two separate garments that must both match the selected option and measurement expectations.",
    guideTitle: "How to verify a two-piece set",
    paragraphs: [
      "The first risk with a set is completeness. Read the live option carefully because some product pages use similar images for a top, bottom or full set. Save the exact option name, colour, size and included pieces before ordering. Then compare measurements for both garments with items you already own. A single size label does not show whether the top and bottom will fit equally well, and some sellers may provide different charts or measurement methods for each component.",
      "At the warehouse, count the pieces before evaluating appearance. Confirm that the top and bottom share the selected colour and design, then review them separately. For the top, examine collar or hood, sleeves, print and hem. For the bottom, inspect waistband, drawstring, pockets and hems. Compare logos, trims or panels intended to match across the set. Lighting can affect colour, so use views where both pieces appear together as well as individual detail images.",
      "Warehouse photos can reveal a missing piece, incorrect option, visible stain or major mismatch. They cannot prove that two fabrics came from the same production lot, establish fibre composition or guarantee fit and wash performance. If a measurement or matching detail would change your decision, request that specific evidence if available. Preserve the saved seller option and warehouse record, especially when a product title is ambiguous. A factual comparison is more useful for after-sales than a general statement that the set looks wrong.",
      "A set also needs to remain linked in your parcel planning notes so one component is not accidentally omitted. When consolidating several warehouse items, verify that both pieces are selected and reflected in the packed contents. Use the measured parcel weight, dimensions and live destination routes rather than assuming a two-piece outfit has a standard shipping cost. The goal is a complete, correctly selected set whose visible condition is documented before international shipment.",
    ],
    faqs: [
      { question: "How do I know whether a listing includes a full short set?", answer: "Read and save the exact live option. Similar listing images may represent a top, bottom or full set, so the selected option controls the order." },
      { question: "Should I measure both pieces of a set?", answer: "Yes. Compare the top and bottom separately because one shared size label does not guarantee that both parts suit your measurements." },
      { question: "What should short-set QC photos confirm?", answer: "Confirm completeness, size, colour and design, then inspect the top and bottom separately and together for matching details and visible defects." },
      { question: "Can the two pieces be separated during consolidation?", answer: "Keep the warehouse item and parcel contents documented, and confirm both pieces are selected. The live parcel record should control what is packed." },
    ],
    relatedLinks: [
      { label: "Interpret warehouse statuses", href: "/articles/lolobuy-order-warehouse-status-guide" },
      { label: "Prepare after-sales evidence", href: "/articles/lolobuy-return-refund-evidence-guide" },
    ],
  },
  headwear: {
    seoTitle: "LoloBuy Hats and Caps Guide: Sizing and Warehouse QC",
    metaDescription: "Compare LoloBuy headwear listings with checks for circumference, crown shape, embroidery, closures and packed condition.",
    h1: "LoloBuy Hats and Headwear Spreadsheet Guide",
    intro: "Verify sizing range, shape and visible finishing before approving caps, hats or beanies for international shipping.",
    guideTitle: "How to compare headwear accurately",
    paragraphs: [
      "Headwear sizing is easy to overlook because many listings appear adjustable or use a one-size label. Open the current seller page and identify whether the product is fitted, adjustable or stretch-based. Save the stated circumference or adjustment range and compare it with a hat that fits you. Crown height, brim width and overall profile can also affect fit and appearance. If those details are absent, keep the uncertainty visible rather than assuming that the product photograph establishes scale.",
      "During warehouse review, confirm the selected colour, size and closure type. For caps, compare the crown, brim curve, front panel, ventilation eyelets, embroidery and rear adjustment. For beanies, check the cuff, knit consistency and label placement. For structured hats, look for crushing or distortion caused by handling. A photograph can show visible shape and finishing, but it cannot establish exact fibre content, comfort, colourfastness or how the item will respond to moisture and repeated wear.",
      "Straight-on views are valuable when embroidery alignment or crown symmetry matters. A side profile can clarify brim and crown shape, while an interior view can show the closure, sweatband and visible label. Request only the missing angle that can change the decision. If the item is visibly deformed, distinguish temporary packing pressure from permanent damage when possible, but do not claim that a shape will recover without evidence. Save the condition before approving further packing.",
      "Shipping decisions involve a tradeoff between space and shape protection. Flattening an unstructured item may reduce volume, while a rigid cap or hat may need support. There is no universal packaging instruction for the category. Use the actual item, available packing services and live route calculation. When consolidating headwear with heavier goods, consider whether placement could damage the crown or brim, and record any protection request clearly before parcel submission and final payment.",
    ],
    faqs: [
      { question: "Does one-size headwear fit every buyer?", answer: "No. Check the stated circumference or adjustment range and compare it with a hat that fits you. Crown and brim dimensions can also affect fit." },
      { question: "What should I check in cap warehouse photos?", answer: "Confirm colour and closure, then review the crown, brim, front panel, embroidery, eyelets, rear adjustment and any visible crushing." },
      { question: "Can warehouse photos confirm hat material or comfort?", answer: "No. They can document visible texture and condition but not exact fibre content, comfort, colourfastness or long-term wear." },
      { question: "Should a cap be flattened for shipping?", answer: "Decide from the cap's construction and your protection needs. Reduced volume may help, but rigid shapes can be damaged without support." },
    ],
    relatedLinks: [
      { label: "Review QC evidence", href: "/articles/lolobuy-qc-photos-guide" },
      { label: "Choose whether to combine parcels", href: "/articles/lolobuy-parcel-consolidation-guide" },
    ],
  },
  accessories: {
    seoTitle: "LoloBuy Accessories Guide: Dimensions, Hardware and QC",
    metaDescription: "Compare LoloBuy bags, wallets and accessories using exact dimensions, hardware checks, warehouse photos and live shipping evidence.",
    h1: "LoloBuy Accessories Spreadsheet and QC Guide",
    intro: "Use exact dimensions and functional detail checks to compare bags, wallets and small goods whose scale may be unclear in listing images.",
    guideTitle: "A practical workflow for bags and small accessories",
    paragraphs: [
      "Accessory photographs often remove scale, so start with measurements. Open the live seller page, save the exact model, colour and option, and note length, height, depth and strap or chain dimensions where available. Compare those figures with an object you own rather than judging from a hand-held promotional image. For sets or products with detachable pieces, list every expected component. A spreadsheet row is useful for discovery, but the current source option must determine what you actually order.",
      "At warehouse review, confirm the option and count the pieces. For bags and wallets, inspect corners, edge finishing, seams, zip paths, clasps, strap anchors, compartments and included hardware. An open interior view is useful when layout matters. Reflective metal, dark linings and small engravings may require direct angles, but more photographs do not automatically establish quality. Images cannot verify metal composition, leather claims, water resistance, load capacity, skin safety or long-term hardware performance.",
      "Frame additional requests around a decision: measure the bag opening, show the interior label straight on, or photograph a suspected scratch beside a reference point. Avoid asking warehouse staff to authenticate an item or guarantee a material from appearance. This site does not certify sellers or products. If the received colour, size or component list differs from the saved order, preserve both records and check the current after-sales option promptly instead of relying on a copied policy window.",
      "Small accessories may appear inexpensive to ship, but rigid boxes, gift packaging, metal parts or consolidation with restricted products can change the result. Use the measured warehouse item and finished parcel, not a fixed category estimate. Decide whether branded or gift packaging is important enough to keep, then compare live routes for the destination. Retain the parcel contents and packed condition so a missing-piece or damage report can be supported after delivery.",
    ],
    faqs: [
      { question: "How can I judge an accessory's size from a spreadsheet?", answer: "Use the live listing dimensions and compare them with an object you own. Promotional photographs are not a reliable scale reference." },
      { question: "Which accessory details are useful in warehouse photos?", answer: "Check corners, edges, seams, closures, strap anchors, compartments, hardware and every included detachable piece." },
      { question: "Do QC photos verify leather or metal composition?", answer: "No. They can document visible texture and finish, but material composition and long-term performance require stronger evidence." },
      { question: "Should accessory packaging be removed?", answer: "Balance protection and presentation against packed volume using the actual warehouse options and live route calculation. There is no universal best choice." },
    ],
    relatedLinks: [
      { label: "Use warehouse photos carefully", href: "/articles/lolobuy-qc-photos-guide" },
      { label: "Track delivery evidence", href: "/articles/lolobuy-parcel-tracking-delivery-status" },
    ],
  },
  jerseys: {
    seoTitle: "LoloBuy Jerseys Guide: Options, Sizing, Patches and QC",
    metaDescription: "Compare LoloBuy jersey listings by team, season, player option, measurements, patches and visible warehouse evidence.",
    h1: "LoloBuy Jerseys Spreadsheet and Buying Guide",
    intro: "Verify the exact team, season, player, patches and size before approving a jersey for international shipping.",
    guideTitle: "How to prevent option mistakes with jerseys",
    paragraphs: [
      "Jersey listings often combine many seasons, teams, player names and patch choices on one page. Open the live option selector and save the complete selection before purchase: team, season or design, player or blank version, name and number, size, sleeve type and any patch package. Do not rely on the product title alone. Compare the current size chart with a shirt or jersey that fits you, paying attention to chest width and length as well as whether the seller describes a fan or player-style cut.",
      "At warehouse review, verify identity before finish. Read the visible name and number character by character, confirm the team and season design, and check every selected patch. Compare front and back placement, collar shape, sleeve details, sponsor marks and obvious colour differences. Review the garment flat when possible because folds can hide alignment. Photos can show whether an application appears visibly crooked or incomplete, but they cannot guarantee adhesion after washing, fabric composition, breathability or official licensing.",
      "If spelling or placement is uncertain, request a straight-on view rather than a general close-up. Keep the saved seller mock-up and option record beside the warehouse images. Personalized items may have different after-sales possibilities from standard options, so check the controls and terms shown for that order immediately when a mismatch appears. Do not publish or rely on a universal return promise for customized jerseys without current, order-specific evidence.",
      "For shipping, folded jerseys are usually easier to pack than rigid goods, but patches, numbers and presentation packaging may need protection from creasing. State any important packing preference clearly and compare the final parcel data rather than assuming a fixed garment weight. When several jerseys are consolidated, verify that each distinct team, size and customization appears in the selected contents. A simple checklist prevents similar-looking items from being confused during packing or delivery review.",
    ],
    faqs: [
      { question: "What should I save before ordering a jersey?", answer: "Record the team, season, player or blank option, spelling, number, size, sleeve and every selected patch from the live order page." },
      { question: "How should I check jersey QC photos?", answer: "Verify the exact design and size, read names and numbers carefully, and compare patch, sponsor, collar and front-to-back placement." },
      { question: "Can warehouse images guarantee that jersey printing will last?", answer: "No. Photos show visible placement and condition at that moment, not adhesion after washing, fabric performance or long-term durability." },
      { question: "Are customized jerseys always returnable?", answer: "Do not assume so. Check the live after-sales controls and current terms for the specific order as soon as a mismatch is found." },
    ],
    relatedLinks: [
      { label: "Save return and refund evidence", href: "/articles/lolobuy-return-refund-evidence-guide" },
      { label: "Use the order status guide", href: "/articles/lolobuy-order-warehouse-status-guide" },
    ],
  },
  electronics: {
    seoTitle: "LoloBuy Electronics Guide: Compatibility, QC and Shipping",
    metaDescription: "Research LoloBuy electronics with checks for exact models, compatibility, included parts, test limits and live shipping restrictions.",
    h1: "LoloBuy Electronics Spreadsheet and Risk Guide",
    intro: "Treat electronics as a higher-uncertainty category: verify model and compatibility, then separate visible warehouse evidence from untested performance.",
    guideTitle: "How to research electronics before international shipping",
    paragraphs: [
      "Start with compatibility, not appearance. Open the current seller page and record the exact model, generation, connector, plug type, voltage information, colour, capacity and included accessories. Check whether the product is intended for your country, network or device ecosystem. A similar exterior does not establish the same internal specification. Treat seller claims about battery life, storage, wireless standards or certifications as claims until supported by suitable evidence, and avoid an item when an unresolved specification would make it unusable.",
      "Warehouse photographs can confirm the visible model label, colour, connector, plug and included cable or case. They can also document obvious damage or a missing part. They cannot establish battery health, internal components, wireless performance, electrical safety, software support or long-term reliability. If the account offers a relevant test, read exactly what was tested and do not broaden that result. A power indicator, for example, does not prove every function. Keep sealed-product limits and any test evidence explicit in your notes.",
      "Shipping requires a separate check because batteries, magnets, liquids and other characteristics can affect route eligibility. Do not assume that a route used for clothing accepts an electronic device, and do not copy another buyer's route list. Enter the real destination and parcel details, then review the currently offered lines and restrictions. If the product contains a battery, make sure the declaration and product information are accurate. A low product price does not compensate for an incompatible item or a parcel that cannot use the intended route.",
      "Save a compact evidence file: live specification page, chosen option, payment record, warehouse images, any named test, measured weight, route decision and tracking number. If an item arrives damaged or non-functional, record the unopened parcel and opening process before testing where the live after-sales terms require evidence. This workflow does not remove electronics risk; it prevents a clean warehouse photo from being mistaken for proof of internal performance or destination compatibility.",
    ],
    faqs: [
      { question: "What should I verify before ordering electronics through LoloBuy?", answer: "Confirm the exact model, generation, connector, plug, voltage, capacity, regional compatibility and included accessories on the live seller page." },
      { question: "Do warehouse photos prove that an electronic product works?", answer: "No. They confirm visible identity and condition only. Internal components, battery health, wireless performance, safety and durability need stronger evidence." },
      { question: "Can electronics use the same shipping routes as clothing?", answer: "Do not assume so. Batteries, magnets and other characteristics can affect eligibility, so check the live routes for the actual product and destination." },
      { question: "What evidence should I keep for an electronics order?", answer: "Save the specification and option, payment, warehouse images, any precisely described test, parcel details, route and delivery evidence." },
    ],
    relatedLinks: [
      { label: "Compare live shipping routes", href: "/articles/lolobuy-shipping-cost-guide" },
      { label: "Prepare parcel after-sales evidence", href: "/articles/lolobuy-return-refund-evidence-guide" },
      { label: "Track shipment exceptions", href: "/articles/lolobuy-parcel-tracking-delivery-status" },
    ],
  },
  "other-stuff": {
    seoTitle: "LoloBuy Other Finds Guide: Identify, Verify and Ship",
    metaDescription: "Use a product-type-first workflow to research uncategorized LoloBuy finds, verify options and check live shipping restrictions.",
    h1: "LoloBuy Other Finds Spreadsheet and Verification Guide",
    intro: "Classify an uncategorized item before ordering so its measurements, evidence limits and shipping restrictions can be checked correctly.",
    guideTitle: "How to research a product that does not fit one category",
    paragraphs: [
      "An uncategorized listing needs more investigation, not less. First identify what the item actually is, what it is made to do and which option is being sold. Save the current seller title, selected model, colour, size, quantity, materials claimed and included parts. If the page bundles several unrelated options, describe the chosen one precisely in the order record. A vague product nickname is weak evidence when the warehouse must later distinguish between versions or when customs and shipping rules depend on the real product type.",
      "Choose checks based on the product rather than applying a generic visual score. A household item may require exact dimensions and a component count. A decorative object may depend on colour, surface finish and breakable parts. A tool or device may raise compatibility, battery or restricted-item questions that photographs cannot answer. Warehouse images can confirm visible identity, quantity, damage and supplied accessories, but they cannot prove hidden construction, material composition, safety, authenticity or long-term performance.",
      "Before acceptance, write down the uncertainties that remain. Request a measurement, open view or specific detail only when it can change the decision and is available under the current service. If the item is wrong or visibly damaged, preserve the live option and warehouse evidence and check after-sales promptly. Do not force the product into a confident recommendation simply because it appears in a spreadsheet. A useful directory can surface an unusual find while still making its evidence limits clear.",
      "Shipping should begin with product characteristics: battery, magnet, liquid, powder, sharp edge, fragile construction, unusual length or sensitive material. Enter accurate information and review the routes offered for the actual destination and parcel. Do not infer eligibility from another product or another buyer's old shipment. When consolidating, consider whether the item could damage softer goods or require protective packaging. Record the final contents, packing choice, measurements and route so delivery problems can be investigated with a complete history.",
    ],
    faqs: [
      { question: "How should I evaluate an uncategorized LoloBuy find?", answer: "Identify the real product type, option, dimensions, claimed materials and included pieces before choosing category-specific QC and shipping checks." },
      { question: "Does appearing in a spreadsheet mean an unusual item is verified?", answer: "No. A spreadsheet is a discovery tool. The live seller page, warehouse record and current route screen provide the order-specific evidence." },
      { question: "What can warehouse photos confirm for miscellaneous products?", answer: "They can show visible identity, quantity, condition and accessories, but not hidden construction, safety, authenticity or long-term performance." },
      { question: "How do I check whether an unusual item can be shipped?", answer: "Identify relevant characteristics such as batteries, liquids, magnets, fragility or unusual dimensions, then check the live routes and restrictions for the actual destination." },
    ],
    relatedLinks: [
      { label: "Learn the spreadsheet workflow", href: "/articles/how-to-use-a-lolobuy-spreadsheet" },
      { label: "Compare actual and volumetric weight", href: "/articles/lolobuy-actual-vs-volumetric-weight" },
    ],
  },
};
