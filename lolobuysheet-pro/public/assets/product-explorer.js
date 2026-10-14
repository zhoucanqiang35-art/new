(() => {
  const search = document.querySelector("#product-search");
  const searchForm = document.querySelector("#product-main-search");
  const buttons = [...document.querySelectorAll("[data-filter]")];
  const cards = [...document.querySelectorAll(".verified-product")];
  let category = "all";
  const apply = () => {
    for (const card of cards) {
      const matchesCategory = category === "all" || card.dataset.category === category;
      card.classList.toggle("is-hidden", !matchesCategory);
    }
  };
  searchForm?.addEventListener("submit", (event) => {
    const query = (search?.value || "").trim();
    if (!query) {
      event.preventDefault();
      search?.focus();
      return;
    }
    search.value = query;
  });
  buttons.forEach((button) => button.addEventListener("click", () => {
    category = button.dataset.filter;
    buttons.forEach((item) => item.classList.toggle("active", item === button));
    apply();
  }));
})();
