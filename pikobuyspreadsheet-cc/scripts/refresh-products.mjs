import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const sourceUrl = "https://findspreadsheet.com/";
const response = await fetch(sourceUrl, { headers: { "user-agent": "PikoBuySpreadsheetResearch/1.0 (+https://pikobuyspreadsheet.cc/about)" } });
if (!response.ok) throw new Error(`FindSpreadsheet returned ${response.status}`);
const html = await response.text();
const rate = Number(process.env.CNY_PER_USD || "6.7499");
if (!Number.isFinite(rate) || rate <= 0) throw new Error("CNY_PER_USD must be a positive number");

const decode = (value) => value
  .replace(/&amp;/g, "&")
  .replace(/&#0*39;|&apos;/g, "'")
  .replace(/&quot;/g, '"')
  .replace(/<[^>]+>/g, " ")
  .replace(/\s+/g, " ")
  .trim();

const categoryNames = {
  "pants-shorts": "Pants / Shorts",
  jackets: "Jackets",
  "other-stuff": "Other Stuff",
  "hoodies-sweaters": "Hoodies / Sweaters",
  "t-shirts": "T-Shirts",
  headwear: "Headwear",
  accessories: "Accessories",
  shoes: "Shoes",
  electronics: "Electronics",
  jersey: "Jerseys",
};

const products = [];
const pattern = /<button[^>]+data-cart-add[^>]+data-cart-id="([^"]+)"[^>]+data-cart-title="([^"]*)"[^>]+data-cart-price="([^"]*)"[^>]+data-cart-image="([^"]*)"[^>]+data-cart-url="([^"]*)"[^>]+data-cart-weidian="([^"]*)"/g;
for (const match of html.matchAll(pattern)) {
  const [, id, rawName, rawPrice, rawImage, rawUrl, sourceId] = match;
  const cny = Number(rawPrice);
  if (!rawUrl || !rawImage || !Number.isFinite(cny)) continue;
  const categoryKey = rawUrl.split("/").filter(Boolean)[0] || "other-stuff";
  products.push({
    name: decode(rawName),
    category: categoryNames[categoryKey] || decode(categoryKey.replaceAll("-", " ")),
    badge: "Recently verified",
    cny,
    usd: Number((cny / rate).toFixed(2)),
    id: sourceId || id,
    image: new URL(rawImage, sourceUrl).toString(),
    url: new URL(rawUrl, sourceUrl).toString(),
    note: "Open the current record and confirm images, option, size, source price and outgoing destination before purchase.",
  });
  if (products.length === 8) break;
}

if (products.length < 8) throw new Error(`Expected at least 8 current product cards, found ${products.length}`);
const now = new Date();
const checkedAt = new Intl.DateTimeFormat("en-CA", { timeZone: "America/Los_Angeles", year: "numeric", month: "2-digit", day: "2-digit" })
  .formatToParts(now)
  .reduce((parts, part) => ({ ...parts, [part.type]: part.value }), {});
const checkedDate = `${checkedAt.year}-${checkedAt.month}-${checkedAt.day}`;
const payload = {
  checkedAt: checkedDate,
  sourceUrl,
  exchangeRate: { cnyPerUsd: rate, date: checkedDate, kind: "configured reference rate" },
  method: "Automated snapshot of the first eight cards in the FindSpreadsheet Latest Products section; links and prices remain subject to the live source.",
  products,
};
const target = fileURLToPath(new URL("../app/lib/latest-products.generated.json", import.meta.url));
await writeFile(target, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
console.log(`Refreshed ${products.length} product records from ${sourceUrl} on ${checkedDate}`);
