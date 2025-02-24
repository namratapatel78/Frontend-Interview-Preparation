// Multiple Pointers - countUniqueValues
// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4
// Time Complexity - O(n)

// Space Complexity - O(n)

// Bonus

// You must do this with constant or O(1) space and O(n) time.

// Easy
function countUniqueValues(arr) {
  if (arr.length === 0) return 0; // If the array is empty, return 0

  let uniqueCount = 1; // Start with the first element as unique
  let i = 1; // Start from the second element

  // Iterate through the array
  while (i < arr.length) {
      if (arr[i] !== arr[i - 1]) {
          uniqueCount++; // Found a new unique value
      }
      i++; // Move to the next element
  }

  console.log(uniqueCount); // Return the count of unique values
}

// X
function countUniqueValues(arr) {
  if (arr.length < 2) {
    return arr.length;
  }
  let i = 0, j = 1;
  while(j<arr.length) {
     if (arr[i] === arr[j]) {
       j++;
     } else {
       if (i+1 !== j) {
         i++;
         arr[i] = arr[j];
         j++;
       } else {
         i++;
         j++;
       }
     }
  }
  return arr.slice(0,i+1).length;
}