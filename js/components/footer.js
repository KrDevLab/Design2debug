window.renderSiteFooter = function renderSiteFooter(containerId) {
  const el = document.getElementById(containerId);
  const year = new Date().getFullYear();

  // TODO: replace with your real number, digits only, country code first (no + or spaces) for wa.me
  const PHONE_DIGITS = "911234567890";
  const PHONE_DISPLAY = "+91 12345 67890";
  const EMAIL = "hello@design2debug.com";

  el.innerHTML = `
    <footer class="relative border-t border-rule bg-paper overflow-hidden">
      <svg class="pointer-events-none absolute -top-1 left-0 w-full text-rule" viewBox="0 0 1200 24" preserveAspectRatio="none" style="height:24px;" aria-hidden="true">
        <path d="M0 12 C 100 24, 200 0, 300 12 S 500 24, 600 12 S 800 0, 900 12 S 1100 24, 1200 12" fill="none" stroke="currentColor" stroke-width="1.5"></path>
      </svg>

      <svg class="pointer-events-none absolute -right-16 -top-20 h-72 w-72 text-brand opacity-[0.07]" viewBox="0 0 200 200" aria-hidden="true">
        <path d="M0 100 C 40 60, 60 140, 100 100 S 160 60, 200 100 L 200 200 L 0 200 Z" fill="currentColor"></path>
      </svg>
      <svg class="pointer-events-none absolute right-8 top-10 h-24 w-24 text-brand opacity-[0.12]" viewBox="0 0 100 100" aria-hidden="true">
        <path d="M0 50 C 12 30, 25 70, 37 50 S 62 30, 75 50 S 100 70, 100 50" fill="none" stroke="currentColor" stroke-width="2"></path>
      </svg>

      <div class="container-ibm grid gap-x-8 gap-y-14 py-16 lg:grid-cols-[1.2fr_0.8fr_0.9fr_0.9fr]">
        <div>
          <div class="flex items-center gap-2 font-mono text-sm text-ink">
            <span class="inline-block h-4 w-4 bg-brand"></span>
            Design 2 Debug
          </div>
          <p class="mt-4 max-w-md text-sm leading-relaxed text-ink-soft">
            An independent practice building Flutter Android apps, websites, and the UI/UX
            behind them — one person, accountable for the whole project, design through to
            the last bug.
          </p>

          <div class="mt-6">
            <div class="eyebrow relative inline-block">
              Quick connect
              <svg class="absolute -bottom-1.5 left-0 w-full text-brand" viewBox="0 0 100 6" preserveAspectRatio="none" style="height:6px;" aria-hidden="true">
                <path d="M0 3 C 8 6, 17 0, 25 3 S 42 6, 50 3 S 67 0, 75 3 S 92 6, 100 3" fill="none" stroke="currentColor" stroke-width="1"></path>
              </svg>
            </div>
            <div class="mt-3 flex flex-wrap gap-3">
              <a href="https://wa.me/${PHONE_DIGITS}" target="_blank" rel="noreferrer"
                 aria-label="Chat on WhatsApp"
                 class="group inline-flex h-10 w-10 items-center justify-center border border-rule bg-paper text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-ink hover:bg-ink hover:text-paper">
                <i data-lucide="message-circle" class="h-4 w-4"></i>
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}" target="_blank" rel="noreferrer"
                 aria-label="Email via Gmail"
                 class="group inline-flex h-10 w-10 items-center justify-center border border-rule bg-paper text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-ink hover:bg-ink hover:text-paper">
                <i data-lucide="mail" class="h-4 w-4"></i>
              </a>
              <a href="sms:+${PHONE_DIGITS}" 
                 aria-label="Send an SMS"
                 class="group inline-flex h-10 w-10 items-center justify-center border border-rule bg-paper text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-ink hover:bg-ink hover:text-paper">
                <i data-lucide="message-square" class="h-4 w-4"></i>
              </a>
              <a href="https://instagram.com/design2debug" target="_blank" rel="noreferrer"
                 aria-label="Instagram"
                 class="group inline-flex h-10 w-10 items-center justify-center border border-rule bg-paper text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-ink hover:bg-ink hover:text-paper">
                <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          <div class="mt-8 inline-flex items-center gap-2 border border-rule px-3 py-2 text-xs text-ink-soft">
            <span class="relative flex h-2 w-2">
              <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75"></span>
              <span class="relative inline-flex h-2 w-2 rounded-full bg-brand"></span>
            </span>
            Currently open for new projects
          </div>
        </div>

        <div>
          <div class="eyebrow">Site</div>
          <ul class="mt-4 space-y-3 text-sm">
            <li><a href="index.html#services" class="text-ink transition-colors hover:text-brand">Services</a></li>
            <li><a href="index.html#process" class="text-ink transition-colors hover:text-brand">Process</a></li>
            <li><a href="projects.html" class="text-ink transition-colors hover:text-brand">Projects</a></li>
            <li><a href="testimonials.html" class="text-ink transition-colors hover:text-brand">Testimonials</a></li>
            <li><a href="contact.html" class="text-ink transition-colors hover:text-brand">Contact</a></li>
          </ul>
        </div>

        <div>
          <div class="eyebrow">Get in touch</div>
          <ul class="mt-4 space-y-3 text-sm">
            <li>
              <a href="mailto:${EMAIL}" class="text-ink transition-colors hover:text-brand">
                ${EMAIL}
              </a>
            </li>
            <li>
              <a href="https://wa.me/${PHONE_DIGITS}" target="_blank" rel="noreferrer" class="text-ink transition-colors hover:text-brand">
                ${PHONE_DISPLAY} (WhatsApp)
              </a>
            </li>
            <li class="text-ink-soft">Tiruppur, Tamil Nadu, India</li>
            <li class="text-ink-soft">Replies within 24 hours</li>
          </ul>
        </div>

        <div>
          <div class="eyebrow">Start a project</div>
          <p class="mt-4 text-sm leading-relaxed text-ink-soft">
            Got an idea for an app or a site? Send a note and hear back within a day.
          </p>
          <a href="contact.html"
             class="group mt-4 inline-flex items-center gap-2 border border-rule px-4 py-2 text-sm text-ink transition-all duration-300 hover:border-ink hover:bg-ink hover:text-paper">
            Say hello
            <svg class="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>

      <div class="relative border-t border-rule">
        <svg class="pointer-events-none absolute -top-1 left-0 w-full text-rule opacity-60" viewBox="0 0 1200 8" preserveAspectRatio="none" style="height:8px;" aria-hidden="true">
          <path d="M0 4 C 50 8, 100 0, 150 4 S 250 8, 300 4 S 400 0, 450 4 S 550 8, 600 4 S 700 0, 750 4 S 850 8, 900 4 S 1000 0, 1050 4 S 1150 8, 1200 4" fill="none" stroke="currentColor" stroke-width="1"></path>
        </svg>
        <div class="container-ibm flex flex-col items-start justify-between gap-3 py-6 text-xs text-ink-soft sm:flex-row sm:items-center">
          <div>© ${year} Design2Debug. All rights reserved.</div>
          <div class="font-mono">design · build · debug · ship.</div>
        </div>
      </div>
    </footer>`;

  if (window.lucide) lucide.createIcons();
};