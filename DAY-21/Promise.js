// let promise = new Promise((resolve, reject) => {
//   console.log("I am a promise with resolve");
//   resolve(123);
// });

// console.dir(promise);

// let promise1 = new Promise((resolve, reject) => {
//   console.log("I am a promise with reject");
//   reject("Some error occured!");
// });

// console.log(promise1);

// let promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Promise");
//     resolve(1);
//   }, 2000);
// });

// console.log(promise2);

// promise2.then(() => {
//   console.log("Successfully ran!!");
// });

function getData(dataId, getNewData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Your data is = ", dataId);
      resolve("Data fetched successfully!!");
      if (getNewData) {
        getNewData();
      }
    }, 3000);
  });
}

console.log("\nGetting data 1...");
getData(1).then(() => {
  console.log("\nGetting data 2...");
  getData(2).then(() => {
    console.log("\nGetting data 3...");
    getData(3).then(() => {
      console.log("\nGetting data 4...");
      getData(4).then((result) => {
        console.log("\n", result);
      });
    });
  });
});

// getData(1)
//   .then(() => {
//     console.log("\nGetting data 2...");
//     return getData(2);
//   })
//   .then(() => {
//     console.log("\nGetting data 3...");
//     return getData(3);
//   })
//   .then(() => {
//     console.log("\nGetting data 4...");
//     return getData(4);
//   });
