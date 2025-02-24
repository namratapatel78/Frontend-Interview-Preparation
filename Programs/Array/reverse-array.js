function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) { // 0 < 4
      // Swap the elements
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
  }
}

// Example usage:
let array = [1, 2, 3, 4, 5];
reverseArray(array);
console.log(array); // Output: [5, 4, 3, 2, 1]