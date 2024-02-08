const apiURL = "https://cat-fact.herokuapp.com/facts";
const factParaEl = document.querySelector(".facts");
const btnFactEl = document.querySelector(".btn");

const randomNumber = () => {
  return Math.floor(Math.random() * 5 + 1);
};

const getData = async () => {
  console.log("Getting data... Please wait...");
  factParaEl.textContent = "Getting data... Please wait...";
  let response = await fetch(apiURL);
  console.log(response);
  let data = await response.json();
  factParaEl.textContent = data[randomNumber()].text;
  // console.log(data);
  // console.log(data[0].text);
  // console.log(data[1].text);
  // console.log(data[2].text);
  // console.log(data[3].text);
  // console.log(data[4].text);
};

btnFactEl.addEventListener("click", getData);

getData();
