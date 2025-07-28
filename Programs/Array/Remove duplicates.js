let arr = [1, 2, 4, 1, 1, 2, 3, 4];
//                           i
// let sortedArr = [1, 2, 3, 4, 2, 2, 3, 4, 4];
//                                          j

// 1 IMP
let uniq = [...new Set(arr)];
console.log(unique);

// 2
let uniqueArray = arr.filter(function (item, index) {
  console.log(arr.indexOf(item) + " " + index + " " + item);
  return arr.indexOf(item) == index;
});

console.log(uniqueArray);

// 3
function removeDuplicatesInPlace(arr) {
  // Sort the array
  arr.sort((a, b) => a - b);

  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    // If current element is different from previous element, copy it to next available position
    if (arr[j] !== arr[i]) {
      i++;
      arr[i] = arr[j];
    }
  }

  // Remove extra elements from the end of the array
  arr.length = i + 1;

  return arr;
}

// Example usage:
const array = [1, 2, 3, 3, 4, 5, 5];
removeDuplicatesInPlace(array);
console.log(array); // Output: [1, 2, 3, 4, 5]
