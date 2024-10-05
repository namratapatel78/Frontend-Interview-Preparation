// MUTABLE - changes the original array

Array.push(3) // adds in the last position of an array - returns new array length

Array.pop() // removes the last element from an array - returns the value that was popped

Array.shift() // removes the 1st element from an array - returns the element that was removed

Array.unshift() // adds a new element in the beginning of the array - - returns new array length

Array.prototype()

Array.sort() // By default, the sort() function sorts values as strings.
// The default sort order is ascending, built upon converting the elements into strings,
// then comparing their sequences of UTF-16 code units values.

var numbers = [6, 10, 100, 50, 3]
numbers.sort()

numbers.sort(function (a, b) {
  return a-b
})


Array.reverse()

Array.from('abc') // ['a', 'b', 'c'] // ES6

delete object
delete Array[0]

Array.splice()
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
// The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
// The splice() method returns an array with the deleted items:

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);        // Removes the first element of fruits



// IMMUTABLE

Array.slice() // create shallow copy of the source array
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var fruit = fruits.slice(4); // ["Mango"]
var citrus = fruits.slice(1, 3); // ["Orange", "Lemon"]
// The method then selects elements from the start argument, and up to (but not including) the end argument.

Array.map()
Array.filter()
Array.reduce()

Array.every() // tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

Array.concat() // create shallow copy of the array like slice

Array.filter()

Array.toString() // banana,apple,orange,grapes

Array.join()  // banana,apple,orange,grapes

Array.join('') // bananaappleorangegrapes

Array.length // returns length of array

Array.indexOf() // looping O(n)

// concat() - method can take any number of array arguments:
var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var myChildren = myGirls.concat(myBoys);

Object.assign

let object = {a: 'a', b: 'b'}
let copyObj = {...object}

const numbers = [1, 2];
const moreNumbers = [...numbers, 3]; // spread operator -

Math.max()

Math.min()





//
let str = "Hello";

// Array.from converts an iterable into an array
alert( Array.from(str) ); // H,e,l,l,o