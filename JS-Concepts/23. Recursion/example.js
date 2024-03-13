
var fibo = function fibonacci() {
  fibonacci(); // recursion
  // you can use "fibonacci()" here as this funciton expression has a name.
};

// fibonacci() here fails, but fibo() works.


// Factorial
function factorial(n) {
  if (n === 1) { // base case (terminating scenario)
    return 1;
  }
  else {
    return n * factorial(n-1); // a rule to move along
  }
}
console.log(factorial(3));


// call stack
// factorial(1)
// factorial(2)
// factorial(3)