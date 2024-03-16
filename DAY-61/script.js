const inputItemEl = document.querySelector(".input-item");
const buttonEl = document.querySelector(".button");
const dataListEl = document.querySelector(".data-list");

const listLimit = 12;

const addNewItem = (newItem) => {
  const newList = document.createElement("li");
  newList.classList.add("data-item");
  newList.textContent = newItem;
  dataListEl.appendChild(newList);
  inputItemEl.value = "";
};

const isListFull = () => {
  const listItems = dataListEl.childNodes.length - 2;
  if (listItems > listLimit) {
    inputItemEl.value = "";
    alert("List is Full.");
    return false;
  } else {
    return true;
  }
};

buttonEl.addEventListener("click", () => {
  const newItem = inputItemEl.value;
  if (newItem.length > 0 && isListFull() && newItem.trim() !== "") {
    addNewItem(newItem);
  }
});

inputItemEl.addEventListener("keypress", (event) => {
  const newItem = inputItemEl.value;
  if (
    newItem.length > 0 &&
    event.keyCode === 13 &&
    isListFull() &&
    newItem.trim() !== ""
  ) {
    addNewItem(newItem);
  }
});
