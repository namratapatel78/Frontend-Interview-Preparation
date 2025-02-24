const findPair = (arr, n) => {
  arr.sort((a,b) => a-b);
  let s=0, e=1;
  while (s<arr.length && e<arr.length) {
    const diff = arr[e] - arr[s];
    if (Math.abs(diff) === Math.abs(n)) {
      console.log(true);
      return true;
    } else if (diff < n) {
      e++;
    } else {
      s++;
    }
  }
  console.log(false);
  return false;
}

findPair([6,1,4,10,2,4], 2); // true
findPair([8,6,2,4,1,0,2,5,13],1); // true
findPair([4,-2,3,10],-6); // true
findPair([6,1,4,10,2,4], 22); // false
findPair([], 0); // false
findPair([5,5], 0); // true
findPair([-4,4], -8); // true
findPair([-4,4], 8); // true
findPair([1,3,4,6],-2); // true
findPair([0,1,3,4,6],-2); // true