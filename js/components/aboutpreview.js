window.renderAboutPreview = function renderAboutPreview(containerId) {
  const el = document.getElementById(containerId);

  el.innerHTML = `
    <section id="about-preview" class="relative overflow-hidden border-b border-rule bg-paper-2 py-24 lg:py-32">

      <div aria-hidden="true" class="blob-color animate-blob"
           style="width:300px;height:300px;top:-100px;right:-100px;background:color-mix(in oklab, var(--tone-teal) 18%, transparent)"></div>
      <div aria-hidden="true" class="blob-color animate-blob"
           style="width:240px;height:240px;bottom:-80px;left:-80px;background:color-mix(in oklab, var(--brand) 16%, transparent);animation-delay:4s"></div>

      <div class="container-ibm relative">
        <div class="reveal grid gap-12 lg:grid-cols-12 lg:items-center">

          <!-- Left: story + stats + CTA -->
          <div class="lg:col-span-6">
            <span class="accent-stripe mb-5 block"></span>
            <div class="eyebrow">02 — Who We Are</div>
            <h2 class="display-2 mt-4 text-ink">
              Design and development, <span class="text-gradient-brand">under one roof.</span>
            </h2>
            <p class="mt-6 max-w-xl text-base leading-relaxed text-ink-soft">
              Design2Debug is a UI/UX design and web development studio founded by
              <strong class="font-medium text-ink">Kishore Ravi</strong>. We help startups,
              businesses, and entrepreneurs turn ideas into responsive, high-performance
              digital products — with one person accountable from the first sketch to launch.
            </p>

            

            <div class="mt-10">
              <a href="about.html"
                class="group inline-flex items-center gap-2 bg-ink px-6 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-brand">
                Explore About Us
                <i data-lucide="arrow-up-right" class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"></i>
              </a>
            </div>
          </div>

          <!-- Right: founder / company card -->
          <div class="lg:col-span-5 lg:col-start-8">
            <a href="about.html"
               class="group relative block overflow-hidden border border-rule bg-paper p-8 transition-all duration-300 hover:-translate-y-1 hover:border-ink hover:shadow-elegant sm:p-10">
              <span aria-hidden="true" class="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-brand transition-transform duration-500 group-hover:scale-x-100"></span>

              <div class="flex items-center gap-4">
                <span class="flex h-16 w-16 shrink-0 items-center justify-center rounded-full"
                      style="background:conic-gradient(from 180deg, var(--brand), var(--tone-violet), var(--tone-pink), var(--tone-amber), var(--brand)); padding:2px;">
                   <img src="js/assets/Pro Pic.webp"
                            alt="Kishore Ravi, Founder of Design2Debug"
                             title="Kishore Ravi - Founder of Design2Debug"
                              width="500"
                                 height="500"
                                     loading="lazy"
                             decoding="async"
                         class="h-full w-full rounded-full object-cover"
                         />
                </span>
                <div>
                  <div class="text-base font-medium text-ink">Kishore Ravi</div>
                  <div class="font-mono text-[11px] uppercase tracking-wider text-brand">Founder, Design2Debug</div>
                </div>
              </div>

              <p class="mt-6 text-sm leading-relaxed text-ink-soft">
                "Our mission is to bridge the gap between creativity and technology —
                delivering accessible, user-focused digital solutions that help
                businesses succeed online."
              </p>

              <div class="mt-6 flex flex-wrap gap-2">
                <span class="border border-rule bg-paper-2 px-2.5 py-1 text-[11px] font-mono text-ink-soft">UI/UX Design</span>
                <span class="border border-rule bg-paper-2 px-2.5 py-1 text-[11px] font-mono text-ink-soft">Web Development</span>
                <span class="border border-rule bg-paper-2 px-2.5 py-1 text-[11px] font-mono text-ink-soft">Front-End</span>
              </div>

              <span class="mt-6 inline-flex items-center gap-2 border-b border-transparent pb-0.5 font-mono text-[11px] uppercase tracking-wider text-brand transition-colors group-hover:border-current">
                Meet the founder
                <i data-lucide="arrow-up-right" class="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"></i>
              </span>
            </a>
          </div>

        </div>
      </div>
    </section>`;

  if (window.lucide) lucide.createIcons();
  window.initReveal(el);
};