const arr = [5, 5, 6, 3, 10, 2, 9];

// Without using sort function
const findElement1 = (arr, n) => {
  const sort = (arr) => {
    for (let i=0; i<arr.length; i++) {
      for (let j=i+1; j<arr.length; j++) {
        if (arr[j] > arr[i]) {
          temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
    return arr;
  }
  const sortedArray = sort(arr);
  return sortedArray[n-1];
}

// Using sort function
const findElement2 = (arr, n) => {
  const sortedArray = arr.sort((a,b) => b-a);
  return sortedArray[n-1];
  // const uniqueSortedArr = Array.from(new Set(arr)).sort((a, b) => b - a);
  // return uniqueSortedArr[n-1];
}

console.log(findElement1(arr, 4));
console.log(findElement2(arr, 4));