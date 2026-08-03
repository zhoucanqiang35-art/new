import { SiteFooter, SiteHeader } from "./site-chrome";
import { getInterfaceLabels, getLocaleCopy, getMainSiteCategories, localPath, officialSources, type PageKey } from "./site-config";

type Article = {
  slug: string;
  title: string;
  deck: string;
  date: string;
  readTime: string;
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
  return (
    <div className="content-shell">
      <section className="wide-content">
        <div className="content-heading"><p>{copy.nav["seo-articles"]}</p><h2>{locale === "en" ? "Useful before the next click." : copy.homeTitle}</h2><span>{locale === "en" ? "Each published guide is 1,200–1,800 words, cites primary PikoBuy pages for official facts and avoids fabricated reviews or promises." : copy.homeIntro}</span></div>
        <div className="article-grid">{articles.map((article, index) => <a key={article.slug} href={`${localPath(locale, "seo-articles")}/${article.slug}`}><span>0{index + 1} / {copy.nav.guides}</span><h3>{article.title}</h3><p>{article.deck}</p><footer><time>{article.date}</time><b>{article.readTime}</b></footer></a>)}</div>
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
  if (!article) return <ContentPage page="seo-articles" locale={locale} />;
  return (
    <main>
      <SiteHeader locale={locale} active="seo-articles" articleSlug={slug} />
      <article className="article-page">
        <header><p>PIKOBUY SHEET / INDEPENDENT GUIDE</p><h1>{article.title}</h1><span>{article.deck}</span><div><time>{article.date}</time><b>{article.readTime}</b></div></header>
        <div className="article-layout">
          <div className="article-body">
            {article.sections.map((section) => <section key={section.title}><h2>{section.title}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}</section>)}
            <div className="article-disclosure"><b>Independent publication note</b><p>This article is informational and is not affiliated with PikoBuy. Policies, prices, availability and routes can change. Check the current official page and your live order before acting.</p></div>
          </div>
          <SourcePanel locale={locale} />
        </div>
      </article>
      <SiteFooter locale={locale} />
    </main>
  );
}
