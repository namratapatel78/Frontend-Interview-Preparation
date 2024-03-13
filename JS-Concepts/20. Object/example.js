// 1 - With a for-in loop, we can iterate through object keys
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}
// expected output:
// "a: 1"
// "b: 2"
// "c: 3"

console.log('a' in object) // checks if the key named 'a' is present


// 2
const myLifeSummedUp = ['☕', '💻', '🍷', '🍫'];

for (let item in myLifeSummedUp) {
  console.log(item);
}

for (let item of myLifeSummedUp) {
  console.log(item);
}

// output
// 0 1 2 3 and "☕" "💻" "🍷" "🍫"


// 3
const person = {
  name: 'Lydia',
  age: 21,
};

for (const [x, y] of Object.entries(person)) {
  console.log(x, y);
}

// Object.entries(person) returns an array of nested arrays, containing the keys and objects:
// [ [ 'name', 'Lydia' ], [ 'age', 21 ] ]