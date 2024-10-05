// Sliding Window - findLongestSubstring
// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6
// Time Complexity - O(n)

// Solution - O(n^2)
function findLongestSubstring(str) {
  let max=0, i=0, j=0;
  const seen = [];
  if (!str) {
    console.log(0);
    return 0;
  }
  while (j<str.length) {
    if(seen.indexOf(str[j]) === -1) {
      seen.push(str[j]);
      max = Math.max(max, j-i+1);
      j++;
    } else {
      seen.shift();
      i++;
    }
  }
  console.log(max);
  return max;
}

// Solution - O(n)
function findLongestSubstring(str) {
  let max = 0, i = 0, j = 0;
  const seen = new Set();

  while (j < str.length) {
    if (!seen.has(str[j])) {
      seen.add(str[j]);
      max = Math.max(max, j - i + 1);
      j++;
    } else {
      seen.delete(str[i]);
      i++;
    }
  }

  console.log(max);
  return max;
}
