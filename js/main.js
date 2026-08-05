document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const links = document.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      links.classList.toggle("open");
    });

    links.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        links.classList.remove("open");
      }
    });
  }

  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();
});
