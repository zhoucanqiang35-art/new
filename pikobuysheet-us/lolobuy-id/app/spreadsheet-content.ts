import { categories } from "./data";

export const spreadsheetMeta = {
  title: "LoloBuy Spreadsheet 2026: Finds, QC & Category Directory",
  description: "Use the LoloBuy spreadsheet as a research directory: filter current finds, open category guides, check QC evidence and plan a parcel before ordering.",
  keywords: ["LoloBuy spreadsheet", "LoloBuy sheet", "LoloBuy finds", "LoloBuy product spreadsheet"],
};

export const spreadsheetFaq = [
  ["How often is the LoloBuy spreadsheet updated?", "There is no blanket daily-update promise. Records are reviewed when their source links, visible prices or category details are checked. Always open the current FindSpreadsheet record and seller listing before ordering because stock, variants and prices can change independently of this guide."],
  ["Does a listing in the spreadsheet mean the product is verified?", "No. A spreadsheet is a discovery index, not a quality, authenticity or seller-performance guarantee. Verification starts with the live listing and continues with the warehouse record and any available QC photos."],
  ["Where can I check QC photos?", "QC evidence belongs to the order and warehouse workflow used for the purchase. Compare the photographed item with the selected colour, size, quantity and listing details. The dedicated QC checklist explains what photos can and cannot establish."],
  ["Why can the final parcel cost differ from the source price?", "The source price covers the product reference, while a complete budget can also involve China-side delivery, packing, international freight and destination charges. International freight may use actual or volumetric weight and depends on the live route available for the parcel."],
] as const;

export const spreadsheetGuideSections = [
  ["Start with a category, not an endless scroll", "A long LoloBuy sheet is useful only when it narrows a real decision. Choose the product family first: shoes need sizing and outsole checks, hoodies need measurements and fabric-weight context, and electronics need compatibility and battery-route research. The ten category pages below separate those questions so the same generic checklist is not copied onto every product. Use filters to build a short list, then compare items that solve the same need."],
  ["Open the live source before saving a find", "A directory card records a research lead. It does not freeze a marketplace listing. Open the current FindSpreadsheet detail page, continue to the source when available, and confirm the title, seller, selected variation, displayed price and China-side delivery. Save the URL and check date. If a colour, size or model is missing from the live options, a spreadsheet label is not evidence that it can still be ordered."],
  ["Keep price, QC and shipping as separate decisions", "The cheapest visible source price is not automatically the lowest delivered cost. First decide whether the listing and variant are suitable. Next inspect warehouse evidence before accepting the item. Only after the keep-or-return decision should you compare parcel groupings, packing choices and international routes. Separating these stages prevents a low product price from hiding an expensive, bulky or restricted parcel."],
  ["Read QC photos for specific evidence", "Warehouse photos can help confirm visible identity, marked size, colour, quantity, obvious damage and noticeable construction issues. They usually cannot prove authenticity, hidden materials, electronics performance or long-term durability. Ask a precise question before requesting an extra view: a measurement, label, connector, sole, closure or damaged area. A photo is useful when it can change the keep-or-return decision."],
  ["Estimate chargeable weight without inventing a rate", "International lines may compare scale weight with dimensional weight. Use the calculator on this site to estimate volume-based weight with the divisor shown by the live route, then take the greater figure as a planning weight. That is not a freight quote. Route eligibility, billing steps, packaging and destination rules still come from the current LoloBuy account and carrier terms."],
  ["Use consolidation as a comparison, not a rule", "Combining stored items can reduce repeated base charges, but a larger carton may increase volumetric weight or exceed a route limit. Mixing batteries, liquids, fragile goods or oversized packaging can also remove otherwise useful options. Compare two or three sensible parcel groups instead of assuming one large shipment is best. Complete QC and resolve returns before requesting irreversible packaging changes."],
  ["Treat freshness as a verifiable field", "A year in a title is not proof that every row changed that year. Useful freshness comes from a working source link, a visible last-check date and an honest note when information is unavailable. This directory avoids automatic 'updated today' labels. If a record is stale, keep the research trail but rely on the live listing for the buying decision."],
  ["Finish with a recorded decision", "For every shortlisted item, keep the source URL, chosen variation, visible price, order reference, warehouse item ID and parcel ID as they become available. This small evidence trail makes QC questions, return requests and tracking enquiries specific. Use the linked long-form guides for the stage you are actually in, rather than treating the spreadsheet as a substitute for the live order workflow."],
] as const;

type CategoryGuide = {
  slug:string;
  title:string;
  description:string;
  intro:string;
  sections:readonly (readonly [string,string])[];
};

const categoryCopy:Record<string,Omit<CategoryGuide,"slug">> = {
  shoes:{title:"LoloBuy Shoe Spreadsheet: Sizing, QC and Parcel Checks",description:"Research LoloBuy shoe spreadsheet finds with a focused sizing, QC-photo and packaging checklist before opening the live FindSpreadsheet collection.",intro:"Shoes combine high fit risk with packaging choices that can materially change a parcel. Use this page to turn a shoe spreadsheet row into a short, evidence-led review.",sections:[
    ["Confirm the exact variation", "Match the listing model, colour, marked size and quantity to the selected option. Do not convert sizes from a product photo alone; use the seller's current chart and request an insole or outsole measurement when the fit decision depends on it."],
    ["Review both shoes", "Compare left and right shape, panels, stitching, sole edges, heel alignment and visible marks. A single flattering angle cannot show pair consistency. Size labels and box labels are useful identity evidence but do not prove fit or authenticity."],
    ["Decide on the shoe box after QC", "Retail boxes can add volume and may protect structured footwear, but removing them can reduce chargeable dimensions. Finish the keep-or-return decision first, preserve any packaging needed for a return, and compare packed measurements before choosing."],
  ]},
  "hoodies-sweaters":{title:"LoloBuy Hoodie Spreadsheet: Fit, Fabric and QC Guide",description:"Use a LoloBuy hoodie spreadsheet with practical measurement, fabric, print and parcel-volume checks before reviewing current finds.",intro:"Hoodies and sweaters often look simple in a spreadsheet, but measurements, fabric weight and print or embroidery placement decide whether a find is useful.",sections:[
    ["Measure the garment, not the label", "Compare chest width, body length, shoulder and sleeve measurements with a garment you own. Size letters vary by seller and cut. Ask for a warehouse measurement only when the available photo or chart does not answer the fit question."],
    ["Inspect construction and decoration", "Check seams, ribbing, hood shape, pocket alignment, drawstrings, print edges and embroidery placement. Lighting can shift colour, so use photos to identify large mismatches rather than promise an exact screen-to-fabric match."],
    ["Plan for bulk", "Fleece and heavy knits can occupy more parcel space than their product price suggests. Compare packed dimensions, avoid compression for items that could be damaged by it, and use the live route quote after consolidation."],
  ]},
  "t-shirts":{title:"LoloBuy T-Shirt Spreadsheet: Print, Fit and QC Checks",description:"Filter LoloBuy T-shirt spreadsheet finds and verify measurements, print placement, colour and current source details before ordering.",intro:"A T-shirt row needs more than a product image. Fit, fabric notes and decoration quality should be checked against the exact live variation.",sections:[
    ["Record the selected design", "Save the colour, size and artwork option exactly as shown in the live listing. Multi-design listings can change option order, so a screenshot and variation text are stronger evidence than a thumbnail."],
    ["Use measurements for fit", "Compare chest width and length with a known shirt. Inspect collar shape, sleeve symmetry, hem and side seams. For printed pieces, look for alignment, obvious cracking, colour bleed and large placement differences."],
    ["Keep the parcel calculation proportional", "T-shirts are usually flexible, but several items still add weight. Consolidate only after QC, keep any packaging needed for a return, and check the actual packed record rather than multiplying an advertised item weight."],
  ]},
  jackets:{title:"LoloBuy Jacket Spreadsheet: Measurements, Volume and QC",description:"Review LoloBuy jacket spreadsheet finds with outerwear-specific measurements, construction checks and volumetric shipping planning.",intro:"Jackets bring together fit, layered construction and parcel volume. A strong shortlist includes enough evidence to judge all three.",sections:[
    ["Size for the intended layer", "Compare chest, length, shoulder and sleeve measurements with similar outerwear, allowing for what will be worn underneath. Confirm the exact model and insulation or lining option on the live listing."],
    ["Inspect high-stress areas", "Review the zipper, snaps, cuffs, pockets, seams, hood attachment and visible lining. Photos can reveal missing parts or obvious damage, but they cannot prove warmth, waterproofing or long-term performance."],
    ["Estimate volume before consolidation", "Padded outerwear can produce high dimensional weight. Use warehouse dimensions when available and compare packing methods without assuming maximum compression is safe for the material or hardware."],
  ]},
  "pants-shorts":{title:"LoloBuy Pants Spreadsheet: Waist, Inseam and QC Guide",description:"Use a LoloBuy pants spreadsheet with waist, rise, inseam, hardware and fabric checks before opening live pants and shorts finds.",intro:"Bottoms are sensitive to small measurement differences. Translate the spreadsheet row into a measurable fit decision before accepting the warehouse item.",sections:[
    ["Check the measurement method", "Compare waist, rise, thigh, inseam and leg opening with a similar garment. A flat waist measurement is not the same as full circumference, and elastic construction changes how the number should be read."],
    ["Inspect symmetry and hardware", "Review the fly, button, drawstring, pockets, hems and alignment of printed or washed details. Confirm the marked size and selected colour against the order record."],
    ["Resolve fit before packing", "Do not remove labels or packaging needed for a possible return until the fit evidence is complete. Once accepted, combine flexible apparel only after checking the parcel's real weight and destination routes."],
  ]},
  headwear:{title:"LoloBuy Hat Spreadsheet: Shape, Sizing and Packing Checks",description:"Research LoloBuy hat spreadsheet finds with circumference, shape, embroidery and protective-packing checks.",intro:"Headwear can be light but shape-sensitive. Size and protective packing often matter more than the raw product weight.",sections:[
    ["Confirm fit and adjustment", "Check circumference or fitted size, crown depth, brim dimensions and the adjustment system. Product names such as one-size do not replace measurements."],
    ["Inspect the front and side profile", "Review panel symmetry, brim curve, seams, ventilation, embroidery or print placement and visible stains. Ask for a profile image when shape is the deciding factor."],
    ["Protect the silhouette", "Crushing can reduce volume but permanently deform structured caps or hats. Choose packing protection based on the item, then compare the resulting dimensions in the live parcel quote."],
  ]},
  accessories:{title:"LoloBuy Accessories Spreadsheet: Dimensions and Detail QC",description:"Use a LoloBuy accessories spreadsheet with dimensions, hardware, included-parts and parcel-risk checks.",intro:"Accessories cover very different objects, so the first job is to replace a broad label with exact dimensions, materials claimed by the seller and included parts.",sections:[
    ["List what should be included", "Record the selected size, colour, hardware finish and any straps, inserts, cases or other parts shown for that variation. Check the warehouse record for missing pieces."],
    ["Request useful close-ups", "Inspect closures, edges, stitching, engraving, connectors and damaged areas. A close-up can support a visible-condition decision but cannot establish authenticity or material composition by itself."],
    ["Separate fragile and restricted items", "Glass, liquids, magnets and electronic accessories can need different handling or routes. Identify the item honestly before consolidation and use the route rules shown for the destination."],
  ]},
  jersey:{title:"LoloBuy Jersey Spreadsheet: Print, Badge and Size Checks",description:"Review LoloBuy jersey spreadsheet finds with variation, player-print, badge, measurement and QC-photo checks.",intro:"Jersey listings often combine teams, seasons, cuts and custom options. The exact variation needs its own evidence trail.",sections:[
    ["Write down every option", "Save team or design, season, size, player print, number, badges and sleeve options. Do not rely on the order thumbnail when a listing contains many combinations."],
    ["Check alignment and spelling", "Review front and back views for names, numbers, badges, sponsor marks, collar details and symmetry. Compare measurements with a known garment rather than assuming a standard fan or player fit."],
    ["Avoid irreversible changes before acceptance", "Customised or opened items may have narrower return options. Read the live seller and agent terms, complete QC promptly and preserve packaging until the decision is settled."],
  ]},
  electronics:{title:"LoloBuy Electronics Spreadsheet: Compatibility and Battery Routes",description:"Use a LoloBuy electronics spreadsheet with plug, voltage, model, battery and international-route checks.",intro:"Electronics require a compatibility decision before price comparison. Batteries and radio functions can also change which routes are available.",sections:[
    ["Confirm technical compatibility", "Match model number, voltage, plug, connector, frequency or regional version to the destination and intended device. A product photo is not a specification sheet; use the current listing and manufacturer information where available."],
    ["Identify the battery configuration", "Distinguish a battery installed in equipment, packed with equipment and shipped alone. Power banks are treated as batteries rather than ordinary accessories. Record capacity and chemistry when shown, and do not ship damaged or swollen cells."],
    ["Check the live route before purchase", "Battery acceptance depends on product configuration, route and destination. Use the dedicated battery guide, declare the item accurately and confirm current eligibility in the live account before building a mixed parcel."],
  ]},
  "other-stuff":{title:"LoloBuy Finds Spreadsheet: Home and Miscellaneous Products",description:"Research miscellaneous LoloBuy spreadsheet finds with category, dimensions, fragility and route-eligibility checks.",intro:"A miscellaneous bucket is useful for discovery but weak for decision-making. Classify the object before evaluating it.",sections:[
    ["Give the item a real category", "Identify whether the find is textile, homeware, cosmetic, liquid, magnetic, electronic, fragile or oversized. That classification determines the evidence and route rules that matter."],
    ["Capture dimensions and included parts", "Save the exact variation and compare warehouse photos with the listing. Check scale, quantity, accessories, fragile edges and any functional parts visible in the evidence."],
    ["Do not assume a general-goods route", "Unusual items can face carrier, customs or safety restrictions. Enter the truthful product type in the live estimator and resolve uncertainty before consolidating it with an otherwise simple parcel."],
  ]},
};

export const categoryGuides:CategoryGuide[] = categories.map(category=>({slug:category.slug,...categoryCopy[category.slug]}));

export const brandGuides = {
  nike:{
    title:"Nike LoloBuy Spreadsheet Research: Verify Listings Before Ordering",
    description:"A source-conscious checklist for researching Nike-labelled LoloBuy spreadsheet finds without treating a listing, photo or directory row as proof of authenticity.",
    intro:"Brand-name searches carry more risk than a normal category search. A familiar name or image can help users locate a style, but it does not prove origin, authenticity or authorisation.",
    searchUrl:"https://findspreadsheet.com/search.html?keywords=nike&channelid=2",
    sections:[
      ["Use the brand term as a search filter", "Treat Nike as a query that narrows the database, not a verified product attribute. Open the current result and source listing, record the seller and variation, and read every claim narrowly. This guide is not affiliated with or endorsed by Nike."],
      ["Do not turn QC photos into authentication claims", "Warehouse images can show the received model, colour, size label, pair consistency and visible defects. They cannot establish trademark authorisation, supply-chain provenance or authenticity. If authenticity is essential, use an authorised retail channel."],
      ["Check the ordinary footwear decision too", "Brand interest does not remove fit and parcel questions. Compare seller measurements, inspect both shoes, decide whether to keep protective packaging and use the current route quote. The shoe spreadsheet guide covers those non-brand-specific checks."],
    ] as const,
  },
  stussy:{
    title:"Stussy LoloBuy Spreadsheet Research: Listing and QC Checklist",
    description:"Research Stussy-labelled LoloBuy spreadsheet results while keeping discovery, visible QC evidence and authenticity claims clearly separated.",
    intro:"A brand keyword can locate relevant-looking records, but the result still needs the same source, variation, measurement and warehouse checks as any apparel find.",
    searchUrl:"https://findspreadsheet.com/search.html?keywords=stussy&channelid=2",
    sections:[
      ["Search without assuming endorsement", "Use Stussy as a database query and verify the live title, seller, variation and source. This independent guide is not affiliated with or endorsed by Stussy, and a search result is not proof that a product is authorised."],
      ["Inspect the selected apparel variant", "Save the colour, size and graphic option. Compare measurements, seams, collar or ribbing, print placement and visible damage in the warehouse evidence. Keep conclusions limited to what the images actually show."],
      ["Choose an appropriate buying channel", "If verified authenticity is a requirement, buy through an authorised retailer. If the goal is general apparel research, use the relevant T-shirt or hoodie category checklist and verify the current listing before any order decision."],
    ] as const,
  },
} as const;

export function getSpreadsheetPage(route:string[]){
  if(route[0]!=="spreadsheet")return undefined;
  if(route.length===1)return {kind:"hub" as const,...spreadsheetMeta};
  if(route[1]==="brands"&&route[2]&&route.length===3){
    const guide=brandGuides[route[2] as keyof typeof brandGuides];
    return guide?{kind:"brand" as const,slug:route[2],...guide}:undefined;
  }
  if(route.length===2){
    const guide=categoryGuides.find(item=>item.slug===route[1]);
    return guide?{kind:"category" as const,...guide}:undefined;
  }
  return undefined;
}
