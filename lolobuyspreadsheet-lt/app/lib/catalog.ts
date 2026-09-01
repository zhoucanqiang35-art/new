export const products = [
  { slug: "shoes", name: "Shoes", icon: "⌁", price: "$ —", summary: "Sneakers, runners and footwear listings.", search: "shoes", tone: "orange" },
  { slug: "hoodies-sweaters", name: "Hoodies", icon: "♧", price: "$ —", summary: "Fleece, knitwear and everyday layers.", search: "hoodies", tone: "sage" },
  { slug: "t-shirts", name: "T-Shirts", icon: "⊞", price: "$ —", summary: "Tees and lightweight everyday tops.", search: "t-shirts", tone: "blue" },
  { slug: "jackets", name: "Jackets", icon: "⌘", price: "$ —", summary: "Outerwear and seasonal layers.", search: "jackets", tone: "pink" },
  { slug: "pants-shorts", name: "Pants", icon: "◉", price: "$ —", summary: "Trousers, denim and shorts.", search: "pants", tone: "violet" },
  { slug: "headwear", name: "Hats", icon: "⊙", price: "$ —", summary: "Caps, hats and headwear listings.", search: "hats", tone: "gold" },
  { slug: "sets", name: "Watches", icon: "▱", price: "$ —", summary: "Watch listings and wristwatch options.", search: "watches", tone: "orange" },
  { slug: "underwear-underpants", name: "Accessories", icon: "♡", price: "$ —", summary: "Bags, jewellery and accessory listings.", search: "electronics", tone: "sage" },
  { slug: "jersey", name: "Jersey", icon: "♙", price: "$ —", summary: "Sports shirts and jersey listings.", search: "jersey", tone: "blue" },
  { slug: "accessories", name: "Other Stuff", icon: "▢", price: "$ —", summary: "Miscellaneous product listings and other finds.", search: "socks", tone: "pink" },
] as const;

export const productBySlug = (slug: string) => products.find((product) => product.slug === slug);
export const searchUrl = (keywords: string) => `https://findspreadsheet.com/search.html?keywords=${encodeURIComponent(keywords)}`;
