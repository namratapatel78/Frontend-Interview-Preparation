
// Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true
// Restrictions:

// Time - O(n)

// Space - O(n)

// Bonus:

// Time - O(n log n)

// Space - O(1)

// Frequency counter approach
// O(n)
function areThereDuplicates(...args) {
  const obj = {};
  for (let val of args) {
    obj[val] = obj[val] + 1 || 1;
  }
  for (let data of Object.entries(obj)) {
    if (data[1] > 1) {
      return true;
    }
  }
  return false;
}
const result = areThereDuplicates('a', 'b', 'c', 'a');
console.log(result);

// Multiple pointers approach
function areThereDuplicates(...args) {
  args.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });

  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

// One Liner Solution
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}
