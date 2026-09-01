"use client";

import { useRef } from "react";
import { SiteHeader } from "./components/site-header";
import { MainLink } from "./components/main-link";
import { products, searchUrl } from "./lib/catalog";

export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null);
  const search = () => { window.location.assign(searchUrl(inputRef.current?.value.trim() || "")); };
  return <main>
    <SiteHeader />
    <section className="hero">
      <p className="eyebrow">INDEPENDENT BUYING GUIDE · EUROPE &amp; NORTH AMERICA</p>
      <h1>Find with context.<br /><em>Buy with confidence.</em></h1>
      <p className="lead">Search FindSpreadsheet directly. Your words open the matching live results page on the main site.</p>
      <form className="search" onSubmit={event => { event.preventDefault(); search(); }}>
        <input ref={inputRef} name="keywords" placeholder="Search products, brands or categories" aria-label="Search products" />
        <button type="submit">Search FindSpreadsheet</button>
      </form>
      <MainLink className="database" href="https://findspreadsheet.com/">Browse FindSpreadsheet homepage ↗</MainLink>
    </section>
    <section className="section home-categories">
      <p className="eyebrow">PRODUCT CATEGORIES</p><h2>Start with a category.</h2>
      <div className="category-chip-grid home-chip-grid">{products.map(product => <a className="category-chip" key={product.slug} href={`/categories/${product.slug}`}><span aria-hidden="true">{product.icon}</span><span className="notranslate" translate="no">{product.name}</span></a>)}</div>
      <a className="section-link" href="/categories">Open the full category page →</a>
    </section>
    <section className="product-section"><p className="eyebrow">PRODUCT DETAILS</p><h2>Open a card to view live results.</h2><div className="product-grid">{products.map(product => <a className="product-card" key={product.slug} href={searchUrl(product.search)} target="_blank" rel="noreferrer"><div className={`product-art art-${product.tone}`} aria-hidden="true"><span>{product.name.slice(0,1)}</span></div><div><p>{product.price}</p><h3><span className="notranslate" translate="no">{product.name}</span></h3><small>{product.summary}</small><b>Open results ↗</b></div></a>)}</div></section>
    <section className="guides"><p className="eyebrow">EXPLORE THE GUIDE</p><h2>Every menu item is a working page.</h2><div className="three"><a href="/guides"><h3>Guides</h3><p>Follow the product-research flow.</p><b>Open guides →</b></a><a href="/reviews"><h3>Reviews</h3><p>Use the evaluation framework.</p><b>Open reviews →</b></a><a href="/updates"><h3>Updates</h3><p>See what changed on the guide.</p><b>Open updates →</b></a></div></section>
    <footer><a className="logo" href="/"><img src="/lolobuy-logo.png" alt="LoloBuy" /></a><p>Independent preview · Product searches open FindSpreadsheet.</p></footer>
  </main>;
}
