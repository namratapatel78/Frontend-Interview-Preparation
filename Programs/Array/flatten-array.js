// https://leetcode.com/problems/flatten-deeply-nested-array/

/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
  let result = arr;
  if (n === 0) {
    return result;
  }
  const flatten = (arr) => {
    const res = [];
    for (let ele of arr) {
      if (Array.isArray(ele)) {
        res.push(...ele);
      } else {
        res.push(ele);
      }
    }
    return res;
  }
  for (let i=0; i<n; i++) {
    result = flatten(result);
  }
  return result;
};

arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
const result = flat(arr, 1);
console.log(result);

// ------------------------------------------------------------------------------------------------

var flat = function (arr) {
  let result = arr;

  const flatten = (arr2) => {
    const res = [];
    for (let ele of arr2) {
      if (Array.isArray(ele)) {
         res.push(...ele);
      } else {
        res.push(ele);
      }
    }
    return res;
  }

  while (result.some(Array.isArray)) {
    result = flatten(result);
  }

  return result;
};

arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
const result2 = flat(arr, 1);
