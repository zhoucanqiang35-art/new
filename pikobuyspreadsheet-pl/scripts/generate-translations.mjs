import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

const root = process.cwd();
const appDir = path.join(root, "app");
const outputDir = path.join(appDir, "translations");
const locales = ["de", "fr", "es", "it", "nl", "pt", "pl"];

function sourceFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) return sourceFiles(absolute);
    if (!/\.(ts|tsx)$/.test(entry.name)) return [];
    if (entry.name === "locale-translator.tsx") return [];
    if (absolute.includes(`${path.sep}translations${path.sep}`)) return [];
    return [absolute];
  });
}

function isTranslatable(value) {
  return /[A-Za-z]/.test(value) && !/^https?:/i.test(value) && !/^\//.test(value) && !/^[a-z0-9_-]+$/.test(value);
}

function collectEnglishStrings() {
  const strings = new Set();
  for (const filename of sourceFiles(appDir)) {
    const source = fs.readFileSync(filename, "utf8");
    const sourceFile = ts.createSourceFile(filename, source, ts.ScriptTarget.Latest, true, filename.endsWith(".tsx") ? ts.ScriptKind.TSX : ts.ScriptKind.TS);
    function visit(node) {
      if (ts.isJsxText(node)) {
        const value = node.getText(sourceFile).replace(/\s+/g, " ").trim();
        if (isTranslatable(value)) strings.add(value);
      }
      if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
        let include = false;
        const parent = node.parent;
        if (ts.isJsxAttribute(parent)) {
          include = ["alt", "aria-label", "placeholder", "title"].includes(parent.name.getText(sourceFile));
        } else if (ts.isPropertyAssignment(parent)) {
          const property = parent.name.getText(sourceFile).replace(/["']/g, "");
          include = !["slug", "href", "icon", "id", "external", "@context", "@type", "dateModified", "type", "card"].includes(property);
        } else if (ts.isArrayLiteralExpression(parent)) {
          include = true;
        } else if (ts.isVariableDeclaration(parent)) {
          include = ["title", "description"].includes(parent.name.getText(sourceFile));
        }
        const value = node.text.trim();
        if (include && isTranslatable(value)) strings.add(value);
      }
      ts.forEachChild(node, visit);
    }
    visit(sourceFile);
  }
  return [...strings];
}

const escapeXml = (value) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
const decodeXml = (value) => value.replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll("&quot;", '"').replaceAll("&#39;", "'").replaceAll("&amp;", "&");

function makeChunks(strings, limit = 4300) {
  const chunks = [];
  let current = [];
  let length = 0;
  for (const [index, value] of strings.entries()) {
    const wrapped = `<x id="${index}">${escapeXml(value)}</x>\n`;
    if (current.length && length + wrapped.length > limit) {
      chunks.push(current);
      current = [];
      length = 0;
    }
    current.push({ index, value, wrapped });
    length += wrapped.length;
  }
  if (current.length) chunks.push(current);
  return chunks;
}

async function googleTranslate(text, locale) {
  const url = new URL("https://translate.googleapis.com/translate_a/single");
  url.search = new URLSearchParams({ client: "gtx", sl: "en", tl: locale, dt: "t", q: text });
  const response = await fetch(url, { headers: { "user-agent": "Mozilla/5.0" } });
  if (!response.ok) throw new Error(`translation request failed (${response.status})`);
  const payload = await response.json();
  return payload[0].map((part) => part[0]).join("");
}

async function translateChunk(chunk, locale) {
  const translated = await googleTranslate(chunk.map((item) => item.wrapped).join(""), locale);
  const result = new Map();
  for (const match of translated.matchAll(/<x id="(\d+)">([\s\S]*?)<\/x>/g)) result.set(Number(match[1]), decodeXml(match[2].trim()));
  for (const item of chunk) if (!result.has(item.index)) result.set(item.index, (await googleTranslate(item.value, locale)).trim());
  return result;
}

async function withRetry(task, retries = 3) {
  let error;
  for (let attempt = 0; attempt < retries; attempt += 1) {
    try { return await task(); } catch (caught) {
      error = caught;
      await new Promise((resolve) => setTimeout(resolve, 700 * (attempt + 1)));
    }
  }
  throw error;
}

async function runPool(tasks, concurrency = 6) {
  const results = new Array(tasks.length);
  let cursor = 0;
  async function worker() {
    while (cursor < tasks.length) {
      const index = cursor++;
      results[index] = await tasks[index]();
    }
  }
  await Promise.all(Array.from({ length: concurrency }, worker));
  return results;
}

const english = collectEnglishStrings();
const chunks = makeChunks(english);
fs.mkdirSync(outputDir, { recursive: true });
for (const locale of locales) {
  const translatedChunks = await runPool(chunks.map((chunk) => () => withRetry(() => translateChunk(chunk, locale))));
  const dictionary = {};
  for (const translatedChunk of translatedChunks) for (const [index, value] of translatedChunk) dictionary[english[index]] = value;
  fs.writeFileSync(path.join(outputDir, `${locale}.json`), `${JSON.stringify(dictionary, null, 2)}\n`);
  console.log(`${locale}: ${Object.keys(dictionary).length} strings`);
}
