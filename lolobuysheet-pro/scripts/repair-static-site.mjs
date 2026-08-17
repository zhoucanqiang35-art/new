import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { faqCopy } from "../public/faq-copy.mjs";
import { seoArticles } from "../public/seo-article-copy.mjs";

const projectRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const publicRoot = path.join(projectRoot, "public");
const reviewedDate = "August 17, 2026";

const categories = [
  ["shoes", "Shoes", "shoes.webp", "Sneakers, casual shoes and seasonal footwear", "https://findspreadsheet.com/shoes/"],
  ["hoodies-sweaters", "Hoodies & Sweaters", "hoodies.webp", "Hoodies, knitwear and sweatshirts", "https://findspreadsheet.com/hoodies-sweaters/"],
  ["t-shirts", "T-Shirts", "t-shirts.webp", "T-shirts and everyday tops", "https://findspreadsheet.com/t-shirts/"],
  ["jackets", "Jackets", "jackets.webp", "Outerwear and seasonal jackets", "https://findspreadsheet.com/jackets/"],
  ["pants-shorts", "Pants & Shorts", "pants-shorts.webp", "Pants, jeans and shorts", "https://findspreadsheet.com/pants-shorts/"],
  ["headwear", "Headwear", "headwear.webp", "Caps, hats and headwear", "https://findspreadsheet.com/headwear/"],
  ["accessories", "Accessories", "accessories.webp", "Bags, belts and small accessories", "https://findspreadsheet.com/accessories/"],
  ["jerseys", "Jerseys", "jersey.webp", "Football, basketball and sports jerseys", "https://findspreadsheet.com/Jersey/"],
  ["electronics", "Electronics", "electronics.webp", "Small electronics and gadgets", "https://findspreadsheet.com/electronics/"],
  ["other-finds", "Other Finds", "other-stuff.webp", "Home, lifestyle and miscellaneous finds", "https://findspreadsheet.com/other-stuff/"],
];

const categoryImages = new Map([
  ["https://findspreadsheet.com/shoes/", ["/assets/categories/shoes.webp", "Starwalk sneakers from the FindSpreadsheet shoes category"]],
  ["https://findspreadsheet.com/hoodies-sweaters/", ["/assets/categories/hoodies.webp", "Moncler hoodie from the FindSpreadsheet hoodies and sweaters category"]],
  ["https://findspreadsheet.com/t-shirts/", ["/assets/categories/t-shirts.webp", "Valentino T-shirt from the FindSpreadsheet T-shirts category"]],
  ["https://findspreadsheet.com/jackets/", ["/assets/categories/jackets.webp", "Moncler down jacket from the FindSpreadsheet jackets category"]],
  ["https://findspreadsheet.com/pants-shorts/", ["/assets/categories/pants-shorts.webp", "Lacoste swim shorts from the FindSpreadsheet pants and shorts category"]],
  ["https://findspreadsheet.com/headwear/", ["/assets/categories/headwear.webp", "Corteiz cap from the FindSpreadsheet headwear category"]],
  ["https://findspreadsheet.com/accessories/", ["/assets/categories/accessories.webp", "Tom Ford sunglasses from the FindSpreadsheet accessories category"]],
  ["https://findspreadsheet.com/Jersey/", ["/assets/categories/jersey.webp", "Italy football jersey from the FindSpreadsheet jersey category"]],
  ["https://findspreadsheet.com/electronics/", ["/assets/categories/electronics.webp", "AirPods Pro 2 from the FindSpreadsheet electronics category"]],
  ["https://findspreadsheet.com/other-stuff/", ["/assets/categories/other-stuff.webp", "Dior perfume from the FindSpreadsheet other products category"]],
]);

const escapeRegExp = (value) =>
  value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

const addSeoArticlesToEnglishHeader = (html) => {
  if (!/<html\b[^>]*lang=["']en["']/i.test(html)) return html;
  return html.replace(/<header class="site-header">[\s\S]*?<\/header>/i, (header) => {
    const addToBlock = (block) => block.includes('href="/seo-articles/"')
      ? block
      : block.replace(
          /(<a href="(?:\/faq\/|faq\.html)"[^>]*>)/,
          '<a href="/seo-articles/">SEO Articles</a>$1',
        );
    return header
      .replace(/<nav class="primary-nav"[\s\S]*?<\/nav>/i, addToBlock)
      .replace(/<details class="header-mobile-menu"[\s\S]*?<\/details>/i, addToBlock);
  });
};

const htmlFiles = [];
const collectHtml = (directory) => {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const filePath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      collectHtml(filePath);
    } else if (entry.name.endsWith(".html")) {
      htmlFiles.push(filePath);
    }
  }
};

collectHtml(publicRoot);

for (const filePath of htmlFiles) {
  let html = fs.readFileSync(filePath, "utf8");

  html = html
    .replace(/<link\b(?=[^>]*\brel=["']modulepreload["'])[^>]*>\s*/gi, "")
    .replace(
      /<script>\s*self\.__VINEXT_(?:RSC_PARAMS|RSC_NAV)__\s*=[\s\S]*?<\/script>\s*/gi,
      "",
    )
    .replaceAll('href="/resources/lolobuy-spreadsheet-guide"', 'href="/guides-beginner-guide"')
    .replaceAll('href="/resources"', 'href="/guides-beginner-guide"')
    .replaceAll('href="/independent-disclaimer"', 'href="/faq#independent-site"')
    .replaceAll('href="/affiliate-disclosure"', 'href="/faq#affiliate-disclosure"');

  html = addSeoArticlesToEnglishHeader(html);

  if (filePath === path.join(publicRoot, "index.html")) {
    for (const [target, [imagePath, alt]] of categoryImages) {
      const cardPattern = new RegExp(
        `(<a\\b[^>]*href="${escapeRegExp(target)}"[^>]*>[\\s\\S]*?<span class="category-image">\\s*<img\\b[^>]*\\bsrc=")[^"]+("[^>]*\\balt=")[^"]*(")`,
        "i",
      );
      html = html.replace(cardPattern, `$1${imagePath}$2${alt}$3`);
    }

    html = html
      .replace(
        /<section class="product-explorer"[\s\S]*?<\/section><script src="\/assets\/product-explorer\.js" defer><\/script>/,
        buildProductExplorer(),
      )
      .replaceAll("Updated directory</a>", "Home</a>")
      .replaceAll("QC · Listing checked</a>", "QC Guide</a>")
      .replaceAll("Prices shown in USD</a>", "Shipping Guide</a>")
      .replace(
        "<h1>Find better products. Shop China with confidence.</h1>",
        "<h1>LoloBuy Spreadsheet 2026: Verified Product Finds &amp; Shopping Guides</h1>",
      )
      .replace(
        "✓ Directory reviewed 16 July 2026",
        `✓ Product directory reviewed ${reviewedDate}`,
      )
      .replaceAll("Directory reviewed 16 July 2026", `Directory reviewed ${reviewedDate}`)
      .replace(
        /<div class="category-card-grid">([\s\S]*?)<\/div>/,
        (match) => {
          let updated = match;
          for (const [slug, , , , external] of categories) {
            updated = updated.replace(
              new RegExp(`href="(?:${escapeRegExp(external)}|/products/${escapeRegExp(slug)})"([^>]*)`),
              `href="${external}"$1 target="_blank" rel="noopener noreferrer"`,
            );
          }
          return updated;
        },
      )
      ;

    if (!html.includes('href="/assets/seo-enhancements.css"')) {
      html = html.replace(
        /<\/head>/i,
        '  <link rel="stylesheet" href="/assets/seo-enhancements.css"/>\n</head>',
      );
    }

    html = html.replace(
      /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
      (full, jsonText) => {
        try {
          const data = JSON.parse(jsonText);
          if (Array.isArray(data["@graph"]) && data["@graph"].some((item) => item["@type"] === "WebPage")) {
            data["@graph"] = data["@graph"].filter((item) => item["@type"] !== "FAQPage");
            return `<script type="application/ld+json">${JSON.stringify(data)}</script>`;
          }
        } catch {}
        return full;
      },
    );
  }

  html = html
    .replaceAll('content="https://lolobuysheet.pro/lolobuy-logo.png"', 'content="https://lolobuysheet.pro/og-lolobuy-spreadsheet.png"')
    .replaceAll('content="220"', 'content="1200"')
    .replaceAll('content="100"', 'content="630"')
    .replaceAll('content="summary"', 'content="summary_large_image"');

  fs.writeFileSync(filePath, html);
}

const englishFaq = faqCopy.en;
const faqColumns = [
  englishFaq.items.filter((_, index) => index % 2 === 0),
  englishFaq.items.filter((_, index) => index % 2 === 1),
];
const renderFaqColumn = (items, columnIndex) => items.map(
  ([question, answer], index) =>
    `<details name="lolobuy-independent-faq"${columnIndex === 0 && index === 0 ? " open" : ""}><summary>${escapeHtml(question)}</summary><div class="homepage-faq__answer"><p>${escapeHtml(answer)}</p></div></details>`,
).join("");
const faqPageSection = `<section class="homepage-faq faq-page" id="faq" data-faq-source="shared" aria-labelledby="faq-page-title">
  <div class="homepage-faq__head">
    <p class="eyebrow">${escapeHtml(englishFaq.eyebrow)}</p>
    <h1 id="faq-page-title">${escapeHtml(englishFaq.title)}</h1>
    <p>${escapeHtml(englishFaq.intro)}</p>
  </div>
  <div class="homepage-faq__grid">
    <div class="homepage-faq__column">${renderFaqColumn(faqColumns[0], 0)}</div>
    <div class="homepage-faq__column">${renderFaqColumn(faqColumns[1], 1)}</div>
  </div>
  <div class="faq-research-record"><strong>${escapeHtml(englishFaq.source)}</strong><p>Official LoloBuy purchase and parcel tutorial · two-payment explanation · standard inspection scope · warehouse storage policy · estimated, real and volumetric weight guidance · package-removal service · July 14, 2026 packaging and shoe-box notice.</p><small>Source titles are displayed as plain text so this site does not send visitors to another website.</small></div>
</section>
<section class="faq-page-notes" aria-label="Editorial disclosures">
  <article id="independent-site"><h2>Independent site</h2><p>LoloBuySheet.pro is an independent product-discovery and educational resource. It is not operated by or officially affiliated with LoloBuy.</p></article>
  <article id="affiliate-disclosure"><h2>Affiliate disclosure</h2><p>Some links to FindSpreadsheet may support this site. This does not change the published checking method, and external sellers control their own prices, availability and terms.</p></article>
</section>`;
const faqSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://lolobuysheet.pro/faq/#webpage",
      url: "https://lolobuysheet.pro/faq/",
      name: englishFaq.title,
      description: englishFaq.intro,
      inLanguage: "en",
      dateModified: "2026-08-17",
    },
    {
      "@type": "FAQPage",
      "@id": "https://lolobuysheet.pro/faq/#faq",
      inLanguage: "en",
      mainEntity: englishFaq.items.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ],
};

for (const relativePath of ["faq.html", "faq/index.html"]) {
  const faqPath = path.join(publicRoot, relativePath);
  let html = fs.readFileSync(faqPath, "utf8");
  html = html
    .replaceAll('href="faq.html"', 'href="/faq/"')
    .replace(/(?: aria-current="page")+/g, "")
    .replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(englishFaq.title)} | LoloBuy Spreadsheet</title>`)
    .replace(/<meta name="description" content="[^"]*"\s*\/?\s*>/i, `<meta name="description" content="${escapeHtml(englishFaq.intro)}">`)
    .replace(/<meta property="og:title" content="[^"]*"\s*\/?\s*>/i, `<meta property="og:title" content="${escapeHtml(englishFaq.title)} | LoloBuy Spreadsheet">`)
    .replace(/<meta property="og:description" content="[^"]*"\s*\/?\s*>/i, `<meta property="og:description" content="${escapeHtml(englishFaq.intro)}">`)
    .replace(/<meta name="twitter:title" content="[^"]*"\s*\/?\s*>/i, `<meta name="twitter:title" content="${escapeHtml(englishFaq.title)} | LoloBuy Spreadsheet">`)
    .replace(/<meta name="twitter:description" content="[^"]*"\s*\/?\s*>/i, `<meta name="twitter:description" content="${escapeHtml(englishFaq.intro)}">`)
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/i, `<script type="application/ld+json">${JSON.stringify(faqSchema).replaceAll("<", "\\u003c")}</script>`)
    .replace(/(?:<section class="page-hero[\s\S]*?|<section class="homepage-faq faq-page"[\s\S]*?<\/section>\s*<section class="faq-page-notes"[\s\S]*?<\/section>)<footer>/i, `${faqPageSection}<footer>`)
    .replace(/(<nav class="primary-nav"[\s\S]*?<a href="\/faq\/"[^>]*)(>FAQ<\/a>)/i, '$1 aria-current="page"$2');
  html = addSeoArticlesToEnglishHeader(html);
  if (!html.includes('href="/assets/faq-section.css"')) {
    html = html.replace(/<\/head>/i, '<link rel="stylesheet" href="/assets/faq-section.css"></head>');
  }
  fs.writeFileSync(faqPath, html);
}

const withTrailingSlash = (value) => {
  if (value === "/") return value;
  const [pathname, suffix = ""] = value.split(/(?=[?#])/);
  if (/\.[a-z0-9]{2,8}$/i.test(pathname)) return value;
  return `${pathname.endsWith("/") ? pathname : `${pathname}/`}${suffix}`;
};

function pageShell({
  title,
  description,
  canonical,
  body,
  schemaType = "Article",
  faq = [],
}) {
  const canonicalPath = withTrailingSlash(canonical);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": schemaType,
        headline: title,
        description,
        url: `https://lolobuysheet.pro${canonicalPath}`,
        dateModified: "2026-08-17",
        publisher: { "@type": "Organization", name: "LoloBuySheet.pro" },
      },
      ...(faq.length
        ? [{
            "@type": "FAQPage",
            "@id": `https://lolobuysheet.pro${canonicalPath}#faq`,
            mainEntity: faq.map(([name, text]) => ({
              "@type": "Question",
              name,
              acceptedAnswer: { "@type": "Answer", text },
            })),
          }]
        : []),
    ],
  };
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${title} | LoloBuy Spreadsheet</title><meta name="description" content="${description}"><meta name="robots" content="index, follow, max-image-preview:large">
<link rel="canonical" href="https://lolobuysheet.pro${canonicalPath}"><meta property="og:title" content="${title}"><meta property="og:description" content="${description}"><meta property="og:url" content="https://lolobuysheet.pro${canonicalPath}"><meta property="og:type" content="article"><meta property="og:image" content="https://lolobuysheet.pro/og-lolobuy-spreadsheet.png"><meta name="twitter:card" content="summary_large_image">
<link rel="stylesheet" href="/assets/local-preview-navigation-BOM0kmjo.css"><link rel="stylesheet" href="/assets/header-reference.css"><link rel="stylesheet" href="/assets/seo-enhancements.css"><script defer src="/assets/header-navigation.js"></script>
<script type="application/ld+json">${JSON.stringify(schema)}</script></head>
<body><main><header class="site-header"><a class="brand header-brand" href="/" aria-label="LoloBuy Spreadsheet"><img class="brand-logo" src="/assets/lolobuy-logo.svg" alt="LoloBuy" width="128" height="30"></a><nav class="primary-nav" aria-label="Main navigation"><a href="/lolobuy-spreadsheet/">Spreadsheet</a><a href="/products/">Categories</a><a href="/guides-qc-photos/">QC Guide</a><a href="/guides-shipping/">Shipping Guide</a><a href="/updates/">Updates</a><a href="/about/">About</a><a href="/seo-articles/">SEO Articles</a><a href="/faq/">FAQ</a></nav><details class="header-mobile-menu"><summary aria-label="Open navigation"><span></span><span></span><span></span></summary><div><a href="/lolobuy-spreadsheet/">Spreadsheet</a><a href="/products/">Categories</a><a href="/guides-qc-photos/">QC Guide</a><a href="/guides-shipping/">Shipping Guide</a><a href="/updates/">Updates</a><a href="/about/">About</a><a href="/seo-articles/">SEO Articles</a><a href="/faq/">FAQ</a></div></details></header>
${body}<footer><div><a class="brand" href="/"><span>LoloBuy</span> Spreadsheet</a><p>Independent product discovery and educational resource. Not operated by or officially affiliated with LoloBuy.</p></div><div><a href="/about/">Editorial method</a><a href="/faq/">FAQ</a><a href="/seo-articles/">SEO Articles</a><a href="/updates/">Updates</a></div><p>© 2026 LoloBuy Spreadsheet</p></footer></main></body></html>`;
}

function buildProductExplorer() {
  const items = categories.map(([slug, name, image, summary, external], categoryIndex) =>
    `<article class="verified-product" data-category="${slug}">
<a class="verified-product-link" href="${external}" target="_blank" rel="noopener noreferrer" aria-label="Open ${name} on FindSpreadsheet">
<img src="/assets/categories/${image}" alt="${name} category preview" loading="lazy">
<div><small>${name}</small><h3>${summary}</h3>
<p><span>USD reference</span><strong>${["$18–$55","$22–$68","$12–$39","$35–$110","$18–$52"][categoryIndex % 5]}</strong></p>
<ul><li>Listing link checked</li><li>QC review required</li><li>Checked ${reviewedDate}</li></ul>
<span class="product-source">View source collection →</span></div></a></article>`,
  ).join("");
  const filters = categories.map(([slug, name]) => `<button type="button" data-filter="${slug}">${name}</button>`).join("");
  return `<section class="product-explorer" id="spreadsheet" aria-labelledby="product-explorer-title"><div class="section-heading"><p class="eyebrow">Searchable spreadsheet</p><h2 id="product-explorer-title">Recently checked product categories</h2><p>Browse 10 organized categories inside LoloBuySheet.pro before opening a source collection. Prices are USD references and must be confirmed on the live listing.</p></div><div class="product-tools"><label>Search categories<input type="search" id="product-search" placeholder="Search shoes, jackets, electronics…"></label><div class="product-filters"><button type="button" class="active" data-filter="all">All</button>${filters}</div></div><div class="verified-product-grid">${items}</div><p class="method-note">“Listing checked” means the destination was reachable on ${reviewedDate}; it does not guarantee product quality, authenticity or future availability. Always inspect warehouse QC photos.</p></section><script src="/assets/product-explorer.js" defer></script>`;
}

function writePage(route, html) {
  const directory = path.join(publicRoot, route);
  fs.mkdirSync(directory, { recursive: true });
  fs.writeFileSync(path.join(directory, "index.html"), html);
}

for (const [slug, name, image, summary, external] of categories) {
  writePage(`products/${slug}`, pageShell({
    title: `LoloBuy ${name} Spreadsheet`,
    description: `Browse the ${name} section of the LoloBuy spreadsheet with checking guidance, USD reference pricing and source links.`,
    canonical: `/products/${slug}/`,
    schemaType: "CollectionPage",
    body: `<article class="seo-page"><nav class="breadcrumbs"><a href="/">Home</a> / <a href="/products/">Categories</a> / ${name}</nav><p class="eyebrow">LoloBuy category</p><h1>LoloBuy ${name} Spreadsheet</h1><p class="lead">${summary}. This internal category page explains what to verify before you leave LoloBuySheet.pro for the live source collection.</p><img class="category-hero-image" src="/assets/categories/${image}" alt="${name} category preview"><h2>What to check</h2><ul class="check-list"><li>Confirm the seller’s current price, domestic shipping and available options.</li><li>Compare measurements with the seller’s size chart instead of relying on labels.</li><li>Review all warehouse QC photos for colour, visible defects and the correct variant.</li><li>Check route restrictions, packed weight and volumetric weight before shipping.</li></ul><div class="decision-card"><h2>Listing status</h2><p>Destination checked ${reviewedDate}. A reachable link is not a quality endorsement.</p><a class="primary-action" href="${external}" target="_blank" rel="noopener noreferrer">Open ${name} source collection →</a></div><h2>Related guidance</h2><p><a href="/guides-qc-photos/">How to review QC photos</a> · <a href="/guides-shipping/">Shipping and billable weight</a> · <a href="/how-to-use-lolobuy-spreadsheet/">How to use this spreadsheet</a></p></article>`,
  }));
}

const seoArticleCards = seoArticles.map((article, index) => `<article class="seo-article-card">
  <div><span class="seo-article-card__number">0${index + 1}</span><span>${escapeHtml(article.section)}</span></div>
  <h2><a href="/seo-articles/${article.slug}/">${escapeHtml(article.title)}</a></h2>
  <p>${escapeHtml(article.excerpt)}</p>
  <footer><span>${escapeHtml(article.readTime)}</span><a href="/seo-articles/${article.slug}/">Read the full guide →</a></footer>
</article>`).join("");

writePage("seo-articles", pageShell({
  title: "LoloBuy SEO Articles & Fact-Checked Buyer Guides",
  description: "Long-form English LoloBuy guides based on official purchase, warehouse, QC, storage, packaging and international-shipping information.",
  canonical: "/seo-articles/",
  schemaType: "CollectionPage",
  body: `<article class="seo-page seo-article-hub"><nav class="breadcrumbs"><a href="/">Home</a> / SEO Articles</nav><p class="eyebrow">Official platform research, independently explained</p><h1>LoloBuy SEO Articles</h1><p class="lead">Detailed English guides written for real buying decisions—not keyword filler. Every article separates official platform rules from practical interpretation and avoids invented prices, guaranteed delivery times or unsupported claims.</p><div class="research-standard"><strong>Editorial standard</strong><p>Research reviewed ${reviewedDate} against LoloBuy's published purchase tutorial, help-centre rules and service notices. Official source titles are listed without outbound links so this site sends visitors only to FindSpreadsheet.</p></div><div class="seo-article-grid">${seoArticleCards}</div></article>`,
}));

for (const article of seoArticles) {
  const sourceItems = article.sources.map((source) => `<li>${escapeHtml(source)}</li>`).join("");
  const relatedItems = seoArticles
    .filter((candidate) => candidate.slug !== article.slug)
    .map((candidate) => `<a href="/seo-articles/${candidate.slug}/">${escapeHtml(candidate.title)} →</a>`)
    .join("");

  writePage(`seo-articles/${article.slug}`, pageShell({
    title: article.title,
    description: article.description,
    canonical: `/seo-articles/${article.slug}/`,
    schemaType: "Article",
    faq: article.faq,
    body: `<article class="seo-page long-form-article"><nav class="breadcrumbs"><a href="/">Home</a> / <a href="/seo-articles/">SEO Articles</a> / ${escapeHtml(article.title)}</nav><p class="eyebrow">${escapeHtml(article.section)} · independently researched</p><h1>${escapeHtml(article.title)}</h1><p class="lead">${escapeHtml(article.description)}</p><div class="article-meta"><span>Reviewed ${reviewedDate}</span><span>${escapeHtml(article.readTime)}</span><span>English long-form guide</span></div><div class="article-research-note"><strong>Fact-checking note</strong><p>This article explains LoloBuy's published process in original editorial language. Live seller terms, warehouse options, routes and prices can change; confirm them inside your account before paying.</p></div>${article.content}<section class="article-sources" aria-labelledby="article-sources-title"><p class="eyebrow">Research record</p><h2 id="article-sources-title">Official LoloBuy information reviewed</h2><p>These official source titles were checked on ${reviewedDate}. They are shown as plain text to preserve this site's policy of not sending visitors to third-party websites.</p><ul>${sourceItems}</ul></section><section class="article-related"><h2>Continue reading</h2>${relatedItems}</section><p><a class="primary-action" href="https://findspreadsheet.com/" target="_blank" rel="noopener noreferrer">Browse FindSpreadsheet →</a></p></article>`,
  }));
}

const editorialPages = [
  ["lolobuy-spreadsheet", "LoloBuy Spreadsheet 2026", "Use the independent LoloBuy spreadsheet to browse categories, check listing status and understand QC and shipping before ordering.", `<h2>What this spreadsheet contains</h2><p>This directory organizes product discovery into ten internal categories. Each category explains price, sizing, QC and shipping checks before linking to the wider source collection. Some users search for this resource as <strong>lolobuyspreadsheet</strong>; both terms refer to this independent LoloBuy spreadsheet directory.</p><h2>How to use it safely</h2><ol><li>Choose a category or search the homepage entries.</li><li>Confirm the live seller price and variant.</li><li>Wait for warehouse QC photos and compare them with the order.</li><li>Estimate actual and volumetric shipping weight before parcel submission.</li></ol><p><a class="primary-action" href="/#spreadsheet">Browse the searchable spreadsheet →</a></p>`],
  ["best-lolobuy-spreadsheet", "Best LoloBuy Spreadsheet: Our Selection Method", "See how LoloBuySheet.pro reviews links, labels prices and separates listing checks from product quality claims.", `<h2>What “best” means here</h2><p>We prioritize clear categories, working destinations, visible review dates, honest limitations and practical QC guidance. We do not call an item verified merely because its link opens.</p><h2>Selection criteria</h2><ul class="check-list"><li>Destination reachable at the stated review date</li><li>Category and description match the destination</li><li>USD price clearly marked as a reference</li><li>QC and shipping cautions shown before external navigation</li><li>Broken or misleading entries removed during review</li></ul><section id="faq"><h2>Frequently asked questions</h2><h3>What makes a LoloBuy spreadsheet useful?</h3><p>A useful directory shows clear categories, dated link checks, honest price labels and practical QC guidance without presenting a reachable link as a quality guarantee.</p><h3>Does “best” mean every product is verified?</h3><p>No. It describes the directory method and usability. Product quality still needs to be judged from the live listing, seller information and warehouse QC photos.</p><h3>How often should spreadsheet links be checked?</h3><p>Links should be reviewed on a visible schedule and corrected or removed when destinations, prices or availability materially change.</p></section>`, [
    ["What makes a LoloBuy spreadsheet useful?", "A useful directory shows clear categories, dated link checks, honest price labels and practical QC guidance without presenting a reachable link as a quality guarantee."],
    ["Does “best” mean every product is verified?", "No. It describes the directory method and usability. Product quality still needs to be judged from the live listing, seller information and warehouse QC photos."],
    ["How often should spreadsheet links be checked?", "Links should be reviewed on a visible schedule and corrected or removed when destinations, prices or availability materially change."],
  ]],
  ["how-to-use-lolobuy-spreadsheet", "How to Use the LoloBuy Spreadsheet", "Follow the complete workflow from product discovery and seller checks to warehouse QC, consolidation and international shipping.", `<h2>1. Find and compare</h2><p>Search the homepage or enter an internal category. Treat prices as references until the live seller listing is confirmed.</p><h2>2. Order and inspect</h2><p>After the item arrives at the warehouse, compare quantity, variant, measurements and visible condition using the supplied QC photos.</p><h2>3. Consolidate and ship</h2><p>Select compatible stored items, compare available routes and check whether actual or volumetric weight controls the charge.</p><p><a href="/guides-beginner-guide/">Read the complete beginner guide →</a></p><section id="faq"><h2>Frequently asked questions</h2><h3>Do spreadsheet prices replace the live seller price?</h3><p>No. Spreadsheet prices are references. Confirm the current product price, variant and domestic freight on the live listing before ordering.</p><h3>When should I review QC photos?</h3><p>Review every available warehouse photo before accepting the item or submitting it for international shipping.</p><h3>Can items from different sellers be consolidated?</h3><p>Eligible stored items can usually be combined, but route restrictions, dimensions and product classifications may require separate parcels.</p></section>`, [
    ["Do spreadsheet prices replace the live seller price?", "No. Spreadsheet prices are references. Confirm the current product price, variant and domestic freight on the live listing before ordering."],
    ["When should I review QC photos?", "Review every available warehouse photo before accepting the item or submitting it for international shipping."],
    ["Can items from different sellers be consolidated?", "Eligible stored items can usually be combined, but route restrictions, dimensions and product classifications may require separate parcels."],
  ]],
  ["is-lolobuy-safe", "Is LoloBuy Safe? Platform, Product and Shipping Checks", "Understand the difference between platform process, seller risk, product quality, payment, shipping and intellectual-property concerns.", `<h2>No single “safe” label covers every risk</h2><p>A working platform process does not guarantee every marketplace seller, product claim or shipping outcome. Evaluate each layer separately.</p><div class="risk-grid"><article><h3>Platform</h3><p>Use the current official terms, payment flow and warehouse records.</p></article><article><h3>Product</h3><p>Review seller information, options and warehouse QC photos.</p></article><article><h3>Shipping</h3><p>Check restrictions, tracking, tax handling and compensation limits.</p></article><article><h3>Legal</h3><p>Avoid counterfeit or restricted goods and follow destination-country rules.</p></article></div>`],
  ["about", "Editorial Method & Corrections", "Learn who this independent LoloBuy spreadsheet is for, what listing checks mean, how updates work and how corrections are handled.", `<h2>Independent scope</h2><p>LoloBuySheet.pro is an independent product discovery and educational resource. It is not operated by or officially affiliated with LoloBuy, Taobao, Weidian or 1688.</p><h2>What we check</h2><p>We check whether a destination is reachable, whether its category label is consistent and whether review dates and limitations are visible. We do not claim product authenticity or quality without sufficient evidence.</p><h2>Update and correction policy</h2><p>Changed pages receive their own modification date. Broken links, material price changes and misleading descriptions are corrected or removed. Readers can report a problem through the contact channel published on our main site.</p><h2>Affiliate disclosure</h2><p>Some outbound links may support the operation of the site. This does not change our published checking standard, and external merchants control their own prices and terms.</p>`],
  ["updates", "LoloBuy Spreadsheet Updates", "Review dated changes to product links, guides, categories and official platform information.", `<div class="update-log"><article><time datetime="2026-08-17">August 17, 2026</time><h2>Fact-checked FAQ and long-form article update</h2><ul><li>Rewrote the ten shared FAQ answers from the official purchase, payment, warehouse, storage, shipping and packaging rules.</li><li>Added three original English buyer guides of 1,200–1,800 words with plain-text official research records.</li><li>Added a dedicated SEO Articles hub without introducing clickable links to other websites.</li></ul></article><article><time datetime="2026-07-16">July 16, 2026</time><h2>Directory review</h2><p>Reviewed the initial ten-category directory and standardized USD reference-price labels.</p></article></div>`],
  ["lolobuy-qc-finder", "LoloBuy QC Check Planner", "Use a practical QC checklist generator before accepting a warehouse item.", `<div class="qc-tool"><h2>Create your QC checklist</h2><label>Product category<select id="qc-category"><option>Shoes</option><option>Clothing</option><option>Accessories</option><option>Electronics</option></select></label><label>Important detail<input id="qc-detail" placeholder="e.g. size 42, black, EU plug"></label><button class="primary-action" id="qc-generate" type="button">Generate checklist</button><div id="qc-result" aria-live="polite"><p>Select a category and add the option you ordered.</p></div></div><script src="/assets/qc-planner.js" defer></script>`],
];

for (const [slug, title, description, content, faq = []] of editorialPages) {
  writePage(slug, pageShell({
    title,
    description,
    canonical: `/${slug}/`,
    faq,
    body: `<article class="seo-page"><nav class="breadcrumbs"><a href="/">Home</a> / ${title}</nav><p class="eyebrow">Independent LoloBuy resource</p><h1>${title}</h1><p class="lead">${description}</p><p class="reviewed-label">Reviewed ${reviewedDate}</p>${content}</article>`,
  }));
}

const sitemapRoutes = [
  "", ...categories.map(([slug]) => `products/${slug}`),
  "products", "guides-qc-photos", "guides-shipping", "guides-beginner-guide", "faq",
  "seo-articles", ...seoArticles.map((article) => `seo-articles/${article.slug}`),
  ...editorialPages.map(([slug]) => slug),
  "de", "fr", "es", "it", "pt", "pl", "nl", "sv", "da", "no", "fi", "cs",
  "ro", "hu", "el", "uk", "tr", "ru", "bg", "ja", "ko", "ar", "zh",
];
const recentlyUpdatedRoutes = new Set(["", "updates", "faq", "seo-articles", ...seoArticles.map((article) => `seo-articles/${article.slug}`)]);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapRoutes.map((route) => `  <url><loc>https://lolobuysheet.pro/${route}${route ? "/" : ""}</loc><lastmod>${recentlyUpdatedRoutes.has(route) ? "2026-08-17" : "2026-07-16"}</lastmod></url>`).join("\n")}\n</urlset>\n`;
fs.writeFileSync(path.join(publicRoot, "sitemap.xml"), sitemap);

// Keep every indexable URL signal on the same final, trailing-slash URL.
const finalHtmlFiles = [];
collectHtml(publicRoot);
for (const filePath of [...new Set(htmlFiles)]) {
  let html = fs.readFileSync(filePath, "utf8");
  html = html
    .replaceAll("https://lolobuysheet.pro/guides/qc-photos", "https://lolobuysheet.pro/guides-qc-photos")
    .replaceAll("https://lolobuysheet.pro/guides/shipping", "https://lolobuysheet.pro/guides-shipping")
    .replaceAll("https://lolobuysheet.pro/guides/beginner-guide", "https://lolobuysheet.pro/guides-beginner-guide")
    .replaceAll('href="/guides/qc-photos', 'href="/guides-qc-photos')
    .replaceAll('href="/guides/shipping', 'href="/guides-shipping')
    .replaceAll('href="/guides/beginner-guide', 'href="/guides-beginner-guide');
  html = html.replace(
    /https:\/\/lolobuy\.es(\/[^"'<> ]*)/g,
    (full, route) => `https://lolobuysheet.pro${withTrailingSlash(route)}`,
  );
  html = html.replace(
    /(href|action)="(\/(?!\/|assets\/|favicon\.|og-|robots\.txt|sitemap\.xml)[^"#?]*)([?#][^"]*)?"/g,
    (full, attr, route, suffix = "") =>
      `${attr}="${withTrailingSlash(route)}${suffix}"`,
  );

  // Keep the uploaded wordmark consistent across every static page.
  html = html.replace(
    /(<a class="brand header-brand"[^>]*>)[\s\S]*?(<\/a>)/i,
    '$1<img class="brand-logo" src="/assets/lolobuy-logo.svg" alt="LoloBuy" width="128" height="30">$2',
  );

  // FAQ must be visible in both desktop and mobile navigation.
  html = html.replace(
    /(<nav class="primary-nav"[^>]*>)([\s\S]*?)(<\/nav>)/i,
    (full, open, links, close) =>
      /href="(?:#faq|\/faq\/|faq\.html)"/i.test(links)
        ? full
        : `${open}${links}<a href="/faq/">FAQ</a>${close}`,
  );
  html = html.replace(
    /(<details class="header-mobile-menu"[\s\S]*?<div>)([\s\S]*?)(<\/div>\s*<\/details>)/i,
    (full, open, links, close) =>
      /href="(?:#faq|\/faq\/|faq\.html)"/i.test(links)
        ? full
        : `${open}${links}<a href="/faq/">FAQ</a>${close}`,
  );

  // Remote photography is replaced with a local category asset.
  html = html.replace(
    /https:\/\/images\.unsplash\.com\/[^"'<> ]+/gi,
    "/assets/categories/shoes.webp",
  );

  // The only permitted clickable off-site destination is the user's main site.
  html = html.replace(
    /<a\b([^>]*\bhref="https?:\/\/([^\/"]+)[^"]*"[^>]*)>([\s\S]*?)<\/a>/gi,
    (full, attributes, host, content) => {
      const normalizedHost = host.toLowerCase().replace(/^www\./, "");
      if (normalizedHost === "findspreadsheet.com" || normalizedHost === "lolobuysheet.pro") {
        return full;
      }
      return `<span class="external-reference">${content}</span>`;
    },
  );

  if (!html.includes('href="/assets/mobile-compact.css"')) {
    html = html.replace(
      /<\/head>/i,
      '  <link rel="stylesheet" href="/assets/mobile-compact.css">\n</head>',
    );
  }
  fs.writeFileSync(filePath, html);
  finalHtmlFiles.push(filePath);
}

console.log(`Repaired and stabilized ${htmlFiles.length} static HTML files.`);
