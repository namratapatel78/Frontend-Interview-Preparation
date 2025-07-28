// For sorted array
// Time complexiety
// - Worst and Average - O(log n)
//   For 16 elements worst case it will take 4 steps - log2 (16) = 4
// - Best - O(1)

// Say you have an array of 16 elements.
// Step 1: Check element at index 8 → 16 → 8
// Step 2: Now search 8 → 4
// Step 3: 4 → 2
// Step 4: 2 → 1
// ✅ You found it (or exhausted all options) in 4 steps.

// log2 (16) = 4
// 📈 Time Complexity Notation:
// Binary search: O(log n)

// The base of the logarithm doesn't matter in Big O — log₂(n), log₁₀(n), and ln(n) are all considered the same class: logarithmic growth.

const binarySearch = (arr, num) => {
  let start = 0, end = arr.length-1, mid = Math.floor((start + end)/2);

  while (arr[mid] !== num && start <= end) {
    if (num < arr[mid]) end = mid - 1;
    else start = mid + 1;
    mid = Math.floor((start + end)/2)
  }
  return arr[mid] === num ? mid : -1;
};

//                            m
//                        0 1 2  3  4
console.log(binarySearch([1,3,14,28,30], -10));
//                        s
//                                   e
console.log(binarySearch([1,3,5,6,8,14,28,30], 28));
console.log(binarySearch([1,3,5,6,8,14,28,30], 50));