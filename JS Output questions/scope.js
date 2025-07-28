function test() {
  if (true) {
    var x = 1; // Variables declared with var are function-scoped
    let y = 2; // Variables declared with let and const are block-scoped
    const z = 3;
  }
  console.log(x);
  console.log(y);
  console.log(z);
}
test();


// ------------------------------------------------------------

{
  console.log(foo);
  let foo = 'hello';
}

{
  console.log(bar);
  const bar = 'world';
}

// Variables declared with let and const are hoisted, but not initialized immediately. This means when the JavaScript engine enters the block scope, it knows about these variables (hoisting), but they are in the Temporal Dead Zone (TDZ) until their declaration line is reached.

// ------------------------------------------------------------

var num = 10;

function foo() {
  var num = 20;
  if (true) {
    var num = 30;
    console.log(num);
  }
  console.log(num);
}
foo();
console.log(num);

// var declarations are function-scoped, not block-scoped.

// ------------------------------------------------------------

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log('var loop:', i), 100);
}

// var is function-scoped, not block-scoped.
// The loop runs synchronously and increments i from 0 to 3.
// Each setTimeout callback refers to the same i variable.
// By the time the timers fire (after approximately 100 ms), the loop has completed and i is 3


for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log('let loop:', j), 100);
}

// let is block-scoped.
// In each iteration, a new separate j binding is created scoped to that iteration.
// Each setTimeout callback closes over the j value of its iteration.

// ------------------------------------------------------------

let a = 10;
(function() {
  console.log(a);
  let a = 20;
})();

// Reference error - a is not defined.

// ------------------------------------------------------------








// ------------------------------------------------------------