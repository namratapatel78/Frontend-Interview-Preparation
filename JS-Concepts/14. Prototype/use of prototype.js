// https://codeburst.io/javascript-prototype-cb29d82b8809
// https://medium.com/better-programming/prototypes-in-javascript-5bba2990e04b

// A Prototype is an object that exists as a property on every function in JavaScript.
// Object does not have prototype property. It has __proto__ property

// Whenever we create any object, JS engine adds the hidden properties and methods in an object and attaches
// it to your original object. This is how you can access to those methods like call and apply in array.

// In JS you will create constructor directly and we can create Object from it
// Every function expression is a constructor

// Example of an array
let arr = [1, 2];
console.log(
  "arr.__proto__ === Array.prototype",
  arr.__proto__,
  Array.prototype,
  arr.__proto__ === Array.prototype
);
console.log(
  "arr.__proto__.__proto__ === Object.prototype",
  arr.__proto__.__proto__,
  Object.prototype,
  arr.__proto__.__proto__ === Object.prototype
);

// end of the chain
console.log(
  "arr.__proto__.__proto__.__proto__ === null",
  arr.__proto__.__proto__.__proto__,
  arr.__proto__.__proto__.__proto__ === null
);

// Example of an function
const fn = function () {};
fn.__proto__ === Function.prototype;
fn.__proto__.__proto__ === Object.prototype;
fn.__proto__.__proto__.__proto__ === null;

// Problem
var x = function (j) {
  // function / constructor
  this.i = 0;
  this.j = j;
  this.getJ = function () {
    return this.j;
  };
};
var x1 = new x(1); // object or instance of x -> it inherits all the properties and methods of x
var x2 = new x(2);
// each object will have it's own method getJ() which is redundent. So the solution is prototype
console.log(x1.getJ(), x2.getJ());

// Solution
// Will take out the method and make it a prototype method
var x = function (j) {
  // function / constructor
  this.i = 0;
  this.j = j;
};

var x1 = new x(1);
var x2 = new x(2);

x.prototype.getJ = function () {
  // getJ method is available to x1 and x2 even if it's not presetnt inside function x
  return this.j;
};

console.log(x1.getJ(), x2.getJ());

// now x1 and x2 does not have it's own method getJ. It is using the getJ method of x
// when we call x1.getJ, it looks up into the prtotype chain into it's parent, finds the method and use it.
// In this way objects are much smaller, we can use the parent's method
