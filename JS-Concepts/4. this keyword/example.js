// this keyword - https://dmitripavlutin.com/differences-between-arrow-and-regular-functions/
// if function is called in form of obj.func() -> this = obj
// else -> this = global


// The arrow function does not have it's own execution context but it resolves to the one from the outer function.
// The arrow function resolves this lexically
// this value inside the arrow function callback() equals this of the outer function myMethod().

// 1.
var myObject = {
  myFunction: function () {
    console.log(this === myObject); // true
    setTimeout(function () {
      console.log(this === myObject); // false
      console.log(this === global); // true
    }, 0);
  },
};
myObject.myFunction(); // true, false, true
const myFunction = myObject.myFunction;
myFunction(); // false, false, true

// 2.
var myObject = {
  myFunction: function () {
    console.log(this === myObject); // true
    setTimeout(() => {
      console.log(this === myObject); // true
      console.log(this === global); // false
    }, 0);
  },
};
myObject.myFunction();

// 3. this in arrow function
// No matter how or where being executed, this value inside of an arrow function always equals this value
// from the outer function. In other words, the arrow function resolves this lexically.
const myObject = {
  myMethod(items) {
    console.log(this); // logs myObject
    const callback = () => {
      console.log(this); // logs myObject
    };
    items.forEach(callback);
  },
};
myObject.myMethod([1, 2, 3]);

// 4. call apply and bind doesn't have amy impact in arrow function
const myObject = {};
const myFunction2 = () => {
  console.log(this === global);
};
myFunction2(); // false
myFunction2.call(myObject); // false

// ---------------------------------------------------
// Function declaration vs Function expression

// 1. Function declaration
function method1() {}

// 2. Function expression
var method2 = function () {};
var method2 = function () {} + 1;

// ex - 1
method1(); // works fine because of hoisting
function method1() {}

// ex - 2
method2(); // TypeError undefined is not a function
var method2 = function () {};

// 3. Named function expression
var method2 = function method3() {
  method2();
  method3();
};
method2();
method3(); // reference error
