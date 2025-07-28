// var
// Scope: Function-scoped
// (Available throughout the entire function in which it is declared)
// Hoisting: Yes (hoisted to the top of its scope, initialized as undefined)
// Re-declaration: Allowed within the same scope
// Usage: Considered outdated; avoid in modern code

// ✅ var is Function Scoped, not Block Scoped
// What this means is:
// If you declare a var inside a function, it is scoped to the entire function.
// If you declare a var outside any function, it becomes a global variable — but this doesn’t mean it has “global scope” in all contexts.

function test() {
  console.log(x); // undefined (due to hoisting)
  var x = 5;
}

function test() {
  if (true) {
    var x = 10;
  }
  console.log(x); // ✅ 10 (accessible outside the block)
}
// Even though x is declared inside an if block, it's still available throughout the entire function — because var is function-scoped.

var a = 100;
console.log(window.a); // ✅ 100 in browsers


// 🔥 Why Not Call var Global-Scoped?
// Because:

// Inside a function, var doesn’t escape the function — so it’s not globally accessible.

// That’s why we say:
// 🟢 var is function-scoped
// 🔴 NOT block-scoped (like let/const), and
// 🔴 Not always globally-scoped either.




// let
// Scope: Block-scoped
// (Available only within the {} block where it is declared)

// let variables are hoisted to the top of the block.
// But unlike var, they're not initialized during hoisting.
// They stay in the Temporal Dead Zone from the start of the block until their declaration line is executed.

// Hoisting: Yes, but not initialized—Temporal Dead Zone (TDZ) applies
// Re-declaration: Not allowed within the same block
// Usage: Use when the value of the variable may change later
{
  let x = 10;
  // x is only accessible here
}



// const
// Scope: Block-scoped (same as let)
// Hoisting: Yes, but in TDZ (same as let)
// Re-declaration: Not allowed in the same scope
// Re-assignment: ❌ Not allowed (the binding is constant)
// Mutability: For objects/arrays, internal properties can change
const x = 42;
x = 100; // ❌ Error

const arr = [1, 2];
arr.push(3); // ✅ Allowed — the array itself is mutable