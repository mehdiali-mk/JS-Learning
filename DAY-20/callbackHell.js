function getData(data, callbackData) {
  setTimeout(() => {
    console.log(data);
    if (callbackData) {
      callbackData();
    }
  }, 2000);
}

getData(1, () => {
  setTimeout(() => {
    console.log("Getting data 2...");
  }, 500);
  getData(2, () => {
    setTimeout(() => {
      console.log("Getting data 3...");
    }, 500);
    getData(3, () => {
      setTimeout(() => {
        console.log("Getting data 4...");
      }, 500);
      getData(4, () => {
        setTimeout(() => {
          console.log("Getting data 5...");
        }, 500);
        getData(5);
      });
    });
  });
});
