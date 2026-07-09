window.renderQuickConnect = function renderQuickConnect(containerId) {
  const el = document.getElementById(containerId);
  const channels = [
    { n: "01", icon: "mail", label: "Gmail", hint: "For the ones who like to write a proper brief", cta: "Compose in Gmail",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=hello@design2debug.com&su=Project%20enquiry&body=Hello%20Design2Debug%20Team%2C%0AI%20hope%20you%27re%20doing%20well.%0AI%27m%20interested%20in%20working%20with%20Design2Debug%20and%20would%20like%20to%20discuss%20my%20project.%20Please%20let%20me%20know%20how%20we%20can%20get%20started.%0ALooking%20forward%20to%20hearing%20from%20you.%0ABest%20regards%2C", tone: "text-tone-pink", bar: "bg-tone-pink" },
    { n: "02", icon: "message-circle", label: "WhatsApp", hint: "Fastest way to our brains — usually a reply in minutes", cta: "Open WhatsApp",
      href: "https://wa.me/917397753765?text=Hello%20Design2Debug%21%20%F0%9F%91%8B%0AI%27m%20interested%20in%20your%20services%20and%20would%20like%20to%20discuss%20my%20project.%20Please%20let%20me%20know%20how%20we%20can%20get%20started.%0AThank%20you%21", tone: "text-tone-teal", bar: "bg-tone-teal" },
    { n: "03", icon: "phone", label: "SMS", hint: "No app, no login, just good old text", cta: "Send a text",
      href: "sms:+917397753765?body=Hi%20Design2Debug%2C%20I%27m%20interested%20in%20your%20services.%20Please%20contact%20me%20to%20discuss%20my%20project.%20Thank%20you%21", tone: "text-tone-amber", bar: "bg-tone-amber" },
  ];

  const tile = (c) => `
    <a href="${c.href}" target="_blank" rel="noreferrer"
       class="group relative flex h-full min-w-[82%] sm:min-w-[48%] lg:min-w-[32%] snap-start flex-col overflow-hidden border border-rule bg-paper p-7 transition-all duration-300 hover:-translate-y-1 hover:border-ink hover:shadow-elegant">
      <span class="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 ${c.bar}"></span>
      <div class="flex items-start justify-between">
        <span class="font-mono text-[11px] text-ink-soft">${c.n} / 03</span>
        <i data-lucide="arrow-up-right" class="h-4 w-4 ${c.tone} transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"></i>
      </div>
      <i data-lucide="${c.icon}" class="mt-8 h-10 w-10 ${c.tone} transition-transform duration-300 group-hover:scale-110" style="stroke-width:1.4"></i>
      <div class="mt-8">
        <div class="text-2xl font-medium tracking-tight text-ink transition-colors group-hover:text-brand">${c.label}</div>
        <div class="mt-2 text-xs leading-relaxed text-ink-soft">${c.hint}</div>
      </div>
      <div class="mt-6 flex items-center gap-2 border-t border-rule pt-4 font-mono text-[11px] uppercase tracking-wider text-ink">
        ${c.cta} <span class="${c.tone}">→</span>
      </div>
    </a>`;

  el.innerHTML = `
    <section class="border-b border-rule bg-paper py-24">
      <div class="container-ibm">
        <div class="grid gap-8 lg:grid-cols-12">
          <div class="lg:col-span-5">
            <div class="eyebrow">Quick connect</div>
            <h2 class="display-2 mt-4 text-ink">Three <span class="text-brand">direct</span> lines.</h2>
            <p class="mt-4 max-w-md text-sm leading-relaxed text-ink-soft">
              Pick the one you already use. Each link opens the right app — no form, no
              login, no waiting.
            </p>
          </div>
          <div class="lg:col-span-7">
            <div class="relative">
              <div id="quick-track" class="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 no-scrollbar">
                ${channels.map(tile).join("")}
              </div>
              <div class="mt-4 flex items-center justify-between">
                <div class="text-[11px] font-mono text-ink-soft">Swipe or use the arrows →</div>
                <div class="flex items-center gap-2">
                  <button type="button" aria-label="Previous" id="quick-prev" class="inline-flex h-10 w-10 items-center justify-center border border-ink text-ink transition-all hover:bg-brand hover:border-brand hover:text-paper">
                    <i data-lucide="chevron-left" class="h-4 w-4"></i>
                  </button>
                  <button type="button" aria-label="Next" id="quick-next" class="inline-flex h-10 w-10 items-center justify-center border border-ink text-ink transition-all hover:bg-brand hover:border-brand hover:text-paper">
                    <i data-lucide="chevron-right" class="h-4 w-4"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>`;

  const track = el.querySelector("#quick-track");
  const scroll = (dir) => {
    const card = track.querySelector("a");
    const amount = card ? card.offsetWidth + 20 : track.clientWidth * 0.9;
    track.scrollBy({ left: dir * amount, behavior: "smooth" });
  };
  el.querySelector("#quick-prev").addEventListener("click", () => scroll(-1));
  el.querySelector("#quick-next").addEventListener("click", () => scroll(1));

  if (window.lucide) lucide.createIcons();
};