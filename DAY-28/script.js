const modalBtnEl = document.querySelector("#modalBtn");
const modalContainerEl = document.querySelector("#modalContainer");
const closeBtnEl = document.querySelector("#closeBtn");
const blankSpaceEl = document.querySelector("#blankSpace");
const showCloseModal = () => {
  modalContainerEl.classList.toggle("hide");
};
modalBtnEl.addEventListener("click", () => {
  showCloseModal();
});
blankSpaceEl.addEventListener("click", () => {
  showCloseModal();
});
closeBtnEl.addEventListener("click", () => {
  showCloseModal();
});
