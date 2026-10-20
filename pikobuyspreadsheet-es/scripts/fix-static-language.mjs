import { readFile, readdir, writeFile } from "node:fs/promises";

const outputRoot = new URL("../out/", import.meta.url);
const locales = ["de-DE", "fr-FR", "es-ES", "it-IT", "nl-NL", "pl-PL", "pt-PT", "sv-SE"];

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
