window.renderBlogPage = function renderBlogPage(containerId) {
  const el = document.getElementById(containerId);
  const posts = [
    { title: "Why I work alone (and what that costs you)", excerpt: "The honest math behind a one-person studio — what gets faster, what gets slower, and where the limits show up.", tag: "Practice", read: "5 min", date: "Coming soon", tone: "text-brand bg-brand-soft" },
    { title: "A small design system in 600 lines of CSS", excerpt: "Tokens, type scale, and component variants without dragging in a whole framework. The exact setup this site uses.", tag: "Design", read: "8 min", date: "Coming soon", tone: "text-tone-violet bg-tone-violet/10" },
    { title: "Flutter on Android: the boring parts that ship apps", excerpt: "ProGuard, signing, crash reporting, version pinning — the unglamorous checklist that turns a prototype into a release.", tag: "Flutter", read: "11 min", date: "Coming soon", tone: "text-tone-teal bg-tone-teal/10" },
    { title: "Designing the empty state first", excerpt: "Most apps look great with seed data and broken on day one. A simple habit for designing the zero-state on purpose.", tag: "UX", read: "4 min", date: "Coming soon", tone: "text-tone-pink bg-tone-pink/10" },
    { title: "The contract template I actually use", excerpt: "Scope, change orders, IP, and payment — a one-page client agreement that has survived two dozen projects.", tag: "Business", read: "6 min", date: "Coming soon", tone: "text-tone-amber bg-tone-amber/10" },
    { title: "Debugging is a design skill", excerpt: "Reproduction, bisection, and writing the bug down — the same mindset designers use, applied to code.", tag: "Engineering", read: "7 min", date: "Coming soon", tone: "text-brand bg-brand-soft" },
  ];

  el.innerHTML = `
    <section class="relative overflow-hidden border-b border-rule">
      <div class="absolute inset-0 grid-bg opacity-60"></div>
      <div aria-hidden="true" class="animate-blob absolute -right-32 -top-32 h-72 w-72 rounded-full bg-brand-soft blur-3xl"></div>
      <div class="container-ibm relative grid gap-10 py-24 lg:grid-cols-12 lg:py-32">
        <div class="lg:col-span-7">
          <div class="eyebrow animate-fade-in">Field notes / blog</div>
          <h1 class="display-1 mt-6 animate-fade-in text-ink">
            Writing about the parts <br class="hidden md:block" />
            between <span class="text-brand">design</span> and <span class="text-tone-violet">debug</span>.
          </h1>
          <p class="mt-6 max-w-xl text-base leading-relaxed text-ink-soft">
            Long-form posts on shipping software as one person — design systems,
            Flutter, performance, and the boring contracts in between.
          </p>
        </div>
        <div class="lg:col-span-5">
          <div class="relative overflow-hidden border border-rule bg-paper p-6 shadow-elegant sm:p-7">
            <span class="accent-stripe mb-4 block"></span>
            <div class="flex items-center gap-2">
              <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-soft text-brand">
                <i data-lucide="mail" class="h-4 w-4"></i>
              </span>
              <div class="eyebrow">Newsletter</div>
            </div>
            <h3 class="mt-4 text-2xl font-light tracking-tight text-ink">
              Get new posts <span class="text-gradient-brand">the moment they ship.</span>
            </h3>
            <p class="mt-3 text-sm leading-relaxed text-ink-soft">
              Short, occasional emails — a heads-up when a post lands, and nothing else.
            </p>
            <div class="mt-5" id="newsletter-mount"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="border-b border-rule bg-paper py-20">
      <div class="container-ibm">
        <div class="mb-12 flex items-end justify-between gap-4">
          <div>
            <div class="eyebrow">Upcoming posts</div>
            <h2 class="display-2 mt-4 text-ink">In the queue.</h2>
          </div>
          <div class="hidden text-xs text-ink-soft md:block">${posts.length} drafts in progress</div>
        </div>

        <div class="grid gap-px bg-rule md:grid-cols-2 lg:grid-cols-3">
          ${posts
            .map(
              (p, i) => `
            <article class="group flex flex-col justify-between bg-paper p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant" style="animation:fade-in 0.5s ease-out ${i * 60}ms both">
              <div>
                <div class="flex items-center justify-between">
                  <span class="inline-flex items-center gap-1.5 px-2 py-1 font-mono text-[10px] uppercase tracking-wider ${p.tone}">
                    <i data-lucide="tag" class="h-3 w-3"></i> ${p.tag}
                  </span>
                  <span class="inline-flex items-center gap-1 font-mono text-[10px] text-ink-soft">
                    <i data-lucide="clock" class="h-3 w-3"></i> ${p.read}
                  </span>
                </div>
                <h3 class="mt-6 text-xl font-light leading-snug text-ink transition-colors group-hover:text-brand">${p.title}</h3>
                <p class="mt-3 text-sm leading-relaxed text-ink-soft">${p.excerpt}</p>
              </div>
              <div class="mt-8 flex items-center justify-between border-t border-rule pt-4">
                <span class="font-mono text-[11px] text-ink-soft">${p.date}</span>
                <i data-lucide="arrow-up-right" class="h-4 w-4 text-ink-soft transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand"></i>
              </div>
            </article>`
            )
            .join("")}
        </div>
      </div>
    </section>`;

  window.renderNewsletterForm("newsletter-mount");
  if (window.lucide) lucide.createIcons();
};
