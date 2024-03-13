// reduce - we can perform operations with these 2 arguments and it will return a single value not an array
// see reverse string example

// example
// const array1 = [1, 2, 3, 4];
// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
// console.log(sumWithInitial);

let items = [
  { name: "Namrata", price: 10 },
  { name: "Merlin", price: 5 },
  { name: "Ankita", price: 15 },
  { name: "Harsha", price: 10 },
];

// total (Accumulator) and item (current value) - 2 arguments
// Evaluates the total price
let reducedValue = items.reduce((total, item) => total + item.price, 0);

console.log(reducedValue); // 40
