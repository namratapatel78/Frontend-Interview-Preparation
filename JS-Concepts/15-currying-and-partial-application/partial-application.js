// Partial application function takes a function with multiple parameters and returns a function with fewer parameters
// The returned function is known as the partially applied function.

// Normal function
const sumFourNumbers = (x, w, y, z) => x + w + y + z;
const sum = sumFourNumbers(1, 2, 3, 4);
console.log(sum);

// partial application of normal function
const partiallyAppliedSumFourNumbers = sumFourNumbers.bind(null, 1, 2);
const res1 = partiallyAppliedSumFourNumbers(3, 4);
console.log("partiallyAppliedSumFourNumbers", res1);

const morePartiallyAppliedSumFourNumbers = partiallyAppliedSumFourNumbers.bind(
  null,
  3
);
const res2 = morePartiallyAppliedSumFourNumbers(4);
console.log("morePartiallyAppliedSumFourNumbers", res2);
