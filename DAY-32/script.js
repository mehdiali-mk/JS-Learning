const inputTextEl = document.querySelector("#input-text");
const counterEl = document.querySelector(".counter");

let counter = 1;

inputTextEl.addEventListener("keyup", () => {
  counter = inputTextEl.value.toString().length;
  counterEl.textContent = counter;
});
