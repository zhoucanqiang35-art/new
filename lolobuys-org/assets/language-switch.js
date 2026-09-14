(function () {
  const supported = new Set(["en", "de", "fr", "es", "it", "pt", "nl", "pl", "sv"]);

  function selectedLanguage() {
    const value = new URLSearchParams(window.location.search).get("lang") || localStorage.getItem("atlasLang") || "en";
    return supported.has(value) ? value : "en";
  }

  function keepLanguageOnInternalLinks(language) {
    document.querySelectorAll("a[href]").forEach((link) => {
      const raw = link.getAttribute("href");
      if (!raw || raw.startsWith("#") || raw.startsWith("mailto:") || raw.startsWith("tel:")) return;

      const target = new URL(raw, window.location.origin);
      if (target.origin !== window.location.origin) return;

      target.searchParams.set("lang", language);
      link.setAttribute("href", target.pathname + target.search + target.hash);
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    const select = document.querySelector("#language");
    const language = selectedLanguage();

    keepLanguageOnInternalLinks(language);
    if (!select) return;

    select.value = language;
    select.onchange = () => {
      const next = supported.has(select.value) ? select.value : "en";
      localStorage.setItem("atlasLang", next);

      const destination = new URL(window.location.href);
      destination.searchParams.set("lang", next);
      window.location.assign(destination.href);
    };
  });
}());
