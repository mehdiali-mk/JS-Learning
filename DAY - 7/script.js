// For each loop.
let arrNumber = [1, 2, 3, 4, 5];

arrNumber.forEach(function printValues(value) {
  console.log(value);
});

let arrCity = ["Ahmedabad", "Mumbai", "Bangalore", "Pune"];

arrCity.forEach((value, index, arr) => {
  arr[index] = arr[index].toUpperCase();
  console.log(value, index, arr);
});

// Qs. For a given array of numbers, print the square of each value using the forEach loop.
let array1 = [1, 2, 3, 4, 5];

array1.forEach((value) => {
  console.log(value * value);
});

// Map
let array2 = array1.map((value) => {
  return value * value;
});
console.log(array2);

// Filter.

let array3 = [1, 2, 3, 4, 5];

let evenArray3 = array3.filter((value) => {
  return value % 2 === 0;
});

console.log(evenArray3);

// Reduce.
let sum = array3.reduce((prev, curr) => {
  return prev + curr;
});

console.log(sum);

// We are given array of marks of students. Filter our of the marks of students that scored 90+.

let marksArray = [40, 30, 90, 95, 92, 89, 20, 24, 38, 96, 100];

let marksAbove90 = marksArray.filter((value) => {
  return value >= 90;
});

console.log(marksAbove90);

// Qs. Take a number n as input from user. Create an array of numbers from 1 to n. Use the reduce method to calculate sum of all numbers in the array. Use the reduce method to calculate product of all numbers in the array.

let number = 5;

let arrNumber1 = [];

for (let i = 1; i <= number; i++) {
  arrNumber1.push(i);
}

console.log(arrNumber1);

let sumOfArray = arrNumber1.reduce((prev, curr) => {
  return prev + curr;
});

let productOfArray = arrNumber1.reduce((prev, curr) => {
  return prev * curr;
});

console.log(sumOfArray);
console.log(productOfArray);
