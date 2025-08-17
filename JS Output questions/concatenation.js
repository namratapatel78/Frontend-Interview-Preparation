console.log([] + []);
console.log([] + {});
console.log({} + []);

// When you use the + operator between non-primitive values, JavaScript tries to convert them to primitives (usually strings).
// [] converted to an empty string ""
// {} converted to string, "[object Object]"

// ------------------------------------------------------------

console.log(typeof null);
console.log(null instanceof Object);
console.log(Object.prototype.toString.call(null));

// ------------------------------------------------------------
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  return `Hello, ${this.name}`;
};

const p1 = new Person("Alice");
const p2 = new Person("Bob");

console.log(p1.greet === p2.greet);
