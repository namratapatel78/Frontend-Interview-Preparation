const str1 = 'listen';
const str2 = 'silent';

// Solution 1 - O(n^2)
const isAnagram = (s1, s2) => {
  if (s1.length !== s2.length) {
    return false;
  }
  for (let char of str1) { // O(n)
    if (str2.indexOf(char) === -1) { // O(n)
      return false;
    }
  }
  return true;
}

console.log(isAnagram(str1, str2));


// Solution 2 - O(n)
function validAnagram(a, b){
  const obj1 = {};
  const obj2 = {};
  if (a.length !== b.length) {
    return false;
  }
  for (let ele of a) {
      obj1[ele] = obj1[ele] + 1 || 1;
  }
  for (let ele of b) {
      obj2[ele] = obj2[ele] + 1 || 1;
  }
  for (let ele of a) {
      if (obj1[ele] !== obj2[ele]) {
        return false;
      }
  }
  return true;
}

const result = validAnagram('abcde', 'abcdd');
console.log(result);


// Solution 3 - O(n)
function validAnagram2(a, b){
  const obj = {};
  if (a.length !== b.length) {
    return false;
  }
  for (let ele of a) {
      obj[ele] = obj[ele] + 1 || 1;
  }
  for (let ele of b) {
    if (!obj[ele]) {
      return false;
    } else {
      obj[ele] -= 1;
    }
  }
  return true;
}

const result2 = validAnagram2('abcde', 'abcdd');
console.log(result2);