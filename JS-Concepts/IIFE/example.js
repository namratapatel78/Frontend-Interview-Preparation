// Immediately Invoked Function Expression () - is a JS function which runs as soon as it's defined
// the key to IIFE pattern is taking a function and turning it into an expression and executing it immediately.

// This function has no name and it's not stored in a variable.
// The first enclosing paranthesis () makes the function an expression.
// And the last parenthesis invokes this anonymous function immediately.
// Hence the name "Immediately invoked function expression".

// first
(function () {   // anonymous function - does not have the name following the "function" keyword
  console.log("My fav number is 3");
})();

(function() {
  alert("I am an IIFE!");
}());

void function() {
  alert("Hello from IIFE!");
}();

!function() {
  alert("My fav number is 3");
}();

// As we saw before, a function statement always starts with the function keyword.
// Whenever JavaScript sees function keyword as the first word in a valid statement, 
// it expects that a function definition is going to take place. 
// So to stop this from happening, we are prefixing “!” in-front of the function keyword on line 1.
// This basically enforces JavaScript to treat whatever that’s coming after “!” as an expression.
// But the most interesting stuff happens on line 3 where we execute that function expression immediately.

// The above stylistic variation can be used by replacing “!” with “+”, “-”, or even “~” as well.
// Basically any unary operator can be used.
// All that the first character, “!”, is doing here is to make that function into an expression instead of a function statement/definition.
// And then we execute that function immediately.

// That’s a function that died immediately after it came to life.


// second
(favNumber = function (num = 3) {  // Named IIFE with arguments
  console.log("My fav number is "+ num);   // "My fav number is 3"
})();
favNumber();  // "My fav number is 3"


// third
var a = 2;
(function () {
  var a = 3;
  console.log(a); // 3
})();
console.log(a); // 2


// fourth
let b = 2;
{           // Block scope
  let b = 3;
  console.log(b);  // 3
}
console.log(b); // 2


var result = (function() {
  return "From IIFE";
}());
alert(result);


(function IIFE(msg, times) {
  for (var i = 1; i <= times; i++) {
      console.log(msg);
  }
}("Hello!", 5));


// Learn more
(function($, global, document) {
  // use $ for jQuery, global for window
}(jQuery, window, document));


