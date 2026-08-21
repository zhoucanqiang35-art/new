export const categories = [
  { slug: "shoes", name: "Shoes", note: "Sneakers, boots and everyday footwear", href: "https://findspreadsheet.com/shoes/", glyph: "01" },
  { slug: "hoodies", name: "Hoodies", note: "Sweatshirts, knitwear and layers", href: "https://findspreadsheet.com/hoodies-sweaters/", glyph: "02" },
  { slug: "t-shirts", name: "T-Shirts", note: "Graphic tees and wardrobe basics", href: "https://findspreadsheet.com/t-shirts/", glyph: "03" },
  { slug: "jackets", name: "Jackets", note: "Outerwear and seasonal pieces", href: "https://findspreadsheet.com/jackets/", glyph: "04" },
  { slug: "pants", name: "Pants & Shorts", note: "Denim, cargos, sweats and shorts", href: "https://findspreadsheet.com/pants-shorts/", glyph: "05" },
  { slug: "sets", name: "Sets", note: "Co-ords, tracksuits and matching looks", href: "https://findspreadsheet.com/ShortSets/", glyph: "06" },
  { slug: "jerseys", name: "Jerseys", note: "Football and basketball styles", href: "https://findspreadsheet.com/Jersey/", glyph: "07" },
  { slug: "accessories", name: "Accessories", note: "Bags, eyewear, jewellery and wallets", href: "https://findspreadsheet.com/accessories/", glyph: "08" },
  { slug: "electronics", name: "Electronics", note: "Audio, devices and everyday tech", href: "https://findspreadsheet.com/electronics/", glyph: "09" },
  { slug: "other", name: "More Finds", note: "Home, lifestyle and uncategorised finds", href: "https://findspreadsheet.com/other-stuff/", glyph: "10" },
];

export const products = [
  { slug:"sneaker-footwear-finds", category:"shoes", name:"Crocs footwear listing", label:"Shoes · current listing", summary:"A current FindSpreadsheet footwear record. Open the main-site product page to inspect its gallery, item ID, options and purchase routes.", image:"https://findspreadsheet.com/uploads/allimg/20260319/1-260319144330358.gif", checks:["Confirm the exact size system and insole length","Compare both shoes, heel shape and outsole in QC photos","Decide whether the shoe box is worth its shipping volume"], shipping:"Footwear can be dense, while shoe boxes add volume. Compare packed and volumetric weight before choosing a route.", accent:"coral", live:"https://findspreadsheet.com/shoes/crocs-2978.html" },
  { slug:"hoodie-knitwear-finds", category:"hoodies", name:"Dior T-shirt & hoodie listing", label:"Hoodies · current listing", summary:"A current FindSpreadsheet hoodie record. Use the linked main-site detail page for the latest gallery, option and source information.", image:"https://findspreadsheet.com/uploads/allimg/20260319/1-260319152I0Q1.webp", checks:["Compare chest width, length and sleeve measurements","Inspect cuffs, hems, closures and visible stitching","Check colour under more than one warehouse-photo angle"], shipping:"Bulky fleece and knitwear can increase volumetric weight. Compression may help, but protect prints and structured details.", accent:"lime", live:"https://findspreadsheet.com/hoodies-sweaters/dior-t-shirthoodie-39-style-top-3000.html" },
  { slug:"tshirt-basics-finds", category:"t-shirts", name:"C.P. Company T-shirt listing", label:"T-shirts · current listing", summary:"A current FindSpreadsheet T-shirt record linked directly to its main-site product gallery and item details.", image:"https://findspreadsheet.com/uploads/allimg/20260319/1-26031915254QX.webp", checks:["Use garment measurements rather than size letters alone","Review front, back, collar and print alignment","Confirm colour, quantity and selected variant"], shipping:"T-shirts are usually compact, but several items can still change parcel weight. Record the final packed total.", accent:"sand", live:"https://findspreadsheet.com/t-shirts/cp-company-t-shirt-2999.html" },
  { slug:"outerwear-jacket-finds", category:"jackets", name:"The North Face outdoor jacket", label:"Jackets · current listing", summary:"A current FindSpreadsheet outerwear record. Its card opens the matching main-site product detail rather than an intermediary page.", image:"https://findspreadsheet.com/uploads/allimg/20260319/1-260319152350518.webp", checks:["Check chest, shoulder, sleeve and total length","Inspect zips, snaps, pockets, cuffs and lining","Look for stains, damage or missing removable parts"], shipping:"Outerwear can be light but bulky, so dimensions may matter as much as scale weight. Review the packed quote.", accent:"blue", live:"https://findspreadsheet.com/jackets/the-north-face-outdoorjacket-2998.html" },
  { slug:"pants-cargo-denim-finds", category:"pants", name:"Gallery shorts listing", label:"Pants & shorts · current listing", summary:"A current FindSpreadsheet shorts record with a direct link to the corresponding main-site gallery and item information.", image:"https://findspreadsheet.com/uploads/allimg/20260319/1-260319153159600.webp", checks:["Compare waist, rise, inseam and leg opening","Check pocket layout, wash, hardware and hems","Confirm the selected colour and cut"], shipping:"Dense denim can add real weight. Combine pieces only after comparing the total parcel against available routes.", accent:"ink", live:"https://findspreadsheet.com/pants-shorts/gallery-short-3003.html" },
  { slug:"matching-set-finds", category:"sets", name:"Carhartt T-shirt & shorts set", label:"Sets · current listing", summary:"A current FindSpreadsheet matching-set record linked to its exact main-site product page for images and options.", image:"https://findspreadsheet.com/uploads/allimg/20260319/1-2603191415594Y.webp", checks:["Confirm every piece in the set is present","Check top and bottom measurements separately","Compare colour consistency across both pieces"], shipping:"A set is heavier than a single garment. Keep all pieces together during QC and record the combined packed weight.", accent:"violet", live:"https://findspreadsheet.com/ShortSets/carhartt-t-shirt-tee-shorts-polo-suits-set-2964.html" },
  { slug:"jersey-sportswear-finds", category:"jerseys", name:"Nike NBA basketball uniform", label:"Jerseys · current listing", summary:"A current FindSpreadsheet sportswear record. Open the exact main-site detail page to review styles, images and source data.", image:"https://findspreadsheet.com/uploads/allimg/20260318/1-26031Q4423B48.webp", checks:["Confirm season, version, size and custom details","Inspect names, numbers, badges and print alignment","Check front, back, collar and visible stitching"], shipping:"Customised items may have different return conditions. Verify every detail before international dispatch.", accent:"red", live:"https://findspreadsheet.com/jersey/nike-nba-basketball-uniforms-sportswear-t-shirt-tee-40-styles-2904.html" },
  { slug:"bag-accessory-finds", category:"accessories", name:"Supreme wallet listing", label:"Accessories · current listing", summary:"A current FindSpreadsheet accessory record with a direct route to its main-site image gallery and product data.", image:"https://findspreadsheet.com/uploads/allimg/20260319/1-260319151R0937.webp", checks:["Check dimensions, colour and included pieces","Inspect hardware, straps, closures and interior views","Treat photos as condition evidence, not authentication"], shipping:"Rigid bags and protective packaging can add volume. Eyewear and delicate accessories may need extra protection.", accent:"gold", live:"https://findspreadsheet.com/accessories/supreme-wallet-2995.html" },
  { slug:"electronics-device-finds", category:"electronics", name:"OMEG Seamaster-style watch listing", label:"Electronics · current listing", summary:"A current FindSpreadsheet electronics-category record. The main-site page contains its live gallery, ID and available options.", image:"https://findspreadsheet.com/uploads/allimg/20260318/1-26031Q534033K.webp", checks:["Confirm model, dimensions and included accessories","Ask what functional testing is actually available","Check destination restrictions before purchase"], shipping:"Electronics and watches may limit route choice. Confirm current restrictions before purchase, not after warehouse arrival.", accent:"cyan", live:"https://findspreadsheet.com/electronics/omeg-seamaster-series-size-43mm-2932.html" },
  { slug:"home-lifestyle-finds", category:"other", name:"37-colour sock listing", label:"More finds · current listing", summary:"A current FindSpreadsheet other-stuff record linked directly to the matching product page and first-party gallery.", image:"https://findspreadsheet.com/uploads/allimg/20260319/1-260319152Z2T0.webp", checks:["Record dimensions, materials and included components","Match the QC request to the product's real failure points","Check fragility, liquids, magnets or other route restrictions"], shipping:"Unusual shapes and fragile items require item-specific packaging and route checks. Never assume a general clothing route applies.", accent:"mint", live:"https://findspreadsheet.com/other-stuff/sock-37-colores-top-3001.html" },
];

export const markets = [
  {
    slug: "united-states", flag: "US", name: "United States", tier: "Priority 01", confidence: "Clear public signal",
    summary: "Public community discussion specifically asks about LoloBuy shipping prices to the USA, while LoloBuy describes its service as global shipping.",
    evidence: ["Country-specific community discussion", "English-first search demand", "USD-friendly product research"],
  },
  {
    slug: "canada", flag: "CA", name: "Canada", tier: "Priority 02", confidence: "Clear public signal",
    summary: "Multiple recent public haul posts identify Canada as the destination and LoloBuy as the shopping agent.",
    evidence: ["Recent destination-specific haul posts", "English and French content opportunity", "Cross-border cost intent"],
  },
  {
    slug: "germany", flag: "DE", name: "Germany", tier: "Priority 03", confidence: "Clear public signal",
    summary: "An official LoloBuy social post identifies a parcel going to Germany; an independent shipping calculator also exposes Germany routes.",
    evidence: ["Official destination mention", "Independent route listings", "German-language search opportunity"],
  },
  {
    slug: "netherlands", flag: "NL", name: "Netherlands", tier: "Priority 04", confidence: "Emerging public signal",
    summary: "A recent public haul review identifies the Netherlands as the destination and LoloBuy as the agent.",
    evidence: ["Destination-specific haul review", "Strong English fluency", "EU shipping research intent"],
  },
  {
    slug: "france", flag: "FR", name: "France", tier: "Priority 05", confidence: "Emerging public signal",
    summary: "The LoloBuy iOS app is available through France's App Store and French-language haul discussions are discoverable, but public volume data is unavailable.",
    evidence: ["France App Store availability", "French-language community signal", "EU customs content opportunity"],
  },
  {
    slug: "united-kingdom", flag: "GB", name: "United Kingdom", tier: "Priority 06", confidence: "Limited public signal",
    summary: "A UK-based public review reports receiving an order, but the available sample is too small to infer market share.",
    evidence: ["One public destination signal", "High-value English query set", "GBP and parcel guidance opportunity"],
  },
];

export const legacyGuides = [
  {
    slug: "how-lolobuy-works", kicker: "Start here", title: "How LoloBuy Works: Product Link to International Parcel", read: "10 min",
    dek: "A plain-English walkthrough of sourcing, domestic delivery, warehouse review, consolidation and international shipping.",
    sections: [
      ["Start with a source, not a promise", "LoloBuy presents itself as a cross-border shopping platform that can assist with purchases from Chinese online and offline channels. In practice, the safest starting point is a source page you can inspect: confirm the item title, variant, seller, price and destination URL before asking any agent to buy. A spreadsheet can shorten discovery, but it cannot guarantee stock, authenticity, sizing or seller performance. Treat each row as a lead to verify, not a certification."],
      ["Separate product payment from international freight", "The buying journey normally has two cost moments. First comes the item and any purchasing-related charge. International shipping is considered after the seller sends the item to a warehouse and its packed size is known. This distinction matters because an inexpensive item can become poor value when volumetric weight, packaging or a destination surcharge is added. Record both stages in your budget instead of judging a find by its product price alone."],
      ["Use the warehouse as a decision point", "A warehouse arrival is not the end of the purchase. It is the point at which the received item, selected variant and available inspection images can be compared with the original listing. Check size tags, colour, obvious damage, quantity and any details that matter to you. If the evidence is incomplete, ask the platform what additional inspection options exist before approving the parcel. Return or exchange eligibility still depends on the seller and platform rules."],
      ["Consolidate deliberately", "LoloBuy's public site describes selecting products stored in the warehouse and submitting them as a single parcel. Consolidation can reduce repeated base charges, but bigger is not automatically better. Heavy shoes, rigid boxes and low-density outerwear can change the billable weight. Group compatible items, compare packed versus volumetric weight, and consider whether splitting a parcel improves route choice or reduces the consequence of a delay."],
      ["Choose a route using the live checkout", "Route availability, price and estimates can change by country, weight, dimensions and item type. A guide should explain the variables, but only the logged-in parcel quote can show the options available for a particular shipment. Compare delivery estimate, billing method, tracking quality, restrictions and protection terms. Never copy an old rate table into a new order without checking it again."],
      ["Keep a compact evidence record", "Save the source URL, item ID, selected variant, warehouse images, parcel number and tracking number. These records make support conversations much easier if a listing changes or a parcel status becomes unclear. FindSpreadsheet product pages can help you reopen source context and compare categories, while final purchasing and shipping decisions remain with the platform you choose."],
    ],
  },
  {
    slug: "qc-photo-checklist", kicker: "Quality control", title: "LoloBuy QC Photos: A Practical Review Checklist", read: "12 min",
    dek: "What warehouse photos can show, what they cannot prove, and which angles to request before shipping.",
    sections: [
      ["Know what QC means", "QC photos are warehouse inspection images, not laboratory testing or an authenticity certificate. Their useful job is narrower: they help you compare the received item with the seller's listing and your selected variant before international dispatch. A clear review checks identity, quantity, visible condition, size labels and obvious construction issues. It should never claim that a few images prove materials, durability or authenticity."],
      ["Confirm the order first", "Begin with the least glamorous details: item ID, colour, size, model and quantity. A beautiful close-up is irrelevant if the warehouse received the wrong option. Compare visible labels with your order record and check whether every item in a multi-piece set is present. For products whose size is critical, a measurement photo is more useful than a distant overview."],
      ["Match the angle to the category", "Shoes benefit from lateral, medial, heel, toe, outsole and size-tag views. Bags need front, rear, base, interior, strap and hardware. Jackets and hoodies need front and rear shape, tags, closures, cuffs and measurements. Electronics require extra caution because exterior photos cannot establish battery health, internal components, certification or long-term performance."],
      ["Look for decision-changing defects", "Prioritise damage, mismatch, missing parts, severe asymmetry, incorrect measurements and stains. Small lighting differences or camera perspective can create false alarms, so compare several angles before rejecting an item. If one detail is hidden, request a focused image instead of guessing. The goal is to decide whether the received item matches your order closely enough to ship."],
      ["Respect the limits", "A warehouse image cannot confirm how a garment fits your body, whether a device will remain reliable or whether an item complies with customs and intellectual-property rules in your country. Product risk and import legality remain separate decisions. Check local requirements and avoid treating community opinions as legal advice."],
      ["Save the evidence", "Download or screenshot the relevant images before approving international shipping. Keep them beside the source link and order record. If the product page changes later, you still have a dated reference for what was shown at the warehouse. This simple habit is more valuable than any vague 'verified' badge."],
    ],
  },
  {
    slug: "shipping-guide", kicker: "Plan the parcel", title: "LoloBuy Shipping Guide for US, Canada and Europe", read: "13 min",
    dek: "How to compare routes without publishing stale prices or pretending one line is best for every parcel.",
    sections: [
      ["Country is only the first filter", "Shipping advice becomes useful only when it includes destination, packed weight, dimensions and item type. Two parcels going to the same city can receive different options because one is dense and compact while the other is large and light. Use country pages to understand questions and terminology, then use LoloBuy's live parcel quote for the actual route list."],
      ["Understand billable weight", "Carriers may charge by actual weight or volumetric weight. Boxes, shoe packaging and puffy clothing can increase volume without adding much scale weight. Rehearsal or pre-pack services, when available, can provide a better estimate. Ask what dimensions will be used and whether removing unnecessary packaging is appropriate for the items."],
      ["Compare the full route", "Do not sort by price alone. Compare the estimate range, tracking milestones, restrictions, handoff carrier and the terms attached to loss or damage protection. Delivery windows are estimates rather than guarantees. Seasonal peaks, customs review, weather and last-mile capacity can all change timing after dispatch."],
      ["Plan for taxes and customs", "Import rules differ across the United States, Canada, the United Kingdom and EU member states. A spreadsheet site should not invent declaration values or promise that a route is tax-free. Buyers should check official customs guidance for their destination and provide accurate information. Restricted or infringing goods can create legal and financial risk regardless of which shipping agent is used."],
      ["Track the handoffs", "International parcels may show a quiet period between export and destination scans. Save both the platform parcel number and the carrier tracking number, then check which carrier owns the next leg. If an estimate has passed, contact support with the parcel record, route and last scan rather than relying on screenshots from another customer's shipment."],
      ["Use current evidence", "Public calculators and community reviews can reveal that a route exists or that someone shipped to a country, but they cannot guarantee your quote. This guide links those sources as dated market signals and sends readers back to the platform for a current decision. That distinction keeps the content useful after prices change."],
    ],
  },
  {
    slug: "warehouse-consolidation", kicker: "Before dispatch", title: "Warehouse and Consolidation: Build a Smarter Parcel", read: "9 min",
    dek: "A practical framework for grouping items, reviewing packaging and keeping parcel records.",
    sections: [
      ["Wait for complete evidence", "Do not consolidate an item merely because its status says it arrived. Review the received variant and inspection evidence first. If a return or exchange is needed, resolving it before parcel submission is generally simpler than discovering the problem after international dispatch."],
      ["Group by shape and risk", "Dense clothing and soft accessories may pack efficiently together. Shoe boxes, fragile electronics or rigid pieces can change dimensions and protection needs. A sensible parcel balances consolidation savings against the possibility that one delay affects every item."],
      ["Record the final package", "Keep the parcel number, packed weight, dimensions, selected route, declared information and tracking number. These details let you compare estimates with the final charge and improve the next shipment without relying on memory."],
      ["Avoid universal rules", "There is no single ideal parcel weight for every country and route. Restrictions and billing rules change. Use current platform options and official destination guidance rather than copying a number from a social post."],
    ],
  },
  {
    slug: "tracking-guide", kicker: "After dispatch", title: "LoloBuy Tracking: Read Statuses Without Guessing", read: "8 min",
    dek: "A calm guide to warehouse, export, carrier handoff and destination scans.",
    sections: [
      ["Identify the right number", "The LoloBuy order number, parcel number and carrier tracking number can serve different purposes. Save each label exactly as shown. Use the parcel record for platform support and the carrier number for external scans when one is available."],
      ["Expect handoffs", "A parcel can move from warehouse processing to an export partner and then to a destination carrier. A tracking gap does not by itself prove loss. Read the latest location and event, compare it with the stated estimate, and avoid repeatedly changing trackers without understanding which carrier owns the shipment."],
      ["Escalate with context", "When the delivery estimate has passed, provide support with the parcel number, route, dispatch date and last scan. A complete timeline is easier to investigate than a message saying only that tracking has not moved."],
      ["Protect personal data", "Do not post full tracking numbers, addresses, receipts or account screenshots publicly. Community advice can be useful, but shipment-specific investigation belongs in the platform's authenticated support channel."],
    ],
  },
  {
    slug: "safety-and-sources", kicker: "Trust centre", title: "Is LoloBuy Safe? How to Evaluate the Evidence", read: "11 min",
    dek: "A neutral review framework using official claims, app-store records and clearly labelled community reports.",
    sections: [
      ["Separate identity from performance", "The official website and app-store listings help establish which service is being discussed. They do not guarantee that every order, seller or route will perform the same way. Start from official links and confirm the developer or domain before signing in."],
      ["Label every source", "Official pages are appropriate for platform features and announcements. Community reviews are useful for individual experience, not universal conclusions. Independent calculators can show comparative estimates, not binding quotes. This site identifies the source type so readers can judge each claim."],
      ["Avoid unsupported guarantees", "No independent directory should promise authenticity, customs clearance, delivery dates or permanent stock. Product availability and route quotes can change, while local laws differ. Clear limitations build more trust than inflated badges."],
      ["Use a reversible first order", "New users can reduce uncertainty by starting with a small, non-urgent order whose loss or return would be manageable. Review the payment, support, warehouse and shipping process before committing a larger budget."],
    ],
  },
];

export const sources = [
  { type: "Official", title: "LoloBuy official website", note: "Platform description, China purchasing assistance, warehouse consolidation and global shipping claims." },
  { type: "Official app listing", title: "LoloBuy on Google Play", note: "Developer identity, app description, release information and public download band." },
  { type: "Official app listing", title: "LoloBuy on France App Store", note: "France storefront availability, app language and developer identity." },
  { type: "Official social", title: "LoloBuy Germany parcel mention", note: "Official social post that identifies Germany as a parcel destination." },
  { type: "Community report", title: "LoloBuy experience and USA shipping discussion", note: "Individual experience plus USA-specific shipping questions; not representative market data." },
  { type: "Community report", title: "Small LoloBuy haul to Canada", note: "Destination-specific individual haul report; not an official performance guarantee." },
  { type: "Community report", title: "LoloBuy haul to the Netherlands", note: "Destination-specific individual haul report; useful only as a market signal." },
  { type: "Community report", title: "French-language LoloBuy haul discussion", note: "Individual French-language haul report; not official usage or performance data." },
  { type: "Review platform", title: "LoloBuy Trustpilot profile", note: "Small public sample including a UK reviewer; too limited for a market-size conclusion." },
  { type: "Independent tool", title: "How2ship LoloBuy route calculator", note: "Independent route estimates with explicit warning that live agent prices prevail." },
  { type: "Primary database", title: "FindSpreadsheet all products", note: "Product discovery database and category pages used by this guide's browse links." },
];

export const legacyFaq = [
  ["Is this the official LoloBuy website?", "No. This is an independent research and product-discovery guide. It does not process orders, hold funds or represent LoloBuy."],
  ["Which countries use LoloBuy?", "Public evidence currently identifies the United States, Canada, Germany and the Netherlands, with additional signals in France and the United Kingdom. LoloBuy does not publish country-level user totals, so this site does not claim market share."],
  ["Are spreadsheet products verified?", "A spreadsheet row is a discovery record, not a guarantee. Re-check the source listing, selected variant, warehouse photos, current price and seller conditions before purchasing."],
  ["Does the site show live shipping prices?", "No. Route availability and cost depend on destination, weight, dimensions and item type. The live quote at parcel submission is the decision source."],
  ["Where do product links go?", "Category and browse buttons open the matching FindSpreadsheet database pages. Purchases are completed only on the shopping platform selected by the user."],
  ["Does a QC photo prove authenticity?", "No. Warehouse photos can help confirm the received item and visible condition, but they are not an authenticity certificate or durability test."],
  ["How should I estimate the total order cost?", "Separate the item price from domestic delivery, optional service charges, international freight and destination taxes. Use the packed parcel and live route quote instead of estimating from product price alone."],
  ["Can LoloBuy ship to the United States, Canada or Europe?", "Public reports and official destination signals exist for several countries, but route availability depends on the current parcel, destination and item type. Confirm the live options before funding a shipment."],
  ["How often should spreadsheet data be checked?", "Check it again before every purchase. Seller listings, variants, stock, product prices and agent routes can change after a spreadsheet row is published."],
  ["What records should I save before international shipping?", "Keep the source URL, item ID, selected variant, warehouse images, packed weight and dimensions, parcel number, selected route and carrier tracking number."],
];

export { guides, faq } from "./research-content";
