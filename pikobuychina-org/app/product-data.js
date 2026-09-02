export const products = [
  { label: 'Shoes', slug: 'shoes', target: 'https://findspreadsheet.com/shoes/' },
  { label: 'Hoodies', slug: 'hoodies', target: 'https://findspreadsheet.com/hoodies-sweaters/' },
  { label: 'Jackets', slug: 'jackets', target: 'https://findspreadsheet.com/jackets/' },
  { label: 'T-Shirts', slug: 't-shirts', target: 'https://findspreadsheet.com/t-shirts/' },
  { label: 'Bags', slug: 'bags', target: 'https://findspreadsheet.com/accessories/' },
  { label: 'Accessories', slug: 'accessories', target: 'https://findspreadsheet.com/accessories/' },
  { label: 'Jerseys', slug: 'jerseys', target: 'https://findspreadsheet.com/jersey/' },
  { label: 'Pants', slug: 'pants', target: 'https://findspreadsheet.com/pants-shorts/' },
  { label: 'Electronics', slug: 'electronics', target: 'https://findspreadsheet.com/electronics/' },
  { label: 'Other Finds', slug: 'other-finds', target: 'https://findspreadsheet.com/other-stuff/' }
];

export const productBySlug = Object.fromEntries(products.map((product) => [product.slug, product]));
