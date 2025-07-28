// 🔄 What is Hoisting?
// Hoisting means that variable declarations (not their initializations) are moved to the top of their scope during the compile phase, before code is executed.

// All variables declared with var, let, or const are hoisted — but how they behave after hoisting differs.

// 🧠 Why let is hoisted but not initialized?
// Variables declared with let are hoisted, but they are not accessible before the declaration line in code. This time period is called the Temporal Dead Zone (TDZ).

// 🔍 Temporal Dead Zone (TDZ)
// The TDZ is the phase from the start of the block until the let or const variable is declared. During this time, accessing the variable results in a ReferenceError.

{
  console.log(a); // ❌ ReferenceError: Cannot access 'a' before initialization
  let a = 10;
}
// Why? Because:

// JavaScript reserves memory for a at the start of the block (hoisting).

// But it doesn’t initialize a until it reaches the let a = 10 line.

// Any access before initialization is invalid → TDZ error.

// 🆚 Contrast with var
{
  console.log(b); // ✅ undefined (no error)
  var b = 10;
}
// var is also hoisted and initialized to undefined, which is why it doesn't throw an error.

// 🔒 Why does JS behave this way?
// To help catch bugs early:

// let and const were introduced in ES6 to enforce block scoping and reduce mistakes.

// TDZ ensures that variables are not used before they're intentionally initialized.

// ✅ Summary
// Feature	var	let / const
// Hoisted	Yes	Yes
// Initialized	To undefined	❌ No (stays uninitialized in TDZ)
// Accessible before declaration	Yes	❌ No (ReferenceError)


// Imp example hoisting

var foo = 'Hello';

function alertHello() {
	console.log(foo);  // undefined
  var foo = 'Hiee';
  console.log(foo);  // Hiee
}

alertHello();

// It scans the entire function block for variable.
// Then It creates an entry for var foo as undefined before we execute that code => Hoisting
// foo = 'Hello' is defined globally but in function block foo = undefined will be there





