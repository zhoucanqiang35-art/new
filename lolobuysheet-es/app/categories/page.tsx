import type { Metadata } from "next";
import { buildMetadata } from "../seo";
import { StandalonePage } from "../standalone-page";

export const metadata: Metadata = buildMetadata({
  title: "LoloBuy Product Categories — Shoes, Clothing, Bags & More",
  description: "Browse LoloBuy spreadsheet categories for shoes, clothing, bags, accessories, watches, eyewear and home finds.",
  path: "/categories",
});

export default function CategoriesPage() {
  return <StandalonePage section="categories" />;
}
