document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".value[data-target]");
  if (!counters.length) return;

  const animate = (el) => {
    const target = parseInt(el.dataset.target, 10);
    const duration = 1200;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(target * eased);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  counters.forEach(animate);
});
