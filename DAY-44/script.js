const allLablesEl = document.querySelectorAll(".form-control label");

allLablesEl.forEach((label) => {
  label.innerHTML = label.innerHTML
    .split("")
    .map(
      (letters, index) =>
        `<span style="transition-delay:${index * 50}ms">${letters}</span>`
    )
    .join("");
});
