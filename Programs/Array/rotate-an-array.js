const array = [1, 2, 3, 4, 5, 6, 7];
// [7654321]
// []
const rotations = 3;

// Solution 1: not efficient
const rotateArray = (arr, rot) => {
  let i=0;
  while(i<rot) {
    const last = arr.pop();
    arr.unshift(last);
    i++;
  }
  return arr;
};
console.log(rotateArray(array, rotations));

// Solution 1: not efficient
var rotate = function(nums, k) {
  for (let i=0; i<k; i++) {
    nums.unshift(nums.pop());
  }
  return nums;
};
console.log(rotate(array, rotations));

// In-place
var rotate = function(nums, k) {
  if (k === 0) {
      return nums;
  }
  const numRev = (start, end) => {
      while (start < end) {
          [nums[start], nums[end]] = [nums[end], nums[start]];
          start++;
          end--;
      }
  };
  k = k%nums.length;
  numRev(0, k-1);
  numRev(k, nums.length-1);
  return nums
};