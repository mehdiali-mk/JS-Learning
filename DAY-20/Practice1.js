// Qs. You are creating a website for your college. Create a class User with 2 properties, name & email. It also has a method called viewData( ) that allows user to view website data.

class user {
  constructor(fullName, email) {
    this.name = fullName;
    this.email = email;
  }

  viewData() {
    console.log("\nYou can view data.");
    console.log("Name: ", this.name);
    console.log("Email: ", this.email);
  }
}

class admin extends user {
  editData(fullName, email) {
    this.name = fullName;
    this.email = email;
  }
}

const student1 = new user("Mehdiali", "mehdialikadiwala@gmail.com");
const admin1 = new admin("Ahesanali", "ahesan.agk@gmail.com");

student1.viewData();
admin1.viewData();
admin1.editData("Mehdiali", "mehdialikadiwala@gmail.com");
admin1.viewData();

const id = Symbol("123");
const anotherID = Symbol("123");

console.log(id);
console.log(anotherID);
console.log(id == anotherID);
