export type Category = {
  slug: string;
  name: string;
  note: string;
  href: string;
  icon: string;
  keywords: string[];
  inspectionFocus: string;
  sizingFocus: string;
  parcelFocus: string;
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
  snapshotDate: string;
};

export const categories: Category[] = [
  { slug: "shoes", name: "Shoes", note: "Sneakers, slides & trainers", href: "https://findspreadsheet.com/shoes/", icon: "01", keywords: ["shoe", "shoes", "sneaker", "sneakers", "trainer", "trainers", "running", "football"], inspectionFocus: "Check outsole shape, stitching, bonding and pair symmetry in clear photos.", sizingFocus: "Compare the labelled size with insole length, not only your usual EU size.", parcelFocus: "Decide whether the shoe box is worth its added weight and volume." },
  { slug: "hoodies", name: "Hoodies", note: "Sweatshirts & knitwear", href: "https://findspreadsheet.com/hoodies-sweaters/", icon: "02", keywords: ["hoodie", "hoodies", "sweater", "sweatshirt", "knitwear"], inspectionFocus: "Review logo placement, seams, ribbing and fabric texture under even lighting.", sizingFocus: "Use chest, shoulder and length measurements instead of the tagged size alone.", parcelFocus: "Thick fleece and knitwear can add more parcel volume than expected." },
  { slug: "t-shirts", name: "T-Shirts", note: "Tees, polos & basics", href: "https://findspreadsheet.com/t-shirts/", icon: "03", keywords: ["t-shirt", "t-shirts", "tshirt", "tee", "polo"], inspectionFocus: "Check print alignment, collar shape, stitching and fabric transparency.", sizingFocus: "Compare chest width and total length with a T-shirt that already fits.", parcelFocus: "Lightweight items consolidate efficiently, but multiple pieces still add up." },
  { slug: "jackets", name: "Jackets", note: "Outerwear & layering", href: "https://findspreadsheet.com/jackets/", icon: "04", keywords: ["jacket", "jackets", "outerwear", "coat", "down"], inspectionFocus: "Inspect zips, pockets, lining, hardware and panel alignment.", sizingFocus: "Allow room for layers and compare sleeve, chest and back length measurements.", parcelFocus: "Outerwear can create high volumetric weight even when the scale weight looks moderate." },
  { slug: "pants-shorts", name: "Pants / Shorts", note: "Denim, cargos & shorts", href: "https://findspreadsheet.com/pants-shorts/", icon: "05", keywords: ["pants", "shorts", "denim", "cargo", "trousers"], inspectionFocus: "Review seams, pocket placement, closures and wash consistency.", sizingFocus: "Check waist, rise, inseam and thigh measurements against a known pair.", parcelFocus: "Denim is dense; estimate parcel weight across every pair you consolidate." },
  { slug: "headwear", name: "Headwear", note: "Caps, hats & beanies", href: "https://findspreadsheet.com/headwear/", icon: "06", keywords: ["headwear", "cap", "caps", "hat", "hats", "beanie"], inspectionFocus: "Inspect badge or embroidery placement, crown shape and colour consistency.", sizingFocus: "Confirm circumference, adjustability and depth where measurements are available.", parcelFocus: "Protect structured caps from crushing even if that increases parcel volume." },
  { slug: "accessories", name: "Accessories", note: "Bags, belts & small goods", href: "https://findspreadsheet.com/accessories/", icon: "07", keywords: ["accessory", "accessories", "bag", "belt", "wallet"], inspectionFocus: "Check hardware, edge finishing, closures, lining and visible marks.", sizingFocus: "Confirm belt length, bag dimensions or other product-specific measurements.", parcelFocus: "Hardware can make small accessories heavier than their dimensions suggest." },
  { slug: "jerseys", name: "Jerseys", note: "Football & team styles", href: "https://findspreadsheet.com/jersey/", icon: "08", keywords: ["jersey", "jerseys", "football", "team"], inspectionFocus: "Review badges, sponsor placement, numbering, seams and colour matching.", sizingFocus: "Check whether the cut is fan, player or retro fit before choosing a size.", parcelFocus: "Jerseys are light and usually efficient to consolidate with other clothing." },
  { slug: "electronics", name: "Electronics", note: "Audio, tablets & devices", href: "https://findspreadsheet.com/electronics/", icon: "09", keywords: ["electronics", "audio", "tablet", "device", "headphones"], inspectionFocus: "Confirm model, ports, included parts and any available functional test evidence.", sizingFocus: "Verify plug type, voltage and compatibility with the devices you already use.", parcelFocus: "Battery rules and restricted-item policies can limit available shipping routes." },
  { slug: "other-finds", name: "Other Finds", note: "Lifestyle & unusual finds", href: "https://findspreadsheet.com/AllProducts/", icon: "10", keywords: ["other", "lifestyle", "all"], inspectionFocus: "Identify the product-specific failure points before relying on generic photos.", sizingFocus: "Record the exact dimensions, variant and compatibility details that matter.", parcelFocus: "Check weight, dimensions and restricted-item status before adding it to a parcel." },
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
    snapshotDate: "2026-08-24",
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
    snapshotDate: "2026-08-24",
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
    snapshotDate: "2026-08-24",
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
    snapshotDate: "2026-08-24",
  },
];

export function productBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function categoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug);
}
