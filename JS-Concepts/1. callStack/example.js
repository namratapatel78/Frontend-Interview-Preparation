// call stack is a data structure which records where in the program we are

// The call stack is used by JavaScript to keep track of multiple function calls.
// It is like a real stack in data structures where data can be pushed and popped and follows the
// Last In First Out (LIFO) principle. We use call stack for memorizing which function is running right now.

// How much memory is in the stack?
// It depends on your operating system. On Windows, the typical maximum size for a stack is 1MB,
// whereas it is 8MB on a typical modern Linux,

// maximum call stack size is 16000 frames

function baz() {
  bar();
}
function bar() {
  foo();
}
function foo() {
  throw new Error("Oops"); // It prints the stack trace
}

baz();
