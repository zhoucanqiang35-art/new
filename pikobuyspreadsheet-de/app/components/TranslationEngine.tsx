"use client";

import { useLayoutEffect } from "react";
import { loadGeneratedTranslations } from "../i18n/generated-translations";

const languageStorageKey = "pikobuy-site-language";
export const supportedLanguageCodes = ["en", "de", "fr", "es", "it", "nl", "pl", "pt", "sv"] as const;
type SupportedLanguage = (typeof supportedLanguageCodes)[number];

function isSupportedLanguage(value: string | null): value is SupportedLanguage {
  return Boolean(value && supportedLanguageCodes.includes(value as SupportedLanguage));
}

export function readSelectedLanguage(): SupportedLanguage {
  if (typeof window === "undefined") return "en";
  const firstSegment = window.location.pathname.split("/").filter(Boolean)[0] || null;
  return isSupportedLanguage(firstSegment) && firstSegment !== "en" ? firstSegment : "en";
}

function stripLanguagePrefix(pathname: string) {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length && isSupportedLanguage(parts[0])) parts.shift();
  return parts.length ? `/${parts.join("/")}` : "/";
}

function localizedPath(pathname: string, language: SupportedLanguage) {
  const base = stripLanguagePrefix(pathname);
  return language === "en" ? base : `/${language}${base === "/" ? "" : base}`;
}

function localizeInternalLinks(language: SupportedLanguage) {
  document.querySelectorAll<HTMLAnchorElement>("a[href]").forEach((anchor) => {
    const rawHref = anchor.getAttribute("href");
    if (!rawHref || rawHref.startsWith("#") || rawHref.startsWith("mailto:") || rawHref.startsWith("tel:")) return;
    const destination = new URL(rawHref, window.location.href);
    if (destination.origin !== window.location.origin) return;
    destination.pathname = localizedPath(destination.pathname, language);
    destination.searchParams.delete("lang");
    anchor.href = destination.href;
  });
}

function translateValue(value: string, dictionary: Record<string, string>) {
  const leading = value.match(/^\s*/)?.[0] ?? "";
  const trailing = value.match(/\s*$/)?.[0] ?? "";
  const source = value.trim().replace(/\s+/g, " ");
  if (!source) return value;
  const translated = dictionary[source];
  return translated ? `${leading}${translated}${trailing}` : value;
}

function translateTree(root: ParentNode, dictionary: Record<string, string>) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let node = walker.nextNode();
  while (node) {
    const parent = node.parentElement;
    const excluded = !parent || ["SCRIPT", "STYLE", "NOSCRIPT", "TEXTAREA"].includes(parent.tagName)
      || Boolean(parent.closest(".notranslate,[translate='no']"));
    if (!excluded && node.textContent?.trim()) node.textContent = translateValue(node.textContent, dictionary);
    node = walker.nextNode();
  }
  root.querySelectorAll<HTMLElement>("[placeholder],[title],[aria-label],img[alt]").forEach((element) => {
    if (element.closest(".notranslate,[translate='no']")) return;
    ["placeholder", "title", "aria-label", "alt"].forEach((attribute) => {
      const value = element.getAttribute(attribute);
      if (value) element.setAttribute(attribute, translateValue(value, dictionary));
    });
  });
}

export function selectSiteLanguage(language: string) {
  if (typeof window === "undefined" || !isSupportedLanguage(language)) return;
  window.localStorage.setItem(languageStorageKey, language);
  const destination = new URL(window.location.href);
  destination.pathname = localizedPath(destination.pathname, language);
  destination.searchParams.delete("lang");
  window.location.assign(destination.toString());
}

export default function TranslationEngine() {
  useLayoutEffect(() => {
    const language = readSelectedLanguage();
    let cancelled = false;
    window.localStorage.setItem(languageStorageKey, language);
    document.documentElement.lang = language;
    document.documentElement.dataset.siteLanguage = language;
    localizeInternalLinks(language);

    let observer: MutationObserver | undefined;
    void loadGeneratedTranslations(language).then((dictionary) => {
      if (cancelled) return;
      translateTree(document.body, dictionary);
      localizeInternalLinks(language);
      document.documentElement.dataset.translationComplete = "true";
      observer = new MutationObserver((records) => {
        for (const record of records) {
          record.addedNodes.forEach((added) => {
            if (added.nodeType === Node.TEXT_NODE && added.textContent) {
              added.textContent = translateValue(added.textContent, dictionary);
            } else if (added instanceof HTMLElement) {
              translateTree(added, dictionary);
            }
          });
        }
        localizeInternalLinks(language);
      });
      observer.observe(document.body, { childList: true, subtree: true });
    });
    return () => {
      cancelled = true;
      observer?.disconnect();
    };
  }, []);
  return null;
}
