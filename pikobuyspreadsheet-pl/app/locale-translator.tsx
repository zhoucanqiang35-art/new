"use client";

import { useEffect } from "react";

type Locale = "de" | "fr" | "es" | "it" | "nl" | "pt" | "pl";
type Dictionary = Record<string, string>;

const loaders: Record<Locale, () => Promise<{ default: Dictionary }>> = {
  de: () => import("./translations/de.json"),
  fr: () => import("./translations/fr.json"),
  es: () => import("./translations/es.json"),
  it: () => import("./translations/it.json"),
  nl: () => import("./translations/nl.json"),
  pt: () => import("./translations/pt.json"),
  pl: () => import("./translations/pl.json"),
};

export default function LocaleTranslator({ locale }: { locale: string }) {
  useEffect(() => {
    if (!(locale in loaders)) return;
    const activeLocale = locale as Locale;
    let cancelled = false;
    let observer: MutationObserver | null = null;

    loaders[activeLocale]().then(({ default: copy }) => {
      if (cancelled) return;
      document.documentElement.lang = activeLocale;
      document.body.dataset.locale = activeLocale;

      const translateText = (node: Node) => {
        const parent = node.parentElement;
        if (!parent || ["SCRIPT", "STYLE", "OPTION"].includes(parent.tagName)) return;
        const original = node.nodeValue || "";
        const trimmed = original.trim();
        const value = copy[trimmed];
        if (value) node.nodeValue = original.replace(trimmed, value);
      };

      const translateElement = (element: HTMLElement) => {
        ["placeholder", "aria-label", "title"].forEach((attribute) => {
          const value = element.getAttribute(attribute);
          if (value && copy[value]) element.setAttribute(attribute, copy[value]);
        });
        if (element instanceof HTMLAnchorElement) {
          const href = element.getAttribute("href");
          if (href?.startsWith("/") && !href.startsWith("/language/") && !href.startsWith("//")) {
            element.setAttribute("href", `/language/${activeLocale}${href === "/" ? "" : href}`);
          }
        }
      };

      const translateTree = (root: Node) => {
        if (root.nodeType === Node.TEXT_NODE) translateText(root);
        if (root instanceof HTMLElement) translateElement(root);
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
        let node: Node | null;
        while ((node = walker.nextNode())) {
          if (node.nodeType === Node.TEXT_NODE) translateText(node);
          else if (node instanceof HTMLElement) translateElement(node);
        }
      };

      translateTree(document.body);
      if (copy[document.title]) document.title = copy[document.title];

      observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          if (mutation.type === "characterData") translateText(mutation.target);
          mutation.addedNodes.forEach(translateTree);
        }
      });
      observer.observe(document.body, { childList: true, subtree: true, characterData: true });
      document.body.dataset.translationReady = "true";
      if (cancelled) observer.disconnect();
    });

    return () => {
      cancelled = true;
      observer?.disconnect();
      delete document.body.dataset.translationReady;
    };
  }, [locale]);

  return null;
}
