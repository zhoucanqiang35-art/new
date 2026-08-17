(() => {
  const search = document.querySelector("#product-search");
  const buttons = [...document.querySelectorAll("[data-filter]")];
  const cards = [...document.querySelectorAll(".verified-product")];
  let category = "all";
  const apply = () => {
    const query = (search?.value || "").trim().toLowerCase();
    for (const card of cards) {
      const matchesCategory = category === "all" || card.dataset.category === category;
      const matchesQuery = !query || card.textContent.toLowerCase().includes(query);
      card.classList.toggle("is-hidden", !(matchesCategory && matchesQuery));
    }
  };
  search?.addEventListener("input", apply);
  buttons.forEach((button) => button.addEventListener("click", () => {
    category = button.dataset.filter;
    buttons.forEach((item) => item.classList.toggle("active", item === button));
    apply();
  }));
})();
