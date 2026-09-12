import { productRecords } from "./content-data";

export type FindCollection = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  criteria: string[];
  productSlugs: string[];
  primaryKeyword: string;
};

export const findCollections: FindCollection[] = [
  {
    slug: "budget-finds",
    title: "Budget PikoBuy Finds Under $20",
    description: "Compare recorded PikoBuy product finds below a $20 reference price, then recheck the live option, QC evidence and delivered cost.",
    intro: "This collection uses dated USD reference conversions, not a promise of today's checkout price. A low product price is useful only when the live variant still matches and domestic freight, international shipping and possible destination charges remain acceptable.",
    criteria: ["Recorded USD reference below $20", "Live variant and source price must be reopened", "Delivered cost is evaluated separately from product price"],
    productSlugs: ["cp-company-t-shirt", "lacoste-swim-shorts", "qatar-short-sleeve-suits"],
    primaryKeyword: "budget PikoBuy finds",
  },
  {
    slug: "summer-finds-2026",
    title: "PikoBuy Summer Finds 2026",
    description: "A compact 2026 summer shortlist covering T-shirts, shorts and lightweight sets, with sizing, QC and parcel-planning checks.",
    intro: "Summer labels describe intended use, not verified material performance. Compare measurements and selected options, inspect visible construction in warehouse photos and use measured parcel inputs before choosing an international route.",
    criteria: ["Warm-weather clothing category", "Measurements and exact option remain essential", "Material performance is not inferred from photographs"],
    productSlugs: ["gallery-short", "cp-company-t-shirt", "lacoste-swim-shorts", "qatar-short-sleeve-suits"],
    primaryKeyword: "PikoBuy summer finds 2026",
  },
  {
    slug: "qc-ready-finds",
    title: "PikoBuy Finds With Category-Specific QC Checks",
    description: "Browse recorded product pages that include practical, category-specific warehouse photo checks instead of a generic quality label.",
    intro: "Every record in this collection names visible details a buyer can examine. The checklist does not authenticate an item or prove internal condition, materials, durability, customs clearance or delivery.",
    criteria: ["At least three category-specific evidence checks", "Recorded price and check date are disclosed", "Every record links to the matching main-database page"],
    productSlugs: productRecords.map((product) => product.slug),
    primaryKeyword: "PikoBuy QC finds",
  },
];

export function getFindCollection(slug: string) {
  return findCollections.find((collection) => collection.slug === slug);
}

export function getCollectionProducts(collection: FindCollection) {
  return collection.productSlugs
    .map((slug) => productRecords.find((product) => product.slug === slug))
    .filter((product): product is (typeof productRecords)[number] => Boolean(product));
}
