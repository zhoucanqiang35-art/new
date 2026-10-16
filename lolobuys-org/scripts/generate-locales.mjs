import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const langs = ["de", "fr", "es", "it", "pt", "nl", "pl", "sv"];
const pages = ["index.html", "categories/index.html", "product-details/index.html", "guides/index.html", "guides/lolobuy-spreadsheet-guide/index.html", "guides/lolobuy-qc-photos-guide/index.html", "guides/lolobuy-product-links-guide/index.html", "guides/lolobuy-parcel-planning-guide/index.html", "seo-articles/index.html", "faq/index.html"];
const names = {de:"LoloBuy Spreadsheet 2026: Funde, QC und Kategorien",fr:"Tableur LoloBuy 2026 : trouvailles, QC et catégories",es:"Hoja de cálculo LoloBuy 2026: hallazgos, QC y categorías",it:"Spreadsheet LoloBuy 2026: scoperte, QC e categorie",pt:"Spreadsheet LoloBuy 2026: achados, QC e categorias",nl:"LoloBuy-spreadsheet 2026: vondsten, QC en categorieën",pl:"Arkusz LoloBuy 2026: znaleziska, QC i kategorie",sv:"LoloBuy-kalkylblad 2026: fynd, QC och kategorier"};
const esc = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
for (const lang of langs) {
  const target = join(root, lang);
  rmSync(target, {recursive:true, force:true});
  for (const page of pages) {
    const source = join(root, page); if (!existsSync(source)) continue;
    const destination = join(target, page); mkdirSync(dirname(destination), {recursive:true});
    const route = page === "index.html" ? "" : page.replace(/index\.html$/, "");
    const current = `https://lolobuys.org/${lang}/${route}`.replace(/\/$/, route ? "/" : "/");
    const alternates = [`<link rel="alternate" hreflang="en" href="https://lolobuys.org/${route}">`, ...langs.map(code => `<link rel="alternate" hreflang="${code}" href="https://lolobuys.org/${code}/${route}">`), `<link rel="alternate" hreflang="x-default" href="https://lolobuys.org/${route}">`].join("");
    let html = readFileSync(source, "utf8").replace('<html lang="en">', `<html lang="${lang}">`);
    html = html.replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${current}">${alternates}`);
    if (!html.includes('rel="canonical"')) html = html.replace("</head>", `<link rel="canonical" href="${current}">${alternates}</head>`);
    if (page === "index.html") html = html.replace(/<title>[^<]*<\/title>/, `<title>${names[lang]}</title>`);
    writeFileSync(destination, html);
  }
}
const base = readFileSync(join(root,"sitemap.xml"),"utf8").replace("</urlset>","");
const urls = pages.map(page => page === "index.html" ? "" : page.replace(/index\.html$/, ""));
const localeEntries = langs.flatMap(lang => urls.map(route => `  <url><loc>https://lolobuys.org/${lang}/${route}</loc><changefreq>monthly</changefreq><priority>0.6</priority></url>`));
writeFileSync(join(root,"sitemap-languages.xml"), `${base}${localeEntries.join("\n")}\n</urlset>\n`);
