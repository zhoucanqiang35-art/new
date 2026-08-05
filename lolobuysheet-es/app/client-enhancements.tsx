"use client";

import { useEffect } from "react";

export function ClientEnhancements() {
  useEffect(() => {
    const supported = new Set([
      "es", "de", "fr", "it", "pt", "nl", "pl", "sv", "da", "no", "fi", "cs",
      "ro", "hu", "el", "uk", "tr", "ru", "bg", "ja", "ko", "ar", "zh",
    ]);
    const candidate = window.location.pathname.split("/").filter(Boolean)[0]?.toLowerCase();
    const locale = candidate && supported.has(candidate) ? candidate : "en";
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";

    const closeMenus = (event: PointerEvent) => {
      document.querySelectorAll<HTMLDetailsElement>("details.language-menu[open], details.mobile-pages[open]")
        .forEach((menu) => {
          if (!menu.contains(event.target as Node)) menu.open = false;
        });
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      document.querySelectorAll<HTMLDetailsElement>("details.language-menu[open], details.mobile-pages[open]")
        .forEach((menu) => { menu.open = false; });
    };
    document.addEventListener("pointerdown", closeMenus);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeMenus);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return null;
}

