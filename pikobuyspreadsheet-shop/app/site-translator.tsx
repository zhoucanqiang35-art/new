"use client";

import { useLayoutEffect } from "react";
import type { LanguageCode } from "./i18n";
import { translationLoaders } from "./translation-loaders";

const ignoredParents = new Set(["SCRIPT", "STYLE", "NOSCRIPT", "CODE", "PRE"]);
const translatableAttributes = ["placeholder", "aria-label", "title", "alt"] as const;

function normalized(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

export function SiteTranslator({ language }: { language: LanguageCode }) {
  useLayoutEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = "ltr";
    if (language === "en") return;
    let cancelled = false;
    let observer: MutationObserver | undefined;

    const applyTranslation = async () => {
      const loader = translationLoaders[language as Exclude<LanguageCode, "en">];
      if (!loader) return;
      const dictionary = (await loader()).default;
      if (cancelled) return;

    const translateTextNode = (node: Text) => {
      if (!node.parentElement || ignoredParents.has(node.parentElement.tagName)) return;
      const original = node.nodeValue ?? "";
      const key = normalized(original);
      const translated = dictionary[key];
      if (!translated || translated === key) return;
      const leading = original.match(/^\s*/)?.[0] ?? "";
      const trailing = original.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = `${leading}${translated}${trailing}`;
    };

    const translateElement = (element: Element) => {
      for (const attribute of translatableAttributes) {
        const original = element.getAttribute(attribute);
        if (!original) continue;
        const translated = dictionary[normalized(original)];
        if (translated) element.setAttribute(attribute, translated);
      }
      if (element instanceof HTMLAnchorElement && element.origin === window.location.origin) {
        const url = new URL(element.href);
        url.searchParams.set("lang", language);
        element.href = `${url.pathname}${url.search}${url.hash}`;
      }
    };

    const translateTree = (root: Node) => {
      if (root.nodeType === Node.TEXT_NODE) {
        translateTextNode(root as Text);
        return;
      }
      if (root.nodeType !== Node.ELEMENT_NODE && root.nodeType !== Node.DOCUMENT_NODE) return;
      if (root.nodeType === Node.ELEMENT_NODE) translateElement(root as Element);
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
      let current = walker.nextNode();
      while (current) {
        if (current.nodeType === Node.TEXT_NODE) translateTextNode(current as Text);
        else translateElement(current as Element);
        current = walker.nextNode();
      }
    };

      translateTree(document.body);
      document.documentElement.dataset.i18nReady = language;
      observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) for (const node of mutation.addedNodes) translateTree(node);
      });
      observer.observe(document.body, { childList: true, subtree: true });
    };

    void applyTranslation();
    return () => {
      cancelled = true;
      observer?.disconnect();
    };
  }, [language]);

  return null;
}
