// Fade-up on scroll for any element with class "reveal".
// Usage: add class="reveal" and optionally style="--reveal-delay:120ms"
window.initReveal = function initReveal(root = document) {
  const els = root.querySelectorAll(".reveal:not([data-observed])");
  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.setAttribute("data-revealed", "true"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.setAttribute("data-revealed", "true");
          io.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  els.forEach((el) => {
    el.setAttribute("data-observed", "true");
    io.observe(el);
  });
};
