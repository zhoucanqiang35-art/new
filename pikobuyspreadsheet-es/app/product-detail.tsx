"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { formatPrice } from "./currency-data";
import { Price, useCurrency } from "./currency";
import { getProductDetailCopy } from "./product-detail-copy";
import { agentLinks, type Listing } from "./product-listings";

type Props = {
  listing: Listing;
  name: string;
  basePrice: number;
  locale: string;
  priceNote: string;
  catalogUrl: string;
  catalogLabel: string;
};

export function ProductDetail({ listing, name, basePrice, locale, priceNote, catalogUrl, catalogLabel }: Props) {
  const [image, setImage] = useState(listing.gallery[0]);
  const [style, setStyle] = useState<number | null>(null);
  const [size, setSize] = useState<number | null>(null);
  const [copyState, setCopyState] = useState<"idle" | "copied" | "manual">("idle");
  const manualCopy = useRef<HTMLInputElement>(null);
  const labels = getProductDetailCopy(locale);
  const currency = useCurrency();
  const combination = style !== null && size !== null ? listing.availablePrices[style]?.[size] : undefined;
  const cny = combination ?? basePrice;
  const weidian = `https://weidian.com/item.html?itemID=${listing.itemId}`;

  useEffect(() => {
    if (copyState !== "manual") return;
    manualCopy.current?.focus();
    manualCopy.current?.select();
  }, [copyState]);

  function chooseStyle(index: number) {
    setStyle(index);
    if (size !== null && listing.availablePrices[index]?.[size] === undefined) setSize(null);
    setImage(listing.styles[index][1] || listing.gallery[0]);
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(weidian);
      setCopyState("copied");
    } catch {
      setCopyState("manual");
    }
  }

  return <article className="listing-detail">
    <div className="listing-columns">
      <div className="listing-gallery">
        <a className="listing-main-image" href={image} target="_blank" rel="noopener noreferrer">
          <Image src={image} alt={name} fill sizes="(max-width: 720px) 100vw, 520px" loading="eager"/>
        </a>
        <div className="listing-thumbnails">
          {listing.gallery.map((src, index) => <button key={src} type="button"
            aria-pressed={image === src} aria-label={`${name} · ${index + 1}`} onClick={() => setImage(src)}>
            <Image src={src} alt="" width={68} height={68}/>
          </button>)}
        </div>
      </div>
      <div className="listing-order">
        <h1>{name}</h1>
        <p className="listing-id">Weidian ID <span>{listing.itemId}</span></p>
        <div className="listing-price" aria-live="polite">
          <strong><Price cny={cny} locale={locale}/></strong>
          {currency !== "CNY" && <span>{formatPrice(cny, "CNY", locale)}</span>}
        </div>
        <p className="listing-price-note">{priceNote}</p>
        <a className="listing-buy" href={listing.buy} target="_blank" rel="nofollow sponsored noopener noreferrer">{labels.buy}</a>
        <div className="listing-actions">
          <details>
            <summary>{labels.agents}</summary>
            <div className="listing-agents">
              {agentLinks.map(([agent, logo, template]) => <a key={agent}
                href={template.replace("{item}", listing.itemId)} target="_blank" rel="nofollow sponsored noopener noreferrer">
                <Image src={logo} alt="" width={25} height={25}/>
                {agent}
              </a>)}
              <a href={weidian} target="_blank" rel="nofollow noopener noreferrer">Weidian</a>
            </div>
          </details>
          <button type="button" onClick={copyLink}>{copyState === "copied" ? labels.copied : labels.copy}</button>
        </div>
        <span className="sr-only" role="status">{copyState === "copied" ? labels.copied : ""}</span>
        {copyState === "manual" && <input className="listing-copy-input" readOnly aria-label={labels.productLink} value={weidian} ref={manualCopy}/>}
        <fieldset className="listing-options">
          <legend>{labels.style}{style !== null && ` · ${listing.styles[style][0]}`}</legend>
          <div className="listing-styles">
            {listing.styles.map(([label, photo], index) => <button key={index} type="button"
              aria-pressed={style === index} aria-label={label} title={label}
              disabled={!listing.availablePrices[index]} onClick={() => chooseStyle(index)}>
              {photo ? <Image src={photo} alt="" width={62} height={62}/> : label}
            </button>)}
          </div>
        </fieldset>
        <fieldset className="listing-options">
          <legend>{labels.size}</legend>
          <div className="listing-sizes">
            {listing.sizes.map((label, index) => <button key={index} type="button" aria-pressed={size === index}
              disabled={style !== null && listing.availablePrices[style]?.[index] === undefined}
              onClick={() => setSize(index)}>{label}</button>)}
          </div>
        </fieldset>
        <p className="listing-price-note">{labels.confirm}</p>
        <a className="listing-source" href={catalogUrl} target="_blank" rel="noopener noreferrer">{catalogLabel}</a>
      </div>
    </div>
    <section className="listing-photos">
      <h2>{labels.sellerPhotos}</h2>
      <div>
        {listing.gallery.slice(1).map((src, index) => <a key={src} href={src} target="_blank" rel="noopener noreferrer"
          aria-label={`${labels.sellerPhotos} · ${index + 1}`}>
          <Image src={src} alt={`${name} · ${index + 2}`} width={170} height={170} loading="eager"/>
        </a>)}
      </div>
    </section>
  </article>;
}
