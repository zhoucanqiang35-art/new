"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, BookOpenText, CheckCircle2, Search, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { Input } from "@/components/ui/input";
import { SiteHeader } from "@/app/components/SiteHeader";

const copy: Record<string, { badge: string; title: string; intro: string; search: string; button: string; browse: string; note: string }> = {
  en: { badge: "Independent PikoBuy research hub", title: "Find better PikoBuy spreadsheet products.", intro: "Search 20,000+ China shopping finds, compare categories, check QC priorities, and continue to the matching FindSpreadsheet product page.", search: "Search shoes, hoodies, bags or a product name", button: "Search products", browse: "Browse all products", note: "Product availability and prices can change. Confirm the live listing before ordering." },
  de: { badge: "Unabhängiger PikoBuy-Ratgeber", title: "Bessere PikoBuy-Spreadsheet-Produkte finden.", intro: "Durchsuche mehr als 20.000 Produktfunde, vergleiche Kategorien und prüfe wichtige QC-Details vor dem Kauf.", search: "Schuhe, Hoodies, Taschen oder Produktname suchen", button: "Produkte suchen", browse: "Alle Produkte", note: "Verfügbarkeit und Preise können sich ändern. Prüfe vor der Bestellung das aktuelle Angebot." },
  fr: { badge: "Guide PikoBuy indépendant", title: "Trouvez de meilleurs produits PikoBuy Spreadsheet.", intro: "Recherchez plus de 20 000 produits, comparez les catégories et vérifiez les points QC avant de commander.", search: "Rechercher chaussures, sweats, sacs ou produit", button: "Rechercher", browse: "Tous les produits", note: "Les prix et la disponibilité peuvent changer. Vérifiez l’annonce actuelle avant de commander." },
  es: { badge: "Guía independiente de PikoBuy", title: "Encuentra mejores productos de PikoBuy Spreadsheet.", intro: "Busca entre más de 20.000 productos, compara categorías y revisa los puntos de control de calidad.", search: "Buscar zapatillas, sudaderas, bolsos o productos", button: "Buscar productos", browse: "Ver todos", note: "Los precios y la disponibilidad pueden cambiar. Confirma el anuncio actual antes de comprar." },
  it: { badge: "Guida PikoBuy indipendente", title: "Trova prodotti migliori nel PikoBuy Spreadsheet.", intro: "Cerca oltre 20.000 prodotti, confronta le categorie e controlla i dettagli QC prima dell’ordine.", search: "Cerca scarpe, felpe, borse o un prodotto", button: "Cerca prodotti", browse: "Tutti i prodotti", note: "Prezzi e disponibilità possono cambiare. Controlla l’inserzione attuale prima dell’ordine." },
  nl: { badge: "Onafhankelijke PikoBuy-gids", title: "Vind betere PikoBuy Spreadsheet-producten.", intro: "Zoek in meer dan 20.000 productvondsten, vergelijk categorieën en controleer QC-punten voor je bestelt.", search: "Zoek schoenen, hoodies, tassen of een product", button: "Producten zoeken", browse: "Alle producten", note: "Prijs en beschikbaarheid kunnen wijzigen. Controleer de actuele productpagina voor aankoop." },
  pl: { badge: "Niezależny przewodnik PikoBuy", title: "Znajdź lepsze produkty PikoBuy Spreadsheet.", intro: "Przeszukuj ponad 20 000 produktów, porównuj kategorie i sprawdzaj najważniejsze elementy QC.", search: "Szukaj butów, bluz, toreb lub produktu", button: "Szukaj produktów", browse: "Wszystkie produkty", note: "Ceny i dostępność mogą się zmieniać. Przed zakupem sprawdź aktualną ofertę." },
  sv: { badge: "Oberoende PikoBuy-guide", title: "Hitta bättre produkter i PikoBuy Spreadsheet.", intro: "Sök bland över 20 000 produktfynd, jämför kategorier och kontrollera viktiga QC-detaljer före beställning.", search: "Sök skor, hoodies, väskor eller produktnamn", button: "Sök produkter", browse: "Alla produkter", note: "Pris och tillgänglighet kan ändras. Kontrollera den aktuella produktsidan före köp." },
  pt: { badge: "Guia PikoBuy independente", title: "Encontre melhores produtos no PikoBuy Spreadsheet.", intro: "Pesquise mais de 20.000 produtos, compare categorias e verifique os pontos de QC antes de encomendar.", search: "Pesquisar ténis, hoodies, malas ou produto", button: "Pesquisar", browse: "Todos os produtos", note: "Os preços e a disponibilidade podem mudar. Confirme o anúncio atual antes da compra." },
};

const categories = [
  ["Shoes", "Compare shape, outsole, heel profile, sizing notes and prices.", "/shoes/", "SH", "Footwear"], ["Hoodies", "Review fabric weight, print placement, sleeve length and fit notes.", "/hoodies-sweaters/", "HD", "Apparel"],
  ["T-Shirts", "Compare collar shape, print position, stitching and body length.", "/t-shirts/", "TS", "Essentials"], ["Jackets", "Check lining, zipper lines, cuffs, fit references and parcel volume.", "/jackets/", "JK", "Outerwear"],
  ["Pants / Shorts", "Compare waist, inseam, pocket shape, material and fit notes.", "/pants-shorts/", "PS", "Bottoms"], ["Bags", "Review hardware, zipper, lining, strap length and scale photos.", "/accessories/", "BG", "Carry"],
  ["Headwear", "Compare brim shape, embroidery, inside tags, sizing and angles.", "/headwear/", "HW", "Caps"], ["Accessories", "Check measurements, finish quality, packaging and included parts.", "/accessories/", "AC", "Details"],
  ["Jerseys", "Check patch placement, number alignment, fabric and version photos.", "/jersey/", "JR", "Sportswear"], ["Electronics", "Confirm model, compatibility, plug type and shipping restrictions.", "/electronics/", "EL", "Tech"],
];

const products = [
  { name: "Nike Phantom GX Elite AG-PRO", category: "Shoes", price: "$40.48", cny: "¥272", image: "https://findspreadsheet.com/uploads/allimg/20260126/1-26012614320C94.webp", url: "/shoes/nike-phantom-gx-elite-ag-pro-271.html", check: "Compare sole pattern, upper shape and size label." },
  { name: "GCDS Logo Band Hoodie", category: "Hoodies", price: "$36.90", cny: "¥248", image: "https://findspreadsheet.com/uploads/allimg/20260211/1-2602110U444610.webp", url: "/hoodies-sweaters/gcds-logo-band-hoodiessweaters-40-styles-1523.html", check: "Check fabric weight, logo alignment and measurements." },
  { name: "New Balance 550 Sneakers", category: "Shoes", price: "$38.69", cny: "¥260", image: "https://findspreadsheet.com/uploads/allimg/20260304/1-260304103211127.webp", url: "/shoes/new-balance-550-sneakers-13-styles-1753.html", check: "Review toe shape, panel stitching and heel profile." },
  { name: "Ralph Lauren Polo Set", category: "Short Sets", price: "$20.54", cny: "¥138", image: "https://findspreadsheet.com/uploads/allimg/20260307/1-26030G10924620.webp", url: "/ShortSets/ralph-lauren-polo-short-sleeve-shirt-amp-shorts-set-5-styles-2008.html", check: "Confirm shirt and shorts sizing separately." },
];

export default function Home() {
  const [query, setQuery] = useState("");
  const t = copy.en;
  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    const destination = query.trim() ? `https://findspreadsheet.com/search.html?keywords=${encodeURIComponent(query.trim())}` : "https://findspreadsheet.com/";
    window.location.href = destination;
  };

  return (
    <main>
      <SiteHeader />

      <section className="hero-shell">
        <div className="hero-copy">
          <div className="eyebrow"><Sparkles size={15} /> {t.badge}</div>
          <h1>{t.title}</h1>
          <p className="hero-intro">{t.intro}</p>
          <form className="search-panel" onSubmit={submit}>
            <Search aria-hidden="true" />
            <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={t.search} aria-label={t.search} />
            <button type="submit">{t.button}<ArrowRight size={17} /></button>
          </form>
          <div className="hero-actions"><a className="primary-link" href="https://findspreadsheet.com/">{t.browse}<ArrowRight size={16} /></a><Link className="text-link" href="/guides/pikobuy-beginner-guide">Read beginner guide</Link></div>
          <p className="microcopy">{t.note}</p>
        </div>
        <aside className="research-card" aria-label="Research summary">
          <div className="platform-chip"><img src="/pikobuy-logo.png" alt="PikoBuy" /><span>Platform workflow checked</span></div>
          <p className="card-kicker">THE SMARTER SHORTLIST</p>
          <h2>Research first.<br/>Order second.</h2>
          <ol><li><span>01</span>Find a product</li><li><span>02</span>Compare the live listing</li><li><span>03</span>Review warehouse QC</li><li><span>04</span>Plan parcel shipping</li></ol>
          <div className="independent-note"><ShieldCheck size={18}/><span>Independent resource. Not operated by PikoBuy.</span></div>
        </aside>
      </section>

      <section className="trust-strip" aria-label="Site benefits"><div><strong>20K+</strong><span>FindSpreadsheet products</span></div><div><strong>10</strong><span>Focused categories</span></div><div><strong>9</strong><span>Priority languages</span></div><div><strong>2026</strong><span>Research-led guides</span></div></section>

      <section className="section" id="categories">
        <div className="section-heading"><div><span className="section-label">Browse with purpose</span><h2>Start with the product type</h2></div><p>Each category has a different QC and shipping checklist. Choosing the category first reduces random clicks and makes comparisons more useful.</p></div>
        <div className="category-grid">{categories.map(([name, desc, url, icon, tag]) => <a key={name} href={`https://findspreadsheet.com${url}`} className="category-card"><div className="category-card-top"><span className="category-icon">{icon}</span><span className="category-tag">{tag}</span></div><h3>{name}</h3><p>{desc}</p><span className="category-line" aria-hidden="true"/></a>)}</div>
      </section>

      <section className="section warm-section" id="products">
        <div className="section-heading"><div><span className="section-label">Current catalog examples</span><h2>Product cards with a reason to click</h2></div><p>Prices are approximate USD references converted from the displayed CNY values at ¥6.72 per US dollar on 28 August 2026. Confirm the live price.</p></div>
        <div className="product-grid">{products.map((product) => <article className="product-card" key={product.name}><a href={`https://findspreadsheet.com${product.url}`} className="product-image"><img src={product.image} alt={product.name}/><span>{product.category}</span></a><div className="product-body"><p className="price"><strong>{product.price}</strong><span>{product.cny}</span></p><h3>{product.name}</h3><p>{product.check}</p><a href={`https://findspreadsheet.com${product.url}`}>View details <ArrowRight size={15}/></a></div></article>)}</div>
      </section>

      <section className="section" id="guides">
        <div className="section-heading"><div><span className="section-label">Evidence before promotion</span><h2>Guides for real buying decisions</h2></div><p>Focused pages answer one question at a time and explain what can be checked, what can change, and what should never be promised.</p></div>
        <div className="guide-grid">
          <Link href="/guides/pikobuy-beginner-guide"><CheckCircle2/><span>BEGINNER GUIDE</span><h3>From product link to parcel</h3><p>Understand the two-payment workflow, warehouse stage and next decisions.</p><b>Read guide <ArrowRight size={15}/></b></Link>
          <Link href="/guides/pikobuy-qc-guide"><ShieldCheck/><span>QC GUIDE</span><h3>What warehouse photos can show</h3><p>Build a category-specific checklist without treating photos as a guarantee.</p><b>Read guide <ArrowRight size={15}/></b></Link>
          <Link href="/guides/pikobuy-shipping-guide"><Truck/><span>EUROPE SHIPPING</span><h3>Plan weight, volume and route</h3><p>Compare route eligibility and parcel dimensions before paying shipping.</p><b>Read guide <ArrowRight size={15}/></b></Link>
          <Link href="/seo-articles/pikobuy-spreadsheet-research-guide"><BookOpenText/><span>SEO ARTICLE</span><h3>How to use a PikoBuy spreadsheet without buying blind</h3><p>A 1,300+ word, fact-checked guide to ordering, QC photos, returns and shipping.</p><b>Read article <ArrowRight size={15}/></b></Link>
        </div>
      </section>

      <section className="seo-callout"><div><span>BUILT TO OUTPERFORM THIN LINK LISTS</span><h2>Useful product data + focused guides + transparent limits.</h2></div><a href="https://findspreadsheet.com/">Open the full database <ArrowRight/></a></section>

      <footer><div className="footer-logo-wrap"><img className="brand-logo" src="/pikobuy-logo.png" alt="PikoBuy" /></div><p>Independent product discovery and research resource for FindSpreadsheet. Not affiliated with PikoBuy, Taobao, Weidian or 1688.</p><div><Link href="/faq">FAQ</Link><Link href="/seo-articles">SEO Articles</Link><a href="https://findspreadsheet.com/">Product database</a></div></footer>
    </main>
  );
}
