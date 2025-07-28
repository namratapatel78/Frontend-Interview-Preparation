const obj1 = {
  100: 'one hundred',
  2: 'two',
  7: 'seven',
  a: 'letter a',
  B: 'letter B',
  A: 'letter A'
};

for (const key in obj1) {
  console.log(key);
}

// The enumeration order of object properties in JavaScript is not arbitrary; it follows specific rules defined in the ECMAScript specification starting with ES2015 (ES6). This order applies to for...in, Object.keys, and similar enumeration methods for own properties (properties directly on the object, not inherited ones).

// The order is as follows:

// Integer-like keys (array indices):
// These are property keys that are strings representing non-negative integers (e.g., "0", "2", "100"). Such keys are enumerated first, in ascending numeric order regardless of the order in which they were added.

// String keys (non-integer):
// After integer keys, string keys that are not integer-like are enumerated in the order in which they were created (insertion order).

// Symbol keys:
// Finally, symbol-keyed properties are enumerated in insertion order. (Note that for...in does not enumerate symbol keys.)

// ------------------------------------------------------------
const obj = Object.create({ inherited: 'inherited' });
obj.a = 10;
Object.defineProperty(obj, 'b', {
  value: 20,
  enumerable: false
});

console.log('Object.keys:', Object.keys(obj));
console.log('for...in:');
for (let key in obj) {
  console.log(key);
}
console.log('Object.getOwnPropertyNames:', Object.getOwnPropertyNames(obj));


// ------------------------------------------------------------

// Mutating const Object Properties
const person = { name: 'Alice' };
person.name = 'Bob';
console.log(person.name);

person = { name: 'Charlie' }; // What happens here?


// ------------------------------------------------------------
// Objects and Reference Behavior

function changeName(obj) {
  obj.name = 'Changed';
  obj = { name: 'New Object' };
  console.log('Inside function:', obj.name);
}

const myObj = { name: 'Original' };
changeName(myObj);
console.log('Outside function:', myObj.name);

// ------------------------------------------------------------

//  Prototype Chain and Property Lookup
const parent = { a: 1 };
const child = Object.create(parent);
child.b = 2;

console.log(child.a);
console.log(child.b);
console.log(child.hasOwnProperty('a'));
console.log(child.hasOwnProperty('b'));

// ------------------------------------------------------------
const obj = {
  a: 1,
  b: 2,
  toString() {
    return `${this.a} and ${this.b}`;
  }
};

console.log(obj + ""); // When JavaScript sees obj + "", it calls the object's toString() method to convert obj to a primitive string. Your toString() is defined to return ${this.a} and ${this.b}, i.e., "1 and 2". So this expression evaluates to "1 and 2".

console.log(String(obj)); // String(obj) internally calls obj.toString() as well.


console.log(obj.toString()); // Direct calling of obj.toString() obviously returns "1 and 2".

// ------------------------------------------------------------
