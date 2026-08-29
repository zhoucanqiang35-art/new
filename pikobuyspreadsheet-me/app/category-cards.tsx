import { Footprints, Gem, Glasses, Layers3, PanelTop, Shirt, ShoppingBag, Watch } from "lucide-react";

const labels = {
  en: ["Shoes", "Sneakers", "Shirts", "Hoodies", "Jackets", "Pants", "Bags", "Shorts", "Accessories", "Jewelry", "Watches", "Sweaters"],
  de: ["Schuhe", "Sneaker", "Shirts", "Hoodies", "Jacken", "Hosen", "Taschen", "Shorts", "Accessoires", "Schmuck", "Uhren", "Pullover"],
  fr: ["Chaussures", "Baskets", "T-shirts", "Sweats", "Vestes", "Pantalons", "Sacs", "Shorts", "Accessoires", "Bijoux", "Montres", "Pulls"],
  es: ["Zapatos", "Zapatillas", "Camisetas", "Sudaderas", "Chaquetas", "Pantalones", "Bolsos", "Shorts", "Accesorios", "Joyería", "Relojes", "Suéteres"],
  it: ["Scarpe", "Sneaker", "Magliette", "Felpe", "Giacche", "Pantaloni", "Borse", "Shorts", "Accessori", "Gioielli", "Orologi", "Maglioni"],
  pt: ["Sapatos", "Ténis", "Camisas", "Sweatshirts", "Casacos", "Calças", "Malas", "Calções", "Acessórios", "Joias", "Relógios", "Camisolas"],
  nl: ["Schoenen", "Sneakers", "Shirts", "Hoodies", "Jassen", "Broeken", "Tassen", "Shorts", "Accessoires", "Sieraden", "Horloges", "Truien"],
  pl: ["Buty", "Sneakersy", "Koszulki", "Bluzy", "Kurtki", "Spodnie", "Torby", "Szorty", "Akcesoria", "Biżuteria", "Zegarki", "Swetry"],
} as const;

const categoryData = [
  { route: "shoes", icon: Footprints },
  { route: "shoes", icon: Footprints },
  { route: "t-shirts", icon: Shirt },
  { route: "hoodies-sweaters", icon: Shirt },
  { route: "jackets", icon: Layers3 },
  { route: "pants-shorts", icon: PanelTop },
  { route: "bags", icon: ShoppingBag },
  { route: "pants-shorts", icon: PanelTop },
  { route: "accessories", icon: Glasses },
  { route: "accessories", icon: Gem },
  { route: "accessories", icon: Watch },
  { route: "hoodies-sweaters", icon: Shirt },
] as const;

export default function CategoryCards({ lang = "en" }: { lang?: keyof typeof labels }) {
  const prefix = lang === "en" ? "" : `/${lang}`;
  return <div className="category-icon-grid">
    {categoryData.map(({ route, icon: Icon }, index) => <a
      className="category-icon-card"
      href={`${prefix}/categories/${route}`}
      key={`${route}-${index}`}
    >
      <span className="category-icon"><Icon size={29} strokeWidth={1.8}/></span>
      <strong>{labels[lang][index]}</strong>
    </a>)}
  </div>;
}
