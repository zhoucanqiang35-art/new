"use client";

import { useEffect, useMemo, useState } from "react";

import { Price } from "./currency";
import { mainSite } from "./data";
import { getCopy, getExtra } from "./i18n";
import { getLocalizedContent } from "./localized-content";
import {
  addLiveSpecifications, catalogCategories, catalogCategory, catalogHref, catalogImage, catalogListing,
  catalogProductHref, filterCatalog, type CatalogRow,
} from "./main-catalog";
import { ProductDetail } from "./product-detail";

const pageSize = 24;
type DetailRow = [row: CatalogRow, photos: string[]];
const catalogFile = "/data/main-catalog/index.json";

async function fetchJson<T>(path: string, signal: AbortSignal): Promise<T> {
  const response = await fetch(path, { signal });
  if (!response.ok) throw new Error(`Catalog request returned ${response.status}`);
  return response.json();
}

export function MainCatalog({ locale }: { locale: string }) {
  const params = new URLSearchParams(location.search);
  const initialQuery = (params.get("q") ?? "").trim().slice(0, 200);
  const category = params.get("category") ?? "";
  const requestedPage = Math.max(1, Math.trunc(Number(params.get("page")) || 1));
  const [rows, setRows] = useState<CatalogRow[] | null>(null);
  const [failed, setFailed] = useState(false);
  const t = getCopy(locale), e = getExtra(locale), l = getLocalizedContent(locale);
  const number = new Intl.NumberFormat(locale);
  useEffect(() => {
    const controller = new AbortController();
    fetchJson<CatalogRow[]>(catalogFile, controller.signal).then(setRows).catch(() => {
      if (!controller.signal.aborted) setFailed(true);
    });
    return () => controller.abort();
  }, []);

  const matching = useMemo(() => rows ? filterCatalog(rows, category, initialQuery) : [], [rows, category, initialQuery]);
  const pages = Math.max(1, Math.ceil(matching.length / pageSize));
  const page = Math.min(requestedPage, pages);
  const items = matching.slice((page - 1) * pageSize, page * pageSize);
  const activeCategory = category === "bags" || catalogCategories.includes(category as typeof catalogCategories[number]) ? category : "";
  const categoryOptions = catalogCategories.flatMap((slug, index) => (
    index === 0 ? [] : [{ slug, label: l.categories[index] }]
  ));

  return <div className="main-catalog">
    <form key={`${initialQuery}:${activeCategory}`} action={catalogHref(locale)} method="get" className="main-catalog-search">
      <input type="search" name="q" maxLength={200} defaultValue={initialQuery} placeholder={t.searchPlaceholder} aria-label={e.searchButton}/>
      <select name="category" defaultValue={activeCategory} aria-label={e.categories}
        onChange={event => window.location.assign(catalogHref(locale, event.currentTarget.value, initialQuery))}>
        <option value="">{e.categories}</option>
        {activeCategory === "bags" && <option value="bags">{l.categories[8]}</option>}
        {categoryOptions.map(({ slug, label }) => <option key={slug} value={slug}>{label}</option>)}
      </select>
      <button type="submit">{e.searchButton}</button>
    </form>
    {failed ? <p role="status"><a href={catalogHref(locale, category, initialQuery)}>↻ {e.viewPage}</a></p> :
      <p className="main-catalog-count" aria-live="polite">{rows ? `${number.format(matching.length)} / ${number.format(rows.length)} · ${e.productDetails}` : "…"}</p>}
    <div className="main-catalog-grid">
      {items.map(item => <CatalogCard key={item[0]} item={item} locale={locale}/>)}
    </div>
    {rows && matching.length === 0 && (initialQuery || category) && <p><a href={catalogHref(locale)}>{e.productDetails} · {number.format(rows.length)}</a></p>}
    {pages > 1 && <nav className="main-catalog-pagination" aria-label={e.productDetails}>
      {page > 1 && <a href={catalogHref(locale, category, initialQuery, 1)}>« 1</a>}
      {page > 1 && <a rel="prev" href={catalogHref(locale, category, initialQuery, page - 1)}>‹ {number.format(page - 1)}</a>}
      <span aria-current="page">{number.format(page)} / {number.format(pages)}</span>
      {page < pages && <a rel="next" href={catalogHref(locale, category, initialQuery, page + 1)}>{number.format(page + 1)} ›</a>}
      {page < pages && <a href={catalogHref(locale, category, initialQuery, pages)}>{number.format(pages)} »</a>}
    </nav>}
  </div>;
}

export function CatalogCard({ item, locale }: { item: CatalogRow; locale: string }) {
  const image = catalogImage(item[4]);
  const labels = getLocalizedContent(locale);
  const categoryIndex = catalogCategories.lastIndexOf(catalogCategory(item) as typeof catalogCategories[number]);
  return <a className="main-catalog-card" href={catalogProductHref(locale, item)}>
    <span className="main-catalog-image">
      {image && <img src={image} alt="" loading="lazy" decoding="async" onError={event => { event.currentTarget.hidden = true; }}/>}
    </span>
    <div className="main-catalog-card-text">
      {categoryIndex >= 0 && <small>{labels.categories[categoryIndex]}</small>}
      <h2>{item[2]}</h2>
      {item[5] !== null && <strong><Price cny={item[5]} locale={locale}/></strong>}
    </div>
  </a>;
}

export function MainCatalogProduct({ locale, priceNote, id }: { locale: string; priceNote: string; id: string }) {
  const [result, setResult] = useState<{ id: string; detail?: DetailRow } | null>(null);
  const [specs, setSpecs] = useState<{ itemId: string; data: Parameters<typeof addLiveSpecifications>[1] } | null>(null);
  const detail = result?.id === id ? result.detail : undefined;
  const sellerId = detail?.[0][1];
  const name = detail?.[0][2];
  useEffect(() => {
    if (name) document.title = `${name} | PikoBuy Spreadsheet`;
  }, [name]);
  const e = getExtra(locale);
  useEffect(() => {
    if (!/^\d{1,12}$/.test(id)) return;
    const controller = new AbortController();
    const shard = Number(id) % 16;
    fetchJson<Record<string, DetailRow>>(`/data/main-catalog/details-${shard}.json`, controller.signal)
      .then(data => setResult({ id, detail: data[id] }))
      .catch(() => { if (!controller.signal.aborted) setResult({ id }); });
    return () => controller.abort();
  }, [id]);

  useEffect(() => {
    if (!sellerId) return;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 6500);
    const url = new URL("/api/Goods/getSkuData", mainSite);
    url.searchParams.set("weidian_id", sellerId);
    fetchJson<Parameters<typeof addLiveSpecifications>[1]>(url.href, controller.signal)
      .then(data => setSpecs({ itemId: sellerId, data }))
      .catch(() => {})
      .finally(() => clearTimeout(timeout));
    return () => { clearTimeout(timeout); controller.abort(); };
  }, [sellerId]);

  if (!/^\d{1,12}$/.test(id) || (result?.id === id && !result.detail)) {
    return <div className="listing-detail"><a className="listing-source" href={catalogHref(locale)}>{e.productDetails}</a></div>;
  }
  if (result?.id !== id || !result.detail) return <p className="listing-detail" role="status">…</p>;
  const [row, photos] = result.detail;
  const snapshot = catalogListing(row, photos);
  const listing = specs && specs.itemId === sellerId ? addLiveSpecifications(snapshot, specs.data) : snapshot;
  return <ProductDetail key={id} listing={listing} name={row[2]} basePrice={row[5]} locale={locale}
    priceNote={priceNote} catalogUrl={mainSite + row[3]} catalogLabel={e.openMain}/>;
}
