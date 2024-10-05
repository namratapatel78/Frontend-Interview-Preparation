// Sliding window approach

// Solution - O(n)
function maxSubArrayNum(arr, num) {
  if (arr.length < num) return null;
  let maxSum = 0, tempSum = 0;
  for (let i=0; i<num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i=num; i<arr.length; i++) {
    tempSum = tempSum - arr[i-num] + arr[i];
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }
  return maxSum;
}

const result = maxSubArrayNum([2,6,9,2,1,8,5,6,3], 3);
console.log(result);