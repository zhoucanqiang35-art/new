import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";

const publicRoot = path.resolve("public");
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

const routeFor = (locale) => (locale === "en" ? "/" : `/${locale}/`);
const fileFor = (locale) =>
  locale === "en"
    ? path.join(publicRoot, "index.html")
    : path.join(publicRoot, locale, "index.html");
const read = (locale) => fs.readFileSync(fileFor(locale), "utf8");
const count = (html, pattern) => [...html.matchAll(pattern)].length;

test("all 24 language routes have real static HTML files", () => {
  for (const locale of locales) {
    assert.ok(fs.existsSync(fileFor(locale)), `${locale} is missing`);
    assert.ok(fs.statSync(fileFor(locale)).size > 5_000, `${locale} is too small`);
  }
});

test("localized pages have independent language and SEO metadata", () => {
  const titles = new Set();
  const descriptions = new Set();

  for (const locale of locales) {
    const html = read(locale);
    const title = html.match(/<title>([^<]+)<\/title>/i)?.[1];
    const description = html.match(
      /<meta name="description" content="([^"]+)"/i,
    )?.[1];

    assert.match(html, new RegExp(`<html[^>]+lang="${locale}"`, "i"));
    assert.match(
      html,
      new RegExp(
        `<link rel="canonical" href="https://lolobuysheet\\.pro${routeFor(locale)}"`,
        "i",
      ),
    );
    assert.ok(title && title.length > 20, `${locale} title is incomplete`);
    assert.ok(
      description && description.length > 40,
      `${locale} description is incomplete`,
    );
    titles.add(title);
    descriptions.add(description);
  }

  assert.equal(titles.size, locales.length, "titles must be language-specific");
  assert.equal(
    descriptions.size,
    locales.length,
    "descriptions must be language-specific",
  );
});

test("every localized page links to all 24 real language routes", () => {
  const english = read("en");
  for (const targetLocale of locales.filter((code) => code !== "en")) {
    assert.match(
      english,
      new RegExp(`<option value="${routeFor(targetLocale)}"`, "i"),
      `English does not link to ${targetLocale}`,
    );
  }

  for (const locale of locales.filter((code) => code !== "en")) {
    const html = read(locale);
    const brandStart = html.indexOf('<div class="brand-grid">');
    const brandEnd = html.indexOf(
      '<div class="brand-progress">',
      brandStart,
    );
    const brandDirectory = html.slice(brandStart, brandEnd);

    for (const targetLocale of locales) {
      assert.match(
        html,
        new RegExp(
          `<option value="${routeFor(targetLocale)}"`,
          "i",
        ),
        `${locale} does not link to ${targetLocale}`,
      );
      assert.match(
        html,
        new RegExp(`hreflang="${targetLocale}"`, "i"),
        `${locale} is missing hreflang ${targetLocale}`,
      );
    }

    assert.equal(
      count(html, /class="tryon-card"/g),
      6,
      `${locale} must contain the same six hero carousel cards as English`,
    );
    assert.equal(
      count(html, /<article class="verified-product"/g),
      10,
      `${locale} must contain ten translated categories`,
    );
    assert.equal(
      count(brandDirectory ?? "", /<a\b/g),
      12,
      `${locale} must contain the same twelve brand cards as English`,
    );
    assert.doesNotMatch(html, /href=(?:""|'')/i);
    assert.doesNotMatch(html, /javascript:void|translation missing/i);
    assert.ok(!html.includes("TODO"), `${locale} contains a TODO marker`);
  }
});

test("localized homepages preserve the shared layout and English includes the searchable directory", () => {
  const expectedSections = [
    "site-header",
    "page-hero home-hero-grid",
    "market-focus",
    "product-explorer",
    "brand-index",
    "editorial-section",
    "standards-section",
    "homepage-faq",
    "footer",
  ];
  const sectionSignature = (html) =>
    [...html.matchAll(/<(?:header|section|footer)\b[^>]*>/gi)].map((match) => {
      if (match[0].startsWith("<footer")) return "footer";
      return match[0].match(/\bclass="([^"]+)"/i)?.[1] ?? "";
    });

  for (const locale of locales) {
    const html = read(locale);
    assert.deepEqual(
      sectionSignature(html),
      expectedSections,
      `${locale} must follow the English module order`,
    );
    assert.equal(
      count(html, /class="verified-product"/g),
      10,
      `${locale} must contain the English ten-card directory layout`,
    );
    assert.match(html, /href="\/assets\/seo-enhancements\.css"/, locale);
    assert.equal(
      count(html, /class="editorial-card(?:\s[^"]*)?"/g),
      3,
      locale,
    );
    assert.equal(
      count(html, /class="editorial-card official-update-card"/g),
      3,
      `${locale} must contain three official update cards`,
    );
    assert.equal(count(html, /<article>/g), 7, locale);
    assert.match(
      html,
      /href="\/assets\/local-preview-navigation-BOM0kmjo\.css"/,
      `${locale} must use the English layout stylesheet`,
    );
    assert.doesNotMatch(
      html,
      /localized-pages\.css|locale-header|locale-hero|locale-products|locale-guide/,
      `${locale} contains a legacy alternate layout`,
    );
  }
});

test("every language homepage searches matching products on FindSpreadsheet", () => {
  for (const locale of locales) {
    const html = read(locale);
    const form = html.match(/<form class="product-main-search"[\s\S]*?<\/form>/i)?.[0] ?? "";

    assert.match(form, /action="https:\/\/findspreadsheet\.com\/search\.html"/i, locale);
    assert.match(form, /method="get"/i, locale);
    assert.match(form, /target="_blank"/i, locale);
    assert.match(form, /<input[^>]+name="keywords"[^>]+required/i, locale);
    assert.match(form, /<input[^>]+name="channelid"[^>]+value="2"/i, locale);
    assert.match(form, /<button type="submit">[^<]+↗<\/button>/i, locale);
  }
});

test("Arabic uses right-to-left layout and sitemap lists all routes", () => {
  assert.match(read("ar"), /<html[^>]+dir="rtl"/i);
  const sitemap = fs.readFileSync(
    path.join(publicRoot, "sitemap.xml"),
    "utf8",
  );

  for (const locale of locales) {
    assert.ok(
      sitemap.includes(`<loc>https://lolobuysheet.pro${routeFor(locale)}</loc>`),
      `sitemap is missing ${locale}`,
    );
  }
});

test("every language homepage has a localized ten-item FAQ", () => {
  const titles = new Set();

  for (const locale of locales) {
    const html = read(locale);
    const faq = html.match(
      /<!-- homepage-faq:start -->([\s\S]*?)<!-- homepage-faq:end -->/i,
    )?.[1];
    const title = faq?.match(
      /<h2 id="homepage-faq-title">([^<]+)<\/h2>/i,
    )?.[1];

    assert.ok(faq, `${locale} FAQ section is missing`);
    assert.equal(
      count(faq, /<details name="lolobuy-homepage-faq"/g),
      10,
      `${locale} FAQ must contain ten questions`,
    );
    assert.match(faq, /"@type":"FAQPage"/);
    assert.match(html, /href="\/assets\/faq-section\.css"/);
    assert.match(html, /href="\/assets\/mobile-compact\.css"/);
    assert.ok(title, `${locale} FAQ title is missing`);
    titles.add(title);
  }

  assert.equal(titles.size, locales.length, "FAQ titles must be localized");
  assert.match(read("zh"), />LoloBuy 常见问题解答<\/h2>/);
});

test("latest updates open the matching on-site article sections in every language", () => {
  for (const locale of locales) {
    const html = read(locale);
    const updates = html.match(
      /<section class="editorial-section"[\s\S]*?<\/section>/i,
    )?.[0];

    assert.ok(updates, `${locale} latest-updates section is missing`);
    assert.match(updates, /href="\/guides-shipping\/#packaging"/);
    assert.match(
      updates,
      /href="\/guides-beginner-guide\/#storage-consolidation"/,
    );
    assert.match(updates, /href="\/guides-shipping\/#billable-weight"/);
    assert.match(updates, />14 JUL 2026</);
    assert.match(updates, />90 DAYS</);
    assert.match(updates, />÷6000 \/ ÷5000</);
    assert.match(updates, /class="editorial-progress"/);
    assert.equal(
      count(updates, /<button type="button" aria-label="0[1-3]"/g),
      3,
    );
    assert.doesNotMatch(updates, /href="#faq"/);
    assert.doesNotMatch(
      updates,
      /href="\/guides-(?:shipping|beginner-guide)#[^"]+"[^>]*target="_blank"/,
      `${locale} article cards must stay in the current site`,
    );
  }

  const chinese = read("zh");
  assert.match(chinese, /明确提供 90 天免费仓储/);
  assert.match(chinese, /商品不能退货或换货/);
  assert.match(chinese, /DHL 按÷5000/);
});
