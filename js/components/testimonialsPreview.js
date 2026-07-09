// This static build has no backend, so testimonials are persisted in the
// browser's localStorage (key: "d2d_testimonials") instead of Supabase.
window.getTestimonials = function getTestimonials() {
  try {
    return JSON.parse(localStorage.getItem("d2d_testimonials") || "[]");
  } catch {
    return [];
  }
};
window.saveTestimonials = function saveTestimonials(list) {
  localStorage.setItem("d2d_testimonials", JSON.stringify(list));
};

function testimonialCardHtml(t) {
  return `
    <article class="relative flex h-full min-w-[85%] snap-start flex-col border border-rule bg-paper p-6 lg:min-w-0">
      <div class="absolute right-3 top-3">
        <button aria-label="Delete review" data-del="${t.id}" class="inline-flex h-8 w-8 items-center justify-center text-ink-soft hover:bg-paper-2 hover:text-destructive">
          <i data-lucide="trash-2" class="h-4 w-4"></i>
        </button>
      </div>
      <div class="font-mono text-xs text-brand">
        ${"★".repeat(t.rating)}<span class="text-ink-soft">${"★".repeat(5 - t.rating)}</span>
      </div>
      <p class="mt-4 text-base leading-relaxed text-ink">"${t.feedback}"</p>
      <div class="mt-6 flex items-center justify-between border-t border-rule pt-4 text-xs text-ink-soft">
        <span class="text-ink">${t.name}</span>
        ${t.service ? `<span class="font-mono">${t.service}</span>` : ""}
      </div>
    </article>`;
}

window.renderTestimonialsPreview = function renderTestimonialsPreview(containerId) {
  const el = document.getElementById(containerId);

  function paint() {
    const data = window.getTestimonials().slice(0, 6);
    el.innerHTML = `
      <section id="testimonials" class="border-b border-rule bg-paper-2 py-24">
        <div class="container-ibm">
          <div class="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div class="eyebrow">05 — Client feedback</div>
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
            <div class="mt-12 border border-dashed border-rule bg-paper p-12 text-center">
              <div class="font-mono text-xs text-ink-soft">No ratings yet</div>
              <p class="mt-2 text-base text-ink">Be the first to leave one.</p>
              <a href="testimonials.html" class="mt-6 inline-flex border border-ink px-4 py-2 text-xs text-ink hover:bg-ink hover:text-paper">
                Submit a review
              </a>
            </div>`
              : `
            <div class="mt-12 hidden grid-cols-3 gap-px bg-rule lg:grid">
              ${data.map((t) => `<div class="bg-paper">${testimonialCardHtml(t)}</div>`).join("")}
            </div>
            <div class="mt-12 flex flex-col gap-4 lg:hidden">
              ${data.map(testimonialCardHtml).join("")}
            </div>`
          }
        </div>
      </section>`;

    el.querySelectorAll("[data-del]").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (!confirm("Delete this review? This cannot be undone.")) return;
        const list = window.getTestimonials().filter((t) => t.id !== btn.dataset.del);
        window.saveTestimonials(list);
        paint();
      });
    });
    if (window.lucide) lucide.createIcons();
  }

  paint();
};
