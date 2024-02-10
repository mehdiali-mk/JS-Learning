// Get the currency value:
const currencyApiUrl =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/";

// for (let code in countryList) {
//   console.log(code, countryList[code]);
// }

const dropdownOptionEl = document.querySelectorAll("select");
const buttonEl = document.querySelector(".button");
const inputAmountEl = document.querySelector("#amount-input");
const fromCurrencyEl = document.querySelector("#from-option");
const toCurrencyEl = document.querySelector("#to-option");
const resultEl = document.querySelector(".result");

window.addEventListener("load", () => {
  updateExchangeRate();
});

for (let select of dropdownOptionEl) {
  for (let currencyCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currencyCode;
    newOption.value = currencyCode;
    select.append(newOption);
    newOption.classList.add("dropdown-option");

    if (select.name == "from-option" && currencyCode == "USD") {
      newOption.selected = "selected";
    } else if (select.name == "to-option" && currencyCode == "INR") {
      newOption.selected = "selected";
    }
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

const updateFlag = (element) => {
  let countryCode = element.value;
  let currencyCode = countryList[countryCode];
  let imgSrc = `https://flagsapi.com/${currencyCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = imgSrc;
  console.log(countryCode);
};

buttonEl.addEventListener("click", async (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});

const updateExchangeRate = async () => {
  let inputAmountVal = inputAmountEl.value;

  if (inputAmountVal == "") {
    inputAmountVal = 1;
    inputAmountEl.value = 1;
  }
  if (inputAmountVal < 1) {
    inputAmountVal = Math.abs(inputAmountVal);
    inputAmountEl.value = inputAmountVal;
  }
  const URL = `${currencyApiUrl}${fromCurrencyEl.value.toLowerCase()}/${toCurrencyEl.value.toLowerCase()}.json`;

  let response = await fetch(URL);
  let data = await response.json();
  let rate = data[toCurrencyEl.value.toLowerCase()];

  let finalAmount = inputAmountVal * rate;
  finalAmount = Math.round(finalAmount * 100) / 100;
  resultEl.innerText = `${inputAmountVal} ${fromCurrencyEl.value} = ${finalAmount} ${toCurrencyEl.value}`;
};
