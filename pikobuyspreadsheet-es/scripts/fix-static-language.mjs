import { readFile, readdir, writeFile } from "node:fs/promises";

const outputRoot = new URL("../out/", import.meta.url);
const entries = await readdir(outputRoot, { withFileTypes: true });
const locales = entries.filter((entry) => entry.isDirectory() && /^[a-z]{2}-[A-Z]{2}$/.test(entry.name)).map((entry) => entry.name);

async function updateHtml(directory, locale) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = new URL(`${entry.name}${entry.isDirectory() ? "/" : ""}`, directory);
    if (entry.isDirectory()) await updateHtml(path, locale);
    if (entry.isFile() && entry.name === "index.html") {
      const html = await readFile(path, "utf8");
      const updated = html.replace(/<html lang="[^"]+">/, `<html lang="${locale}">`);
      if (updated !== html) await writeFile(path, updated);
    }
  }
}

for (const locale of locales) await updateHtml(new URL(`./${locale}/`, outputRoot), locale);
console.log(`Set static HTML lang attributes for ${locales.length} localized routes.`);
