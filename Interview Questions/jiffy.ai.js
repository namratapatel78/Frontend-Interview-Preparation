// React

// Component life cycle methods
// React hooks
// State management
// Pure components
// Controlled and Uncontrolled components
// Virtual DOM and Real DOM
// How it compares the difference b/w vitual and real dom, what algo is used
// How to restrict access to some pages for which authentication is required
// Error handling in react

// Event loop
// setTimeout question

// type coersion
console.log("2" + "2" - "2");

// BST question and it's time complexity
// Telephone directory question
// How to manage large data in UI - Lazy loading
// How to redirect from one domain to other domain - set config in nginx
// Types of url routing - browser, hashed etc
// Deep and Shallow copy
// Spread and rest operator
// Higher order components
// polyfills
// Error handling
// Difference b/w normal function and arrow function
// Difference b/w forEach and map
// async await
// ES6 features
// webpack
// How to do force render - changing the key
// server side rendering

// What is proptotype inheritance

// Prototype inheritance question
let f = function () {
  this.a = 1;
  this.b = 2;
};
let o = new f();

f.prototype.b = 3;
f.prototype.c = 4;

console.log(o.a); // 1
console.log(o.b); // 2
console.log(o.c); // 4
console.log(o.d); //  undefined
//

// difference b/w for in and for of
for (let i in "namrata") {
  // gives key
  console.log(i);
}
for (let i of "namrata") {
  // gives value
  console.log(i);
}

for (i in { a: 1, b: 2 }) {
  // gives key
  console.log(i);
}
//

const obj = {
  m1: function () {},
  m2: function () {},
};

// what changes needs to be done in the above obj to achieve the below
obj.m1().m2().m1().m1();

// Answer - this will point to the obj as it's context will the obj with which it is called
const obj = {
  m1: function () {
    return this;
  },
  m2: function () {
    return this;
  },
};
