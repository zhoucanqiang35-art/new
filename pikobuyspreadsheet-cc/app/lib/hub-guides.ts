import type { DeepGuide } from "./deep-guides";

export const hubGuides: Record<string, DeepGuide> = {
  "pikobuy-spreadsheet": {
    sourceContext:
      "This page combines PikoBuy’s published six-stage shopping workflow with the dated product records on FindSpreadsheet. PikoBuy supports claims about its own purchasing, warehouse and parcel process; FindSpreadsheet supports the product titles, categories, images, source prices and outgoing links shown in its database. Neither source proves a seller, product or future shipping result permanently.",
    sections: [
      {
        id: "record-not-order",
        label: "01 / START WITH THE OBJECT",
        title: "A spreadsheet record is research evidence, not an order record",
        paragraphs: [
          "A useful PikoBuy spreadsheet record should answer a narrow set of questions before a shopper opens an agent page: what product is being described, which category it belongs to, what image and source price were visible, where the original listing points, and when those details were last checked. FindSpreadsheet currently organizes finds across shoes, hoodies, T-shirts, jackets, pants and shorts, headwear, accessories, jerseys, electronics and other items. That structure makes discovery faster, but it does not convert a listing into a guarantee.",
          "PikoBuy’s official guide begins with product selection outside the purchase order. It names Taobao, Tmall, 1688, Weidian and Yupoo, asks the shopper to confirm specification, colour and size, and recommends saving item or store information. That means the spreadsheet should preserve the raw evidence needed to repeat the check. The independent record and the later PikoBuy order are different objects: one helps a reader investigate; the other contains account-specific selections, payment and warehouse status.",
        ],
        points: [
          "Keep the original source domain and item identifier.",
          "Record the visible option context beside the price.",
          "Use a dated status instead of a permanent verified label.",
          "Treat the agent order as the final record of what was selected.",
        ],
      },
      {
        id: "search-match",
        label: "02 / MATCH BEFORE CONVERSION",
        title: "A successful search result still needs to match the saved source",
        paragraphs: [
          "PikoBuy says shoppers can paste a product link or use keywords in its search box. That is a purchasing convenience, not an independent quality decision. After a link is imported, compare the destination title, primary image, seller information, variants and price with the spreadsheet record and the raw source page. Small differences matter: a familiar photograph can be reused across listings, a starting price can belong to the cheapest option, and a title can describe a family of products rather than the exact selection.",
          "If the item cannot be found, the official guide directs the shopper to customer service. Do not repair a missing result by silently substituting a similar listing. Preserve the broken or unavailable state, note the last successful check and search for a new candidate as a separate record. This makes the history understandable and prevents an old product reputation, photograph or price from being transferred to a different seller without evidence.",
        ],
        points: [
          "Compare destination domain and item ID first.",
          "Match the image set rather than one thumbnail.",
          "Check whether the displayed price belongs to the chosen option.",
          "Create a new record when the source listing changes materially.",
        ],
      },
      {
        id: "price-boundary",
        label: "03 / PRICE BOUNDARY",
        title: "Source price, first payment and delivered cost are not the same number",
        paragraphs: [
          "FindSpreadsheet product pages can preserve a source price for comparison. PikoBuy’s guide says the price is subject to the actual purchase and that an out-of-stock order will be refunded. The first payment therefore belongs to the purchasing stage. It may reflect the chosen colour, size, quantity, seller adjustment, domestic delivery or payment conversion rather than the starting figure saved in an editorial record.",
          "International freight comes later. According to the official workflow, the shopper reviews the warehouse item, chooses a logistics route, submits the parcel and then pays the international shipping fee. Keep source price, actual purchase amount, domestic seller shipping, estimated international freight and final freight in separate fields. A low source price can coexist with a heavy or bulky parcel, and a dated USD conversion should never be presented as an invoice or a guaranteed landed cost.",
        ],
        points: [
          "Retain the original currency and conversion date.",
          "Do not include estimated freight inside the product price.",
          "Record refunds and substitutions as order events.",
          "Wait for final parcel measurements before treating freight as exact.",
        ],
      },
      {
        id: "warehouse-evidence",
        label: "04 / WAREHOUSE EVIDENCE",
        title: "Warehouse photographs answer visible questions, not every question",
        paragraphs: [
          "PikoBuy describes warehouse handling as check-in, photo confirmation and defect checking. At this stage, compare what arrived with the saved listing and the selected order options. Count pieces, check visible colour and size labels, look for obvious stains or damage, and request category-specific evidence when an important view is missing. Shoes need profile, outsole, heel and size-label views; garments often need measurements, seams and print placement; bags need dimensions, hardware and interior views.",
          "The official shipping terms also set a boundary: special or professional products may not receive professional inspection, while additional detailed photographs may be purchased. A photograph cannot reliably establish fibre composition, internal electronics condition, long-term durability or authenticity. Write only what the image actually supports. If a decisive fact remains invisible, label it unknown and resolve it while the item is still in the warehouse rather than upgrading uncertainty into a positive claim.",
        ],
        points: [
          "Use a category-specific photo checklist.",
          "Separate visible condition from hidden performance.",
          "Request a missing decisive view before parcel submission.",
          "Preserve labels and packaging while a return may still be needed.",
        ],
      },
      {
        id: "return-timing",
        label: "05 / RETURN TIMING",
        title: "A strong product record must leave room for the warehouse return decision",
        paragraphs: [
          "PikoBuy’s return policy does not describe a universal return right. For the standard process, the seller must offer the return guarantee, the product must remain in the resale condition required by the seller and it must have been in the warehouse for no more than five days. The policy counts 120 hours from the next hour after the order status changes to In Warehouse and says applications may not be accepted after that period.",
          "The policy also lists exclusions and special condition standards. Customized goods, intimate apparel, food, second-hand products, products with removed labels or accessories, and several opened or sealed categories can be outside the standard process. An unconditional return can include the freight back to the seller, the seller’s original shipping fee and an RMB 5 service fee. A spreadsheet should therefore prompt early inspection; it should not encourage a shopper to wait until international dispatch before resolving a mismatch.",
        ],
        points: [
          "Record the exact warehouse timestamp.",
          "Check eligibility before removing seals or tags.",
          "Keep enough balance for applicable domestic return charges.",
          "Use the official account for approval and final fee allocation.",
        ],
      },
      {
        id: "parcel-decision",
        label: "06 / PARCEL DECISION",
        title: "The spreadsheet remains useful only when it makes uncertainty visible",
        paragraphs: [
          "PikoBuy’s estimator asks for destination, product type, weight, length, width and height. Its guide says routes differ in delivery time and billing method. Those facts explain why a spreadsheet cannot attach one permanent shipping price or delivery promise to a product. Use the product record to anticipate category, weight and packaging questions, then repeat the estimate with the final packed parcel and the routes actually available to the destination.",
          "After dispatch, the guide says tracking information will be available within three days. That statement begins at shipment, not at purchase or warehouse arrival, and it is not a three-day delivery promise. PikoBuy’s terms say third-party logistics providers carry parcels and identify customs action, damage, loss and peak-season delay as cross-border risks. A useful research record keeps dispatch, first scan and delivery separate and sends parcel-specific problems to official support.",
        ],
        callout:
          "The best spreadsheet does not pretend to remove risk. It shows the evidence, the date, the unanswered questions and the correct place to resolve them.",
      },
    ],
  },

  "research-method": {
    sourceContext:
      "This methodology page explains how the site turns official PikoBuy workflow and policy pages into independent guides without implying first-hand access to accounts, sellers, warehouse operations or parcels. Product facts come from the linked FindSpreadsheet record; policy facts come from the exact PikoBuy page cited beside the claim.",
    sections: [
      {
        id: "source-order",
        label: "01 / SOURCE HIERARCHY",
        title: "Use the source that actually owns the fact",
        paragraphs: [
          "PikoBuy’s beginner guide is the primary source for its six-stage workflow: selecting an item, searching, submitting and paying for the purchasing order, warehouse inspection, parcel submission and tracking. The shipping estimator supports claims about its visible inputs. The forwarding terms support claims about forwarded-goods inspection, third-party logistics and logistics risk. The return policy supports eligibility, timing, fee and product-condition statements. The contact page supports the published support email, ticket route and community links.",
          "FindSpreadsheet owns a different class of facts: the product title used in its database, category assignment, saved image, recorded source price, product URL and update context shown on the page. A product record cannot prove PikoBuy policy, and PikoBuy’s general policy cannot prove that one external listing remains available. Choosing the correct source prevents a common research error: citing a nearby authoritative page for a claim that the page never makes.",
        ],
        points: [
          "Policy claim → exact official PikoBuy policy page.",
          "Workflow claim → official PikoBuy beginner guide.",
          "Product claim → exact FindSpreadsheet product record.",
          "Recommendation → clearly labelled editorial reasoning.",
        ],
      },
      {
        id: "claim-size",
        label: "02 / CLAIM SIZE",
        title: "Write the narrowest claim the evidence can carry",
        paragraphs: [
          "An official statement that PikoBuy performs check-in, photo confirmation and defect checking supports a description of those tasks. It does not support a claim that every item is authentic, perfectly sized, internally functional or professionally tested. Likewise, a warehouse photograph can support a visible observation about colour, stitching or damage, but it cannot establish hidden material composition or long-term performance. Each sentence should stop where the evidence stops.",
          "The same rule applies to shipping and returns. Six estimator inputs do not create a guaranteed quote. A route description does not guarantee customs clearance or a delivery date. A five-day return process does not make every category eligible, remove seller consent or erase return charges. Detailed writing becomes more credible when it includes eligibility conditions and limitations rather than enlarging a short official statement into a marketing promise.",
        ],
        points: [
          "Quote the rule in context, then explain its practical meaning.",
          "Keep account-specific outcomes outside public summaries.",
          "Use unknown when the source cannot answer the question.",
          "Do not replace conditions with reassuring adjectives.",
        ],
      },
      {
        id: "fact-advice",
        label: "03 / FACT VS ADVICE",
        title: "Separate what PikoBuy publishes from what the research desk recommends",
        paragraphs: [
          "A clear guide first states the official fact with a link and review date. It then presents the editorial method as advice: save the raw link, compare option pricing, request category-specific photographs, keep product and parcel budgets separate, or record dispatch and first scan independently. These actions are useful interpretations, but they should not be written as mandatory PikoBuy rules unless the official page actually says so.",
          "This separation protects readers and improves the article. A source paragraph answers what is documented. A practical paragraph explains how to use that information. A boundary paragraph states what the site cannot see or decide. Readers can then judge the advice without confusing an independent research process with an official service instruction, approval or guarantee.",
        ],
        points: [
          "Link material official claims at the point of use.",
          "Label calculations and checklists as editorial tools.",
          "Identify the date behind changing facts.",
          "Send account, payment and parcel cases to official support.",
        ],
      },
      {
        id: "repeatable-record",
        label: "04 / REPEATABILITY",
        title: "Another reader should be able to repeat the product check",
        paragraphs: [
          "A strong spreadsheet row includes enough context for another person to reach the same external page and understand what was observed. Preserve the raw source URL, item identifier, seller or store context where visible, selected variant, price currency, image set, relevant measurements and last successful check date. If the listing disappears or changes, keep the previous status instead of silently replacing the destination.",
          "For product pages, record category-specific evidence rather than reusing a universal QC sentence. For policies, save the exact official destination and section topic. For shipping estimates, save destination, product type, packed weight, three dimensions, packaging assumption and date. Repeatability turns a personal impression into a reviewable research trail and makes corrections possible without pretending that a dynamic marketplace is permanently stable.",
        ],
        points: [
          "Retain identifiers, variants, currency and date.",
          "Record what changed instead of overwriting history.",
          "Use category-specific evidence fields.",
          "Keep estimate assumptions beside the result.",
        ],
      },
      {
        id: "translation-review",
        label: "05 / LANGUAGE CONTROL",
        title: "Twenty-four language paths must share facts and structure",
        paragraphs: [
          "Every localized route should be generated from the same English evidence model so that changing language does not change the page hierarchy, links, source boundaries or decision sequence. Navigation, headings, paragraphs, lists, buttons, metadata and article cards need the same coverage. A partially translated shell creates two problems: readers may miss a condition, and search engines may see near-duplicate pages with mixed-language content.",
          "Machine translation is a starting layer, not permission to change policy meaning. Numbers, time windows, fee formulas, product categories, quoted status names and source URLs need special review. When wording is uncertain, preserve the official link and use a conservative translation. Right-to-left presentation for Arabic changes direction, not the content model. Future editorial review should improve phrasing without allowing one language to promise more than the English source supports.",
        ],
        points: [
          "Keep identical section order and destination links.",
          "Review numbers, units, status labels and fee formulas.",
          "Avoid untranslated English fragments inside localized pages.",
          "Do not widen claims during stylistic editing.",
        ],
      },
      {
        id: "update-log",
        label: "06 / CORRECTIONS",
        title: "An update date must describe a real verification event",
        paragraphs: [
          "A meaningful update checks something concrete: an official policy section changed, a source link stopped resolving, an option or price moved, a product image changed, or an editorial explanation was corrected. The update record should name the page, source reviewed and material difference. Automatically changing every date produces the appearance of freshness without the work that freshness is supposed to represent.",
          "Corrections should remain visible enough to understand the current claim. If a previous statement was too broad, narrow it and record why. If a product disappeared, archive the row with a status rather than deleting the research trail. If official wording and a third-party summary conflict, the official current page controls the policy explanation. A transparent correction improves trust more than pretending the earlier version never existed.",
          "The publication gate also checks the complete route inventory. Every article should appear in the article center, every category guide should have a stable clean URL, and every material fact should point to the first-party page that owns it. A route that exists only by direct URL is not finished research architecture. The same check records which languages have completed editorial review so unreviewed translations remain available for inspection without being opened to search indexing prematurely.",
        ],
        callout:
          "Freshness is an evidence event, not a design effect. A new date without a new check is not an update.",
      },
    ],
  },

  "category-research-guide": {
    sourceContext:
      "FindSpreadsheet currently exposes ten broad product collections. This page explains why each collection needs a different inspection method before a reader opens the corresponding main-site category. PikoBuy’s official guide supports the warehouse-photo stage; the category checklists below are independent editorial methods for using that stage more carefully. Every collection therefore needs its own measurement method, image sequence, variant trap, packaging decision and rejection rule before a row can be compared responsibly.",
    sections: [
      {
        id: "category-purpose",
        label: "01 / WHY CATEGORIES MATTER",
        title: "A category is an inspection plan, not merely a menu label",
        paragraphs: [
          "Shoes, T-shirts, jackets, wallets and electronics fail in different ways. A universal instruction such as check the QC photos is too vague to help. Category structure should tell the reader which photographs, measurements and packaging questions matter most. It should also make shipping variables visible: shoes may retain a box, jackets can occupy volume, electronics can require protective packing, and accessories may need close-ups of small hardware.",
          "FindSpreadsheet organizes current product discovery into shoes, hoodies and sweaters, T-shirts, jackets, pants and shorts, headwear, accessories, jerseys, electronics and other items. The local category cards open those main-site collections directly. Before clicking, use the descriptions as a filter. If a record lacks the evidence that normally distinguishes a strong listing in that category, treat it as incomplete rather than assuming the missing detail will be resolved automatically.",
        ],
        points: [
          "Choose evidence fields by product type.",
          "Connect measurements to fit-sensitive categories.",
          "Connect dimensions and packaging to parcel cost.",
          "Reject vague category labels that hide the actual item type.",
        ],
      },
      {
        id: "footwear-apparel",
        label: "02 / SHOES & APPAREL",
        title: "Shoes and clothing require different measurement evidence",
        paragraphs: [
          "For shoes, compare the side profile, toe shape, heel construction, outsole pattern, insole or size label and visible finishing. The familiar size number is not enough; check which sizing system the listing uses and whether a measured insole view is needed. Decide whether the retail box is important for shape protection before removing it merely to reduce parcel volume. A lower shipping estimate is not useful if the packaging choice creates avoidable deformation.",
          "For hoodies, T-shirts, jackets, pants and shorts, start with garment measurements rather than country labels. Chest width, body length, shoulder width, sleeve length, waist method, rise and inseam answer different fit questions. Then inspect seams, print or embroidery position, cuffs, hems, pockets, lining and hardware. Warehouse lighting can change colour perception, so describe visible tone cautiously and do not infer fabric composition from one photograph.",
        ],
        points: [
          "Shoes: profile, sole, heel, label and packed weight.",
          "Tops: chest, length, shoulder, sleeve and print position.",
          "Bottoms: waist method, rise, inseam, hem and pockets.",
          "Jackets: outer material view, lining, closures and volume.",
        ],
      },
      {
        id: "headwear-accessories",
        label: "03 / HEADWEAR & ACCESSORIES",
        title: "Small items need scale, interior and hardware context",
        paragraphs: [
          "Headwear should show the crown shape, brim profile, embroidery or print placement, rear closure, inner label and usable circumference. A front image can hide a distorted crown or incomplete closure. If sizing is adjustable, record the adjustment range rather than treating adjustable as universal. Shape retention may also affect packaging: compressing a structured cap can save space while changing the product the reader expected to receive.",
          "Accessories need dimensions and scale because a polished close-up can make a small item look larger or more substantial. For wallets, bags, belts and jewellery, check exterior dimensions, interior organization, closure, hardware, edge finishing, attachment points and included pieces. Record material claims only when the listing states them and keep visible texture separate from composition. Sharp or heavy hardware may also need protection from neighbouring goods in a consolidated parcel.",
        ],
        points: [
          "Include a measurement or scale reference.",
          "Request both exterior and interior views.",
          "Check closures, attachment points and included pieces.",
          "Protect rigid hardware during consolidation.",
        ],
      },
      {
        id: "jerseys-electronics",
        label: "04 / JERSEYS & ELECTRONICS",
        title: "Detail alignment and compatibility require explicit checks",
        paragraphs: [
          "For jerseys, compare the selected team, season, player option and size before looking at smaller details. Then inspect badge and patch placement, number alignment, name-set spacing, sleeve treatment, fabric texture and measurements. A listing with many variants can display photographs from one option while the order uses another. Save the exact selection and compare the warehouse item with that selection rather than with the most attractive gallery image.",
          "Electronics require a more conservative method. Record the exact model label, regional or voltage compatibility, connector type, included components, seller specification and packaging condition. PikoBuy’s shipping terms say special and professional products may not receive professional inspection. A visible model label or sealed box does not prove battery health, internal condition, wireless compatibility or long-term function. Check destination restrictions and route acceptance before assuming the product can ship normally.",
        ],
        points: [
          "Jerseys: selected option, patches, numbers and measurements.",
          "Electronics: model, compatibility, included parts and seals.",
          "Do not convert external appearance into a performance claim.",
          "Review shipping restrictions before purchase where possible.",
        ],
      },
      {
        id: "other-items",
        label: "05 / OTHER ITEMS",
        title: "Other Stuff should still describe a real inspection method",
        paragraphs: [
          "A miscellaneous category is necessary, but it should not become a place where records lose their identity. Name the actual product type and explain its use, material claim, dimensions, likely weight, fragile features, included pieces and possible shipping restrictions. If the item is clothing, electronics, food, personal care or another regulated or return-sensitive category, move the important checks from the more specific category instead of using a generic other-items checklist.",
          "The return policy demonstrates why classification matters. It lists customized goods, intimate apparel, food, second-hand items, opened sealed products and multiple specialist categories with different conditions. A vague category can hide the very rule a buyer needs to read before opening packaging or requesting warehouse handling. When classification remains uncertain, pause the record and resolve the item type rather than publishing a confident but unusable description.",
        ],
        points: [
          "Name the product type in plain language.",
          "List dimensions, pieces and fragile features.",
          "Check return-sensitive seals and category rules.",
          "Check shipping restrictions before parcel planning.",
        ],
      },
      {
        id: "category-click",
        label: "06 / BEFORE YOU CLICK",
        title: "Use the main-site category as the start of comparison, not the end",
        paragraphs: [
          "Opening a FindSpreadsheet category should produce several candidates for comparison. Do not judge an isolated record from its title and first image. Compare source identifiers, option context, visible construction, measurements, price currency, saved images and check dates across similar rows. A product with a higher source price may carry better evidence; a cheaper record may simply omit the option or measurement that explains the difference.",
          "After narrowing the candidates, open the current source destination and repeat the match before using PikoBuy. Save the chosen raw link and option, then follow the official process through purchase, warehouse photos and parcel submission. The category page helps organize discovery; the live source, official account and warehouse evidence determine the later decisions. Keeping those roles separate prevents the category label from becoming an unsupported quality claim.",
        ],
        callout:
          "Category pages reduce search noise. They do not replace source matching, warehouse review or final route selection.",
      },
    ],
  },

  "seo-articles": {
    sourceContext:
      "This article center is an editorial map, not a collection of keyword variations. Each linked guide must answer a different user problem, cite the official page that supports material facts and show the boundary between PikoBuy’s published information and independent advice.",
    sections: [
      {
        id: "search-intent",
        label: "01 / ONE QUESTION PER PAGE",
        title: "A useful SEO article starts with a real decision, not a repeated keyword",
        paragraphs: [
          "Someone searching for a PikoBuy spreadsheet may want product discovery, an explanation of raw links, help reading warehouse photographs, a shipping-cost method, a return deadline or a tracking timeline. Those are different decisions. Combining them into one shallow page makes the answer hard to use; publishing the same introduction under several titles creates duplicate content without adding evidence. Each article should define one problem, identify the source that can answer it and give the reader a repeatable next step.",
          "The title and introduction should describe the decision accurately. A shipping article should not promise the cheapest route; it should explain the six estimator inputs, packaging assumptions and route variables. A returns article should not advertise a universal five-day guarantee; it should explain eligibility, the 120-hour clock, seller consent, fees and special condition rules. Specific conditions create stronger search value than a broad page filled with the brand name.",
        ],
        points: [
          "Assign one primary question to every article.",
          "Use a unique evidence set and practical outcome.",
          "Avoid rewriting one introduction across several URLs.",
          "Match the title to what the source can support.",
        ],
      },
      {
        id: "evidence-depth",
        label: "02 / EVIDENCE BEFORE LENGTH",
        title: "Long-form content must earn its length with conditions and examples",
        paragraphs: [
          "A 1,500-word article is not automatically useful. It earns its length when it explains the order of events, defines terms, preserves exceptions, distinguishes similar costs and shows how a reader can verify the claim. The official six-stage guide supports a detailed workflow because each hand-off creates a different record: source selection, first payment, warehouse evidence, route choice, second payment and tracking. The article should connect those records instead of repeating that PikoBuy is an agent.",
          "Policy articles need the same discipline. The return page becomes valuable when it explains why the clock begins from the next hour after In Warehouse, which products may not qualify, how packaging condition matters, what the fee formula contains and why seller responsibility changes the usual cost allocation. Shipping content becomes useful when it connects packed dimensions, actual weight, product type, destination and third-party logistics risk without inventing a rate or delivery promise.",
        ],
        points: [
          "Explain sequence, conditions, exceptions and evidence.",
          "Use examples only to clarify a published rule.",
          "Do not invent tests, purchases or customer experiences.",
          "Link the official destination beside material claims.",
        ],
      },
      {
        id: "article-clusters",
        label: "03 / CONTENT CLUSTERS",
        title: "The core guides should connect without competing with one another",
        paragraphs: [
          "The shopping-flow guide owns the full sequence from source selection to tracking. The QC guide owns visible warehouse evidence and category-specific photo requests. The shipping guide owns estimator inputs, chargeable-weight uncertainty, packaging and route comparison. The returns guide owns eligibility, timing, fees and special standards. Source-link guides own Taobao, Weidian, 1688 and Yupoo matching. Category pages own product-specific inspection plans.",
          "Internal links should follow the reader’s decision rather than a fixed SEO block. A workflow article can send a reader to QC before parcel submission, then to shipping after measurements exist. A category page can send a reader to the main product collection and to the QC method. A return article can link back to warehouse inspection because evidence and timing interact. This structure reduces duplication and makes each page responsible for one complete answer.",
        ],
        points: [
          "Workflow → QC → shipping → tracking.",
          "Product category → source match → warehouse evidence.",
          "Warehouse mismatch → eligibility → return request.",
          "Every internal link should continue a real task.",
        ],
      },
      {
        id: "trust-signals",
        label: "04 / TRUST SIGNALS",
        title: "Sources, dates and limitations are part of the article—not footer decoration",
        paragraphs: [
          "Every material policy claim should open the exact official page, not merely the PikoBuy home page. The guide, estimator, shipping terms, return policy and contact page support different facts. Each article should state the review date and should not refresh that date unless the source was checked again. Product facts should link to the exact FindSpreadsheet record so the reader can inspect the current image, price context and outgoing destination.",
          "Limitations also improve usefulness. This independent site cannot see accounts, approve returns, calculate final freight, inspect warehouse operations or resolve parcels. Saying so directs readers to the correct official channel and prevents editorial content from imitating customer support. PikoBuy publishes Support@pikobuy.com and recommends submitting a ticket; those routes belong in account-specific guidance, while public articles remain focused on published facts and preparation.",
        ],
        points: [
          "Exact source page, not a generic homepage citation.",
          "Visible last-reviewed date tied to a real check.",
          "Clear independent-site and account-access boundary.",
          "Official support route for individual cases.",
        ],
      },
      {
        id: "human-writing",
        label: "05 / HUMAN EDITORIAL TEST",
        title: "Human writing shows judgment about what matters and what remains unknown",
        paragraphs: [
          "A human-readable article does more than alternate a large heading with a short paragraph. It explains why two facts belong together, identifies the decision that follows and states where the evidence becomes insufficient. For example, the estimator requests dimensions, while the guide allows minimal or reinforced packaging. The useful conclusion is not that smaller is always better; it is that packaging changes both volume and protection, so the parcel should be re-measured after a deliberate category-specific choice.",
          "The editorial test is whether a reader can act more carefully after reading. Can they preserve the right source fields, request the right photographs, separate product and freight budgets, recognize the return deadline and avoid interpreting three-day tracking visibility as three-day delivery? If the page cannot change a decision, remove filler and add evidence, examples or a clearer boundary instead of extending the word count mechanically.",
        ],
        points: [
          "Explain why the evidence changes the decision.",
          "Name the unresolved fact instead of hiding it.",
          "Use concrete checks, not generic reassurance.",
          "Edit for usefulness before keyword frequency.",
        ],
      },
      {
        id: "update-sequence",
        label: "06 / UPDATE SEQUENCE",
        title: "Update high-impact facts before publishing another similar article",
        paragraphs: [
          "The first review priority is a policy or process fact that can change a user decision: return timing, fee allocation, estimator fields, route restrictions, support destinations or a broken product source. Next come high-traffic guides and category records with stale images, prices or links. A new article should be published only when it answers a distinct question more completely than the existing library.",
          "An update log should state what was checked and what changed. If nothing changed, retain the prior review date. If an article is merged because it duplicates another page, preserve the stronger destination and update internal links. This approach builds a smaller set of authoritative pages before adding more URLs, which is more useful to readers and more defensible than publishing dozens of near-identical brand-keyword pages.",
        ],
        callout:
          "The goal is not the largest article count. The goal is a complete answer for every important decision, with no two pages pretending to own the same evidence.",
      },
    ],
  },

  sources: {
    sourceContext:
      "The source register explains exactly which public page supports each type of claim, when the page was reviewed and how editorial conclusions are kept separate. It is designed so a reader can audit the statement without trusting a search snippet or a generic homepage link.",
    sections: [
      {
        id: "official-map",
        label: "01 / OFFICIAL SOURCE MAP",
        title: "Five official pages answer five different classes of question",
        paragraphs: [
          "PikoBuy’s beginner guide supports the shopping sequence, including product selection, link or keyword search, first payment, warehouse inspection, parcel submission, international freight payment and the statement that tracking information will be available within three days after shipment. The shipping estimator supports its six visible planning inputs: destination, product type, weight, length, width and height. Neither page alone supports a guaranteed route price or delivery date.",
          "The forwarding and shipping terms support the four forwarding steps, unpacking and inspection of forwarded goods, limitations for specialist inspection, use of additional detailed photographs, sender or seller responsibility for after-sales service and third-party logistics risk. The returns page supports eligibility, the five-day or 120-hour warehouse application window, fee rules, seller consent, exclusions and special condition standards. The contact page supports the published email, ticket route, Discord and Reddit links.",
        ],
        points: [
          "Beginner guide → sequence and payment stages.",
          "Estimator → destination, type, weight and dimensions.",
          "Shipping terms → forwarding duties and logistics risks.",
          "Returns and contact → policy conditions and support routes.",
        ],
      },
      {
        id: "product-map",
        label: "02 / PRODUCT SOURCE MAP",
        title: "Product records require the exact FindSpreadsheet destination",
        paragraphs: [
          "FindSpreadsheet’s current main navigation exposes product collections for shoes, hoodies and sweaters, T-shirts, jackets, pants and shorts, headwear, accessories, jerseys, electronics and other items. Individual product pages support the title, image, saved source price and link context displayed in this research site. The exact record should be cited because a category page cannot prove the details of one item and the home page cannot prove the destination of one outgoing link.",
          "Marketplace information is dynamic. A source listing can change images, variants, stock, seller notes or price after the FindSpreadsheet record is created. This site therefore treats product fields as dated observations and asks readers to open the current destination before ordering. When a record no longer resolves, the correct response is an unavailable status and an update note—not a claim that the previous price or seller context remains current.",
        ],
        points: [
          "Link the exact product record for product facts.",
          "Link the exact category for broader discovery.",
          "Preserve price currency, option context and check date.",
          "Archive broken destinations with a reason.",
        ],
      },
      {
        id: "citation-placement",
        label: "03 / CITATION PLACEMENT",
        title: "A source belongs beside the material claim it supports",
        paragraphs: [
          "A reader should not need to guess which of several links supports a paragraph. Workflow claims should point to the guide; estimator fields should point to the estimator; return timing and fees should point to the return policy. A generic source list at the bottom is useful as a register, but it does not replace a direct reference beside a high-impact claim. Descriptive link text should name the destination and topic rather than hiding everything behind learn more.",
          "Citations should also preserve the difference between quotation and interpretation. The official page supplies the rule. The research article can explain why the rule affects a spreadsheet field, photo checklist or budgeting method. The citation does not make the editorial conclusion official; wording such as our method, a practical approach or this guide recommends keeps that boundary visible.",
        ],
        points: [
          "Place high-impact sources near the supported statement.",
          "Use destination and topic in link text.",
          "Separate official wording from editorial conclusion.",
          "Do not cite a search-result snippet as final evidence.",
        ],
      },
      {
        id: "date-control",
        label: "04 / REVIEW DATES",
        title: "A review date records an action, not an SEO freshness signal",
        paragraphs: [
          "A page earns a new review date when the editor reopens the source, checks the relevant section and verifies whether the summarized condition still matches. Product pages need separate product-record dates because a marketplace listing can change independently from PikoBuy policy. Shipping estimates need a destination, parcel assumption and date. Currency conversion needs the reference rate and date. Combining all of these into one site-wide updated today label hides what was actually checked.",
          "When the source has not changed, the log can say reviewed with no material change. When it has changed, identify the affected statement and revise dependent pages. If a source becomes unavailable, do not preserve a confident claim solely because an old copy existed. Mark the verification gap, look for a current first-party replacement and avoid turning an archived third-party summary into an official source.",
        ],
        points: [
          "Policy date, product date and conversion date are separate.",
          "Name the section reviewed and material change.",
          "Do not refresh dates automatically.",
          "Flag unavailable sources and narrow affected claims.",
        ],
      },
      {
        id: "conflict-resolution",
        label: "05 / CONFLICTS & LIMITS",
        title: "When sources conflict, narrow the claim before choosing a winner",
        paragraphs: [
          "A third-party article, forum post or spreadsheet note may describe a different date, destination, seller or account outcome. That does not automatically prove the official page wrong, and the official general policy does not automatically explain every individual case. First identify whether the sources are answering the same question. For current public policy, the official current page controls this site’s summary. For an account outcome, only the official account record and support response can resolve the case.",
          "The same caution applies to product claims. Two similar listings may use the same photograph while carrying different item IDs, options or sellers. Do not merge them because the titles look alike. Keep conflicting evidence visible, state what remains uncertain and stop short of a recommendation until the conflict is resolved. Transparent uncertainty is more accurate than selecting whichever source produces the most attractive conclusion.",
        ],
        points: [
          "Confirm that sources address the same date and question.",
          "Use first-party current policy for public-rule summaries.",
          "Use official support for account-specific outcomes.",
          "Keep product identifiers separate even when images match.",
        ],
      },
      {
        id: "correction-route",
        label: "06 / CORRECTION ROUTE",
        title: "A correction should show what changed and where readers can verify it",
        paragraphs: [
          "When a factual error is reported, reopen the cited destination, compare the exact disputed sentence and update every page that inherited the claim. The correction note should name the previous problem, the current wording and the review date. If only editorial advice changes, say so; do not imply that PikoBuy changed a policy. If a product record changes, update the record status while preserving the earlier observation when it helps explain the history.",
          "Account, order, payment, refund and parcel cases do not belong in a public correction queue because this independent site cannot inspect them. PikoBuy publishes Support@pikobuy.com and recommends its ticket route for those questions. Public corrections should stay focused on source accuracy, broken links, translation meaning, product-record facts and editorial boundaries. That division keeps the source register useful instead of turning it into unofficial customer support.",
        ],
        callout:
          "A trustworthy source page lets the reader reproduce the check, understand the date and see the limit of every claim.",
      },
    ],
  },
};
