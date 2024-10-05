// 1.
const addNumbers = (n) => {
  var total = 0; // assignment = 1
  for (var i=1; i<n; i++) { // assignment = 1
    total += i;
  }
  return total;
}

// count operations
var total = 0; // assignment = 1
var i = 1; // assignment = 1
i<n // comparison = n
i++ // i = i + 1 // assignment = n, increment = n
total += 1 // total = total + 1 // assignment = n, increment = n

// result = 5n + 2
// => proportional to n
// Time => O(n)
// Space => O(1) // total, i


// 2.
const addNumbers2 = (n) => {
  return n * (n+1) / 2;
};
// *, +, / => 3 operations => O(1)