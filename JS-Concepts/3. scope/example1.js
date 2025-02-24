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


// Explanation:
// Variable Scope:

// In JavaScript, variables declared with var inside a function are scoped to that function. This is called function scope.
// The variable name declared inside the foo function is not accessible outside the function.
// Function Execution:

// When foo() is called, the name variable is created inside the function, assigned the value "Namrata", and then destroyed when the function execution ends. The variable name exists only during the execution of foo.
// Accessing name Outside:

// The console.log(name) statement tries to access name, which is not defined in the outer (global) scope. Hence, a ReferenceError is thrown.