import fs from "node:fs/promises";
import path from "node:path";
import ts from "typescript";

const appRoot = new URL("../app/", import.meta.url);
const outputRoot = new URL("../app/i18n/translations/", import.meta.url);
const languages = { de: "de", fr: "fr", es: "es", it: "it", nl: "nl", pl: "pl", pt: "pt", sv: "sv" };
const ignored = new Set([
  "react", "next", "en", "de", "fr", "es", "it", "nl", "pl", "pt", "sv", "get", "q",
  "keywords", "channelid", "method", "noopener", "noreferrer", "_blank", "main", "article",
]);

async function listSourceFiles(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await listSourceFiles(full));
    else if (/\.(tsx|ts)$/.test(entry.name) && !entry.name.includes("TranslationEngine")) files.push(full);
  }
  return files;
}

function clean(value) {
  return value.replace(/\s+/g, " ").trim();
}

function isCopy(value) {
  if (value.length < 2 || !/[A-Za-z]{2}/.test(value) || ignored.has(value)) return false;
  if (/^(https?:|\/|\.|#|[a-z-]+\.(tsx?|png|xml|json))/.test(value)) return false;
  if (/^[a-z0-9_-]+$/.test(value) && !value.includes(" ")) return false;
  if (value.includes("className") || value.includes("Promise<") || value.includes("function ")) return false;
  return true;
}

const phrases = new Set([
  "PikoBuy Spreadsheet home", "Primary navigation", "Translate every page", "Fact-checked against public PikoBuy materials",
  "Updated", "Home", "Product details", "Categories", "Guides", "Shipping", "FAQ", "SEO articles",
]);

for (const file of await listSourceFiles(appRoot.pathname)) {
  const source = await fs.readFile(file, "utf8");
  const ast = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true, file.endsWith("x") ? ts.ScriptKind.TSX : ts.ScriptKind.TS);
  const visit = (node) => {
    if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node) || ts.isJsxText(node)) {
      const value = clean(node.text);
      if (isCopy(value)) phrases.add(value);
    }
    ts.forEachChild(node, visit);
  };
  visit(ast);
}

const sourcePhrases = [...phrases].sort((a, b) => a.localeCompare(b));
const seedRoot = "/workspace/lolobuyspreadsheet-de-github/lolobuyspreadsheet-de/app/data/translations";
const userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/150.0 Safari/537.36";
let bing;

async function loadSeed(locale) {
  try {
    const source = JSON.parse(await fs.readFile(path.join(seedRoot, `${locale}.json`), "utf8"));
    const seed = {};
    for (const phrase of sourcePhrases) {
      const loloPhrase = phrase.replaceAll("PikoBuy", "LoloBuy").replaceAll("pikobuy", "lolobuy");
      if (source[loloPhrase]) seed[phrase] = source[loloPhrase].replaceAll("LoloBuy", "PikoBuy").replaceAll("lolobuy", "pikobuy");
    }
    return seed;
  } catch { return {}; }
}

async function getBing() {
  const response = await fetch("https://www.bing.com/translator", { headers: { "user-agent": userAgent } });
  const body = await response.text();
  const IG = body.match(/IG:"([^"]+)"/)?.[1];
  const IID = body.match(/data-iid="([^"]+)"/)?.[1];
  const abuse = body.match(/params_AbusePreventionHelper\s?=\s?(\[[^\]]+\])/);
  if (!response.ok || !IG || !IID || !abuse) throw new Error(`Bing setup failed (${response.status})`);
  const [key, token, expiry] = JSON.parse(abuse[1]);
  bing = { IG, IID, key, token, expiry, fetchedAt: Date.now(), count: 0 };
}

async function translateBatch(target, items, base) {
  const marker = (index) => `ZXQZXQ${String(base + index).padStart(5, "0")}ZXQZXQ`;
  const protectedItems = items.map((value) => value.replaceAll("PikoBuy", "ZXBRANDPIKO").replaceAll("FindSpreadsheet", "ZXBRANDFS"));
  const joined = protectedItems.map((value, index) => index ? `${marker(index)}\n${value}` : value).join("\n");
  for (let attempt = 0; attempt < 5; attempt += 1) {
    if (!bing || Date.now() - bing.fetchedAt > bing.expiry) await getBing();
    const url = `https://www.bing.com/ttranslatev3?isVertical=1&IG=${bing.IG}&IID=${bing.IID}&SFX=${++bing.count}&ref=TThis&edgepdftranslator=1`;
    const body = new URLSearchParams({ fromLang: "en", to: target, text: joined, token: bing.token, key: String(bing.key) });
    const response = await fetch(url, { method: "POST", headers: { "user-agent": userAgent, referer: "https://www.bing.com/translator" }, body });
    if (response.ok) {
      const data = await response.json();
      const combined = data[0]?.translations?.[0]?.text || "";
      const values = combined.split(/ZXQZXQ\d{5}ZXQZXQ\s*/).map((value) => value.trim().replaceAll("ZXBRANDPIKO", "PikoBuy").replaceAll("ZXBRANDFS", "FindSpreadsheet"));
      if (values.length === items.length) return values;
    }
    if (attempt === 0) console.warn(`retry ${target}: ${response.status}`);
    bing = undefined;
    await new Promise((resolve) => setTimeout(resolve, 1500 * (attempt + 1)));
  }
  throw new Error(`Translation failed for ${target}`);
}

await fs.mkdir(outputRoot, { recursive: true });
async function translateLocale([locale, target]) {
  const existingPath = new URL(`../app/i18n/translations/${locale}.json`, import.meta.url);
  let existing = await loadSeed(locale);
  try { existing = { ...existing, ...JSON.parse(await fs.readFile(existingPath, "utf8")) }; } catch {}
  const missing = sourcePhrases.filter((phrase) => !existing[phrase]);
  const work = missing.map((phrase, offset) => ({ batch: [phrase], offset }));
  for (let index = 0; index < work.length; index += 20) {
    const group = work.slice(index, index + 20);
    const results = await Promise.all(group.map(({ batch, offset: base }) => translateBatch(target, batch, base)));
    group.forEach(({ batch }, groupIndex) => results[groupIndex].forEach((value, valueIndex) => { existing[batch[valueIndex]] = value; }));
    console.log(`${locale}: ${Math.min(index + group.length, work.length)}/${work.length}`);
  }
  const complete = Object.fromEntries(sourcePhrases.map((phrase) => [phrase, existing[phrase] || phrase]));
  await fs.writeFile(new URL(`${locale}.json`, outputRoot), `${JSON.stringify(complete, null, 2)}\n`);
  console.log(`${locale}: ${sourcePhrases.length} phrases (${missing.length} translated)`);
}
await Promise.all(Object.entries(languages).map(translateLocale));

const imports = Object.keys(languages).map((locale, index) => `import locale${index} from "./translations/${locale}.json";`).join("\n");
const members = Object.keys(languages).map((locale, index) => `  ${JSON.stringify(locale)}: locale${index},`).join("\n");
await fs.writeFile(new URL("../app/i18n/generated-translations.ts", import.meta.url), `${imports}\n\nexport const generatedTranslations: Record<string, Record<string, string>> = {\n${members}\n};\n`);
console.log(`complete: ${sourcePhrases.length} source phrases`);
