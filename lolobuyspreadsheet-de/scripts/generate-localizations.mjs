import fs from "node:fs/promises";
import ts from "typescript";

const files = [
  "app/components/SiteHome.tsx",
  "app/components/SiteHeader.tsx",
  "app/components/SectionPage.tsx",
  "app/components/GuidePage.tsx",
  "app/components/SourceRecordPage.tsx",
  "app/data/guides.ts",
  "app/data/guides-part-one.ts",
  "app/data/guides-part-two.ts",
  "app/data/faq.ts",
];

const manual = [
  "Home", "Independent page", "Search products", "Search", "Open database", "Open review record",
  "Read the guide", "Next guide", "Reading time", "Source status", "Official + editorial",
  "In this guide", "Evidence rule", "Working checklist", "Primary sources used",
  "Record status", "Editorial review", "Outbound source link", "Not provided",
  "Claim standard", "Cautious / attributed", "Back to sources", "Reviewed 17 Aug 2026", "Reviewed 18 Aug 2026",
  "Platform materials", "App listing record", "FindSpreadsheet index",
  "LoloBuy home", "Primary navigation",
];

const ignored = new Set([
  "next/link", "next/navigation", "react", "en", "de", "ar", "rtl", "ltr", "main", "faq",
  "guides", "sources", "categories", "workflow", "markets", "platform-materials", "app-listing",
  "noopener", "noreferrer", "_blank", "get", "q", "keywords", "channelid", "2",
]);

const phrases = new Set(manual);
for (const file of files) {
  const source = await fs.readFile(new URL(`../${file}`, import.meta.url), "utf8");
  const ast = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const visit = node => {
    if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
      const value = node.text.trim();
      const looksLikeCopy = /[A-Za-z]{2}/.test(value) && value.length > 2;
      const structural = ignored.has(value) || value.startsWith(".") || value.startsWith("/") || value.startsWith("http") || value.includes("className");
      if (looksLikeCopy && !structural) phrases.add(value);
    }
    ts.forEachChild(node, visit);
  };
  visit(ast);
}

const sourcePhrases = [...phrases].sort((a, b) => a.localeCompare(b));
const targets = {
  de: "de", fr: "fr", es: "es", it: "it", nl: "nl", pt: "pt", pl: "pl", sv: "sv", da: "da",
  no: "nb", fi: "fi", cs: "cs", ro: "ro", hu: "hu", el: "el", tr: "tr", uk: "uk", ru: "ru",
  ar: "ar", zh: "zh-Hans", "zh-tw": "zh-Hant", ja: "ja", ko: "ko",
};

const userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/150.0.0.0 Safari/537.36 Edg/151.0.4129.59";
let bingConfig;

async function fetchBingConfig() {
  const response = await fetch("https://www.bing.com/translator", { headers: { "user-agent": userAgent } });
  if (!response.ok) throw new Error(`translator setup failed (${response.status})`);
  const body = await response.text();
  const IG = body.match(/IG:"([^"]+)"/)?.[1];
  const IID = body.match(/data-iid="([^"]+)"/)?.[1];
  const abuse = body.match(/params_AbusePreventionHelper\s?=\s?(\[[^\]]+\])/);
  if (!IG || !IID || !abuse) throw new Error("translator setup fields missing");
  const [key, token, expiry] = JSON.parse(abuse[1]);
  bingConfig = { IG, IID, key, token, expiry, fetchedAt: Date.now(), count: 0 };
}

async function translateBatch(locale, target, batch, offset) {
  const marker = index => `ZXQZXQ${String(offset + index).padStart(4, "0")}ZXQZXQ`;
  const joined = batch.map((text, index) => index === 0 ? text : `${marker(index)}\n${text}`).join("\n");
  for (let attempt = 0; attempt < 5; attempt += 1) {
    if (!bingConfig || Date.now() - bingConfig.fetchedAt > bingConfig.expiry) await fetchBingConfig();
    const url = `https://www.bing.com/ttranslatev3?isVertical=1&IG=${bingConfig.IG}&IID=${bingConfig.IID}&SFX=${++bingConfig.count}&ref=TThis&edgepdftranslator=1`;
    const form = new URLSearchParams({ fromLang: "en", to: target, text: joined, token: bingConfig.token, key: String(bingConfig.key) });
    const response = await fetch(url, { method: "POST", headers: { "user-agent": userAgent, referer: "https://www.bing.com/translator" }, body: form });
    const raw = await response.text();
    if (response.ok) {
      const data = JSON.parse(raw);
      const combined = data[0]?.translations?.[0]?.text;
      if (!combined) throw new Error(`${locale}: empty translation response`);
      const translated = combined.split(/ZXQZXQ\d{4}ZXQZXQ\s*/).map(value => value.trim());
      if (translated.length !== batch.length) throw new Error(`${locale}: expected ${batch.length} translations, received ${translated.length}: ${combined.slice(0, 500)}`);
      return translated;
    }
    if (attempt === 4) throw new Error(`${locale}: translation request failed (${response.status})`);
    bingConfig = undefined;
    await new Promise(resolve => setTimeout(resolve, 3000 * (attempt + 1)));
  }
  throw new Error(`${locale}: translation retries exhausted`);
}

function makeBatches(items, maxChars = 2850) {
  const batches = [];
  let batch = [];
  let chars = 0;
  for (const item of items) {
    if (batch.length && chars + item.length + 30 > maxChars) {
      batches.push(batch);
      batch = [];
      chars = 0;
    }
    batch.push(item);
    chars += item.length + 30;
  }
  if (batch.length) batches.push(batch);
  return batches;
}

async function translateLocale(locale, target) {
  const cached = existing[locale] ?? {};
  const missing = sourcePhrases.filter(phrase => !cached[phrase]);
  const values = [];
  const batchMeta = [];
  let offset = 0;
  for (const batch of makeBatches(missing)) {
    batchMeta.push({ batch, offset });
    offset += batch.length;
  }
  for (let index = 0; index < batchMeta.length; index += 4) {
    const results = await Promise.all(batchMeta.slice(index, index + 4).map(({ batch, offset }) => translateBatch(locale, target, batch, offset)));
    values.push(...results.flat());
    await new Promise(resolve => setTimeout(resolve, 250));
  }
  console.log(`${locale}: ${missing.length} new phrases translated`);
  return [locale, { ...cached, ...Object.fromEntries(missing.map((phrase, index) => [phrase, values[index]])) }];
}

let existing = {};
try {
  const current = await fs.readFile(new URL("../app/data/generated-translations.ts", import.meta.url), "utf8");
  existing = JSON.parse(current.slice(current.indexOf("=") + 1).replace(/;\s*$/, ""));
} catch {
  for (const locale of Object.keys(targets)) {
    try {
      const current = await fs.readFile(new URL(`../app/data/translations/${locale}.json`, import.meta.url), "utf8");
      existing[locale] = JSON.parse(current);
    } catch {}
  }
}

const entries = [];
const targetEntries = Object.entries(targets);
const needsTranslation = targetEntries.some(([locale]) => sourcePhrases.some(phrase => !existing[locale]?.[phrase]));
if (needsTranslation) await fetchBingConfig();
for (let index = 0; index < targetEntries.length; index += 3) {
  entries.push(...await Promise.all(targetEntries.slice(index, index + 3).map(([locale, target]) => translateLocale(locale, target))));
}

const translationsDirectory = new URL("../app/data/translations/", import.meta.url);
await fs.mkdir(translationsDirectory, { recursive: true });
for (const [locale, translations] of entries) {
  await fs.writeFile(new URL(`${locale}.json`, translationsDirectory), `${JSON.stringify(translations, null, 2)}\n`, "utf8");
}

const imports = entries.map(([locale], index) => `import locale${index} from "./translations/${locale}.json";`).join("\n");
const members = entries.map(([locale], index) => `  ${JSON.stringify(locale)}: locale${index},`).join("\n");
const output = `// Generated static translations. Do not edit by hand.\n${imports}\n\nexport const generatedTranslations: Record<string, Record<string, string>> = {\n${members}\n};\n`;
await fs.writeFile(new URL("../app/data/generated-translations.ts", import.meta.url), output, "utf8");
console.log(JSON.stringify({ phrases: sourcePhrases.length, locales: entries.length }));
