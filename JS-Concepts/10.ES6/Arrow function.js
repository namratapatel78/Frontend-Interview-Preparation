// Arrow functions do not have arguments
// https://www.youtube.com/watch?v=E0Pun0iL59c

(x) => x + 2; // return is assumed if single line
// equals
function add(x) {
  return x + 2;
}

// In ES6, we can overwrite this default undefined value with default parameters. For example:
function sayHi(name = "Lydia") {}

// With arrow functions, we don't have to write curly brackets if we just return one value.
// However, if you want to return an object from an arrow function, you have to write it between parentheses,
// otherwise no value gets returned!
