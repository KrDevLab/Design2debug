window.renderProcess = function renderProcess(containerId) {
  const el = document.getElementById(containerId);
  const steps = [
    { k: "01", title: "Design", body: "Understand the problem, sketch the flow, and prototype the screens that matter.", color: "var(--tone-violet)" },
    { k: "02", title: "Develop", body: "Type-safe code, sensible architecture, and a deployment pipeline from day one.", color: "var(--brand)" },
    { k: "03", title: "Debug", body: "Real-device QA, performance budgets, accessibility, and edge-case hunting.", color: "var(--tone-pink)" },
    { k: "04", title: "Deliver", body: "Ship to Play Store / production, hand over the keys, stay on for the warranty window.", color: "var(--tone-teal)" },
  ];
  const values = [
    { t: "Creativity", b: "Treat every project as its own small craft problem." },
    { t: "Innovation", b: "Reach for the simplest modern tool, not the loudest one." },
    { t: "Trust", b: "One person, one inbox, one calendar — no account-manager wall." },
    { t: "Quality", b: "If it ships with a known bug, it isn't shipped." },
    { t: "Simplicity", b: "Fewer screens, fewer dependencies, fewer surprises." },
  ];

  el.innerHTML = `
    <section id="process" class="relative overflow-hidden border-b border-rule bg-paper-2 py-28 lg:py-36">
      <div aria-hidden="true" class="blob-color animate-blob" style="width:360px;height:360px;top:-120px;left:30%;background:color-mix(in oklab, var(--tone-amber) 22%, transparent)"></div>
      <div class="container-ibm">
        <div class="reveal grid gap-10 lg:grid-cols-12">
          <div class="lg:col-span-5">
            <span class="accent-stripe mb-5 block"></span>
            <div class="eyebrow">4 — Process</div>
            <h2 class="display-2 mt-4 text-ink">Design · Develop · <span class="text-gradient-brand">Debug · Deliver.</span></h2>
            <p class="mt-6 max-w-md text-sm leading-relaxed text-ink-soft">
              A linear path, kept short on purpose. You always know which of the four
              we're in, and what comes next.
            </p>
          </div>
          <ol class="lg:col-span-7">
            <div class="grid grid-cols-2 gap-px bg-rule sm:grid-cols-4">
              ${steps
                .map(
                  (s, i) => `
                <li class="reveal group relative bg-paper p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant sm:p-7" style="--reveal-delay:${i * 100}ms">
                  <span class="absolute left-0 top-0 h-0.5 w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" style="background:${s.color}"></span>
                  <div class="font-mono text-[11px]" style="color:${s.color}">${s.k}</div>
                  <div class="mt-3 text-lg font-medium text-ink">${s.title}</div>
                  <p class="mt-2 text-xs leading-relaxed text-ink-soft">${s.body}</p>
                </li>`
                )
                .join("")}
            </div>
          </ol>
        </div>

        <div class="mt-20">
          <div class="eyebrow">Core values</div>
          <div class="mt-6 hidden grid-cols-5 gap-px bg-rule lg:grid">
            ${values
              .map(
                (v) => `
              <div class="bg-paper p-6">
                <div class="text-base font-medium text-ink">${v.t}</div>
                <p class="mt-2 text-xs leading-relaxed text-ink-soft">${v.b}</p>
              </div>`
              )
              .join("")}
          </div>
          <div class="mt-6 overflow-hidden border border-rule lg:hidden">
            <div class="flex animate-auto-slide">
              ${values
                .map(
                  (v) => `
                <div class="shrink-0 p-6">
                  <div class="text-lg font-medium text-ink">${v.t}</div>
                  <p class="mt-2 text-sm leading-relaxed text-ink-soft">${v.b}</p>
                </div>`
                )
                .join("")}
            </div>
          </div>
        </div>
      </div>
    </section>`;

  window.initReveal(el);
};
