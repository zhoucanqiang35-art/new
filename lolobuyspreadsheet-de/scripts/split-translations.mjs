import fs from "node:fs/promises";

const sourceUrl = new URL("../app/data/generated-translations.ts", import.meta.url);
const source = await fs.readFile(sourceUrl, "utf8");
const translations = JSON.parse(source.slice(source.indexOf("=") + 1).replace(/;\s*$/, ""));
const entries = Object.entries(translations);
const translationsDirectory = new URL("../app/data/translations/", import.meta.url);

await fs.mkdir(translationsDirectory, { recursive: true });
for (const [locale, values] of entries) {
  await fs.writeFile(new URL(`${locale}.json`, translationsDirectory), `${JSON.stringify(values, null, 2)}\n`, "utf8");
}

const imports = entries.map(([locale], index) => `import locale${index} from "./translations/${locale}.json";`).join("\n");
const members = entries.map(([locale], index) => `  ${JSON.stringify(locale)}: locale${index},`).join("\n");
const output = `// Generated static translations. Do not edit by hand.\n${imports}\n\nexport const generatedTranslations: Record<string, Record<string, string>> = {\n${members}\n};\n`;

await fs.writeFile(sourceUrl, output, "utf8");
console.log(JSON.stringify({ locales: entries.length }));
