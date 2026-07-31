import type { Metadata } from "next";
import { StandalonePage } from "../standalone-page";

export const metadata: Metadata = {
  title: "LoloBuy Product Categories — Shoes, Clothing, Bags & More",
  description: "Browse LoloBuy spreadsheet categories for shoes, clothing, bags, accessories, watches, eyewear and home finds.",
  alternates: { canonical: "https://lolobuysheet.es/categories" },
};

export default function CategoriesPage() {
  return <StandalonePage section="categories" />;
}
