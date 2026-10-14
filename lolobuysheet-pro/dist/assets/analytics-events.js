(() => {
  const send = (name, details = {}) => {
    const payload = { ...details, page_path: window.location.pathname };
    if (window.zaraz?.track) {
      window.zaraz.track(name, payload);
      return;
    }
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: name, ...payload });
  };

  document.addEventListener("submit", (event) => {
    if (event.target?.matches(".product-main-search")) {
      send("search_submit", { search_destination: "findspreadsheet" });
    }
  });

  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[href]");
    if (!link) return;

    const destination = new URL(link.href, window.location.href);
    if (destination.hostname.replace(/^www\./, "") === "findspreadsheet.com") {
      send("outbound_product_click", { link_area: link.closest("section")?.className || "page" });
      return;
    }

    if (destination.hostname === window.location.hostname && destination.pathname.startsWith("/seo-articles/")) {
      send("buyer_guide_click", { guide_path: destination.pathname });
    }
  });
})();
