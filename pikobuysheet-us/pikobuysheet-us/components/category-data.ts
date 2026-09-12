export type Category = {
  slug: string;
  name: string;
  icon: string;
  note: string;
  detail: string;
  seoDescription: string;
  checks: string[];
  query: string;
  databaseUrl: string;
};

const databaseSearch = (query: string) =>
  `https://findspreadsheet.com/AllProducts/?search=${encodeURIComponent(query)}`;

export const categories: Category[] = [
  {
    slug: "shoes",
    name: "Shoes",
    icon: "⌁",
    note: "Compare shoe listings by model, size, construction and visible evidence.",
    detail: "Compare the model name, selected size, upper construction, outsole, price context and the photos visible in the live result before deciding whether a row is useful.",
    seoDescription: "Independent shoe research page for checking model, size, construction, images and price context before opening FindSpreadsheet results.",
    checks: ["Model name and selected size", "Upper construction and outsole", "Visible angles and close-up evidence", "Price context in the live result"],
    query: "Shoes",
    databaseUrl: databaseSearch("Shoes"),
  },
  {
    slug: "hoodies-sweaters",
    name: "Hoodies",
    icon: "♧",
    note: "Compare hoodie and sweater rows by fabric, measurements and visible details.",
    detail: "Review the selected size, listed measurements, fabric information, ribbing, print or embroidery placement and the current listing photos before opening a product row.",
    seoDescription: "Independent hoodie and sweater research page for comparing measurements, fabric information, visible details and FindSpreadsheet results.",
    checks: ["Selected size and measurements", "Fabric and ribbing details", "Print or embroidery placement", "Current listing photos"],
    query: "Hoodies",
    databaseUrl: databaseSearch("Hoodies"),
  },
  {
    slug: "t-shirts",
    name: "T-Shirts",
    icon: "▣",
    note: "Compare T-shirt listings by fit, collar, print placement and measurements.",
    detail: "Check the collar shape, selected size, measurements, fabric information, print placement and visible listing photos before comparing the live product rows.",
    seoDescription: "Independent T-shirt research page for checking fit, collar shape, measurements, print placement and FindSpreadsheet results.",
    checks: ["Collar shape and selected size", "Measurements and fabric information", "Print placement and visible finish", "Current product photos"],
    query: "T-Shirts",
    databaseUrl: databaseSearch("T-Shirts"),
  },
  {
    slug: "jackets",
    name: "Jackets",
    icon: "◒",
    note: "Compare outerwear by panels, closures, lining, measurements and photos.",
    detail: "Inspect the panels, closures, lining, cuffs, material description, measurements and the current listing photographs before opening the matching product record.",
    seoDescription: "Independent jacket research page for comparing construction, lining, measurements and visible product information on FindSpreadsheet.",
    checks: ["Panels, closures and cuffs", "Lining and material description", "Selected size and measurements", "Current listing photographs"],
    query: "Jackets",
    databaseUrl: databaseSearch("Jackets"),
  },
  {
    slug: "pants-shorts",
    name: "Pants",
    icon: "◱",
    note: "Compare pants and shorts by waist, inseam, fit and construction details.",
    detail: "Compare the waist and inseam measurements, fabric information, pocket construction, selected fit and visible listing evidence before continuing to a live product row.",
    seoDescription: "Independent pants and shorts research page for checking fit, waist, inseam, construction and FindSpreadsheet results.",
    checks: ["Waist, inseam and selected size", "Fabric information and fit", "Pocket construction and visible finish", "Current listing evidence"],
    query: "Pants",
    databaseUrl: databaseSearch("Pants"),
  },
  {
    slug: "headwear",
    name: "Hats",
    icon: "♙",
    note: "Compare hats and headwear by shape, fit, stitching and adjustable details.",
    detail: "Check the crown shape, size or fit notes, stitching, adjustable details, embroidery placement and current listing photos before opening the live result.",
    seoDescription: "Independent hats and headwear research page for checking fit, stitching, embroidery and FindSpreadsheet results.",
    checks: ["Crown shape and fit notes", "Stitching and adjustable details", "Embroidery placement", "Current listing photos"],
    query: "Hats",
    databaseUrl: databaseSearch("Hats"),
  },
  {
    slug: "sets",
    name: "Watches",
    icon: "◇",
    note: "Compare watch search results by model reference, size, materials and photos.",
    detail: "Check the model or reference stated in the listing, case and strap details, dimensions, materials, selected variant and current images before opening a live result.",
    seoDescription: "Independent watch research page for checking model references, dimensions, material descriptions and FindSpreadsheet results.",
    checks: ["Model or reference stated in the listing", "Case, strap and visible materials", "Dimensions and selected variant", "Current listing images"],
    query: "Watches",
    databaseUrl: databaseSearch("Watches"),
  },
  {
    slug: "underwear-underpants",
    name: "Electronics",
    icon: "▤",
    note: "Compare electronics results by model, compatibility, variant and listing evidence.",
    detail: "Confirm the model, selected variant, compatibility details, plug or voltage information where shown, included accessories and current photos in the live product result.",
    seoDescription: "Independent electronics research page for checking model, compatibility, selected variant and FindSpreadsheet results.",
    checks: ["Model and selected variant", "Compatibility, plug or voltage details", "Included accessories where listed", "Current product evidence"],
    query: "Electronics",
    databaseUrl: databaseSearch("Electronics"),
  },
  {
    slug: "jersey",
    name: "Socks",
    icon: "◉",
    note: "Compare socks by material, size range, pack quantity and visible finish.",
    detail: "Check the material information, size range, pack quantity, stated construction, selected variant and listing photos before opening a live product row.",
    seoDescription: "Independent socks research page for checking materials, size range, pack quantity and FindSpreadsheet results.",
    checks: ["Material information and size range", "Pack quantity and selected variant", "Stated construction and visible finish", "Current listing photos"],
    query: "Socks",
    databaseUrl: databaseSearch("Socks"),
  },
  {
    slug: "accessories",
    name: "Accessories",
    icon: "▱",
    note: "Compare accessories by dimensions, materials, hardware and compatibility.",
    detail: "Use the listed dimensions, material description, hardware close-ups, selected variant, packaging information and compatibility notes to compare the current product rows.",
    seoDescription: "Independent accessories research page for checking dimensions, materials, hardware and FindSpreadsheet results.",
    checks: ["Dimensions and selected variant", "Materials and hardware close-ups", "Packaging information where listed", "Compatibility notes where relevant"],
    query: "Accessories",
    databaseUrl: databaseSearch("Accessories"),
  },
];
