export type FeaturedProduct = {
  id: string;
  name: string;
  category: string;
  image: string;
  href: string;
  sourcePriceCny: number;
  usdReference: string;
  checks: string;
  options: string;
};

// Checked against the linked FindSpreadsheet pages on 06 August 2026.
// USD references use the 06 August 2026 reference rate 1 CNY = 0.14817 USD.
export const featuredProducts: FeaturedProduct[] = [
  {
    id: "7672372225",
    name: "NIKE Phantom GX Elite AG-PRO",
    category: "Shoes",
    image: "/products/nike-phantom-gx.webp",
    href: "https://findspreadsheet.com/shoes/nike-phantom-gx-elite-ag-pro-271.html",
    sourcePriceCny: 272,
    usdReference: "$40.30",
    checks: "Confirm the exact size, both side profiles, outsole pattern and insole measurement.",
    options: "Style and size choices are shown on the live product page.",
  },
  {
    id: "7694891852",
    name: "GCDS Logo Band Hoodies / Sweaters",
    category: "Hoodies",
    image: "/products/gcds-hoodie.webp",
    href: "https://findspreadsheet.com/hoodies-sweaters/gcds-logo-band-hoodiessweaters-40-styles-1523.html",
    sourcePriceCny: 248,
    usdReference: "$36.75",
    checks: "Match the chosen style, then request chest and length measurements plus a clear print view.",
    options: "The source record lists 40 styles; verify the exact option before payment.",
  },
  {
    id: "7670667269",
    name: "Apple iPad Pro 2023 listing",
    category: "Electronics",
    image: "/products/ipad-pro-listing.webp",
    href: "https://findspreadsheet.com/electronics/apple-ipad-pro-2023-high-performance-tablet-with-stunning-display-4-styles-34.html",
    sourcePriceCny: 890,
    usdReference: "$131.87",
    checks: "Treat model and performance claims as unverified; check seals, declared specification, accessories and route rules.",
    options: "Four styles are recorded on the source page. Warehouse photos cannot prove internal performance.",
  },
  {
    id: "7700091725",
    name: "New Balance 550 Sneakers",
    category: "Shoes",
    image: "/products/new-balance-550.webp",
    href: "https://findspreadsheet.com/shoes/new-balance-550-sneakers-13-styles-1753.html",
    sourcePriceCny: 260,
    usdReference: "$38.52",
    checks: "Compare the selected colorway, heel alignment, toe shape, sole join and measured insole length.",
    options: "The source record lists 13 styles; live availability can change.",
  },
  {
    id: "7703400359",
    name: "C.P. Company B Crossbody Rucksack",
    category: "Accessories",
    image: "/products/cp-crossbody.webp",
    href: "https://findspreadsheet.com/accessories/c-p-company-b-crossbody-rucksack-26-styles-2127.html",
    sourcePriceCny: 49,
    usdReference: "$7.26",
    checks: "Verify dimensions, strap anchors, closures, pocket layout and the exact selected style.",
    options: "The source record lists 26 styles, so the lowest row price may not describe every option.",
  },
  {
    id: "7691601236",
    name: "Cartier-style Mechanical Watch listing",
    category: "Electronics",
    image: "/products/cartier-watch-listing.webp",
    href: "https://findspreadsheet.com/electronics/new-cartier-mechanical-watches-39-style-top-1307.html",
    sourcePriceCny: 688,
    usdReference: "$101.94",
    checks: "Confirm the chosen style, declared movement, case dimensions, accessories, seals and inspection limits.",
    options: "The source record lists 39 styles. Appearance photos do not authenticate or test the movement.",
  },
];
