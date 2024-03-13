// Flatten array

// CSR vs SSR

// How CI/CD pipeline works

// Why create react app provides CSR

// css vs any css pre-processor such as sass

// What are pseudo elements - https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity

const arr1 = [1, [2], [3, [[4]]],[5,6]];
let result= [];

function flatten(arr) {
  for (let i=0; i<arr.length; i++) {
    if (!arr[i][0]) {
      result.push(arr[i])
    } else {
      flatten(arr[i])
    }
  }
  console.log(result)
}
flatten(arr1); // [1, 2, 3, 4, 5, 6]; 

// setTimeout questions
(function() {
  console.log(1); 
  setTimeout(function(){console.log(2)}, 1000);
  setTimeout(function(){console.log(3)}, 0); 
  console.log(4);
})();  // output: 1, 4, 3, 2


var arrayList = ['a', 'b', 'c', 'd', 'e', 'f'];
var anotherArrayList = arrayList;
arrayList = [];
console.log(anotherArrayList);

// Promise and it's example
// ES6 features


//
a = 'a';
a = 'b'; // we cdon't need to declare the variable
console.log(a);

//
var a = 'a';
var a = 'b'; // we can redeclare the variable
console.log(a);

//
var a = 'a';
{
var a = 'b';
console.log(a);
}
console.log(a);

//
var a = 'a';
{
let a = 'b';
console.log(a);
}
console.log(a);

//
let a = 'a';
{
let a = 'b';
console.log(a);
}
console.log(a);