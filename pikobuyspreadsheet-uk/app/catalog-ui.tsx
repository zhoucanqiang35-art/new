"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Copy, Search } from "lucide-react";
import { catalogHref, mainImage, productHref, purchaseLinks, sellerItem, type CatalogProduct, type Listing } from "./catalog-model";
import { currencyChanged, defaultCurrency, formatCatalogPrice, preferredCurrency } from "./currency-preference";

import type { CatalogLabels } from "./catalog-labels";

type Category = { slug: string; label: string };
type Props = { locale: string; labels: CatalogLabels };
type SearchResult = { items: CatalogProduct[]; total: number; hasNext: boolean; page: number };
type DetailResult = { listing: Listing | null; qc: { url: string; label?: string }[] };

function useCurrency(locale: string) {
  const [currency, setCurrency] = useState(() => defaultCurrency(locale));
  useEffect(() => {
    setCurrency(preferredCurrency(locale));
    function onCurrency(event: Event) {
      setCurrency((event as CustomEvent<string>).detail);
    }
    window.addEventListener(currencyChanged, onCurrency);
    return () => window.removeEventListener(currencyChanged, onCurrency);
  }, [locale]);
  return currency;
}

async function catalogData<T>(endpoint: string, query: URLSearchParams, signal: AbortSignal) {
  const response = await fetch(`/api/catalog/${endpoint}?${query}`, { signal });
  if (!response.ok) throw new Error(String(response.status));
  return response.json() as Promise<T>;
}

export function CatalogCards({ locale, labels, items }: Props & { items: CatalogProduct[] }) {
  const currency = useCurrency(locale);
  return (
    <div className="catalog-card-grid">
      {items.map(item => (
        <a className="catalog-card" href={productHref(locale, item.id)} key={item.id}>
          <img src={mainImage(item.image)} alt="" loading="lazy" decoding="async" />
          <span dir="auto">{item.title}</span>
          <strong>{item.price === null ? labels.price : formatCatalogPrice(item.price, currency, locale)}</strong>
        </a>
      ))}
    </div>
  );
}

export function CatalogSearch({ locale, labels, placeholder, initial, categories }: Props & {
  placeholder: string; initial: SearchResult; categories: Category[];
}) {
  const [filters, setFilters] = useState({ q: "", category: "", page: 1 });
  const [term, setTerm] = useState("");
  const [results, setResults] = useState<SearchResult | null>(initial);
  const [failure, setFailure] = useState(false);

  useEffect(() => {
    const url = new URL(window.location.href);
    const q = url.searchParams.get("q")?.trim().slice(0, 200) ?? "";
    const category = url.searchParams.get("category") ?? "";
    const page = Math.max(1, Math.min(Number(url.searchParams.get("page")) || 1, 500));
    setTerm(q);
    setFilters({ q, category, page });
  }, []);

  useEffect(() => {
    if (!filters.q && !filters.category && filters.page === 1) return;
    const controller = new AbortController();
    const localizedCategory = categories.find(item =>
      item.label.toLocaleLowerCase(locale) === filters.q.toLocaleLowerCase(locale));
    const query = new URLSearchParams({
      q: localizedCategory ? "" : filters.q,
      category: filters.category || localizedCategory?.slug || "",
      page: String(filters.page),
    });
    setResults(null);
    setFailure(false);
    catalogData<SearchResult>("search", query, controller.signal)
      .then(setResults)
      .catch(() => { if (!controller.signal.aborted) setFailure(true); });
    return () => controller.abort();
  }, [filters, categories, locale]);

  const pageHref = (page: number) => {
    const url = catalogHref(locale, filters);
    return page > 1 ? `${url}${url.includes("?") ? "&" : "?"}page=${page}` : url;
  };

  return (
    <>
      <form className="catalog-search" action={catalogHref(locale)} method="get">
        <div className="catalog-search-input">
          <Search size={18} aria-hidden="true" />
          <input type="search" name="q" value={term} onChange={event => setTerm(event.target.value)}
            maxLength={200} placeholder={placeholder} aria-label={labels.search} />
        </div>
        {filters.category && <input type="hidden" name="category" value={filters.category} />}
        <button type="submit">{labels.search}</button>
      </form>
      <nav className="catalog-filters" aria-label={labels.all}>
        <a href={catalogHref(locale, { q: filters.q })} aria-current={!filters.category ? "page" : undefined}>{labels.all}</a>
        {categories.map(category => (
          <a key={category.slug} href={catalogHref(locale, { q: filters.q, category: category.slug })}
            aria-current={filters.category === category.slug ? "page" : undefined}>{category.label}</a>
        ))}
      </nav>
      {results ? (
        <>
          <p className="catalog-status" role="status">
            {results.total ? new Intl.NumberFormat(locale).format(results.total) : labels.empty}
          </p>
          <CatalogCards locale={locale} labels={labels} items={results.items} />
          {(results.page > 1 || results.hasNext) && (
            <nav className="catalog-pagination">
              {results.page > 1 && <a href={pageHref(results.page - 1)}><ChevronLeft size={17} />{labels.previous}</a>}
              {results.hasNext && <a href={pageHref(results.page + 1)}>{labels.next}<ChevronRight size={17} /></a>}
            </nav>
          )}
        </>
      ) : <p className="catalog-status" role="status">{failure ? labels.unavailable : labels.loading}</p>}
    </>
  );
}

export function ProductDetail({ locale, labels }: Props) {
  const [product, setProduct] = useState<CatalogProduct | null>(null);
  const [detail, setDetail] = useState<DetailResult | null>(null);
  const [failure, setFailure] = useState("");
  const [pickedPhoto, setPickedPhoto] = useState("");
  const [selection, setSelection] = useState<Record<number, string>>({});
  const [copyStatus, setCopyStatus] = useState("");
  const currency = useCurrency(locale);

  useEffect(() => {
    const id = new URL(window.location.href).searchParams.get("id") ?? "";
    if (!/^\d{6,16}$/.test(id)) {
      setFailure("404");
      return;
    }
    const controller = new AbortController();
    const query = new URLSearchParams({ id });
    catalogData<{product: CatalogProduct}>("product", query, controller.signal).then(({ product }) => {
      setProduct(product);
      document.title = `${product.title} | PikoBuy Spreadsheet UK`;
    }).catch(error => { if (!controller.signal.aborted) setFailure(error.message); });
    catalogData<DetailResult>("details", query, controller.signal)
      .then(setDetail).catch(() => { /* The catalog gallery remains available. */ });
    return () => controller.abort();
  }, []);

  const back = <a className="catalog-back" href={catalogHref(locale)}><ChevronLeft size={16} />{labels.back}</a>;
  if (!product) {
    return <main className="catalog-page product-page">{back}<p role="status">
      {failure ? failure === "404" ? labels.productMissing : labels.unavailable : labels.loading}
    </p></main>;
  }

  const listing = detail?.listing;
  const baseGallery = (product.gallery?.length ? product.gallery : [product.image]).map(mainImage);
  const gallery = [...new Set([...(listing?.photos ?? []), ...baseGallery])];
  const groups = listing?.groups ?? [];
  const selectionKey = Object.values(selection).sort().join("-");
  const selectedVariant = listing?.variants.find(variant => variant.key === selectionKey);
  const price = selectedVariant?.price ?? listing?.price ?? product.price;
  const links = purchaseLinks(product.id);
  const piko = links.find(link => link.id === "pikobuy");
  const photos = detail?.qc.length ? detail.qc : baseGallery.map(url => ({ url, label: "" }));

  async function copyProduct() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopyStatus(labels.copied);
    } catch {
      setCopyStatus(window.location.href);
    }
  }

  return (
    <main className="catalog-page product-page">
      {back}
      <div className="product-layout">
        <div className="product-media">
          <img className="product-main-image" src={pickedPhoto || gallery[0]} alt={product.title}
            fetchPriority="high" onError={event => {
              const image = event.currentTarget;
              if (image.src !== baseGallery[0]) image.src = baseGallery[0];
            }} />
          {gallery.length > 1 && <div className="product-thumbnails">
            {gallery.map((photo, index) => (
              <button type="button" key={photo} aria-pressed={(pickedPhoto || gallery[0]) === photo}
                aria-label={`${labels.details} ${index + 1}`} onClick={() => setPickedPhoto(photo)}>
                <img src={photo} alt="" loading="lazy" decoding="async" />
              </button>
            ))}
          </div>}
        </div>
        <div className="product-summary">
          <h1 dir="auto">{product.title}</h1>
          <p className="product-reference">Weidian · <bdi>{product.id}</bdi></p>
          <strong className="product-price">{price === null ? labels.price : formatCatalogPrice(price, currency, locale)}</strong>
          {piko && <a className="product-buy" href={piko.url} target="_blank" rel="nofollow noopener">
            <img src={piko.logo} alt="" />{labels.buy}<ArrowUpRight size={18} />
          </a>}
          <div className="product-actions">
            <details className="product-agents">
              <summary>{labels.agents}</summary>
              <div className="product-agent-grid">
                {links.filter(link => link.id !== "pikobuy").map(link => (
                  <a href={link.url} key={link.id} target="_blank" rel="nofollow noopener">
                    <img src={link.logo} alt="" loading="lazy" decoding="async" />
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </details>
            <button className="product-copy" type="button" onClick={copyProduct}><Copy size={16} />{labels.copy}</button>
          </div>
          {copyStatus && <p className="product-copy-status" role="status">{copyStatus}</p>}
          <a className="product-original" href={sellerItem(product.id)} target="_blank" rel="nofollow noopener">
            {labels.seller}<ArrowUpRight size={14} />
          </a>
          {groups.map((group, index) => {
            const heading = /size|尺码|尺寸/i.test(group.name) ? labels.size :
              /colou?r|style|颜色|款式/i.test(group.name) ? labels.colour : group.name || labels.options;
            return (
            <section className="product-option-group" key={`${group.name}-${index}`} aria-label={heading}>
              <h2 dir="auto">{heading}</h2>
              <div className={`product-options ${group.values.some(value => value.image) ? "with-images" : ""}`}>
                {group.values.map(value => (
                  <button type="button" key={value.id} aria-pressed={selection[index] === value.id}
                    onClick={() => {
                      setSelection(previous => ({ ...previous, [index]: value.id }));
                      if (value.image) setPickedPhoto(value.image);
                    }}>
                    {value.image && <img src={value.image} alt="" loading="lazy" decoding="async" />}
                    <span dir="auto">{value.label}</span>
                  </button>
                ))}
              </div>
            </section>
            );
          })}
        </div>
      </div>
      <section className="product-detail-photos">
        <h2>{detail?.qc.length ? labels.qc : labels.details}</h2>
        <div className="product-detail-grid">
          {photos.map((photo, index) => (
            <a key={photo.url} href={photo.url} target="_blank" rel="noopener">
              <img src={photo.url} alt={photo.label || `${product.title} ${index + 1}`} loading="lazy" decoding="async" />
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
