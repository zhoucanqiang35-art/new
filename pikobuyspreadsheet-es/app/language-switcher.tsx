"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, type ReactNode } from "react";
import { currencies } from "./currency-data";
import { selectCurrency, useCurrency } from "./currency";
import { locales } from "./data";
import { getHeaderCopy } from "./header-copy";
import { localPath } from "./i18n";

export const registrationUrl = "https://www.pikobuy.com/register?invitedCode=KPNJVF&inviteUserId=1109716";

export function HeaderControls({ locale }: { locale: string }) {
  const pathname = usePathname() || "/";
  const segments = pathname.split("/").filter(Boolean);
  const hasLocale = locales.some((item) => item.code === segments[0] && item.code !== "en-US");
  const rest = (hasLocale ? segments.slice(1) : segments).join("/");
  const activeLanguage = locales.find((item) => item.code === locale);
  const labels = getHeaderCopy(locale);
  const currency = useCurrency();
  const currencyNames = new Intl.DisplayNames(locale, { type: "currency" });
  const controls = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = controls.current;
    if (!root) return;
    function closeOutside(event: PointerEvent) {
      if (root?.contains(event.target as Node)) return;
      root?.querySelectorAll("details[open]").forEach((menu) => menu.removeAttribute("open"));
    }
    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, []);

  function closeMenu(event: React.MouseEvent<HTMLElement>) {
    const menu = event.currentTarget.closest("details");
    if (!menu) return;
    menu.open = false;
    menu.querySelector("summary")?.focus();
  }

  return <div className="header-controls" ref={controls} onKeyDown={(event) => {
    if (event.key !== "Escape") return;
    const menu = controls.current?.querySelector<HTMLDetailsElement>("details[open]");
    if (!menu) return;
    menu.open = false;
    menu.querySelector("summary")?.focus();
    event.preventDefault();
  }}>
    <HeaderMenu id="language" label={labels.language} value={activeLanguage?.short || "EN"}>
      {locales.map((item) => {
        const path = localPath(item.code, rest);
        return <a key={item.code} href={path === "/" ? path : `${path}/`}
          lang={item.code} hrefLang={item.code} aria-current={item.code === locale ? "page" : undefined}>
          <span>{item.label}</span><small>{item.country}</small>
        </a>;
      })}
    </HeaderMenu>
    <HeaderMenu id="currency" label={labels.currency} value={currency}>
      {currencies.map((code) => <button key={code} type="button" aria-pressed={code === currency}
        onClick={(event) => { selectCurrency(code); closeMenu(event); }}>
        <span>{code}</span><small>{currencyNames.of(code)}</small>
      </button>)}
    </HeaderMenu>
    <a className="button register-button" href={registrationUrl}>{labels.join}</a>
  </div>;
}

function HeaderMenu({ id, label, value, children }: { id: string; label: string; value: string; children: ReactNode }) {
  return <details className={`header-menu header-menu-${id}`} name="header-preference">
    <summary aria-label={`${label} · ${value}`} aria-controls={`header-${id}-options`}>
      {value}<span aria-hidden="true">⌄</span>
    </summary>
    <div className="header-menu-options" id={`header-${id}-options`}>{children}</div>
  </details>;
}
