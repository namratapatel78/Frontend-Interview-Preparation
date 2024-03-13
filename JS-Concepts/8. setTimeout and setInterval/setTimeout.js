// setTimeout and setInterval are web apis
// Browser will handle the timer when setTimeout is present in web api's

// 1
function sayHello() {
  console.log("Hello");
}
setTimeout(sayHello, 1000);

// 2
console.log("1");
setTimeout(() => {
  console.log("2");
}, 0);
console.log("3");
console.log("4");

// 3 - imp
function log(msg) {
  console.log(msg);
}
setTimeout(log, 1000, "Hello!");

// 4
let a = 100;
setTimeout(() => {
  a++;
}, 0); // asynchronous code  // off the main thread
console.log(a); // 100
setTimeout(() => {
  a++;
}, 0); // asynchronous code  // off the main thread
console.log(a); // 100

// 5
let b = 100;
setTimeout(() => {
  b++;
  console.log("first", b);
}, 1000); // asynchronous code  // off the main thread
console.log(b); // 100
setTimeout(() => {
  b = b + 2;
  console.log("second ", b);
}, 500); // asynchronous code  // off the main thread
console.log(b); // 100
