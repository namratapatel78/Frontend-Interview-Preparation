// Q1: Write code to get an array of names from given array of users
const users = [
  { id: 1, name: "Jack", isActive: true, age: 20 },
  { id: 2, name: "John", isActive: true, age: 18 },
  { id: 3, name: "Mike", isActive: false, age: 30 },
];

// Solution 1
// const result = [];
// for (let user of users) {
//    result.push(user.name);
// }

// Solution 2
// const result = [];
// users.forEach(user => result.push(user.name));

// Solution 3
result = users.map((user) => user.name);

console.log(result);

// Q2: Get back only active users

// Solution 1
// const result = [];
// for (let user of users) {
//   if (user.isActive) {
//     result.push(user.name);
//   }
// }

// Solution 2
result = users.filter((user) => user.isActive).map((user) => user.name);

// Q3: Sort users by age descending

// descending
const res = users.sort((a,b) => b.age-a.age);
console.log(res);
result2 = users.filter((user) => user.isActive).map((user) => user.name);
console.log(result2);

// ascending
const res1 = users.sort((a, b) => {
  if (a.age < b.age) {
    return -1;
  } else if (a.age > b.age) {
    return 1;
  }
  return 0;
});
console.log(res1);


// descending
const res2 = users.sort((a, b) => {
  if (a.age < b.age) {
    return 1;
  } else if (a.age > b.age) {
    return -1;
  }
  return 0;
});
console.log(res2);