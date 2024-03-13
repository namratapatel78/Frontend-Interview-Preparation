// type conversion => typecasting or type coercion

// we need to be very carefull by adding the correct type of data
var a = 1, b = '2'; // mistakenly added 2 as string
console.log(a + b); // we will expect 3 but we will get 12

// coercion is power full but it can also be dangerous

// type conversion in two ways
// 1. Explicitly with typecasting
parseInt("123");
let data = 123;
data.toString();

// 2. Implicitly with type coercion as it's dynamically typed language
value = 10;
if (value.length) {
  console.log(value);
}
// if condition expects boolean value but length will be a integer.
// So Js will implicitly convert it to boolean  // 0 -> false, else true

console.log('5' - 5); // 0
console.log('5' + 5); // 55

var i;
console.log(typeof i) // undefined

// document.getElementById('app') will return object if present => object will be converted to string and it's boolean value will be true.
// If Object is not present then it will return false.


console.log(3 > 2 > 1) // true

// left to right
console.log(3 < 2 < 1) // true 
// -> false < 1 -> 0 < 1 -> true
Number(false) // 0
Number(null)  // 0
false == 0 // true
null == 0 // true
"" == 0 // true
"" == false // true
null < 1 // true


// therefore use strict equality check (===), it doesn't do coercion

// Equality comparision table - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
