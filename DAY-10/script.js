const heading2El = document.querySelector(".secondary-heading");
const appendBtnEl = document.querySelector(".append-btn");

let innerText = heading2El.innerHTML;
let appendText = " Mehdiali Kadiwala";

appendBtnEl.addEventListener("click", () => {
  let newInnerHTML = heading2El.innerHTML;
  if (newInnerHTML === innerText) {
    heading2El.innerHTML = innerText.concat(appendText);
    appendBtnEl.innerHTML = "Remove Text";
  } else {
    heading2El.innerHTML = innerText;
    appendBtnEl.innerHTML = "Add Text";
  }
});
