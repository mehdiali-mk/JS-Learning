const apiURL = "https://cat-fact.herokuapp.com/facts";

const getData = async () => {
  console.log("Getting data... Please wait...");
  let response = await fetch(apiURL);
  console.log(response);
  let data = await response.json();
  console.log(data);
  console.log(data[0].text);
  console.log(data[1].text);
  console.log(data[2].text);
  console.log(data[3].text);
  console.log(data[4].text);
};

getData();
