// Generic curry function
const curry = (fn, ...initialArgs) => {
  let storage = [...initialArgs];

  const temp = (...args) => {
    if (args.length === 0) {
      return fn(...storage);
    } else {
      storage.push(...args);
      return temp;
    }
  };

  return temp;
};

function multiply(a, b, c) {
  return a * b * c;
}

const curriedMultiply = curry(multiply);

console.log(curriedMultiply(2)(3)(4)()); // 24
console.log(curriedMultiply(2, 3)(4)()); // 24