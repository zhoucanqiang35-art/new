"use client";

import { useEffect, useRef, useState } from "react";
import { imageSearchCopy } from "./image-search-copy";
import { searchImage } from "./image-match";
import { CatalogCard } from "./main-catalog-ui";

const fileTypes = ["image/jpeg", "image/png", "image/webp", "image/avif"];
const maxBytes = 10 * 1024 * 1024;

export function ImageSearch({ locale }: { locale: string }) {
  const copy = imageSearchCopy(locale);
  const input = useRef<HTMLInputElement>(null);
  const upload = useRef<HTMLDivElement>(null);
  const request = useRef(0);
  const objectUrl = useRef("");
  const [preview, setPreview] = useState("");
  const [dragging, setDragging] = useState(false);
  const [status, setStatus] = useState<"idle" | "searching" | "invalid" | "error">("idle");
  const [result, setResult] = useState<Awaited<ReturnType<typeof searchImage>> | null>(null);
  useEffect(() => () => {
    request.current += 1;
    if (objectUrl.current) URL.revokeObjectURL(objectUrl.current);
  }, []);

  function clear() {
    request.current += 1;
    if (objectUrl.current) URL.revokeObjectURL(objectUrl.current);
    objectUrl.current = "";
    if (input.current) input.current.value = "";
    setPreview("");
    setResult(null);
    setStatus("idle");
  }

  async function selectImage(file: File | undefined) {
    if (!file) return;
    clear();
    if (!fileTypes.includes(file.type) || !file.size || file.size > maxBytes) {
      setStatus("invalid");
      return;
    }
    const current = request.current;
    const url = URL.createObjectURL(file);
    objectUrl.current = url;
    setStatus("searching");
    try {
      const image = new Image();
      image.src = url;
      await image.decode();
      if (image.naturalWidth * image.naturalHeight > 36_000_000) throw new Error("Image exceeds pixel limit");
      if (current !== request.current) return;
      setPreview(url);
      const ranked = await searchImage(image);
      if (current !== request.current) return;
      setResult(ranked);
      setStatus("idle");
    } catch {
      if (current === request.current) setStatus("error");
    }
  }

  const message = status === "searching" ? copy.waiting : status === "invalid" ? copy.invalid : status === "error" ? copy.error : "";
  return <div>
    <div ref={upload} className={`image-drop-zone${dragging ? " is-dragging" : ""}`}
      onDragOver={event => { event.preventDefault(); setDragging(true); }}
      onDragLeave={event => { if (!upload.current?.contains(event.relatedTarget as Node)) setDragging(false); }}
      onDrop={event => { event.preventDefault(); setDragging(false); void selectImage(event.dataTransfer.files[0]); }}>
      <label htmlFor="catalog-image-file" className="image-picker">
        <span className="image-picker-label">{copy.upload}</span>
        <span>{copy.drop}</span>
        <small id="image-search-formats">{copy.formats}</small>
        <input id="catalog-image-file" ref={input} type="file" accept={fileTypes.join(",")}
          aria-label={copy.upload} aria-describedby="image-search-formats"
          onChange={event => { void selectImage(event.currentTarget.files?.[0]); }}/>
      </label>
    </div>
    {preview && <div className="image-query"><img src={preview} alt={copy.upload}/><button type="button" onClick={clear}>{copy.clear}</button></div>}
    <p className="image-search-status" role="status">{message}</p>
    {result && <section aria-label={copy.matches} className="image-search-results">
      <h2>{copy.matches}</h2>
      <p>{copy.coverage} · {result.compared.toLocaleString(locale)}</p>
      <div className="main-catalog-grid">{result.matches.map(item => <CatalogCard item={item} key={item[0]} locale={locale}/>)}</div>
    </section>}
  </div>;
}
