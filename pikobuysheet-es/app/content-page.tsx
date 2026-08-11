import { SiteFooter, SiteHeader } from "./site-chrome";
import { getInterfaceLabels, getLocaleCopy, getMainSiteCategories, localPath, officialSources, type PageKey } from "./site-config";

type Article = {
  slug: string;
  title: string;
  deck: string;
  metaTitle?: string;
  metaDescription?: string;
  date: string;
  publishedISO?: string;
  modifiedISO?: string;
  lastChecked?: string;
  readTime: string;
  wordCount?: number;
  primaryKeyword?: string;
  supportingKeywords?: string[];
  publishedLocales?: string[];
  sources?: { label: string; href: string; note: string }[];
  relatedLinks?: { label: string; href: string; note: string }[];
  sections: { title: string; paragraphs: string[]; bullets?: string[] }[];
};

const categoryMarks = ["SH", "HD", "TS", "JK", "PS", "HW", "AC", "JR", "EL", "+"];

export const articles: Article[] = [
  {
    slug: "how-to-use-a-pikobuy-spreadsheet",
    title: "How to Use a PikoBuy Spreadsheet Without Treating It as a Shortcut",
    deck: "A practical, evidence-first workflow for comparing source links, QC photos, sizing, prices and shipping context before you move from a spreadsheet row to an order.",
    date: "July 31, 2026",
    readTime: "14 min read · 1,555 words",
    sections: [
      {
        title: "A spreadsheet should reduce noise, not replace judgment",
        paragraphs: [
          "The first time you open a large product spreadsheet, it is tempting to treat the rows as recommendations. A neat title, a low price and a familiar product photograph can make a link feel pre-approved. That is the wrong mental model. A spreadsheet is better understood as a research queue: it helps you find possible source pages and organize comparisons, but it cannot confirm today’s stock, the exact variant a seller will send, or the final cost of getting a parcel to your address.",
          "That distinction matters because the PikoBuy buying process has several stages after discovery. PikoBuy’s published beginner guide says a shopper can start with products from Taobao, Tmall, 1688, Weidian or Yupoo, then paste a link or keywords into PikoBuy, choose options, pay for the product order, wait for warehouse inspection, select an international route and finally wait for the parcel. A spreadsheet only helps with the first part of that journey. The later stages add information that a row cannot know in advance.",
        ],
      },
      {
        title: "1. Begin with a category and a real use case",
        paragraphs: [
          "Do not start by opening twenty random links. Decide what you are actually trying to compare: lightweight T-shirts, winter jackets, sneakers, bags or another defined group. Category-first research makes weak rows easier to spot because the same questions apply to each item. A shoe comparison needs size-system and insole information. A jacket comparison needs garment measurements, hardware, lining and weight context. A watch or electronic item raises different shipping and after-sales questions.",
          "Write one sentence that explains the purchase before you search. For example: “I need a mid-weight jacket with a chest measurement close to one I already own, and I am willing to pay more for clear warehouse photos.” That sentence becomes a filter. It prevents a low headline price or a fashionable product name from changing the goal halfway through the process.",
        ],
      },
      {
        title: "2. Open the source page and confirm identity",
        paragraphs: [
          "A row is useful only if its destination still corresponds to the item described. Open the linked detail page and compare the product type, seller images, displayed options, source price and any item identifier. “Source page live” should mean only that the referenced page loaded when it was reviewed. It must never be read as a promise that the item is in stock, that every pictured variant is available, or that the seller is verified.",
          "Look for mismatches that are easy to miss in a fast scroll: a title that names one model while the source page shows several unrelated variants, a price that applies only to a small accessory, or a photograph that no longer appears on the current listing. If the page has changed enough that you cannot explain the match, remove the row from the shortlist. A clean-looking spreadsheet is not a reason to ignore a messy destination.",
        ],
      },
      {
        title: "3. Treat photographs as evidence with limits",
        paragraphs: [
          "Seller photographs help you identify the intended item; warehouse photographs help you inspect the received item. They solve different problems. PikoBuy’s public guide says that warehouse staff inspect arrivals, check them in, take photos and look for defects. Its transportation policy adds an important limit: special or professional products cannot receive professional inspection, and users may need to rely on inspection photos or purchase additional detailed photos.",
          "Build a photo checklist for the product category before the parcel arrives. For shoes, that could include both sides, heels, toe shape, outsole, size label and insole measurement. For clothing, check front and back, print placement, seams, tags, hardware and tape measurements. Photographs can reveal visible inconsistencies; they cannot prove material composition, long-term durability, electrical safety or authenticity. When the decision depends on something a photo cannot establish, record the uncertainty instead of upgrading it into a claim.",
        ],
      },
      {
        title: "4. Compare measurements, not only size labels",
        paragraphs: [
          "A size label is a category, not a universal measurement. Two sellers can use the same “L” for garments with very different chest widths, lengths and sleeves. Compare the listing’s measurements with a similar item that already fits you. Note whether the chart describes the body or the garment, whether values are flat measurements or circumferences, and whether the seller mentions a manual-measurement tolerance.",
          "Also confirm that the selected color and size exist together. A source page may display a broad product gallery while certain combinations are unavailable. PikoBuy’s guide says the shopper chooses color, size and quantity before submitting and making the first payment, and that the final price is based on the actual purchase. The ordering screen, not the spreadsheet title, is where the chosen variant must be checked again.",
        ],
      },
      {
        title: "5. Separate item price from landed cost",
        paragraphs: [
          "The number in a spreadsheet is usually the beginning of a cost calculation. It may exclude Chinese domestic shipping, agent-related charges, optional photographs, packaging choices, international freight, payment conversion and import charges. Even when a page shows an approximate USD conversion, the exchange rate and checkout amount can change. Use converted prices to compare rows, not to promise the final debit on a card statement.",
          "PikoBuy provides a shipping estimator that asks for the destination country or region, product type, weight in kilograms and parcel length, width and height in centimetres. Those inputs explain why two items with similar purchase prices may have very different delivered costs. Until the warehouse records the item and the packed parcel is known, shipping should be a range or planning question rather than a precise prediction.",
        ],
      },
      {
        title: "6. Give weight and packaging a place in the shortlist",
        paragraphs: [
          "Heavy jackets, boxed shoes and bulky bags deserve more shipping attention than a thin shirt, but small items can also become inefficient when packaging or route minimums are involved. Record known weight only when a credible source provides it, and label estimates as estimates. If dimensions are missing, do not manufacture them from a product photograph.",
          "PikoBuy’s beginner guide says users choose a logistics route after warehouse inspection and parcel submission, and that routes differ in delivery time and billing method. Its shipping policy says third-party logistics providers carry parcels and identifies customs actions, damage, loss and peak-period delays as cross-border risks that cannot be eliminated. A good spreadsheet workflow therefore asks, “Is the product still attractive under a cautious shipping scenario?” rather than “What is the cheapest route?”",
        ],
      },
      {
        title: "7. Understand the return clock before it starts",
        paragraphs: [
          "PikoBuy’s returns page describes a five-day request period after an order becomes “Warehoused,” beginning from the next hour; it explicitly equates that period to 120 hours. Timing alone does not make every item returnable. The seller must support a return, the product must remain in a marketable condition, and category-specific packaging or seal requirements may apply. Custom products, some personal items and other seller-defined exclusions can be ineligible.",
          "For a no-quality-issue return, the published policy describes domestic shipping costs and a 5 RMB service fee, while responsibility can differ when the seller sent the wrong product or there is a documented quality problem. This is why QC review should happen promptly. A spreadsheet can remind you of the window, but the current order page and current official policy determine what can actually be requested.",
        ],
      },
      {
        title: "8. Use a simple keep, check or remove system",
        paragraphs: [
          "Give every row one of three statuses. Keep means the source match is clear, the variant is plausible, and no major information is missing for the current comparison. Check means a specific question remains, such as a measurement, current option, package weight or requested photo. Remove means the source is broken or mismatched, the claim cannot be checked, or the item no longer fits the original use case.",
          "The value of this system is not visual neatness. It creates an audit trail. When you return to a shortlist days later, you can see why an item survived. Add a review date because listings, prices and policies move. Do not silently change an old result from “live” to “verified”; record what was checked and what was not.",
        ],
      },
      {
        title: "9. Run the five-minute final review",
        paragraphs: [
          "Before moving to the official order flow, compare the finalists side by side. Confirm the category and use case, source-page match, selected variant, measurements, photographs, known price components, weight context and any return-sensitive packaging. Open the PikoBuy ordering screen from the current source, then verify the live options and displayed amount again. If the seller or platform changed the listing, stop and reassess rather than forcing the old row to fit.",
          "Finally, keep the roles clear. PikoBuy Sheet is an independent research guide; FindSpreadsheet is the linked product-discovery catalogue; PikoBuy publishes and operates its own purchasing, warehouse and shipping process. Support, tracking, refunds and order changes belong in the official account or support channel connected to the transaction. A useful spreadsheet gets you to that handoff with fewer unanswered questions—it does not pretend the handoff is unnecessary.",
        ],
        bullets: [
          "Can I explain why this exact row remains on the shortlist?",
          "Does the current source page still match the product and variant?",
          "Have I compared measurements and category-specific QC points?",
          "Have I treated shipping and exchange rates as variable?",
          "Do I know which question must be checked again after warehousing?",
        ],
      },
    ],
  },
  {
    slug: "pikobuy-qc-shipping-return-guide",
    title: "PikoBuy QC, Shipping and Returns: The Decisions That Happen After You Find a Product",
    deck: "An evidence-based guide to warehouse photographs, parcel estimates, logistics limits and the 120-hour return request window, using PikoBuy’s published pages as the source of record.",
    date: "July 31, 2026",
    readTime: "13 min read · 1,456 words",
    sections: [
      {
        title: "Finding the link is only the first decision",
        paragraphs: [
          "Product discovery gets most of the attention because it is visual and fast. The harder decisions arrive later: whether warehouse photographs show what you expected, whether size and colour are correct, how packaging affects the parcel, which route fits the destination, and whether a problem can still be returned. Those decisions are connected. Weak QC review can become an expensive international shipment; a shipping estimate made too early can make a low-priced item look cheaper than it is; a delayed review can run into a return deadline.",
          "This guide keeps published facts separate from practical interpretation. Official PikoBuy pages are the source for its workflow, estimator inputs, return timing and policy limits. The checklist language here is independent guidance, not a guarantee from PikoBuy or a substitute for the current order page.",
        ],
      },
      {
        title: "1. What the published warehouse process says",
        paragraphs: [
          "PikoBuy’s beginner guide describes warehouse inspection as the fourth step after product selection, search and first payment. When the product arrives, the guide says staff inspect it, check it in, take photographs and look for defects. Its transportation policy says goods transferred to the warehouse must be unpacked for inspection, and that users should check the provided inspection photographs or purchase additional detailed photographs when needed.",
          "The same policy sets a boundary that careful buyers should not overlook: special and professional products cannot receive professional inspection. A warehouse photograph is therefore best used for observable questions. It can help confirm colour, visible construction, labels, measurements, major accessories and obvious damage. It cannot establish long-term performance, internal electronics, chemical composition, professional grading or other facts that require specialist testing.",
        ],
      },
      {
        title: "2. Build the QC request around the product",
        paragraphs: [
          "Generic photographs are not equally useful for every item. Start with the failure points that would change your decision. Shoes need pair symmetry, size tags, soles, heels and perhaps insole length. Jackets need zippers or buttons, lining, seams, sleeve and chest measurements. Printed clothing needs placement, alignment and colour. Bags need dimensions, closures, straps, corners and included accessories. Electronics raise power, battery and route questions that photographs alone may not solve.",
          "Ask for additional details only when they answer a defined question. “More photos” is vague; “a straight photograph of the size label and a tape measurement of the insole” is actionable. Keep the original order options beside the QC images so you can compare colour, size and quantity. If the evidence is incomplete, label the decision incomplete instead of treating the absence of a visible defect as proof that no defect exists.",
        ],
      },
      {
        title: "3. Review quickly because return timing is separate from shipping",
        paragraphs: [
          "PikoBuy’s returns policy says a request can be made within five days after the order status becomes “Warehoused,” starting from the next hour, and defines five days as 120 hours. This clock relates to the warehoused item; it is not the same as the later international delivery period. Waiting until parcel submission to examine the photographs can waste time that was available for an after-sales request.",
          "Set a reminder when the status changes and review the ordered options, photographs and measurements together. If something is wrong, use the reason that matches the evidence. The policy distinguishes customer-choice reasons, wrong products, quality issues and domestic-transport damage, and the responsibility for fees can differ. Do not select a reason merely because it sounds more favourable.",
        ],
      },
      {
        title: "4. The 120-hour window is not unconditional approval",
        paragraphs: [
          "The official policy requires more than a timely click. A seller must offer the relevant return service, the product must remain marketable, and the warehouse time must not exceed the stated period. It lists categories and conditions that may be unavailable, including custom-made products, certain personal goods, items with packaging or tags removed at the user’s request, and other exclusions defined by sellers. Special return standards can require seals, labels or accessories to remain intact.",
          "The policy also says PikoBuy can return a product only when the seller agrees. For an unconditional return, it describes shipping to the seller, the original seller shipping cost and a 5 RMB service fee; even an originally free-shipping order may require the first dispatch cost to be repaid. Current order details and the current policy should always be checked before estimating a refund.",
        ],
      },
      {
        title: "5. Estimate shipping with the variables the estimator asks for",
        paragraphs: [
          "PikoBuy’s public shipping-cost page asks for a destination country or region, product type, weight in kilograms, and length, width and height in centimetres. That form is a useful lesson in itself: an item price or spreadsheet row does not contain enough information to calculate delivery. Destination, category, weight and parcel dimensions all influence which routes or prices may appear.",
          "Use early estimates as scenarios. A seller-provided item weight may not equal the final packed weight. Protective packaging can change dimensions, combining items can alter the parcel, and route rules can change the billing result. Record the date and assumptions behind an estimate. After warehousing, replace assumptions with the available measured information and run the comparison again.",
        ],
      },
      {
        title: "6. Compare routes on more than the lowest displayed number",
        paragraphs: [
          "PikoBuy’s guide says routes differ in delivery time and billing method. A sensible comparison also checks destination availability, product restrictions, tracking expectations, insurance terms where offered and the value of the parcel. The lowest headline price is not automatically the best fit if the route excludes the product type or leaves an important risk outside its service terms.",
          "The transportation policy says third-party international logistics providers carry the parcels and identifies customs policies, confiscation, damage, loss and peak-period delays as risks affected by uncontrollable cross-border factors. This does not mean every parcel will face a problem. It means an independent guide should not promise customs clearance, an exact arrival date or risk-free delivery. Use the official route description shown for the actual parcel and destination.",
        ],
      },
      {
        title: "7. Packaging is part of QC and shipping at the same time",
        paragraphs: [
          "Packaging protects the product but can add weight or volume. PikoBuy’s guide mentions that users can add requests such as minimal or reinforced packaging. The right choice depends on the item: removing an unnecessary shoe box may reduce volume, while fragile or structured goods may need protection. A request should reflect the product’s vulnerability and the buyer’s tolerance for packaging damage.",
          "Do not make irreversible packaging requests before completing the return-sensitive review. The returns policy includes packaging, tags, seals and accessories among the conditions that can affect eligibility for certain goods. First confirm the item, then decide how it should be prepared for international shipping. That sequence keeps QC, returns and shipping from working against one another.",
        ],
      },
      {
        title: "8. Know what happens after parcel submission",
        paragraphs: [
          "According to the beginner guide, the shopper chooses a logistics route, submits the parcel and pays international shipping; PikoBuy then arranges dispatch. The guide says logistics information will be available within three days after shipment. Treat that statement as the platform’s published expectation, not as a guarantee that every carrier scan or border event will appear immediately.",
          "Once the parcel is moving, order-specific tracking, address questions and carrier exceptions belong in the official account or support channel. An independent spreadsheet site cannot inspect a private order or alter a shipment. Keep the parcel number, route name, declared contents and support records together so the official team can identify the transaction if you need help.",
        ],
      },
      {
        title: "9. A connected decision sequence",
        paragraphs: [
          "The safest practical sequence is simple. First, confirm the ordered variant and review warehouse photographs against a product-specific checklist. Second, resolve any problem while the stated return-request period is still open. Third, decide on packaging after the item is accepted. Fourth, use measured weight and dimensions with the real destination and product type. Fifth, compare the routes shown for that parcel and read their current conditions. Finally, save the dispatch and tracking details in the official account.",
          "This process is slower than clicking through a spreadsheet row, but it prevents one attractive number from controlling the entire decision. A good research site should make the sequence easier to follow, cite the official source behind policy facts and clearly date its own review. When a detail changes, the current PikoBuy page—not an old article—must win.",
        ],
        bullets: [
          "QC evidence answers visible product questions; it is not professional testing.",
          "The return request period starts after the status becomes Warehoused, not after international delivery.",
          "Seller agreement, marketable condition and exclusions still affect return eligibility.",
          "Destination, product type, weight and dimensions are required for a meaningful shipping estimate.",
          "Third-party logistics and customs create risks that no spreadsheet can remove.",
        ],
      },
    ],
  },
  {
    slug: "pikobuy-total-cost-explained",
    title: "PikoBuy Total Cost Explained: What You Pay Before International Delivery",
    deck: "A practical way to estimate product payment, seller delivery, warehouse decisions, parcel dimensions, international shipping and the costs that may remain outside the checkout screen.",
    metaTitle: "PikoBuy Total Cost: Two Payments & Shipping Guide",
    metaDescription: "Calculate PikoBuy total cost across product payment, China delivery, warehouse choices, parcel dimensions, international shipping, returns, and import risk.",
    date: "August 9, 2026",
    publishedISO: "2026-08-09T08:00:00-07:00",
    modifiedISO: "2026-08-09T08:00:00-07:00",
    lastChecked: "August 9, 2026",
    readTime: "15 min read · 1,713 words",
    wordCount: 1713,
    primaryKeyword: "PikoBuy total cost",
    supportingKeywords: [
      "PikoBuy fees",
      "PikoBuy shipping cost",
      "PikoBuy payment process",
      "PikoBuy warehouse consolidation",
      "PikoBuy international shipping",
      "PikoBuy landed cost",
      "PikoBuy shipping estimator",
    ],
    publishedLocales: ["en"],
    sources: [
      { label: "PikoBuy beginner's guide", href: "https://www.pikobuy.com/guide", note: "First product payment, warehouse inspection, packaging requests and the separate international-shipping payment." },
      { label: "PikoBuy shipping estimate", href: "https://www.pikobuy.com/shipping-cost", note: "Destination, product type, weight and parcel dimensions used for route estimates." },
      { label: "PikoBuy shipping terms", href: "https://www.pikobuy.com/protocol/shipping", note: "Forwarding workflow, account-balance note and third-party logistics/customs risk boundaries." },
      { label: "PikoBuy returns and exchanges", href: "https://www.pikobuy.com/protocol/returns", note: "The five-day/120-hour request window, seller conditions, return responsibility and published fees." },
      { label: "PikoBuy contact page", href: "https://www.pikobuy.com/contact", note: "PikoBuy's statement that items from different sellers can be combined into one parcel." },
    ],
    relatedLinks: [
      { label: "PikoBuy Spreadsheet 2026", href: "/", note: "Return to the category and source-link research hub." },
      { label: "How to use a PikoBuy spreadsheet", href: "/how-to-use-pikobuy-spreadsheet", note: "Check a source row before placing the product order." },
      { label: "PikoBuy QC checklist", href: "/pikobuy-spreadsheet-qc", note: "Review the received item before accepting it for shipment." },
      { label: "PikoBuy shipping guide", href: "/pikobuy-spreadsheet-shipping-guide", note: "Compare parcel and route inputs after warehousing." },
    ],
    sections: [
      {
        title: "The listing price is only the first number",
        paragraphs: [
          "A low product price can be useful for comparing finds, but it is not the PikoBuy total cost. The amount needed to receive an item abroad is assembled over several decisions: the product order, any seller-side delivery inside China, warehouse inspection, optional photographs or packaging, the packed parcel, international transport and possible destination charges. Some parts are visible before purchase; others become clearer only after the item reaches the warehouse.",
          "That timing is important. A spreadsheet row can show a current source price and help identify a product, yet it cannot know the final packed weight, route availability for your country, customs treatment or the amount your payment provider will convert. The useful question is not, “What does this row cost?” It is, “Which costs can I verify now, which appear after warehousing, and which remain outside PikoBuy's control?”",
        ],
      },
      {
        title: "1. Understand the two payment moments",
        paragraphs: [
          "PikoBuy's current beginner guide separates the process clearly. In step three, the shopper selects the colour, size and quantity, submits the purchasing order and completes the first payment. After the product reaches the warehouse, PikoBuy says it checks the item in, takes confirmation photographs and looks for visible defects. In step five, the shopper chooses a logistics route, submits the parcel and pays the international shipping fee.",
          "This is why a single checkout-style total shown at the discovery stage would be misleading. The first payment moves the product from the seller toward the warehouse. The later payment moves an accepted, packed parcel from the warehouse toward the destination. The second amount depends on information that may not exist at the first payment, including the parcel's measured weight, dimensions, product classification and the routes available for the destination.",
        ],
      },
      {
        title: "2. Build the product-side subtotal before ordering",
        paragraphs: [
          "Start a worksheet with the exact item and variant, not a rounded headline price. Record the source-page amount for the selected colour, size and quantity; the seller's domestic delivery charge if it is displayed; and any optional service you knowingly select. Save the date and currency shown. PikoBuy's guide notes that the final price is based on the actual purchase and that an out-of-stock order will be refunded, so the live order screen should take priority over an older spreadsheet snapshot.",
          "Keep uncertain entries blank or label them as estimates. Do not invent a domestic shipping amount when the seller has not shown one, and do not assume that a displayed USD conversion will equal the final card debit. A clean subtotal has three columns: confirmed now, estimated for planning and unknown until later. That small distinction prevents an estimate from quietly becoming a promise when you compare several products.",
        ],
      },
      {
        title: "3. Treat the warehouse as a cost checkpoint",
        paragraphs: [
          "Warehouse arrival is not merely a pause between payments. It is the point where the order becomes more measurable and where a costly mistake may still be avoidable. PikoBuy says warehouse staff check in the item, photograph it and inspect for visible defects. Compare those photographs with the ordered variant and with a category-specific QC checklist. If size, colour, quantity or visible condition is wrong, resolve the issue before building an international parcel.",
          "The warehouse stage can also introduce choices. PikoBuy's guide mentions requests such as minimal packaging or reinforced packaging. Additional detail photographs may be useful when the standard views do not answer a decision-changing question. Each optional step should have a purpose: confirming an insole measurement, protecting a fragile shape or reducing dispensable volume. “More” is not automatically better if it adds cost without reducing uncertainty or protecting the item.",
        ],
      },
      {
        title: "4. Recalculate when several sellers become one parcel",
        paragraphs: [
          "PikoBuy's contact page says items from different sellers can be combined into one package. Consolidation can remove the need to send several separate international parcels, but it should not be described as guaranteed savings. A combined parcel has its own packed weight, external dimensions, product mix and eligible routes. Adding a bulky box to lightweight clothing can change the result in ways that item prices do not reveal.",
          "Compare at least two realistic parcel plans when the warehouse allows it: the intended consolidated parcel and a sensible alternative, such as removing nonessential outer packaging or separating a restricted product. Do not divide one estimated freight quote equally across every item. A better per-item analysis considers weight, occupied volume and whether one product forces a different route. The goal is to identify the item that changes the parcel decision, not to manufacture a perfectly precise allocation.",
        ],
      },
      {
        title: "5. Use the estimator with warehouse-quality inputs",
        paragraphs: [
          "PikoBuy's public shipping estimator asks for five practical inputs: destination country or region, product type, weight in kilograms, and parcel length, width and height in centimetres. These fields explain why product price alone cannot predict PikoBuy shipping cost. Destination and classification affect which routes may appear, while weight and dimensions describe what the carrier must handle.",
          "Run an early scenario if you need a budget boundary, but write down every assumption. Seller-reported item weight is not necessarily packed weight, and product measurements are not parcel measurements. Once warehouse data is available, replace estimates with the measured figures and search again. Compare only the routes actually offered for that parcel and destination. The official guide states that routes differ in delivery time and billing method, so the cheapest displayed number should not be evaluated without its route conditions.",
        ],
      },
      {
        title: "6. Separate controllable costs from external exposure",
        paragraphs: [
          "Some decisions are directly manageable: which products enter the parcel, whether optional packaging is requested and which available route is selected. Other amounts may sit outside the product and shipping screens. Currency conversion can differ by payment provider, and destination authorities may assess tax, duty, brokerage or handling under rules that depend on the country, product and shipment. Check the current checkout and local official guidance instead of copying a percentage from an unrelated haul.",
          "PikoBuy's shipping terms also state that third-party logistics providers carry international parcels and identify customs action, damage, loss and peak-season delay as cross-border risks. A cost plan should therefore include a risk decision, not a fake universal surcharge. Ask whether the parcel value is acceptable under the current route's protection terms and whether an unexpected destination charge would make the purchase unsuitable. If that answer is no, the budget is already too tight.",
        ],
      },
      {
        title: "7. Include the cost of changing your mind",
        paragraphs: [
          "A return before international dispatch can still carry costs. PikoBuy's returns page says an eligible request must normally be submitted within five days after the status changes to In Warehouse, counted from the next hour, which it defines as 120 hours. Eligibility also depends on seller support, marketable condition, packaging requirements and product exclusions. PikoBuy says it can return the product only with the seller's consent.",
          "For an unconditional return, the published policy lists shipping back to the seller, the seller's original shipping fee and a RMB 5 service fee; it also says originally free seller delivery may still need to be repaid. Responsibility can differ for a wrong item or documented quality problem. These rules make prompt QC financially relevant. Accepting an uncertain item and paying international freight can turn a domestic after-sales question into a much harder cross-border problem.",
        ],
      },
      {
        title: "8. Use ranges instead of a false exact total",
        paragraphs: [
          "Before warehousing, calculate a planning range rather than one impressive-looking figure. The lower case can use the confirmed product subtotal and a cautious route scenario based on credible weight and dimensions. The upper case should reflect plausible packaging or dimensional uncertainty plus any destination-side amount you can support from current local rules. Unknown does not mean zero. It means the decision is not ready for an exact number.",
          "After warehousing, narrow the range. Confirm the received variant, measured information, packaging plan and available routes. Save the route name, date and assumptions because prices and availability can change. The number shown at this stage is still not a permanent public tariff; it is an order-specific observation. A useful article teaches the calculation method without pretending that one reader's parcel quote applies to another country, product type or date.",
        ],
      },
      {
        title: "9. A practical total-cost worksheet",
        paragraphs: [
          "Use seven lines: selected product amount; seller delivery inside China; confirmed optional warehouse services; packed weight and dimensions; selected international route; payment-conversion difference; and destination tax, duty or handling where applicable. Add a separate line for return exposure while the item remains in China. Beside every line, mark the source: seller listing, PikoBuy order screen, warehouse measurement, PikoBuy estimator, route screen, payment provider or destination authority.",
          "This worksheet is more useful than copying a creator's haul total because it exposes weak evidence. If international freight is based on guessed dimensions, the sheet says so. If a customs amount is not known, it remains a destination-side question. If an item is within the return window but the photos are unclear, the next action is additional evidence or an after-sales request—not automatically paying the second stage.",
        ],
      },
      {
        title: "10. The ten-minute review before international payment",
        paragraphs: [
          "Before submitting the parcel, reopen the live order and route screens. Confirm that the item in the warehouse matches the purchased variant, that any return-sensitive question has been resolved, and that the packaging request reflects the product rather than a generic preference. Enter measured weight and dimensions where available, compare the current eligible routes, and read their billing and restriction details. Check the receiving address and keep enough margin for payment conversion or legitimate destination charges.",
          "The final PikoBuy total cost is not a number a spreadsheet can guarantee in advance. It is a documented chain of costs and decisions. The best workflow keeps the first product payment separate from the later international-shipping payment, replaces guesses when warehouse evidence arrives, and leaves external charges labelled honestly. That approach will not make every parcel cheap, but it makes the decision understandable before the most difficult costs are already committed.",
        ],
        bullets: [
          "The selected product, colour, size and quantity still match the live order.",
          "Warehouse photographs and measurements answer the questions that could trigger a return.",
          "The 120-hour request period and seller conditions have been checked where relevant.",
          "The shipping estimate uses the correct destination, product type, weight and dimensions.",
          "The chosen route is assessed on restrictions, billing method and risk—not price alone.",
          "Currency conversion and possible destination charges are not hidden inside a fake guaranteed total.",
        ],
      },
    ],
  },
  {
    slug: "pikobuy-warehouse-consolidation-guide",
    title: "PikoBuy Warehouse Consolidation: A Practical Packing Decision Guide",
    deck: "A step-by-step warehouse workflow for checking each arrival, protecting the return window, combining orders, choosing packaging and estimating the finished parcel.",
    metaTitle: "PikoBuy Warehouse Consolidation & Packing Guide",
    metaDescription: "Plan PikoBuy warehouse consolidation: review QC photos, protect the 120-hour return window, combine orders, choose packaging, and estimate the parcel.",
    date: "August 11, 2026",
    publishedISO: "2026-08-11T08:00:00-07:00",
    modifiedISO: "2026-08-11T08:00:00-07:00",
    lastChecked: "August 11, 2026",
    readTime: "14 min read · 1,619 words",
    wordCount: 1619,
    primaryKeyword: "PikoBuy warehouse consolidation",
    supportingKeywords: [
      "combine PikoBuy orders",
      "PikoBuy parcel consolidation",
      "PikoBuy warehouse QC",
      "PikoBuy packaging options",
      "PikoBuy shipping estimate",
      "PikoBuy parcel submission",
    ],
    publishedLocales: ["en"],
    sources: [
      { label: "PikoBuy beginner's guide", href: "https://www.pikobuy.com/guide", note: "Warehouse check-in, photo confirmation, defect checks, packaging requests, parcel submission and international-shipping payment." },
      { label: "PikoBuy contact page", href: "https://www.pikobuy.com/contact", note: "PikoBuy's public statement that items from different sellers can be combined into one package." },
      { label: "PikoBuy shipping estimate", href: "https://www.pikobuy.com/shipping-cost", note: "Destination, product type, weight and parcel dimensions used for shipping estimates." },
      { label: "PikoBuy returns and exchanges", href: "https://www.pikobuy.com/protocol/returns", note: "The five-day/120-hour request period, seller conditions, packaging requirements and fee responsibility." },
      { label: "PikoBuy shipping terms", href: "https://www.pikobuy.com/protocol/shipping", note: "Inspection limits, forwarded-goods handling and third-party logistics/customs risk boundaries." },
      { label: "PikoBuy home process overview", href: "https://www.pikobuy.com/home", note: "Central order management, warehouse quality inspection, repacking and worldwide delivery workflow." },
    ],
    relatedLinks: [
      { label: "PikoBuy Spreadsheet 2026", href: "/", note: "Return to the main product-discovery and research hub." },
      { label: "PikoBuy QC checklist", href: "/pikobuy-spreadsheet-qc", note: "Review category-specific evidence before accepting an arrival." },
      { label: "PikoBuy shipping guide", href: "/pikobuy-spreadsheet-shipping-guide", note: "Compare route inputs after the packing plan is known." },
      { label: "PikoBuy total cost explained", href: "/seo-articles/pikobuy-total-cost-explained", note: "Place consolidation inside the two-payment cost workflow." },
    ],
    sections: [
      {
        title: "Consolidation is a decision point, not an automatic saving",
        paragraphs: [
          "PikoBuy warehouse consolidation means turning items that reached the China warehouse from different sellers into one international parcel. PikoBuy's contact page says those items can be combined into one package, while its beginner guide places warehouse inspection before parcel submission and the international-shipping payment. That sequence gives the buyer a useful pause: check what actually arrived, decide what should travel together, choose an appropriate packing request and only then compare the routes available for the finished plan.",
          "The important word is can. Combining orders removes the need to dispatch every purchase as a separate international parcel, but the official pages do not promise that every combination will be cheaper. A consolidated parcel has its own product mix, packed weight, external dimensions and route eligibility. One bulky box, fragile item or restricted product can change the available choices. Treat consolidation as a planning tool, not as a discount that exists before the warehouse has useful evidence.",
        ],
      },
      {
        title: "1. Build an arrival list before building a parcel",
        paragraphs: [
          "Start with a simple inventory of the orders intended for the same shipment. For each item, record the seller, ordered colour and size, quantity, warehouse status, arrival date, visible condition and any unresolved question. Do not use the seller's dispatch notice as proof that the warehouse received the correct product. PikoBuy's guide says the warehouse stage includes check-in, photo confirmation and a defect check; those are the records that should move an item from expected to received.",
          "This list also prevents an early arrival from pulling the whole parcel forward. Mark each item keep, question or return. Keep means the warehouse evidence reasonably matches the order. Question means a specific photograph, measurement or support answer is still needed. Return means an after-sales request is being considered. Only keep items belong in a packing plan. Combining an unresolved product with accepted goods makes the later decision harder without creating better evidence.",
        ],
      },
      {
        title: "2. Finish warehouse QC before asking for consolidation",
        paragraphs: [
          "Review every arrival on its own merits before looking at the convenience of one parcel. Compare the warehouse photos with the ordered variant and a category-specific checklist. For clothing, check labels, colour, print placement, seams and measurements that affect fit. For footwear, check the pair, size marks, soles, heels and box condition if the box matters. The official shipping terms warn that special or professional products cannot receive professional inspection, so visible photographs should not be upgraded into claims about authenticity, internal performance or long-term durability.",
          "If the standard views do not answer a decision-changing question, the shipping terms say buyers can purchase additional detailed photographs. A useful request is narrow: a tape measurement, a straight view of a label or a close-up of visible damage. 'More photos' without a defined question may produce more images without reducing uncertainty. Consolidation should begin after the evidence is adequate for the shipping decision, not merely after every order shows an in-warehouse status.",
        ],
      },
      {
        title: "3. Protect the 120-hour return decision",
        paragraphs: [
          "PikoBuy's returns page says a return request can be submitted within five days after the order status changes to In Warehouse, counted from the next hour, and explicitly defines five days as 120 hours. Timing is only one condition. The seller must support the relevant return, the item must remain in the resalable condition required by the seller, and product-specific seals, labels, accessories or packaging may need to stay intact. PikoBuy also says it can return an item only with the seller's consent.",
          "Make the return decision before requesting removal of packaging or approving the international parcel. For a no-quality-issue return, the current policy publishes responsibility for return shipping, the seller's original shipping and an RMB 5 service fee; responsibility can differ for a wrong item or documented quality problem. The practical lesson is not that every item should be returned quickly. It is that packaging and consolidation choices should not quietly close an option you still need to evaluate.",
        ],
      },
      {
        title: "4. Do not assume an unpublished storage allowance",
        paragraphs: [
          "Waiting for several sellers can make consolidation possible, but waiting also requires a storage plan. The official public pages reviewed for this guide describe items entering and being held in the warehouse, yet they do not publish a general free-storage duration or a complete schedule of storage charges on the accessible guide, contact, shipping-estimate, returns or shipping-terms pages. That missing fact should remain missing; copying a number from an old forum post or a different agent would create a false deadline.",
          "Before ordering products with very different seller lead times, check the current account notice, order page or PikoBuy support channel for the storage rule that applies to the account and item. Record the answer and date. If the rule is not visible, ask how long the earliest arrival can remain, whether any product category has a different limit, whether charges apply after a threshold and what happens at expiry. Then set a latest acceptable arrival date for the slowest order.",
        ],
      },
      {
        title: "5. Choose what actually belongs together",
        paragraphs: [
          "A good consolidated parcel groups products that can share a sensible route and packing strategy. Soft clothing is usually a simpler planning group than clothing mixed with a delicate structured item, but the live route screen must decide what is actually eligible. Consider whether one product adds exceptional bulk, needs protection that changes the outer dimensions, carries a category restriction or raises the value of the parcel beyond the risk you are prepared to accept. Removing one awkward item can sometimes change the whole comparison.",
          "Create two plans instead of forcing a single answer. Plan A is the intended combined parcel. Plan B removes or separates the item most likely to change size, protection or route eligibility. Do not claim a saving until both plans use current, comparable inputs. The value of the exercise is identifying the product that drives the parcel decision. If both plans remain uncertain, wait for measured information or ask PikoBuy for the specific eligibility detail rather than inventing a universal rule.",
        ],
      },
      {
        title: "6. Match the packaging request to the failure mode",
        paragraphs: [
          "PikoBuy's beginner guide names minimal packaging and reinforced packaging as examples of requests at the warehouse inspection stage. Those labels describe different priorities, not a universally right choice. Minimal packaging may be worth considering when dispensable outer material adds bulk and the product itself is not dependent on a rigid retail box. Reinforcement may be more appropriate when crushing, impact or loss of shape is the main concern. Neither option should be selected by habit.",
          "Write down what may be removed, what must remain and what needs protection. A shoe buyer might decide whether the retail box has practical value; a collector may consider that same box part of the item. Sealed goods and return-sensitive products need extra caution because PikoBuy's returns policy lists packaging, seals and accessories among the conditions that can affect eligibility. Ask what a packaging request will change before approving it, especially when the return decision is still open.",
        ],
      },
      {
        title: "7. Estimate the parcel after the packing plan is credible",
        paragraphs: [
          "PikoBuy's shipping estimator asks for the destination country or region, product type, weight in kilograms, and parcel length, width and height in centimetres. Those fields explain why a pile of item prices cannot answer the shipping question. Product dimensions are not the same as outer parcel dimensions, and seller-reported weight is not necessarily the final packed weight. Run early scenarios only as budget limits, with every guessed input clearly labelled.",
          "Once the warehouse evidence and packaging plan are available, replace assumptions with the best measured figures shown in the live process and compare the routes actually offered. The beginner guide says routes differ in delivery time and billing method. That means the lowest number should be read together with the route's current restrictions, tracking information, protection terms and destination coverage. Save the route, date and inputs; an estimate is a dated observation, not a permanent tariff.",
        ],
      },
      {
        title: "8. Submit only after one final evidence review",
        paragraphs: [
          "Before parcel submission, reopen the arrival list. Every included item should have the correct colour, size and quantity; adequate QC evidence; a closed return decision; and a packaging instruction that matches its real risk. Confirm the receiving address, the parcel composition and the current eligible routes. PikoBuy's guide places parcel submission and international-shipping payment after these warehouse steps, so paying freight should be the end of the warehouse decision, not the moment when inspection begins.",
          "Remember the logistics boundary as well. PikoBuy's shipping terms say third-party providers carry international parcels and identify customs action, loss, damage and peak-period delay among cross-border risks. Consolidation reduces the number of parcels, but it can also place more items and value into one shipment. The right plan is the one whose product mix, protection, route and financial exposure you can explain—not automatically the biggest parcel the warehouse can assemble.",
        ],
      },
      {
        title: "A concise consolidation checklist",
        paragraphs: [
          "PikoBuy warehouse consolidation works best as a sequence: receive, verify, resolve, pack, measure and then submit. It is suitable when several accepted items can share a sensible route and protection strategy. It is less convincing when one item remains return-sensitive, requires incompatible handling or makes the parcel risk unacceptable. Keep official facts separate from your own packing judgment, and recheck the live account whenever an unpublished storage rule or order-specific restriction matters.",
        ],
        bullets: [
          "List every intended item and confirm its actual warehouse status.",
          "Review QC photos and request only decision-relevant detail.",
          "Resolve returns within the current 120-hour conditions where applicable.",
          "Confirm the storage rule instead of borrowing an unsupported number.",
          "Compare a combined plan with one realistic alternative.",
          "Choose packaging for bulk, protection and return-sensitive seals.",
          "Use destination, type, packed weight and dimensions in the estimator.",
          "Read the current route conditions before parcel submission and payment.",
        ],
      },
    ],
  },
];

const pageIntros: Record<Exclude<PageKey, "home">, string> = {
  spreadsheet: "A searchable research layer for source links, category context, price references and the questions that still need checking.",
  categories: "Ten direct paths into the FindSpreadsheet catalogue, each paired with a product-specific research checklist.",
  guides: "Official PikoBuy process facts translated into practical checkpoints—without promising outcomes the public sources do not support.",
  method: "How this site labels source status, separates official policy from interpretation, dates reviews and corrects changed information.",
  updates: "A dated record of source checks, policy reviews and editorial changes, so old information never masquerades as current fact.",
  "seo-articles": "Long-form, human-written research based on official public sources and practical product-review workflows.",
};

function PageHero({ page, locale }: { page: Exclude<PageKey, "home">; locale: string }) {
  const copy = getLocaleCopy(locale);
  const labels = getInterfaceLabels(locale);
  return (
    <section className="inner-hero">
      <div>
        <p>PIKOBUY SHEET / {copy.nav[page].toUpperCase()}</p>
        <h1>{copy.nav[page]}</h1>
        <span>{locale === "en" ? pageIntros[page] : copy.homeIntro}</span>
      </div>
      <aside><b>{labels.evidence}</b><p>{locale === "en" ? "Official process claims link to PikoBuy. Product links go to the exact FindSpreadsheet category or record. Unknowns stay labelled as unknowns." : copy.homeIntro}</p></aside>
    </section>
  );
}

function SourcePanel({ locale = "en" }: { locale?: string }) {
  const copy = getLocaleCopy(locale);
  const labels = getInterfaceLabels(locale);
  return (
    <aside className="source-panel">
      <p>{labels.officialSources}</p>
      <a href={officialSources.guide} target="_blank" rel="noopener noreferrer"><b>PikoBuy · {copy.nav.guides}</b><span>{locale === "en" ? "Six-step order and warehouse flow" : copy.homeIntro} ↗</span></a>
      <a href={officialSources.shipping} target="_blank" rel="noopener noreferrer"><b>PikoBuy · {copy.nav.method} 01</b><span>{locale === "en" ? "Destination, type, weight and dimensions" : copy.homeIntro} ↗</span></a>
      <a href={officialSources.returns} target="_blank" rel="noopener noreferrer"><b>PikoBuy · {copy.nav.method} 02</b><span>{locale === "en" ? "120-hour request window and conditions" : copy.homeIntro} ↗</span></a>
      <a href={officialSources.shippingPolicy} target="_blank" rel="noopener noreferrer"><b>PikoBuy · {copy.nav.method} 03</b><span>{locale === "en" ? "Inspection boundaries and logistics risks" : copy.homeIntro} ↗</span></a>
    </aside>
  );
}

function SpreadsheetPage({ locale }: { locale: string }) {
  const copy = getLocaleCopy(locale);
  const labels = getInterfaceLabels(locale);
  const isEnglish = locale === "en";
  const local = (english: string, translated = copy.homeIntro) => isEnglish ? english : translated;
  return (
    <div className="content-shell">
      <section className="content-grid">
        <article className="prose-panel">
          <p className="kicker">{labels.evidence}</p>
          <h2>{local("What a useful spreadsheet row should tell you", copy.homeTitle)}</h2>
          <p>{local("A row earns a place here when the linked destination loads, the product type and price context can be read, and the category is clear. It still does not prove stock, seller reliability, final quality or shipping cost. Those questions belong to the live order and warehouse stages.")}</p>
          <div className="criteria-grid">
            <div><b>01 · {local("Identity", copy.nav.spreadsheet)}</b><p>{local("Does the destination still match the name, category and variant shown in the row?")}</p></div>
            <div><b>02 · {local("Source price", copy.nav.method)}</b><p>{local("Is the displayed CNY amount the product price, or only the cheapest accessory or option?")}</p></div>
            <div><b>03 · QC</b><p>{local("Which visible details, measurements and labels must be checked after warehousing?")}</p></div>
            <div><b>04 · {local("Shipping context", copy.nav.guides)}</b><p>{local("Are weight and dimensions known, estimated or still unavailable?")}</p></div>
            <div><b>05 · {local("Review date", copy.nav.updates)}</b><p>{local("When did the link last load, and which facts were checked on that date?")}</p></div>
            <div><b>06 · {local("Next action", copy.browse)}</b><p>{local("Keep, check a specific unknown, or remove the row from the shortlist.")}</p></div>
          </div>
          <h2>{local("Use the live catalogue", copy.nav.spreadsheet)}</h2>
          <p>{local("Search and product discovery are handled by FindSpreadsheet. This independent site adds a decision layer around the links: it explains what to compare, what a warehouse photograph can show and where an official PikoBuy policy must be checked.")}</p>
          <a className="inline-cta" href="https://findspreadsheet.com/AllProducts/" target="_blank" rel="noopener noreferrer">{copy.browse} →</a>
        </article>
        <SourcePanel locale={locale} />
      </section>
    </div>
  );
}

function CategoriesPage({ locale }: { locale: string }) {
  const copy = getLocaleCopy(locale);
  const categories = getMainSiteCategories(locale);
  return (
    <div className="content-shell">
      <section className="wide-content">
        <div className="content-heading"><p>10 · {copy.nav.categories}</p><h2>{locale === "en" ? "Different products need different checks." : copy.homeTitle}</h2><span>{locale === "en" ? "Every card opens the matching FindSpreadsheet category, not a generic home page." : copy.homeIntro}</span></div>
        <div className="category-grid expanded">
          {categories.map((item, index) => <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer"><b>{categoryMarks[index]}</b><span><strong>{item.name}</strong><small>{locale === "en" ? ["Check size system, insole length, outsole shape, pair symmetry and packaging.", "Compare garment measurements, fabric weight, print placement and ribbing.", "Use chest and length measurements; do not rely on S/M/L alone.", "Inspect hardware, lining, sleeve length, seams and likely parcel weight.", "Check waist, rise, inseam, leg opening and whether sizing is elastic.", "Confirm circumference, crown shape, embroidery and brim symmetry.", "Review dimensions, closures, included pieces and material claims.", "Check player details, badges, print alignment and garment measurements.", "Confirm plugs, voltage, batteries, route restrictions and return limits.", "Define a product-specific checklist before judging the source page."][index] : item.note}</small></span><i>↗</i></a>)}
        </div>
        <div className="fact-callout"><b>{locale === "en" ? "Why category-first works" : copy.nav.categories}</b><p>{locale === "en" ? "When shoes are compared with shoes and jackets with jackets, missing measurements, weak photographs and unrealistic weight assumptions stand out much faster than they do in one mixed list." : copy.homeIntro}</p></div>
      </section>
    </div>
  );
}

function GuidesPage({ locale }: { locale: string }) {
  const copy = getLocaleCopy(locale);
  const labels = getInterfaceLabels(locale);
  const englishSteps = [
    ["01", "Select products", "PikoBuy’s guide names Taobao, Tmall, 1688, Weidian and Yupoo as starting sources and tells users to confirm style, colour and size."],
    ["02", "Search products", "Paste a product link or keywords into PikoBuy. A spreadsheet can help find the source, but the live PikoBuy screen controls the current options."],
    ["03", "Submit and pay", "Choose colour, size and quantity, then make the first payment. The official guide says the final price is based on the actual purchase."],
    ["04", "Warehouse inspection", "After arrival, PikoBuy says it checks in the item, takes photographs and looks for visible defects. Professional testing is not promised."],
    ["05", "Choose and pay shipping", "Select a route after reviewing the item. Route time and billing methods vary, and the estimator requires parcel-specific inputs."],
    ["06", "Wait for the parcel", "The public guide says logistics information becomes available within three days after shipment; order-specific tracking belongs in official channels."],
  ];
  const translatedTitles = [copy.browse, copy.nav.spreadsheet, copy.nav.method, copy.nav.guides, copy.nav.method, copy.nav.updates];
  const steps = locale === "en" ? englishSteps : translatedTitles.map((title, index) => [`0${index + 1}`, title, copy.homeIntro]);
  return (
    <div className="content-shell">
      <section className="content-grid">
        <article className="prose-panel">
          <p className="kicker">{labels.officialSources}</p><h2>{locale === "en" ? "The six public stages" : copy.homeTitle}</h2>
          <div className="timeline">{steps.map(([number, title, text]) => <div key={number}><span>{number}</span><section><h3>{title}</h3><p>{text}</p></section></div>)}</div>
          <h2>{locale === "en" ? "Go deeper" : copy.nav.guides}</h2>
          <div className="guide-link-grid">
            <a href={localPath(locale, "seo-articles") + "/how-to-use-a-pikobuy-spreadsheet"}><b>{locale === "en" ? "Spreadsheet workflow" : copy.nav.spreadsheet}</b><span>{locale === "en" ? "Move from a row to a defensible shortlist" : copy.homeIntro} →</span></a>
            <a href={localPath(locale, "seo-articles") + "/pikobuy-qc-shipping-return-guide"}><b>{locale === "en" ? "QC, shipping and returns" : copy.nav.method}</b><span>{locale === "en" ? "Connect the decisions after warehousing" : copy.homeIntro} →</span></a>
          </div>
        </article>
        <SourcePanel locale={locale} />
      </section>
    </div>
  );
}

function MethodPage({ locale }: { locale: string }) {
  const copy = getLocaleCopy(locale);
  const labels = getInterfaceLabels(locale);
  const isEnglish = locale === "en";
  const local = (english: string, translated = copy.homeIntro) => isEnglish ? english : translated;
  return (
    <div className="content-shell">
      <section className="content-grid">
        <article className="prose-panel" id="coverage">
          <p className="kicker">{copy.nav.method} / VERSION 2.0 · AUG 02, 2026</p>
          <h2>{local("A repeatable audit, not a vague verified badge", copy.homeTitle)}</h2>
          <p>{local("PikoBuy Sheet separates three different evidence layers: the live product record on FindsSpreadsheet, the current public process published by PikoBuy, and our own category-specific review advice. A statement is published only at the strength supported by its layer. A page that loads is live; it is not automatically in stock, seller-verified, professionally authenticated or guaranteed returnable.")}</p>
          <div className="status-list">
            <div><i>{isEnglish ? "LIVE" : labels.sourceChecked}</i><section><b>{local("Source page live", copy.nav.spreadsheet)}</b><p>{local("The exact linked product or category page loaded on the review date. This says nothing by itself about stock, seller reliability, variant availability or quality.")}</p></section></div>
            <div><i>{isEnglish ? "CHECKED" : labels.sourceChecked}</i><section><b>{local("Official fact checked", copy.nav.guides)}</b><p>{local("A process or policy statement was compared with the current linked page on pikobuy.com. The official page takes priority if wording changes later.")}</p></section></div>
            <div><i>{isEnglish ? "EST." : copy.nav.method}</i><section><b>{local("Estimate with assumptions", copy.nav.method)}</b><p>{local("A USD conversion, product weight or shipping scenario is approximate. The source amount, conversion basis and unknown inputs remain visible.")}</p></section></div>
            <div><i>{isEnglish ? "OPEN" : copy.nav.updates}</i><section><b>{local("Unknown stays unknown", copy.nav.updates)}</b><p>{local("A material detail that is not available on the current source, order screen or warehouse record is recorded as an open question—not filled with a guess.")}</p></section></div>
          </div>

          <h2>{local("The seven-field row audit", copy.nav.spreadsheet)}</h2>
          <div className="criteria-grid">
            <div><b>01 · {local("Category fit", copy.nav.categories)}</b><p>{local("Compare shoes with shoes and jackets with jackets. Each product type needs a different QC and sizing checklist.")}</p></div>
            <div><b>02 · {local("Exact destination", copy.nav.spreadsheet)}</b><p>{local("The card must open the precise FindSpreadsheet category or product record—not a generic homepage or unrelated search result.")}</p></div>
            <div><b>03 · {local("Identity match", copy.nav.method)}</b><p>{local("The product name, item type, visible options and displayed source price must still describe the same item.")}</p></div>
            <div><b>04 · QC</b><p>{local("Record which visible angles, labels, measurements, seams, hardware or packaging details matter for this category.")}</p></div>
            <div><b>05 · {local("Sizing evidence", copy.nav.guides)}</b><p>{local("Prefer measurements and size-system context over an isolated S, M, L or shoe-size label.")}</p></div>
            <div><b>06 · {local("Weight and cost", copy.nav.method)}</b><p>{local("Separate the item price from domestic shipping, optional services, packaging, international freight and import costs.")}</p></div>
            <div><b>07 · {local("Review date", copy.nav.updates)}</b><p>{local("Show when the link and policy facts were checked so older information cannot look current by accident.")}</p></div>
            <div><b>08 · {local("Decision", copy.browse)}</b><p>{local("Every row ends as Keep, Check one named unknown, or Remove. A row without a reason does not enter the shortlist.")}</p></div>
          </div>

          <h2>{local("Five-minute shortlist filter", copy.nav.guides)}</h2>
          <div className="timeline">
            <div><span>01:00</span><section><h3>{local("Choose one category", copy.nav.categories)}</h3><p>{local("Ignore unrelated rows so the comparison uses the same product questions.")}</p></section></div>
            <div><span>02:00</span><section><h3>{local("Remove weak photo evidence", copy.nav.guides)}</h3><p>{local("Keep only rows whose current page shows enough visual information to plan a category-specific QC review.")}</p></section></div>
            <div><span>03:00</span><section><h3>{local("Check measurements and options", copy.nav.method)}</h3><p>{local("Confirm the needed colour, size and useful measurements are shown or record the exact missing question.")}</p></section></div>
            <div><span>04:00</span><section><h3>{local("Open the exact source", copy.nav.spreadsheet)}</h3><p>{local("Check that the destination still matches the title, category and price context.")}</p></section></div>
            <div><span>05:00</span><section><h3>{local("Write one reason", copy.nav.updates)}</h3><p>{local("Keep the row only if you can explain in one sentence why it remains useful.")}</p></section></div>
          </div>

          <h2>{local("Source hierarchy and correction rules", labels.evidence)}</h2>
          <ol className="plain-steps">
            <li>{local("PikoBuy process, warehouse, return and shipping claims are checked only against current public pages on pikobuy.com.")}</li>
            <li>{local("Product names, images, category routes, CNY prices and public view signals come from the matching FindSpreadsheet page or feed.")}</li>
            <li>{local("Category-first browsing, photo checks, sizing comparisons and weight questions are editorial guidance, not official guarantees.")}</li>
            <li>{local("A changed or broken destination is corrected or removed; it is never redirected silently to a generic page.")}</li>
            <li>{local("A policy review is repeated when the official page changes, when a user reports a mismatch or before a dated guide is materially updated.")}</li>
          </ol>
          <div className="fact-callout"><b>{local("No invented certainty", labels.evidence)}</b><p>{local("We do not convert “page loaded” into “in stock,” a warehouse photograph into professional authentication, an estimate into a quote, popularity into quality, or the 120-hour request window into unconditional return approval.")}</p></div>
        </article>
        <SourcePanel locale={locale} />
      </section>
    </div>
  );
}

function UpdatesPage({ locale }: { locale: string }) {
  const copy = getLocaleCopy(locale);
  const labels = getInterfaceLabels(locale);
  const isEnglish = locale === "en";
  const local = (english: string, translated = copy.homeIntro) => isEnglish ? english : translated;
  return (
    <div className="content-shell">
      <section className="content-grid">
        <article className="prose-panel">
          <p className="kicker">{copy.nav.updates} / {labels.evidence}</p><h2>{local("What changed, what was checked and why it matters", copy.homeTitle)}</h2>
          <p>{local("This is an editorial change log, not a manufactured news feed. Every entry identifies the reviewed surface, the evidence used, the visible change and its practical effect. Product availability, private order status and shipment tracking are not inferred from this page.")}</p>
          <div className="criteria-grid">
            <div><b>{local("Date", copy.nav.updates)}</b><p>{local("The day the source or site behavior was actually reviewed.")}</p></div>
            <div><b>{local("Scope", copy.nav.categories)}</b><p>{local("The exact page, category route, feed or policy that changed.")}</p></div>
            <div><b>{local("Evidence", labels.evidence)}</b><p>{local("The current PikoBuy official page or exact FindSpreadsheet destination used for the check.")}</p></div>
            <div><b>{local("Impact", copy.nav.method)}</b><p>{local("Why the change affects browsing, interpretation or the next action.")}</p></div>
          </div>
          <div className="update-page-list">
            {isEnglish && <div><time>AUG 11 · 2026</time><section><h3>PikoBuy warehouse consolidation guide published</h3><p>Published a 1,619-word English guide covering arrival records, warehouse QC, the 120-hour return decision, unpublished storage limits, parcel combinations, packaging and measured shipping inputs. Official sources were rechecked on August 11, 2026.</p><a href="/seo-articles/pikobuy-warehouse-consolidation-guide">Read the article →</a></section><i>PUBLISHED</i></div>}
            {isEnglish && <div><time>AUG 09 · 2026</time><section><h3>PikoBuy total cost guide published</h3><p>Published a 1,713-word English guide that separates the first product payment from the later international-shipping payment and documents warehouse, parcel, return and destination-cost checkpoints. Official sources were rechecked on August 9, 2026.</p></section><i>PUBLISHED</i></div>}
            <div><time>AUG 02 · 2026</time><section><h3>{local("Complete interface localization", copy.language)}</h3><p>{local("The language switch now retains the current route and changes navigation, feed controls, trust links, category labels, section headings, source panels, footer copy and non-article page interfaces across all 24 language URLs.")}</p></section><i>{isEnglish ? "FIXED" : labels.sourceChecked}</i></div>
            <div><time>AUG 02 · 2026</time><section><h3>{local("Ten category destinations audited", copy.nav.categories)}</h3><p>{local("Shoes, hoodies, T-shirts, jackets, pants/shorts, headwear, accessories, jerseys, electronics and other products now use the exact category routes published by FindSpreadsheet, including the case-sensitive /Jersey/ path.")}</p></section><i>{isEnglish ? "10 / 10" : labels.sourceChecked}</i></div>
            <div><time>AUG 02 · 2026</time><section><h3>{local("Trust strip changed from labels to links", copy.nav.method)}</h3><p>{local("The five first-screen research signals now open Guides, Spreadsheet, Method, Categories and the QC/shipping/returns guide instead of behaving like dead controls.")}</p></section><i>{isEnglish ? "LINKED" : labels.sourceChecked}</i></div>
            <div><time>AUG 02 · 2026</time><section><h3>{local("Methodology expanded", copy.nav.method)}</h3><p>{local("Added a seven-field row audit, five-minute shortlist filter, evidence hierarchy, correction triggers and explicit limits on stock, authentication, estimates and return claims.")}</p></section><i>{isEnglish ? "EXPANDED" : copy.nav.method}</i></div>
            <div><time>AUG 02 · 2026</time><section><h3>{local("Official policy facts rechecked", copy.nav.guides)}</h3><p>{local("Rechecked PikoBuy's six-step beginner flow, warehouse inspection boundary, estimator inputs, five-day/120-hour return request window, seller conditions and third-party logistics risk statements.")}</p></section><i>{isEnglish ? "CHECKED" : labels.sourceChecked}</i></div>
            <div><time>JUL 31 · 2026</time><section><h3>{local("Human-written long-form guides", copy.nav["seo-articles"])}</h3><p>{local("Published two English guides of 1,555 and 1,456 words covering spreadsheet review and the connected QC, shipping and returns decisions.")}</p></section><i>{isEnglish ? "PUBLISHED" : copy.nav["seo-articles"]}</i></div>
          </div>
          <h2>{local("What triggers the next review", copy.nav.updates)}</h2>
          <ol className="plain-steps"><li>{local("A category or product destination stops loading or opens unrelated content.")}</li><li>{local("The PikoBuy beginner guide, estimator, returns page or shipping policy changes materially.")}</li><li>{local("The main-site feed changes its markup, ordering or product-route structure.")}</li><li>{local("A reader reports a reproducible translation, route or factual mismatch.")}</li><li>{local("A dated guide receives a substantial content update.")}</li></ol>
          <div className="fact-callout"><b>{local("What this log does not claim", labels.evidence)}</b><p>{local("An update marked checked means the cited public source was reviewed. It does not mean every seller, product, shipping route or private order was verified.")}</p></div>
        </article>
        <SourcePanel locale={locale} />
      </section>
    </div>
  );
}

function ArticlesIndex({ locale }: { locale: string }) {
  const copy = getLocaleCopy(locale);
  const labels = getInterfaceLabels(locale);
  const visibleArticles = articles
    .filter((article) => !article.publishedLocales || article.publishedLocales.includes(locale))
    .sort((left, right) => Date.parse(right.publishedISO ?? right.date) - Date.parse(left.publishedISO ?? left.date));
  return (
    <div className="content-shell">
      <section className="wide-content">
        <div className="content-heading"><p>{copy.nav["seo-articles"]}</p><h2>{locale === "en" ? "Useful before the next click." : copy.homeTitle}</h2><span>{locale === "en" ? "Each published guide is 1,200–1,800 words, cites primary PikoBuy pages for official facts and avoids fabricated reviews or promises." : copy.homeIntro}</span></div>
        <div className="article-grid">{visibleArticles.map((article, index) => <a key={article.slug} href={`${localPath(locale, "seo-articles")}/${article.slug}`}><span>0{index + 1} / {copy.nav.guides}</span><h3>{article.title}</h3><p>{article.deck}</p><footer><time>{article.date}</time><b>{article.readTime}</b></footer></a>)}</div>
        <div className="fact-callout"><b>{labels.evidence}</b><p>{locale === "en" ? "When the official page and an older article disagree, the current official page wins. Articles are dated, independently written and never presented as private customer testimony." : copy.homeIntro}</p></div>
      </section>
    </div>
  );
}

export function ContentPage({ page, locale = "en" }: { page: Exclude<PageKey, "home">; locale?: string }) {
  let content;
  if (page === "spreadsheet") content = <SpreadsheetPage locale={locale} />;
  else if (page === "categories") content = <CategoriesPage locale={locale} />;
  else if (page === "guides") content = <GuidesPage locale={locale} />;
  else if (page === "method") content = <MethodPage locale={locale} />;
  else if (page === "updates") content = <UpdatesPage locale={locale} />;
  else content = <ArticlesIndex locale={locale} />;
  return <main><SiteHeader locale={locale} active={page} /><PageHero page={page} locale={locale} />{content}<SiteFooter locale={locale} /></main>;
}

export function ArticlePage({ slug, locale = "en" }: { slug: string; locale?: string }) {
  const article = articles.find((item) => item.slug === slug);
  if (!article || (article.publishedLocales && !article.publishedLocales.includes(locale))) return <ContentPage page="seo-articles" locale={locale} />;
  const visibleArticles = articles.filter((item) => !item.publishedLocales || item.publishedLocales.includes(locale));
  const articleIndex = visibleArticles.findIndex((item) => item.slug === slug);
  const previousArticle = articleIndex > 0 ? visibleArticles[articleIndex - 1] : undefined;
  const nextArticle = articleIndex >= 0 && articleIndex < visibleArticles.length - 1 ? visibleArticles[articleIndex + 1] : undefined;
  const canonicalUrl = `https://pikobuysheet.es/seo-articles/${article.slug}`;
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: article.title,
      description: article.metaDescription ?? article.deck,
      url: canonicalUrl,
      mainEntityOfPage: canonicalUrl,
      inLanguage: "en",
      datePublished: article.publishedISO,
      dateModified: article.modifiedISO ?? article.publishedISO,
      author: { "@type": "Organization", name: "PikoBuy Sheet", url: "https://pikobuysheet.es/" },
      publisher: { "@type": "Organization", name: "PikoBuy Sheet", url: "https://pikobuysheet.es/" },
      keywords: [article.primaryKeyword, ...(article.supportingKeywords ?? [])].filter(Boolean).join(", "),
      citation: article.sources?.map((source) => source.href),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://pikobuysheet.es/" },
        { "@type": "ListItem", position: 2, name: "SEO Articles", item: "https://pikobuysheet.es/seo-articles" },
        { "@type": "ListItem", position: 3, name: article.title, item: canonicalUrl },
      ],
    },
  ];
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <SiteHeader locale={locale} active="seo-articles" articleSlug={slug} />
      <article className="article-page">
        <header><p>PIKOBUY SHEET / INDEPENDENT GUIDE</p><h1>{article.title}</h1><span>{article.deck}</span><div><time dateTime={article.publishedISO}>{article.date}</time><b>{article.readTime}</b>{article.lastChecked && <b>Last checked · {article.lastChecked}</b>}</div></header>
        <div className="article-layout">
          <div className="article-body">
            {article.sections.map((section) => <section key={section.title}><h2>{section.title}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}</section>)}
            {article.relatedLinks && <aside className="article-related"><h2>Continue the research</h2>{article.relatedLinks.map((link) => <a key={link.href} href={link.href}><b>{link.label}</b><span>{link.note} →</span></a>)}</aside>}
            {article.sources && <aside className="article-source-log"><h2>Official sources checked</h2><p>Platform-specific facts were last checked on {article.lastChecked}. The live official page takes priority if a policy or feature changes.</p>{article.sources.map((source) => <a key={source.href} href={source.href} target="_blank" rel="noopener noreferrer"><b>{source.label}</b><span>{source.note} ↗</span></a>)}</aside>}
            {(previousArticle || nextArticle) && <nav className="article-pagination" aria-label="Article navigation">
              {previousArticle && <a href={`/seo-articles/${previousArticle.slug}`}><small>Previous guide</small><b>{previousArticle.title}</b></a>}
              {nextArticle && <a href={`/seo-articles/${nextArticle.slug}`}><small>Next guide</small><b>{nextArticle.title}</b></a>}
            </nav>}
            <div className="article-disclosure"><b>Independent publication note</b><p>This article is informational and is not affiliated with PikoBuy. Policies, prices, availability and routes can change. Check the current official page and your live order before acting.</p></div>
          </div>
          <SourcePanel locale={locale} />
        </div>
      </article>
      <SiteFooter locale={locale} />
    </main>
  );
}
