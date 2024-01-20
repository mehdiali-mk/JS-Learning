// Prompt the user to enter their full name. Generate a username for them based on the input. Start username with @, followed by their full name and ending with the fullname length. eg: user name = “shradhakhapra” , username should be “@shradhakhapra13”.

// let fullName = prompt("Enter your full name.");
// fullName = fullName.trim();

// let userName = `@${fullName}${fullName.length}`;

// document.write(userName);
// console.log(userName);

let marks = [100, 97, 92, 87, 55];

console.log(marks);
console.log(marks[3]);
console.log(marks.length); // .length is a property not a method.
console.log(typeof marks); // arrays have a type of object in JS.

let heroes = ["Ironman", "Captanamerica", "Hulk", "Spiderman"];
console.log(heroes);
console.log(heroes.length);
console.log(heroes[1]);
console.log(heroes[1].length);

console.log(heroes[10]); // It displays undefined.
console.log((heroes[0] = "Mehdiali"));
console.log(heroes);

// Print Heroes using for loop.
console.log("\nUsing for loop.");
for (let i = 0; i < heroes.length; i++) {
  console.log(heroes[i]);
}

// Print Heroes using for of loop.
console.log("\nUsing for of loop.");
for (let element of heroes) {
  console.log(element);
}

// Practice: For a given array with marks of students -> [85, 97, 44, 37, 76, 60]. Find the average marks of the entire class.

let marksOfStudent = [85, 97, 44, 37, 76, 60],
  sum = 0;

for (let marks of marksOfStudent) {
  sum += marks;
}

console.log("\n\nAverage Marks = " + sum / marksOfStudent.length);

// Practice: For a given array with prices of 5 items -> [250, 645, 300, 900, 50]. All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.

let priceOfItems = [250, 645, 300, 900, 50];
let discount = 10;

// Cannot use!!!.
// for (let price of priceOfItems) {
//   price -= (discount * price) / 100;
//   console.log(price);
// }

for (let i = 0; i < priceOfItems.length; i++) {
  priceOfItems[i] -= (discount * priceOfItems[i]) / 100;
}

console.log(priceOfItems);

// Array Methods.

let vegetables = ["Cucumber", "Carrot", "Cabbage", "Tomato"];

console.log(vegetables);
vegetables.push("Potatoes");
console.log(vegetables);
vegetables.push("Bingle", "Spinach", "Pumpkin");
console.log(vegetables);
let deletedVegetable = vegetables.pop();
console.log(vegetables);
console.log("Deleted Vegetable = " + deletedVegetable);

console.log("\n" + vegetables.toString()); // It converts arrays into string.

let class1 = ["Mehdiali", "Aayan", "Man"],
  class2 = ["Meet", "Kazi", "Prince", "Dhruv"],
  class3 = ["Maitrye", "Harnesh"];

let friends = class1.concat(class2, class3); // It joins multiple arrays and return a new array.

console.log(friends);

friends.unshift("Rehan");
console.log(friends);
friends.shift();
console.log(friends);

console.log(friends.slice(2, 4));

let numberList = [1, 2, 3, 4, 5, 6, 7];
numberList.splice(2, 3, 101, 102, 103);
console.log(numberList);

/*
Qs. Create an array to store companies -> “Bloomberg”, “Microsoft”, “Uber”, “Google”, “IBM”, “Netflix”
a. Remove the first company from the array
b. Remove Uber & Add Ola in its place
c. Add Amazon at the end
*/
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(companies);
companies.shift();
console.log(companies);
companies.splice(1, 1, "Ola");
console.log(companies);
companies.push("Amazon");
console.log(companies);
