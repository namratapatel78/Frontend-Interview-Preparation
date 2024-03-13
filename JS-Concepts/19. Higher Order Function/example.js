// A Higher Order Function is any function that returns a function when executed
// OR takes a function as one or more of its arguments, or both.

// If you have used any of the Array methods like map or filter,
// or passed a callback function to jQuery’s $.get, you have already worked with Higher Order Functions.

// Examples of Higher Order Functions => map(), filter() and reduce()

// 1
function sing(callback) {
  if (callback instanceof Function) {
    callback();
  }
}
function callback() {
  console.log('la la la');
}
sing(callback);

// 2
// function multiplier(factor) {
//   return function (x) {
//     return x * factor;
//   }
// }
function multiplier(factor) {
  return x => x * factor
}
let doubler = multiplier(2);
console.log(doubler(4));

// 3
// When we use Array.map, we provide a function as its only argument,
// which it applies to every element contained in the array.
var arr = [ 1, 2, 3 ];
var arrDoubled = arr.map(function(num) {
  return num * 2;
});
console.log(arrDoubled); // [ 2, 4, 6 ]

