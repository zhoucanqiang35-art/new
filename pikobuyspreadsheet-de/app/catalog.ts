export type Category = {
  name: string;
  note: string;
  href: string;
  icon: string;
  keywords: string[];
};

export type Product = {
  slug: string;
  title: string;
  category: string;
  price: string;
  cny: string;
  mainHref: string;
  summary: string;
  checks: string[];
};

export const categories: Category[] = [
  { name: "Shoes", note: "Sneakers, slides & trainers", href: "https://findspreadsheet.com/shoes/", icon: "01", keywords: ["shoe", "shoes", "sneaker", "sneakers", "trainer", "trainers", "running", "football"] },
  { name: "Hoodies", note: "Sweatshirts & knitwear", href: "https://findspreadsheet.com/hoodies-sweaters/", icon: "02", keywords: ["hoodie", "hoodies", "sweater", "sweatshirt", "knitwear"] },
  { name: "T-Shirts", note: "Tees, polos & basics", href: "https://findspreadsheet.com/t-shirts/", icon: "03", keywords: ["t-shirt", "t-shirts", "tshirt", "tee", "polo"] },
  { name: "Jackets", note: "Outerwear & layering", href: "https://findspreadsheet.com/jackets/", icon: "04", keywords: ["jacket", "jackets", "outerwear", "coat", "down"] },
  { name: "Pants / Shorts", note: "Denim, cargos & shorts", href: "https://findspreadsheet.com/pants-shorts/", icon: "05", keywords: ["pants", "shorts", "denim", "cargo", "trousers"] },
  { name: "Headwear", note: "Caps, hats & beanies", href: "https://findspreadsheet.com/headwear/", icon: "06", keywords: ["headwear", "cap", "caps", "hat", "hats", "beanie"] },
  { name: "Accessories", note: "Bags, belts & small goods", href: "https://findspreadsheet.com/accessories/", icon: "07", keywords: ["accessory", "accessories", "bag", "belt", "wallet"] },
  { name: "Jerseys", note: "Football & team styles", href: "https://findspreadsheet.com/jersey/", icon: "08", keywords: ["jersey", "jerseys", "football", "team"] },
  { name: "Electronics", note: "Audio, tablets & devices", href: "https://findspreadsheet.com/electronics/", icon: "09", keywords: ["electronics", "audio", "tablet", "device", "headphones"] },
  { name: "Other Finds", note: "Lifestyle & unusual finds", href: "https://findspreadsheet.com/AllProducts/", icon: "10", keywords: ["other", "lifestyle", "all"] },
];

export const products: Product[] = [
  {
    slug: "nike-phantom-gx-elite-ag-pro",
    title: "Nike Phantom GX Elite AG-PRO",
    category: "Shoes",
    price: "$40.45",
    cny: "¥272",
    mainHref: "https://findspreadsheet.com/shoes/",
    summary: "A football boot research lead. Check the outsole, size label, upper texture and pair symmetry before comparing it with other shoe finds.",
    checks: ["Confirm the exact size label and insole length", "Inspect outsole studs and bonding in QC photos", "Allow for shoe-box weight in the parcel estimate"],
  },
  {
    slug: "gcds-logo-band-hoodie",
    title: "GCDS Logo Band Hoodie",
    category: "Hoodies",
    price: "$36.88",
    cny: "¥248",
    mainHref: "https://findspreadsheet.com/hoodies-sweaters/",
    summary: "A heavyweight hoodie research lead. Compare measurements, logo placement, ribbing and material notes rather than relying on the tagged size alone.",
    checks: ["Compare chest and length measurements", "Review cuff, hem and logo alignment", "Estimate volumetric impact for thicker fabric"],
  },
  {
    slug: "cp-company-down-jacket",
    title: "CP Company Down Jacket",
    category: "Jackets",
    price: "$38.36",
    cny: "¥258",
    mainHref: "https://findspreadsheet.com/jackets/",
    summary: "An outerwear research lead where fill, hardware and packed volume matter. Confirm current options and warehouse evidence on the live record.",
    checks: ["Inspect zips, lenses and pocket construction", "Check size-chart measurements against a known jacket", "Budget for high packed volume even when weight is moderate"],
  },
  {
    slug: "polo-ralph-lauren-knit-cap",
    title: "Polo Ralph Lauren Knit Cap",
    category: "Headwear",
    price: "$5.80",
    cny: "¥39",
    mainHref: "https://findspreadsheet.com/headwear/",
    summary: "A compact headwear research lead. Focus on knit density, badge placement, colour consistency and the current live variant.",
    checks: ["Confirm colour and badge placement", "Review knit texture under clear lighting", "Combine parcel planning with other lightweight items"],
  },
];

export function productBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
