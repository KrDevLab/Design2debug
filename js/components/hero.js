window.renderHero = function renderHero(containerId) {
  const el = document.getElementById(containerId);
  el.innerHTML = `
    <section class="relative overflow-hidden border-b border-rule bg-paper">
      <div class="absolute inset-0 grid-bg opacity-60" aria-hidden="true"></div>
      <div aria-hidden="true" class="blob-color animate-blob" style="width:420px;height:420px;top:-120px;left:-120px;background:var(--brand-soft)"></div>
      <div aria-hidden="true" class="blob-color animate-blob" style="width:360px;height:360px;bottom:-140px;right:-120px;background:color-mix(in oklab, var(--tone-pink) 30%, transparent);animation-delay:-6s"></div>
      <div aria-hidden="true" class="blob-color animate-float" style="width:220px;height:220px;top:80px;right:20%;background:color-mix(in oklab, var(--tone-teal) 28%, transparent)"></div>

      <div class="container-ibm relative grid gap-12 pt-24 pb-28 lg:grid-cols-12 lg:pt-36 lg:pb-40">
        <div class="lg:col-span-8">
          <div class="reveal flex items-center gap-3">
            <span class="accent-stripe"></span>
            <div class="eyebrow">D2D / 001 — Practice</div>
          </div>
          <h1 class="reveal display-1 mt-8 text-ink" style="--reveal-delay:120ms">
            Transforming ideas into <em class="not-italic text-gradient-brand">beautiful digital</em> experiences.
          </h1>
          <p class="reveal mt-10 max-w-2xl text-lg leading-relaxed text-ink-soft" style="--reveal-delay:240ms">
            Design2Debug is an independent practice for startups and small teams.
            Modern UI/UX, Flutter Android apps, and websites — designed,
            developed, debugged, and delivered by one accountable person.
          </p>
          <div class="reveal mt-12 flex flex-wrap gap-3" style="--reveal-delay:360ms">
            <a href="#services" class="group inline-flex items-center gap-2 bg-ink px-6 py-3.5 text-sm text-paper transition-all duration-300 hover:bg-brand hover:shadow-glow">
              Explore Design2Debug
              <i data-lucide="arrow-up-right" class="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"></i>
            </a>
            <a href="contact.html" class="inline-flex items-center gap-2 border border-ink px-6 py-3.5 text-sm text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink hover:text-paper">
              Contact us
            </a>
            <a href="https://www.kishoravi.in/" target="_blank" rel="noreferrer" class="inline-flex items-center gap-2 border border-rule px-6 py-3.5 text-sm text-ink-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-brand hover:text-brand">
              Founder portfolio ↗
            </a>
          </div>
        </div>

        <div class="reveal hidden lg:col-span-4 lg:block" style="--reveal-delay:480ms">
          <aside class="relative border border-rule bg-paper/80 p-8 backdrop-blur-sm transition-shadow hover:shadow-elegant">
            <span class="accent-stripe absolute -top-px left-0"></span>
            <div class="eyebrow">From design to deployment</div>
            <ul class="mt-6 divide-y divide-rule font-mono text-xs">
              ${[
                ["01 — Design", "var(--tone-violet)"],
                ["02 — Develop", "var(--brand)"],
                ["03 — Debug", "var(--tone-pink)"],
                ["04 — Deliver", "var(--tone-teal)"],
              ]
                .map(
                  ([label, color], i) => `
                <li class="group flex items-center justify-between py-4 text-ink transition-colors hover:text-brand">
                  <span class="flex items-center gap-3">
                    <span class="inline-block h-1.5 w-1.5 rounded-full transition-transform group-hover:scale-150" style="background:${color}"></span>
                    ${label}
                  </span>
                  <span class="text-ink-soft">0${i + 1}/04</span>
                </li>`
                )
                .join("")}
            </ul>
            <div class="mt-8 border-t border-rule pt-6 text-xs text-ink-soft">
              Trichy, Tamil Nadu — replies within 24 hours.
            </div>
          </aside>
        </div>
      </div>
    </section>`;
};
