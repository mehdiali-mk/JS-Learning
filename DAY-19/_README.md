# >>==>> DAY - 19.

# Inheritance in JS.

- inheritance is passing down properties & methods from parent class to child class.

class Parent {
}
class Child extends Parent {
}

- \*If Child & Parent have same method, child’s method will be used. [Method Overriding].

# super Keyword.

- The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.

- super( args ) // calls Parent‘s constructor.
- super.parentMethod( args ).

# Error Handling

try-catch
try {
... normal code
} catch ( err ) { //err is error object
... handling error
}
