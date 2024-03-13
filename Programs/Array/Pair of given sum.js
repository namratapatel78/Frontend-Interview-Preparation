let numArr = [5, 8, 3, 4, 2, 6, 1, 2, 10, 7, 9]
var sum = 11;

let sorted = numArr.sort(function(a,b){
  return a-b;
});
let arr = [...new Set(sorted)]
let l = 0;
let r = arr.length - 1;


while (l<r) {
  if (arr[l] + arr[r] > sum) {
    r--;
  } else if (arr[l] + arr[r] < sum) {
    l++;
  } else {
    console.log(arr[l] + ' ' + arr[r]);
    l++
  }
}