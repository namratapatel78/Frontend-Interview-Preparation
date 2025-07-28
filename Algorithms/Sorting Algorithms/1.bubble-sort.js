// Time - O(n2), Space - O(1)
// Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. This process continues until the list is sorted, with larger elements "bubbling" to the top (end of the array) on each pass.

const bubbleSort = (arr) => {
  let noSwaps;
  for (let i=arr.length-1; i>0; i--) { // 4
    noSwaps = true;
    for (let j=0; j<i; j++) {
      console.log(arr, arr[j], arr[j+1]);
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        noSwaps = false;
      }
    }
    console.log('ONE PASS COMPLETED');
    if (noSwaps) break; // Will avoid un necessary looping when swaping is not required and array is already sorted
  }
  return arr;
};

//                                     i
console.log(bubbleSort([37, 45, 29, 8, 12]));
//                      j