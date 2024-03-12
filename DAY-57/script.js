const paragraphEl = document.querySelector(".content");
const searchButtonEl = document.querySelector(".button");
const inputEl = document.querySelector(".search-input");

console.log(paragraphEl, searchButtonEl, inputEl);

searchButtonEl.addEventListener("click", () => {
  console.log("here");
  if (inputEl.value !== "") {
    let regExp = new RegExp(inputEl.value, "gi");
    paragraphEl.innerHTML = paragraphEl.textContent.replace(
      regExp,
      `<mark>${inputEl.value}</mark>`
    );
    console.log(regExp);
    console.log(paragraphEl.innerHTML);
    console.log(paragraphEl.textContent);
    console.log(paragraphEl.textContent.replace(regExp, "<mark>$</mark>"));
  }
});
