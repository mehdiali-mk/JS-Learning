const copyBtnEl = document.querySelector("#copy-button");
const copyTextEl = document.querySelector("#copy-text");
const moveBtnEl = document.querySelector("#move-button");
const moveTextEl = document.querySelector("#move-text");
const outputEl = document.querySelector(".output");
const outputContainerEl = document.querySelector("#output-container");

copyBtnEl.addEventListener("click", () => {
  let temp = copyTextEl.value;
  copyToClipboard(temp);
});

moveBtnEl.addEventListener("click", () => {
  let temp = copyTextEl.value;
  moveTextEl.value = temp;
});

copyTextEl.addEventListener("click", () => this.select());
moveTextEl.addEventListener("click", () => this.select());

function copyToClipboard(str) {
  const textarea = document.createElement("textarea");
  textarea.value = str;
  outputContainerEl.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  outputContainerEl.removeChild(textarea);
  outputEl.innerHTML = "<h3>Content Copied</h3>";
  outputEl.classList.remove("remove");
  outputEl.classList.add("added");
  setTimeout(() => {
    outputEl.classList.toggle("added");
    outputEl.classList.toggle("remove");
    outputEl.textContent = "";
  }, 2000);
}
