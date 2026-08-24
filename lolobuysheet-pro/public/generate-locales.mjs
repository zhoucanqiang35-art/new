import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import { faqCopy } from "./faq-copy.mjs";

const root = path.dirname(fileURLToPath(import.meta.url));
const bundle = fs.readFileSync(
  path.join(root, "assets/LanguageMenu-BoTWPkee-rn9J0SqD.js"),
  "utf8",
);
const start = bundle.indexOf("var t=");
const end = bundle.indexOf(",o=e=>", start);
const context = {};

if (start < 0 || end < 0) {
  throw new Error("The localized copy bundle could not be read.");
}

vm.runInNewContext(
  `${bundle.slice(start, end)};globalThis.TRANSLATIONS=i;`,
  context,
);

const translations = context.TRANSLATIONS;
translations.en.hero =
  "LoloBuy Spreadsheet 2026: Independently Checked Product Finds & Shopping Guides";
const locales = [
  "en",
  "de",
  "fr",
  "es",
  "it",
  "pt",
  "pl",
  "nl",
  "sv",
  "da",
  "no",
  "fi",
  "cs",
  "ro",
  "hu",
  "el",
  "uk",
  "tr",
  "ru",
  "bg",
  "ja",
  "ko",
  "ar",
  "zh",
];
const rtl = new Set(["ar"]);
const missingLocales = locales.filter((locale) => !translations[locale]);
const missingFaqLocales = locales.filter((locale) => !faqCopy[locale]);

if (missingLocales.length) {
  throw new Error(`Missing translations: ${missingLocales.join(", ")}`);
}

if (missingFaqLocales.length) {
  throw new Error(`Missing FAQ translations: ${missingFaqLocales.join(", ")}`);
}

const esc = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

const jsonForHtml = (value) =>
  JSON.stringify(value).replaceAll("<", "\\u003c");

const routeFor = (locale) => (locale === "en" ? "/" : `/${locale}/`);
const canonicalFor = (locale) => `https://lolobuysheet.pro${routeFor(locale)}`;

const categoryTargets = [
  "shoes",
  "hoodies-sweaters",
  "t-shirts",
  "jackets",
  "pants-shorts",
  "headwear",
  "accessories",
  "Jersey",
  "electronics",
  "other-stuff",
];

const categoryNames = {
  en: ["Shoes", "Hoodies & Sweaters", "T-Shirts", "Jackets", "Pants & Shorts", "Headwear", "Accessories", "Jerseys", "Electronics", "Other Finds"],
  de: ["Schuhe", "Hoodies & Pullover", "T-Shirts", "Jacken", "Hosen & Shorts", "Kopfbedeckungen", "Accessoires", "Trikots", "Elektronik", "Weitere Funde"],
  fr: ["Chaussures", "Sweats et pulls", "T-shirts", "Vestes", "Pantalons et shorts", "Couvre-chefs", "Accessoires", "Maillots", "Électronique", "Autres trouvailles"],
  es: ["Calzado", "Sudaderas y jerséis", "Camisetas", "Chaquetas", "Pantalones y shorts", "Gorras y sombreros", "Accesorios", "Camisetas deportivas", "Electrónica", "Otros hallazgos"],
  it: ["Scarpe", "Felpe e maglioni", "T-shirt", "Giacche", "Pantaloni e shorts", "Cappelli", "Accessori", "Maglie sportive", "Elettronica", "Altri prodotti"],
  pt: ["Calçado", "Sweatshirts e camisolas", "T-shirts", "Casacos", "Calças e calções", "Chapéus e bonés", "Acessórios", "Camisolas desportivas", "Eletrónica", "Outros produtos"],
  pl: ["Buty", "Bluzy i swetry", "T-shirty", "Kurtki", "Spodnie i szorty", "Nakrycia głowy", "Akcesoria", "Koszulki sportowe", "Elektronika", "Inne znaleziska"],
  nl: ["Schoenen", "Hoodies en truien", "T-shirts", "Jassen", "Broeken en shorts", "Hoofddeksels", "Accessoires", "Sportshirts", "Elektronica", "Andere vondsten"],
  sv: ["Skor", "Hoodies och tröjor", "T-shirts", "Jackor", "Byxor och shorts", "Huvudbonader", "Accessoarer", "Matchtröjor", "Elektronik", "Övriga fynd"],
  da: ["Sko", "Hoodies og trøjer", "T-shirts", "Jakker", "Bukser og shorts", "Hovedbeklædning", "Tilbehør", "Sportstrøjer", "Elektronik", "Andre fund"],
  no: ["Sko", "Hettegensere og gensere", "T-skjorter", "Jakker", "Bukser og shorts", "Hodeplagg", "Tilbehør", "Drakter", "Elektronikk", "Andre funn"],
  fi: ["Kengät", "Hupparit ja neuleet", "T-paidat", "Takit", "Housut ja shortsit", "Päähineet", "Asusteet", "Pelipaidat", "Elektroniikka", "Muut löydöt"],
  cs: ["Boty", "Mikiny a svetry", "Trička", "Bundy", "Kalhoty a kraťasy", "Pokrývky hlavy", "Doplňky", "Dresy", "Elektronika", "Další nálezy"],
  ro: ["Încălțăminte", "Hanorace și pulovere", "Tricouri", "Geci", "Pantaloni și pantaloni scurți", "Șepci și pălării", "Accesorii", "Tricouri sportive", "Electronice", "Alte produse"],
  hu: ["Cipők", "Kapucnis felsők és pulóverek", "Pólók", "Kabátok", "Nadrágok és rövidnadrágok", "Fejfedők", "Kiegészítők", "Mezek", "Elektronika", "Egyéb termékek"],
  el: ["Παπούτσια", "Φούτερ και πουλόβερ", "Μπλουζάκια", "Μπουφάν", "Παντελόνια και σορτς", "Καπέλα", "Αξεσουάρ", "Αθλητικές φανέλες", "Ηλεκτρονικά", "Άλλα ευρήματα"],
  uk: ["Взуття", "Худі та светри", "Футболки", "Куртки", "Штани та шорти", "Головні убори", "Аксесуари", "Спортивні футболки", "Електроніка", "Інші знахідки"],
  tr: ["Ayakkabılar", "Kapüşonlular ve kazaklar", "Tişörtler", "Ceketler", "Pantolonlar ve şortlar", "Şapkalar", "Aksesuarlar", "Formalar", "Elektronik", "Diğer ürünler"],
  ru: ["Обувь", "Худи и свитеры", "Футболки", "Куртки", "Брюки и шорты", "Головные уборы", "Аксессуары", "Спортивные майки", "Электроника", "Другие находки"],
  bg: ["Обувки", "Суичъри и пуловери", "Тениски", "Якета", "Панталони и шорти", "Шапки", "Аксесоари", "Спортни фланелки", "Електроника", "Други находки"],
  ja: ["シューズ", "パーカー・セーター", "Tシャツ", "ジャケット", "パンツ・ショーツ", "帽子", "アクセサリー", "スポーツジャージ", "電子機器", "その他の商品"],
  ko: ["신발", "후디 및 스웨터", "티셔츠", "재킷", "바지 및 반바지", "모자", "액세서리", "스포츠 유니폼", "전자제품", "기타 상품"],
  ar: ["الأحذية", "السترات والكنزات", "القمصان", "الجاكيتات", "البناطيل والسراويل القصيرة", "القبعات", "الإكسسوارات", "القمصان الرياضية", "الإلكترونيات", "منتجات أخرى"],
  zh: ["鞋履", "连帽衫与毛衣", "T恤", "夹克", "长裤与短裤", "帽饰", "配饰", "球衣", "电子产品", "其他精选"],
};

const categoryAssets = [
  ["shoes.webp", "Starwalk sneakers"],
  ["hoodies.webp", "Moncler hoodie"],
  ["t-shirts.webp", "Valentino T-shirt"],
  ["jackets.webp", "Moncler down jacket"],
  ["pants-shorts.webp", "Lacoste swim shorts"],
  ["headwear.webp", "Corteiz cap"],
  ["accessories.webp", "Tom Ford sunglasses"],
  ["jersey.webp", "Italy football jersey"],
  ["electronics.webp", "AirPods Pro 2"],
  ["other-stuff.webp", "Dior perfume"],
];

const tryOnProducts = [
  [
    "https://findspreadsheet.com/hoodies-sweaters/vetement-hoodie-1066.html",
    "https://findspreadsheet.com/uploads/allimg/20260205/1-2602051121331R.webp",
    "Vetement Hoodie",
    "SOURCE",
    "LISTING",
    "$16.67",
  ],
  [
    "https://findspreadsheet.com/jackets/amiri-jacket-1063.html",
    "https://findspreadsheet.com/uploads/allimg/20260205/1-26020511163T16.webp",
    "Amiri Jacket",
    "SOURCE",
    "LISTING",
    "$16.67",
  ],
  [
    "https://findspreadsheet.com/t-shirts/stone-island-t-shirtshort-1049.html",
    "https://findspreadsheet.com/uploads/allimg/20260205/1-26020510451T32.webp",
    "Stone Island T-shirt",
    "SOURCE",
    "LISTING",
    "$9.58",
  ],
];

const brands = [
  "AMIRI",
  "Balenciaga",
  "Burberry",
  "Chrome Hearts",
  "Dior",
  "Essentials",
  "Gucci",
  "Louis Vuitton",
  "Moncler",
  "Nike",
  "Ralph Lauren",
  "Stone Island",
];

const languageOptions = (currentLocale) =>
  locales
    .map((locale) => {
      const selected = locale === currentLocale ? " selected" : "";
      return `<option value="${routeFor(locale)}"${selected}>${locale.toUpperCase()} · ${esc(translations[locale].languageName)}</option>`;
    })
    .join("");

const alternateLinks = () =>
  locales
    .map(
      (locale) =>
        `<link rel="alternate" hreflang="${locale}" href="${canonicalFor(locale)}"/>`,
    )
    .join("");

const categoryCards = (locale) =>
  categoryTargets
    .map((target, index) => {
      const [image, alt] = categoryAssets[index];
      const name = categoryNames[locale][index];
      return `<a href="https://findspreadsheet.com/${target}/" aria-label="${esc(name)} — FindSpreadsheet" target="_blank" rel="noopener noreferrer"><span class="category-image"><img src="/assets/categories/${image}" alt="${esc(`${alt} — ${name}`)}"/><i aria-hidden="true">↗</i></span><span class="category-label"><strong>${esc(name)}</strong><small>FindSpreadsheet</small></span></a>`;
    })
    .join("");

const categoryPriceRanges = [
  "$18–$55",
  "$22–$68",
  "$12–$39",
  "$35–$110",
  "$18–$52",
];

const productExplorerCopy = {
  all: {
    en: "All", de: "Alle", fr: "Tout", es: "Todo", it: "Tutto", pt: "Tudo",
    pl: "Wszystko", nl: "Alles", sv: "Alla", da: "Alle", no: "Alle",
    fi: "Kaikki", cs: "Vše", ro: "Toate", hu: "Összes", el: "Όλα",
    uk: "Усі", tr: "Tümü", ru: "Все", bg: "Всички", ja: "すべて",
    ko: "전체", ar: "الكل", zh: "全部",
  },
  search: {
    en: "Search categories", de: "Kategorien suchen", fr: "Rechercher des catégories",
    es: "Buscar categorías", it: "Cerca categorie", pt: "Pesquisar categorias",
    pl: "Szukaj kategorii", nl: "Categorieën zoeken", sv: "Sök kategorier",
    da: "Søg kategorier", no: "Søk i kategorier", fi: "Hae luokkia",
    cs: "Hledat kategorie", ro: "Caută categorii", hu: "Kategóriák keresése",
    el: "Αναζήτηση κατηγοριών", uk: "Пошук категорій", tr: "Kategori ara",
    ru: "Поиск категорий", bg: "Търсене на категории", ja: "カテゴリーを検索",
    ko: "카테고리 검색", ar: "البحث في الفئات", zh: "搜索分类",
  },
  searchButton: {
    en: "Search products", de: "Produkte suchen", fr: "Rechercher des produits",
    es: "Buscar productos", it: "Cerca prodotti", pt: "Pesquisar produtos",
    pl: "Szukaj produktów", nl: "Producten zoeken", sv: "Sök produkter",
    da: "Søg efter produkter", no: "Søk etter produkter", fi: "Hae tuotteita",
    cs: "Hledat produkty", ro: "Caută produse", hu: "Termékek keresése",
    el: "Αναζήτηση προϊόντων", uk: "Пошук товарів", tr: "Ürün ara",
    ru: "Найти товары", bg: "Търсене на продукти", ja: "商品を検索",
    ko: "상품 검색", ar: "البحث عن المنتجات", zh: "搜索商品",
  },
};

const buildLocalizedProductExplorer = (locale, t) => {
  const items = categoryTargets
    .map((target, index) => {
      const [image, alt] = categoryAssets[index];
      const name = categoryNames[locale][index];
      return `<article class="verified-product" data-category="${target.toLowerCase()}"><a class="verified-product-link" href="https://findspreadsheet.com/${target}/" target="_blank" rel="noopener noreferrer" aria-label="${esc(`${t.browse}: ${name}`)}"><img src="/assets/categories/${image}" alt="${esc(`${alt} — ${name}`)}" loading="lazy"/><div><small>${esc(name)}</small><h3>${esc(name)} · FindSpreadsheet</h3><p><span>USD</span><strong>${categoryPriceRanges[index % categoryPriceRanges.length]}</strong></p><ul><li>${esc(t.checked)}</li><li>QC</li><li>${esc(t.updated)}</li></ul><span class="product-source">${esc(t.browse)} →</span></div></a></article>`;
    })
    .join("");
  const filters = categoryTargets
    .map((target, index) => `<button type="button" data-filter="${target.toLowerCase()}">${esc(categoryNames[locale][index])}</button>`)
    .join("");

  return `<section class="product-explorer" id="spreadsheet" aria-labelledby="product-explorer-title"><div class="section-heading"><p class="eyebrow">LoloBuy Spreadsheet</p><h2 id="product-explorer-title">${esc(t.categories[0])} · ${esc(t.nav[0])}</h2><p>${esc(t.description)}</p></div><div class="product-tools"><form class="product-main-search" id="product-main-search" action="https://findspreadsheet.com/search.html" method="get" target="_blank"><label for="product-search">${esc(productExplorerCopy.search[locale])}</label><div class="product-main-search__row"><input type="search" id="product-search" name="keywords" placeholder="${esc(categoryNames[locale].slice(0, 3).join(", "))}…" autocomplete="off" required/><input type="hidden" name="channelid" value="2"/><button type="submit">${esc(productExplorerCopy.searchButton[locale])} ↗</button></div></form><div class="product-filters"><button type="button" class="active" data-filter="all">${esc(productExplorerCopy.all[locale])}</button>${filters}</div></div><div class="verified-product-grid">${items}</div><p class="method-note">${esc(t.disclaimer)}</p></section><script src="/assets/product-explorer.js" defer></script>`;
};

const tryOnCards = (t) =>
  [...tryOnProducts, ...tryOnProducts]
    .map(
      ([href, image, name, badge, views, price]) =>
        `<a class="tryon-card" href="${href}" aria-label="${esc(`${t.browse}: ${name}`)}" target="_blank" rel="noopener noreferrer"><img src="${image}" alt="${esc(name)}"/><div><small>${badge} · ${views}</small><h3>${esc(name)}</h3><span>${price} <b>↗</b></span></div></a>`,
    )
    .join("");

const brandCards = (t) =>
  brands
    .map((brand, index) => {
      const keywords = encodeURIComponent(brand);
      return `<a href="https://findspreadsheet.com/search.html?keywords=${keywords}&amp;channelid=2" aria-label="${esc(`${t.browse}: ${brand}`)}" target="_blank" rel="noopener noreferrer"><i>${String(index + 1).padStart(2, "0")}</i><span>${esc(brand.slice(0, 2))}</span><strong>${esc(brand)}</strong><small>FindSpreadsheet ↗</small></a>`;
    })
    .join("");

const faqSchema = (locale) => ({
  "@type": "FAQPage",
  "@id": `${canonicalFor(locale)}#faq`,
  inLanguage: locale,
  mainEntity: faqCopy[locale].items.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
});

const renderFaqColumn = (items, startIndex) =>
  items
    .map(
      ([question, answer], index) =>
        `<details name="lolobuy-homepage-faq"${startIndex === 0 && index === 0 ? " open" : ""}><summary>${esc(question)}</summary><div class="homepage-faq__answer"><p>${esc(answer)}</p></div></details>`,
    )
    .join("");

const renderFaqSection = (locale) => {
  const copy = faqCopy[locale];
  const left = copy.items.filter((_, index) => index % 2 === 0);
  const right = copy.items.filter((_, index) => index % 2 === 1);

  return `<!-- homepage-faq:start -->
  <script type="application/ld+json" data-homepage-faq-schema>${jsonForHtml({
    "@context": "https://schema.org",
    ...faqSchema(locale),
  })}</script>
  <section class="homepage-faq" id="faq" aria-labelledby="homepage-faq-title">
    <div class="homepage-faq__head">
      <p class="eyebrow">${esc(copy.eyebrow)}</p>
      <h2 id="homepage-faq-title">${esc(copy.title)}</h2>
      <p>${esc(copy.intro)}</p>
    </div>
    <div class="homepage-faq__grid">
      <div class="homepage-faq__column">${renderFaqColumn(left, 0)}</div>
      <div class="homepage-faq__column">${renderFaqColumn(right, 1)}</div>
    </div>
    <p class="homepage-faq__sources">${esc(copy.source)}：
      <span>${esc(copy.official)}</span>
      · <span>purchase process</span>
      · <span>QC rules</span>
      · <span>shipping-weight rules</span>
      · <span>July 14 packaging notice</span>
    </p>
  </section>
  <!-- homepage-faq:end -->`;
};

const marketSection = (locale) => {
  const t = translations[locale];
  const displayNames = new Intl.DisplayNames([locale], { type: "region" });
  const country = (region) => displayNames.of(region) ?? region;

  return `<section class="market-focus" aria-labelledby="market-focus-title">
    <div class="market-focus__intro">
      <p class="eyebrow">${esc(t.languageName)}</p>
      <h2 id="market-focus-title">${esc(t.guide)}</h2>
      <p>${esc(t.guideText)}</p>
    </div>
    <div class="market-focus__grid">
      <article><span>EN</span><h3>${esc(country("US"))}</h3><p>${esc(t.description)}</p></article>
      <article><span>EN</span><h3>${esc(country("GB"))}</h3><p>${esc(t.guideText)}</p></article>
      <article><span>EN</span><h3>${esc(`${country("CA")} & ${country("AU")}`)}</h3><p>${esc(t.disclaimer)}</p></article>
      <a href="/de/"><span>DE</span><h3>${esc(country("DE"))}</h3><p>${esc(translations.de.description)}</p></a>
      <a href="/fr/"><span>FR</span><h3>${esc(country("FR"))}</h3><p>${esc(translations.fr.description)}</p></a>
      <a href="/es/"><span>ES</span><h3>${esc(country("ES"))}</h3><p>${esc(translations.es.description)}</p></a>
      <a href="/it/"><span>IT</span><h3>${esc(country("IT"))}</h3><p>${esc(translations.it.description)}</p></a>
      <a href="/nl/"><span>NL</span><h3>${esc(country("NL"))}</h3><p>${esc(translations.nl.description)}</p></a>
    </div>
    <p class="market-focus__note">${esc(t.description)}</p>
  </section>`;
};

const officialUpdateCards = (locale) => {
  const copy = faqCopy[locale];
  const cards = [
    {
      number: "01",
      badge: "14 JUL 2026",
      icon: "!",
      title: copy.items[9][0],
      summary: copy.items[9][1],
      href: "/guides-shipping#packaging",
    },
    {
      number: "02",
      badge: "90 DAYS",
      icon: "90",
      title: copy.items[5][0],
      summary: copy.items[5][1],
      href: "/guides-beginner-guide#storage-consolidation",
    },
    {
      number: "03",
      badge: "÷6000 / ÷5000",
      icon: "kg",
      title: copy.items[6][0],
      summary: copy.items[6][1],
      href: "/guides-shipping#billable-weight",
    },
  ];

  return cards
    .map(
      ({ number, badge, icon, title, summary, href }) =>
        `<a href="${href}" class="editorial-card official-update-card"><div class="editorial-number">${number}</div><span class="official-update-badge">${esc(badge)}</span><span class="editorial-icon">${esc(icon)}</span><h3>${esc(title)}</h3><p>${esc(summary)}</p><b aria-hidden="true">→</b></a>`,
    )
    .join("");
};

const renderHomepage = (locale) => {
  const t = translations[locale];
  const direction = rtl.has(locale) ? "rtl" : "ltr";
  const canonical = canonicalFor(locale);
  const faq = faqCopy[locale];
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [{
      "@type": "WebPage",
      inLanguage: locale,
      name: t.title,
      description: t.description,
      url: canonical,
      isPartOf: {
        "@type": "WebSite",
        name: "LoloBuy Spreadsheet",
        url: "https://lolobuysheet.pro/",
      },
    }, faqSchema(locale)],
  };

  return `<!doctype html>
<html lang="${locale}" dir="${direction}">
<head>
  <base href="/"/>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <title>${esc(t.title)}</title>
  <meta name="description" content="${esc(t.description)}"/>
  <meta name="robots" content="index, follow, max-image-preview:large"/>
  <meta name="content-language" content="${locale}"/>
  <meta property="og:type" content="website"/>
  <meta property="og:site_name" content="LoloBuy Spreadsheet"/>
  <meta property="og:locale" content="${locale}"/>
  <meta property="og:title" content="${esc(t.title)}"/>
  <meta property="og:description" content="${esc(t.description)}"/>
  <meta property="og:url" content="${canonical}"/>
  <meta name="twitter:card" content="summary"/>
  <meta name="twitter:title" content="${esc(t.title)}"/>
  <meta name="twitter:description" content="${esc(t.description)}"/>
  <link rel="canonical" href="${canonical}"/>
  ${alternateLinks()}
  <link rel="alternate" hreflang="x-default" href="https://lolobuysheet.pro/"/>
  <link rel="stylesheet" crossorigin href="/assets/local-preview-navigation-BOM0kmjo.css"/>
  <link rel="stylesheet" href="/assets/header-reference.css"/>
  <link rel="stylesheet" href="/assets/faq-section.css"/>
  <link rel="stylesheet" href="/assets/official-updates.css"/>
  <link rel="stylesheet" href="/assets/mobile-refinements.css"/>
  <link rel="stylesheet" href="/assets/seo-enhancements.css"/>
  <link rel="stylesheet" href="/assets/pro-market.css"/>
  <link rel="stylesheet" href="/assets/mobile-compact.css"/>
  <script type="application/ld+json">${jsonForHtml(structuredData)}</script>
  <script defer src="/assets/header-navigation.js"></script>
  <script defer src="/assets/official-updates.js"></script>
</head>
<body>
<main>
  <header class="site-header">
    <a class="brand header-brand" href="${routeFor(locale)}" aria-label="LoloBuy Spreadsheet">
      <img class="brand-logo" src="/assets/lolobuy-logo.svg" alt="LoloBuy" width="128" height="30"/>
    </a>
    <nav class="primary-nav" aria-label="${esc(t.nav.join(", "))}">
      <a href="${routeFor(locale)}" aria-current="page">${esc(t.directoryLabel)}</a>
      <a href="/products">${esc(t.nav[0])}</a>
      <a href="/guides-qc-photos">QC · ${esc(t.checked)}</a>
      <a href="/guides-shipping">${esc(t.prices)}</a>
      <a href="/guides-beginner-guide">${esc(t.nav[1])}</a>
      <a href="/faq/">FAQ</a>
    </nav>
    <details class="header-mobile-menu">
      <summary aria-label="${esc(t.nav.join(", "))}"><span></span><span></span><span></span></summary>
      <div>
        <a href="${routeFor(locale)}" aria-current="page">${esc(t.directoryLabel)}</a>
        <a href="/products">${esc(t.nav[0])}</a>
        <a href="/guides-qc-photos">QC · ${esc(t.checked)}</a>
        <a href="/guides-shipping">${esc(t.prices)}</a>
        <a href="/guides-beginner-guide">${esc(t.nav[1])}</a>
        <a href="/faq/">${esc(faq.title)}</a>
      </div>
    </details>
    <label class="language-switcher" translate="no">
      <span class="language-symbol" aria-hidden="true">◎</span>
      <span class="sr-only">${esc(t.languageName)}</span>
      <select aria-label="${esc(t.languageName)}" data-language-switcher>${languageOptions(locale)}</select>
    </label>
  </header>

  <section class="page-hero home-hero-grid">
    <div>
      <nav class="breadcrumbs" aria-label="${esc(t.nav[0])}"><span><a href="${routeFor(locale)}">${esc(t.nav[0])}</a></span></nav>
      <p class="eyebrow">${esc(t.eyebrow)}</p>
      <h1>${esc(t.hero)}</h1>
      <p class="lead">${esc(t.sub)}</p>
      <small>✓ ${esc(t.updated)}</small>
      <div class="page-hero-action">
        <a class="primary" href="https://findspreadsheet.com/" target="_blank" rel="noopener noreferrer">${esc(t.browse)} <span aria-hidden="true">↗</span></a>
      </div>
    </div>
    <aside class="tryon-board" aria-label="${esc(t.trending)}">
      <div class="tryon-head"><div><span class="live-dot"></span> ${esc(t.live)}</div><strong>FindSpreadsheet.com ↗</strong></div>
      <h2>${esc(t.trending)}</h2>
      <div class="tryon-window"><div class="tryon-track">${tryOnCards(t)}</div></div>
      <p>${esc(t.browse)} · FindSpreadsheet.com</p>
    </aside>
  </section>

  ${marketSection(locale)}

  ${buildLocalizedProductExplorer(locale, t)}

  <section class="brand-index" aria-labelledby="brand-index-title">
    <div class="brand-shell">
      <div class="brand-index-head">
        <div>
          <div class="brand-kicker"><p class="eyebrow">FindSpreadsheet.com</p><span>12</span></div>
          <h2 id="brand-index-title">${esc(t.explore)}</h2>
          <p>${esc(t.description)}</p>
        </div>
        <div class="brand-actions">
          <button aria-label="${esc(t.explore)} ←">←</button>
          <button aria-label="${esc(t.explore)} →">→</button>
          <a class="brand-view-all" href="https://findspreadsheet.com/" target="_blank" rel="noopener noreferrer">${esc(t.browse)} →</a>
        </div>
      </div>
      <div class="brand-rail-wrap"><div class="brand-grid">${brandCards(t)}</div></div>
      <div class="brand-progress"><span style="width:12%"></span></div>
      <p class="brand-disclaimer">${esc(t.disclaimer)}</p>
    </div>
  </section>

  <section class="editorial-section" aria-labelledby="editorial-title" id="guide">
    <div class="editorial-head">
      <div><p class="eyebrow">${esc(faq.eyebrow)}</p><h2 id="editorial-title">${esc(t.guide)}</h2><p>${esc(faq.intro)}</p></div>
      <span class="official-source-label">${esc(faq.official)}</span>
    </div>
    <div class="editorial-grid">${officialUpdateCards(locale)}</div>
    <div class="editorial-progress" aria-label="${esc(t.guide)}">
      <button type="button" aria-label="01" aria-current="true"></button>
      <button type="button" aria-label="02"></button>
      <button type="button" aria-label="03"></button>
    </div>
  </section>

  <section class="standards-section" aria-labelledby="standards-title">
    <div class="standards-copy"><p class="eyebrow">${esc(t.checked)}</p><h2 id="standards-title">${esc(t.directoryLabel)}</h2><p>${esc(t.disclaimer)}</p><a href="/faq#independent-site">${esc(t.nav[2])} →</a></div>
    <div class="standards-grid">
      <article><span aria-hidden="true">✓</span><div><h3>${esc(t.checked)}</h3><p>${esc(t.updated)}</p></div></article>
      <article><span aria-hidden="true">$</span><div><h3>${esc(t.prices)}</h3><p>${esc(t.description)}</p></div></article>
      <article><span aria-hidden="true">↻</span><div><h3>${esc(t.directoryLabel)}</h3><p>${esc(t.guideText)}</p></div></article>
      <article><span aria-hidden="true">i</span><div><h3>${esc(t.nav[2])}</h3><p>${esc(t.disclaimer)}</p></div></article>
    </div>
  </section>

  ${renderFaqSection(locale)}

  <footer id="about">
    <div><a class="brand" href="${routeFor(locale)}"><span>LoloBuy</span> Spreadsheet</a><p>${esc(t.disclaimer)}</p></div>
    <div><a href="/guides-beginner-guide">${esc(t.nav[1])}</a><a href="/faq/">${esc(faq.title)}</a><a href="/faq#affiliate-disclosure">${esc(t.checked)}</a><a href="/faq#independent-site">${esc(t.nav[2])}</a></div>
    <p>© 2026 LoloBuy Spreadsheet</p>
  </footer>
</main>
</body>
</html>
`;
};

for (const locale of locales) {
  const html = renderHomepage(locale);
  const directory = locale === "en" ? root : path.join(root, locale);
  const filePath =
    locale === "en"
      ? path.join(root, "index.html")
      : path.join(directory, "index.html");
  fs.mkdirSync(directory, { recursive: true });
  fs.writeFileSync(filePath, html);
}

const sitemapUrls = locales
  .map(
    (locale) =>
      `  <url><loc>${canonicalFor(locale)}</loc><lastmod>2026-08-17</lastmod></url>`,
  )
  .join("\n");

fs.writeFileSync(
  path.join(root, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls}\n</urlset>\n`,
);
fs.writeFileSync(
  path.join(root, "robots.txt"),
  "User-agent: *\nAllow: /\nSitemap: https://lolobuysheet.pro/sitemap.xml\n",
);

console.log(
  `Verified English and generated ${locales.length - 1} independent localized homepages.`,
);
