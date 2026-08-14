import { readFile } from "node:fs/promises";
import { articles } from "../app/lib/site-data.ts";
import { deepGuides } from "../app/lib/deep-guides.ts";
import { expandedGuides } from "../app/lib/expanded-guides.ts";
import { faqItems } from "../app/lib/faq-data.ts";
import { hubGuides } from "../app/lib/hub-guides.ts";
import { articleRoute } from "../app/lib/routing.ts";
import { productionOrigin } from "../app/lib/seo.ts";

const launchMode = process.argv.includes("--launch");
const expectedHost = "pikobuyspreadsheet.cc";
const failures = [];
const checks = [];
const pass = (message) => checks.push(`PASS  ${message}`);
const fail = (message) => failures.push(`FAIL  ${message}`);
const assert = (condition, message) => condition ? pass(message) : fail(message);

const guides = { ...deepGuides, ...hubGuides, ...expandedGuides };
const words = (value) => value.match(/[A-Za-z0-9][A-Za-z0-9'’–-]*/g) || [];
const pageText = (article) => {
  const guide = guides[article.slug];
  const faq = article.slug === "faq" ? faqItems.flatMap((item) => [item.question, item.answer]) : [];
  return [
    article.title, article.summary, article.quickAnswer,
    ...article.facts, ...article.checks, ...article.mistakes,
    guide?.sourceContext || "",
    ...(guide?.sections || []).flatMap((section) => [section.title, ...section.paragraphs, ...(section.points || []), section.callout || ""]),
    ...faq,
  ].join(" ");
};

assert(productionOrigin === `https://${expectedHost}`, `canonical origin is https://${expectedHost}`);
assert(articles.length === 40, "English route inventory contains exactly 40 articles");
const routes = articles.map((item) => articleRoute(item.slug));
assert(new Set(routes).size === routes.length, "every English article has a unique formal route");
assert(routes.every((route) => !route.includes("/preview/") && !route.includes("workbench")), "no formal route contains a preview or theme path");
assert(faqItems.length >= 10 && faqItems.length <= 15, "FAQ contains 10–15 questions");

const contentDocuments = [];
for (const article of articles) {
  const text = pageText(article);
  const count = words(text).length;
  contentDocuments.push({ slug: article.slug, text, count });
  if (count < 1200 || count > 1800) fail(`${articleRoute(article.slug)} has ${count} editorial words; expected 1200–1800`);
  const statedMinutes = Number.parseInt(article.read, 10);
  const calculatedMinutes = Math.ceil(count / 200);
  if (!Number.isFinite(statedMinutes) || Math.abs(statedMinutes - calculatedMinutes) > 1) {
    fail(`${articleRoute(article.slug)} states ${article.read}; ${count} words calculate to about ${calculatedMinutes} minutes`);
  }
}
if (!failures.some((item) => item.includes("editorial words"))) pass("all 40 English routes contain 1,200–1,800 editorial words");
if (!failures.some((item) => item.includes("minutes"))) pass("stated reading times match a 200-word-per-minute review within one minute");

const ngrams = (text, size = 5) => {
  const tokens = words(text.toLowerCase());
  return new Set(Array.from({ length: Math.max(0, tokens.length - size + 1) }, (_, index) => tokens.slice(index, index + size).join(" ")));
};
const gramDocuments = contentDocuments.map((item) => ({ ...item, grams: ngrams(item.text) }));
let highestOverlap = { score: 0, first: "", second: "" };
for (let first = 0; first < gramDocuments.length; first += 1) {
  for (let second = first + 1; second < gramDocuments.length; second += 1) {
    let intersection = 0;
    for (const gram of gramDocuments[first].grams) if (gramDocuments[second].grams.has(gram)) intersection += 1;
    const union = gramDocuments[first].grams.size + gramDocuments[second].grams.size - intersection;
    const score = union ? intersection / union : 0;
    if (score > highestOverlap.score) highestOverlap = { score, first: gramDocuments[first].slug, second: gramDocuments[second].slug };
  }
}
assert(highestOverlap.score <= 0.52, `highest pairwise five-word overlap is ${(highestOverlap.score * 100).toFixed(1)}% (${highestOverlap.first} vs ${highestOverlap.second})`);

const productFeed = JSON.parse(await readFile(new URL("../app/lib/latest-products.generated.json", import.meta.url), "utf8"));
assert(productFeed.products?.length === 8, "product showcase contains exactly eight refreshed records");
assert(productFeed.products?.every((item) => item.url?.startsWith("https://findspreadsheet.com/") && item.image?.startsWith("http")), "every product keeps an exact FindSpreadsheet URL and image");
const ageDays = (Date.now() - Date.parse(`${productFeed.checkedAt}T23:59:59-07:00`)) / 86_400_000;
assert(Number.isFinite(ageDays) && ageDays <= Number(process.env.MAX_PRODUCT_AGE_DAYS || 3), `product snapshot is no older than ${process.env.MAX_PRODUCT_AGE_DAYS || 3} days`);

const requestedLocales = (process.env.INDEXABLE_LOCALES || "en").split(",").map((item) => item.trim()).filter(Boolean);
const approvedLocales = new Set((process.env.QA_APPROVED_LOCALES || "en").split(",").map((item) => item.trim()).filter(Boolean));
assert(requestedLocales.every((locale) => approvedLocales.has(locale)), "every requested indexable locale has human-QA approval");
assert(requestedLocales.every((locale) => locale === "en"), "formal launch opens English indexing only");

if (launchMode) {
  assert(process.env.FORMAL_DOMAIN_CONFIRMED === expectedHost, "formal-domain confirmation matches the canonical host");
  assert(process.env.SITE_INDEXABLE === "true", "SITE_INDEXABLE=true is explicitly enabled for launch");
} else {
  assert(process.env.SITE_INDEXABLE !== "true", "review build remains noindex");
  pass("launch-only DNS, TLS and Search Console actions were not executed");
}

console.log([...checks, ...failures].join("\n"));
if (failures.length) {
  console.error(`\nPreflight failed with ${failures.length} issue(s).`);
  process.exit(1);
}
console.log(`\n${launchMode ? "Formal-domain launch" : "Review"} preflight passed.`);
