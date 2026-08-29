import type { Metadata } from "next";
import ArticleShell from "../components/ArticleShell";
import CategoryIcon from "../components/CategoryIcon";
import { categories } from "../catalog";

export const metadata: Metadata = {
  title: "PikoBuy Spreadsheet Product Categories",
  description: "Browse ten PikoBuy spreadsheet research categories, then continue to the matching live FindSpreadsheet category.",
  alternates: { canonical: "/categories" },
};

export default function CategoriesPage() {
  return (
    <ArticleShell
      eyebrow="Product categories"
      title="Ten focused paths into the live product database."
      intro="Start with the product type, compare the checks that matter for that category, and continue only to the corresponding FindSpreadsheet section."
    >
      <p className="lead">A category page is more useful than one mixed product list when sizing, inspection evidence and parcel impact differ. Use the ten routes below to narrow the research task before opening the live main database.</p>
      <div className="category-grid category-page-grid">
        {categories.map((category) => (
          <a className="category-card" key={category.name} href={`/categories/${category.slug}`}>
            <span className="category-icon-box"><CategoryIcon name={category.name} /></span>
            <div className="category-copy"><b>{category.name}</b><small>{category.note}</small></div>
            <span className="category-open" aria-hidden="true">→</span>
          </a>
        ))}
      </div>
      <h2>Use a category as a comparison boundary.</h2>
      <p>Compare similar products side by side, confirm that the current destination still matches the title and images, and review the category-specific sizing or quality questions before relying on a spreadsheet row. Every category above leads only to FindSpreadsheet, your live main database.</p>
    </ArticleShell>
  );
}
