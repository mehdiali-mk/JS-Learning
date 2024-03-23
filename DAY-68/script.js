const resultEl = document.querySelector("#result");
const filterEl = document.querySelector("#filter");
const listItems = [];

// Color Toggler
const switchEl = document.querySelector("#switch");
const backgroundEl = document.querySelector(".background");
const headerEl = document.querySelector(".header");
const userListEl = document.querySelector(".user-list");

switchEl.addEventListener("click", () => {
  if (switchEl.checked === true) {
    backgroundEl.style.backgroundColor = "var(--dark-color)";
    headerEl.style.backgroundColor = "var(--active-color)";
    headerEl.style.color = "var(--dark-color)";
    userListEl.style.backgroundColor = "var(--dark-color)";
    userListEl.style.borderColor = "var(--active-color)";
    userListEl.style.color = "var(--background)";
    filterEl.style.backgroundColor = "var(--dark-color)";
    filterEl.style.color = "var(--background)";
  } else {
    backgroundEl.style.backgroundColor = "var(--background)";
    headerEl.style.backgroundColor = "var(--dark-color)";
    headerEl.style.color = "var(--background)";
    userListEl.style.backgroundColor = "var(--background)";
    userListEl.style.borderColor = "var(--dark-color)";
    userListEl.style.color = "var(--dark-color)";
    filterEl.style.backgroundColor = "var(--background)";
    filterEl.style.color = "var(--dark-color)";
  }
});

getData();

filterEl.addEventListener("input", (e) => filterData(e.target.value));

async function getData() {
  const res = await fetch("https://randomuser.me/api?results=50");
  console.log(res);
  const response = await res.json();

  resultEl.innerHTML = "";
  console.log(response);
  response.results.forEach((user) => {
    const li = document.createElement("li");
    listItems.push(li);

    li.innerHTML = `
          <img src="${user.picture.large}" alt="${user.name.first}" />
          <div class="user-info">
              <h4>${user.name.first} ${user.name.last}</h4>
              <p>${user.location.city}, ${user.location.country}</p>
          </div>
      `;

    resultEl.appendChild(li);
  });
}

console.log(listItems);

function filterData(searchItem) {
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchItem.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}
