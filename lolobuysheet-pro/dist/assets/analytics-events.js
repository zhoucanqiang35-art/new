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

  // These events deliberately avoid search queries, product names, account data
  // and any other visitor-entered data. They let GA4/Zaraz show whether guide
  // discovery actually leads to reading, instead of only recording a pageview.
  const guide = document.querySelector(".long-form-article");
  if (guide) {
    let sentReadDepth = false;
    const reportReadDepth = () => {
      if (sentReadDepth) return;
      const top = guide.getBoundingClientRect().top + window.scrollY;
      const progress = (window.scrollY + window.innerHeight - top) / guide.offsetHeight;
      if (progress >= 0.75) {
        sentReadDepth = true;
        send("buyer_guide_read_75", { guide_path: window.location.pathname });
        window.removeEventListener("scroll", reportReadDepth);
      }
    };
    window.addEventListener("scroll", reportReadDepth, { passive: true });
    reportReadDepth();
  }
})();
