// JavaScript Visualizer - https://ui.dev/javascript-visualizer/
// Whenever a certain piece of code is running, the value of this is context
// window object is the root scope

// The execution context is created when:
// 1. When JavaScript engine starts interpreting the code - Global Execution context
// 2. When the function is invoked - Function execution context

// 1. GLOBAL EXECUTION CONTEXT

// CREATION PHASE
// Creates a global object called "window".
// Creates an object called "this" which points to the "window" object.
// Sets up memory for variable and function declarations.
// Assign default value to variables as "undefined" and stores the function declaration in memory. This is called Hoisting.

// EXECUTION PHASE
// Assing value to variables

// 2. FUNCTION EXECUTION CONTEXT (creation and execution phase)
// - whenever a function is invoked, a new function execution context will be pushed on the execution stack
// - It will have it's own space for variables and functions
// - Once the function execution is done it will be popped off from the execution stack

// CREATION PHASE
// Create arguments object (arguments - received by function)
// Create "this" object
// Sets up memory for variable and function declarations.

// scope - The current context of execution

// Scope chain lookup:
// If JS engine can't find any variable in current execution context then it will try to find it
// in it's next parent execution context.

// try in console
var a = 1;
a; // 1
window.a; // 1
this.a; // 1

console.log(name);
console.log(title);
console.log(getFullName);

var name = "Namrata";
var title = "Patel";

function getFullName(titleArg) {
  var preText = "Miss";
  return preText + " " + name + " " + titleArg;
}

console.log(getFullName(title));

// Global execution context
//   -> 1. Creation
//   -> 2. Execution
//      -> Function execution context
//         -> 1. Creation
//         -> 2. Execution
