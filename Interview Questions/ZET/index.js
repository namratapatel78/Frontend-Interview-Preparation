// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].


// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

// const nums = [1,2,3,4];
const nums = [-1,1,0,-3,3];
let answer = [];

let currentPrefix = 1;
for (let i=0; i<nums.length; i++) {
  answer[i] = currentPrefix;
  currentPrefix = answer[i] * nums[i];
}

let currentSuffix = 1;
for (let i=nums.length-1; i>=0; i--) {
  answer[i] = answer[i] * currentSuffix;
  currentSuffix = currentSuffix * nums[i];
}
console.log(answer);



// find the contiguous subarray that has the maximum product

// Input : [-6, 4, -5, 8, -10, 0, 8]
// Output: 1600

// Input : [40, 0, -20, -10]
// Output: 200

// Input : [10]
// Output: 10

const arr = [-6, 4, -5, 8, -10, 0, 8];

let max = nums[0];
let currentMax = nums[0];
let currentMin = nums[0];
for (let i=1;i<nums.length;i++) {
    // given the new number, the new maximun can have 3 conditions
    // 1. number(+) * currentMax(+) is the largest
    // 2. number(+) it self is the largest
    // 3. number(-) * currentMin(-) is the largest
    const options = [nums[i] * currentMax, nums[i], nums[i] * currentMin];
    currentMax = Math.max(...options);
    currentMin = Math.min(...options);

    max = Math.max(max, currentMax);
}
return max;

console.log(max)

// Design for Instagram : Image upload, CDN, user session
// Error handling
// Optimizations: Image
// Scalability
// backend api contract


// How do you handle heavy asynchronous API calls and how do you handle the race condition?
// State Management in large react native application - context api, Redux, Zustand
// How JS Event loop differs from react native event loop and how do you handle the bottlenecks?
// How JS bundlers differs from Metro bundler in react native?
// How to handle Platform specific changes in react native?
