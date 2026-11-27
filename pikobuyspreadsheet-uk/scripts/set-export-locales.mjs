import { readdir, readFile, writeFile } from "node:fs/promises";

const manifest = new URL("../app/locales.json", import.meta.url);
const output = new URL("../dist/client/", import.meta.url);
const languages = JSON.parse(await readFile(manifest, "utf8"));

async function setLanguage(directory, code) {
  const direction = code === "ar" ? "rtl" : "ltr";
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (!entry.isDirectory() && !entry.name.endsWith(".html")) continue;
    const location = new URL(`${entry.name}${entry.isDirectory() ? "/" : ""}`, directory);
    if (entry.isDirectory()) {
      await setLanguage(location, code);
      continue;
    }
    const html = await readFile(location, "utf8");
    const localized = html.replace(/<html\b([^>]*)>/i, (tag, attributes) =>
      `<html${attributes.replace(/\s+(?:lang|dir)="[^"]*"/g, "")} lang="${code}" dir="${direction}">`
    );
    if (html !== localized) await writeFile(location, localized);
  }
}

await Promise.all(languages.filter(({ code }) => code !== "en").map(({ code }) =>
  setLanguage(new URL(`${code}/`, output), code)
));
