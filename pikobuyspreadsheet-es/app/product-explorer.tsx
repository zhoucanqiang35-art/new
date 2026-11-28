"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { getExtra, localPath } from "./i18n";
import { getLocalizedContent } from "./localized-content";
import { mainSite, products } from "./data";
import { Price, useCurrency } from "./currency";
import { formatPrice } from "./currency-data";
import { getHeaderCopy } from "./header-copy";

const allLabels: Record<string, string> = {
  "en-US": "All", "en-GB": "All", "de-DE": "Alle", "fr-FR": "Tous",
  "es-ES": "Todos", "it-IT": "Tutti", "nl-NL": "Alles", "pl-PL": "Wszystkie",
  "pt-PT": "Todos", "pt-BR": "Todos", "sv-SE": "Alla", "da-DK": "Alle",
  "nb-NO": "Alle", "fi-FI": "Kaikki", "cs-CZ": "Vše", "ro-RO": "Toate",
  "hu-HU": "Mind", "el-GR": "Όλα", "bg-BG": "Всички", "hr-HR": "Sve",
  "sk-SK": "Všetky", "sl-SI": "Vse", "et-EE": "Kõik", "lt-LT": "Visi",
};

const filterGroups = [
  { key: "Shoes", labelIndex: 1 },
  { key: "Hoodies", labelIndex: 3 },
  { key: "Short Sets", labelIndex: 7 },
  { key: "Headwear", labelIndex: 6 },
  { key: "Electronics", labelIndex: 10 },
] as const;

export function ProductExplorer({ locale = "en-US" }: { locale?: string }) {
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState<"default" | "asc" | "desc">("default");
  const e = getExtra(locale);
  const currency = useCurrency();
  const l = getLocalizedContent(locale);

  const visible = useMemo(() => {
    const filtered = category === "all" ? [...products] : products.filter((item) => item.category === category);
    if (sort === "asc") filtered.sort((a, b) => a.cny - b.cny);
    if (sort === "desc") filtered.sort((a, b) => b.cny - a.cny);
    return filtered;
  }, [category, sort]);

  return <div className="product-explorer">
    <div className="catalog-toolbar" aria-label={e.categories}>
      <div className="filter-pills">
        <button type="button" className={category === "all" ? "is-active" : ""} onClick={() => setCategory("all")}>{allLabels[locale] || allLabels["en-US"]}</button>
        {filterGroups.map((group) => <button type="button" key={group.key} className={category === group.key ? "is-active" : ""} onClick={() => setCategory(group.key)}>{l.categories[group.labelIndex]}</button>)}
      </div>
      <select value={sort} onChange={(event) => setSort(event.target.value as "default" | "asc" | "desc")} aria-label={getHeaderCopy(locale).indicativePrices}>
        <option value="default">01–08</option>
        <option value="asc">{currency} ↑</option>
        <option value="desc">{currency} ↓</option>
      </select>
    </div>
    <div className="product-grid explorer-grid">
      {visible.map((product) => <article className="product-card" key={product.slug}>
        <Link href={localPath(locale, `product/${product.slug}`)} className="product-image" aria-label={product.name}>
          <Image src={product.image} alt={product.name} fill sizes="(max-width: 720px) 48vw, 25vw"/>
        </Link>
        <div className="product-info">
          <span>{e.productDetails}</span>
          <h3><Link href={localPath(locale, `product/${product.slug}`)}>{product.name}</Link></h3>
          <p>{e.productsIntro}</p>
          <strong><Price cny={product.cny} locale={locale}/> <small>{formatPrice(product.cny, "CNY", locale)}</small></strong>
          <div className="product-actions">
            <Link href={localPath(locale, `product/${product.slug}`)}>{e.viewPage}</Link>
            <a href={`${mainSite}${product.href}`} target="_blank" rel="noopener noreferrer">{e.openMain} ↗</a>
          </div>
        </div>
      </article>)}
    </div>
  </div>;
}
