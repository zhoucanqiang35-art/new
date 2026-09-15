import SiteApp from "../../site-app";

const allowed = ["shoes", "hoodies", "t-shirts", "jackets", "pants-shorts", "hats", "watches", "accessories", "electronics", "other-finds"];

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <SiteApp active="categories" categorySlug={allowed.includes(slug) ? slug : "shoes"} />;
}
