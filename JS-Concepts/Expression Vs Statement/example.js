// https://dev.to/promhize/javascript-in-depth-all-you-need-to-know-about-expressions-statements-and-expression-statements-5k2

// Expression produces a value
// Statements perform actions


// if (expression) 
//   statement 1;
// else 
//   statement 2;


// 1. Expression examples

10;     // Here 10 is an expression that is evaluated to the numeric value 10 by the JS interpreter
10+13;  // This is another expression that is evaluated to produce the numeric value 23
'hello' + 'world'; // evaluates to the string 'hello world'
10 > 9;   // evaluates to boolean value true


// 2. Statements example

// These are all javascript statements:
// if
// if-else
// while
// do-while
// for
// switch
// for-in
// with (deprecated)
// debugger
// variable declaration

const a = 10;

// A function declaration is a statement
function foo (func) {
  return func.name
}
