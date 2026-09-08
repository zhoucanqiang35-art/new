import type { Metadata } from "next";
import { ArrowRight, Camera, ExternalLink, Ruler, Scale, ShieldCheck } from "lucide-react";
import { SiteFooter, SiteHeader } from "../site-chrome";
import ProductDetailCards from "../product-detail-cards";
import { localizedAlternates } from "../seo-metadata";

export const metadata: Metadata = {
  title: "PikoBuy Product Details | Links, QC, Size & Weight",
  description: "Understand the product details to verify before opening or saving a PikoBuy spreadsheet find.",
  alternates: localizedAlternates("product-details"),
};

const productTypes = [
  ["Sneakers", "Side profile, heel, outsole, size label, material close-ups, packed weight", "shoes"],
  ["T-shirts", "Chest, length, fabric, print placement, seams, colour", "t-shirts"],
  ["Hoodies", "Chest, length, fabric weight, lining, cuffs, hood, print", "hoodies-sweaters"],
  ["Jackets", "Shell, lining, closures, pockets, measurements, parcel volume", "jackets"],
  ["Pants", "Waist, rise, inseam, leg opening, fabric, wash", "pants-shorts"],
  ["Bags", "Dimensions, interior, hardware, straps, closures, packaging", "accessories"],
  ["Accessories", "Scale, material, fastening, finish, source match", "accessories"],
  ["Jewelry", "Dimensions, finish, clasp, stated material, close-ups", "accessories"],
  ["Watches", "Dial, case, clasp, dimensions, finish, stated movement", "accessories"],
  ["Electronics", "Model, specifications, plug, accessories, battery, route eligibility", "electronics"],
] as const;

export default function ProductDetailsPage() {
  return <main>
    <SiteHeader />
    <section className="directory-hero">
      <p className="kicker">PRODUCT DETAIL DIRECTORY</p>
      <h1>Read the evidence behind every PikoBuy find.</h1>
      <p>Product cards are useful only when the source link, current options, QC photos, measurements and likely shipping weight still agree.</p>
      <a className="button-dark" href="https://findspreadsheet.com/" target="_blank" rel="noopener noreferrer">Open the product database <ArrowRight size={16}/></a>
    </section>

    <section className="detail-principles">
      <article><ExternalLink/><h2>Source match</h2><p>Confirm that the original marketplace listing still shows the same item, options and images.</p></article>
      <article><Camera/><h2>QC evidence</h2><p>Use category-specific photo angles. One attractive image is not a complete inspection.</p></article>
      <article><Ruler/><h2>Measurements</h2><p>Compare centimetres with an item you already own instead of trusting a size label alone.</p></article>
      <article><Scale/><h2>Weight context</h2><p>Judge value after likely packaging and parcel weight, especially for shoes, coats and bags.</p></article>
    </section>

    <section className="section product-directory">
      <div className="section-heading"><div><p className="kicker">TEN CORE CATEGORIES</p><h2>What each detail page should show.</h2></div><p>These checks help readers compare similar products before they continue to the main database.</p></div>
      <ProductDetailCards items={productTypes}/>
    </section>

    <section className="verification-band"><ShieldCheck/><div><h2>No invented product promises</h2><p>Prices, stock, seller pages, variants and shipping options can change. The main database is the next research step—not a guarantee of product quality or availability.</p></div></section>
    <SiteFooter />
  </main>;
}
