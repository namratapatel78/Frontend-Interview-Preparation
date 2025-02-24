// this keyword - https://dmitripavlutin.com/differences-between-arrow-and-regular-functions/

// The this keyword in JavaScript refers to the execution context in which a function is called. Its value depends on how and where the function is invoked.

// if function is called in form of obj.func() -> this = obj
// else -> this = global

// The arrow function doesn't define its own execution context but resolves to the one from the outer function.
// No matter how or where being executed, this value inside of an arrow function always equals this value from the outer function. The arrow function resolves this lexically.

// this value inside the arrow function callback() equals this of the outer function myMethod().

// 1.
var myObject = {
  myFunction: function () {
    console.log(this === myObject); // true
    setTimeout(function () {
      console.log(this === myObject); // false // setTimeout is a standalone function. The this inside the callback function passed to setTimeout no longer refers to myObject.
      console.log(this === global); // true // In a non-strict mode environment, the this inside the setTimeout callback defaults to the global object
    }, 0);
  },
};
myObject.myFunction(); // true, false, true
const myFunction = myObject.myFunction;
myFunction(); // false, false, true
// The function myFunction is now called as a standalone function, not as a method of myObject.
// Since myFunction is invoked as a standalone function, this inside it no longer refers to myObject

// 2.
var myObject = {
  myFunction: function () {
    console.log(this === myObject); // true
    setTimeout(() => {
      console.log(this === myObject); // true // An arrow function does not have its own this. Instead, it inherits this from its lexical scope (the surrounding context where it was defined). Here, the arrow function inside setTimeout inherits the this value from myFunction, which is myObject.
      console.log(this === global); // false
    }, 0);
  },
};
myObject.myFunction();

// 3. this in arrow function
// No matter how or where being executed, this value inside of an arrow function always equals this value from the outer function. In other words, the arrow function resolves this lexically.
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
myFunction2(); // true
myFunction2.call(myObject); // true

// ---------------------------------------------------
// Function declaration vs Function expression

// 1. Function declaration
function method1() {}

// 2. Function expression
var method2 = function () {};
var method2 = function () {} + 1;

// ex - 1
method1(); // works fine because of hoisting
function method1() {
  console.log('hello');
}

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
