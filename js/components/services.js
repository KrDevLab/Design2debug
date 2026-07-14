window.SERVICES_DATA = [
  { no: "01", title: "UI / UX Design", blurb: "Research-led interface and product design that actually ships.",
    learn: ["Discovery interviews and audit of the existing flow.","Wireframes, prototypes, and an interactive Figma file.","Design system with tokens, components, and motion notes.","Handoff with annotations and a developer-ready spec."],
    icon: "palette", tone: "violet" },
  { no: "02", title: "Flutter App Development", blurb: "Production-grade Android apps with clean architecture.",
    learn: ["Flutter + Riverpod/BLoC architecture, fully typed.","Authentication, storage, and background sync wired in.","Crash reporting, analytics, and Play Store release.","Post-launch debugging window included."],
    icon: "smartphone", tone: "teal" },
  { no: "03", title: "Website Development", blurb: "Fast, accessible marketing sites and lightweight apps.",
    learn: ["Modern stack: React, TanStack, Tailwind, edge functions.","Performance budget: <1.5s LCP, perfect Lighthouse a11y.","CMS or static — whichever the team will actually use.","Deploy pipeline, custom domain, and analytics included."],
    icon: "globe", tone: "brand" },
  { no: "04", title: "Responsive Design", blurb: "Layouts that feel native at every breakpoint.",
    learn: ["Mobile-first grid with documented breakpoints.","Typographic scale tuned for the brand.","Touch targets, focus states, and dark-mode parity.","QA across real devices, not just emulators."],
    icon: "layout-grid", tone: "amber" },
  { no: "05", title: "Prototyping", blurb: "Click-through prototypes to de-risk the idea early.",
    learn: ["Low-fi paper flows in 48 hours.","Interactive Figma prototype with real content.","Usability test with 5 users and a written report.","Recommendation for what to build next — or not."],
    icon: "mouse-pointer-click", tone: "pink" },
  { no: "06", title: "Brand Identity", blurb: "A small but precise identity system you can grow into.",
    learn: ["Naming sanity check and positioning one-pager.","Wordmark, color, typography, and tone of voice.","Mini brand book (PDF) with usage rules.","Social, email, and slide templates."],
    icon: "sparkles", tone: "violet" },
  { no: "07", title: "Consultation", blurb: "A second pair of eyes on architecture, design, or hiring.",
    learn: ["60-minute kickoff and written audit.","Async follow-ups for 2 weeks.","Concrete next steps prioritised by impact.","Flat fee, no hourly meter."],
    icon: "messages-square", tone: "teal" },
  { no: "08", title: "SEO & Performance", blurb: "Technical SEO and speed work that actually moves rankings.",
    learn: ["Core Web Vitals audit with prioritised fixes.","Schema, sitemap, and on-page metadata cleanup.","Content & internal-linking strategy session.","Search Console wiring + a 30-day monitoring window."],
    icon: "search", tone: "amber" },
  { no: "09", title: "AI Integrations", blurb: "Drop modern AI into your product without the spaghetti.",
    learn: ["Use-case discovery — what AI is actually worth shipping.","Chat, summarisation, search, or workflow agents.","Streaming UI, guardrails, and cost monitoring.","Prompt + eval suite so it keeps working tomorrow."],
    icon: "bot", tone: "pink" },
];

const D2D_TONES = {
  violet: { text: "text-tone-violet", bg: "bg-tone-violet", ring: "ring-tone-violet/40", chip: "bg-tone-violet/10 text-tone-violet" },
  teal:   { text: "text-tone-teal",   bg: "bg-tone-teal",   ring: "ring-tone-teal/40",   chip: "bg-tone-teal/10 text-tone-teal" },
  brand:  { text: "text-brand",       bg: "bg-brand",       ring: "ring-brand/40",       chip: "bg-brand-soft text-brand" },
  amber:  { text: "text-tone-amber",  bg: "bg-tone-amber",  ring: "ring-tone-amber/40",  chip: "bg-tone-amber/10 text-tone-amber" },
  pink:   { text: "text-tone-pink",   bg: "bg-tone-pink",   ring: "ring-tone-pink/40",   chip: "bg-tone-pink/10 text-tone-pink" },
};

function serviceCardHtml(s, i) {
  const t = D2D_TONES[s.tone];
  return `
    <button data-service-idx="${i}" class="service-card group relative flex h-full w-full flex-col items-start gap-5 overflow-hidden border border-rule bg-paper p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-ink hover:shadow-elegant sm:p-7">
      <span aria-hidden="true" class="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 ${t.bg}"></span>
      <div class="flex w-full items-center justify-between">
        <span class="inline-flex h-14 w-14 items-center justify-center rounded-2xl ring-1 ring-inset transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${t.chip} ${t.ring}">
          <i data-lucide="${s.icon}" class="h-6 w-6"></i>
        </span>
        <span class="font-mono text-xs text-ink-soft">${s.no}</span>
      </div>
      <div class="min-w-0 flex-1">
        <h3 class="text-xl font-light tracking-tight text-ink transition-colors group-hover:text-brand sm:text-2xl">${s.title}</h3>
        <p class="mt-3 text-sm leading-relaxed text-ink-soft">${s.blurb}</p>
      </div>
      <span class="inline-flex items-center gap-2 border-b border-transparent pb-0.5 font-mono text-[11px] uppercase tracking-wider transition-colors group-hover:border-current ${t.text}">
        Learn more
        <i data-lucide="arrow-up-right" class="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"></i>
      </span>
    </button>`;
}

window.renderServices = function renderServices(containerId) {
  const el = document.getElementById(containerId);
  const cardsDesktop = SERVICES_DATA.map(serviceCardHtml).join("");
  const cardsMobile = SERVICES_DATA.map(serviceCardHtml).join("");

  el.innerHTML = `
    <section id="services" class="relative border-b border-rule bg-paper py-28 lg:py-36">
      <div aria-hidden="true" class="blob-color animate-blob" style="width:320px;height:320px;top:40px;right:-100px;background:color-mix(in oklab, var(--tone-violet) 18%, transparent)"></div>
      <div aria-hidden="true" class="blob-color animate-blob" style="width:280px;height:280px;bottom:80px;left:-80px;background:color-mix(in oklab, var(--tone-teal) 18%, transparent);animation-delay:3s"></div>
      <div class="container-ibm">
        <div class="reveal grid gap-10 lg:grid-cols-12">
          <div class="lg:col-span-4">
            <span class="accent-stripe mb-5 block"></span>
            <div class="eyebrow">03 — Services</div>
            <h2 class="display-2 mt-4 text-ink">What I build, <span class="text-gradient-brand">end&nbsp;to&nbsp;end.</span></h2>
          </div>
          <p class="text-base leading-relaxed text-ink-soft lg:col-span-7 lg:col-start-6">
            One person on the project means no handoff loss. The list below is the actual
            menu — pick a single service or stitch a few together for a full launch.
          </p>
        </div>

        <div class="reveal mt-16 hidden lg:grid lg:grid-cols-3 lg:gap-6">${cardsDesktop}</div>
        <div class="reveal mt-16 lg:hidden">
          ${window.sliderShell({ id: "services-slider", ariaLabel: "Services", count: SERVICES_DATA.length,
            itemsHtml: SERVICES_DATA.map((s, i) => `<div class="snap-start shrink-0 basis-[85%] sm:basis-[60%] md:basis-[45%]">${serviceCardHtml(s, i)}</div>`).join("") })}
        </div>
      </div>

      <div id="service-modal" class="fixed inset-0 z-50 hidden items-end justify-center bg-ink/50 p-0 backdrop-blur-sm sm:items-center sm:p-6">
        <div class="relative w-full max-w-xl animate-scale-in border border-rule bg-paper p-8 shadow-elegant" id="service-modal-inner"></div>
      </div>
    </section>`;

  window.initSlider("services-slider");
  if (window.lucide) lucide.createIcons();

  const modal = el.querySelector("#service-modal");
  const inner = el.querySelector("#service-modal-inner");

  function openModal(i) {
    const s = SERVICES_DATA[i];
    const t = D2D_TONES[s.tone];
    inner.innerHTML = `
      <span class="absolute left-0 top-0 h-1 w-full ${t.bg}"></span>
      <button id="service-modal-close" class="absolute right-4 top-4 text-ink-soft hover:text-ink" aria-label="Close">
        <i data-lucide="x" class="h-5 w-5"></i>
      </button>
      <div class="font-mono text-xs text-ink-soft">${s.no} / service</div>
      <h3 class="mt-2 text-3xl font-light tracking-tight text-ink">${s.title}</h3>
      <p class="mt-3 text-sm text-ink-soft">${s.blurb}</p>
      <ul class="mt-6 space-y-3">
        ${s.learn.map((l, idx) => `<li class="flex gap-3 text-sm text-ink"><span class="font-mono text-xs text-brand">0${idx + 1}</span><span>${l}</span></li>`).join("")}
      </ul>
      <a href="contact.html" class="mt-8 inline-flex bg-ink px-5 py-3 text-sm text-paper hover:bg-brand">
        Start a ${s.title.toLowerCase()} project →
      </a>`;
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    if (window.lucide) lucide.createIcons();
    inner.querySelector("#service-modal-close").addEventListener("click", closeModal);
  }
  function closeModal() {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
  modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });

  el.querySelectorAll("[data-service-idx]").forEach((btn) => {
    btn.addEventListener("click", () => openModal(Number(btn.dataset.serviceIdx)));
  });

  window.initReveal(el);
};
