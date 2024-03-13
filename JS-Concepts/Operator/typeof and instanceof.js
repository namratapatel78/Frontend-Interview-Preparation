console.log(typeof(null)) // object -> it's a bug -> It should be null
console.log(typeof(function (){}) ); // function
console.log(typeof Symbol()); // symbol
console.log(typeof([])); // object
console.log(typeof({})); // object


// typeof returns string


// instanceof
// The instanceof operator tests to see if the prototype property of a constructor appears 
// anywhere in the prototype chain of an object. The return value is a boolean value.

// The instanceof operator tests the presence of constructor.prototype in object's prototype chain.

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car('Honda', 'Accord', 1998);

console.log(auto instanceof Car);
console.dir(auto)
// expected output: true

console.log(auto instanceof Object);
// expected output: true