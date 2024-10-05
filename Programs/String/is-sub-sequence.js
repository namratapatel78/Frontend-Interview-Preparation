
// Multiple Pointers - isSubsequence
// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Examples:

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)
// Your solution MUST have AT LEAST the following complexities:

// Time Complexity - O(N + M)

// Space Complexity - O(1)

function isSubsequence(s1, s2){
  let i=0, j=0;
  if (!s1) return true;
  if(!s2) return false;
  while (i<s1.length && j<s2.length) {
    if (s1[i] === s2[j]) {
      i++; j++;
    } else {
      j++;
    }
  }
  return i === s1.length;
}

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true

//             i      j
isSubsequence('abc', 'abracadabra'); // true

isSubsequence('abc', 'acb'); // false (order matters)

