document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n--\nFrom: ${name}\nEmail: ${email}`);
    window.location.href = `mailto:temitopeolaniranj@gmail.com?subject=${subject}&body=${body}`;

    const note = document.querySelector("#form-note");
    if (note) note.hidden = false;
  });
});
