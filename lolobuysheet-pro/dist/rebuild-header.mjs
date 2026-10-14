import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const basePages = [
  ["index.html", "home"],
  ["products-sneakers.html", "products"],
  ["guides-beginner-guide.html", "guides"],
  ["faq.html", ""]
];

const navItems = [
  ["home", "index.html", "Home"],
  ["products", "products.html", "Products"],
  ["qc", "guides-qc-photos.html", "QC Guide"],
  ["shipping", "guides-shipping.html", "Shipping"],
  ["guides", "guides-beginner-guide.html", "Guides"],
  ["faq", "faq.html", "FAQ"]
];

function navLinks(active) {
  return navItems
    .map(([key, href, label]) => `<a href="${href}"${key === active ? ' aria-current="page"' : ""}>${label}</a>`)
    .join("");
}

function languageSwitcher(markup) {
  if (markup.startsWith("<label")) {
    return markup.replace(/<option value="[^"]+"([^>]*)>([A-Z]{2}) ·/g, (match, attributes, code) => {
      if (code === "EN") return match;
      return `<option value="/${code.toLowerCase()}"${attributes}>${code} ·`;
    });
  }

  const options = [...markup.matchAll(/<a\s+([^>]+)>([\s\S]*?)<\/a>/g)].map((match) => {
    const attributes = match[1];
    const content = match[2];
    const originalHref = attributes.match(/href="([^"]+)"/)?.[1] || "index.html";
    const code = content.match(/<b>([^<]+)<\/b>/)?.[1] || "";
    const name = content.match(/<span>([^<]+)<\/span>/)?.[1] || code;
    const selected = /class="[^"]*current/.test(attributes) ? " selected" : "";
    const href = code === "EN" ? originalHref : `/${code.toLowerCase()}`;
    return `<option value="${href}"${selected}>${code} · ${name}</option>`;
  }).join("");

  return `<label class="language-switcher" translate="no"><span class="language-symbol" aria-hidden="true">◎</span><span class="sr-only">Choose language</span><select aria-label="Choose language" data-language-switcher>${options}</select></label>`;
}

function setCurrentEnglishHref(html, href) {
  return html.replace(/(<option value=")[^"]+(" selected>EN · English<\/option>)/, `$1${href}$2`);
}

function secureFindSpreadsheetLinks(html) {
  return html.replace(
    /<a\b[^>]*\bhref="https:\/\/findspreadsheet\.com[^"]*"[^>]*>/g,
    (anchor) => {
      const withoutTargetOrRel = anchor
        .replace(/\s+target="[^"]*"/g, "")
        .replace(/\s+rel="[^"]*"/g, "");
      return withoutTargetOrRel.replace(
        />$/,
        ' target="_blank" rel="noopener noreferrer">',
      );
    },
  );
}

function cleanStatic(html) {
  html = html.replaceAll("hrefLang=", "hreflang=");
  html = html.replace(/<script id="_R_">[\s\S]*?<\/script>/, "");
  html = html.replace(/<script type="module" crossorigin src="\/assets\/local-preview-navigation-[^"]+\.js"><\/script>/, "");
  const mainEnd = html.indexOf("</main>");
  if (mainEnd !== -1) html = `${html.slice(0, mainEnd + 7)}</body></html>`;
  return secureFindSpreadsheetLinks(html);
}

function rebuildHeader(html, active) {
  const oldHeader = html.match(/<header class="site-header">[\s\S]*?<\/header>/)?.[0];
  if (!oldHeader) throw new Error("Header not found");
  const brand = oldHeader.match(/<a class="brand header-brand"[\s\S]*?<\/a>/)?.[0];
  const languageMarkup = oldHeader.match(/<details class="language-menu"[\s\S]*?<\/details>|<label class="language-switcher"[\s\S]*?<\/label>/)?.[0];
  if (!brand || !languageMarkup) throw new Error("Header components not found");
  const language = languageSwitcher(languageMarkup);

  const header = `<header class="site-header">${brand}<nav class="primary-nav" aria-label="Main navigation">${navLinks(active)}</nav><details class="header-mobile-menu"><summary aria-label="Open navigation"><span></span><span></span><span></span></summary><div>${navLinks(active)}</div></details>${language}</header>`;
  html = html.replace(oldHeader, header);

  if (!html.includes("/assets/header-reference.css")) {
    html = html.replace("</head>", '<link rel="stylesheet" href="/assets/header-reference.css"><script defer src="/assets/header-navigation.js"></script></head>');
  }
  return html;
}

function writePage(file, html, active) {
  fs.writeFileSync(path.join(root, file), rebuildHeader(cleanStatic(html), active));
}

for (const [file, active] of basePages) {
  const html = fs.readFileSync(path.join(root, file), "utf8");
  writePage(file, html, active);
}

const productCategories = [
  ["01", "Shoes", "Browse organized footwear finds, including sneakers, casual shoes and seasonal styles. Compare the displayed USD reference price and available listing information before ordering.", "https://findspreadsheet.com/shoes/"],
  ["02", "Hoodies & Sweaters", "Explore hoodies, knitwear and sweatshirts grouped for easier comparison. Check sizing, fabric claims, color options and warehouse photos before international shipping.", "https://findspreadsheet.com/hoodies-sweaters/"],
  ["03", "T-Shirts", "Find organized T-shirt listings from Chinese marketplaces. Confirm size charts, print details, live seller prices and return conditions before purchase.", "https://findspreadsheet.com/t-shirts/"],
  ["04", "Jackets", "Compare outerwear and jacket finds in one category. Review measurements, material information, packed weight and shipping estimates carefully.", "https://findspreadsheet.com/jackets/"],
  ["05", "Pants & Shorts", "Browse pants, jeans and shorts with organized source links and USD reference prices. Use seller measurements rather than relying only on a familiar size label.", "https://findspreadsheet.com/pants-shorts/"],
  ["06", "Headwear", "Explore caps, hats and other headwear. Check circumference, shape, color and packaging requirements before adding an item to a consolidated parcel.", "https://findspreadsheet.com/headwear/"],
  ["07", "Accessories", "Browse bags, belts, jewelry and small accessories. Product restrictions vary by material and destination, so verify live route rules before checkout.", "https://findspreadsheet.com/accessories/"],
  ["08", "Jerseys", "Find football, basketball and other sports jersey listings. Compare sizing, customization options and visible warehouse details before accepting delivery.", "https://findspreadsheet.com/Jersey/"],
  ["09", "Electronics", "Browse electronics and small gadgets while checking voltage, plug type, battery restrictions and route eligibility before purchase.", "https://findspreadsheet.com/electronics/"],
  ["10", "Other Finds", "Explore miscellaneous home, lifestyle and novelty finds that do not fit the main categories. Confirm dimensions and packed weight for bulky products.", "https://findspreadsheet.com/other-stuff/"]
];

{
  let html = fs.readFileSync(path.join(root, "products-sneakers.html"), "utf8");
  const description = "Explore ten organized LoloBuy spreadsheet product categories with practical buying reminders and direct links to the matching FindSpreadsheet collections.";
  html = html.replace(/<title>[\s\S]*?<\/title>/, "<title>LoloBuy Product Categories | LoloBuy Spreadsheet</title>");
  html = html.replace(/<meta name="description" content="[^"]*"\/>/, `<meta name="description" content="${description}"/>`);
  html = html.replace(/<meta property="og:title" content="[^"]*"\/>/, '<meta property="og:title" content="LoloBuy Product Categories | LoloBuy Spreadsheet"/>');
  html = html.replace(/<meta property="og:description" content="[^"]*"\/>/, `<meta property="og:description" content="${description}"/>`);
  html = html.replace(/<meta property="og:url" content="[^"]*"\/>/, '<meta property="og:url" content="https://lolobuysheet.pro/products"/>');
  html = html.replace(/<link rel="canonical" href="[^"]*"\/>/, '<link rel="canonical" href="https://lolobuysheet.pro/products"/>');
  html = html.replace(/<link rel="alternate"[^>]+\/>/g, "");

  const cards = productCategories.map(([number, name, copy, href]) => `<a href="${href}" aria-label="Browse ${name} on FindSpreadsheet"><span class="directory-card-top"><i>${number}</i><em aria-hidden="true">↗</em></span><small>LoloBuy category</small><h2>${name}</h2><p>${copy}</p><b>Explore category <span aria-hidden="true">→</span></b></a>`).join("");
  const content = `<section class="products-directory"><header><nav class="breadcrumbs" aria-label="Breadcrumb"><span><a href="index.html">Home</a></span><span> / Products</span></nav><p class="eyebrow">LoloBuy category directory</p><h1>Browse product categories</h1><p class="lead">${description}</p><div class="directory-summary"><span><strong>10</strong> organized categories</span><span><strong>USD</strong> reference pricing</span><span><strong>Live</strong> destination collections</span></div></header><div class="products-directory-grid">${cards}</div><a class="directory-back" href="index.html">← Back to homepage</a></section>`;
  html = html.replace(/<section class="page-hero[\s\S]*?<\/section>\s*<section class="catalog">[\s\S]*?<\/section>/, content);
  html = setCurrentEnglishHref(rebuildHeader(html, "products"), "products.html");
  fs.writeFileSync(path.join(root, "products.html"), secureFindSpreadsheetLinks(html));
}

const guideTemplate = fs.readFileSync(path.join(root, "guides-beginner-guide.html"), "utf8");

const guidePages = [
  {
    file: "guides-qc-photos.html",
    active: "qc",
    title: "How to Review LoloBuy QC Photos Before You Ship",
    description: "A practical, evidence-based guide to reading LoloBuy warehouse QC photos, spotting visible order problems and deciding what to do before parcel submission.",
    eyebrow: "Practical warehouse QC guide",
    breadcrumb: "QC Guide",
    readTime: "8 minute read",
    body: `<article class="qc-article">
      <div class="qc-layout">
        <div class="qc-content">
          <section class="qc-summary" aria-labelledby="qc-short-answer">
            <p class="eyebrow">The short answer</p>
            <h2 id="qc-short-answer">Treat QC photos as a decision point—not a guarantee.</h2>
            <p>When an item reaches the warehouse, slow down and compare what you can actually see with the product listing and your order record. LoloBuy's standard inspection is designed to verify visible details such as quantity, style, color, size and model, while also looking for obvious damage or defects. It is useful evidence, but it cannot prove authenticity, hidden construction, material quality or long-term durability.</p>
          </section>

          <section id="official-scope">
            <span class="qc-number">01 · Understand the service</span>
            <h2>What LoloBuy says its standard inspection covers</h2>
            <p>According to LoloBuy's current help centre, the standard warehouse inspection checks restricted-item status and visible product information. When standard inspection is selected, LoloBuy says it normally supplies three to six inspection photos, repackages the item and places it in warehouse storage.</p>
            <div class="qc-fact-grid">
              <article><strong>Usually checked</strong><p>Quantity, style, color, size, model, obvious damage and visible defects.</p></article>
              <article><strong>Important limitation</strong><p>Sealed goods and many products with security tape or tags are not opened; inspection may be limited to the outer packaging.</p></article>
              <article><strong>Not an authentication service</strong><p>For electronics, digital products and related accessories, authenticity, function and quality are outside the standard inspection scope.</p></article>
              <article><strong>Photos matter</strong><p>If a listing lacks usable product information, the warehouse may only be able to document visible damage, stains or defects.</p></article>
            </div>
            <p class="qc-source">Official references reviewed: Standard inspection service and Scope of inspection.</p>
          </section>

          <section id="review-order">
            <span class="qc-number">02 · Review in the right order</span>
            <h2>A human way to review the photos</h2>
            <ol class="qc-steps">
              <li><b>Start with identity.</b><p>Confirm the number of items, selected color, size and visible model details. Compare them with both the original listing and the order record—not memory alone.</p></li>
              <li><b>Look at the whole item.</b><p>Open every image at full size. Check the front, back and sides before zooming in. A close-up can look acceptable while the overall shape, placement or proportion is wrong.</p></li>
              <li><b>Inspect the areas that are difficult to fix.</b><p>Look for stains, scratches, tears, deformation, missing parts, damaged hardware and major differences in prints, stitching or logo placement.</p></li>
              <li><b>Ask whether the evidence is enough.</b><p>If an important area is hidden, blurred or absent, do not guess. Use the order page or customer support to clarify the issue before accepting the item or creating a parcel.</p></li>
            </ol>
          </section>

          <section id="red-flags">
            <span class="qc-number">03 · Know when to pause</span>
            <h2>Red flags that deserve another look</h2>
            <ul class="qc-checklist">
              <li>Wrong size, color, model or quantity</li>
              <li>Visible stains, scratches, holes, tears or deformation</li>
              <li>Missing accessories, detachable parts or seller-promised gifts</li>
              <li>Large differences in print, logo, stitching or hardware placement</li>
              <li>Damaged outer packaging on an item that cannot be opened</li>
              <li>Photos that do not show the area needed to make a decision</li>
            </ul>
            <div class="qc-note"><strong>Be precise when reporting a problem.</strong><p>Describe the exact image and location: for example, “photo 3, right sleeve cuff, dark stain.” A clear description is easier for warehouse staff or support to verify than “the item looks wrong.”</p></div>
          </section>

          <section id="packaging">
            <span class="qc-number">04 · Packaging comes after QC</span>
            <h2>Resolve problems before removing boxes or packaging</h2>
            <p>LoloBuy's July 14, 2026 value-added-services notice says packaging removal can reduce parcel size and shipping weight. It also warns that once original packaging or shoe boxes are removed, the affected item cannot be returned or exchanged. Fragile products may retain necessary protection, and users who want to keep a particular shoe box are told to leave a remark or contact support with the item number beginning with “LO”.</p>
            <div class="qc-sequence" aria-label="Recommended decision order"><span>Inspect photos</span><i>→</i><span>Resolve any issue</span><i>→</i><span>Choose packaging</span><i>→</i><span>Submit parcel</span></div>
            <p class="qc-source">Official reference reviewed: LoloBuy value-added services notice.</p>
          </section>

          <section id="limits">
            <span class="qc-number">05 · Keep the limits in mind</span>
            <h2>What QC photos cannot tell you</h2>
            <p>Even clear photos cannot confirm how an item feels, whether the material matches a marketing claim, how it will fit your body, whether an electronic product works correctly, or how it will perform after repeated use. They also do not replace current route, customs or destination restrictions.</p>
            <p>Use the photos for the decision they support: whether the visible item appears consistent with the order and whether an obvious problem should be raised before shipment.</p>
          </section>

          <section id="final-check" class="qc-final-check">
            <p class="eyebrow">Before you click submit</p>
            <h2>One-minute QC checklist</h2>
            <div><label><input type="checkbox"/> Quantity, color, size and model match</label><label><input type="checkbox"/> Every photo was opened at full size</label><label><input type="checkbox"/> Visible surfaces and hardware were checked</label><label><input type="checkbox"/> Missing or unclear evidence was questioned</label><label><input type="checkbox"/> Return or exchange concerns were resolved</label><label><input type="checkbox"/> Packaging choice was made after QC</label></div>
          </section>
        </div>

        <aside class="qc-sidebar" aria-label="Article contents">
          <strong>In this guide</strong>
          <a href="/guides-qc-photos#official-scope">What inspection covers</a>
          <a href="/guides-qc-photos#review-order">How to review photos</a>
          <a href="/guides-qc-photos#red-flags">Red flags</a>
          <a href="/guides-qc-photos#packaging">Packaging and returns</a>
          <a href="/guides-qc-photos#limits">Limits of QC photos</a>
          <a href="/guides-qc-photos#final-check">Final checklist</a>
          <small>Policies can change. Confirm the live order record and LoloBuy help centre before purchasing a service or submitting a parcel.</small>
        </aside>
      </div>
    </article>`
  },
  {
    file: "guides-shipping.html",
    active: "shipping",
    title: "LoloBuy Shipping Guide",
    description: "Understand LoloBuy parcel consolidation, billable weight, route selection, declarations and the second international-shipping payment.",
    eyebrow: "International parcel guide",
    breadcrumb: "Shipping",
    steps: [
      ["Finish QC before creating a parcel.", "Check each warehouse item and resolve return or exchange questions before selecting products for international shipment."],
      ["Review consolidation and packaging choices.", "Combining items may reduce repeated base charges, while packaging removal can change protection, volume and return eligibility. Keep protective packaging when the item needs it."],
      ["Compare the routes available to your parcel.", "Availability depends on destination, product type, weight, dimensions and current carrier restrictions. Compare estimated time, tracking, restrictions and compensation terms."],
      ["Confirm billable weight and the second payment.", "International shipping is paid after the parcel is prepared. Review the final charge, submit an accurate declaration and keep the tracking record after dispatch."]
    ]
  }
];

for (const page of guidePages) {
  let html = guideTemplate;
  html = html.replace(/<script>self\.__VINEXT_RSC_(?:PARAMS|NAV)__=[\s\S]*?<\/script>/g, "");
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${page.title} | LoloBuy Spreadsheet</title>`);
  html = html.replace(/<meta name="description" content="[^"]*"\/>/, `<meta name="description" content="${page.description}"/>`);
  html = html.replace(/<meta property="og:title" content="[^"]*"\/>/, `<meta property="og:title" content="${page.title} | LoloBuy Spreadsheet"/>`);
  html = html.replace(/<meta property="og:description" content="[^"]*"\/>/, `<meta property="og:description" content="${page.description}"/>`);
  html = html.replace(/<meta property="og:url" content="[^"]*"\/>/, `<meta property="og:url" content="https://lolobuysheet.pro/guides/${page.active === "qc" ? "qc-photos" : "shipping"}"/>`);
  html = html.replace(/<link rel="canonical" href="[^"]*"\/>/, `<link rel="canonical" href="https://lolobuysheet.pro/guides/${page.active === "qc" ? "qc-photos" : "shipping"}"/>`);
  html = html.replace(/<link rel="alternate"[^>]+\/>/g, "");

  const steps = page.steps?.map(([title, copy], index) => `<li><span>0${index + 1}</span><div><h3>${title}</h3><p>${copy}</p></div></li>`).join("") || "";
  const body = page.body || `<section class="guide"><div><h2>${page.title}</h2><p>${page.description}</p></div><ol>${steps}</ol></section>`;
  const content = `<section class="page-hero article-hero"><div><nav class="breadcrumbs" aria-label="Breadcrumb"><span><a href="index.html">Home</a></span><span> / <a href="${page.file}">${page.breadcrumb}</a></span></nav><p class="eyebrow">${page.eyebrow}</p><h1>${page.title}</h1><p class="lead">${page.description}</p><small>✓ Updated July 20, 2026${page.readTime ? ` · ${page.readTime}` : ""}</small><div class="page-hero-action"><a class="primary" href="https://findspreadsheet.com/">Browse spreadsheet <span aria-hidden="true">↗</span></a></div></div></section>${body}`;
  html = html.replace(/<section class="page-hero[\s\S]*?<\/section>\s*<section class="guide">[\s\S]*?<\/section>/, content);
  if (page.active === "qc") {
    const schema = {"@context":"https://schema.org","@graph":[{"@type":"Article","@id":"https://lolobuysheet.pro/guides/qc-photos#article","headline":page.title,"description":page.description,"datePublished":"2026-07-20","dateModified":"2026-07-20","inLanguage":"en","mainEntityOfPage":{"@id":"https://lolobuysheet.pro/guides/qc-photos"},"author":{"@type":"Organization","name":"LoloBuy Spreadsheet"},"publisher":{"@type":"Organization","name":"LoloBuy Spreadsheet","url":"https://lolobuysheet.pro/"}},{"@type":"WebPage","@id":"https://lolobuysheet.pro/guides/qc-photos","url":"https://lolobuysheet.pro/guides/qc-photos","name":page.title,"description":page.description,"inLanguage":"en"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://lolobuysheet.pro/"},{"@type":"ListItem","position":2,"name":"QC Guide","item":"https://lolobuysheet.pro/guides/qc-photos"}]}]};
    html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, `<script type="application/ld+json">${JSON.stringify(schema)}</script>`);
    html = html.replace(/<meta name="twitter:title" content="[^"]*"\/>/, `<meta name="twitter:title" content="${page.title} | LoloBuy Spreadsheet"/>`);
    html = html.replace(/<meta name="twitter:description" content="[^"]*"\/>/, `<meta name="twitter:description" content="${page.description}"/>`);
  }
  html = setCurrentEnglishHref(rebuildHeader(html, page.active), page.file);
  fs.writeFileSync(path.join(root, page.file), secureFindSpreadsheetLinks(html));
}

function secureGeneratedHtml(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      secureGeneratedHtml(file);
      continue;
    }
    if (!entry.isFile() || !entry.name.endsWith(".html")) continue;
    const html = fs.readFileSync(file, "utf8");
    const secured = secureFindSpreadsheetLinks(html);
    if (secured !== html) fs.writeFileSync(file, secured);
  }
}

secureGeneratedHtml(root);
