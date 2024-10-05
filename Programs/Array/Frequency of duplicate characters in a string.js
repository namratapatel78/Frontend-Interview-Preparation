// Display frequency of duplicate characters in a given string.

const str = 'ababatthz';
const result = {};

for (let char of str) {
  result[char] >0 ? result[char] = result[char]+1 : result[char] = 1;
}

for (let key in result) {
  if (result[key] > 1) {
      console.log(key + " " + result[key]);
  }
}

