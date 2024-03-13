// Async await is still based on promises
// Async function will return promise
// it will wait untill the promise resolved before moving to the next line - no then, no callbacks needed

// await - waits for the promise to resolve

// https://www.youtube.com/watch?v=V_Kr9OSfDeU


function friendlyFn1() {
  return 'hello!!!';
}
console.log(friendlyFn1);

async function friendlyFn2() {
  return 'hello!!!';
}
console.log(friendlyFn1);
friendlyFn2().then((data) => {
  console.log(data)
})


// similar behavior to async
function friendlyFn3() {
  return Promise.resolve('hello!!!')
}
console.log(friendlyFn1);
friendlyFn3().then((data) => {
  console.log(data)
})
