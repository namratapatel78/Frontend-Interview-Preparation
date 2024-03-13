// useEffect, Promise, Debouncing, side effects, Higher order functions, use of key, useCallback, React.memo()
// Where to write asynchronous code in js
// useLayoutEffect - IMP
// Antipattern in react
// Create a UI for search autocomplete with the given endpoint: https://dummyjson.com/products/search?q=laptop
// How will we handle the error inside the function which is calling api - try and catch block

// 1. Promise - IMP
const p = new Promise((res, rej) => {
  setInterval(() => {
    res('hello');
  }, 1000);
});
p.then(console.log)
//  Promises can only resolve once. Even though setInterval is repeatedly calling res('hello'), the Promise p resolves only once with the value 'hello'. Subsequent calls to res('hello') do not have any effect because the Promise is already resolved. Therefore, the output of the code will indeed be hello, logged to the console only once. After the Promise resolves, subsequent calls to res('hello') from the setInterval do not affect the resolved state of the Promise.

// 2. this - IMP
const obj = {
  a: 1,
  b: function () {
    console.log(this);
    let c = function () { console.log(this); };
    c();
  }
}
obj.b();
// The output of the provided code snippet will depend on whether it's running in strict mode or not.

// In non-strict mode:
// When the method b of object obj is invoked, it logs this to the console. In this context, this refers to the object obj itself because it's the object that the method b is called on. So, the first console.log(this) will output the obj object.
// However, when the function c is invoked within b, the value of this inside c will default to the global object (e.g., window in a browser environment or global in Node.js). This is because c is a regular function and not a method of an object. So, the second console.log(this) will output the global object.
// Therefore, the output will be the obj object followed by the global object.

// In strict mode:
// If the code is running in strict mode ('use strict';), the behavior will be slightly different. In strict mode, the value of this inside a function will be undefined by default if the function is called without an explicit context.
// So, in this case, when the function c is invoked within b, the value of this inside c will be undefined, and the output of the second console.log(this) will be undefined.
// Therefore, in strict mode, the output will be the obj object followed by undefined.


// 3. How will you inherit the properties of F1 to F2 - IMP
function F1 () {
  this.name = 'John';
}
function F2 () {
  this.age = 20;
}
// Solution
// Set the prototype of F2 to an instance of F1
F2.prototype = new F1();
// Create an instance of F2
var obj2 = new F2();

console.log(obj2.name); // Output: John
console.log(obj2.age); // Output: 20

// 4. what will happen with the below code in react - IMP
useEffect(() => {
  console.log("hello");
});
// The useEffect hook is used without specifying any dependencies in the dependency array. This means the effect will run after every render of the component, including the initial render. The effect simply logs "hello" to the console each time it runs.


// 5. In the below example, if I am changing the data[0].a then other sibling component should not rerender. How to achieve it? - IMP
const data = [{a: 1}, {a: 2}, {a: 3}];
data.map((item, index) => {
  return <div key={index}>{item.a}</div>
});
// Solution
import React from 'react';

const MemoizedComponent = React.memo(({ item }) => {
  return <div>{item.a}</div>;
}, (prevProps, nextProps) => {
  // Check if only the 'a' property of the item has changed
  return prevProps.item.a === nextProps.item.a;
});

const ExampleComponent = () => {
  return (
    <>
      {data.map((item, index) => (
        <MemoizedComponent key={index} item={item} />
      ))}
    </>
  );
};

export default ExampleComponent;

