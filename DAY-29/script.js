const inputEl = document.querySelector("#text-input");
const buttonEl = document.querySelector(".button");
const resultEl = document.querySelector(".result");

buttonEl.addEventListener("click", (evt) => {
  evt.preventDefault();

  let value = inputEl.value.toString().toUpperCase();
  let palindromeValue = value
    .split("")
    .reverse()
    .toString()
    .replaceAll(",", "");

  if (value == palindromeValue) {
    resultEl.textContent = `${value} is a Palindrome word.`;
  } else {
    resultEl.textContent = `${value} is not a Palindrome word.`;
  }
});
