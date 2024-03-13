// use this inside functions

// 1. Function example
function User (name) {
  this.name = name;
  this.sayHi = function() {
    alert(this.name);
  }
}

// Usage:
let user = new User("John");
user.sayHi();



// 1. Class Example - class is also an object
class MyClass {
  // class methods
  constructor() { }
  method1() { }
  method2() { }
  method3() { }
}


// 2. Class Example
class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    alert(this.name);
  }
}

// Usage:
let user = new User("John");
user.sayHi();