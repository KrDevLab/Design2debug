window.renderSiteNav = function renderSiteNav(containerId) {
  // Plain links shown on the left, next to the logo
  const leftLinks = [
    { href: "index.html", label: "Home" },
    { href: "projects.html", label: "Projects" },
    { href: "blog.html", label: "Blog" },
    { href: "contact.html", label: "Contact" },
  ];

  // "Services" is now a dropdown trigger; "Process" lives inside it
  const servicesDropdown = [
    { href: "index.html#services", label: "Overview" },
    { href: "index.html#process", label: "Process" },
  ];

  // The world's most-spoken languages (by total speakers), used to drive
  // Google's translation widget. Codes follow Google Translate's own list.
  const languages = [
    { code: "en", label: "English" },
    { code: "zh-CN", label: "中文 (Chinese)" },
    { code: "hi", label: "हिन्दी (Hindi)" },
    { code: "es", label: "Español (Spanish)" },
    { code: "fr", label: "Français (French)" },
    { code: "ar", label: "العربية (Arabic)" },
    { code: "bn", label: "বাংলা (Bengali)" },
    { code: "pt", label: "Português (Portuguese)" },
    { code: "ru", label: "Русский (Russian)" },
    { code: "ur", label: "اردو (Urdu)" },
    { code: "id", label: "Bahasa Indonesia" },
    { code: "de", label: "Deutsch (German)" },
    { code: "ja", label: "日本語 (Japanese)" },
  ];

  const desktopLink = (l) =>
    `<a href="${l.href}" class="text-sm text-ink-soft transition-colors hover:text-brand">${l.label}</a>`;

  const mobileLink = (l) =>
    `<a href="${l.href}" class="border-b border-rule py-3 text-sm text-ink transition-colors hover:text-brand">${l.label}</a>`;

  const leftLinksRow = leftLinks.map(desktopLink).join("");
  const leftLinksMobile = leftLinks.map(mobileLink).join("");

  const servicesDropdownItems = servicesDropdown
    .map(
      (l) =>
        `<a href="${l.href}" class="block px-4 py-2 text-sm text-ink-soft transition-colors hover:bg-paper-alt hover:text-brand" role="menuitem">${l.label}</a>`
    )
    .join("");

  const servicesMobileItems = servicesDropdown
    .map(
      (l) =>
        `<a href="${l.href}" class="border-b border-rule py-3 pl-4 text-sm text-ink-soft transition-colors hover:text-brand">${l.label}</a>`
    )
    .join("");

  const languageItems = languages
    .map(
      (lng) =>
        `<button type="button" data-lang="${lng.code}" class="lang-option block w-full px-4 py-2 text-left text-sm text-ink-soft transition-colors hover:bg-paper-alt hover:text-brand" role="menuitem">${lng.label}</button>`
    )
    .join("");

  const el = document.getElementById(containerId);
  el.innerHTML = `
    <header class="sticky top-0 z-40 border-b border-rule bg-paper/80 backdrop-blur">
      <div class="container-ibm flex h-[72px] items-center gap-4">
        <button aria-label="Menu" id="nav-toggle" class="shrink-0 md:hidden">
          <i data-lucide="menu" class="h-5 w-5"></i>
        </button>

        <div class="flex items-center gap-8">
          <!--
            LOGO — replace with your own:
            1. Put your logo file (svg/png, ideally square) somewhere in your project,
               e.g. "assets/logo.png" or "images/logo.svg".
            2. Change the src="..." on the <img> below to that path.
            3. That's it — if the image fails to load, the gradient square fallback
               shows instead so the nav never breaks.
            4. Want text-only instead of an image? Delete the <img> line entirely;
               the fallback <span> will show automatically.
            NOTE: the src path is relative to each HTML page's own location, not
            to this script. If your pages live at the project root and your
            image is in a root-level "assets" folder, use "assets/d2d-logo.png"
            (no "../"). Only use "../assets/..." if the HTML page itself lives
            one folder deeper than the project root.
          -->
            <a
    href="index.html"
    class="flex items-center shrink-0 h-[72px]"
>

    <!-- Logo -->
  <img
  src="js/assets/logo.png"
  alt="Design2Debug Logo"
  width="36"
  height="36"
  loading="eager"
  decoding="async">

    <!-- Company Name -->
    <div class="hidden md:flex flex-col justify-center ml-2">

        <span
            class="text-xl font-bold tracking-tight text-ink leading-none"
            style="font-family:'Space Grotesk',sans-serif;"
        >
            Design2Debug
        </span>

        <span
            class="text-[9px] uppercase tracking-[0.30em] text-ink-soft mt-1 leading-none"
        >
            DESIGN • DEVELOP • DEPLOY
        </span>

    </div>

</a>

          <nav class="hidden items-center gap-7 md:flex">
            ${desktopLink(leftLinks[0])}

            <div class="relative" id="services-dropdown-wrap">
              <button type="button" id="services-toggle" aria-haspopup="true" aria-expanded="false"
                class="flex items-center gap-1 text-sm text-ink-soft transition-colors hover:text-brand">
                Services
                <i data-lucide="chevron-down" class="h-3.5 w-3.5 transition-transform" id="services-chevron"></i>
              </button>
              <div id="services-menu" role="menu"
                class="absolute left-0 top-full hidden w-44 border border-rule bg-paper py-1 shadow-lg">
                ${servicesDropdownItems}
              </div>
            </div>

            ${leftLinksRow.replace(desktopLink(leftLinks[0]), "")}
          </nav>
        </div>

        <div class="ml-auto flex items-center gap-1 sm:gap-3">
          <div class="flex items-center" id="nav-search-wrap">
            <button type="button" id="search-toggle" aria-label="Toggle search" class="p-1.5 text-ink-soft transition-colors hover:text-brand sm:p-2">
              <i data-lucide="search" class="h-4 w-4"></i>
            </button>
            <form id="nav-search-form" class="hidden items-center overflow-hidden border border-rule bg-paper" autocomplete="off">
              <input id="nav-search-input" type="text" placeholder="Search…"
                class="w-24 bg-transparent px-2 py-1.5 text-sm text-ink placeholder:text-ink-soft focus:outline-none sm:w-44 sm:px-3" />
              <button type="submit" aria-label="Run search" class="px-2 text-ink-soft transition-colors hover:text-brand">
                <i data-lucide="corner-down-left" class="h-3.5 w-3.5"></i>
              </button>
            </form>
          </div>

          <div class="relative" id="lang-dropdown-wrap">
            <button type="button" id="lang-toggle" aria-haspopup="true" aria-expanded="false" aria-label="Change language"
              class="p-1.5 text-ink-soft transition-colors hover:text-brand sm:p-2">
              <i data-lucide="globe" class="h-4 w-4"></i>
            </button>
            <div id="lang-menu" role="menu" data-no-translate
              class="absolute right-0 top-full hidden max-h-72 w-48 overflow-y-auto border border-rule bg-paper py-1 shadow-lg">
              ${languageItems}
            </div>
          </div>

          <a href="blog.html" aria-label="Go to blog" class="inline-flex p-1.5 text-ink-soft transition-colors hover:text-brand sm:p-2">
            <i data-lucide="book-open" class="h-4 w-4"></i>
          </a>
        </div>
      </div>

      <div class="hidden border-t border-rule md:hidden" id="nav-mobile">
        <div class="container-ibm flex flex-col py-4">
          ${mobileLink(leftLinks[0])}

          <button type="button" id="services-toggle-mobile" class="flex items-center justify-between border-b border-rule py-3 text-sm text-ink">
            Services
            <i data-lucide="chevron-down" class="h-4 w-4 transition-transform" id="services-chevron-mobile"></i>
          </button>
          <div id="services-menu-mobile" class="hidden flex-col">
            ${servicesMobileItems}
          </div>

          ${leftLinksMobile.replace(mobileLink(leftLinks[0]), "")}
        </div>
      </div>
    </header>`;

  // ---- helpers ----
  const refreshIcons = () => {
    if (window.lucide) lucide.createIcons();
  };
  refreshIcons();

  const closeAllDropdowns = (except) => {
    [servicesMenu, langMenu].forEach((menu) => {
      if (menu && menu !== except) menu.classList.add("hidden");
    });
  };

  // ---- mobile menu toggle ----
  const toggle = el.querySelector("#nav-toggle");
  const mobile = el.querySelector("#nav-mobile");
  let open = false;
  toggle.addEventListener("click", () => {
    open = !open;
    mobile.classList.toggle("hidden", !open);
    toggle.innerHTML = open
      ? '<i data-lucide="x" class="h-5 w-5"></i>'
      : '<i data-lucide="menu" class="h-5 w-5"></i>';
    refreshIcons();
  });

  // ---- desktop Services dropdown ----
  const servicesToggle = el.querySelector("#services-toggle");
  const servicesMenu = el.querySelector("#services-menu");
  const servicesChevron = el.querySelector("#services-chevron");
  servicesToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    const willOpen = servicesMenu.classList.contains("hidden");
    closeAllDropdowns();
    servicesMenu.classList.toggle("hidden", !willOpen);
    servicesToggle.setAttribute("aria-expanded", String(willOpen));
    servicesChevron.classList.toggle("rotate-180", willOpen);
  });

  // ---- mobile Services accordion ----
  const servicesToggleMobile = el.querySelector("#services-toggle-mobile");
  const servicesMenuMobile = el.querySelector("#services-menu-mobile");
  const servicesChevronMobile = el.querySelector("#services-chevron-mobile");
  servicesToggleMobile.addEventListener("click", () => {
    const willOpen = servicesMenuMobile.classList.contains("hidden");
    servicesMenuMobile.classList.toggle("hidden", !willOpen);
    servicesMenuMobile.classList.toggle("flex", willOpen);
    servicesChevronMobile.classList.toggle("rotate-180", willOpen);
  });

  // ---- desktop language dropdown ----
  const langToggle = el.querySelector("#lang-toggle");
  const langMenu = el.querySelector("#lang-menu");
  langToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    const willOpen = langMenu.classList.contains("hidden");
    closeAllDropdowns();
    langMenu.classList.toggle("hidden", !willOpen);
    langToggle.setAttribute("aria-expanded", String(willOpen));
  });

  // close dropdowns on outside click
  document.addEventListener("click", () => closeAllDropdowns());

  // ---- Real page translation (no widget, no banner) ----
  // Instead of embedding Google's website-translate widget (which always
  // carries its own "Translated into: X / Show original" banner and can be
  // patchy about which languages it exposes), we translate the visible text
  // ourselves via Google's translation endpoint and swap it directly into
  // the page. Nothing is injected into the DOM except the new text.
  const originalTextByNode = new WeakMap();
  const translationCache = new Map(); // `${lang}::${originalText}` -> translated text

  const collectTranslatableTextNodes = (root) => {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.textContent || !node.textContent.trim()) return NodeFilter.FILTER_REJECT;
        let parent = node.parentElement;
        while (parent) {
          if (parent.hasAttribute && parent.hasAttribute("data-no-translate")) {
            return NodeFilter.FILTER_REJECT;
          }
          if (parent.tagName === "SCRIPT" || parent.tagName === "STYLE") {
            return NodeFilter.FILTER_REJECT;
          }
          parent = parent.parentElement;
        }
        return NodeFilter.FILTER_ACCEPT;
      },
    });
    const nodes = [];
    let n;
    while ((n = walker.nextNode())) nodes.push(n);
    return nodes;
  };

  const translateOneNode = async (node, targetLang) => {
    if (!originalTextByNode.has(node)) {
      originalTextByNode.set(node, node.textContent);
    }
    const original = originalTextByNode.get(node);

    if (targetLang === "en") {
      node.textContent = original;
      return;
    }

    const cacheKey = `${targetLang}::${original}`;
    if (translationCache.has(cacheKey)) {
      node.textContent = translationCache.get(cacheKey);
      return;
    }

    try {
      const url =
        "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=" +
        encodeURIComponent(targetLang) +
        "&dt=t&q=" +
        encodeURIComponent(original);
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Translate request failed: ${res.status}`);
      const data = await res.json();
      const translated = data[0].map((chunk) => chunk[0]).join("");
      translationCache.set(cacheKey, translated);
      node.textContent = translated;
    } catch (err) {
      console.error("Translation failed for a text node:", err);
    }
  };

  const translatePageTo = async (targetLang) => {
    const nodes = collectTranslatableTextNodes(document.body);
    const concurrency = 6;
    let cursor = 0;
    const worker = async () => {
      while (cursor < nodes.length) {
        const node = nodes[cursor++];
        await translateOneNode(node, targetLang);
      }
    };
    await Promise.all(Array.from({ length: concurrency }, worker));

    document.documentElement.lang = targetLang;
    try {
      localStorage.setItem("site-lang", targetLang);
    } catch (err) {
      /* localStorage may be unavailable; ignore */
    }
  };

  const applyLanguage = (code, label) => {
    langToggle.setAttribute("aria-busy", "true");
    translatePageTo(code)
      .then(() => console.log(`Translated page to: ${label} (${code})`))
      .catch((err) => console.error("Page translation failed:", err))
      .finally(() => langToggle.removeAttribute("aria-busy"));
  };

  el.querySelectorAll(".lang-option").forEach((btn) => {
    btn.addEventListener("click", () => {
      applyLanguage(btn.dataset.lang, btn.textContent.trim());
      closeAllDropdowns();
    });
  });

  // ---- search: toggle + in-page find ----
  const searchToggle = el.querySelector("#search-toggle");
  const searchForm = el.querySelector("#nav-search-form");
  const searchInput = el.querySelector("#nav-search-input");
  searchToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    const willOpen = searchForm.classList.contains("hidden");
    searchForm.classList.toggle("hidden", !willOpen);
    searchForm.classList.toggle("flex", willOpen);
    if (willOpen) searchInput.focus();
  });

  const runSiteSearch = (query) => {
    const q = query.trim();
    if (!q) return;

    // Try a lightweight in-page search first: find and scroll to the first
    // text match in the main content, briefly highlighting it.
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: (node) => {
          if (!node.textContent || !node.textContent.toLowerCase().includes(q.toLowerCase())) {
            return NodeFilter.FILTER_REJECT;
          }
          if (node.parentElement && node.parentElement.closest("header")) {
            return NodeFilter.FILTER_REJECT; // skip the nav itself
          }
          return NodeFilter.FILTER_ACCEPT;
        },
      }
    );

    const match = walker.nextNode();
    if (match && match.parentElement) {
      const targetEl = match.parentElement;
      targetEl.scrollIntoView({ behavior: "smooth", block: "center" });
      const originalBg = targetEl.style.backgroundColor;
      targetEl.style.transition = "background-color 0.3s ease";
      targetEl.style.backgroundColor = "rgba(255, 230, 0, 0.4)";
      setTimeout(() => {
        targetEl.style.backgroundColor = originalBg;
      }, 1600);
    } else {
      // No match on this page: fall back to a dedicated search results page.
      window.location.href = `blog.html?q=${encodeURIComponent(q)}`;
    }
  };

  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    runSiteSearch(searchInput.value);
  });
};