import { mkdir, readFile, writeFile } from "node:fs/promises";

const output = new URL("../dist/client/", import.meta.url);
const rules = (await readFile(new URL("_redirects", output), "utf8")).trim().split("\n");

await Promise.all(rules.filter(rule => /^\/[a-z]{2}\/[a-z0-9-]+\/ /.test(rule)).map(async rule => {
  const [from, to] = rule.split(" ");
  const target = from.slice(1);
  const lang = target.split("/")[0];
  const directory = new URL(target, output);
  await mkdir(directory, { recursive: true });
  await writeFile(new URL("index.html", directory),
    `<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><meta name="robots" content="noindex"><meta http-equiv="refresh" content="0; url=${to}"><link rel="canonical" href="https://pikobuyspreadsheet.uk${to}"></head><body><a href="${to}">PikoBuy</a></body></html>\n`);
}));
