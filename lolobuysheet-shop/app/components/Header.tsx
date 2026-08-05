"use client";

import { useEffect, useRef, useState } from "react";
import { languageNames, localeCodes, type LocaleCode } from "../site-data";

const routes = ["/spreadsheet", "/categories", "/guides", "/guides/qc", "/guides/shipping", "/reviews", "/seo-articles"];

export default function Header({ lang, path, labels }: { lang: LocaleCode; path: string; labels: string[] }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function closeOutside(event: PointerEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) setOpen(false);
    }
    function closeEscape(event: KeyboardEvent) {
      if (event.key === "Escape" && open) {
        setOpen(false);
        triggerRef.current?.focus();
      }
    }
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", closeEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("keydown", closeEscape);
    };
  }, [open]);

  const withLang = (target: string, code = lang) => code === "en" ? target : `/${code}${target === "/" ? "" : target}`;

  return (
    <header className="masthead">
      <div className="shell masthead-inner">
        <a className="wordmark brand-logo-link" href={withLang("/")} aria-label="LoloBuy Sheet">
          <img className="brand-logo" src="/lolobuy-logo.webp" alt="" width="200" height="200" />
          <span className="brand-name">LoloBuy Sheet</span>
        </a>
        <nav className="primary-nav" aria-label="LoloBuy Sheet">
          {labels.map((label, index) => {
            const route = routes[index];
            const active = path === route ||
              (route === "/guides" && path === "/guides/beginner") ||
              (route === "/seo-articles" && path.startsWith("/seo-articles/"));
            return <a className={active ? "active" : ""} aria-current={active ? "page" : undefined} href={withLang(route)} key={route}>{label}</a>;
          })}
        </nav>
        <div className="language-picker" ref={menuRef}>
          <button ref={triggerRef} type="button" aria-expanded={open} aria-controls="language-menu" onClick={() => setOpen(!open)}>
            {lang.toUpperCase()} · {languageNames[lang]} <span aria-hidden="true">⌄</span>
          </button>
          {open && (
            <nav className="language-menu" id="language-menu" aria-label="Languages">
              {localeCodes.map((code) => (
                <a className={code === lang ? "current" : ""} aria-current={code === lang ? "page" : undefined} key={code} href={withLang(path, code)} onClick={() => setOpen(false)}>
                  <span>{code.toUpperCase()}</span>{languageNames[code]}
                </a>
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
