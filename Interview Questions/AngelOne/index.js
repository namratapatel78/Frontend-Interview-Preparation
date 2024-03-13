// 1. Implement static keyword in JS

// In JavaScript, unlike some other programming languages like Java or C++, there is no static keyword for defining static methods or properties within a class. However, you can achieve similar functionality by using the prototype chain or closures.

// Using Prototypes:
// You can add static methods or properties to a JavaScript class by directly assigning them to the class constructor or its prototype. Here's how you can define static methods and properties:

function MyClass() {}

// Static method
MyClass.staticMethod = function() {
  console.log('This is a static method');
};

// Static property
MyClass.staticProperty = 'This is a static property';

// Example usage
MyClass.staticMethod(); // Output: This is a static method
console.log(MyClass.staticProperty); // Output: This is a static property

// 2. Service worker
// call apply bind - what was the need of apply when call was already there