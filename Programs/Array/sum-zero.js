// Multiple Pointers method
// Return the array of two numbers from the sorted array whose sum is 0

function sumZero(arr) {
  let i = 0;
  let j = arr.length-1;
  while (i<j) {
    if (arr[i] + arr[j] === 0) {
      return [arr[i], arr[j]];
    } else if (arr[i] + arr[j] > 0) {
      j--;
    } else {
      i++;
    }
  }
}

const result = sumZero([-3,-2,-1,0,1,2,3,5]);
console.log(result);