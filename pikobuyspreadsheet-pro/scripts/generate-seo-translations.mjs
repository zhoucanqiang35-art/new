import fs from "node:fs";
import vm from "node:vm";

const sourcePath = new URL("../lib/content-data.ts", import.meta.url);
const outputPath = new URL("../lib/seo-translations.generated.ts", import.meta.url);
const cachePath = "/tmp/pikobuy-seo-translation-cache.json";
const source = fs.readFileSync(sourcePath, "utf8");
const startMarker = "export const seoArticles: SeoArticle[] = ";
const endMarker = "\n\nexport function getCategoryRecord";
const start = source.indexOf(startMarker);
const end = source.indexOf(endMarker, start);

if (start < 0 || end < 0) throw new Error("Could not locate seoArticles in content-data.ts");

const literal = source.slice(start + startMarker.length, end).replace(/;\s*$/, "");
const context = {};
vm.createContext(context);
vm.runInContext(`seoArticles = ${literal}`, context);
const articles = context.seoArticles;

const targetLocales = [
  "de", "fr", "es", "pl", "it", "pt", "nl", "cs", "sk", "ro", "hu",
  "sv", "da", "no", "fi", "el", "tr", "hr", "bg", "uk", "lt", "sl", "et",
];

const labels = {
  contentLabel: "Complete localized article",
  sectionsLabel: "sections",
  paragraphsLabel: "paragraphs",
};

const translationOverrides = {
  cs: {"pikobuy-qc-photo-guide.title":"QC fotografie PikoBuy: průvodce kontrolou skladu podle kategorií"},
  hu: {"pikobuy-qc-photo-guide.title":"PikoBuy QC-fotók: kategóriánkénti raktárellenőrzési útmutató"},
  sv: {"pikobuy-qc-photo-guide.title":"PikoBuy QC-bilder: guide för lagerkontroll kategori för kategori"},
  da: {"pikobuy-qc-photo-guide.title":"PikoBuy QC-fotos: guide til lagerkontrol kategori for kategori"},
  no: {"pikobuy-qc-photo-guide.title":"PikoBuy QC-bilder: veiledning for lagerkontroll kategori for kategori"},
  fi: {"pikobuy-qc-photo-guide.title":"PikoBuy QC-kuvat: varastotarkastusopas tuoteryhmittäin"},
  el: {"pikobuy-qc-photo-guide.title":"Φωτογραφίες QC PikoBuy: οδηγός ελέγχου αποθήκης ανά κατηγορία"},
  bg: {"pikobuy-qc-photo-guide.title":"QC снимки PikoBuy: ръководство за складова проверка по категории"},
  uk: {"pikobuy-qc-photo-guide.title":"QC-фото PikoBuy: посібник зі складської перевірки за категоріями"},
};

let cache = {};
if (fs.existsSync(cachePath)) cache = JSON.parse(fs.readFileSync(cachePath, "utf8"));

function flattenArticle(article) {
  const rows = [
    ["title", article.title],
    ["deck", article.deck],
    ["readTime", article.readTime],
    ["wordTarget", article.wordTarget],
    ...article.sources.map((text, index) => [`source.${index}`, text]),
  ];
  article.sections.forEach((section, sectionIndex) => {
    rows.push([`section.${sectionIndex}.heading`, section.heading]);
    section.paragraphs.forEach((text, paragraphIndex) => {
      rows.push([`section.${sectionIndex}.paragraph.${paragraphIndex}`, text]);
    });
  });
  return rows;
}

function makeBatches(rows, maxChars = 900) {
  const batches = [];
  let current = [];
  let length = 0;
  for (const row of rows) {
    const nextLength = row[1].length + 30;
    if (current.length && length + nextLength > maxChars) {
      batches.push(current);
      current = [];
      length = 0;
    }
    current.push(row);
    length += nextLength;
  }
  if (current.length) batches.push(current);
  return batches;
}

let bingSession;
let bingRequestNumber = 1;

async function getBingSession(force = false) {
  if (bingSession && !force) return bingSession;
  const response = await fetch("https://www.bing.com/translator", {
    headers: {
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/137.0 Safari/537.36",
      "accept-language": "en-US,en;q=0.9",
    },
  });
  if (!response.ok) throw new Error(`Bing session HTTP ${response.status}`);
  const page = await response.text();
  const helper = page.match(/params_AbusePreventionHelper\s*=\s*\[(\d+),"([^"]+)"/);
  const ig = page.match(/IG:"([^"]+)"/)?.[1];
  const iid = page.match(/data-iid="([^"]+)"/)?.[1];
  if (!helper || !ig || !iid) throw new Error("Could not initialize Bing translation session");
  const rawCookies = response.headers.getSetCookie?.() ?? [response.headers.get("set-cookie")].filter(Boolean);
  const cookie = rawCookies.map((value) => value.split(";", 1)[0]).join("; ");
  bingSession = { key: helper[1], token: helper[2], ig, iid, cookie };
  return bingSession;
}

async function requestBingTranslation(locale, q, refresh = false) {
  const session = await getBingSession(refresh);
  const targetLocale = locale === "no" ? "nb" : locale;
  const body = new URLSearchParams({
    fromLang: "en",
    text: q,
    to: targetLocale,
    token: session.token,
    key: session.key,
    tryFetchingGenderDebiasedTranslations: "true",
  });
  const requestNumber = bingRequestNumber++;
  const response = await fetch(`https://www.bing.com/ttranslatev3?isVertical=1&IG=${session.ig}&IID=${session.iid}.${requestNumber}`, {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/137.0 Safari/537.36",
      "accept-language": "en-US,en;q=0.9",
      accept: "application/json",
      origin: "https://www.bing.com",
      referer: "https://www.bing.com/translator",
      "x-requested-with": "XMLHttpRequest",
      cookie: session.cookie,
    },
    body,
  });
  if (response.status === 401 && !refresh) return requestBingTranslation(locale, q, true);
  if (!response.ok) {
    const error = new Error(`Bing HTTP ${response.status}`);
    error.status = response.status;
    throw error;
  }
  const data = await response.json();
  if (!data?.[0]?.translations?.[0]?.text) {
    const error = new Error(`Unexpected Bing response: ${JSON.stringify(data).slice(0, 500)}`);
    error.status = 502;
    throw error;
  }
  return data[0].translations[0].text;
}

async function translateBatch(locale, rows, attempt = 0) {
  const indexed = rows.map(([key, text], index) => ({ key, text, marker: `__PIKO_SEG_${String(index).padStart(4, "0")}__` }));
  const q = indexed.length === 1 ? indexed[0].text : indexed.map(({ marker, text }) => `${marker}\n${text}`).join("\n");
  try {
    const translated = await requestBingTranslation(locale, q);
    if (indexed.length === 1) return [[indexed[0].key, translated.trim()]];
    const matches = [...translated.matchAll(/__PIKO_SEG_(\d{4})__\s*([\s\S]*?)(?=__PIKO_SEG_\d{4}__|$)/g)];
    if (matches.length !== rows.length) throw new Error(`segment mismatch ${matches.length}/${rows.length}`);
    return matches.map((match) => {
      const index = Number(match[1]);
      return [indexed[index].key, match[2].trim()];
    });
  } catch (error) {
    if (attempt >= 8) throw error;
    const waitMs = error.status === 429 ? Math.min(10_000 + attempt * 5_000, 30_000) : Math.min(900 * 2 ** attempt, 10_000);
    await new Promise((resolve) => setTimeout(resolve, waitMs));
    return translateBatch(locale, rows, attempt + 1);
  }
}

async function translateLocale(locale) {
  const pending = [];
  const prefix = `${locale}:`;
  for (const [key, text] of Object.entries(labels)) {
    const cacheKey = `${prefix}label.${key}`;
    if (!cache[cacheKey]) pending.push([cacheKey, text]);
  }
  for (const article of articles) {
    for (const [key, text] of flattenArticle(article)) {
      const cacheKey = `${prefix}${article.slug}.${key}`;
      if (!cache[cacheKey]) pending.push([cacheKey, text]);
    }
  }

  const batches = makeBatches(pending);
  for (let index = 0; index < batches.length; index += 3) {
    const translatedGroups = await Promise.all(batches.slice(index, index + 3).map((batch) => translateBatch(locale, batch)));
    for (const translated of translatedGroups) for (const [key, text] of translated) cache[key] = text;
    fs.writeFileSync(cachePath, `${JSON.stringify(cache)}\n`);
    await new Promise((resolve) => setTimeout(resolve, 350));
  }
}

for (const locale of targetLocales) {
  await translateLocale(locale);
  process.stdout.write(`${locale} `);
}
process.stdout.write("\n");

const output = {};
for (const locale of targetLocales) {
  output[locale] = {
    labels: Object.fromEntries(Object.keys(labels).map((key) => [key, cache[`${locale}:label.${key}`]])),
    articles: {},
  };
  for (const article of articles) {
    const get = (key) => translationOverrides[locale]?.[`${article.slug}.${key}`] ?? cache[`${locale}:${article.slug}.${key}`];
    output[locale].articles[article.slug] = {
      title: get("title"),
      deck: get("deck"),
      readTime: get("readTime"),
      wordTarget: get("wordTarget"),
      sources: article.sources.map((_, index) => get(`source.${index}`)),
      sections: article.sections.map((section, sectionIndex) => ({
        heading: get(`section.${sectionIndex}.heading`),
        paragraphs: section.paragraphs.map((_, paragraphIndex) => get(`section.${sectionIndex}.paragraph.${paragraphIndex}`)),
      })),
    };
  }
}

const banner = "// Generated from lib/content-data.ts by scripts/generate-seo-translations.mjs.\n";
fs.writeFileSync(outputPath, `${banner}export const seoTranslations = ${JSON.stringify(output, null, 2)} as const;\n`);
