import fs from "node:fs";
import path from "node:path";
import { spawn } from "node:child_process";
import crypto from "node:crypto";
import ts from "typescript";

const root = process.cwd();
const translator = process.env.FXTRANSLATE_BIN || "/tmp/pikobuy-translator/node_modules/.bin/fxtranslate";
const cacheDir = process.env.FXTRANSLATE_CACHE || "/tmp/fxtranslate-cache";
const target = path.join(root, "app/translations.generated.ts");
const locales = ["es","de","fr","it","pt","nl","pl","cs","sv","da","nb","fi","el","ro","hu","tr","ar","ru","uk","ja","hi","id","vi"];
const files = [
  "app/home-client.tsx",
  "app/[...slug]/page.tsx",
  "app/category-articles.ts",
  "app/guide-articles.ts",
  "app/method-articles.ts",
  "app/seo-articles.ts",
];
const dataFiles = new Set(files.slice(2));
const preservedProperties = new Set(["slug","url","published","tone","sourceTitle","image","usd"]);
const skippedAttributes = new Set(["className","href","src","id","value","key","rel","target"]);

function propertyName(node) {
  if (!node || !node.name) return "";
  return ts.isIdentifier(node.name) || ts.isStringLiteral(node.name) ? node.name.text : "";
}

function isTranslatableLiteral(node, file) {
  const text = node.text.trim();
  if (!text || text.length < 2) return false;
  if (/^(https?:|\/|#|\.\.?\/)/.test(text)) return false;
  if (/^[0-9 ./·–—:+&]+$/.test(text)) return false;
  if (ts.isImportDeclaration(node.parent) || ts.isExportDeclaration(node.parent)) return false;
  if (ts.isPropertyAssignment(node.parent) && node.parent.name === node) return false;
  if (ts.isPropertyAssignment(node.parent) && preservedProperties.has(propertyName(node.parent))) return false;
  if (ts.isJsxAttribute(node.parent) && skippedAttributes.has(propertyName(node.parent))) return false;
  if (ts.isLiteralTypeNode(node.parent)) return false;

  if (dataFiles.has(file)) return true;

  if (ts.isCallExpression(node.parent)) {
    const call = node.parent.expression;
    const name = ts.isIdentifier(call) ? call.text : "";
    if ((name === "tx" && node.parent.arguments[0] === node) || (name === "tr" && node.parent.arguments[1] === node)) return true;
  }

  if (file === "app/home-client.tsx") {
    if (ts.isArrayLiteralExpression(node.parent) || ts.isPropertyAssignment(node.parent)) return true;
  }
  if (file === "app/[...slug]/page.tsx") {
    let cursor = node.parent;
    while (cursor) {
      if (ts.isVariableDeclaration(cursor) && ts.isIdentifier(cursor.name) && ["pages","officialSources","pageSources"].includes(cursor.name.text)) return true;
      cursor = cursor.parent;
    }
  }
  return false;
}

function extractTexts() {
  const output = new Set();
  for (const relative of files) {
    const source = fs.readFileSync(path.join(root, relative), "utf8");
    const file = ts.createSourceFile(relative, source, ts.ScriptTarget.Latest, true, relative.endsWith("x") ? ts.ScriptKind.TSX : ts.ScriptKind.TS);
    const visit = (node) => {
      if ((ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) && isTranslatableLiteral(node, relative)) output.add(node.text.trim());
      ts.forEachChild(node, visit);
    };
    visit(file);
  }
  return [...output].sort((a,b) => a.localeCompare(b));
}

const tokens = ["PikoBuy","FindSpreadsheet","Taobao","Tmall","Weidian","Yupoo","QC","1688"];
function protect(text) {
  return text;
}
function restore(text) {
  return tokens.reduce((value, token, index) => value
    .replaceAll(`\uE100${index}\uE101`, token)
    .replace(new RegExp(`(?:Z(?:X)?Q?TERM|QTERM|TERM)[^\\s.,;:!?<>()]*?${index}[^\\s.,;:!?<>()]*`,"gi"), token), text);
}

function isValidTranslation(source, translated) {
  if (!translated || /(?:ZXQTERM|ZQTERM|QTERM|QXZ|\uE100|\uE101)/i.test(translated)) return false;
  if (source === translated && source.split(/\s+/).length > 3) return false;
  if (!source.startsWith(".") && translated.startsWith(".")) return false;
  for (const token of tokens) {
    if (source.includes(token) && !translated.includes(token)) return false;
  }
  return true;
}

function translate(locale, texts) {
  const fingerprint = crypto.createHash("sha256").update(texts.join("\n")).digest("hex").slice(0,16);
  const checkpoint = path.join("/tmp", `pikobuy-${locale}-${fingerprint}.json`);
  if (fs.existsSync(checkpoint)) return Promise.resolve([locale,JSON.parse(fs.readFileSync(checkpoint,"utf8"))]);
  return new Promise((resolve, reject) => {
    const child = spawn(translator, ["translate", "en", locale], {
      cwd: root,
      env: { ...process.env, XDG_CACHE_HOME:cacheDir },
      stdio:["pipe","pipe","pipe"],
    });
    let stdout = "";
    let stderr = "";
    child.stdout.on("data", (chunk) => { stdout += chunk; });
    child.stderr.on("data", (chunk) => { stderr += chunk; process.stderr.write(`[${locale}] ${chunk}`); });
    child.on("error", reject);
    child.on("close", (code) => {
      if (code !== 0) return reject(new Error(`${locale} translation failed (${code})\n${stderr}`));
      const lines = stdout.replace(/\r/g, "").split("\n");
      if (lines.at(-1) === "") lines.pop();
      if (lines.length !== texts.length) return reject(new Error(`${locale}: expected ${texts.length} lines, received ${lines.length}`));
      const dictionary = {};
      texts.forEach((text,index) => {
        const translated = restore(lines[index].trim());
        dictionary[text] = isValidTranslation(text, translated) ? translated : text;
      });
      fs.writeFileSync(checkpoint, JSON.stringify(dictionary));
      resolve([locale,dictionary]);
    });
    child.stdin.end(texts.map(protect).join("\n"));
  });
}

async function pool(items, limit, worker) {
  const results = [];
  let cursor = 0;
  async function run() {
    while (cursor < items.length) {
      const index = cursor++;
      results[index] = await worker(items[index]);
    }
  }
  await Promise.all(Array.from({length:Math.min(limit,items.length)},run));
  return results;
}

const texts = extractTexts();
console.log(`Extracted ${texts.length} unique source strings (${texts.reduce((sum,text)=>sum+text.split(/\s+/).length,0)} English words).`);
const existingCatalog = (() => {
  if (!fs.existsSync(target)) return {};
  const source = fs.readFileSync(target,"utf8");
  const marker = " = ";
  const start = source.indexOf(marker);
  const end = source.lastIndexOf(";\n");
  if (start < 0 || end < 0) return {};
  try { return JSON.parse(source.slice(start + marker.length,end)); }
  catch { return {}; }
})();
const translated = await pool(locales, 12, async (locale) => {
  const existing = existingCatalog[locale] ?? {};
  const missing = texts.filter((text) => !isValidTranslation(text, existing[text]));
  console.log(`[${locale}] translating ${missing.length} new strings.`);
  const [, additions] = await translate(locale,missing);
  return [locale,Object.fromEntries(texts.map((text)=>[text,additions[text] ?? existing[text] ?? text]))];
});
const catalog = Object.fromEntries(translated);
const output = `import type { Locale, TranslationDictionary } from "./i18n-config";\n\n// Generated from the verified English source by the offline Firefox translation models.\nexport const translationCatalog: Partial<Record<Locale, TranslationDictionary>> = ${JSON.stringify(catalog,null,2)};\n`;
fs.writeFileSync(target, output);
console.log(`Wrote ${target} with ${locales.length} complete dictionaries.`);
