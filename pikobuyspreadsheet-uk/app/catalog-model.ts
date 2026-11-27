import agents from "./catalog-agents.json";

export const catalogOrigin = "https://findspreadsheet.com";
export const catalogCategories = [
  ["shoes", "shoes"], ["hoodies-sweaters", "hoodies"], ["t-shirts", "shirts"],
  ["jackets", "jackets"], ["pants-shorts", "shorts"], ["headwear", "headwear"],
  ["accessories", "accessories"], ["jersey", "jerseys"], ["electronics", "electronics"],
  ["ShortSets", "sets"], ["other-stuff", "other"],
] as const;

export type CatalogProduct = {
  id: string; title: string; image: string; price: number | null; category: string;
  path: string; gallery?: string[];
};

export type Listing = {
  price: number | null;
  photos: string[];
  groups: { name: string; values: { id: string; label: string; image: string }[] }[];
  variants: { key: string; price: number }[];
};

export const productHref = (locale: string, id: string) => `/${locale}/product/?id=${encodeURIComponent(id)}`;
export const catalogHref = (locale: string, filter?: { category?: string; q?: string }) => {
  const query = new URLSearchParams();
  if (filter?.category) query.set("category", filter.category);
  if (filter?.q) query.set("q", filter.q);
  return `/${locale}/products/${query.size ? `?${query}` : ""}`;
};

export const mainImage = (path: string) => new URL(path, catalogOrigin).href;
export const sellerItem = (id: string) => `https://weidian.com/item.html?itemID=${encodeURIComponent(id)}`;

export function purchaseLinks(id: string) {
  return agents.flatMap((agent) => agent.template ? [{ name: agent.name, id: agent.id, logo: agent.logo,
    url: agent.template.replaceAll("{productId}", encodeURIComponent(id)) }] : []);
}
