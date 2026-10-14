(() => {
  const menus = "details.language-menu, details.header-mobile-menu";

  const closeExcept = (target) => {
    document.querySelectorAll(menus).forEach((menu) => {
      if (!menu.contains(target)) menu.removeAttribute("open");
    });
  };

  document.addEventListener("pointerdown", (event) => closeExcept(event.target));

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    document.querySelectorAll(menus).forEach((menu) => menu.removeAttribute("open"));
  });

  document.addEventListener("click", (event) => {
    const link = event.target.closest("details a");
    if (!link) return;
    document.querySelectorAll(menus).forEach((menu) => menu.removeAttribute("open"));
  });

  document.querySelectorAll("[data-language-switcher]").forEach((select) => {
    select.addEventListener("change", () => {
      if (select.value) window.location.assign(select.value);
    });
  });

  const mobileFaq = window.matchMedia("(max-width: 760px)");
  const collapseMobileFaq = () => {
    if (!mobileFaq.matches) return;
    document.querySelectorAll(".homepage-faq details[open]").forEach((item) => {
      item.removeAttribute("open");
    });
  };
  collapseMobileFaq();
  mobileFaq.addEventListener?.("change", collapseMobileFaq);

  document.querySelectorAll('a[href^="https://findspreadsheet.com/"]').forEach((link) => {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });

  document.querySelectorAll('.qc-sidebar a[href*="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const destination = new URL(link.href, window.location.href);
      const target = document.querySelector(destination.hash);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `${window.location.pathname}${destination.hash}`);
    });
  });

  const categoryImages = new Map([
    ["https://findspreadsheet.com/shoes/", ["/assets/categories/shoes.webp", "Starwalk sneakers from the FindSpreadsheet shoes category"]],
    ["https://findspreadsheet.com/hoodies-sweaters/", ["/assets/categories/hoodies.webp", "Moncler hoodie from the FindSpreadsheet hoodies and sweaters category"]],
    ["https://findspreadsheet.com/t-shirts/", ["/assets/categories/t-shirts.webp", "Valentino T-shirt from the FindSpreadsheet T-shirts category"]],
    ["https://findspreadsheet.com/jackets/", ["/assets/categories/jackets.webp", "Moncler down jacket from the FindSpreadsheet jackets category"]],
    ["https://findspreadsheet.com/pants-shorts/", ["/assets/categories/pants-shorts.webp", "Lacoste swim shorts from the FindSpreadsheet pants and shorts category"]],
    ["https://findspreadsheet.com/headwear/", ["/assets/categories/headwear.webp", "Corteiz cap from the FindSpreadsheet headwear category"]],
    ["https://findspreadsheet.com/accessories/", ["/assets/categories/accessories.webp", "Tom Ford sunglasses from the FindSpreadsheet accessories category"]],
    ["https://findspreadsheet.com/Jersey/", ["/assets/categories/jersey.webp", "Italy football jersey from the FindSpreadsheet jersey category"]],
    ["https://findspreadsheet.com/electronics/", ["/assets/categories/electronics.webp", "AirPods Pro 2 from the FindSpreadsheet electronics category"]],
    ["https://findspreadsheet.com/other-stuff/", ["/assets/categories/other-stuff.webp", "Dior perfume from the FindSpreadsheet other products category"]]
  ]);

  document.querySelectorAll(".category-card-grid > a").forEach((card) => {
    const replacement = categoryImages.get(card.href);
    const image = card.querySelector("img");
    if (!replacement || !image) return;
    image.src = replacement[0];
    image.alt = replacement[1];
    image.removeAttribute("srcset");
  });

  const brandRail = document.querySelector(".brand-grid");
  if (brandRail) {
    const cards = [...brandRail.querySelectorAll("a")];
    const controls = [...document.querySelectorAll(".brand-actions button")];
    const progress = document.querySelector(".brand-progress span");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const speed = 48;
    let marquee;
    let duration = 1;
    let frame = 0;
    let resumeTimer;
    let resizeTimer;
    let dragState;
    let suppressClick = false;
    const pauseReasons = new Set();

    cards.forEach((card) => {
      const name = card.querySelector("strong")?.textContent?.trim();
      const mark = card.querySelector("span");
      if (!name || !mark) return;
      mark.textContent = name;
      mark.className = `brand-wordmark brand-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
      mark.setAttribute("aria-hidden", "true");
    });

    // Mobile shows the original twelve cards as a complete grid; clones and
    // marquee motion are desktop-only so no horizontal gesture is required.
    if (window.matchMedia("(max-width: 600px)").matches) return;

    cards.forEach((card) => {
      const clone = card.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      clone.setAttribute("tabindex", "-1");
      clone.dataset.brandClone = "true";
      brandRail.appendChild(clone);
    });

    const cardStep = () => {
      const first = cards[0];
      return first ? first.getBoundingClientRect().width + 14 : 220;
    };

    const wrapTime = (value) => {
      if (!duration) return 0;
      return ((value % duration) + duration) % duration;
    };

    const currentTime = () => {
      const time = Number(marquee?.currentTime);
      return Number.isFinite(time) ? time : 0;
    };

    const updateProgress = () => {
      if (!progress) return;
      const ratio = duration > 0 ? wrapTime(currentTime()) / duration : 0;
      progress.style.width = `${Math.max(12, Math.min(100, 12 + ratio * 88))}%`;
    };

    const syncPlayback = () => {
      if (!marquee) return;
      if (reducedMotion.matches || pauseReasons.size > 0 || document.hidden) {
        marquee.pause();
      } else {
        marquee.play();
      }
    };

    const buildMarquee = () => {
      const first = cards[0];
      const firstClone = brandRail.children[cards.length];
      if (!first || !firstClone) return;

      const previousRatio = duration > 1 ? wrapTime(currentTime()) / duration : 0;
      const loopWidth = firstClone.offsetLeft - first.offsetLeft;
      if (loopWidth <= 0) return;

      marquee?.cancel();
      duration = Math.max(22000, (loopWidth / speed) * 1000);
      marquee = brandRail.animate(
        [
          { transform: "translate3d(0, 0, 0)" },
          { transform: `translate3d(${-loopWidth}px, 0, 0)` }
        ],
        {
          duration,
          iterations: Infinity,
          easing: "linear"
        }
      );
      marquee.currentTime = previousRatio * duration;
      syncPlayback();
      updateProgress();
    };

    const tick = () => {
      updateProgress();
      frame = window.requestAnimationFrame(tick);
    };

    const pause = (reason) => {
      pauseReasons.add(reason);
      syncPlayback();
    };

    const resume = (reason) => {
      pauseReasons.delete(reason);
      syncPlayback();
    };

    const pauseTemporarily = () => {
      pause("manual");
      window.clearTimeout(resumeTimer);
      resumeTimer = window.setTimeout(() => resume("manual"), 1200);
    };

    const move = (direction = 1) => {
      if (!marquee) return;
      const timeDelta = (cardStep() / speed) * 1000 * direction;
      marquee.currentTime = wrapTime(currentTime() + timeDelta);
      updateProgress();
      pauseTemporarily();
    };

    const finishDrag = (event) => {
      if (!dragState || event.pointerId !== dragState.pointerId) return;
      const moved = Math.abs(event.clientX - dragState.startX) > 7;
      suppressClick = moved;
      dragState = undefined;
      if (brandRail.hasPointerCapture?.(event.pointerId)) {
        brandRail.releasePointerCapture(event.pointerId);
      }
      window.setTimeout(() => resume("drag"), 180);
    };

    controls[0]?.addEventListener("click", () => move(-1));
    controls[1]?.addEventListener("click", () => move(1));

    brandRail.addEventListener("pointerdown", (event) => {
      if (event.button !== 0 || !marquee) return;
      dragState = {
        pointerId: event.pointerId,
        startX: event.clientX,
        startTime: currentTime(),
        captured: false
      };
      suppressClick = false;
      pause("drag");
    });

    brandRail.addEventListener("pointermove", (event) => {
      if (!dragState || event.pointerId !== dragState.pointerId || !marquee) return;
      const distance = event.clientX - dragState.startX;
      if (!dragState.captured && Math.abs(distance) > 7) {
        brandRail.setPointerCapture?.(event.pointerId);
        dragState.captured = true;
      }
      marquee.currentTime = wrapTime(dragState.startTime - (distance / speed) * 1000);
      updateProgress();
    });

    brandRail.addEventListener("pointerup", finishDrag);
    brandRail.addEventListener("pointercancel", finishDrag);
    brandRail.addEventListener("click", (event) => {
      if (!suppressClick) return;
      event.preventDefault();
      event.stopPropagation();
      suppressClick = false;
    }, true);

    brandRail.addEventListener("pointerenter", () => pause("hover"));
    brandRail.addEventListener("pointerleave", () => resume("hover"));
    brandRail.addEventListener("focusin", () => pause("focus"));
    brandRail.addEventListener("focusout", (event) => {
      if (!brandRail.contains(event.relatedTarget)) resume("focus");
    });

    document.addEventListener("visibilitychange", syncPlayback);
    reducedMotion.addEventListener?.("change", () => {
      buildMarquee();
      syncPlayback();
    });

    const observer = new ResizeObserver(() => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(buildMarquee, 100);
    });
    observer.observe(document.querySelector(".brand-rail-wrap") || brandRail);

    brandRail.dataset.autoplay = "true";
    buildMarquee();
    frame = window.requestAnimationFrame(tick);
    window.addEventListener("pagehide", () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(resumeTimer);
      window.clearTimeout(resizeTimer);
      observer.disconnect();
      marquee?.cancel();
    }, { once: true });
  }
})();
