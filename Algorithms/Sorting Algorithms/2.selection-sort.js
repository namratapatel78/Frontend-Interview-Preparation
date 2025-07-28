// Time - O(n2), Space - O(1)
// Selection sort is a simple sorting algorithm that works by repeatedly finding the smallest (or largest) element from the unsorted part of the array and swapping it with the first unsorted element. It has a time complexity of O(n²) and is not very efficient for large datasets, but it's easy to understand and implement.

const selectionSort = (arr) => {
  let index;
  for (let i = 0; i < arr.length; i++) {
    index = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[index]) {
        index = j;
      }
    }
    if (arr[index] !== arr[i]) {
      [arr[i], arr[index]] = [arr[index], arr[i]];
    }
  }
  return arr;
};

//                             m
//                         0   1  2   3   4   5
console.log(selectionSort([5, 44, 38, 19, 47, 15]));
//                             i
//
