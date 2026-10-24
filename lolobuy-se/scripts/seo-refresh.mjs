import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const root = new URL('../dist/', import.meta.url).pathname;
const origin = 'https://lolobuy.se';
const today = '2026-10-24';
const languages = [
  ['en', 'English'], ['de', 'Deutsch'], ['fr', 'Français'], ['es', 'Español'],
  ['it', 'Italiano'], ['pt', 'Português'], ['nl', 'Nederlands'], ['pl', 'Polski'], ['sv', 'Svenska'],
];

const articles = [
  {
    slug: 'lolobuy-sweden-guide',
    title: 'LoloBuy Sweden guide: product research, QC and parcel planning',
    description: 'A practical LoloBuy Sweden guide to product research, warehouse QC, parcel planning and destination checks before international shipping.',
    label: 'SWEDEN BUYING GUIDE · REVIEWED 24 OCTOBER 2026',
    lead: 'A Sweden-focused LoloBuy guide should make the next decision clearer, not turn changing prices, routes or import outcomes into promises. Use it to document the product, review warehouse evidence, plan a parcel and then verify live destination conditions.',
    sections: [
      ['Start with a product record', [
        'A product link is a starting point rather than a finished specification. Before an order is submitted, save the live title, selected variation, visible price, seller notes and the date you checked them. This makes it possible to compare what you meant to buy with what later appears in warehouse feedback. It also prevents a common mistake: treating an old screenshot, a shared spreadsheet row or an abbreviated product name as a complete product description.',
        'For clothing, record the labelled size and the measurements you need to compare. For shoes, save the size convention and any visible model code. For electronic or multi-part items, list the included parts and the question that would make you decline the item. Clear records are more valuable than broad claims about a seller, because listings, stock and prices can change before purchase is completed.'
      ]],
      ['Use warehouse QC as visible evidence', [
        'LoloBuy publicly describes a warehouse inspection stage with feedback after goods arrive. Treat that stage as a checkpoint. Compare the received item with the record you saved: variation, quantity, visible colour, labelled size, obvious condition, packaging and any detail that mattered to the order. If the item is a set, check each component rather than approving the set from a single overall image.',
        'QC photographs have limits. They can support a conclusion about visible details in the images, but they do not certify authenticity, internal construction, exact material composition, fit, future durability or a carrier outcome. Lighting and angle can alter what appears visible. A better question than “does this look perfect?” is “does the available evidence answer the reason I selected this item?” When it does not, use the available support process or keep the item out of a parcel decision until the uncertainty is acceptable to you.'
      ]],
      ['Plan the parcel after item decisions', [
        'Do not select an international method merely because an item has been ordered. Wait until the relevant items are received, reviewed and ready. If orders arrive at different times, one may need clarification while another is ready. Consolidation can be useful, but it is a timing decision, not an automatic instruction. A short ship, hold, ask or exclude note for each item keeps the final parcel decision understandable.',
        'The live parcel screen is the place to confirm route availability, destination coverage, packed weight, dimensions, item restrictions and current price. A light package can still cost differently when it is bulky, and a method that accepts one item category may not accept another. Historical estimates should be used only as planning context. They are not a quote and should never be presented as a fixed Sweden delivery promise.'
      ]],
      ['Check Sweden import information before paying', [
        'For goods sent to Sweden from outside the EU, import VAT, customs duty where applicable and carrier handling can affect the final cost. Sweden’s Customs Service publishes current consumer guidance and a calculator; the transport operator provides the actual payment or declaration flow for a particular shipment. Check those official sources and the carrier notice at the time of delivery rather than relying on a social post or an old order example.',
        'This is especially important when comparing two parcels. The relevant figures depend on the product category, declared transaction information, shipping arrangement and the current rules. A responsible guide can help a reader prepare a record of the product price, shipping charge and purchase evidence. It cannot advise someone to misdeclare a parcel or promise a customs result.'
      ]],
      ['A five-minute Sweden checklist', [
        'Before you submit a parcel, confirm: the live listing and selected variation were recorded; warehouse evidence matches the important visible points; each item has a clear ship, hold, ask or exclude decision; the live parcel screen shows an available method for the destination and item list; and you understand that tax, duty, carrier charges and delivery timing must be checked from current official and carrier information. This sequence is slower than copying a “best route” recommendation, but it produces a decision you can explain and revisit.'
      ]],
    ],
  },
  {
    slug: 'lolobuy-qc-photos-checklist',
    title: 'How to review LoloBuy QC photos before shipping',
    description: 'A practical LoloBuy QC photos checklist for comparing the received item with the selected product, before a parcel is submitted.',
    label: 'QC PHOTO CHECKLIST · REVIEWED 24 OCTOBER 2026',
    lead: 'Warehouse pictures are useful when they answer a specific comparison. This checklist helps turn LoloBuy QC feedback into a documented approve, question, hold or exclude decision before international shipping.',
    sections: [
      ['Prepare the comparison before the item arrives', [
        'A useful QC review begins before warehouse photographs are available. Keep the source link, selected option, size or model, quantity and a few decision-critical details together. For example, you may need to confirm a labelled size, a colour code, the number of pieces, a visible accessory or a condition detail. Without that record, it is easy to look at a photograph and approve an item simply because it appears broadly similar to a product thumbnail.',
        'Do not replace the original listing with a screenshot from another buyer or a shortened name from a spreadsheet. Those references can help research an item, but the order record is what tells you which variation you actually selected. If the listing uses a size chart, save the chart or the measurements that mattered to you. If a detail is unclear before purchase, make a note of that uncertainty rather than expecting every photo to answer it later.'
      ]],
      ['Check identity before judging quality', [
        'The first question is whether the warehouse received the item you ordered. Compare product type, selected colour or version, labelled size or model, quantity and included components. Use close images to inspect labels, visible codes or packaging where those details are relevant. For a multi-piece order, count the pieces. For a set, check every component. For accessories, confirm that visible hardware or detachable parts match the selection record.',
        'Only then review the visible condition. Look for obvious damage, stains, loose components, printing or stitching issues, missing accessories and differences that matter to the reason you chose the item. Record what you see without turning it into a claim that the item is authentic, safe, correctly sized in use or durable. A photo is evidence of a visible moment, not a complete product test.'
      ]],
      ['Know what a photograph cannot answer', [
        'Photographs are limited by lighting, camera angle, resolution and what the warehouse can access without opening or altering a product. A picture may not establish exact fabric composition, internal build quality, battery condition, waterproofing, long-term performance or fit. It may not show every side of an item, and a labelled size does not replace a measurement comparison. These limits are normal; they are a reason to set realistic checks, not a reason to assume the inspection process has failed.',
        'If a missing view would change your choice, make that clear through the available support process. If the answer will not materially change your decision, do not create unnecessary delay. The aim is proportional evidence: enough to decide whether the item still matches the documented order and your own tolerance for uncertainty.'
      ]],
      ['Choose one clear next step', [
        'After review, write one of four outcomes beside each item: approve for shipping, ask for clarification, hold while another item arrives, or exclude from the parcel. A written decision prevents an item from being packed simply because it was already in the warehouse. It also makes a combined parcel easier to plan, because the list separates ready items from unresolved ones.',
        'If a route has item restrictions, do not assume a QC approval means that route is available. QC concerns the received item; route eligibility and pricing belong to the live parcel stage. Confirm those separately when you are ready to ship.'
      ]],
      ['QC review checklist', [
        'Use this short sequence: open the original product record; compare type, variation, size or model and quantity; inspect visible condition and included parts; identify any unanswered decision-critical question; assign approve, ask, hold or exclude; then keep the relevant images and notes with the order. The result is a more useful record than an unqualified “good QC” comment and supports better parcel planning later.'
      ]],
    ],
  },
  {
    slug: 'lolobuy-shipping-cost-tracking-guide',
    title: 'LoloBuy shipping, costs and tracking: plan a parcel without fixed-price claims',
    description: 'Understand LoloBuy parcel planning, live shipping estimates, actual versus volumetric weight and tracking checks without treating estimates as guarantees.',
    label: 'PARCEL PLANNING & TRACKING · REVIEWED 24 OCTOBER 2026',
    lead: 'International shipping is a separate decision after an item reaches the warehouse. This guide explains how to compare live choices, record a cost estimate and read tracking without promising a fixed route, fee or delivery date.',
    sections: [
      ['Separate the stages of cost', [
        'A complete order cost normally has more than one stage: the product price, any domestic delivery or service charges shown during purchase, optional warehouse actions, international parcel shipping and destination-side charges. These should not be collapsed into one attractive headline number. Write each figure with its date and source screen, because a product price, parcel estimate and import bill may be created at different times.',
        'This distinction matters when comparing products. A lower item price is not necessarily a lower delivered cost if an item changes packed size, route options or the final parcel plan. A guide can show a reader how to record the components. Only the live account and carrier flow can show a current amount for a specific item list and destination.'
      ]],
      ['Read live parcel estimates carefully', [
        'When items are ready, use the current parcel screen to see which methods are offered for the destination and contents. Check whether the estimate uses actual weight, dimensional or volumetric weight, a minimum charge, packaging assumptions or an optional service. A bulky but light order can be assessed differently from a compact order with the same scale weight. Repacking can also alter the final dimensions and therefore the available options.',
        'Save the route name, estimate date, displayed weight basis and any stated restriction before making a decision. Do not publish a single route price or number of delivery days as a general LoloBuy promise. Routes, carrier capacity, destination rules and parcel dimensions change. Readers benefit more from a repeatable checking method than from a stale price table.'
      ]],
      ['Create a sensible item list', [
        'Before you submit, list each item, its approximate purpose in the parcel, whether QC is complete, any visible concern and whether it may have route restrictions. This gives you a chance to avoid mixing unresolved items with ready ones. It also makes it easier to decide whether waiting for another order is worthwhile or whether a separate parcel better fits your circumstances.',
        'Do not infer eligibility from a category label alone. The current route screen and carrier conditions are the relevant sources. If a product has a battery, liquid, magnet, sensitive material or another feature that could affect transportation, check the live information rather than relying on a generic guide.'
      ]],
      ['Use tracking as an evidence trail', [
        'A tracking reference becomes useful once the parcel has been dispatched. Record the parcel ID, carrier or route label, dispatch date and the first scan. Later events may describe warehouse handover, export processing, transit, destination customs processing or final-mile delivery. The wording and timing depend on the carrier. A quiet period does not by itself prove a loss, especially when a route groups events or waits for a handover scan.',
        'If an update appears inconsistent, compare the order or parcel screen with the carrier’s official tracking record and the exact reference number. Keep screenshots or written notes of material events. This produces a clearer support request than relying on a recollection of a date or an informal tracking interpretation.'
      ]],
      ['Plan for destination charges', [
        'Destination-side tax, duty and carrier handling are outside a generic shipping estimate. Sweden-bound customers should check current information from Swedish Customs and the carrier handling the parcel. The correct amount and process depend on the actual shipment and current rules. Never use an old community example as a reason to expect the same result.',
        'The practical habit is simple: treat product research, QC review, parcel selection, tracking and destination charges as separate records. It makes costs easier to understand and avoids a misleading “all-in shipping” claim.'
      ]],
    ],
  },
  {
    slug: 'taobao-weidian-product-link-checklist',
    title: 'Taobao and Weidian product-link checklist before a LoloBuy order',
    description: 'A product-link checklist for Taobao and Weidian research before a LoloBuy order: save the variation, price context, seller notes and QC questions.',
    label: 'PRODUCT RESEARCH CHECKLIST · REVIEWED 24 OCTOBER 2026',
    lead: 'The most useful product research happens before payment. This checklist helps readers turn a Taobao or Weidian link into a clear LoloBuy order record without assuming a listing is permanently available or that a product page proves quality.',
    sections: [
      ['Confirm the exact listing and variation', [
        'When a product is found through a spreadsheet, image, shared link or search result, open the live source listing and identify the exact option. Save the product title, listing URL, selected colour or version, size or model, quantity and displayed price. A product page can change, and several visually similar options may sit under one listing. A generic name is not enough to explain what should be purchased.',
        'If an option name is translated or abbreviated, compare the visible selection, images and seller wording. Do not treat an old price screenshot as a current offer. Write down what is uncertain: missing measurements, vague material wording, incomplete included-parts information or a question about a specific visible detail. Those notes become your QC checklist if the item later reaches the warehouse.'
      ]],
      ['Read seller information as context', [
        'Seller descriptions, product images, reviews and size charts can provide useful context, but they should be read as listing information rather than independent verification. Product photos can be styled, sizing conventions may differ, and descriptions may not answer every question. Compare more than one source when the decision is expensive or a particular detail matters to you.',
        'For apparel, preserve the size chart and the measurement point you need to compare. For footwear, keep the size system and any model identifier. For an item with multiple parts, list the expected contents. The goal is not to create a perfect prediction; it is to make later warehouse evidence meaningful.'
      ]],
      ['Write an order note that can be checked', [
        'A good order note is short and specific: selected version, size or model, quantity, a visible detail to check and the reason it matters. Avoid vague comments such as “good quality.” Instead, use observations that a warehouse photograph might help compare: confirm selected colour, count visible accessories, check labelled size, compare an obvious logo placement or identify a mark shown in the listing.',
        'Keep expectations proportionate. A warehouse photo can help assess visible identity and condition. It cannot prove every performance, material or authenticity claim. Using narrow questions improves the chance that a later decision is based on evidence rather than a broad assumption.'
      ]],
      ['Keep the parcel decision separate', [
        'A product link explains what you intend to buy. It does not select a shipping route, guarantee a return outcome or establish a destination import result. After a product is received and reviewed, make the parcel decision using the live account options for the destination and the exact item list. This separation is important when several orders are consolidated over time.',
        'The checklist therefore ends with four records: source listing, selected variation, QC questions and parcel status. It is simple, repeatable and more honest than describing a live marketplace item as permanently available or already approved for international delivery.'
      ]],
      ['Product-link checklist', [
        'Before payment, check the live listing; save the source URL and date; record the selected option, price context and quantity; preserve measurement or model information; write down unanswered questions; and decide which visible points should be compared at warehouse arrival. Then re-check the actual order information before moving to QC and parcel planning.'
      ]],
    ],
  },
];

function esc(value) {
  return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
}
function normalise(path) { return !path || path === '/' ? '/' : `/${path.replace(/^\/+|\/+$/g, '')}/`; }
function pageUrl(path) { return path === '/' ? origin : `${origin}${normalise(path)}`; }
function head({ title, description, path, type = 'website' }) {
  const url = pageUrl(path);
  return `<meta name="robots" content="index,follow,max-image-preview:large" />
    <link rel="canonical" href="${url}" />
    <meta name="description" content="${esc(description)}" />
    <meta property="og:type" content="${type}" />
    <meta property="og:title" content="${esc(title)}" />
    <meta property="og:description" content="${esc(description)}" />
    <meta property="og:url" content="${url}" />`;
}
function articleSchema(article) {
  return JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: article.title, description: article.description, datePublished: today, dateModified: today, inLanguage: 'en', author: { '@type': 'Organization', name: 'LoloBuy.se Editorial' }, publisher: { '@type': 'Organization', name: 'LoloBuy.se Editorial' }, mainEntityOfPage: pageUrl(`/seo-articles/${article.slug}/`) });
}
function articleHtml(article) {
  const body = article.sections.map(([heading, paragraphs]) => `<h2>${esc(heading)}</h2>\n${paragraphs.map((p) => `<p>${esc(p)}</p>`).join('\n')}`).join('\n');
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>${esc(article.title)} | LoloBuy.se</title>
    ${head({ title: article.title, description: article.description, path: `/seo-articles/${article.slug}/`, type: 'article' })}
    <script type="application/ld+json">${articleSchema(article)}</script><link rel="stylesheet" href="/assets/site.css" />
</head><body><header class="top"><div class="shell nav"><a class="brand-logo" href="/"><img src="/assets/lolobuy-logo.png" alt="LoloBuy" /></a><nav class="navlinks"><a href="/">Home</a><a href="/categories/">Product categories</a><a href="/product-details/">Product details</a><a href="/seo-articles/">SEO articles</a><a href="/faq/">FAQ</a><a href="/qc-tracker/">QC &amp; tracking</a></nav></div></header>
<main class="main"><article class="shell prose"><span>${esc(article.label)}</span><h1>${esc(article.title)}</h1><p class="lead">${esc(article.lead)}</p>${body}<p>This independent guide is for research and planning. It is not operated by LoloBuy, does not process orders or payments, and does not guarantee seller availability, shipping, customs clearance, tax treatment or delivery timing. Re-check live platform, carrier and official destination information before acting.</p><a class="button" href="/tools/lolobuy-search/">Search product ideas on FindSpreadsheet</a></article></main><script src="/assets/app.js"></script></body></html>`;
}
function articleIndex() {
  const cards = articles.map((a) => `<article><span>RESEARCH GUIDE · 2026</span><h2>${esc(a.title)}</h2><p>${esc(a.description)}</p><a href="/seo-articles/${a.slug}/">Read guide <b>→</b></a></article>`).join('\n');
  return `<!doctype html><html lang="en"><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width,initial-scale=1" /><title>LoloBuy guides: QC, shipping and product research</title>${head({ title: 'LoloBuy guides: QC, shipping and product research', description: 'Independent LoloBuy guides for product research, QC photo review, parcel planning, shipping estimates and tracking checks.', path: '/seo-articles/' })}<link rel="stylesheet" href="/assets/site.css" /><style>.guide-intro{margin:40px auto 22px}.guide-intro h1{font-size:clamp(2rem,4vw,3.7rem);letter-spacing:-.06em;margin:0 0 12px}.guide-intro p{max-width:720px;color:#667085}.guide-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;padding-bottom:64px}.guide-grid article{background:#fff;border:1px solid #e3e8ef;border-radius:16px;padding:24px;display:flex;flex-direction:column;min-height:240px}.guide-grid span{font-size:.72rem;font-weight:800;letter-spacing:.1em;color:#ff6a35}.guide-grid h2{font-size:1.4rem;line-height:1.15;letter-spacing:-.035em}.guide-grid p{color:#667085}.guide-grid a{margin-top:auto;color:#c64016;font-weight:800;text-decoration:none}@media(max-width:680px){.guide-grid{grid-template-columns:1fr}}</style></head><body><header class="top"><div class="shell nav"><a class="brand-logo" href="/"><img src="/assets/lolobuy-logo.png" alt="LoloBuy" /></a><nav class="navlinks"><a href="/">Home</a><a href="/categories/">Product categories</a><a href="/product-details/">Product details</a><a href="/seo-articles/">SEO articles</a><a href="/faq/">FAQ</a><a href="/qc-tracker/">QC &amp; tracking</a></nav></div></header><main class="main"><section class="shell guide-intro"><span class="kicker">INDEPENDENT RESEARCH · UPDATED ${today}</span><h1>LoloBuy guides for product research, QC and shipping decisions</h1><p>Practical, evidence-led reading before you choose a product, review warehouse feedback or submit an international parcel. Conditions and availability must always be confirmed live.</p></section><section class="shell guide-grid">${cards}</section></main><script src="/assets/app.js"></script></body></html>`;
}
async function write(path, contents) { const target = join(root, path); await mkdir(dirname(target), { recursive: true }); await writeFile(target, contents); }
async function refreshExisting(path) {
  const file = join(root, path, 'index.html');
  let html = await readFile(file, 'utf8');
  html = html.replace(/<meta name="robots" content="noindex,nofollow"\s*\/>/g, '<meta name="robots" content="index,follow,max-image-preview:large" />');
  // Only declare alternates for URLs that actually exist. Query-string UI translation
  // is not a separately indexable language page, so it must not be advertised here.
  html = html.replace(/\s*<link rel="alternate" hreflang="[^"]+" href="[^"]+"\s*\/>/g, '');
  html = html.replaceAll('https://lolobuy.se//', 'https://lolobuy.se/');
  if (!html.includes('rel="canonical"')) {
    const title = (html.match(/<title>([^<]+)<\/title>/i)?.[1] || 'LoloBuy research').trim();
    const description = html.match(/<meta\s+name="description"\s+content="([^"]+)"/i)?.[1] || 'Independent LoloBuy product research, QC and parcel-planning information.';
    html = html.replace('</title>', `</title>\n    ${head({ title, description, path: normalise(path) })}`);
  }
  await writeFile(file, html);
}
function localeDictionary() {
  const rows = {
    de: { Home: 'Startseite', 'Product categories': 'Produktkategorien', 'Product details': 'Produktdetails', 'SEO articles': 'SEO-Artikel', 'QC & tracking': 'QC & Sendungsverfolgung', FAQ: 'FAQ', 'Read guide →': 'Leitfaden lesen →', 'Independent research preview. Check product availability, pricing and route conditions live.': 'Unabhängige Recherche. Verfügbarkeit, Preise und Routenbedingungen bitte live prüfen.' },
    fr: { Home: 'Accueil', 'Product categories': 'Catégories de produits', 'Product details': 'Détails produit', 'SEO articles': 'Articles SEO', 'QC & tracking': 'QC et suivi', FAQ: 'FAQ', 'Read guide →': 'Lire le guide →', 'Independent research preview. Check product availability, pricing and route conditions live.': 'Recherche indépendante. Vérifiez en direct la disponibilité, les prix et les conditions de livraison.' },
    es: { Home: 'Inicio', 'Product categories': 'Categorías de productos', 'Product details': 'Detalles del producto', 'SEO articles': 'Artículos SEO', 'QC & tracking': 'QC y seguimiento', FAQ: 'Preguntas frecuentes', 'Read guide →': 'Leer la guía →', 'Independent research preview. Check product availability, pricing and route conditions live.': 'Investigación independiente. Compruebe en directo la disponibilidad, los precios y las condiciones de envío.' },
    it: { Home: 'Home', 'Product categories': 'Categorie prodotto', 'Product details': 'Dettagli prodotto', 'SEO articles': 'Articoli SEO', 'QC & tracking': 'QC e tracciamento', FAQ: 'Domande frequenti', 'Read guide →': 'Leggi la guida →', 'Independent research preview. Check product availability, pricing and route conditions live.': 'Ricerca indipendente. Verifica in tempo reale disponibilità, prezzi e condizioni di spedizione.' },
    pt: { Home: 'Início', 'Product categories': 'Categorias de produtos', 'Product details': 'Detalhes do produto', 'SEO articles': 'Artigos SEO', 'QC & tracking': 'QC e rastreio', FAQ: 'Perguntas frequentes', 'Read guide →': 'Ler o guia →', 'Independent research preview. Check product availability, pricing and route conditions live.': 'Pesquisa independente. Confirme ao vivo disponibilidade, preços e condições de envio.' },
    nl: { Home: 'Start', 'Product categories': 'Productcategorieën', 'Product details': 'Productdetails', 'SEO articles': 'SEO-artikelen', 'QC & tracking': 'QC en tracking', FAQ: 'Veelgestelde vragen', 'Read guide →': 'Lees gids →', 'Independent research preview. Check product availability, pricing and route conditions live.': 'Onafhankelijk onderzoek. Controleer beschikbaarheid, prijzen en verzendvoorwaarden live.' },
    pl: { Home: 'Strona główna', 'Product categories': 'Kategorie produktów', 'Product details': 'Szczegóły produktu', 'SEO articles': 'Artykuły SEO', 'QC & tracking': 'QC i śledzenie', FAQ: 'FAQ', 'Read guide →': 'Czytaj poradnik →', 'Independent research preview. Check product availability, pricing and route conditions live.': 'Niezależne badanie. Sprawdzaj na bieżąco dostępność, ceny i warunki wysyłki.' },
    sv: { Home: 'Hem', 'Product categories': 'Produktkategorier', 'Product details': 'Produktdetaljer', 'SEO articles': 'SEO-artiklar', 'QC & tracking': 'QC och spårning', FAQ: 'Vanliga frågor', 'Read guide →': 'Läs guiden →', 'Independent research preview. Check product availability, pricing and route conditions live.': 'Oberoende research. Kontrollera tillgänglighet, pris och fraktvillkor live.' },
  };
  for (const [code, dictionary] of Object.entries(rows)) {
    for (const article of articles) {
      dictionary[article.title] = article.title;
      dictionary[article.description] = article.description;
    }
  }
  return rows;
}
async function main() {
  const existing = ['', 'categories', 'categories/shoes', 'categories/hoodies-sweaters', 'categories/t-shirts', 'categories/jackets', 'categories/pants-shorts', 'categories/headwear', 'categories/sets', 'categories/underwear-underpants', 'categories/jerseys', 'categories/accessories', 'product-details', 'faq', 'qc-tracker', 'tools/lolobuy-search', 'seo-articles/how-lolobuy-works'];
  await Promise.all(existing.map(refreshExisting));
  for (const article of articles) await write(`seo-articles/${article.slug}/index.html`, articleHtml(article));
  await write('seo-articles/index.html', articleIndex());
  const allPages = [...existing.map((path) => normalise(path)), '/seo-articles/', ...articles.map((a) => `/seo-articles/${a.slug}/`)];
  await write('assets/i18n.json', `${JSON.stringify(localeDictionary())}\n`);
  const urls = allPages;
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((path) => `  <url><loc>${pageUrl(path)}</loc><lastmod>${today}</lastmod><changefreq>${path.includes('seo-articles') ? 'monthly' : 'weekly'}</changefreq><priority>${path === '/' ? '1.0' : path.includes('seo-articles') ? '0.8' : '0.7'}</priority></url>`).join('\n')}\n</urlset>\n`;
  await write('sitemap.xml', xml); await write('sitemap-core.xml', xml);
}
main().catch((error) => { console.error(error); process.exitCode = 1; });
