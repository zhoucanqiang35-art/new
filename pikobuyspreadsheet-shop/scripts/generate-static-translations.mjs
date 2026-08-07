import { mkdir, writeFile } from "node:fs/promises";

const site = "https://pikobuyspreadsheet-shop.canqiangzhou32.chatgpt.site";
const routes = [
  "/", "/finds", "/qc-method", "/guides", "/sources", "/seo-articles",
  "/guides/qc-photos", "/guides/shipping", "/guides/returns",
  "/seo-articles/pikobuy-spreadsheet-guide-2026",
  "/seo-articles/pikobuy-shipping-cost-fees-2026",
  "/seo-articles/pikobuy-qc-returns-guide-2026",
  "/preview/alpine", "/preview/archive", "/preview/nordic",
];

const languages = [
  "de", "es", "fr", "it", "nl", "pl", "pt", "cs", "ro", "hu", "sv", "da",
  "no", "fi", "tr", "el", "uk", "bg", "ru", "ar", "ja", "ko", "zh-CN",
];
const targetAliases = { "zh-CN": "zh" };
const requestedLanguages = new Set(process.argv.slice(2));
const neverTranslate = new Set([
  "PikoBuy", "FindSpreadsheet", "PikoBuy Spreadsheet", "QC", "EN", "DE", "ES",
  "FR", "IT", "NL", "PL", "PT", "CS", "RO", "HU", "SV", "DA", "NO", "FI",
  "TR", "EL", "UK", "BG", "RU", "AR", "JA", "KO", "ZH",
]);

function decodeEntities(value) {
  return value
    .replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&quot;/g, '"')
    .replace(/&apos;|&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)));
}

function normalize(value) {
  return decodeEntities(value).replace(/\s+/g, " ").trim();
}

function escapeHtml(value) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function shouldTranslate(text) {
  if (!text || neverTranslate.has(text) || text.length < 2) return false;
  if (/^(?:https?:\/\/|\/|#)/i.test(text) || !/[A-Za-z]/.test(text)) return false;
  if (/^[A-Z]{1,4}$/.test(text) || /^[\d\s.,:/+×·¥$%–—-]+$/.test(text)) return false;
  return true;
}

function collectFromHtml(html, output) {
  const clean = html
    .replace(/<script\b[\s\S]*?<\/script>/gi, "")
    .replace(/<style\b[\s\S]*?<\/style>/gi, "")
    .replace(/<svg\b[\s\S]*?<\/svg>/gi, "");
  for (const match of clean.matchAll(/>([^<>]+)</g)) {
    const text = normalize(match[1]);
    if (shouldTranslate(text)) output.add(text);
  }
  for (const match of clean.matchAll(/\b(?:placeholder|aria-label|title|alt)=(?:"([^"]+)"|'([^']+)')/gi)) {
    const text = normalize(match[1] ?? match[2]);
    if (shouldTranslate(text)) output.add(text);
  }
}

function chunksFor(texts, maxChars = 3900) {
  const chunks = [];
  let current = [];
  let size = 0;
  for (const item of texts) {
    const nextSize = item.text.length + 24;
    if (current.length && size + nextSize > maxChars) {
      chunks.push(current);
      current = [];
      size = 0;
    }
    current.push(item);
    size += nextSize;
  }
  if (current.length) chunks.push(current);
  return chunks;
}

async function translateChunk(chunk, language, attempt = 1) {
  const input = chunk.map(({ id, text }) => `<span data-zxq="${id}">${escapeHtml(text)}</span>`).join("");
  const url = new URL("https://translate.googleapis.com/translate_a/single");
  url.searchParams.set("client", "gtx");
  url.searchParams.set("sl", "en");
  url.searchParams.set("tl", language);
  url.searchParams.set("dt", "t");
  url.searchParams.set("q", input);
  try {
    const response = await fetch(url, { signal: AbortSignal.timeout(30000) });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    const translated = data[0].map((part) => part[0]).join("");
    const result = new Map();
    const marker = /<span data-zxq="(\d+)">([\s\S]*?)<\/span>/g;
    for (const match of translated.matchAll(marker)) result.set(Number(match[1]), decodeEntities(match[2].trim()));
    if (result.size !== chunk.length) {
      if (chunk.length === 1) {
        const fallbackUrl = new URL("https://translate.googleapis.com/translate_a/single");
        fallbackUrl.searchParams.set("client", "gtx");
        fallbackUrl.searchParams.set("sl", "en");
        fallbackUrl.searchParams.set("tl", language);
        fallbackUrl.searchParams.set("dt", "t");
        fallbackUrl.searchParams.set("q", chunk[0].text);
        const fallbackResponse = await fetch(fallbackUrl, { signal: AbortSignal.timeout(30000) });
        const fallbackData = await fallbackResponse.json();
        return new Map([[chunk[0].id, fallbackData[0].map((part) => part[0]).join("").trim()]]);
      }
      const middle = Math.ceil(chunk.length / 2);
      const [left, right] = await Promise.all([
        translateChunk(chunk.slice(0, middle), language, attempt),
        translateChunk(chunk.slice(middle), language, attempt),
      ]);
      return new Map([...left, ...right]);
    }
    return result;
  } catch (error) {
    if (attempt >= 4) throw error;
    await new Promise((resolve) => setTimeout(resolve, 750 * attempt));
    return translateChunk(chunk, language, attempt + 1);
  }
}

async function withConcurrency(tasks, limit) {
  const results = new Array(tasks.length);
  let cursor = 0;
  async function worker() {
    while (cursor < tasks.length) {
      const index = cursor++;
      results[index] = await tasks[index]();
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, tasks.length) }, worker));
  return results;
}

const phrases = new Set();
for (const route of routes) {
  const response = await fetch(`${site}${route}`);
  if (!response.ok) throw new Error(`Could not read ${route}: ${response.status}`);
  collectFromHtml(await response.text(), phrases);
}

const sourceTexts = [...phrases].sort((a, b) => a.localeCompare(b));
const indexed = sourceTexts.map((text, id) => ({ id, text }));
const sourceChunks = chunksFor(indexed);
console.log(`Collected ${sourceTexts.length} visible English phrases in ${sourceChunks.length} batches per language.`);

const translationsDirectory = new URL("../app/translations/", import.meta.url);
await mkdir(translationsDirectory, { recursive: true });
for (const target of languages.filter((item) => !requestedLanguages.size || requestedLanguages.has(targetAliases[item] ?? item))) {
  const translatedChunks = await withConcurrency(
    sourceChunks.map((chunk) => () => translateChunk(chunk, target)), 8,
  );
  const byId = new Map();
  for (const chunk of translatedChunks) for (const [id, value] of chunk) byId.set(id, value);
  const missing = indexed.filter(({ id }) => !byId.has(id));
  if (missing.length) {
    const repaired = await withConcurrency(
      missing.map((item) => () => translateChunk([item], target)), 4,
    );
    for (const chunk of repaired) for (const [id, value] of chunk) byId.set(id, value);
  }
  const dictionary = {};
  for (const { id, text } of indexed) dictionary[text] = byId.get(id) || text;
  const language = targetAliases[target] ?? target;
  await writeFile(new URL(`${language}.json`, translationsDirectory), `${JSON.stringify(dictionary)}\n`);
  console.log(`Translated ${language}: ${byId.size} phrases.`);
}
console.log("Wrote static language dictionaries.");
