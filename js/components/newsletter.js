window.renderNewsletterForm = function renderNewsletterForm(containerId) {
  const el = document.getElementById(containerId);

  function paintForm() {
    el.innerHTML = `
      <form id="newsletter-form" class="grid gap-3">
        <div class="flex items-stretch gap-0 border border-rule bg-paper transition-shadow focus-within:shadow-elegant">
          <span class="grid w-12 shrink-0 place-items-center border-r border-rule text-ink-soft">
            <i data-lucide="mail" class="h-4 w-4"></i>
          </span>
          <input type="email" id="newsletter-email" placeholder="you@company.com"
                 class="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm text-ink placeholder:text-ink-soft/60 focus:outline-none" aria-label="Email address" />
          <button type="submit" class="inline-flex shrink-0 items-center gap-2 bg-ink px-4 py-3 text-xs font-medium text-paper transition-colors hover:bg-brand sm:px-5 sm:text-sm">
            Subscribe <i data-lucide="send" class="h-3.5 w-3.5"></i>
          </button>
        </div>
        <p id="newsletter-error" class="hidden text-xs text-destructive"></p>
        <p class="text-[11px] text-ink-soft">One email per post. Unsubscribe anytime.</p>
      </form>`;
    if (window.lucide) lucide.createIcons();

    el.querySelector("#newsletter-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const email = el.querySelector("#newsletter-email").value.trim();
      const errEl = el.querySelector("#newsletter-error");
      const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRe.test(email)) {
        errEl.textContent = "Enter a valid email";
        errEl.classList.remove("hidden");
        return;
      }
      const subs = JSON.parse(localStorage.getItem("d2d_subscribers") || "[]");
      if (!subs.includes(email)) subs.push(email);
      localStorage.setItem("d2d_subscribers", JSON.stringify(subs));
      paintSuccess();
    });
  }

  function paintSuccess() {
    el.innerHTML = `
      <div class="animate-scale-in flex items-center gap-4 border border-brand bg-brand-soft p-6 text-ink">
        <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-paper">
          <i data-lucide="check" class="h-5 w-5"></i>
        </span>
        <div>
          <p class="text-sm font-medium">You're on the list.</p>
          <p class="mt-0.5 text-xs text-ink-soft">I'll email you when the next post lands. No spam, promise.</p>
        </div>
      </div>`;
    if (window.lucide) lucide.createIcons();
  }

  paintForm();
};
