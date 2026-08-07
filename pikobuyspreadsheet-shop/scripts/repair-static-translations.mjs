import { readdir, readFile, writeFile } from "node:fs/promises";

const directory = new URL("../app/translations/", import.meta.url);
const apiLanguage = { zh: "zh-CN" };
const manualOverrides = {
  cs: {
    "PikoBuy QC Photos and Returns: The Warehouse Decision Guide": "Fotografie QC a vrácení PikoBuy: Průvodce rozhodováním ve skladu",
  },
  el: {
    "PikoBuy QC Photos and Returns: The Warehouse Decision Guide": "Φωτογραφίες QC και επιστροφές PikoBuy: Οδηγός αποφάσεων αποθήκης",
  },
  sv: {
    "PikoBuy QC Photos and Returns: The Warehouse Decision Guide": "PikoBuy QC-foton och returer: Guiden för lagerbeslut",
    "PikoBuy Spreadsheet Guides & SEO Research Articles (2026)": "PikoBuy-kalkylbladsguider och SEO-forskningsartiklar (2026)",
  },
};
const requiredKeys = ["24 languages"];

async function translate(text, language, attempt = 1) {
  const url = new URL("https://translate.googleapis.com/translate_a/single");
  url.searchParams.set("client", "gtx");
  url.searchParams.set("sl", "en");
  url.searchParams.set("tl", apiLanguage[language] ?? language);
  url.searchParams.set("dt", "t");
  url.searchParams.set("q", text);
  try {
    const response = await fetch(url, { signal: AbortSignal.timeout(30000) });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    return data[0].map((part) => part[0]).join("").trim();
  } catch (error) {
    if (attempt >= 4) throw error;
    await new Promise((resolve) => setTimeout(resolve, 700 * attempt));
    return translate(text, language, attempt + 1);
  }
}

async function withConcurrency(items, limit, task) {
  let cursor = 0;
  async function worker() {
    while (cursor < items.length) {
      const index = cursor++;
      await task(items[index]);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
}

for (const file of (await readdir(directory)).filter((item) => item.endsWith(".json")).sort()) {
  const language = file.replace(/\.json$/, "");
  const url = new URL(file, directory);
  const dictionary = JSON.parse(await readFile(url, "utf8"));
  for (const key of requiredKeys) if (!(key in dictionary)) dictionary[key] = key;
  Object.assign(dictionary, manualOverrides[language] ?? {});
  const candidates = Object.keys(dictionary).filter((key) =>
    dictionary[key] === key && key.length > 4 && /[A-Za-z]{3}/.test(key),
  );
  if (!candidates.length) continue;
  await withConcurrency(candidates, 8, async (key) => {
    dictionary[key] = await translate(key, language);
  });
  await writeFile(url, `${JSON.stringify(dictionary)}\n`);
  console.log(`Repaired ${language}: ${candidates.length} unchanged phrases.`);
}
