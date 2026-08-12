import { ContentLayout, SourceNote } from "./content-layout";
import { LanguageCode } from "./i18n";

export type CategoryGuideData = {
  slug: string;
  label: string;
  title: string;
  intro: string;
  tone: "pink" | "blue" | "lime";
  mainHref: string;
  listingChecks: string[];
  warehouseChecks: Array<[string, string]>;
  shippingNotes: string[];
  decisionRule: string;
};

export const categoryGuides: Record<string, CategoryGuideData> = {
  shoes: {
    slug: "shoes",
    label: "SHOES",
    title: "PikoBuy shoe finds: sizing and QC checks before shipping.",
    intro: "A shoe thumbnail cannot answer fit, paired symmetry or construction questions. Use the live listing, submitted size and warehouse evidence together before building the parcel.",
    tone: "lime",
    mainHref: "https://findspreadsheet.com/shoes/",
    listingChecks: [
      "Match the exact colorway, seller size code and quantity; do not assume two sellers use the same size conversion.",
      "Look for an insole-length or foot-length reference and save the option selected in the PikoBuy order.",
      "Check whether the displayed low price belongs to the complete pair, a deposit or a different option.",
      "Keep the original seller page and order record so the warehouse item can be compared with what was submitted.",
    ],
    warehouseChecks: [
      ["Fit evidence", "Request the removable insole beside a readable tape when possible. A size label alone does not establish internal length."],
      ["Paired views", "Compare both side profiles, toe shapes, heel height and rear alignment. A single flattering angle can hide asymmetry."],
      ["Construction", "Inspect sole joins, visible glue, stitching, outsole pattern and obvious surface damage without treating photos as durability testing."],
      ["Return condition", "Keep anti-theft devices, tamper stickers, tags and packaging intact while an eligible warehouse return is still being considered."],
    ],
    shippingNotes: [
      "Retail boxes can materially increase parcel dimensions; compare box removal with protection and return-condition needs.",
      "Use the live destination and product classification when checking routes. A route available to one country may not be available to another.",
      "Approve only after the product evidence and packed-parcel plan both make sense.",
    ],
    decisionRule: "Reject or request clarification when the measured fit, selected option or paired construction cannot be reconciled with the order record.",
  },
  hoodies: {
    slug: "hoodies",
    label: "HOODIES",
    title: "PikoBuy hoodie finds: measurements, fabric and print QC.",
    intro: "Hoodie sizing varies by seller and style. The useful evidence is not the letter on the label but readable garment measurements, the exact option ordered and straight-on views of construction and decoration.",
    tone: "pink",
    mainHref: "https://findspreadsheet.com/hoodies-sweaters/",
    listingChecks: [
      "Record the exact style, color and seller size rather than copying a generic S–XL conversion.",
      "Compare the seller chart with a garment you already own, focusing on chest width, body length and sleeve length.",
      "Confirm whether graphics, embroidery, zippers or special hardware vary by option.",
      "Treat the spreadsheet price as a dated research reference; the final amount follows the live option and actual purchase.",
    ],
    warehouseChecks: [
      ["Measurements", "Ask for the garment laid flat with visible tape endpoints for chest, body length and another fit-critical dimension."],
      ["Print or embroidery", "Use a straight-on full view plus close-ups to compare scale, placement, edges and visible defects."],
      ["Construction", "Check seams, cuffs, hem, hood symmetry, zipper travel, drawcords and any missing visible hardware."],
      ["Material limits", "Photos can show texture and apparent thickness but cannot prove fibre content, fabric weight or long-term shrinkage."],
    ],
    shippingNotes: [
      "Folded apparel is usually less dimension-sensitive than boxed shoes, but multiple thick hoodies can still create a bulky parcel.",
      "Do not remove tags or packaging while return eligibility is being evaluated unless the live policy clearly permits it.",
      "Check moisture protection and compression choices against the fabric, print and hardware risk.",
    ],
    decisionRule: "Use measurements as the primary fit gate; do not approve a hoodie only because the seller size label matches the order.",
  },
  "t-shirts": {
    slug: "t-shirts",
    label: "T-SHIRTS",
    title: "PikoBuy T-shirt finds: fit, print and construction checks.",
    intro: "A T-shirt listing can combine several cuts, fabrics and print options under one page. Keep the exact selected option beside readable measurements and straight-on warehouse views before deciding.",
    tone: "lime",
    mainHref: "https://findspreadsheet.com/t-shirts/",
    listingChecks: [
      "Record the exact color, seller size, cut and graphic option instead of relying on the listing thumbnail.",
      "Compare the seller chart with a T-shirt that already fits, using chest width, body length and shoulder width where available.",
      "Check whether front, back, sleeve or embroidery details change between options and whether the lowest price belongs to the complete garment.",
      "Keep the live seller page and submitted PikoBuy option together because product photos, prices and available variants can change.",
    ],
    warehouseChecks: [
      ["Fit", "Ask for the garment laid flat with readable tape endpoints across the chest and from the shoulder to the hem."],
      ["Graphic", "Use straight-on front and back views to check visible placement, scale, centring, edges and obvious print damage."],
      ["Construction", "Inspect collar shape, shoulder seams, sleeve joins, side seams and hem for visible mismatch or damage."],
      ["Material limits", "Photographs can show apparent texture and transparency but cannot establish fibre content, fabric weight or shrinkage."],
    ],
    shippingNotes: [
      "Fold apparel evenly and avoid placing hard hardware against a print in a consolidated parcel.",
      "Keep tags and seller packaging intact while a return decision is still open when the live return conditions require them.",
      "Use the actual packed parcel for the final route and cost check rather than multiplying a bare-item estimate.",
    ],
    decisionRule: "Pause when the measured fit or exact graphic option cannot be matched to the submitted order; a correct size label alone is not enough.",
  },
  jackets: {
    slug: "jackets",
    label: "JACKETS",
    title: "PikoBuy jacket finds: fit, hardware and lining checks.",
    intro: "Jackets combine fit risk with zippers, snaps, lining, insulation and removable parts. A useful review checks the submitted model first, then the areas that could make the garment impractical to wear or ship.",
    tone: "blue",
    mainHref: "https://findspreadsheet.com/jackets/",
    listingChecks: [
      "Save the exact model, color, size and version, including detachable hoods, liners, belts or other option-dependent parts.",
      "Compare chest, body and sleeve measurements with a known jacket while allowing for the layers you plan to wear underneath.",
      "Identify the advertised closures and visible features without treating seller material or performance claims as independently verified.",
      "Check the selected option price and current availability on the live listing before submitting the order.",
    ],
    warehouseChecks: [
      ["Measurements", "Request the jacket laid flat with readable chest, body and sleeve measurements and the zipper or front closure aligned."],
      ["Hardware", "Check zipper tracks, pulls, snaps, buttons, drawcords, cuffs and any removable components from useful close angles."],
      ["Construction", "Inspect lining, pocket openings, seams, hem, collar and visible insulation distribution for mismatch or damage."],
      ["Inspection limits", "Images cannot prove waterproofing, insulation rating, fibre content or long-term zipper durability."],
    ],
    shippingNotes: [
      "Thick or padded jackets can create meaningful parcel volume even when their scale weight seems modest.",
      "Compression may reduce volume but can crease structured panels or stress decoration and hardware; choose it item by item.",
      "Keep detachable pieces recorded with the jacket before consolidation so small parts are not overlooked.",
    ],
    decisionRule: "Do not approve when a fit-critical measurement, declared removable part or primary closure cannot be reconciled with the order.",
  },
  "pants-shorts": {
    slug: "pants-shorts",
    label: "PANTS / SHORTS",
    title: "PikoBuy pants and shorts finds: waist, rise and inseam checks.",
    intro: "Bottoms are especially sensitive to measurement method. The size name is less useful than a clear record of waist, rise, inseam, leg opening and the exact cut selected.",
    tone: "pink",
    mainHref: "https://findspreadsheet.com/pants-shorts/",
    listingChecks: [
      "Record the exact cut, color, seller size and length option, including whether the waist is elastic, fixed or adjustable.",
      "Compare the seller chart with a known garment using the same measurement method rather than a generic body-size conversion.",
      "Check whether distressing, wash, pocket arrangement, lining or included belt changes between options.",
      "Confirm that the displayed price belongs to the complete selected garment and not an accessory or different length.",
    ],
    warehouseChecks: [
      ["Waist", "Ask for the waistband laid flat without stretching and request a second stretched measurement only when elasticity matters."],
      ["Length", "Use visible endpoints for rise, inseam and total outseam; define the measurement instead of requesting a vague length photo."],
      ["Construction", "Inspect fly, drawcord, button, belt loops, pockets, seams, hems and visible symmetry."],
      ["Style match", "Compare wash, distressing, graphics and pocket layout with the exact ordered option, recognising that lighting affects colour."],
    ],
    shippingNotes: [
      "Fold around rigid buckles or hardware so they do not mark adjacent garments.",
      "Multiple denim or lined items can add substantial scale weight even when parcel volume remains compact.",
      "Preserve tags and included belts while return eligibility is being evaluated.",
    ],
    decisionRule: "Use readable waist and length evidence as the fit gate; stop when the measurement method is unclear or the cut differs from the order.",
  },
  headwear: {
    slug: "headwear",
    label: "HEADWEAR",
    title: "PikoBuy headwear finds: shape, fit and embroidery checks.",
    intro: "Caps, hats and other headwear can look simple while hiding option differences in crown shape, brim, closure, size and embroidery. Review structure and fit evidence before choosing packaging.",
    tone: "blue",
    mainHref: "https://findspreadsheet.com/headwear/",
    listingChecks: [
      "Record the exact style, color, size or circumference range, brim shape and closure type.",
      "Check whether the listing combines adult, youth, fitted, adjustable or different-depth versions.",
      "Save the selected embroidery, patch or graphic option and compare the live option price rather than the lowest page price.",
      "Identify structured, fragile or rigid elements that could influence parcel protection.",
    ],
    warehouseChecks: [
      ["Shape", "Use front, side, rear and top views to compare crown height, panel symmetry, brim curve and visible deformation."],
      ["Fit", "Request a readable circumference or interior-band measurement when the size cannot be confirmed from the label alone."],
      ["Decoration", "Check embroidery spelling, centring, loose threads, patch edges and visible surface marks with a straight-on close-up."],
      ["Closure", "Confirm straps, buckles, snaps, elastic or fitted construction and any missing visible hardware."],
    ],
    shippingNotes: [
      "Aggressive flattening can permanently deform a structured crown or brim even if it reduces parcel volume.",
      "Nest compatible soft items only when decoration and shape will not be crushed or abraded.",
      "Keep fit labels, inserts and packaging intact while a return decision remains possible under the live conditions.",
    ],
    decisionRule: "Approve only when the size system, crown or brim shape and ordered decoration are clear enough to compare with the listing.",
  },
  jerseys: {
    slug: "jerseys",
    label: "JERSEYS",
    title: "PikoBuy jersey finds: name-set, patch and sizing checks.",
    intro: "Jerseys concentrate risk in option details: team, season, player name, number, patches and size can all change the item. A clean order record is as important as the final warehouse photographs.",
    tone: "blue",
    mainHref: "https://findspreadsheet.com/Jersey/",
    listingChecks: [
      "Save the exact team, season, player, number, patch package and size selected.",
      "Confirm whether the listing separates fan, player, long-sleeve or special-edition versions.",
      "Review customization wording carefully because made-to-order goods may have restricted return options.",
      "Compare the option price rather than assuming the lowest listing price includes every patch or name set.",
    ],
    warehouseChecks: [
      ["Front layout", "Request a straight-on full view to assess crest, sponsor and patch placement without camera tilt."],
      ["Back layout", "Check name spelling, number, centring, spacing and visible heat-transfer defects."],
      ["Fit", "Use chest and length measurements, not only the printed size label, and compare them with a known garment."],
      ["Details", "Inspect collars, cuffs, seams, badges and loose edges while recognising that images cannot authenticate licensed merchandise."],
    ],
    shippingNotes: [
      "Avoid packaging requests that crease or abrade applied graphics merely to reduce a small amount of volume.",
      "Keep tags and customized elements undisturbed until the evidence and return conditions are understood.",
      "Group items only after every jersey has its own option record and QC decision.",
    ],
    decisionRule: "A jersey should not pass QC until the exact customization record and both front and back evidence agree.",
  },
  accessories: {
    slug: "accessories",
    label: "ACCESSORIES",
    title: "PikoBuy accessory finds: scale, hardware and finish checks.",
    intro: "Accessory listings often show several visually similar options. Dimensions, closure type, included parts and surface condition are more useful than an attractive thumbnail when deciding what actually reached the warehouse.",
    tone: "pink",
    mainHref: "https://findspreadsheet.com/accessories/",
    listingChecks: [
      "Record the exact style number, color, dimensions and included straps or small parts.",
      "Check whether the cheapest option is a complete item, replacement component or accessory-only variant.",
      "Save material and finish claims as seller statements, not independently verified facts.",
      "Identify whether the item is rigid, fragile, liquid-containing or unusually shaped before route planning.",
    ],
    warehouseChecks: [
      ["Scale", "Request width, height and depth with readable measurement endpoints; hand-held photos are poor size references."],
      ["Hardware", "Inspect closures, zippers, buckles, screws, strap anchors and missing visible components from more than one angle."],
      ["Finish", "Use close-ups for scratches, edge paint, stitching, coating consistency and surface marks."],
      ["Interior", "Confirm lining, pockets and included parts when they matter, while preserving seals or packaging required for a return."],
    ],
    shippingNotes: [
      "Rigid shapes and retail packaging can drive parcel volume even when the item is light.",
      "Fragile or finished surfaces may need reinforcement and separation from hard hardware in a consolidated parcel.",
      "Check live route restrictions for liquids, batteries, magnets or other sensitive components rather than guessing from the category name.",
    ],
    decisionRule: "Approve only when size, included parts and the highest-risk hardware or finish area are visible enough to evaluate.",
  },
  electronics: {
    slug: "electronics",
    label: "ELECTRONICS",
    title: "PikoBuy electronics finds: model, seal and route-risk checks.",
    intro: "Electronics need the most conservative reading of warehouse photos. Images can document labels, exterior condition, seals and accessories, but they usually cannot prove authenticity, battery health, internal specification or long-term performance.",
    tone: "lime",
    mainHref: "https://findspreadsheet.com/electronics/",
    listingChecks: [
      "Record the exact model, storage or specification option, plug, voltage, color and included accessories.",
      "Treat performance, capacity and authenticity claims as seller claims unless independently verified.",
      "Check whether the product contains a battery, liquid, magnet or radio component that could affect route eligibility.",
      "Read the live return and seal requirements before requesting opening, activation or testing.",
    ],
    warehouseChecks: [
      ["Identity", "Request readable model, regulatory and specification labels and compare them with the submitted option."],
      ["Exterior", "Check packaging, seals, ports, screen or casing condition and visible transport damage."],
      ["Completeness", "Lay out declared accessories, cables, adapters and manuals without assuming appearance proves function."],
      ["Inspection limit", "PikoBuy states some professional or sealed products may receive only exterior and accessory checks; plan around that uncertainty."],
    ],
    shippingNotes: [
      "Battery and sensitive-goods classifications can reduce the available routes and change the live quote.",
      "Protect screens, corners and plugs, but preserve packaging or seals when they affect return condition.",
      "Do not interpret a powered-on photo, if available, as a complete functional or safety test.",
    ],
    decisionRule: "If the exact model, seal condition or route classification cannot be confirmed, pause rather than turning a photograph into a performance guarantee.",
  },
  "other-stuff": {
    slug: "other-stuff",
    label: "OTHER STUFF",
    title: "PikoBuy other finds: define the category risk before ordering.",
    intro: "A catch-all category should not use a catch-all inspection. Start by naming what the item is, what could go wrong visibly and what characteristic could restrict the parcel.",
    tone: "lime",
    mainHref: "https://findspreadsheet.com/other-stuff/",
    listingChecks: [
      "Write a plain description of the product, exact variant, dimensions, included parts and intended use before comparing options.",
      "Flag batteries, liquids, powders, magnets, food, medicine, glue, fragile materials or unusual shapes for a live route check.",
      "Separate seller claims from verifiable listing details and do not turn an attractive photo into an authenticity or performance conclusion.",
      "Check whether the lowest price represents the complete product, a component, a deposit or a smaller option.",
    ],
    warehouseChecks: [
      ["Identity", "Match model, colour, quantity, dimensions and declared accessories with the exact submitted order."],
      ["Category risk", "Choose photographs around the likely failure: breakage, leakage, missing parts, wrong scale, surface damage or option mismatch."],
      ["Packaging", "Check seals, retail packaging and protective material before requesting opening or removal that could affect return condition."],
      ["Evidence limit", "State what photographs cannot establish, such as internal safety, material chemistry, authenticity or long-term performance."],
    ],
    shippingNotes: [
      "Use PikoBuy’s live destination, product type, packed weight and dimensions rather than assuming a general-goods route applies.",
      "Irregular or fragile items may need reinforcement that increases packed size; evaluate protection and cost together.",
      "When classification is unclear, ask support before buying the rest of a parcel around that item.",
    ],
    decisionRule: "If you cannot name the product’s inspection risk and shipping classification, do not treat it as an ordinary item by default.",
  },
};

export const categoryGuideOrder = [
  "shoes",
  "hoodies",
  "t-shirts",
  "jackets",
  "pants-shorts",
  "headwear",
  "accessories",
  "jerseys",
  "electronics",
  "other-stuff",
] as const;

export function CategoryGuidePage({ data, language }: { data: CategoryGuideData; language: LanguageCode }) {
  return <ContentLayout language={language} pathname={`/categories/${data.slug}`} kicker={`CATEGORY GUIDE / ${data.label}`} title={data.title} intro={data.intro} tone={data.tone}>
    <section className="content-section">
      <div className="content-section-heading"><div><span>01 / BEFORE THE ORDER</span><h2>Make the live listing answer the option question.</h2></div><p>The spreadsheet is the discovery layer. The seller page and the order submitted to PikoBuy remain the records that must agree.</p></div>
      <div className="category-checklist">{data.listingChecks.map((item, index) => <article key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></article>)}</div>
    </section>

    <section className="content-section">
      <div className="content-section-heading"><div><span>02 / WAREHOUSE EVIDENCE</span><h2>Ask for proof that can change the decision.</h2></div><p>PikoBuy’s official guide describes check-in, photo confirmation and a visible-defect check. The category checklist below is independent editorial guidance about how to use that evidence.</p></div>
      <div className="evidence-table category-guide-evidence">{data.warehouseChecks.map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </section>

    <section className="content-section prose-grid">
      <aside className="sticky-index"><span>DECISION PATH</span><a href="#parcel">Parcel context</a><a href="#rule">Approval rule</a><a href="/guides/qc-photos">Full QC guide</a><a href="/guides/shipping">Shipping guide</a></aside>
      <div className="prose-body">
        <article id="parcel"><span>03 / PARCEL CONTEXT</span><h2>Judge the product and its shipping plan together.</h2><ul>{data.shippingNotes.map((item) => <li key={item}>{item}</li>)}</ul><p>PikoBuy’s public estimator asks for destination, product type, weight, length, width and height. The live route and checkout remain the source for current eligibility and cost.</p></article>
        <article id="rule"><span>04 / APPROVAL RULE</span><h2>A simple stopping rule prevents optimistic guessing.</h2><p>{data.decisionRule}</p><p>When the evidence is incomplete, the honest choices are to request a specific additional photograph, ask support about the order record or decline the item while a return request may still be possible. More confidence is not the same as more evidence.</p></article>
        <SourceNote><a href="https://www.pikobuy.com/guide" target="_blank" rel="noopener noreferrer">PikoBuy Beginner’s Guide</a>, <a href="https://www.pikobuy.com/protocol/shipping" target="_blank" rel="noopener noreferrer">Shipping terms</a> and <a href="https://www.pikobuy.com/protocol/returns" target="_blank" rel="noopener noreferrer">Returns &amp; Exchanges</a>, rechecked 10 August 2026.</SourceNote>
      </div>
    </section>

    <section className="split-callout"><div><span>MAIN DATABASE</span><h2>Continue to the matching product category.</h2></div><div><p>The category page keeps the research and QC method on this site. Product discovery continues on the correct FindSpreadsheet category, where live product links and details can be checked.</p><a href={data.mainHref} target="_blank" rel="noopener noreferrer">Open {data.label.toLowerCase()} on FindSpreadsheet ↗</a></div></section>
  </ContentLayout>;
}
