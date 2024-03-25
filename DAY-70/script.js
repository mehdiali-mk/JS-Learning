const bookTitleEl = document.querySelector("#book-title");
const bookAuthorEl = document.querySelector("#book-author");
const bookPublishEl = document.querySelector("#book-publish");
const addNewBookEl = document.querySelector(".button");
const tableBodyEl = document.querySelector("tbody");

addNewBookEl.addEventListener("click", addNewBook);

function addNewBook() {
  if (
    bookTitleEl.value == "" ||
    bookAuthorEl.value == "" ||
    bookPublishEl.value == ""
  ) {
    validateTextBox();
  } else {
    bookTitleEl.classList.remove("required-text");
    bookAuthorEl.classList.remove("required-text");
    bookPublishEl.classList.remove("required-text");

    const trEl = document.createElement("tr");
    const tdTitleEl = document.createElement("td");
    const tdAuthorEl = document.createElement("td");
    const tdPublishEl = document.createElement("td");

    tdTitleEl.textContent = bookTitleEl.value;
    tdAuthorEl.textContent = bookAuthorEl.value;
    tdPublishEl.textContent = bookPublishEl.value;

    trEl.appendChild(tdTitleEl);
    trEl.appendChild(tdAuthorEl);
    trEl.appendChild(tdPublishEl);
    tableBodyEl.appendChild(trEl);

    clearInput();
  }
}

function validateTextBox() {
  alert("Please enter required values.");
  if (bookTitleEl.value == "") {
    bookTitleEl.focus();
    bookTitleEl.classList.add("required-text");
  } else if (bookAuthorEl.value == "") {
    bookAuthorEl.focus();
    bookTitleEl.classList.remove("required-text");
    bookAuthorEl.classList.add("required-text");
  } else if (bookPublishEl.value == "") {
    bookPublishEl.focus();
    bookTitleEl.classList.remove("required-text");
    bookAuthorEl.classList.remove("required-text");
    bookPublishEl.classList.add("required-text");
  } else {
    bookTitleEl.classList.remove("required-text");
    bookAuthorEl.classList.remove("required-text");
    bookPublishEl.classList.remove("required-text");
  }
}

function clearInput() {
  bookTitleEl.value = "";
  bookAuthorEl.value = "";
  bookPublishEl.value = "";
  bookTitleEl.focus();
}
