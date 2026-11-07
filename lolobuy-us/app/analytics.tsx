"use client";

import { useEffect } from "react";

// Preview traffic must never be mixed into the live site's data stream.
export function Analytics() {
  useEffect(() => {
    if (location.hostname !== "lolobuy.us" && location.hostname !== "www.lolobuy.us") return;
    const measurementId = "G-HL2W2LD8WS";
    const w = window as typeof window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };
    w.dataLayer = w.dataLayer || [];
    w.gtag = w.gtag || function (...args: unknown[]) { w.dataLayer?.push(args); };
    w.gtag("js", new Date());
    // Zaraz is configured to send the initial pageview on the live domain.
    // History-change events still require independent validation in GA4.
    w.gtag("config", measurementId, { send_page_view: false, page_location: location.origin + location.pathname });
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);
    function click(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest("a");
      if (!link) return;
      let url: URL;
      try { url = new URL(link.href); } catch { return; }
      if (url.hostname !== "www.lolobuy.com" && url.hostname !== "lolobuy.com") return;
      if (url.pathname === "/index") w.gtag?.("event", "register_click", { event_category: "outbound" });
      else if (url.pathname.startsWith("/productDetail/")) w.gtag?.("event", "product_buy_click", { event_category: "outbound" });
    }
    function submit(event: Event) {
      const form = event.target;
      if (form instanceof HTMLFormElement && form.matches(".elite-search")) w.gtag?.("event", "catalog_search", { event_category: "engagement" });
    }
    document.addEventListener("click", click);
    document.addEventListener("submit", submit);
    return () => { document.removeEventListener("click", click); document.removeEventListener("submit", submit); script.remove(); };
  }, []);
  return null;
}
