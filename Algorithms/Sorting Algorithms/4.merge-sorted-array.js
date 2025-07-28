// Time Complexity: O(n + m) -> The while loop runs until all elements from both arrays are processed, i.e., at most n + m iterations.

// Space Complexity: O(n + m) -> we store the merged array in a new array called result, which holds all elements from both input arrays.

const mergeSortedArray = (arr1, arr2) => {
  let i=0, j=0, result = [];
  while (i<arr1.length || j<arr2.length) {
    if (i === arr1.length && j !==  arr2.length) {
      result.push(arr2[j]);
      j++;
    } else if (i !== arr1.length && j ===  arr2.length) {
      result.push(arr1[i]);
      i++;
    } else {
      if (arr1[i] <= arr2[j]) {
        result.push(arr1[i]);
        i++;
      } else if (arr1[i] > arr2[j]) {
        result.push(arr2[j]);
        j++;
      }
    }
  }
  return result;
};

console.log(mergeSortedArray([1,10,50], [2,14,99,100]));