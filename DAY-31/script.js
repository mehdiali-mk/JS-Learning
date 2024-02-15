const buttonEl = document.querySelector(".button");
const inputEl = document.querySelector(".form-input");
const resultEl = document.querySelector(".result");

let vowelCounter = 0;

buttonEl.addEventListener("click", (evt) => {
  evt.preventDefault();
  checkVowel();
});

const checkVowel = () => {
  vowelCounter = 0;
  let string = inputEl.value.toString();
  for (let i = 0; i < string.length; i++) {
    if (string[i].match(/([a,e,i,o,u])/)) {
      vowelCounter++;
    }
  }
  resultEl.textContent = `Vowel = ${vowelCounter}`;
};
