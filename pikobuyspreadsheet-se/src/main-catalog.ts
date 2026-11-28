import { localPath } from "./i18n";
import { mainSite } from "./data";
import { productListings, type Listing } from "./product-listings";

export type CatalogRow = [
  id: string, sellerId: string, name: string, path: string, image: string, cny: number | null,
];

export const catalogCategories = [
  "shoes", "shoes", "t-shirts", "hoodies-sweaters", "jackets", "pants-shorts",
  "headwear", "ShortSets", "accessories", "jersey", "electronics", "other-stuff",
] as const;

export function catalogHref(locale: string, category = "", query = "", page = 1) {
  const params = new URLSearchParams();
  if (category) params.set("category", category);
  if (query) params.set("q", query);
  if (page > 1) params.set("page", String(page));
  return `${localPath(locale, "products")}/${params.size ? `?${params}` : ""}`;
}

export function catalogProductHref(locale: string, item: CatalogRow) {
  return localPath(locale, `product/${item[0]}`);
}

export function catalogImage(path: string) {
  return path.startsWith("/") ? mainSite + path : path;
}

export function catalogCategory(item: CatalogRow) {
  return item[3].split("/")[1];
}

const normalize = (text: string) => text.toLowerCase().normalize("NFKD").replace(/\p{M}/gu, "");

export function filterCatalog(data: CatalogRow[], category: string, query: string) {
  const reference = /^\d+$/.test(query) ? query : null;
  let referencePath = query.startsWith("/") ? query : "";
  let sellerReference = "";
  try {
    let url = new URL(query);
    if (url.hostname === "www.pikobuy.com" || url.hostname === "pikobuy.com") {
      url = new URL(url.searchParams.get("productUrl") ?? "");
    }
    if (["weidian.com", "www.weidian.com", "m.weidian.com"].includes(url.hostname)) {
      sellerReference = url.searchParams.get("itemID") ?? "";
    }
    if (url.origin === mainSite) referencePath = url.pathname;
  } catch {
    // Ordinary keywords are handled by the text match below.
  }
  const terms = normalize(query).split(/[\s-]+/).filter(Boolean);
  return data.filter(item => {
    if (category && catalogCategory(item) !== (category === "bags" ? "accessories" : category)) return false;
    if (category === "bags" && !/bag|backpack|pouch|tote|satchel/i.test(item[2])) return false;
    if (sellerReference) return item[1] === sellerReference;
    if (referencePath) return item[3] === referencePath || referencePath.replace(/\/$/, "") === `/product/${item[0]}`;
    if (reference) return item[0] === reference || item[1] === reference;
    const haystack = normalize(`${item[2]} ${item[3]}`);
    return terms.every(term => haystack.includes(term));
  });
}

export function catalogListing(row: CatalogRow, photos: string[]): Listing {
  const itemId = row[1];
  const featured = Object.values(productListings).find(item => item.itemId === itemId);
  if (featured) return featured;
  const seller = `https://weidian.com/item.html?itemID=${itemId}`;
  return {
    itemId,
    buy: itemId ? `https://www.pikobuy.com/product/detail?productUrl=${encodeURIComponent(seller)}` : "",
    gallery: [...new Set([...photos, row[4]].filter(Boolean).map(catalogImage))],
    styles: [],
    sizes: [],
    availablePrices: {},
  };
}

type SourceSku = {
  weidian_id?: string | number;
  images?: unknown[];
  specifications?: {
    attrs?: { attr_title?: string; attr_values?: { attr_id?: string | number; attr_value?: string; img?: string }[] }[];
    skus?: Record<string, { attr_ids?: string; stock?: number; price?: string | number }>;
  };
};

function sellerPhoto(source: unknown) {
  if (typeof source !== "string") return null;
  try {
    const url = new URL(source, mainSite);
    if (url.protocol !== "https:" || url.username || url.password) return null;
    if (url.origin === mainSite && url.pathname.startsWith("/uploads/")) return url.href;
    if (url.hostname === "si.geilicdn.com") return url.href;
  } catch {
    // Reject malformed image URLs.
  }
  return null;
}

export function addLiveSpecifications(listing: Listing, data: SourceSku): Listing {
  if (String(data.weidian_id) !== listing.itemId) return listing;
  const sellerGallery = (Array.isArray(data.images) ? data.images : []).slice(0, 24).map(sellerPhoto).filter((photo): photo is string => !!photo);
  const gallery = [...new Set([...sellerGallery, ...listing.gallery])];
  const attrs = data.specifications?.attrs;
  if (!Array.isArray(attrs) || attrs.length !== 2) return { ...listing, gallery };

  const sizeGroup = attrs.findIndex(group => /size|尺[寸码碼]|规格尺寸/i.test(group.attr_title ?? ""));
  if (sizeGroup === -1) return { ...listing, gallery };
  const styles = (attrs[1 - sizeGroup].attr_values ?? []).filter(option => option.attr_id != null && option.attr_value?.trim()).slice(0, 180);
  const sizes = (attrs[sizeGroup].attr_values ?? []).filter(option => option.attr_id != null && option.attr_value?.trim()).slice(0, 90);
  if (!styles.length || !sizes.length) return { ...listing, gallery };
  const styleIndex = new Map(styles.map((option, index) => [String(option.attr_id), index]));
  const sizeIndex = new Map(sizes.map((option, index) => [String(option.attr_id), index]));
  const availablePrices: Listing["availablePrices"] = {};
  for (const variant of Object.values(data.specifications?.skus ?? {}).slice(0, 5000)) {
    if (!(Number(variant?.stock) > 0)) continue;
    const ids = (variant.attr_ids ?? "").split("-");
    if (ids.length !== 2) continue;
    const style = styleIndex.get(ids[1 - sizeGroup]);
    const size = sizeIndex.get(ids[sizeGroup]);
    const price = Number(variant.price);
    if (style == null || size == null || !Number.isFinite(price) || price <= 0) continue;
    (availablePrices[style] ??= {})[size] = price;
  }
  if (!Object.keys(availablePrices).length) return { ...listing, gallery };
  return {
    ...listing, gallery, availablePrices,
    styles: styles.map(option => [option.attr_value!.trim(), sellerPhoto(option.img)]),
    sizes: sizes.map(option => option.attr_value!.trim()),
  };
}
