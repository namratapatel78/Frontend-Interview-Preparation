// Great! Let's explore how var, let, and const behave differently in loops and closures, especially in common interview-style scenarios.

// 🧪 Case 1: Inside a for loop with var
// javascript
// Copy
// Edit
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 100);
// }
// Output:
// Copy
// Edit
// 3
// 3
// 3
// Why?
// var is function-scoped, so the same i is shared across all iterations.

// By the time setTimeout runs, i is already 3.

// ✅ Case 2: Inside a for loop with let
// javascript
// Copy
// Edit
// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 100);
// }
// Output:
// Copy
// Edit
// 0
// 1
// 2
// Why?
// let is block-scoped, and each loop iteration creates a new binding of i.

// Each arrow function "remembers" its own copy of i.

// 💡 Same with const
// javascript
// Copy
// Edit
// for (const i of [10, 20, 30]) {
//   setTimeout(() => console.log(i), 100);
// }
// Output:
// Copy
// Edit
// 10
// 20
// 30
// const is also block-scoped, and i is reassigned each time with a new value from the array.

// Works well with for...of and for...in.

// ⚠️ Bonus: Closures with var
// javascript
// Copy
// Edit
// function createFuncs() {
//   var funcs = [];

//   for (var i = 0; i < 3; i++) {
//     funcs.push(() => console.log(i));
//   }

//   return funcs;
// }

// const funcs = createFuncs();
// funcs[0](); // 3
// funcs[1](); // 3
// funcs[2](); // 3
// Again, all functions share the same i, and it's 3 after the loop ends.

// ✅ Fix it with let:
// javascript
// Copy
// Edit
// function createFuncs() {
//   let funcs = [];

//   for (let i = 0; i < 3; i++) {
//     funcs.push(() => console.log(i));
//   }

//   return funcs;
// }
// Output:
// Copy
// Edit
// 0
// 1
// 2
// 🧠 Takeaways
// Feature	var	let / const
// Scope	Function	Block
// Loop Behavior	Shared variable	New binding each iteration
// Closures	Late-binding problem	Safely captures value per loop