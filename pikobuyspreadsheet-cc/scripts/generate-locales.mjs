import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import { articles, categoryDestinations, getCopy, languages, primarySources, products } from "../app/lib/site-data.ts";
import { deepGuides } from "../app/lib/deep-guides.ts";
import { hubGuides } from "../app/lib/hub-guides.ts";
import { UI_STRINGS } from "../app/lib/ui-strings.ts";

const outDir = new URL("../app/lib/locales/", import.meta.url);

function add(set, value) {
  if (typeof value === "string" && /[A-Za-z]/.test(value)) set.add(value.trim());
  else if (Array.isArray(value)) value.forEach((item) => add(set, item));
  else if (value && typeof value === "object") Object.values(value).forEach((item) => add(set, item));
}

const strings = new Set();
add(strings, getCopy("en"));
add(strings, UI_STRINGS);
for (const product of products) add(strings, [product.name, product.category, product.id, product.note]);
for (const category of categoryDestinations) add(strings, [category.label, category.description, category.imageAlt]);
for (const article of articles) add(strings, [article.title, article.group, article.read, article.summary, article.quickAnswer, article.facts, article.checks, article.mistakes, article.sourceLabel]);
for (const source of primarySources) add(strings, source.label);
add(strings, deepGuides);
add(strings, hubGuides);
const sourceStrings = [...strings];

function batches(values, maxChars = 9000) {
  const result = [];
  let current = [];
  let size = 0;
  for (const value of values) {
    const markedSize = value.length + 16;
    if (current.length && size + markedSize > maxChars) {
      result.push(current);
      current = [];
      size = 0;
    }
    current.push(value);
    size += markedSize;
  }
  if (current.length) result.push(current);
  return result;
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function decodeHtml(value) {
  return value
    .replace(/<br\s*\/?\s*>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

async function requestMobileTranslation(locale, values) {
  const requestSize = values.reduce((total, value) => total + value.length + 16, 0);
  if (requestSize > 3200 && values.length > 1) {
    const middle = Math.ceil(values.length / 2);
    return [
      ...(await requestMobileTranslation(locale, values.slice(0, middle))),
      ...(await requestMobileTranslation(locale, values.slice(middle))),
    ];
  }
  const text = values.map((value, index) => `[TR${String(index).padStart(4, "0")}] ${value}`).join("\n");
  const response = await fetch(`https://translate.google.com/m?sl=en&tl=${encodeURIComponent(locale)}&q=${encodeURIComponent(text)}`);
  if (!response.ok) throw new Error(`mobile ${response.status} ${response.statusText}`);
  const html = await response.text();
  const container = html.match(/class="result-container"[^>]*>([\s\S]*?)<\/div>/i)?.[1];
  if (!container) throw new Error("mobile result missing");
  const translated = decodeHtml(container);
  const found = new Map();
  const pattern = /\[TR(\d{4})\]\s*([\s\S]*?)(?=\n?\[TR\d{4}\]|$)/g;
  for (const match of translated.matchAll(pattern)) found.set(Number(match[1]), match[2].trim());
  if (found.size !== values.length) {
    if (values.length === 1) return [translated.replace(/^\[TR0000\]\s*/, "").trim()];
    const middle = Math.ceil(values.length / 2);
    return [
      ...(await requestMobileTranslation(locale, values.slice(0, middle))),
      ...(await requestMobileTranslation(locale, values.slice(middle))),
    ];
  }
  return values.map((_, index) => found.get(index));
}

async function requestTranslation(locale, values, attempt = 0) {
  const single = values.length === 1;
  const text = single ? values[0] : values.map((value, index) => `[TR${String(index).padStart(4, "0")}] ${value}`).join("\n");
  const body = new URLSearchParams({ client: "gtx", sl: "en", tl: locale, dt: "t", q: text });
  try {
    const response = await fetch("https://translate.googleapis.com/translate_a/single", {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded;charset=UTF-8" },
      body,
    });
    if (response.status === 429) return requestMobileTranslation(locale, values);
    if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
    const data = await response.json();
    const translated = data[0].map((part) => part[0]).join("");
    if (single) return [translated.trim()];
    const found = new Map();
    const pattern = /\[TR(\d{4})\]\s*([\s\S]*?)(?=\n?\[TR\d{4}\]|$)/g;
    for (const match of translated.matchAll(pattern)) found.set(Number(match[1]), match[2].trim());
    if (found.size !== values.length) throw new Error(`marker mismatch ${found.size}/${values.length}`);
    return values.map((_, index) => found.get(index));
  } catch (error) {
    if (String(error).includes("marker mismatch") && values.length > 1) {
      const middle = Math.ceil(values.length / 2);
      return [
        ...(await requestTranslation(locale, values.slice(0, middle))),
        ...(await requestTranslation(locale, values.slice(middle))),
      ];
    }
    if (attempt >= 4) throw error;
    await sleep(String(error).includes("429") ? 8000 * (attempt + 1) : 800 * (attempt + 1));
    return requestTranslation(locale, values, attempt + 1);
  }
}

async function translateLocale(locale) {
  const outputUrl = new URL(`${locale}.json`, outDir);
  let dictionary = {};
  if (process.argv.includes("--missing")) {
    try { dictionary = JSON.parse(await readFile(outputUrl, "utf8")); } catch {}
  } else if (!process.argv.includes("--force")) {
    try {
      await access(outputUrl);
      process.stdout.write(`${locale} already generated\n`);
      return;
    } catch {}
  }
  const pendingStrings = process.argv.includes("--missing") ? sourceStrings.filter((value) => !dictionary[value]) : sourceStrings;
  if (!pendingStrings.length) {
    process.stdout.write(`${locale} complete\n`);
    return;
  }
  const chunks = batches(pendingStrings);
  for (let index = 0; index < chunks.length; index += 1) {
    const chunk = chunks[index];
    const translated = await requestTranslation(locale, chunk);
    chunk.forEach((source, itemIndex) => { dictionary[source] = translated[itemIndex]; });
    process.stdout.write(`${locale} ${index + 1}/${chunks.length}\n`);
    await sleep(120);
  }
  await writeFile(outputUrl, `${JSON.stringify(dictionary, null, 2)}\n`);
}

await mkdir(outDir, { recursive: true });
await writeFile(new URL("en.json", outDir), "{}\n");
const locales = languages.map(([code]) => code).filter((code) => code !== "en");
const queue = [...locales];
const workerCount = process.argv.includes("--missing") ? 2 : 4;
await Promise.all(Array.from({ length: workerCount }, async () => {
  while (queue.length) await translateLocale(queue.shift());
}));

process.stdout.write(`Generated ${locales.length} locale dictionaries with ${sourceStrings.length} strings each.\n`);
