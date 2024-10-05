const numArray = [6, 42, 4, 81, 56, 33];
const initialValue = 0;

// reduce
let result = numArray.reduce((acc, cur) => acc + cur);
console.log(result);

// reduce polyfill
Array.prototype.customReduce = function (callback) {
  let result = 0;
  for (let num of this) {
    result = callback(result, num);
  }
  return result;
};

// let result2 = numArray.customMap( num => num +1 );
let result2 = numArray.customReduce(function (acc, cur) {
  return acc + cur;
}, initialValue);
console.log(result2);

// 2.
let items3 = [
  { name: "Namrata", price: 10 },
  { name: "Merlin", price: 5 },
  { name: "Ankita", price: 15 },
  { name: "Harsha", price: 10 },
];

// total (Accumulator) and item (current value) - 2 arguments
// Evaluates the total price
let reducedValue3 = items3.reduce((total, item) => total + item.price, 0);
console.log(reducedValue3); // 40

Array.prototype.myReduce = function (fn, initialValue) {
  let acc = initialValue;
  for (const item of this) {
    acc = fn(acc, item);
  }
  return acc;
};
const reducedValue4 = items3.myReduce((total, item) => total + item.price, 0);
console.log(reducedValue4);

