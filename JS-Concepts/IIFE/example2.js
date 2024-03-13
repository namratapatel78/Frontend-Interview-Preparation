
// Valid IIFE
(function initGameIIFE() {
  // All your magical code to initalize the game!
}());

// Following two are invalid IIFE examples
function nonWorkingIIFE() {
  // Now you know why you need those parentheses around me!
  // Without those parentheses, I am a function definition, not an expression.
  // You will get a syntax error!
}();

function () {
  // You will get a syntax error here as well!
}();