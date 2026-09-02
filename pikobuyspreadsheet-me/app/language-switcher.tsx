"use client";

import { ChangeEvent, useEffect } from "react";

const supported = ["en", "de", "fr", "es", "it", "pt", "nl", "pl"];

export default function LanguageSwitcher({ current = "en", label = "Choose language" }: { current?: string; label?: string }) {
  useEffect(() => {
    document.documentElement.lang = current;
  }, [current]);

  function changeLanguage(event: ChangeEvent<HTMLSelectElement>) {
    const next = event.target.value;
    const suffix = window.location.pathname.replace(new RegExp(`^/(${supported.join("|")})(?=/|$)`),"") || "/";
    const englishOnlyArticles = ["/how-to-use-pikobuy-spreadsheet", "/pikobuy-return-policy", "/pikobuy-product-links"];
    const destination = next === "en" ? (suffix || "/") : englishOnlyArticles.includes(suffix) ? `/${next}/seo-articles` : `/${next}${suffix}`;
    window.location.assign(`${destination.replace(/\/{2,}/g,"/")}${window.location.search}${window.location.hash}`);
  }
  return <label className="language-switcher"><span className="sr-only">{label}</span><select value={current} onChange={changeLanguage} aria-label={label}><option value="en">EN</option><option value="de">DE</option><option value="fr">FR</option><option value="es">ES</option><option value="it">IT</option><option value="pt">PT</option><option value="nl">NL</option><option value="pl">PL</option></select></label>;
}
