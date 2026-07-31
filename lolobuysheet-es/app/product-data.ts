export type Product = {
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  productId: string;
  sourcePriceCny: number;
  usdPrice: string;
  checked: string;
  image: string;
  sourceUrl: string;
  views?: number;
};

export const cnyUsdReference = {
  rate: 0.1481,
  date: "July 30, 2026",
};

export const products: Product[] = [
  {
    slug: "nike-zoom-kobe-s2",
    name: "Nike Zoom Kobe S2",
    category: "Shoes",
    categorySlug: "shoes",
    productId: "7711403309",
    sourcePriceCny: 409,
    usdPrice: "$60.56",
    checked: "Checked Jul 30",
    image: "https://findspreadsheet.com/uploads/allimg/20260319/1-2603191431255I.webp",
    sourceUrl: "https://findspreadsheet.com/shoes/nike-zoom-kobe-s2-2971.html",
  },
  {
    slug: "crocs",
    name: "Crocs",
    category: "Shoes",
    categorySlug: "shoes",
    productId: "7711448603",
    sourcePriceCny: 100,
    usdPrice: "$14.81",
    checked: "Checked Jul 30",
    image: "https://findspreadsheet.com/uploads/allimg/20260319/1-260319144330358.gif",
    sourceUrl: "https://findspreadsheet.com/shoes/crocs-2978.html",
  },
  {
    slug: "gallery-short",
    name: "Gallery Short",
    category: "Pants / Shorts",
    categorySlug: "pants-shorts",
    productId: "7711437541",
    sourcePriceCny: 145,
    usdPrice: "$21.47",
    checked: "Checked Jul 30",
    image: "https://findspreadsheet.com/uploads/allimg/20260319/1-260319153159600.webp",
    sourceUrl: "https://findspreadsheet.com/pants-shorts/gallery-short-3003.html",
  },
  {
    slug: "high-quality-burberry-jacket",
    name: "High quality Burberry Jacket",
    category: "Jackets",
    categorySlug: "jackets",
    productId: "7714490692",
    sourcePriceCny: 148,
    usdPrice: "$21.92",
    checked: "Checked Jul 30",
    image: "https://findspreadsheet.com/uploads/allimg/20260401/1-260401093931395.webp",
    sourceUrl: "https://findspreadsheet.com/jackets/high-quality-burberry-jacket-3131.html",
  },
  {
    slug: "dior-t-shirt-hoodie",
    name: "Dior T-shirt Hoodie — 39 styles",
    category: "Hoodies / Sweaters",
    categorySlug: "hoodies-sweaters",
    productId: "7711391539",
    sourcePriceCny: 85,
    usdPrice: "$12.59",
    checked: "Checked Jul 30",
    image: "https://findspreadsheet.com/uploads/allimg/20260319/1-260319152I0Q1.webp",
    sourceUrl: "https://findspreadsheet.com/hoodies-sweaters/dior-t-shirthoodie-39-style-top-3000.html",
  },
  {
    slug: "supreme-wallet",
    name: "Supreme Wallet",
    category: "Accessories",
    categorySlug: "accessories",
    productId: "7714549654",
    sourcePriceCny: 52.8,
    usdPrice: "$7.82",
    checked: "Checked Jul 30",
    image: "https://findspreadsheet.com/uploads/allimg/20260319/1-260319151R0937.webp",
    sourceUrl: "https://findspreadsheet.com/accessories/supreme-wallet-2995.html",
  },
];

// Fallback for the live carousel. These records come from the main site's
// "Latest Products" module and deliberately exclude every item in `products`,
// which is the separate homepage recommendation set.
export const latestCarouselFallback: Product[] = [
  {
    slug: "multi-brand-hat-selection",
    name: "Multi-brand Hat Selection",
    category: "Headwear",
    categorySlug: "headwear",
    productId: "7711557651",
    sourcePriceCny: 50,
    usdPrice: "$7.41",
    checked: "Main site latest",
    image: "https://findspreadsheet.com/uploads/allimg/20260319/1-26031915214B17.webp",
    sourceUrl: "https://findspreadsheet.com/headwear/prada-hatfendi-hatstone-island-hatbalenciaga-hatgucci-hat-2997.html",
    views: 16957,
  },
  {
    slug: "sock-37-colours",
    name: "Socks — 37 Colours",
    category: "Other Stuff",
    categorySlug: "other-stuff",
    productId: "7714498572",
    sourcePriceCny: 20,
    usdPrice: "$2.96",
    checked: "Main site latest",
    image: "https://findspreadsheet.com/uploads/allimg/20260319/1-260319152Z2T0.webp",
    sourceUrl: "https://findspreadsheet.com/other-stuff/sock-37-colores-top-3001.html",
    views: 15900,
  },
  {
    slug: "valentino-tees",
    name: "Valentino Tees",
    category: "T-Shirts",
    categorySlug: "t-shirts",
    productId: "7711512553",
    sourcePriceCny: 165,
    usdPrice: "$24.44",
    checked: "Main site latest",
    image: "https://findspreadsheet.com/uploads/allimg/20260319/1-2603191516262S.webp",
    sourceUrl: "https://findspreadsheet.com/t-shirts/valentino-tees-2994.html",
    views: 7405,
  },
  {
    slug: "the-north-face-outdoor-jacket",
    name: "The North Face Outdoor Jacket",
    category: "Jackets",
    categorySlug: "jackets",
    productId: "7711524403",
    sourcePriceCny: 145,
    usdPrice: "$21.47",
    checked: "Main site latest",
    image: "https://findspreadsheet.com/uploads/allimg/20260319/1-260319152350518.webp",
    sourceUrl: "https://findspreadsheet.com/jackets/the-north-face-outdoorjacket-2998.html",
    views: 5480,
  },
  {
    slug: "cp-company-t-shirt",
    name: "CP Company T-Shirt",
    category: "T-Shirts",
    categorySlug: "t-shirts",
    productId: "7714478764",
    sourcePriceCny: 118,
    usdPrice: "$17.48",
    checked: "Main site latest",
    image: "https://findspreadsheet.com/uploads/allimg/20260319/1-26031915254QX.webp",
    sourceUrl: "https://findspreadsheet.com/t-shirts/cp-company-t-shirt-2999.html",
    views: 3534,
  },
  {
    slug: "lacoste-swim-shorts",
    name: "Lacoste Swim Shorts",
    category: "Pants / Shorts",
    categorySlug: "pants-shorts",
    productId: "7714520304",
    sourcePriceCny: 121,
    usdPrice: "$17.92",
    checked: "Main site latest",
    image: "https://findspreadsheet.com/uploads/allimg/20260319/1-260319152004134.webp",
    sourceUrl: "https://findspreadsheet.com/pants-shorts/lacoste-swim-shorts-2996.html",
    views: 1673,
  },
];

export const mainCategories = [
  { icon: "◒", name: "Shoes", note: "Sneakers & footwear", href: "https://findspreadsheet.com/shoes/" },
  { icon: "▱", name: "Hoodies / Sweaters", note: "Layers & sweatshirts", href: "https://findspreadsheet.com/hoodies-sweaters/" },
  { icon: "◇", name: "T-Shirts", note: "Everyday tops", href: "https://findspreadsheet.com/t-shirts/" },
  { icon: "◫", name: "Jackets", note: "Outerwear picks", href: "https://findspreadsheet.com/jackets/" },
  { icon: "⌁", name: "Pants / Shorts", note: "Bottoms & shorts", href: "https://findspreadsheet.com/pants-shorts/" },
  { icon: "⌐", name: "Headwear", note: "Caps, hats & more", href: "https://findspreadsheet.com/headwear/" },
  { icon: "○", name: "Accessories", note: "Bags, wallets & extras", href: "https://findspreadsheet.com/accessories/" },
  { icon: "✦", name: "Jersey", note: "Team & sport styles", href: "https://findspreadsheet.com/jersey/" },
  { icon: "◉", name: "Electronics", note: "Devices & accessories", href: "https://findspreadsheet.com/electronics/" },
  { icon: "⌂", name: "Other Stuff", note: "More useful finds", href: "https://findspreadsheet.com/other-stuff/" },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
