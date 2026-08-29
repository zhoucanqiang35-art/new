import type { Metadata } from "next";
import GuidePage from "../guide-page";
import { localizedAlternates } from "../seo-metadata";

export const metadata: Metadata = {
  title: "PikoBuy Spreadsheet Buyer Checklist 2026 | 7 Checks",
  description: "Use seven clear checks for source links, options, QC photos, sizing, price, parcel weight and return timing before saving a PikoBuy find.",
  alternates: localizedAlternates("buyer-checklist"),
};

export default function Page(){return <GuidePage pageId="buyer-checklist" kicker="BUYER CHECKLIST" title="The seven-point PikoBuy spreadsheet buyer checklist" intro="A useful spreadsheet is a shortlist, not a promise. Give a row one point for each check that has visible evidence. The result helps you decide what deserves more research before you place an order." sections={[
  {heading:"Why a checklist is better than a popularity label",paragraphs:[
    "Words such as “best,” “verified,” “latest” and “must buy” are easy to add to a spreadsheet. They do not show who checked the item, when the source was reviewed or what evidence was used. A simple checklist forces every row to answer the same questions.",
    "PikoBuy’s own beginner guide tells users to confirm specifications, colour and size, then submit the purchase, review warehouse photos, choose a route and pay international shipping. The seven checks follow that real order of decisions. They do not rate the platform or guarantee a product. They help you remove weak rows before they consume time and money.",
    "Score only what you can see. If a detail is missing, give zero for that check and write down what would change the score. This makes the spreadsheet easier to update later."
  ]},
  {heading:"Check 1: the category is clear",paragraphs:[
    "Put the product beside items that need similar evidence. Shoes should be compared with shoes, not with jewelry. Hoodies need garment measurements and fabric details. Bags need dimensions, interior views and closures. Electronics need specification labels, plug and battery information.",
    "A clear category improves both search and review. It also helps you estimate parcel impact. Shoes, heavy jackets and large bags can be more sensitive to packaging volume. Small accessories may be compact but easy to miscount. Give one point when the category is specific enough to apply the right checklist.",
    "Do not use brand names as categories. A brand can contain clothing, bags, shoes and accessories with very different checks."
  ]},
  {heading:"Check 2: the source opens and still matches",paragraphs:[
    "Open the original source page and compare it with the spreadsheet row. Check the main images, product name, option list, current price and visible seller. If the URL redirects to a store home page, a different item or an unavailable page, the row is stale until it is repaired.",
    "PikoBuy supports product links and keyword searches. A direct link makes the comparison easier, but it still needs a current check. A keyword result may be a similar product rather than the exact listing. Give one point only when you can explain how the row connects to the live source.",
    "Save the date checked. Product listings can change after a spreadsheet is published. A working URL alone is not enough if the content no longer matches."
  ]},
  {heading:"Check 3: the exact option is recorded",paragraphs:[
    "PikoBuy’s guide asks users to select specifications, colour, size and quantity before the first payment. Your spreadsheet should prepare that decision. Record the option exactly as shown on the live listing. If the seller offers several colours, materials, batches or package choices, do not rely on a general title.",
    "For clothing and shoes, add the relevant size measurements. For electronics, record the model, plug and version. For sets, note every included piece. Give one point when another careful reader could identify the intended option without guessing.",
    "If the listing uses an image number instead of a clear option name, keep a screenshot or precise description for your own reference. Do not publish an old screenshot as proof that the current listing is unchanged."
  ]},
  {heading:"Check 4: useful QC evidence can be requested",paragraphs:[
    "PikoBuy says warehouse receipt includes check-in, photo confirmation and a defect check. Its forwarding terms also say inspection photos are available and extra detailed photos can be purchased. A strong spreadsheet row explains which views will matter when the item arrives.",
    "For shoes, plan to review side profiles, toes, heels, outsoles and size labels. For clothing, review front, back, seams, print placement and measurements. For bags, use exterior, base, interior, closure, strap and dimensions. For jewelry and watches, use face, clasp, finish and scale. For electronics, use model labels, accessories, plug and battery information.",
    "Give one point when the row has a practical photo plan. Do not award it because seller photos look attractive. Warehouse evidence and seller marketing images serve different purposes."
  ]},
  {heading:"Check 5: size or specifications are measurable",paragraphs:[
    "Size letters are not universal. Compare centimetre measurements with an item you own. For a shirt or hoodie, useful fields include chest width, length, shoulder and sleeve. For pants, use waist, rise, inseam and leg opening. For bags, record width, height and depth. For watches and jewelry, record dimensions rather than judging scale from a close-up.",
    "Electronics require specifications instead of fit measurements. Confirm the visible model code, regional compatibility, plug, voltage information when relevant, included accessories and battery restrictions. A product title can be incomplete or translated loosely.",
    "Give one point when the information is specific enough to compare. A claim such as “true to size” without measurements is not evidence."
  ]},
  {heading:"Check 6: price and parcel impact are considered together",paragraphs:[
    "The PikoBuy guide states that the product price is subject to the actual purchase. That means a spreadsheet number can be a useful snapshot, but it is not the final transaction. Recheck the selected option before payment and record the date.",
    "Then consider international shipping. PikoBuy’s estimate form asks for destination, product type, weight and three parcel dimensions. A low item price can be outweighed by bulky packaging or route limits. Shoes with boxes, thick coats, large bags and fragile goods deserve an early parcel note.",
    "Give one point when the row includes both current price context and a reasonable weight or volume note. You do not need an exact shipping quote before warehousing. You do need to avoid pretending the item price is the total cost."
  ]},
  {heading:"Check 7: return timing and limitations are understood",paragraphs:[
    "PikoBuy publishes a five-day warehouse return rule for eligible products. Its return page explains that the period is 120 hours after the status changes to “In Warehouse,” counted from the next hour. A return also depends on seller support, resalable condition and product-category rules. Customised items, intimate apparel, food and several other categories may not qualify, while sealed goods can have special packaging requirements.",
    "Customer-choice returns can include domestic return shipping, the seller’s original shipping cost and a service fee described on PikoBuy’s current policy page. Seller-fault cases may be handled differently. The exact case belongs in the official order process.",
    "Give one point when the row flags a known return limitation or reminds the buyer to review warehouse evidence promptly. Do not promise “free returns” without checking eligibility and responsibility."
  ]},
  {heading:"How to read the total",bullets:[
    "7 points: a strong research candidate. Recheck the live source and account details before paying.",
    "5–6 points: useful, but identify the missing evidence and decide whether it can be obtained.",
    "3–4 points: weak. The row creates important unanswered questions.",
    "0–2 points: remove or rebuild it. A large spreadsheet of unclear rows is not useful."
  ]},
  {heading:"Example: scoring a hoodie row",paragraphs:[
    "Imagine a navy hoodie with a working source link. The row has the exact colour and size, a current price, chest and length measurements, and a note to check front, back, print placement and size label at the warehouse. It also records an estimated weight and the date checked. That row can score well because each point has evidence.",
    "Now compare a row that says only “popular hoodie, cheap, best batch.” It has no current source, no option, no measurements, no QC plan, no weight context and no return note. Popular language cannot replace those missing facts. Remove it until the evidence improves."
  ]},
  {heading:"The one-sentence save rule",paragraphs:[
    "Before keeping a product, describe the reason in one plain sentence. For example: “Navy hoodie; current source matches; size L chest and length recorded; front and back warehouse photos required; estimated weight noted.” That sentence makes the decision visible.",
    "If the only explanation is “looks good,” “everyone buys it” or “very cheap,” the row has not earned its place. A smaller spreadsheet with clear evidence is easier to search, compare and maintain. It also sends users to the main product database with a useful question instead of a blind click."
  ]},
  {heading:"Final pre-order steps",steps:[
    {title:"Open the live source",text:"Confirm the product and selected option one more time."},
    {title:"Check the actual purchase price",text:"Use the current order record, not an old spreadsheet number."},
    {title:"Save the specification",text:"Record colour, size, quantity and any clear request."},
    {title:"Plan warehouse evidence",text:"Know which photos and measurements will affect your decision."},
    {title:"Review parcel impact",text:"Consider likely weight, volume, packaging and route restrictions."},
    {title:"Watch the return window",text:"Review the item promptly after it enters the warehouse."}
  ]}
]} />}
