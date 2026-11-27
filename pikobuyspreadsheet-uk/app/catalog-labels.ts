import strings from "./catalog-labels.json";

export const catalogEnglish = {
  browse: "Browse products", featured: "Featured products", all: "All categories",
  search: "Search products", empty: "No matching products.", loading: "Loading products…",
  unavailable: "Product data is temporarily unavailable.", productMissing: "This product is unavailable in the catalog.",
  back: "Back to products", buy: "Buy on PikoBuy", agents: "Other purchasing platforms",
  copy: "Copy product link", copied: "Link copied", seller: "Original Weidian listing",
  details: "Listing photos", qc: "QC photos", options: "Seller options",
  previous: "Previous page", next: "Next page", price: "See listing for price",
  shoes: "Shoes", hoodies: "Hoodies and sweaters", shirts: "T-shirts", jackets: "Jackets",
  shorts: "Pants and shorts", headwear: "Headwear", accessories: "Accessories", jerseys: "Jerseys",
  electronics: "Electronics", sets: "Short sets", other: "Other products", buying: "Buying guides",
  colour: "Style", size: "Size",
} as const;
export type CatalogLabels = { [Key in keyof typeof catalogEnglish]: string };

export function catalogLabels(locale: string): CatalogLabels {
  return (strings as Record<string, CatalogLabels | undefined>)[locale] ?? catalogEnglish;
}
