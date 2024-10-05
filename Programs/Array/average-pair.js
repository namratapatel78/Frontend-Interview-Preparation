// Multiple Pointers - averagePair
// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

// Bonus Constraints:

// Time: O(N)

// Space: O(1)

function averagePair(arr, num){
  if (arr.length === 0) {
    return false;
  }
  let i = 0, j = arr.length-1;
  while (i < j) {
    let avg = (arr[i] + arr[j])/2;
    if (avg === num) {
      return true;
    } else if (avg < num) {
      i++;
    } else {
      j--;
    }
  }
  return false;
}

averagePair([1,2,3],2.5)
averagePair([1,3,3,5,6,7,10,12,19],8)
averagePair([-1,0,3,4,5,6], 4.1)
averagePair([],4)