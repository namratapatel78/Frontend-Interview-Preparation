// const p1 = Promise.reject(0);
const p1 = Promise.resolve(3);
const p2 = 42; // // primitive
const p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});


// 1. Promise.race - Which promise resolves or reject first
Promise.myRace = function(promises) {
  return new Promise((resolve, reject) => {
    for (let p of promises) {
      Promise.resolve(p).then(res => resolve(res), err => reject(err)) // If p is primitive, Promise.resolve(p) will return new promise that resolves to the primitive value
    }
  });
};
Promise.myRace([p1, p2, p3]);
Promise.race([p1, p2, p3]);


// 2. Promise.any - Which promise resolves first
Promise.myAny = function(promises) {
  return new Promise((resolve, reject) => {
    for (let p of promises) {
      Promise.resolve(p).then(res => resolve(res));
    }
  });
};
Promise.myAny([p1, p2, p3]);
Promise.any([p1, p2, p3]);


// 3. Promise.all
// Output 1 - Returns array of all the results of all the promises when all are fulfilled
// Output 2 - Returns result of rejected promise when any of the promise is rejected
Promise.myAll = (promises) => {
  const result = [];
  return new Promise((resolve, reject) => {
    for (let i=0; i<promises.length; i++) {
      Promise.resolve(promises[i]).then(res => {
        result[i] = res;
        if (result.length === promises.length) {
          resolve(result);
        }
      }, err => {
        reject(err);
      })
    }
  })
};
Promise.myAll([p1, p2, p3]).then(
  (values) => {
    console.log(values);
  }, err => console.log(err)
);
Promise.all([p1, p2, p3]).then(
  (values) => {
    console.log(values);
  }, err => console.log(err)
);


// 4. Promise.allSettled()
// The Promise.allSettled() static method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when all of the input's promises settle (including when an empty iterable is passed), with an array of objects that describe the outcome of each promise.

const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, 'foo'),
);
const promises = [promise1, promise2];
Promise.allSettled(promises).then((results) =>
  results.forEach((result) => console.log(result.status)),
);
// Expected output:
// "fulfilled"
// "rejected"
