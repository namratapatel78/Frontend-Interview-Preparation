// https://leetcode.com/problems/next-greater-element-i/description/

function nextGreaterElement(findNums, nums) {
  const map = {};
  const stack = [];

  // Build the map of next greater elements for all nums in nums
  for (let num of nums) {
      while (stack.length && stack[stack.length - 1] < num) {
          map[stack.pop()] = num;
      }
      stack.push(num);
  }

  // Map to -1 if there is no next greater element
  while (stack.length) {
      map[stack.pop()] = -1;
  }

  // Resolve result for findNums
  return findNums.map(num => map[num]);
}

// Example usage:
const findNums = [4, 1, 2];
const nums = [1, 3, 4, 2];
console.log(nextGreaterElement(findNums, nums)); // Output: [-1, 3, -1]
