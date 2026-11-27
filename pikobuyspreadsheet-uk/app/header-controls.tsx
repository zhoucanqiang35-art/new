"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Coins, Globe2 } from "lucide-react";
import languages from "./locales.json";
import currencyData from "./currency-rates.json";

const registerUrl = "https://www.pikobuy.com/register?invitedCode=KPNJVF&inviteUserId=1109716";
const currencies = Object.entries(currencyData.rates);
type Panel = "language" | "currency";

type Props = {
  locale: string;
  route: string;
  labels: { language: string; currency: string; estimate: string; dated: string };
};

export function HeaderControls({ locale, route, labels }: Props) {
  const language = languages.find(({ code }) => code === locale) ?? languages[0];
  const storageKey = `piko-uk-currency-${locale}`;
  const [currency, setCurrency] = useState(language.currency);
  const [panel, setPanel] = useState<Panel | null>(null);
  const controls = useRef<HTMLDivElement>(null);
  const languageButton = useRef<HTMLButtonElement>(null);
  const currencyButton = useRef<HTMLButtonElement>(null);
  const displayNames = new Intl.DisplayNames(locale, { type: "currency" });
  const rate = currencies.find(([code]) => code === currency)?.[1] ?? 1;
  const value = new Intl.NumberFormat(locale, { style: "currency", currency }).format(100 * rate);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(storageKey);
      if (saved && currencies.some(([code]) => code === saved)) setCurrency(saved);
    } catch {
      // The current document can still change currency if storage is unavailable.
    }
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale, storageKey]);

  useEffect(() => {
    if (!panel) return;
    function closeOutside(event: PointerEvent) {
      if (event.target instanceof Node && !controls.current?.contains(event.target)) setPanel(null);
    }
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setPanel(null);
      (panel === "language" ? languageButton : currencyButton).current?.focus();
    }
    window.addEventListener("pointerdown", closeOutside);
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      window.removeEventListener("pointerdown", closeOutside);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [panel]);

  function chooseCurrency(code: string) {
    setCurrency(code);
    try {
      window.localStorage.setItem(storageKey, code);
    } catch {
      // The choice remains active for the current page.
    }
    setPanel(null);
    currencyButton.current?.focus();
  }

  return (
    <div className="header-controls" ref={controls}>
      <button ref={languageButton} className="header-control" type="button"
        aria-label={`${labels.language}: ${language.name}`} aria-expanded={panel === "language"}
        aria-controls="piko-languages" onClick={() => setPanel(panel === "language" ? null : "language")}>
        <Globe2 size={16} /><span className="locale-full-name">{language.name}</span><span className="locale-short-name">{locale.toUpperCase()}</span><ChevronDown size={13} />
      </button>
      {panel === "language" && (
        <div className="header-popover" id="piko-languages" role="group" aria-label={labels.language}>
          <div className="header-option-grid">
            {languages.map(({ code, name }) => (
              <a key={code} href={`/${code}/${route === "home" ? "" : route + "/"}`}
                hrefLang={code} lang={code} dir="auto" aria-current={code === locale ? "page" : undefined}>
                {name}
              </a>
            ))}
          </div>
        </div>
      )}

      <button ref={currencyButton} className="header-control" type="button"
        aria-label={`${labels.currency}: ${currency}`} aria-expanded={panel === "currency"}
        aria-controls="piko-currencies" onClick={() => setPanel(panel === "currency" ? null : "currency")}>
        <Coins size={16} /><span>{currency}</span><ChevronDown size={13} />
      </button>
      {panel === "currency" && (
        <div className="header-popover" id="piko-currencies" role="group" aria-label={labels.currency}>
          <p className="currency-estimate" dir="auto">
            {labels.estimate}<br />
            <bdi>100 CNY ≈ {value}</bdi><br />
            <small>{labels.dated} <time dateTime={currencyData.date}>{currencyData.date}</time></small>
          </p>
          <div className="header-option-grid">
            {currencies.map(([code]) => (
              <button key={code} type="button" dir="auto" aria-pressed={code === currency}
                onClick={() => chooseCurrency(code)}>
                <strong>{code}</strong><span>{displayNames.of(code)}</span>
              </button>
            ))}
          </div>
        </div>
      )}
      <a className="join-pikobuy" href={registerUrl}>Join pikobuy</a>
      <span className="control-announcement" role="status">{panel === null ? value : ""}</span>
    </div>
  );
}
