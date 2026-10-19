import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const domain = "https://lolobuyspreadsheet.fr";
const languages = [
  ["fr", "Français", "LoloBuy Spreadsheet 2026 : trouvailles, QC et livraison France"],
  ["de", "Deutsch", "LoloBuy Spreadsheet 2026: Funde, QC und Versand-Recherche"],
  ["es", "Español", "LoloBuy Spreadsheet 2026: productos, QC e investigación de envío"],
  ["it", "Italiano", "LoloBuy Spreadsheet 2026: prodotti, QC e ricerca spedizioni"],
  ["pt", "Português", "LoloBuy Spreadsheet 2026: produtos, QC e pesquisa de envio"],
  ["nl", "Nederlands", "LoloBuy Spreadsheet 2026: vondsten, QC en verzendresearch"],
  ["pl", "Polski", "LoloBuy Spreadsheet 2026: produkty, QC i badanie wysyłki"],
  ["sv", "Svenska", "LoloBuy Spreadsheet 2026: fynd, QC och fraktresearch"],
];
const routes = ["/", "/categories", "/products", "/find-system", "/shipping-calculator", "/articles", "/faq", "/shoes", "/hoodies", "/t-shirts", "/jackets", "/pants", "/bags", "/watches", "/electronics", "/accessories"];
const articleSlugs = ["lolobuy-first-order-research-guide", "lolobuy-qc-photo-decision-framework", "lolobuy-review-2026", "lolobuy-fees-cost-ledger", "lolobuy-warehouse-consolidation", "lolobuy-shipping-planning"];
for (const slug of articleSlugs) routes.push(`/articles/${slug}`);

const esc = (value) => value.replace(/[&<>"']/g, (ch) => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[ch]));
const humanPath = (path) => path === "/" ? "LoloBuy Spreadsheet" : path.split("/").filter(Boolean).map((part) => part.replaceAll("-", " ")).join(" · ");
const body = (lang, label, title, route) => {
  const current = `/${lang}${route === "/" ? "/" : route}`;
  const canonical = `${domain}${current}`;
  const alternates = [["en", `${domain}${route}`], ...languages.map(([id]) => [id, `${domain}/${id}${route === "/" ? "/" : route}`])]
    .map(([id, url]) => `<link rel="alternate" hreflang="${id}" href="${url}">`).join("");
  const nav = ["/", "/categories", "/products", "/articles", "/faq"].map((item) => `<a href="/${lang}${item === "/" ? "/" : item}">${esc(humanPath(item))}</a>`).join(" · ");
  const articleNote = route.startsWith("/articles/") ? "This guide uses a fact-led research method: preserve the selected variation, date and visible evidence; distinguish estimates from final parcel details; and confirm the current account screen before acting." : "This independent research hub helps visitors compare listings, QC evidence, warehouse status and destination-sensitive parcel choices before opening the FindSpreadsheet database.";
  return `<!doctype html><html lang="${lang}"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(route === "/" ? title : `${humanPath(route)} | LoloBuy Spreadsheet`)}</title><meta name="description" content="${esc(articleNote)}"><link rel="canonical" href="${canonical}">${alternates}<link rel="icon" href="/favicon.svg"></head><body><main><nav>${nav}</nav><article><p>Independent LoloBuy research · ${esc(label)}</p><h1>${esc(route === "/" ? title : humanPath(route))}</h1><p>${esc(articleNote)}</p><h2>Research before deciding</h2><p>Keep the product link, selected option, destination and visible status together. A listing, warehouse picture or estimate can be useful evidence without becoming a promise about quality, route, delivery time, customs or final cost.</p><h2>Continue with the current details</h2><p>Compare only information that belongs to the same item and parcel. Then open the database with a clear search term and check live choices before any order decision.</p><p><a href="https://findspreadsheet.com/">Open FindSpreadsheet</a></p></article></main><div id="root"></div><script type="module" src="/assets/index.js"></script></body></html>`;
};

const dist = new URL("../dist/", import.meta.url).pathname;
const root = await readFile(join(dist, "index.html"), "utf8");
const asset = root.match(/<script[^>]+src="([^"]+)"/)?.[1];
if (!asset) throw new Error("Vite asset entry was not found");
for (const [lang, label, title] of languages) {
  for (const route of routes) {
    const target = join(dist, lang, route === "/" ? "index.html" : route.slice(1), "index.html");
    await mkdir(dirname(target), { recursive: true });
    await writeFile(target, body(lang, label, title, route).replace("/assets/index.js", asset));
  }
}
const urls = [
  ...routes.map((route) => `${domain}${route}`),
  ...languages.flatMap(([lang]) => routes.map((route) => `${domain}/${lang}${route === "/" ? "/" : route}`)),
];
await writeFile(join(dist, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((url) => `  <url><loc>${url}</loc></url>`).join("\n")}\n</urlset>\n`);
