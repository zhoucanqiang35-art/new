import fs from "node:fs";
import path from "node:path";

const projectRoot = path.resolve(
  path.dirname(new URL(import.meta.url).pathname),
  "..",
);
const publicRoot = path.join(projectRoot, "public");
const verifiedDate = "2026-08-17";
const verifiedLabel = "August 17, 2026";

const escJsonForHtml = (value) =>
  JSON.stringify(value).replaceAll("<", "\\u003c");

const sourceLink = (_href, label) => `<span>${label}</span>`;

const pageSchema = ({ pathName, name, description, section }) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://lolobuysheet.pro/#website",
      url: "https://lolobuysheet.pro/",
      name: "LoloBuy Spreadsheet",
    },
    {
      "@type": "WebPage",
      "@id": `https://lolobuysheet.pro${pathName}#webpage`,
      url: `https://lolobuysheet.pro${pathName}`,
      name,
      description,
      inLanguage: "en",
      isPartOf: { "@id": "https://lolobuysheet.pro/#website" },
      dateModified: verifiedDate,
    },
    {
      "@type": "Article",
      headline: name,
      description,
      dateModified: verifiedDate,
      articleSection: section,
      inLanguage: "en",
      mainEntityOfPage: { "@id": `https://lolobuysheet.pro${pathName}#webpage` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://lolobuysheet.pro/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name,
          item: `https://lolobuysheet.pro${pathName}`,
        },
      ],
    },
  ],
});

const shippingDescription =
  "Officially researched LoloBuy shipping guide covering parcel submission, actual and volumetric weight, route restrictions, declarations, final freight, tracking and delivery.";

const shippingBody = `<section class="page-hero article-hero"><div><nav class="breadcrumbs" aria-label="Breadcrumb"><span><a href="index.html">Home</a></span><span> / <a href="guides-shipping.html">Shipping</a></span></nav><p class="eyebrow">Verified against LoloBuy help information</p><h1>LoloBuy Shipping Guide</h1><p class="lead">A precise explanation of parcel submission, billable weight, route restrictions, declarations, final freight and delivery—without invented prices or guaranteed transit times.</p><small>✓ Official information checked ${verifiedLabel}</small><div class="page-hero-action"><a class="primary" href="https://findspreadsheet.com/" target="_blank" rel="noopener noreferrer">Browse spreadsheet <span aria-hidden="true">↗</span></a></div></div></section>
<section class="official-guide" aria-label="LoloBuy shipping guide">
  <div class="official-guide__status"><span aria-hidden="true">✓</span><div><strong>What the official process confirms</strong><p>International shipping begins only after eligible items reach the LoloBuy warehouse. You select stored items, choose from the routes currently available to that parcel, pay estimated international freight, and LoloBuy packs and reweighs the parcel before dispatch. The final charge can be lower or higher than the estimate.</p></div></div>
  <div class="official-guide__layout">
    <article class="official-guide__article">
      <p class="official-guide__intro">The safest way to use LoloBuy shipping is to treat the warehouse page as the source of truth. Route names, prices, restrictions and delivery estimates are live variables; this guide explains the rules that determine those results.</p>

      <section id="before-submission">
        <span class="official-guide__number">01 · Before submission</span>
        <h2>Finish QC and resolve returns first</h2>
        <p>Open every stored item and review its inspection result before creating a parcel. Standard inspection checks visible information such as quantity, style, colour, size, model, obvious damage and defects, but sealed products and specialist electronics have inspection limits.</p>
        <p>If an item is wrong, damaged or no longer wanted, handle the return or exchange before requesting irreversible packaging work. Once the parcel is submitted, the focus moves from seller after-sales to international logistics.</p>
        <ul>
          <li>Confirm the recipient name, phone number and full delivery address.</li>
          <li>Check whether any item is marked restricted in “My Warehouse”.</li>
          <li>Decide which items should be consolidated and which must ship separately.</li>
          <li>Keep screenshots of the order, QC photos and parcel options.</li>
        </ul>
      </section>

      <section id="two-payments">
        <span class="official-guide__number">02 · Payment structure</span>
        <h2>LoloBuy uses two separate payment stages</h2>
        <div class="official-guide__fact-grid">
          <div class="official-guide__fact"><small>Payment 1</small><strong>Product order</strong><p>The item price plus the seller’s mainland-China delivery charge to the LoloBuy warehouse. A seller price or domestic-freight change can create an order top-up.</p></div>
          <div class="official-guide__fact"><small>Payment 2</small><strong>International parcel</strong><p>An estimated international-freight deposit based on destination, selected route and estimated parcel weight, plus any applicable customs charge or selected services shown at checkout.</p></div>
        </div>
        <p>International freight is not included in the first product payment. After packing, LoloBuy records the final parcel weight and carrier charge, then refunds an overpayment or requests the shortfall according to its parcel-payment rules.</p>
      </section>

      <section id="billable-weight">
        <span class="official-guide__number">03 · Billable weight</span>
        <h2>The higher of actual and volumetric weight can determine the price</h2>
        <p>LoloBuy defines estimated weight as the stored goods’ recorded weight plus anticipated outer packaging. Real weight is measured after the selected items are packed. When a route applies dimensional pricing, the chargeable weight is the greater of real weight and volumetric weight.</p>
        <div class="official-guide__formula"><strong>Formulas published in LoloBuy’s help centre</strong><code>Preferential / dedicated / TOLL / SF: L × W × H (cm) ÷ 6000<br>DHL: L × W × H (cm) ÷ 5000</code></div>
        <p>The same official article says EMS, Air Packet and SAL generally do not use volumetric weight, but oversized parcels may still be assessed by volume. Therefore, never apply one divisor to every route—read the billing rule beside the route shown in your account.</p>
        <p>A rehearsal or pre-packing service can provide a packed-weight and dimension estimate before a real parcel is submitted. It is an estimate, not a shipment.</p>
      </section>

      <section id="packaging">
        <span class="official-guide__number">04 · Packaging</span>
        <h2>Packaging removal is free, but it is not reversible</h2>
        <p>LoloBuy’s “Package Removal” service can remove excess outer packaging, product boxes, bags or shoe boxes to reduce weight and volume. Necessary protective materials for fragile items may still be retained, and final handling depends on the item’s condition.</p>
        <div class="official-guide__warning"><strong>Official July 14, 2026 notice</strong><p>Items whose original packaging has been removed cannot be returned or exchanged. Review QC and settle all seller issues before selecting package or shoe-box removal. If one shoe box must be kept, leave the relevant LO item number in the parcel remark or contact official support.</p></div>
      </section>

      <section id="route-selection">
        <span class="official-guide__number">05 · Route selection</span>
        <h2>Choose only from the live routes available to the parcel</h2>
        <p>There is no universally “best” LoloBuy route. Eligibility depends on destination, contents, restricted-item tags, weight, dimensions and the logistics provider’s current rules. Compare the live route cards on these points:</p>
        <ul>
          <li>actual-versus-volumetric billing method and first/continued-weight units;</li>
          <li>maximum weight, side-length and product-category restrictions;</li>
          <li>estimated delivery time, tracking coverage and last-mile carrier;</li>
          <li>tax handling, return/redelivery terms and compensation limits.</li>
        </ul>
        <p>Restricted goods can narrow the list for the entire consolidated parcel. If one item prevents a suitable route from appearing, separate it or ask official support whether a compliant route exists; do not misdescribe the contents.</p>
      </section>

      <section id="declaration">
        <span class="official-guide__number">06 · Declaration and customs</span>
        <h2>Declare the contents accurately</h2>
        <p>LoloBuy’s delivery agreement says the parcel value entered by the user is used for customs declaration and may also be used as the basis for a compensation claim. Product name, quantity, unit price and other declaration details must match the parcel. The destination country can also require recipient identification or a tax number.</p>
        <p>Tax, inspection, return or confiscation cannot be ruled out. LoloBuy explicitly warns that heavier or higher-value parcels can attract more customs attention and that the recipient must cooperate with clearance and pay assessed duties when required.</p>
        <div class="official-guide__warning"><strong>No declaration value is “customs safe”</strong><p>Do not copy a fixed dollar-per-kilogram formula from a blog or spreadsheet. Customs thresholds and route-specific tax methods differ. Use the live declaration fields and the destination country’s current requirements.</p></div>
      </section>

      <section id="final-charge">
        <span class="official-guide__number">07 · Packing and final charge</span>
        <h2>The estimate is reconciled after packing</h2>
        <p>After parcel payment, the warehouse consolidates the chosen items, performs the selected packaging services, weighs the finished parcel and hands it to the logistics provider. The official help centre says the real weight and any returned balance can appear in parcel details within three working days after dispatch.</p>
        <p>If the carrier’s charge exceeds the estimate, LoloBuy may ship, hold or cancel the parcel depending on how many continued-weight units are missing and the route type. Watch account messages and pay any valid parcel top-up promptly.</p>
      </section>

      <section id="tracking-delivery">
        <span class="official-guide__number">08 · Tracking and delivery</span>
        <h2>Delivery estimates are references, not guarantees</h2>
        <p>Tracking becomes available in “My LoloBuy → Parcels” after dispatch. LoloBuy describes the normal chain as warehouse packing, carrier collection, security screening, flight arrangement, international transport, customs clearance, local courier and delivery. Weather, customs and carrier operations can delay any stage.</p>
        <p>Track the parcel closely because some routes do not offer overseas redelivery or return service. At delivery, inspect the outer packaging, seals and apparent weight before signing. If the parcel is visibly damaged, note it with the courier or refuse it where local procedure permits.</p>
        <p>LoloBuy’s receiving notice asks for the original packaging and evidence within two working days for damaged parcels and says customer service should be contacted within 72 hours. Use the stricter two-working-day deadline and keep a continuous unboxing video.</p>
      </section>

      <section id="final-check">
        <span class="official-guide__number">09 · Final checklist</span>
        <h2>Before you pay international freight</h2>
        <ul class="official-guide__checklist">
          <li>Every QC result reviewed</li>
          <li>Returns and exchanges completed</li>
          <li>Recipient details rechecked</li>
          <li>Restricted-item tags understood</li>
          <li>Actual/volume billing rule read</li>
          <li>Packaging choice confirmed</li>
          <li>Declaration details accurate</li>
          <li>Tracking and claim records saved</li>
        </ul>
      </section>

      <section class="official-guide__sources" id="official-sources">
        <span class="official-guide__number">Official sources</span>
        <h2>Information checked on ${verifiedLabel}</h2>
        <ul>
          <li>${sourceLink("https://www.lolobuy.com/helpCenter/1242296499766165", "How to purchase and submit a parcel")}</li>
          <li>${sourceLink("https://www.lolobuy.com/helpCenter/1242300798075086", "Estimated, real and volumetric weight")}</li>
          <li>${sourceLink("https://www.lolobuy.com/helpCenter/1242300801155283", "Parcel supplemental-payment rules")}</li>
          <li>${sourceLink("https://www.lolobuy.com/helpCenter/1242306518844916", "Package-removal service")}</li>
          <li>${sourceLink("https://www.lolobuy.com/noticeDetail?id=1242816890732823", "July 14 packaging and shoe-box notice")}</li>
          <li>${sourceLink("https://www.lolobuy.com/helpCenter/1242300933013835", "Customs risks and declarations")}</li>
          <li>${sourceLink("https://www.lolobuy.com/helpCenter/1242300896182556", "Receiving and damage-reporting notice")}</li>
        </ul>
      </section>
    </article>
    <aside class="official-guide__toc" aria-label="On this page">
      <strong>On this page</strong>
      <a href="/guides-shipping#before-submission">Before submission</a>
      <a href="/guides-shipping#two-payments">Two payments</a>
      <a href="/guides-shipping#billable-weight">Billable weight</a>
      <a href="/guides-shipping#packaging">Packaging removal</a>
      <a href="/guides-shipping#route-selection">Route selection</a>
      <a href="/guides-shipping#declaration">Declaration</a>
      <a href="/guides-shipping#final-charge">Final charge</a>
      <a href="/guides-shipping#tracking-delivery">Tracking and delivery</a>
      <a href="/guides-shipping#final-check">Final checklist</a>
      <small>Independent summary. LoloBuy controls live routes, prices, restrictions and claims.</small>
    </aside>
  </div>
</section>`;

const beginnerDescription =
  "Officially researched beginner guide to buying through LoloBuy: product link, first payment, warehouse QC, consolidation, second payment, shipping and delivery.";

const beginnerBody = `<section class="page-hero article-hero"><div><nav class="breadcrumbs" aria-label="Breadcrumb"><span><a href="index.html">Home</a></span><span> / <a href="guides-beginner-guide.html">Beginner guide</a></span></nav><p class="eyebrow">Official purchase flow explained</p><h1>How to Buy Through LoloBuy</h1><p class="lead">The complete two-payment process—from a Chinese marketplace link to warehouse QC, parcel submission, international shipping and delivery.</p><small>✓ Official information checked ${verifiedLabel}</small><div class="page-hero-action"><a class="primary" href="https://findspreadsheet.com/" target="_blank" rel="noopener noreferrer">Browse spreadsheet <span aria-hidden="true">↗</span></a></div></div></section>
<section class="official-guide" aria-label="LoloBuy beginner guide">
  <div class="official-guide__status"><span aria-hidden="true">✓</span><div><strong>The short answer</strong><p>LoloBuy does not send a marketplace item directly to you after one payment. First, LoloBuy purchases the item and receives it at its China warehouse. After you review QC and choose stored items, you create a parcel and pay international freight separately.</p></div></div>
  <div class="official-guide__layout">
    <article class="official-guide__article">
      <p class="official-guide__intro">LoloBuy’s official tutorial describes nine stages. The important decision points are the original listing, the first payment, warehouse inspection, packaging choices and the second international-shipping payment.</p>

      <section id="find-product">
        <span class="official-guide__number">01 · Select an item</span>
        <h2>Start with the original product listing</h2>
        <p>LoloBuy’s help centre says users can paste links from Taobao, Tmall, JD.com, Yupoo or Weidian into its search bar. Product-name search can also return marketplace recommendations. A supported page may be imported automatically; otherwise LoloBuy opens a manual shopping-agent form.</p>
        <p>Before submitting, verify the seller, live product page, colour, size, quantity, price, domestic freight and seller return terms. A spreadsheet is a discovery shortcut, not a replacement for the original listing.</p>
      </section>

      <section id="submit-order">
        <span class="official-guide__number">02 · Submit the order</span>
        <h2>Review every imported option</h2>
        <p>When LoloBuy captures the listing, select the required variant and quantity, then use “Add to Cart” or “Buy Now”. If the product cannot be parsed, complete the manual order fields and add clear notes. LoloBuy’s official guide also recommends entering the destination country at this stage so relevant risks can be shown.</p>
        <div class="official-guide__warning"><strong>After seller dispatch, modifications become difficult</strong><p>LoloBuy’s FAQ says it can try to negotiate a change before the seller ships. After seller dispatch, the normal route is to wait for warehouse arrival, request a return, pay any resulting return freight and submit a new order.</p></div>
      </section>

      <section id="first-payment">
        <span class="official-guide__number">03 · First payment</span>
        <h2>Pay for the item and delivery within China</h2>
        <div class="official-guide__fact-grid">
          <div class="official-guide__fact"><small>Included now</small><strong>Product + domestic freight</strong><p>The first payment covers the seller’s item price and the Chinese domestic delivery fee shown for transport to LoloBuy’s warehouse.</p></div>
          <div class="official-guide__fact"><small>Not included yet</small><strong>International freight</strong><p>The overseas parcel cost is calculated later, after the item is stored and you choose a route and packaging options.</p></div>
        </div>
        <p>A seller price change or an initially missing domestic-delivery charge can generate an order top-up. Check account messages rather than assuming the first checkout total can never change.</p>
      </section>

      <section id="purchase-arrival">
        <span class="official-guide__number">04 · Purchase and arrival</span>
        <h2>LoloBuy purchases from the seller</h2>
        <p>After payment, a LoloBuy shopping agent contacts the seller and places the order. Use “Order Enquiry” for item-specific questions and watch messages in case the agent needs a decision or additional information.</p>
        <p>The official timing article says orders submitted between 09:00 and 18:00 Beijing time are normally handled within 12 hours, while later orders are processed by 14:00 the following day; abnormal orders and unreachable sellers are exceptions. It also says many Taobao sellers dispatch in 3–7 days, but actual seller timing controls.</p>
      </section>

      <section id="warehouse-qc">
        <span class="official-guide__number">05 · Warehouse QC</span>
        <h2>Review the inspection—not just the arrival status</h2>
        <p>When the item reaches LoloBuy, it appears in “My Warehouse”. Standard quality inspection is a free service and normally checks quantity, style, colour, size, model and obvious visible damage or defects, with 3–6 standard photos.</p>
        <p>This is not an authenticity, function or fit guarantee. Sealed products are generally not opened, and professional electronics are not authenticated or function-tested under the standard inspection. If the photos do not show an important detail, request the appropriate additional service before accepting the item.</p>
      </section>

      <section id="storage-consolidation">
        <span class="official-guide__number">06 · Storage and consolidation</span>
        <h2>Wait for other items—or submit the parcel</h2>
        <p>You can send an eligible stored item immediately or wait for products from other sellers and consolidate them. Consolidation can avoid repeated first-weight charges, but restricted products, route limits or oversized items may need separate parcels.</p>
        <div class="official-guide__warning"><strong>Current official rule: 90 days free storage</strong><p>LoloBuy’s current official homepage states 90 days of free storage after warehouse arrival. Treat 90 days as the current published rule and always follow the item-specific countdown in “My Warehouse”.</p></div>
      </section>

      <section id="submit-parcel">
        <span class="official-guide__number">07 · Submit a parcel</span>
        <h2>Select stored items, address, route and packaging</h2>
        <p>From “My Warehouse”, choose the items to ship, add the overseas address and select from the logistics routes LoloBuy currently makes available. Route eligibility depends on destination, item type, restricted-item tags, weight and dimensions.</p>
        <p>Optional handling can include package removal, reinforcement and insurance where shown. Package or shoe-box removal may reduce billable volume, but LoloBuy’s July 14, 2026 notice says items cannot be returned or exchanged after their original packaging is removed.</p>
      </section>

      <section id="second-payment">
        <span class="official-guide__number">08 · Second payment</span>
        <h2>Pay the international-freight estimate</h2>
        <p>The international deposit is based on estimated weight, route and destination. After packing, the shipping provider confirms parcel dimensions and weight. The higher of actual and volumetric weight may be used for routes with dimensional billing.</p>
        <p>LoloBuy then reconciles the estimate against the final freight: an overpayment is returned to the account, while a deficiency creates a supplemental payment under the parcel rules.</p>
      </section>

      <section id="track-receive">
        <span class="official-guide__number">09 · Track and receive</span>
        <h2>Follow the parcel until delivery</h2>
        <p>After dispatch, tracking is shown under “My LoloBuy → Parcels”. The route’s delivery estimate is a reference; security screening, flight availability, customs clearance and last-mile delivery can all cause delays.</p>
        <p>When the parcel arrives, inspect the outer packaging and seals before signing, keep the packaging, and record a continuous unboxing video. If the parcel is damaged or incomplete, contact official support immediately; LoloBuy’s receiving notice sets a strict evidence window.</p>
      </section>

      <section id="beginner-checklist">
        <span class="official-guide__number">Final review</span>
        <h2>A beginner’s decision checklist</h2>
        <ul class="official-guide__checklist">
          <li>Original listing still active</li>
          <li>Variant and quantity correct</li>
          <li>Domestic freight understood</li>
          <li>QC photos checked in full</li>
          <li>Return deadline not missed</li>
          <li>Storage countdown checked</li>
          <li>Route restrictions read</li>
          <li>International freight budgeted</li>
        </ul>
      </section>

      <section class="official-guide__sources" id="beginner-sources">
        <span class="official-guide__number">Official sources</span>
        <h2>Information checked on ${verifiedLabel}</h2>
        <ul>
          <li>${sourceLink("https://www.lolobuy.com/helpCenter/1242296499766165", "Official purchase and parcel-submission tutorial")}</li>
          <li>${sourceLink("https://www.lolobuy.com/helpCenter/1242296835769402", "Two payments and shopping-agent risks")}</li>
          <li>${sourceLink("https://www.lolobuy.com/helpCenter/1242296943576214", "Processing and domestic-delivery timing")}</li>
          <li>${sourceLink("https://www.lolobuy.com/helpCenter/1242300728672386", "Standard inspection scope and limits")}</li>
          <li>${sourceLink("https://www.lolobuy.com/helpCenter/1242300757049499", "Published free-storage policy")}</li>
          <li>${sourceLink("https://www.lolobuy.com/noticeDetail?id=1242816890732823", "Packaging-removal notice")}</li>
        </ul>
      </section>
    </article>
    <aside class="official-guide__toc" aria-label="On this page">
      <strong>On this page</strong>
      <a href="/guides-beginner-guide#find-product">Find a product</a>
      <a href="/guides-beginner-guide#submit-order">Submit the order</a>
      <a href="/guides-beginner-guide#first-payment">First payment</a>
      <a href="/guides-beginner-guide#purchase-arrival">Purchase and arrival</a>
      <a href="/guides-beginner-guide#warehouse-qc">Warehouse QC</a>
      <a href="/guides-beginner-guide#storage-consolidation">Storage</a>
      <a href="/guides-beginner-guide#submit-parcel">Submit a parcel</a>
      <a href="/guides-beginner-guide#second-payment">Second payment</a>
      <a href="/guides-beginner-guide#track-receive">Track and receive</a>
      <small>Independent explanation based on LoloBuy’s current published help information.</small>
    </aside>
  </div>
</section>`;

function replaceMeta(html, replacements) {
  let result = html;
  result = result.replace(/<title>[\s\S]*?<\/title>/, `<title>${replacements.title}</title>`);
  result = result.replace(
    /<meta name="description" content="[^"]*"\/>/,
    `<meta name="description" content="${replacements.description}"/>`,
  );
  result = result.replace(
    /<meta property="og:title" content="[^"]*"\/>/,
    `<meta property="og:title" content="${replacements.title}"/>`,
  );
  result = result.replace(
    /<meta property="og:description" content="[^"]*"\/>/,
    `<meta property="og:description" content="${replacements.description}"/>`,
  );
  result = result.replace(
    /<meta name="twitter:title" content="[^"]*"\/>/,
    `<meta name="twitter:title" content="${replacements.title}"/>`,
  );
  result = result.replace(
    /<meta name="twitter:description" content="[^"]*"\/>/,
    `<meta name="twitter:description" content="${replacements.description}"/>`,
  );
  return result;
}

function updatePage({
  files,
  title,
  description,
  body,
  schema,
}) {
  for (const relativeFile of files) {
    const filePath = path.join(publicRoot, relativeFile);
    let html = fs.readFileSync(filePath, "utf8");

    html = replaceMeta(html, { title, description });
    if (!html.includes("/assets/official-guides.css")) {
      html = html.replace(
        "</head>",
        '<link rel="stylesheet" href="/assets/official-guides.css"></head>',
      );
    }
    html = html.replace(
      /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
      `<script type="application/ld+json">${escJsonForHtml(schema)}</script>`,
    );
    html = html.replace(
      /<section class="page-hero[\s\S]*?<footer>/,
      `${body}<footer>`,
    );

    fs.writeFileSync(filePath, html);
  }
}

updatePage({
  files: ["guides-shipping.html", "guides-shipping/index.html"],
  title: "LoloBuy Shipping Guide: Weight, Routes & Customs",
  description: shippingDescription,
  body: shippingBody,
  schema: pageSchema({
    pathName: "/guides-shipping/",
    name: "LoloBuy Shipping Guide: Weight, Routes & Customs",
    description: shippingDescription,
    section: "International shipping",
  }),
});

updatePage({
  files: [
    "guides-beginner-guide.html",
    "guides-beginner-guide/index.html",
  ],
  title: "How to Buy Through LoloBuy: Official Process Explained",
  description: beginnerDescription,
  body: beginnerBody,
  schema: pageSchema({
    pathName: "/guides-beginner-guide/",
    name: "How to Buy Through LoloBuy: Official Process Explained",
    description: beginnerDescription,
    section: "Beginner guide",
  }),
});

console.log("Updated shipping and beginner guides from verified official sources.");
