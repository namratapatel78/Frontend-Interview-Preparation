// filter has a condition -> if the item fulfills the condition that item is only pushed to the new array

let numbers = [1,2,3,4,5,6]

let filteredNumbers1 = numbers.filter(num => num>2 && num<5)
let filteredNumbers2 = numbers.filter(num => num%2 === 0)

console.log(filteredNumbers1); // [3,4]
console.log(numbers); // [1,2,3,4,5,6]