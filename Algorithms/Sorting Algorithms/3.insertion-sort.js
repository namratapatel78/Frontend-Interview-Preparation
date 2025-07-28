// Time - O(n2), Space - O(1)
// Insertion Sort is a simple sorting algorithm that builds the final sorted array one element at a time. It works by picking each element and inserting it into its correct position in the already sorted part of the array. It’s similar to the way you might sort playing cards in your hand.

// Builds up the sort by gradually creating a larger left portion which is always sorted.

const insertionSort = (arr) => {
  for (var i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    for (var j = i-1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j+1] = arr[j];
    }
    arr[j+1] = currentValue;
    console.log(arr);
  }
  return arr;
};

//                           i
console.log(insertionSort([2,1,9,76,4]));
//                         j