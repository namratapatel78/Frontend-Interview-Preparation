var x = function() {

}
console.dir(x); // object in detail - check in console

// __proto__ means parent or creator

// f x() -> __proto__ -> f () -> __proto__ -> Object (Master Object)

// f () and Object -> has bunch or methods and properties
// x will have access to all the methods and properties through prototype chain

var x1 = x();
// x1 will have the access to all the properties and methods in prototype chain
// x1 can access x's prototype, function's prototype and Object's prototype

// Object has method called toString()
console.log(x.toString());
// we haven't defined toString() in x but we can use it via prototype chain