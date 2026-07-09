window.renderContactForm = function renderContactForm(containerId) {
  const el = document.getElementById(containerId);
  const budgets = ["Under $100", "$100 – $500", "$500 – $1000", "$1000 – $5000", "Above $5000", "Custom"];
  const field =
    "w-full rounded-md border border-rule bg-paper px-3 py-3 text-sm text-ink placeholder:text-ink-soft/60 " +
    "transition-all duration-200 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 " +
    "hover:border-ink/40";

  // ────────────────────────────────────────────────────────────────
  // EMAILJS CONFIG — fill these in from your EmailJS dashboard.
  // 1. Sign up free at https://www.emailjs.com (200 emails/mo, 2 templates)
  // 2. Add an Email Service (Gmail, Outlook, etc.) → get SERVICE_ID
  // 3. Create two templates using owner-notification-template.html and
  //    user-autoreply-template.html → get their TEMPLATE_IDs
  // 4. Account → General → get your PUBLIC_KEY
  // ────────────────────────────────────────────────────────────────
  const EMAILJS_PUBLIC_KEY = "THnO-vcfuGLx4rMV_";
  const EMAILJS_SERVICE_ID = "service_hvfu50m";
  const EMAILJS_OWNER_TEMPLATE_ID = "template_byxsea8";
  const EMAILJS_USER_TEMPLATE_ID = "template_hmewll7";

  // Loads the EmailJS SDK once, no matter how many times the form mounts
  function ensureEmailJs() {
    return new Promise((resolve, reject) => {
      if (window.emailjs) return resolve(window.emailjs);
      const existing = document.querySelector('script[data-emailjs-sdk]');
      if (existing) {
        existing.addEventListener("load", () => resolve(window.emailjs));
        existing.addEventListener("error", reject);
        return;
      }
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
      script.dataset.emailjsSdk = "true";
      script.onload = () => {
        window.emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
        resolve(window.emailjs);
      };
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  const successLines = [
    { headline: "Message launched.", sub: "Check your inbox — a confirmation email is on its way, and I'll reply within 24 hours." },
    { headline: "Got it, loud and clear.", sub: "You should see a confirmation email shortly. I'll follow up personally within a day." },
    { headline: "Delivered.", sub: "A copy just landed in your inbox too. Talk soon — within 24 hours, promise." },
  ];

  function paintForm() {
    el.innerHTML = `
      <form id="contact-form" class="grid gap-5 rounded-lg border border-rule bg-paper p-6 transition-shadow duration-300 hover:shadow-elegant sm:p-8">
        <div class="mb-1">
          <div class="eyebrow text-brand">Start a project</div>
          <h3 class="mt-1 text-2xl font-light tracking-tight text-ink">Let's make something worth shipping.</h3>
          <p class="mt-1 text-sm text-ink-soft">Fill in a few details and I'll get back to you within a day.</p>
        </div>

        <div class="grid gap-4 sm:grid-cols-2">
          <label class="block">
            <div class="eyebrow mb-2">Name</div>
            <input name="name" placeholder="Your full name" class="${field}" />
            <p data-err="name" class="mt-1 hidden text-xs text-destructive"></p>
          </label>
          <label class="block">
            <div class="eyebrow mb-2">Email</div>
            <input name="email" type="email" placeholder="you@company.com" class="${field}" />
            <p data-err="email" class="mt-1 hidden text-xs text-destructive"></p>
          </label>
        </div>
        <div class="grid gap-4 sm:grid-cols-2">
          <label class="block">
            <div class="eyebrow mb-2">Phone</div>
            <input name="phone" placeholder="Optional" class="${field}" />
          </label>
          <label class="block">
            <div class="eyebrow mb-2">Region / Country</div>
            <select name="region" class="${field}">
              <option value="">Select your country…</option>
              ${window.REGIONS.map((r) => `<option value="${r}">${r}</option>`).join("")}
            </select>
          </label>
        </div>
        <label class="block">
          <div class="eyebrow mb-2">Budget expectation</div>
          <select name="budget" id="budget-select" class="${field}">
            <option value="" disabled selected>Select a range</option>
            ${budgets.map((b) => `<option value="${b}">${b}</option>`).join("")}
          </select>
        </label>
        <label class="hidden block animate-fade-in" id="custom-budget-wrap">
          <div class="eyebrow mb-2">Custom budget</div>
          <input name="customBudget" placeholder="e.g. $2,500 + revenue share, or ₹3 lakh" class="${field}" />
          <p class="mt-1 text-[11px] text-ink-soft">Write any range, currency, or arrangement that fits — barter included.</p>
        </label>
        <label class="block">
          <div class="eyebrow mb-2">Message</div>
          <textarea name="message" rows="5" placeholder="Tell me about the project — what, who for, by when." class="${field} resize-none"></textarea>
          <p data-err="message" class="mt-1 hidden text-xs text-destructive"></p>
        </label>

        <p id="form-status" class="hidden text-sm"></p>

        <button type="submit" id="contact-submit"
          class="group inline-flex items-center justify-center gap-2 rounded-md bg-ink px-6 py-3 text-sm text-paper
                 transition-all duration-200 hover:bg-brand hover:shadow-elegant hover:-translate-y-0.5
                 disabled:opacity-60 disabled:hover:translate-y-0">
          <span>Let's build together</span>
          <span class="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </button>
      </form>`;

    const form = el.querySelector("#contact-form");
    const budgetSelect = el.querySelector("#budget-select");
    const customWrap = el.querySelector("#custom-budget-wrap");
    const submitBtn = el.querySelector("#contact-submit");
    const statusEl = el.querySelector("#form-status");

    budgetSelect.addEventListener("change", () => {
      customWrap.classList.toggle("hidden", budgetSelect.value !== "Custom");
    });

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const fd = new FormData(form);
      const name = (fd.get("name") || "").toString().trim();
      const email = (fd.get("email") || "").toString().trim();
      const message = (fd.get("message") || "").toString().trim();
      const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      let hasError = false;
      const errs = { name: "", email: "", message: "" };
      if (!name) { errs.name = "Required"; hasError = true; }
      if (!email || !emailRe.test(email)) { errs.email = "Invalid email"; hasError = true; }
      if (message.length < 10) { errs.message = "A little more, please"; hasError = true; }

      ["name", "email", "message"].forEach((k) => {
        const p = el.querySelector(`[data-err="${k}"]`);
        if (errs[k]) { p.textContent = errs[k]; p.classList.remove("hidden"); }
        else { p.classList.add("hidden"); }
      });
      if (hasError) return;

      // Fold custom budget into a single readable value
      const finalBudget =
        fd.get("budget") === "Custom" && (fd.get("customBudget") || "").toString().trim()
          ? `Custom: ${(fd.get("customBudget") || "").toString().trim()}`
          : fd.get("budget") || "Not specified";

      const templateParams = {
        name,
        email,
        phone: (fd.get("phone") || "Not provided").toString().trim() || "Not provided",
        region: (fd.get("region") || "Not specified").toString().trim() || "Not specified",
        budget: finalBudget,
        message,
        time: new Date().toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short" }),
      };

      const originalText = submitBtn.textContent;
      submitBtn.textContent = "Sending...";
      submitBtn.disabled = true;
      statusEl.classList.add("hidden");

      try {
        const emailjs = await ensureEmailJs();

        // Fire both emails in parallel: one to you, one to the visitor.
        // If either template isn't wired up yet, this will reject — see catch below.
        await Promise.all([
          emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_OWNER_TEMPLATE_ID, templateParams),
          emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_USER_TEMPLATE_ID, templateParams),
        ]);

        paintSuccess(name);
        return; // form element is being replaced, no need to reset button state
      } catch (err) {
        // Log the real EmailJS error to the console so it's easy to diagnose —
        // open DevTools → Console to see exactly what EmailJS rejected with.
        console.error("EmailJS send failed:", err);
        const detail = err && (err.text || err.message) ? ` (${err.text || err.message})` : "";
        statusEl.textContent = `Something went wrong sending your message${detail}. Please try again, or email me directly.`;
        statusEl.className = "text-sm text-destructive";
        statusEl.classList.remove("hidden");
      } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }
    });
  }

  function paintSuccess(name) {
    const pick = successLines[Math.floor(Math.random() * successLines.length)];
    const firstName = (name || "").split(" ")[0];
    const greeting = firstName ? `Thanks, ${firstName}.` : "Thanks for reaching out.";

    el.innerHTML = `
      <div class="animate-scale-in rounded-lg border border-ink bg-paper p-10 text-center shadow-elegant">
        <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand text-paper shadow-elegant">
          <i data-lucide="check" class="h-7 w-7"></i>
        </div>
        <div class="eyebrow mt-6 text-brand">${greeting}</div>
        <h3 class="mt-2 text-3xl font-light tracking-tight text-ink">${pick.headline}</h3>
        <p class="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-ink-soft">
          ${pick.sub}
        </p>
        <button id="contact-send-another"
          class="mt-7 inline-flex items-center gap-1.5 rounded-md border border-ink px-4 py-2 text-xs text-ink
                 transition-colors duration-200 hover:bg-ink hover:text-paper">
          <i data-lucide="rotate-ccw" class="h-3.5 w-3.5"></i>
          Send another
        </button>
      </div>`;
    if (window.lucide) lucide.createIcons();
    el.querySelector("#contact-send-another").addEventListener("click", paintForm);
  }

  paintForm();
  if (window.lucide) lucide.createIcons();
};