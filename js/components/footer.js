window.renderSiteFooter = function renderSiteFooter(containerId) {
  const el = document.getElementById(containerId);
  const year = new Date().getFullYear();

  // TODO: replace with your real number, digits only, country code first (no + or spaces) for wa.me
  const PHONE_DIGITS = "911234567890";
  const PHONE_DISPLAY = "+91 12345 67890";
  const EMAIL = "hello@design2debug.com";

  el.innerHTML = `
    <footer class="border-t border-slate-200 bg-white">
      <div class="mx-auto max-w-6xl px-6 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

        <div class="lg:col-span-1">
          <div class="flex items-center gap-2">
            <img src="js/assets/logo.png" alt="Design2Debug logo" class="h-8 w-8 rounded-md object-contain">
            <span class="text-base font-bold text-slate-900">Design2Debug</span>
          </div>
          <p class="mt-3 text-sm leading-relaxed text-slate-500">
            UI/UX design, Flutter apps, and websites — built and supported by one person, start to finish.
          </p>
          <div class="mt-4 flex gap-2">
            <a href="https://wa.me/${7397753765}" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"
               class="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-slate-600 transition-colors hover:border-slate-900 hover:bg-slate-900 hover:text-white">
              <i data-lucide="message-circle" class="h-4 w-4"></i>
            </a>
           <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@design2debug.com"
   target="_blank"
   rel="noreferrer"
   aria-label="Email via Gmail"
   class="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-slate-600 transition-colors hover:border-slate-900 hover:bg-slate-900 hover:text-white">
  <i data-lucide="mail" class="h-4 w-4"></i>
</a>
            <a href="sms:+${7397753765}" aria-label="Send an SMS"
               class="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-slate-600 transition-colors hover:border-slate-900 hover:bg-slate-900 hover:text-white">
              <i data-lucide="message-square" class="h-4 w-4"></i>
            </a>
            <a href="https://www.instagram.com/design2debug?igsh=cTduNXV3cG5zaGFm" target="_blank" rel="noreferrer" aria-label="Instagram"
               class="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-slate-600 transition-colors hover:border-slate-900 hover:bg-slate-900 hover:text-white">
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>

        <div>
          <div class="text-xs font-semibold uppercase tracking-wide text-slate-400">Site</div>
          <ul class="mt-3 space-y-2 text-sm">
            <li><a href="index.html#services" class="text-slate-600 hover:text-slate-900">Services</a></li>
            <li><a href="projects.html" class="text-slate-600 hover:text-slate-900">Projects</a></li>
            <li><a href="faq.html" class="text-slate-600 hover:text-slate-900">FAQ</a></li>
            <li><a href="contact.html" class="text-slate-600 hover:text-slate-900">Contact</a></li>
          </ul>
        </div>

        <div>
          <div class="text-xs font-semibold uppercase tracking-wide text-slate-400">Get in touch</div>
          <ul class="mt-3 space-y-2 text-sm">
            <li><a href="mailto:${EMAIL}" class="text-slate-600 hover:text-slate-900">${EMAIL}</a></li>
            <li><a href="https://wa.me/${7397753765}" target="_blank" rel="noreferrer" class="text-slate-600 hover:text-slate-900">${"+91 7397753765"}</a></li>
            <li class="text-slate-400">Tiruchirapalli, Tamil Nadu, India</li>
          </ul>
        </div>

        <div>
          <div class="text-xs font-semibold uppercase tracking-wide text-slate-400">Legal</div>
          <ul class="mt-3 space-y-2 text-sm">
            <li><a href="privacy-policy.html" class="text-slate-600 hover:text-slate-900">Privacy Policy</a></li>
            <li><a href="terms.html" class="text-slate-600 hover:text-slate-900">Terms &amp; Conditions</a></li>
            <li><a href="cookie-policy.html" class="text-slate-600 hover:text-slate-900">Cookie Policy</a></li>
          </ul>
        </div>

      </div>

      <div class="border-t border-slate-200">
        <div class="mx-auto max-w-6xl px-6 py-4 flex flex-col gap-2 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <div>© ${year} Design2Debug. All rights reserved.</div>
          <div>Tiruchirappalli, Tamil Nadu, India</div>
        </div>
      </div>
    </footer>`;

  if (window.lucide) lucide.createIcons();
};