// ======================================================
// PROJECTS DATA
// Copy any object below to add a new project.
// ======================================================



 window.PROJECTS_DATA = [

  // ============================
  // LIVE PROJECTS
  // ============================

  {
    code: "P-001",
    title: "IDentiqX",
    note: "A secure digital identity wallet built with Flutter that enables users to safely store, organize, and access important personal documents in one encrypted vault.",
    tag: "Flutter · Mobile App",
    tone: "brand",
    icon: "shield-check",
    year: "2026",
    link: "js/project/identiqx/index.html"
  },

  {
    code: "P-002",
    title: "CareerForge AI",
    note: "",
    tag: "Coming Soon",
    tone: "amber",
    icon: "rocket",
    year: "Upcoming",
    link: ""
  },

  {
    code: "P-003",
    title: "Game",
    note: "",
    tag: "Coming Soon",
    tone: "pink",
    icon: "gamepad-2",
    year: "Upcoming",
    link: ""
  },



  // ======================================================
  // ADD MORE PROJECTS HERE
  //
  // {
  //   code: "P-006",
  //   title: "Project Name",
  //   note: "Project description",
  //   tag: "Flutter · Web",
  //   tone: "brand",
  //   icon: "smartphone",
  //   year: "2026"
  // },
  // ======================================================

];

const D2D_TONE_BG = {
  brand: "bg-brand",
  violet: "bg-tone-violet",
  teal: "bg-tone-teal",
  amber: "bg-tone-amber",
  pink: "bg-tone-pink"
};

const D2D_TONE_TEXT = {
  brand: "text-brand",
  violet: "text-tone-violet",
  teal: "text-tone-teal",
  amber: "text-tone-amber",
  pink: "text-tone-pink"
};

const D2D_TONE_SOFT = {
  brand: "bg-brand-soft",
  violet: "bg-tone-violet/10",
  teal: "bg-tone-teal/10",
  amber: "bg-tone-amber/10",
  pink: "bg-tone-pink/10"
};

function projectCardHtml(p) {

  const button = p.link
    ? `
      <a href="${p.link}"
         class="group/link inline-flex items-center gap-2 border-b border-ink pb-1 text-xs font-medium text-ink transition-colors hover:border-brand hover:text-brand">
        View Project
        <i data-lucide="arrow-up-right"
           class="h-3.5 w-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"></i>
      </a>
    `
    : `
      <span class="inline-flex items-center gap-2 border-b border-rule pb-1 text-xs font-medium text-ink-soft cursor-not-allowed">
        Coming Soon
      </span>
    `;

  return `
    <article class="group relative flex h-full flex-col overflow-hidden border border-rule bg-paper transition-all duration-300 hover:-translate-y-1 hover:border-ink hover:shadow-elegant">

      <span class="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 ${D2D_TONE_BG[p.tone]}"></span>

      <div class="relative flex aspect-[16/10] items-center justify-center overflow-hidden ${D2D_TONE_SOFT[p.tone]}">

        <div aria-hidden="true" class="absolute inset-0 opacity-40 grid-bg"></div>

        <span class="relative inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-paper shadow-elegant ring-1 ring-rule transition-transform duration-500 group-hover:scale-110 ${D2D_TONE_TEXT[p.tone]}">
          <i data-lucide="${p.icon}" class="h-9 w-9" style="stroke-width:1.4"></i>
        </span>

        <span class="absolute right-4 top-4 inline-flex items-center gap-1 border border-rule bg-paper/90 px-2 py-1 font-mono text-[10px] uppercase tracking-wider ${D2D_TONE_TEXT[p.tone]}">
          ${p.tag}
        </span>

      </div>

      <div class="flex flex-1 flex-col p-6 sm:p-7">

        <div class="flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-ink-soft">
          <span>${p.code}</span>
          <span>${p.year}</span>
        </div>

        <h3 class="mt-4 text-xl font-light tracking-tight text-ink transition-colors group-hover:text-brand sm:text-2xl">
          ${p.title}
        </h3>

        ${
          p.note
            ? `<p class="mt-3 text-sm leading-relaxed text-ink-soft">${p.note}</p>`
            : `<p class="mt-3 text-sm italic text-ink-soft">Launching Soon...</p>`
        }

        <div class="mt-auto pt-6">
          ${button}
        </div>

      </div>

    </article>
  `;
}
window.renderProjectsPreview = function renderProjectsPreview(containerId) {

  const el = document.getElementById(containerId);

  el.innerHTML = `
    <section id="projects" class="relative border-b border-rule bg-paper py-24 lg:py-32">

      <div aria-hidden="true"
           class="blob-color animate-blob"
           style="width:260px;height:260px;top:60px;left:-80px;background:color-mix(in oklab,var(--brand) 16%,transparent)">
      </div>

      <div aria-hidden="true"
           class="blob-color animate-blob"
           style="width:220px;height:220px;bottom:60px;right:-60px;background:color-mix(in oklab,var(--tone-pink) 14%,transparent);animation-delay:4s">
      </div>

      <div class="container-ibm">

        <div class="reveal flex flex-wrap items-end justify-between gap-6">

          <div>

            <span class="accent-stripe mb-5 block"></span>

            <div class="eyebrow">
              04 — Featured Projects
            </div>

            <h2 class="display-2 mt-4 text-ink">
              My <span class="text-gradient-brand">Recent Work</span>
            </h2>

            <p class="mt-4 max-w-xl text-sm leading-relaxed text-ink-soft">
              A collection of applications, websites, and digital products designed and developed with a focus on performance, usability, and modern user experience.
            </p>

          </div>

          <a href="/projects.html"
             class="inline-flex items-center gap-2 border border-ink px-4 py-2 text-xs font-medium text-ink transition-colors hover:bg-ink hover:text-paper">
            View All Projects
            <i data-lucide="arrow-up-right" class="h-3.5 w-3.5"></i>
          </a>

        </div>

        <div class="reveal mt-14 hidden lg:grid lg:grid-cols-3 lg:gap-6">
          ${PROJECTS_DATA.map(projectCardHtml).join("")}
        </div>

        <div class="reveal mt-14 lg:hidden">
          ${window.sliderShell({
            id: "projects-slider",
            ariaLabel: "Projects",
            count: PROJECTS_DATA.length,
            itemsHtml: PROJECTS_DATA.map(
              p => `<div class="snap-start shrink-0 basis-[85%] sm:basis-[60%]">${projectCardHtml(p)}</div>`
            ).join("")
          })}
        </div>

      </div>

    </section>
  `;

  window.initSlider("projects-slider");
  window.initReveal(el);

  if (window.lucide) {
    lucide.createIcons();
  }
};