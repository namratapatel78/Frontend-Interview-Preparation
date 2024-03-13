// map invokes a function for every element in an array

let numbers = [1,2,3,4,5,6];
let multiplyByTwo = numbers.map(number => number * 2); // map method gets invoked for every value in the array
console.log(multiplyByTwo); // [2,4,6,8,10,12]
console.log(numbers); // [1,2,3,4,5,6] - doesn't modify the original array

let team = [
  {
    name: 'Namrata',
    age: 26
  },
  {
    name: 'Ankita',
    age: 27
  }
]
team.map(teamMember => teamMember.age += 10)
console.log(team); // original array doesn't get modified, but object within array gets modified