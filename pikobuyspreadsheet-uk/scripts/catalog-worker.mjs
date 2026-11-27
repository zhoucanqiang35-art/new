const main = "https://findspreadsheet.com";
const shardCount = 8;
let cachedCatalog;

function json(body, status = 200, cache = "no-store") {
  return Response.json(body, { status, headers: {
    "Cache-Control": cache, "X-Robots-Tag": "noindex",
  } });
}

function originImage(input, seller = false) {
  if (typeof input !== "string" || !input) return "";
  const url = URL.parse(input, main);
  if (!url || url.protocol !== "https:" || url.username || url.password) return "";
  if (url.origin === main && url.pathname.startsWith("/uploads/")) return url.href;
  return seller && url.hostname.endsWith(".geilicdn.com") ? url.href : "";
}

function key(text) {
  return text.toLowerCase().normalize("NFKD").replace(/\p{M}/gu, "");
}

function rowView(item) {
  const { gallery, ...summary } = item;
  return summary;
}

async function asset(env, requestUrl, path) {
  const response = await env.ASSETS.fetch(new URL(path, requestUrl));
  if (!response.ok) throw new Error("Catalog asset unavailable");
  return response.json();
}

async function catalog(env, url) {
  if (cachedCatalog) return cachedCatalog;
  const shards = await Promise.all(Array.from({length: shardCount}, (_, index) =>
    asset(env, url, `/data/uk-products-${index}.json`)
  ));
  const items = shards.flat();
  const byId = new Map(items.map(item => [item.id, item]));
  const byPath = new Map(items.map(item => [item.path, item]));
  const matches = items.map(item => ({ item, text: key(`${item.title} ${item.category} ${item.path} ${item.id}`) }));
  cachedCatalog = { byId, byPath, search: matches };
  return cachedCatalog;
}

function exactReference(input, data) {
  if (/^\d{6,16}$/.test(input)) return data.byId.get(input);
  let url = URL.parse(input);
  if (!url) return undefined;
  if (url.hostname === "www.pikobuy.com" || url.hostname === "pikobuy.com") {
    url = URL.parse(url.searchParams.get("productUrl") ?? "");
    if (!url) return undefined;
  }
  if (["weidian.com", "www.weidian.com", "m.weidian.com"].includes(url.hostname)) {
    return data.byId.get(url.searchParams.get("itemID"));
  }
  if (url.origin === main) return data.byPath.get(url.pathname);
  return undefined;
}

function search(url, data) {
  const term = (url.searchParams.get("q") ?? "").trim();
  const category = url.searchParams.get("category") ?? "";
  const page = Number(url.searchParams.get("page") ?? "1");
  if (term.length > 200 || !Number.isSafeInteger(page) || page < 1 || page > 500) {
    return json({error: "Invalid catalog search"}, 400);
  }
  const exact = exactReference(term, data);
  const words = key(term).split(/[\s-]+/).filter(Boolean);
  const matches = exact ? [exact] : data.search
    .filter(({item, text}) => (!category || item.category === category) && words.every(word => text.includes(word)))
    .map(({item}) => item);
  const start = (page - 1) * 24;
  return json({ items: matches.slice(start, start + 24).map(rowView), total: matches.length,
    hasNext: matches.length > start + 24, page }, 200, "public, max-age=600");
}

async function fetchMain(path) {
  const response = await fetch(main + path, { headers: { accept: "application/json" },
    signal: AbortSignal.timeout(5500) });
  if (!response.ok) throw new Error("FindSpreadsheet unavailable");
  return response.json();
}

function sellerListing(data, id) {
  if (String(data.weidian_id) !== id) return null;
  const photos = [...new Set((Array.isArray(data.images) ? data.images : []).slice(0, 40)
    .map(input => originImage(input, true)).filter(Boolean))];
  const attributes = Array.isArray(data.specifications?.attrs) ? data.specifications.attrs : [];
  const groups = attributes.slice(0, 6).flatMap(attribute => {
    if (typeof attribute.attr_title !== "string" || !Array.isArray(attribute.attr_values)) return [];
    const values = attribute.attr_values.slice(0, 180).flatMap(value => {
      const id = String(value.attr_id ?? value.id ?? "");
      const label = value.attr_value ?? value.name;
      if (!/^\d+$/.test(id) || typeof label !== "string" || !label.trim()) return [];
      return [{ id, label: label.trim().slice(0, 160), image: originImage(value.img ?? value.image, true) }];
    });
    return values.length ? [{ name: attribute.attr_title.trim().slice(0, 80), values }] : [];
  });
  const variants = Object.values(data.specifications?.skus ?? {}).slice(0, 3500).flatMap(sku => {
    const ids = String(sku?.attr_ids ?? "").split("-");
    const price = Number(sku?.price);
    return ids.length === groups.length && ids.every(id => /^\d+$/.test(id)) &&
      Number.isFinite(price) && price > 0 ? [{ key: ids.sort().join("-"), price }] : [];
  });
  const price = data.price == null || data.price === "" ? NaN : Number(data.price);
  return { price: Number.isFinite(price) && price >= 0 ? price : null, photos, groups, variants };
}

function qcPhotos(data, id) {
  if (String(data.itemId) !== id || !Array.isArray(data.images)) return [];
  const seen = new Set();
  return data.images.slice(0, 60).flatMap(entry => {
    if (entry?.isVideo || typeof entry?.display !== "string") return [];
    const url = URL.parse(entry.display);
    if (!url || url.protocol !== "https:" || url.username || url.password) return [];
    const key = entry.mediaId ?? url.origin + url.pathname;
    if (seen.has(key)) return [];
    seen.add(key);
    return [{ url: url.href, label: typeof entry.skuLabel === "string" ? entry.skuLabel.slice(0, 160) : "" }];
  }).slice(0, 24);
}

async function details(item) {
  const id = item.id;
  const [listing, qc] = await Promise.allSettled([
    fetchMain(`/api/Goods/getSkuData?weidian_id=${id}`).then(data => sellerListing(data, id)),
    fetchMain(`/qcradar-qc.php?item=${id}`).then(data => qcPhotos(data, id)),
  ]);
  const photos = qc.status === "fulfilled" ? qc.value : [];
  const options = listing.status === "fulfilled" ? listing.value : null;
  return json({ listing: options, qc: photos },
    200, options || photos.length ? "public, max-age=300, s-maxage=900" : "public, max-age=60");
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (!url.pathname.startsWith("/api/catalog/")) return env.ASSETS.fetch(request);
    if (request.method !== "GET") return json({error: "Method not allowed"}, 405);
    const route = url.pathname.replace(/\/$/, "");
    try {
      const data = await catalog(env, url);
      if (route === "/api/catalog/search") return search(url, data);
      if (route !== "/api/catalog/product" && route !== "/api/catalog/details") return json({error: "Not found"}, 404);
      const found = data.byId.get(url.searchParams.get("id"));
      if (!found) return json({error: "Product not found"}, 404);
      if (route === "/api/catalog/product") return json({ product: found }, 200, "public, max-age=600");
      return await details(found);
    } catch {
      return json({error: "Catalog temporarily unavailable"}, 503);
    }
  },
};
