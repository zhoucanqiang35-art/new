import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { faqCopy } from "../public/faq-copy.mjs";
import { seoArticles } from "../public/seo-article-copy.mjs";

const publicRoot = path.resolve("public");
const read = (name) => fs.readFileSync(path.join(publicRoot, name), "utf8");

test("English static pages do not contain stale Vinext runtime hints", () => {
  const files = [
    "index.html",
    "products/index.html",
    "guides-qc-photos/index.html",
    "guides-shipping/index.html",
    "guides-beginner-guide/index.html",
    "faq/index.html",
    "seo-articles/index.html",
    ...seoArticles.map((article) => `seo-articles/${article.slug}/index.html`),
  ];

  for (const file of files) {
    const html = read(file);
    assert.doesNotMatch(html, /rel=["']modulepreload["']/i, file);
    assert.doesNotMatch(html, /__VINEXT_RSC_/i, file);
    assert.match(html, /<script defer src="\/assets\/header-navigation\.js"><\/script>/i, file);
  }
});

test("homepage product explorer always loads its layout stylesheet", () => {
  const html = read("index.html");
  assert.match(html, /href="\/assets\/seo-enhancements\.css"/);
  assert.match(html, /class="verified-product-grid"/);
});

test("home searchable categories use ten unique local product images", () => {
  const html = read("index.html");
  const images = [
    ...html.matchAll(
      /<article class="verified-product"[\s\S]*?<img src="(\/assets\/categories\/[^"]+\.webp)"/g,
    ),
  ].map((match) => match[1]);

  assert.equal(images.length, 10);
  assert.equal(new Set(images).size, 10);
  for (const image of images) {
    assert.ok(fs.existsSync(path.join(publicRoot, image)), image);
  }
});

test("brand carousel and QC article navigation have complete hooks", () => {
  const home = read("index.html");
  const navigation = read("assets/header-navigation.js");
  const qc = read("guides-qc-photos/index.html");

  assert.equal(
    [...home.matchAll(/class="brand-grid"[\s\S]*?<\/div>/g)][0]?.[0].match(/<a\b/g)?.length,
    12,
  );
  assert.match(navigation, /brandRail\.animate\(/);
  assert.match(navigation, /brandRail\.dataset\.autoplay = "true"/);
  assert.match(navigation, /const mobileFaq = window\.matchMedia\("\(max-width: 760px\)"\)/);
  assert.match(navigation, /item\.removeAttribute\("open"\)/);

  for (const id of [
    "official-scope",
    "review-order",
    "red-flags",
    "packaging",
    "limits",
    "final-check",
  ]) {
    assert.match(qc, new RegExp(`href="/guides-qc-photos/#${id}"`));
    assert.match(qc, new RegExp(`id="${id}"`));
  }
});

test("FindSpreadsheet links open safely in a new tab", () => {
  const files = [
    "index.html",
    "products/index.html",
    "guides-qc-photos/index.html",
    "fr/index.html",
    "ja/index.html",
    "ar/index.html",
  ];

  for (const file of files) {
    const html = read(file);
    const links = [
      ...html.matchAll(
        /<a\b[^>]*href="https:\/\/findspreadsheet\.com\/[^"]*"[^>]*>/gi,
      ),
    ].map((match) => match[0]);
    assert.ok(links.length > 0, `${file} has no main-site links`);
    for (const link of links) {
      assert.match(link, /target="_blank"/i, `${file}: ${link}`);
      assert.match(link, /rel="noopener noreferrer"/i, `${file}: ${link}`);
    }
  }
});

test("all clickable off-site links point only to FindSpreadsheet", () => {
  const htmlFiles = [];
  const collect = (directory) => {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const file = path.join(directory, entry.name);
      if (entry.isDirectory()) collect(file);
      else if (entry.name.endsWith(".html")) htmlFiles.push(file);
    }
  };
  collect(publicRoot);

  for (const file of htmlFiles) {
    const html = fs.readFileSync(file, "utf8");
    for (const match of html.matchAll(/<a\b[^>]*href="(https?:\/\/[^"]+)"[^>]*>/gi)) {
      const host = new URL(match[1].replaceAll("&amp;", "&")).hostname.replace(/^www\./, "");
      assert.ok(
        host === "findspreadsheet.com" || host === "lolobuysheet.pro",
        `${path.relative(publicRoot, file)} links to ${host}`,
      );
    }
  }
});

test("every homepage uses the uploaded logo and independent FAQ navigation", () => {
  for (const locale of ["", "de", "fr", "es", "ja", "ar", "zh"]) {
    const html = read(locale ? `${locale}/index.html` : "index.html");
    const header = html.match(/<header class="site-header">[\s\S]*?<\/header>/i)?.[0] ?? "";
    const desktop = header.match(/<nav class="primary-nav"[\s\S]*?<\/nav>/i)?.[0] ?? "";
    assert.match(header, /src="\/assets\/lolobuy-logo\.svg"/);
    assert.match(desktop, /href="\/faq\/"[^>]*>FAQ<\/a>/i);
    assert.doesNotMatch(desktop, /href="#faq"/i);
    assert.match(html, /href="\/assets\/mobile-compact\.css"/i);
  }
});

test("English navigation exposes the independent SEO article hub", () => {
  for (const file of ["index.html", "faq/index.html", "seo-articles/index.html"]) {
    const html = read(file);
    const header = html.match(/<header class="site-header">[\s\S]*?<\/header>/i)?.[0] ?? "";
    const desktop = header.match(/<nav class="primary-nav"[\s\S]*?<\/nav>/i)?.[0] ?? "";
    const mobile = header.match(/<details class="header-mobile-menu"[\s\S]*?<\/details>/i)?.[0] ?? "";
    assert.match(desktop, /href="\/seo-articles\/"[^>]*>SEO Articles<\/a>/i, file);
    assert.match(mobile, /href="\/seo-articles\/"[^>]*>SEO Articles<\/a>/i, file);
  }
});

test("official shipping and beginner guides contain verified decision rules", () => {
  const shipping = read("guides-shipping/index.html");
  const beginner = read("guides-beginner-guide/index.html");

  for (const expected of [
    "L × W × H (cm) ÷ 6000",
    "L × W × H (cm) ÷ 5000",
    "cannot be returned or exchanged",
    "two working days",
    "Official information checked August 17, 2026",
  ]) {
    assert.match(shipping, new RegExp(expected.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }

  for (const expected of [
    "Current official rule: 90 days free storage",
    "with 3–6 standard photos",
    "Product + domestic freight",
    "Official information checked August 17, 2026",
  ]) {
    assert.match(beginner, new RegExp(expected.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
});

test("English FAQ answers use the latest official figures and notice", () => {
  const home = read("index.html");

  assert.match(home, /3–6 standard QC photos/);
  assert.match(home, /current official homepage states 90 days/);
  assert.match(home, /90 days of free storage/);
  assert.match(home, /cannot be returned or exchanged/);
  assert.match(home, /href="\/guides-shipping\/#packaging"/);
  assert.match(
    home,
    /href="\/guides-beginner-guide\/#storage-consolidation"/,
  );
  assert.match(home, /href="\/guides-shipping\/#billable-weight"/);
});

test("independent FAQ page mirrors the homepage ten-card FAQ source", () => {
  const home = read("index.html");
  const faqPage = read("faq/index.html");
  const escapeHtml = (value) => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

  assert.match(faqPage, /data-faq-source="shared"/);
  assert.equal([...faqPage.matchAll(/<details name="lolobuy-independent-faq"/g)].length, 10);
  assert.match(faqPage, /"@type":"FAQPage"/);
  assert.match(faqPage, /href="\/assets\/faq-section\.css"/);
  assert.match(faqPage, /class="faq-research-record"/);
  assert.match(faqPage, /standard inspection scope/);
  assert.match(faqPage, /estimated, real and volumetric weight guidance/);

  for (const [question, answer] of faqCopy.en.items) {
    const expectedQuestion = `<summary>${escapeHtml(question)}</summary>`;
    const expectedAnswer = `<p>${escapeHtml(answer)}</p>`;
    assert.ok(home.includes(expectedQuestion), `homepage is missing: ${question}`);
    assert.ok(faqPage.includes(expectedQuestion), `FAQ page is missing: ${question}`);
    assert.ok(home.includes(expectedAnswer), `homepage answer is missing: ${question}`);
    assert.ok(faqPage.includes(expectedAnswer), `FAQ page answer is missing: ${question}`);
  }

  assert.doesNotMatch(faqPage, /Find a product and check the original listing/);
  assert.doesNotMatch(faqPage, /Order through your chosen shopping agent/);
});

test("SEO article hub publishes fact-checked long-form English guides", () => {
  const hub = read("seo-articles/index.html");
  const sitemap = read("sitemap.xml");

  assert.ok(seoArticles.length >= 4);
  assert.match(hub, /Detailed English guides written for real buying decisions/);
  assert.equal([...hub.matchAll(/class="seo-article-card"/g)].length, seoArticles.length);

  for (const article of seoArticles) {
    const file = `seo-articles/${article.slug}/index.html`;
    const html = read(file);
    const plainText = article.content
      .replace(/<[^>]+>/g, " ")
      .replace(/&[a-z0-9#]+;/gi, " ");
    const wordCount = (plainText.match(/\b[A-Za-z]+(?:['’-][A-Za-z]+)?\b/g) ?? []).length;

    assert.ok(wordCount >= 1200, `${article.slug}: only ${wordCount} words`);
    assert.ok(wordCount <= 1800, `${article.slug}: ${wordCount} words exceeds 1800`);
    assert.match(html, new RegExp(`<h1>${article.title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}</h1>`));
    assert.match(html, /class="article-research-note"/);
    assert.match(html, /class="article-sources"/);
    assert.match(html, /"@type":"Article"/);
    assert.match(html, /"@type":"FAQPage"/);
    assert.match(html, /"datePublished":"2026-/);
    assert.match(html, /"dateModified":"2026-/);
    assert.match(html, /"author":\{"@type":"Organization","name":"LoloBuySheet Editorial Team"\}/);
    assert.match(html, /By LoloBuySheet Editorial Team/);
    assert.doesNotMatch(html, /href="https:\/\/www\.lolobuy\.com/i);
    assert.match(sitemap, new RegExp(`https://lolobuysheet\\.pro/seo-articles/${article.slug}/`));
  }
});
