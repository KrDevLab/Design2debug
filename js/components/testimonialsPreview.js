// js/components/testimonialsPreview.js
//
// Card is styled as a terminal / git-diff window — feedback renders as an
// added diff line, the reviewer as a commit author, rating as a status pill.
function testimonialCardHtml(t, index) {
  const fileTag = `review_${String(index + 1).padStart(2, "0")}.diff`;
  const meta = t.service ? `${t.name} · ${t.service}` : t.name;

  return `
    <article class="w-full shrink-0 overflow-hidden border border-rule bg-paper font-mono">
      <div class="flex items-center gap-2 border-b border-rule bg-paper-2 px-4 py-2.5">
        <span class="h-2.5 w-2.5 rounded-full bg-red-400"></span>
        <span class="h-2.5 w-2.5 rounded-full bg-amber-400"></span>
        <span class="h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
        <span class="ml-2 text-xs text-ink-soft">${fileTag}</span>
      </div>

      <div class="px-5 py-6 sm:px-7 sm:py-7">
        <div class="text-xs text-ink-soft">// client_feedback.log</div>

        <div class="mt-3 flex gap-3">
          <span class="text-sm text-emerald-600">+</span>
          <p class="font-sans text-[0.95rem] leading-relaxed text-ink">${t.feedback}</p>
        </div>

        <div class="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-dashed border-rule pt-4">
          <div class="flex items-center gap-2">
            <i data-lucide="git-commit-horizontal" class="h-3.5 w-3.5 text-ink-soft"></i>
            <span class="font-sans text-xs text-ink-soft">${meta}</span>
          </div>
          <span class="rounded bg-emerald-50 px-2 py-1 text-[0.7rem] text-emerald-700">rating: ${t.rating}/5</span>
        </div>
      </div>
    </article>`;
}

window.renderTestimonialsPreview = function renderTestimonialsPreview(containerId) {
  const el = document.getElementById(containerId);
  const trackId = `${containerId}-track`;
  const dotsId = `${containerId}-dots`;
  const prevId = `${containerId}-prev`;
  const nextId = `${containerId}-next`;
  const countId = `${containerId}-count`;

  function chunk(list, size) {
    const out = [];
    for (let i = 0; i < list.length; i += size) out.push(list.slice(i, i + size));
    return out;
  }

  async function paint() {
    el.innerHTML = `
      <section id="testimonials" class="border-b border-rule bg-paper-2 py-24">
        <div class="container-ibm">
          <div class="font-mono text-xs text-ink-soft">Loading reviews…</div>
        </div>
      </section>`;

    let data = [];
    try {
      data = (await window.getTestimonials()).slice(0, 6);
    } catch (err) {
      console.error("Failed to load testimonials:", err);
    }
    render(data);
  }

  function render(data) {
    el.innerHTML = `
      <section id="testimonials" class="border-b border-rule bg-paper-2 py-24">
        <div class="container-ibm">
          <div class="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div class="eyebrow">06 — Client feedback</div>
              <h2 class="display-2 mt-4 text-ink">What it's actually like to work with me.</h2>
              <p class="mt-4 max-w-xl text-sm leading-relaxed text-ink-soft">
                Every entry below was submitted directly by a client through the form on the
                testimonials page. I don't write these, edit them, or remove the honest ones.
              </p>
            </div>
            <a href="testimonials.html" class="inline-flex items-center gap-2 bg-ink px-5 py-3 text-sm text-paper hover:bg-brand">
              Share your experience →
            </a>
          </div>

          ${
            data.length === 0
              ? `
            <div class="mt-12 overflow-hidden border border-rule bg-paper font-mono">
              <div class="flex items-center gap-2 border-b border-rule bg-paper-2 px-4 py-2.5">
                <span class="h-2.5 w-2.5 rounded-full bg-red-400"></span>
                <span class="h-2.5 w-2.5 rounded-full bg-amber-400"></span>
                <span class="h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
                <span class="ml-2 text-xs text-ink-soft">client_feedback.log</span>
              </div>
              <div class="px-6 py-12 text-center">
                <div class="text-xs text-ink-soft">// no entries found</div>
                <p class="mt-3 font-sans text-base text-ink">Be the first to leave one.</p>
                <a href="testimonials.html" class="mt-6 inline-flex border border-ink px-4 py-2 font-sans text-xs text-ink hover:bg-ink hover:text-paper">
                  Submit a review
                </a>
              </div>
            </div>`
              : `
            <div class="mt-12">
              <div class="overflow-hidden">
                <div id="${trackId}" class="flex transition-transform duration-500 ease-out">
                  ${chunk(data, 3)
                    .map(
                      (page) => `
                    <div class="grid w-full shrink-0 grid-cols-1 gap-5 px-0.5 md:grid-cols-2 lg:grid-cols-3">
                      ${page.map((t) => `${testimonialCardHtml(t, data.indexOf(t))}`).join("")}
                    </div>`
                    )
                    .join("")}
                </div>
              </div>

              <div class="mt-6 flex items-center justify-between">
                <div id="${dotsId}" class="flex items-center gap-2"></div>
                <div class="flex items-center gap-4">
                  <span id="${countId}" class="font-mono text-xs text-ink-soft"></span>
                  <div class="flex items-center gap-2">
                    <button id="${prevId}" aria-label="Previous testimonials" class="inline-flex h-10 w-10 items-center justify-center border border-rule bg-paper text-ink hover:border-ink hover:bg-ink hover:text-paper disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-rule disabled:hover:bg-paper disabled:hover:text-ink">
                      <i data-lucide="chevron-left" class="h-4 w-4"></i>
                    </button>
                    <button id="${nextId}" aria-label="Next testimonials" class="inline-flex h-10 w-10 items-center justify-center border border-rule bg-paper text-ink hover:border-ink hover:bg-ink hover:text-paper disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-rule disabled:hover:bg-paper disabled:hover:text-ink">
                      <i data-lucide="chevron-right" class="h-4 w-4"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>`
          }
        </div>
      </section>`;

    if (data.length > 0) setupCarousel(Math.ceil(data.length / 3));
    if (window.lucide) lucide.createIcons();
  }

  function setupCarousel(count) {
    const track = document.getElementById(trackId);
    const dots = document.getElementById(dotsId);
    const prev = document.getElementById(prevId);
    const next = document.getElementById(nextId);
    const count_el = document.getElementById(countId);

    dots.innerHTML = Array.from({ length: count })
      .map((_, i) => `<button data-dot="${i}" aria-label="Go to page ${i + 1}" class="h-1.5 w-1.5 rounded-full bg-rule transition-all"></button>`)
      .join("");
    const dotEls = Array.from(dots.querySelectorAll("[data-dot]"));

    let index = 0;

    function render() {
      track.style.transform = `translateX(-${index * 100}%)`;
      dotEls.forEach((d, i) => {
        d.classList.toggle("w-5", i === index);
        d.classList.toggle("bg-brand", i === index);
        d.classList.toggle("bg-rule", i !== index);
      });
      count_el.textContent = `${String(index + 1).padStart(2, "0")} / ${String(count).padStart(2, "0")}`;
      prev.disabled = index === 0;
      next.disabled = index === count - 1;
    }

    function goTo(i) {
      index = Math.max(0, Math.min(count - 1, i));
      render();
    }

    prev.addEventListener("click", () => goTo(index - 1));
    next.addEventListener("click", () => goTo(index + 1));
    dotEls.forEach((d, i) => d.addEventListener("click", () => goTo(i)));

    render();
  }

  paint();
};