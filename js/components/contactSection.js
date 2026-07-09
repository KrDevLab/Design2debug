window.renderContactSection = function renderContactSection(containerId) {
  const el = document.getElementById(containerId);
  const CARD_TONE = {
    brand: { icon: "text-brand", ring: "hover:border-brand", bg: "bg-brand-soft" },
    teal: { icon: "text-tone-teal", ring: "hover:border-tone-teal", bg: "bg-tone-teal/10" },
    violet: { icon: "text-tone-violet", ring: "hover:border-tone-violet", bg: "bg-tone-violet/10" },
    amber: { icon: "text-tone-amber", ring: "hover:border-tone-amber", bg: "bg-tone-amber/10" },
  };
  const cards = [
    { tone: "brand", icon: "mail", label: "Email", value: "hello@design2debug.com" },
    { tone: "teal", icon: "phone", label: "Phone", value: "Shared after first reply" },
    { tone: "violet", icon: "map-pin", label: "Location", value: "Trichy, Tamil Nadu · India" },
    { tone: "amber", icon: "clock", label: "Response", value: "Within 24 hours" },
  ];
  const cardHtml = (c) => {
    const t = CARD_TONE[c.tone];
    return `
      <div class="group flex items-center gap-4 border border-rule bg-paper p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-elegant ${t.ring}">
        <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${t.bg} ${t.icon} transition-transform duration-300 group-hover:scale-110">
          <i data-lucide="${c.icon}" class="h-4 w-4"></i>
        </span>
        <div class="min-w-0">
          <div class="eyebrow">${c.label}</div>
          <div class="mt-0.5 truncate text-sm text-ink">${c.value}</div>
        </div>
      </div>`;
  };

  el.innerHTML = `
    <section id="contact" class="relative overflow-hidden bg-paper py-20 md:py-24">
      <div aria-hidden="true" class="blob-color animate-blob" style="width:300px;height:300px;top:-80px;right:-80px;background:color-mix(in oklab, var(--brand) 14%, transparent)"></div>
      <div aria-hidden="true" class="blob-color animate-blob" style="width:240px;height:240px;bottom:-60px;left:-60px;background:color-mix(in oklab, var(--tone-violet) 14%, transparent);animation-delay:3s"></div>
      <div class="container-ibm relative grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div class="reveal lg:col-span-5">
          <span class="accent-stripe mb-5 block"></span>
          <div class="eyebrow">06 — Contact</div>
          <h2 class="display-2 mt-4 text-ink">Let's build <span class="text-gradient-brand">something.</span></h2>
          <p class="mt-4 max-w-md text-sm leading-relaxed text-ink-soft">
            Brief, audit, second opinion, or a full build — drop the details in the form
            and I'll come back within a day with next steps.
          </p>
          <div class="mt-10 grid gap-3">${cards.map(cardHtml).join("")}</div>
          <div class="mt-8 flex items-center gap-3 border border-dashed border-brand/40 bg-brand-soft/40 p-4 text-xs text-ink">
            <i data-lucide="sparkles" class="h-4 w-4 shrink-0 text-brand"></i>
            <p>One-person studio — you're talking to the person who ships the work.</p>
          </div>
        </div>
        <div class="reveal lg:col-span-7" style="--reveal-delay:120ms" id="contact-form-mount"></div>
      </div>
    </section>`;

  window.renderContactForm("contact-form-mount");
  window.initReveal(el);
  if (window.lucide) lucide.createIcons();
};
