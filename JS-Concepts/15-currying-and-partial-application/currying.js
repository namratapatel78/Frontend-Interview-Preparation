// Currying in JavaScript transforms a function with multiple arguments into a nested series of functions, each taking a single argument.

// Benefits:
// It helps us to create a higher-order function
// It reduces the chances of error in our function by dividing it into multiple smaller functions that can handle one responsibility.
// It is very useful in building modular and reusable code
// It helps us to avoid passing the same variable multiple times
// It makes the code more readable

// 1.
const multiply = function (a, b) {
  console.log(a * b);
};

const multiplyByTwo2 = function (a) {
  return (b) => console.log(a * b);
};

// 2. Currying with recursion - single argument
const sum = function (a) {
  return function (b) {
    if (b) {
      return sum(a + b);
    }
    return a;
  };
};

// const sum = (a) => (b) => b ? sum(a + b) : a;

const result = sum(1)(2)(3)(4)();
console.log(result);

// 3. Currying function with multiple arguments
const sumCurry = (...args) => { // [1,2]
  let storage = args; // [1,2]
  if (args.length === 0) {
    return 0;
  }
  const temp = (...args2) => { // [5]
    storage.push(...args2); // storage.push(5)
    if (args2.length === 0) {
      return storage.reduce((a,b) => a+b, 0); // 1,2,3,4, 5
    } else {
      return temp;
    }
  }
  return temp
}


const resultCurry = sumCurry(1,2)(3,4)(5)();
console.log(resultCurry);