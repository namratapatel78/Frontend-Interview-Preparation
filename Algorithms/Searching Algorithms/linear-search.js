// For unsorted array
// Time complexiety - O(n)

const linearSearch = (arr, num) => {
  for (let i=0; i<arr.length; i++) {
    if (arr[i] === num) return i;
  }
  return -1;
};

console.log(binarySearch([1,3,14,28,30], -10));
console.log(binarySearch([1,3,5,6,8,14,28,30], 28));
console.log(binarySearch([1,3,5,6,8,14,28,30], 50));