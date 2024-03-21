const fillDivEl = document.querySelector(".fill");
const emptyDivsEl = document.querySelectorAll(".empty");

console.log(fillDivEl);
console.log(emptyDivsEl);

fillDivEl.addEventListener("dragstart", dragStart);
fillDivEl.addEventListener("dragend", dragEnd);

for (const emptyDiv of emptyDivsEl) {
  emptyDiv.addEventListener("dragover", dragOver);
  emptyDiv.addEventListener("dragenter", dragEnter);
  emptyDiv.addEventListener("dragleave", dragLeave);
  emptyDiv.addEventListener("drop", dragDrop);
}

function dragStart() {
  setTimeout(() => {
    this.className = "invisible";
  }, 0);
}

function dragEnd() {
  this.className = "fill";
}

function dragOver(e) {
  e.preventDefault();
}
function dragEnter(e) {
  e.preventDefault();
  this.className += " hovered";
}

function dragLeave() {
  this.className = "empty";
}

function dragDrop() {
  this.className = "empty";
  this.append(fillDivEl);
}
