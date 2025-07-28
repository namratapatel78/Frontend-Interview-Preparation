// Time: O(n log n) -> n (comparisions per decomposition)
// Space: O(n)

const mergeSort = (arr) => {

  // O(n)
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

  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length/2);
  let left = mergeSort(arr.slice(0,mid));
  let right = mergeSort(arr.slice(mid));
  return mergeSortedArray(left, right);
}

console.log(mergeSort([24,10,76,73]));

// 3 times split is required when the array size is 8
// arrSize = 8, splits = 3 => log2 8 = 3
// arrSize = 32, splits = 5 => log2 32 = 5