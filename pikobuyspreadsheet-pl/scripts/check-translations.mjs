import assert from "node:assert/strict";
import fs from "node:fs";

const locales = ["de", "fr", "es", "it", "nl", "pt", "pl"];
const required = [
  "Home",
  "Product categories",
  "Product details",
  "SEO articles",
  "Browse All Products",
  "Shoes",
  "Accessories",
  "How to Use a PikoBuy Spreadsheet Without Guessing",
  "PikoBuy QC Photo Guide: What You Can and Cannot Verify",
  "PikoBuy Shipping to Europe: Build a Realistic Parcel Estimate",
  "PikoBuy 5-Day Return Policy: Timing, Eligibility and Fees",
  "Is this the official PikoBuy website?",
  "How do I estimate shipping to Europe?",
  "Sources, limits and editorial policy.",
  "Independent product-research resource for international shoppers. Not affiliated with or endorsed by PikoBuy.",
];
const longBody = "A useful PikoBuy spreadsheet is a research tool, not a promise that every product is suitable. The goal is to move from a broad product idea to a short list whose source page, options, price, sizing and shipping implications you have actually checked.";

let baselineKeys;
for (const locale of locales) {
  const file = new URL(`../app/translations/${locale}.json`, import.meta.url);
  const dictionary = JSON.parse(fs.readFileSync(file, "utf8"));
  const keys = Object.keys(dictionary).sort();
  assert.ok(keys.length >= 470, `${locale} has only ${keys.length} translated strings`);
  assert.ok(Object.values(dictionary).every((value) => typeof value === "string" && value.trim()), `${locale} contains an empty translation`);
  for (const key of required) assert.ok(dictionary[key]?.trim(), `${locale} is missing: ${key}`);
  assert.ok(dictionary[longBody]?.trim(), `${locale} is missing a representative long-form article paragraph`);
  assert.notEqual(dictionary[longBody], longBody, `${locale} left a representative article paragraph in English`);
  if (!baselineKeys) baselineKeys = keys;
  else assert.deepEqual(keys, baselineKeys, `${locale} does not cover the same source strings as the other locales`);
}

console.log(`Translation coverage passed: ${locales.length} languages × ${baselineKeys.length} strings.`);
