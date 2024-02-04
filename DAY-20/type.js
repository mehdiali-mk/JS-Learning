let myNumber = "33";

console.log(typeof myNumber);
console.log(Number(myNumber));
myNumber = Number(myNumber);
console.log(typeof myNumber);

let isBoolean = 1;

console.log(typeof isBoolean);
isBoolean = Boolean(isBoolean);
console.log(typeof isBoolean);
console.log(isBoolean);

let isStudent = "";
console.log(typeof isStudent);
isStudent = Number(isStudent);
console.log(typeof isStudent);
console.log(isStudent);
isStudent = Boolean(isStudent);
console.log(typeof isStudent);
console.log(isStudent);

let add = "1" + 2;
console.log(add);
let sum = 1 + "2";
console.log(sum);
let togather = 1 + 3 + "2";
console.log(togather);
let myNum = "1" + 3 + 4;
console.log(myNum);
