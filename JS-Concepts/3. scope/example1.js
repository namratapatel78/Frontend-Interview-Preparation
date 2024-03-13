// JavaScript Visualizer - https://ui.dev/javascript-visualizer/

// scope - The current context of execution

// Scopes => Global, Function, Block level scope - declared in window object
// Whenever a certain piece of code is running, Scope means what varaible do I have access to.
// scope - where a variable is available in your code

// 1. Global scope => Can be accessed anywhere
// 2. Function scope => Once the function execution is done the variable inside the function will be removed from the memory
// 3. Block level scope => using const and let.
// Once the if block or for loop execution is over the variable inside them will be destroyed or removed from the memory.

function foo() {
  var name = "Namrata";
}

foo();
console.log(name);
