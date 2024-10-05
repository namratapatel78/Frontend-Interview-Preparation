// Technical
// Hooks and rendering concepts in React
// Closure, event loop, arrow function, one DS problem on array
// Asked to find Target in rotated sorted array Asked to design payment wallet application
// all you mentioned in your resume

// CODING
// Display frequency of duplicate characters in a given string.
// Find all combinations/subsets of an array.
// Implement a function to check if a string is a palindrome.
// Find the longest substring without repeating characters.
// 2D matrix)
// Leetcode easy/ medium stuff slightly modified
// Sorting algorithm question where I had to make a basic function in any language i preferred.
// (1) javascript event loop (2) moving pointers in a string
// How to optimize functions (ie. caching, memoization)


// React
// One question was also about how to prevent triggering too many requests on an autocomplete (debounce).

// Additional Array and String Problems Asked at Oracle
// Array Problems:

// Rotate an array to the right by k steps.
// Merge overlapping intervals.
// Find the maximum product subarray.
// Move all zeroes to the end of an array while maintaining the relative order of non-zero elements.
// Find all subsets/combinations of an array.

// String Problems:

// Implement a function to check if two strings are anagrams.
// Convert a string to an integer (implement atoi).
// Find the first non-repeating character in a string.
// Implement a function to perform basic string compression using the counts of repeated characters.
// Compress a string using counts of repeated characters.
// Implement a function to check if a string is a palindrome.
// Find the longest substring without repeating characters.

// Examples of Detailed Problems
// Rotate Array:

// Problem: Rotate an array of n elements to the right by k steps.
// Solution: Use reversal algorithm or cyclic replacements.
// Merge Intervals:

// Problem: Given a collection of intervals, merge all overlapping intervals.
// Solution: Sort intervals by start time and then merge as needed.
// Maximum Product Subarray:

// Problem: Find the contiguous subarray within an array which has the largest product.
// Solution: Track the maximum and minimum products up to the current position.
// Move Zeroes:

// Problem: Move all zeroes in an array to the end while maintaining the order of non-zero elements.
// Solution: Use two pointers to swap non-zero elements with zero elements.
// Sample String Problem Solutions
// Check Anagrams:

// Problem: Check if two strings are anagrams.
// Solution: Sort both strings and compare or use a hash map to count character occurrences.
// String to Integer (atoi):

// Problem: Convert a string to an integer.
// Solution: Handle whitespaces, optional signs, and numeric characters, while checking for overflow.
// First Non-Repeating Character:

// Problem: Find the first non-repeating character in a string.
// Solution: Use a hash map to count character occurrences and iterate to find the first unique character.
// String Compression:

// Problem: Compress a string using the counts of repeated characters.
// Solution: Traverse the string and count consecutive characters, then construct the compressed string.

// What is difference between cookies and localstorage

// what is the most challenging tech thing u did?
// Explain about a difficult project you handled in previous job

// MIGHT BE FOR BACKEND
//  the first interview had a Greedy Approach and 2nd Interview had a Graph based question
// Best time to buy and sell stocks 3 (Leetcode Hard)


// Non Technical
// What is your biggest strength to our company

// PENDING
// Find all combinations/subsets of an array.
// Find the longest substring without repeating characters.
// Merge overlapping intervals.



// function foo(){
//     function bar() {
//         return 3;
//     }
//     return bar();
//     function bar() {
//         return 8;
//     }
// }
// console.log(foo()); // error // 8


// function foo(){
//     var bar = function() {
//         return 3;
//     };
//     return bar();
//     var bar = function() {
//         return 8;
//     };
// }
// alert(foo()); // 8 // 3


// alert(foo()); // 8 // 3
// function foo(){
//     var bar = function() {
//         return 3;
//     };
//     return bar();
//     var bar = function() {
//         return 8;
//     };
// }


// function foo(){

//     var bar = function() {
//         return 3;
//     };

//     var bar = function() {
//         return 8;
//    };
// return bar();
// }
//
// alert(foo()); // 8
//

// function foo(){
//     return bar();
//     var bar = function() {
//         return 3;
//     };
//     var bar = function() {
//         return 8;
//     };
// }

// alert(foo()); // bar is undefined // bar is not a function



// (function(){
// var b;
// let c;
// console.log(b); // undefined
// console.log(c); // undefined
// b= 2;
// c= 3;})()

// (function(){
// console.log(b); // undefined
// console.log(c); // reference error
// var b= 2;
// let c= 3;
// })()


// var person = {
//   firstName: "John",
//   lastName : "Doe",
//   id       : 5566,
//   fullName : () => {
//     return this.firstName + " " + this.lastName;
//   }
// };
// console.log(person.fullName()) // undefined undefined
