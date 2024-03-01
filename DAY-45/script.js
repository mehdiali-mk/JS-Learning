const resultEl = document.querySelector(".result");
const incrementBtnEl = document.querySelector(".btn-plus");
const saveBtnEl = document.querySelector(".btn-save");
const saveEntriesEl = document.querySelector(".save-entries");

let count = 0;

incrementBtnEl.addEventListener("click", () => {
  count++;
  resultEl.textContent = count;
});

saveBtnEl.addEventListener("click", () => {
  let countStr = `${count}, `;
  saveEntriesEl.textContent = saveEntriesEl.textContent + countStr;
  count = 0;
});
