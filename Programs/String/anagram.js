const str1 = 'listen';
const str2 = 'silent';

const isAnagram = (s1, s2) => {
  if (s1.length !== s2.length) {
    return false;
  }
  for (let char of str1) {
    if (str2.indexOf(char) === -1) {
      return false;
    }
  }
  return true;
}

console.log(isAnagram(str1, str2));