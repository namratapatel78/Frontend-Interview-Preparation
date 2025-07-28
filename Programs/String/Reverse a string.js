// Without using array
const str = 'I am Namrata '
let revStr = ''
let index = str.length - 1

while (index > -1) {
  revStr += str[index]
  --index
}

console.log(revStr);


// ------------------------------------------------------------

function reverseInPlace(strArr) {
  let left = 0;
  let right = strArr.length - 1;

  while (left < right) {
    // Swap characters
    [strArr[left], strArr[right]] = [strArr[right], strArr[left]];
    left++;
    right--;
  }
}

const str2 = "hello";
const arr2 = str2.split(""); // Convert to char array (mutable)
reverseInPlace(arr2);
console.log(arr2.join("")); // Output: "olleh"
