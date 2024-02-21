const newUser = {
  email: "mehdialikadiwala@gmail.com",
  name: {
    fullName: {
      userFullName: {
        firstName: "Mehdiali",
        lastName: "Kadiwala",
      },
    },
  },
};

console.log(newUser.name.fullName.userFullName.firstName);
console.log(newUser.name.fullName.userFullName.lastName);

const grocery1 = {
  vegetables: ["Tomato", "Potato", "Cabbage", "Pumpkin"],
  drinks: ["Coco-cola", "ThumbsUP", "Pepsi", "String", "Red Bull"],
};
const grocery2 = {
  fruits: ["Mango", "Strawberry", "Banana", "Apples", "Grapes"],
  dairyProducts: ["Paneer", "Yogurt", "Milk", "Butter", "Cream"],
};
const allGrocery = Object.assign({}, grocery1, grocery2);

console.log(allGrocery);
