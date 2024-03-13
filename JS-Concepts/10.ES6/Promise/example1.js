// https://www.youtube.com/watch?v=DHvZLI7Db8E

// https://in.indeed.com/career-advice/interviewing/javascript-promise-interview-questions

// The Promise object represents the eventual completion (or failure)
// of an asynchronous operation and its resulting value.
// Promises provide a way to write asynchronous code that is more readable and manageable than using callback functions.

// When you execute something synchronously, you wait for it to finish before moving on to another task.
// When you execute something asynchronously, you can move on to another task before it finishes

// Promise is used for running code asynchronously

// methods of Promise returns a new Promise

// The then() method returns a Promise. It takes up to two arguments:
// callback functions for the success and failure cases of the Promise.

// A Promise is in one of these states:
// pending: initial state, neither fulfilled nor rejected.
// resolved: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

// Promise.race() returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or reason from that promise.

// Write api's in promise

"use strict";

// 1
let myPromise = new Promise((resolve, reject) => {
  // resolve('resolve');
  setTimeout(() => {
    resolve("setTimeout resolve");
  }, 1000);

  setTimeout(() => {
    reject("setTimeout reject");
  }, 500);
});

myPromise.then((res) => {
  console.log(res);
});

// 2 - using error function in then
let myPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("setTimeout resolve");
  }, 1000);

  setTimeout(() => {
    reject("setTimeout reject");
  }, 500);
});

myPromise2.then(
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  }
);

// 3 - using catch block
let myPromise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("setTimeout resolve");
  }, 1000);

  setTimeout(() => {
    reject("setTimeout reject");
  }, 500);
});

myPromise3
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// 4. When all the promises are resolved
let myPromise4 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("myPromise resolved");
  }, 1000);
});

let myPromise5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("myPromise2 resolved");
  }, 1500);
});

// Promise has all() -> returns another promise that is resolved when all the promises are passed in
Promise.all([myPromise4, myPromise5]).then((data) => {
  console.log(data); // ['myPromise resolve','myPromise2 resolve']
});

// 4. If one or more promises are rejected
let myPromise6 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("myPromise resolved");
  }, 1000);
});
let myPromise7 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("myPromise2 rejected");
  }, 1000);
});
// Promise has all() -> returns another promise that is resolved when all the promises are passed in
Promise.all([myPromise6, myPromise7])
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err); // 'myPromise2 rejected'
  });

/**
  setTimeout, callbacks for geolocation, Promises, fetch, ajax, filesystem interaction, database calls, even DOM event listeners
**/

// Asynchronus example
let b = 100;
setTimeout(() => {
  b++;
}, 0); // asynchronous code  // off the main thread
console.log(b); // 100
setTimeout(() => {
  console.log("second ", b);
}, 0); // asynchronous code  // off the main thread
let p = new Promise(function () {});
console.log(p); // promise is running and waiting for the result to come back - PENDING (promise Object)

//
let b1 = 100;
setTimeout(() => {
  b1++;
}, 0);
console.log(b1); // 100
setTimeout(() => {
  console.log("second ", b1);
}, 0); // second 101
let p1 = new Promise(function (resolve, reject) {
  resolve("Yo!");
});
console.log(p1); // Promise {<fulfilled>: 'Yo!'}

// IMP
let b2 = 100;
setTimeout(() => {
  b2++;
}, 0);
console.log(b2); // 100 - 1st
setTimeout(() => {
  console.log("second ", b2); // 4th
}, 0); // second 101
let p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("fhg Yo!");
  }, 0);
});
console.log(p2); // Promise {<fulfilled>: 'fhg Yo!'} - 2nd
setTimeout(console.log(p2), 0); // - 3rd

//
let p3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Yo!");
  }, 0);
});
console.log(p3); // resolved promise object
setTimeout(function () {
  console.log(p3);
}, 10);
console.log(p3); // resolved promise object
p3.then(function (val) {
  console.log(val); // "Yo"
});

// race()
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "two");
});

Promise.race([promise1, promise2]).then((value) => {
  console.log(value);
  // Both resolve, but promise2 is faster
});
// expected output: "two"
