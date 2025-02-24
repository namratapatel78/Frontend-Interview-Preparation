// First
// - primitive type
var w = "apple";
var x = "apple";
console.log(w == x); // true

// - reference type
var y = { title: "apple" };
var z = { title: "apple" };
console.log(y == z); // false

// Second
let number = 10;
function increase(number) {
  number++;
}
increase(number);
console.log(number); // 10

// Explanation:
// The variable number is initialized with the value 10.
// The function increase takes a parameter number. Inside the function, the parameter is incremented (number++). However, this increment only affects the local copy of the parameter within the function, not the variable number outside the function.
// In JavaScript, primitive values (like numbers, strings, booleans, etc.) are passed to functions by value. This means that a copy of the value is passed to the function, and any changes to the parameter inside the function do not affect the original variable.
// After calling increase(number), the number outside the function remains unchanged.
// console.log(number) logs the original value, 10.

// Third
let obj = { value: 10 };

function increase(obj) {
  obj.value++;
}

increase(obj);
console.log(obj); //  { value: 11 }

// Explanation:
// Object Initialization:

// The variable obj is assigned an object with a property value set to 10.
// Function Definition:

// The increase function takes an object (obj) as a parameter. Inside the function, it increments the value property of the object by 1.
// Objects are Passed by Reference:

// In JavaScript, when an object is passed to a function, it is passed by reference. This means the function receives a reference (or pointer) to the same object in memory, not a copy of the object.
// Function Call (increase(obj)):

// When increase(obj) is called, the function has access to the same object that obj refers to.
// Inside the function, obj.value++ increases the value property of the object from 10 to 11.
// Console Output:

// After the function call, the original obj reflects the change because the function modified the same object in memory. When console.log(obj) is executed, it logs { value: 11 }.
