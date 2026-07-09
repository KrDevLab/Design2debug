// Wires up prev/next buttons + dot indicators for a horizontal snap-slider.
// Expects markup produced by the `sliderShell()` template below.
window.sliderShell = function sliderShell({ id, itemsHtml, count, ariaLabel = "carousel" }) {
  const dots = Array.from({ length: count })
    .map(
      (_, i) =>
        `<button aria-label="Go to slide ${i + 1}" data-dot="${i}" class="h-1.5 rounded-full transition-all duration-300 ${
          i === 0 ? "w-8 bg-brand" : "w-1.5 bg-rule hover:bg-ink-soft"
        }"></button>`
    )
    .join("");
  return `
    <div class="relative" aria-label="${ariaLabel}" role="region" id="${id}">
      <div class="track -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-3 no-scrollbar">
        ${itemsHtml}
      </div>
      <div class="mt-5 flex items-center justify-between gap-4">
        <div class="dots flex items-center gap-1.5">${dots}</div>
        <div class="flex items-center gap-2">
          <button aria-label="Previous" data-prev class="inline-flex h-10 w-10 items-center justify-center border border-ink text-ink transition-colors hover:bg-ink hover:text-paper">
            <i data-lucide="chevron-left" class="h-4 w-4"></i>
          </button>
          <button aria-label="Next" data-next class="inline-flex h-10 w-10 items-center justify-center border border-ink text-ink transition-colors hover:bg-ink hover:text-paper">
            <i data-lucide="chevron-right" class="h-4 w-4"></i>
          </button>
        </div>
      </div>
    </div>`;
};

window.initSlider = function initSlider(id) {
  const root = document.getElementById(id);
  if (!root) return;
  const track = root.querySelector(".track");
  const dots = Array.from(root.querySelectorAll("[data-dot]"));
  let active = 0;

  const step = () => {
    const card = track.firstElementChild;
    return card ? card.getBoundingClientRect().width + 20 : track.clientWidth * 0.9;
  };

  const setActive = (i) => {
    active = i;
    dots.forEach((d, idx) => {
      d.className = `h-1.5 rounded-full transition-all duration-300 ${
        idx === active ? "w-8 bg-brand" : "w-1.5 bg-rule hover:bg-ink-soft"
      }`;
    });
  };

  track.addEventListener(
    "scroll",
    () => {
      const w = step();
      setActive(Math.round(track.scrollLeft / w));
    },
    { passive: true }
  );

  root.querySelector("[data-prev]").addEventListener("click", () => {
    track.scrollBy({ left: -step(), behavior: "smooth" });
  });
  root.querySelector("[data-next]").addEventListener("click", () => {
    track.scrollBy({ left: step(), behavior: "smooth" });
  });
  dots.forEach((d, i) => {
    d.addEventListener("click", () => {
      track.scrollTo({ left: i * step(), behavior: "smooth" });
    });
  });
};
