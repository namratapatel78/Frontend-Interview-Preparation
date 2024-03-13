// http://codepen.io/beaucarnes/pen/OWeP...

/* Copying Arrays */

var original = [true, true, undefined, false, null];


// SHALLOW copy

// slice
var copy1 = original.slice(0);

// spread operator
var copy2 = [...original];
console.log(copy1, copy2);


//
var deepArray = [["freeCodeCamp"]];
// ["freeCodeCamp"] - is just an pointer to an array
var shallowCopy = deepArray.slice(0); // we are copying the pointers to this array ["freeCodeCamp"]

shallowCopy[0].push("is great");
console.log(deepArray[0], shallowCopy[0])

var deepCopy = JSON.parse(JSON.stringify(deepArray));
// JSON.parse covert the string to array or object 
// JSON.parse parses JSON to a JavaScript value

deepCopy[0].push("is great");
console.log(deepArray[0], deepCopy[0])

// {type: "freeCodeCamp"} - is just an pointer to an object
var objInsideArray = [{type: "freeCodeCamp"}];
