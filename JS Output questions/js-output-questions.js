// 10.
function bark() {
  console.log('Woof!');
}
bark.animal = 'dog';

// 11.
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
const member = new Person('Lydia', 'Hallie');
Person.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};
console.log(member.getFullName());


// 13. What are the three phases of event propagation?
A: Target > Capturing > Bubbling
B: Bubbling > Target > Capturing
C: Target > Bubbling > Capturing
D: Capturing > Target > Bubbling


// 18. What's the output?
function checkAge(data) {
  if (data === { age: 18 }) {
    console.log('You are an adult!');
  } else if (data == { age: 18 }) {
    console.log('You are still an adult.');
  } else {
    console.log(`Hmm.. You don't have an age I guess`);
  }
}
checkAge({ age: 18 });

// 23. What's the output?
var num = 8;
var num = 10;
console.log(num);

// 29. What's the output?
const a = {};
const b = { key: 'b' };
const c = { key: 'c' };
a[b] = 123;
a[c] = 456;
console.log(a[b]);

// 39.

// 45. Implement polyfill of Promise.race()

// 46. What's the output?
let person = { name: 'Lydia' };
const members = [person];
person = null;
console.log(members);

// 50. What's the output?
[1, 2, 3].map(num => {
  if (typeof num === 'number') return;
  return num * 2;
});

// 52. What's the output?
function greeting() {
  throw 'Hello world!';
}
function sayHi() {
  try {
    const data = greeting();
    console.log('It worked!', data);
  } catch (e) {
    console.log('Oh no an error:', e);
  }
}
sayHi();

// 53. What's the output?
function Car() {
  this.make = 'Lamborghini';
  return { make: 'Maserati' };
}
const myCar = new Car();
console.log(myCar.make);

// 54. What's the output?
(() => {
  let x = (y = 10);
})();
console.log(typeof x);
console.log(typeof y);

// 55. What's the output?
class Dog {
  constructor(name) {
    this.name = name;
  }
}
Dog.prototype.bark = function() {
  console.log(`Woof I am ${this.name}`);
};
const pet = new Dog('Mara');
pet.bark();
delete Dog.prototype.bark;
pet.bark();

// 56. What's the output?
const set = new Set([1, 1, 2, 3, 4]);
console.log(set);

// 57. What's the output?
// counter.js
let counter = 10;
export default counter;
// index.js
import myCounter from './counter';
myCounter += 1;
console.log(myCounter);

// 61. What's the output?
const person = { name: 'Lydia' };
Object.defineProperty(person, 'age', { value: 21 });
console.log(person);
console.log(Object.keys(person));