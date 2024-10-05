// Callback, Promise, and async/await are all different ways to handle asynchronous operations in JavaScript.

// https://medium.com/@lelianto.eko/callback-vs-promise-vs-async-await-in-javascri-f29a63d57f72

// https://medium.com/womenintechnology/callbacks-vs-promises-vs-async-await-detailed-comparison-d1f6ae7c778a

// Callback
const getData1 = (callback) => {
 setTimeout(() => {
  callback(1);
 }, 1000);
}

getData1((data) => {
  console.log(data);
});

// Promise
const getData2 = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(1);
     }, 1000);
  });
}

getData2().then(res => console.log(res));

// async await
const getData3 = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(1);
     }, 1000);
  });
}

const main = async () => {
  const data = await getData3();
  console.log(data);
}
main();