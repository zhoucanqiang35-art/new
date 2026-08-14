import fs from "node:fs";
import path from "node:path";

const siteUrl = "https://pikobuyspreadsheet.pro";
const locales = ["en","es","de","fr","it","pt","nl","pl","cs","sv","da","nb","fi","el","ro","hu","tr","ar","ru","uk","ja","hi","id","vi"];
const paths = [
  "/", "/about", "/articles", "/categories", "/editorial-policy", "/faq", "/guides", "/method", "/official-sources", "/privacy",
  "/articles/how-to-use-a-pikobuy-spreadsheet", "/articles/how-to-read-pikobuy-qc-photos", "/articles/pikobuy-shipping-cost-guide",
  ...["shoes","t-shirts","hoodies","jackets","pants","bags","accessories","jewelry","watches","electronics"].map((slug)=>`/categories/${slug}`),
  ...["beginner","qc","shipping","returns","fees","tracking"].map((slug)=>`/guides/${slug}`),
  ...["independent-research","evidence-led","buyer-first","multilingual-research"].map((slug)=>`/method/${slug}`),
];

function localized(locale, pathname) {
  if (locale === "en") return pathname;
  return pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
}

const urls = locales.flatMap((locale)=>paths.map((pathname)=>`${siteUrl}${localized(locale,pathname)}`));
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((url)=>`  <url><loc>${url}</loc><lastmod>2026-08-13</lastmod></url>`).join("\n")}\n</urlset>\n`;
const publicDir = path.join(process.cwd(),"public");
fs.mkdirSync(publicDir,{recursive:true});
fs.writeFileSync(path.join(publicDir,"sitemap.xml"),xml);
fs.writeFileSync(path.join(publicDir,"robots.txt"),`User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`);
console.log(`Generated robots.txt and sitemap.xml with ${urls.length} localized URLs.`);
