const updateRails = () => {
  document.querySelectorAll(".editorial-section").forEach((section) => {
    const rail = section.querySelector(".editorial-grid");
    const cards = [...section.querySelectorAll(".official-update-card")];
    const dots = [...section.querySelectorAll(".editorial-progress button")];

    if (!rail || cards.length === 0 || dots.length !== cards.length) return;

    const select = (index) => {
      dots.forEach((dot, dotIndex) => {
        if (dotIndex === index) {
          dot.setAttribute("aria-current", "true");
        } else {
          dot.removeAttribute("aria-current");
        }
      });
    };

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        cards[index].scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "start",
        });
        select(index);
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) select(cards.indexOf(visible.target));
      },
      { root: rail, threshold: [0.55, 0.7, 0.85] },
    );

    cards.forEach((card) => observer.observe(card));
  });
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", updateRails, { once: true });
} else {
  updateRails();
}
