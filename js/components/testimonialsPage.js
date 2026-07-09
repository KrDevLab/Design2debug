window.renderTestimonialsPage = function renderTestimonialsPage(containerId) {
  const el = document.getElementById(containerId);
  const SERVICES = ["UI/UX Design","Flutter App Development","Website Development","Responsive Design","Prototyping","Brand Identity","Consultation"];
  let rating = 0;

  function starsHtml(current) {
    return Array.from({ length: 5 })
      .map((_, i) => {
        const n = i + 1;
        return `<button type="button" data-star="${n}" class="star-btn ${n <= current ? "text-brand" : "text-ink-soft/40"}" aria-label="${n} star${n > 1 ? "s" : ""}">
          <i data-lucide="star" class="h-6 w-6" ${n <= current ? 'fill="currentColor"' : ""}></i>
        </button>`;
      })
      .join("");
  }

  function reviewCardHtml(t) {
    return `
      <article class="relative flex h-full flex-col border border-rule bg-paper p-6">
        <div class="absolute right-3 top-3">
          <button aria-label="Delete review" data-del="${t.id}" class="inline-flex h-8 w-8 items-center justify-center text-ink-soft hover:bg-paper-2 hover:text-destructive">
            <i data-lucide="trash-2" class="h-4 w-4"></i>
          </button>
        </div>
        <div class="flex items-center gap-1 text-brand">
          ${Array.from({ length: t.rating }).map(() => '<i data-lucide="star" class="h-4 w-4" fill="currentColor"></i>').join("")}
          ${Array.from({ length: 5 - t.rating }).map(() => '<i data-lucide="star" class="h-4 w-4 text-ink-soft/30"></i>').join("")}
        </div>
        <p class="mt-4 text-base leading-relaxed text-ink">"${t.feedback}"</p>
        <div class="mt-6 flex items-center justify-between border-t border-rule pt-4 text-xs">
          <span class="text-ink">${t.name}</span>
          ${t.service ? `<span class="font-mono text-ink-soft">${t.service}</span>` : ""}
        </div>
      </article>`;
  }

  function paint() {
    const items = window.getTestimonials();

    el.innerHTML = `
      <div class="border-b border-rule">
        <div class="container-ibm py-16">
          <div class="eyebrow">Client feedback</div>
          <h1 class="display-1 mt-4 text-ink">What it's actually like to work with me.</h1>
          <p class="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft">
            Every entry below was submitted directly by a client through the form on this
            page. I don't write these, edit them, or remove the honest ones.
          </p>
        </div>
      </div>

      <section class="border-b border-rule bg-paper-2 py-16">
        <div class="container-ibm">
          <div class="eyebrow">From clients — submitted ratings & reviews</div>
          ${
            items.length === 0
              ? `
            <div class="mt-8 border border-dashed border-rule bg-paper p-12 text-center">
              <div class="font-mono text-xs text-ink-soft">Nothing here yet</div>
              <p class="mt-2 text-ink">
                No client has submitted a rating yet. Once someone does, their review
                shows up here exactly as they wrote it.
              </p>
            </div>`
              : `
            <div class="mt-8 hidden grid-cols-3 gap-px bg-rule lg:grid">
              ${items.map((t) => `<div class="bg-paper">${reviewCardHtml(t)}</div>`).join("")}
            </div>
            <div class="mt-8 flex flex-col gap-4 lg:hidden">
              ${items.map(reviewCardHtml).join("")}
            </div>`
          }
        </div>
      </section>

      <section class="relative overflow-hidden bg-paper py-24">
        <div aria-hidden="true" class="blob-color animate-blob" style="width:320px;height:320px;top:-60px;right:-80px;background:color-mix(in oklab, var(--tone-pink) 18%, transparent)"></div>
        <div aria-hidden="true" class="blob-color animate-blob" style="width:260px;height:260px;bottom:-60px;left:-80px;background:color-mix(in oklab, var(--tone-teal) 16%, transparent);animation-delay:2s"></div>
        <div class="container-ibm relative">
          <div class="grid gap-12 lg:grid-cols-12">
            <div class="lg:col-span-4">
              <span class="accent-stripe mb-5 block"></span>
              <div class="eyebrow">Worked with Design2Debug?</div>
              <h2 class="display-2 mt-4 text-ink">Leave your <span class="text-gradient-brand">own rating.</span></h2>
              <p class="mt-5 max-w-md text-sm leading-relaxed text-ink-soft">
                This goes straight onto this page once you submit it — no approval step
                filters anything out. You can delete your own review at any time from its card.
              </p>
              <div class="mt-8 inline-flex items-center gap-2 border border-rule bg-paper-2 px-3 py-2 font-mono text-[10px] uppercase tracking-wider text-ink-soft">
                <span class="h-1.5 w-1.5 rounded-full bg-tone-teal"></span>
                Public · stays on this page
              </div>
            </div>

            <form id="testimonial-form" class="relative lg:col-span-8">
              <div class="relative border border-rule bg-paper p-6 shadow-elegant sm:p-10">
                <span class="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-brand via-tone-violet to-tone-pink"></span>

                <div class="flex gap-5">
                  <div class="hidden shrink-0 sm:block">
                    <span class="inline-flex h-8 w-8 items-center justify-center bg-brand-soft font-mono text-[11px] text-brand">01</span>
                  </div>
                  <label class="block flex-1">
                    <div class="eyebrow mb-2">Your name</div>
                    <input name="name" class="w-full border border-rule bg-paper px-3 py-3 text-sm text-ink placeholder:text-ink-soft/60 focus:border-ink focus:outline-none" placeholder="e.g. Priya R." />
                  </label>
                </div>

                <div class="my-8 h-px w-full bg-rule"></div>

                <div class="flex gap-5">
                  <div class="hidden shrink-0 sm:block">
                    <span class="inline-flex h-8 w-8 items-center justify-center bg-tone-violet/10 font-mono text-[11px] text-tone-violet">02</span>
                  </div>
                  <label class="block flex-1">
                    <div class="eyebrow mb-2">Which service was this for?</div>
                    <select name="service" class="w-full border border-rule bg-paper px-3 py-3 text-sm text-ink focus:border-ink focus:outline-none">
                      <option value="">Select one</option>
                      ${SERVICES.map((s) => `<option value="${s}">${s}</option>`).join("")}
                    </select>
                  </label>
                </div>

                <div class="my-8 h-px w-full bg-rule"></div>

                <div class="flex gap-5">
                  <div class="hidden shrink-0 sm:block">
                    <span class="inline-flex h-8 w-8 items-center justify-center bg-tone-amber/10 font-mono text-[11px] text-tone-amber">03</span>
                  </div>
                  <div class="flex-1">
                    <div class="eyebrow mb-2">Your rating</div>
                    <div class="flex items-center justify-between gap-4">
                      <div class="flex items-center gap-1" id="star-picker">${starsHtml(0)}</div>
                      <span class="font-mono text-xs text-ink-soft" id="star-label">Tap to rate</span>
                    </div>
                  </div>
                </div>

                <div class="my-8 h-px w-full bg-rule"></div>

                <div class="flex gap-5">
                  <div class="hidden shrink-0 sm:block">
                    <span class="inline-flex h-8 w-8 items-center justify-center bg-tone-pink/10 font-mono text-[11px] text-tone-pink">04</span>
                  </div>
                  <label class="block flex-1">
                    <div class="eyebrow mb-2">Your feedback</div>
                    <textarea name="feedback" rows="5" id="feedback-textarea" class="w-full border border-rule bg-paper px-3 py-3 text-sm text-ink placeholder:text-ink-soft/60 focus:border-ink focus:outline-none" placeholder="How did the project go? What was it like working together?"></textarea>
                    <div class="mt-1.5 text-right font-mono text-[10px] text-ink-soft"><span id="char-count">0</span> chars · min 10</div>
                  </label>
                </div>

                <p id="testimonial-error" class="mt-6 hidden border border-destructive/40 bg-destructive/5 px-3 py-2 text-xs text-destructive"></p>

                <div class="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-rule pt-6">
                  <p class="max-w-sm text-[11px] text-ink-soft">
                    Reviews are stored in this browser for the demo build — no account or
                    sign-in required.
                  </p>
                  <button type="submit" class="inline-flex items-center justify-center gap-2 bg-ink px-6 py-3 text-sm text-paper transition-all hover:bg-brand hover:shadow-glow disabled:opacity-60">
                    Submit review →
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>`;

    // wire delete buttons
    el.querySelectorAll("[data-del]").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (!confirm("Delete this review? This cannot be undone.")) return;
        window.saveTestimonials(window.getTestimonials().filter((t) => t.id !== btn.dataset.del));
        paint();
      });
    });

    // wire star picker
    rating = 0;
    const starPicker = el.querySelector("#star-picker");
    const starLabel = el.querySelector("#star-label");
    starPicker.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-star]");
      if (!btn) return;
      rating = Number(btn.dataset.star);
      starPicker.innerHTML = starsHtml(rating);
      starLabel.textContent = `${rating}/5`;
      if (window.lucide) lucide.createIcons();
    });

    // char counter
    const textarea = el.querySelector("#feedback-textarea");
    const charCount = el.querySelector("#char-count");
    textarea.addEventListener("input", () => {
      charCount.textContent = textarea.value.trim().length;
    });

    // submit
    el.querySelector("#testimonial-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(e.target);
      const name = (fd.get("name") || "").toString().trim();
      const service = (fd.get("service") || "").toString();
      const feedback = (fd.get("feedback") || "").toString().trim();
      const errEl = el.querySelector("#testimonial-error");

      if (!name || rating < 1 || feedback.length < 10) {
        errEl.textContent = "Add your name, a star rating, and at least a short review.";
        errEl.classList.remove("hidden");
        return;
      }
      errEl.classList.add("hidden");

      const list = window.getTestimonials();
      list.unshift({
        id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
        user_id: "local-user",
        name, service: service || null, rating, feedback,
        created_at: new Date().toISOString(),
      });
      window.saveTestimonials(list);
      paint();
    });

    if (window.lucide) lucide.createIcons();
  }

  paint();
};
