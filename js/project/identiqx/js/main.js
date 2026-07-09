// ==========================================================================
// IdentiqX — shared behavior (nav, scroll effects, reveal animations, etc.)
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  initLucide();
  initNav();
  initScrollProgress();
  initReveal();
  initCounters();
  initFaq();
  initPhoneTilt();
  initYear();
});

function initLucide() {
  if (window.lucide) window.lucide.createIcons();
}

/* ---------------- Nav ---------------- */
function initNav() {
  const header = document.getElementById("site-header");
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 8) {
      header.classList.add("glass-strong", "shadow-sm");
      header.classList.remove("bg-transparent");
    } else {
      header.classList.remove("glass-strong", "shadow-sm");
      header.classList.add("bg-transparent");
    }
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // active link highlighting
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("[data-nav-link]").forEach((link) => {
    const linkPath = link.getAttribute("href");
    if (linkPath === path) link.classList.add("active");
  });

  // mobile menu
  const toggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const iconMenu = document.getElementById("icon-menu");
  const iconClose = document.getElementById("icon-close");
  if (toggle && mobileMenu) {
    toggle.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.toggle("open");
      mobileMenu.style.maxHeight = isOpen ? mobileMenu.scrollHeight + "px" : "0px";
      iconMenu?.classList.toggle("hidden", isOpen);
      iconClose?.classList.toggle("hidden", !isOpen);
    });
  }
}

/* ---------------- Scroll progress bar ---------------- */
function initScrollProgress() {
  const bar = document.getElementById("scroll-progress");
  if (!bar) return;
  const onScroll = () => {
    const h = document.documentElement;
    const scrollTop = h.scrollTop || document.body.scrollTop;
    const scrollHeight = (h.scrollHeight || document.body.scrollHeight) - h.clientHeight;
    const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
    bar.style.transform = `scaleX(${progress})`;
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ---------------- Reveal on scroll ---------------- */
function initReveal() {
  const targets = document.querySelectorAll("[data-reveal], [data-reveal-stagger]");
  if (!targets.length) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "-60px 0px" }
  );
  targets.forEach((t) => io.observe(t));
}

/* ---------------- Animated counters ---------------- */
function initCounters() {
  const counters = document.querySelectorAll("[data-counter]");
  if (!counters.length) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const to = parseInt(el.getAttribute("data-counter"), 10) || 0;
        const suffix = el.getAttribute("data-suffix") || "";
        const duration = 1600;
        const start = performance.now();
        const tick = (now) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          el.textContent = Math.round(to * eased).toLocaleString() + suffix;
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.unobserve(el);
      });
    },
    { threshold: 0.2, rootMargin: "-60px 0px" }
  );
  counters.forEach((c) => io.observe(c));
}

/* ---------------- FAQ accordion ---------------- */
function initFaq() {
  const items = document.querySelectorAll("[data-faq-item]");
  if (!items.length) return;
  items.forEach((item, i) => {
    const btn = item.querySelector("[data-faq-trigger]");
    const panel = item.querySelector("[data-faq-panel]");
    const chevron = item.querySelector("[data-faq-chevron]");
    if (i === 0) {
      panel.classList.add("open");
      chevron.classList.add("open");
    }
    btn.addEventListener("click", () => {
      const isOpen = panel.classList.contains("open");
      items.forEach((other) => {
        other.querySelector("[data-faq-panel]").classList.remove("open");
        other.querySelector("[data-faq-chevron]").classList.remove("open");
      });
      if (!isOpen) {
        panel.classList.add("open");
        chevron.classList.add("open");
      }
    });
  });
}

/* ---------------- Phone mockup tilt ---------------- */
function initPhoneTilt() {
  document.querySelectorAll("[data-phone-tilt]").forEach((el) => {
    const inner = el.querySelector("[data-phone-inner]");
    if (!inner) return;
    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect();
      const mx = e.clientX - (r.left + r.width / 2);
      const my = e.clientY - (r.top + r.height / 2);
      const rx = Math.max(-8, Math.min(8, (-my / 60) * 8));
      const ry = Math.max(-8, Math.min(8, (mx / 60) * 8));
      inner.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
    });
    el.addEventListener("mouseleave", () => {
      inner.style.transform = "rotateX(0deg) rotateY(0deg)";
    });
  });
}

/* ---------------- Footer year ---------------- */
function initYear() {
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
}

/* ---------------- Newsletter / waitlist form (download page) ---------------- */
function handleNotifyForm(e) {
  e.preventDefault();
  const form = e.target;
  const email = form.querySelector("input[type=email]").value;
  if (!email) return;
  const btn = form.querySelector("button[type=submit]");
  btn.disabled = true;
  btn.innerHTML = '<i data-lucide="check-circle-2" class="h-4 w-4"></i> You\'re on the list';
  if (window.lucide) window.lucide.createIcons();
}
