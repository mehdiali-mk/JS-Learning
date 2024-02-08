const apiURL = "https://cat-fact.herokuapp.com/facts";
const factParaEl = document.querySelector(".facts");
const btnFactEl = document.querySelector(".btn");

const randomNumber = () => {
  return Math.floor(Math.random() * 5 + 1);
};

const getData = async () => {
  // console.log("Getting data... Please wait...");
  factParaEl.textContent = "Getting data... Please wait...";
  let response = await fetch(apiURL);
  // console.log(response);
  let data = await response.json();
  factParaEl.textContent = data[randomNumber()].text;
};

btnFactEl.addEventListener("click", getData);

getData();
