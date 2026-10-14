import fs from "node:fs";
import vm from "node:vm";

const root = new URL("../", import.meta.url);
const articleSource = fs.readFileSync(new URL("app/octoberArticleData.ts", root), "utf8")
  .replace("export const octoberResearchArticles =", "octoberResearchArticles =")
  .replace(/\s+as const;\s*$/, ";");
const context = {};
vm.createContext(context);
vm.runInContext(articleSource, context);
const articles = context.octoberResearchArticles;
const contentDirectory = new URL("app/localized-content/", root);

const targets = {
  en: "en", es: "es", fr: "fr", de: "de", it: "it", pl: "pl", nl: "nl", sv: "sv", no: "nb", da: "da", pt: "pt", cs: "cs",
  ro: "ro", hu: "hu", fi: "fi", el: "el", tr: "tr", lt: "lt", lv: "lv", et: "et", sk: "sk", bg: "bg", hr: "hr", ga: "ga"
};
const content = {};
for (const locale of Object.keys(targets)) {
  content[locale] = JSON.parse(fs.readFileSync(new URL(`${locale}.json`, contentDirectory), "utf8"));
}
const userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/137.0 Safari/537.36";
let session;
let sequence = 0;

async function getSession(refresh = false) {
  if (session && !refresh) return session;
  const response = await fetch("https://www.bing.com/translator", { headers: { "user-agent": userAgent, "accept-language": "en-US,en;q=0.9" } });
  if (!response.ok) throw new Error(`Bing translator setup failed: ${response.status}`);
  const html = await response.text();
  const helper = html.match(/params_AbusePreventionHelper\s?=\s?(\[[^\]]+\])/);
  const ig = html.match(/IG:"([^"]+)"/)?.[1];
  const iid = html.match(/data-iid="([^"]+)"/)?.[1];
  if (!helper || !ig || !iid) throw new Error("Bing translator setup fields were unavailable");
  const [key, token] = JSON.parse(helper[1]);
  session = { key, token, ig, iid };
  return session;
}

async function translate(locale, text, retries = 0) {
  if (locale === "en") return text;
  const active = await getSession(retries > 0);
  const body = new URLSearchParams({ fromLang: "en", to: targets[locale], text, key: String(active.key), token: active.token });
  const response = await fetch(`https://www.bing.com/ttranslatev3?isVertical=1&IG=${active.ig}&IID=${active.iid}&SFX=${++sequence}&ref=TThis&edgepdftranslator=1`, {
    method: "POST",
    headers: { "user-agent": userAgent, referer: "https://www.bing.com/translator" },
    body
  });
  if (!response.ok) {
    if (retries >= 5) throw new Error(`${locale}: Bing translation failed (${response.status})`);
    session = undefined;
    await new Promise(resolve => setTimeout(resolve, Math.min(1000 * 2 ** retries, 8000)));
    return translate(locale, text, retries + 1);
  }
  const data = await response.json();
  const result = data?.[0]?.translations?.[0]?.text;
  if (!result) throw new Error(`${locale}: Bing returned an empty translation`);
  return result.trim();
}

function fields(article) {
  return [
    ["tag", article.tag], ["title", article.title], ["description", article.description], ["readTime", article.readTime],
    ...article.sections.flatMap((section, sectionIndex) => [
      [`sections.${sectionIndex}.heading`, section.heading],
      ...section.paragraphs.map((paragraph, paragraphIndex) => [`sections.${sectionIndex}.paragraphs.${paragraphIndex}`, paragraph])
    ])
  ];
}

function batches(rows, maximum = 2400) {
  const output = []; let current = []; let size = 0;
  for (const row of rows) {
    const next = row[1].length + 36;
    if (current.length && size + next > maximum) { output.push(current); current = []; size = 0; }
    current.push(row); size += next;
  }
  if (current.length) output.push(current);
  return output;
}

async function translateRows(locale, rows) {
  const marker = index => `___LT_SEG_${String(index).padStart(3, "0")}___`;
  const source = rows.map(([_, text], index) => `${marker(index)}\n${text}`).join("\n");
  const translated = await translate(locale, source);
  const chunks = [...translated.matchAll(/___LT_SEG_(\d{3})___\s*([\s\S]*?)(?=___LT_SEG_\d{3}___|$)/g)];
  if (chunks.length !== rows.length) throw new Error(`${locale}: translated segments mismatched (${chunks.length}/${rows.length})`);
  return chunks.map(match => [rows[Number(match[1])][0], match[2].trim()]);
}

function setField(object, path, value) {
  const parts = path.split("."); let current = object;
  for (let index = 0; index < parts.length - 1; index += 1) current = current[Number.isNaN(Number(parts[index])) ? parts[index] : Number(parts[index])];
  current[Number.isNaN(Number(parts.at(-1))) ? parts.at(-1) : Number(parts.at(-1))] = value;
}

async function localizeArticle(locale, article) {
  const localized = JSON.parse(JSON.stringify(article));
  delete localized.sources; delete localized.relatedLinks; delete localized.illustration; delete localized.keywords;
  const rows = fields(article);
  const translated = [];
  const work = batches(rows);
  for (let index = 0; index < work.length; index += 3) {
    translated.push(...(await Promise.all(work.slice(index, index + 3).map(batch => translateRows(locale, batch)))).flat());
  }
  for (const [path, value] of translated) setField(localized, path, value);
  return localized;
}

async function localizeLocale(locale) {
  const existing = new Set(content[locale].articles.map(article => article.slug));
  for (const article of articles) {
    if (!existing.has(article.slug)) content[locale].articles.push(await localizeArticle(locale, article));
  }
  return locale;
}
for (let index = 0; index < Object.keys(targets).length; index += 3) {
  const finished = await Promise.all(Object.keys(targets).slice(index, index + 3).map(localizeLocale));
  for (const locale of finished) fs.writeFileSync(new URL(`${locale}.json`, contentDirectory), `${JSON.stringify(content[locale])}\n`);
  process.stdout.write(`${finished.join(" ")} `);
}
process.stdout.write("\n");
