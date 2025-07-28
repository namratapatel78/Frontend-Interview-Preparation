// Microtask Source	    Description
// Promise callbacks - All .then, .catch, .finally handlers
// MutationObserver - callbacks	DOM mutation events
// queueMicrotask()	- Explicit microtask scheduling
// process.nextTick() (Node.js)	- Node-only, executed before Promise microtasks


// Macrotask Source	   - Description
// setTimeout / setInterval	- Scheduled timer/callbacks
// setImmediate (Node.js)	- Executes after I/O events (Node-only)
// I/O events	- AJAX, file read events, network responses, etc.
// UI event handlers	- Click, input, scroll, focus, etc.
// Script (top-level)	- Initial script file or inline block execution
// requestAnimationFrame	- Animation frame handler in browser
// MessageChannel	Asynchronous message passing


// ------------------------------------------------------------

console.log(1); // 1. synchronous code

setTimeout(() => {
  console.log(2);  // 2. The callback here is pushed to the macrotask queue and will run after the current call stack and all microtasks complete
}, 0);

Promise.resolve()
  .then(() => { // 3. This .then callback is a microtask. It will be executed after the current synchronous code.
    console.log(3);
    Promise.resolve(4)
      .then((data) => { // 8. schedules another microtask, which logs 4
        console.log(data);
      });
  });

async function asyncFun() {
  console.log(5); // 4. runs synchronously inside the function call. Prints 5
  await Promise.resolve(); // 5. pauses the async function here, yielding execution back to the event loop. synchronous logs before await run immediately, after the await, continuation runs asynchronously in a microtask
  // Internally, await expression is equivalent to
  // Promise.resolve(expression).then(...)

  console.log(6); // 6.scheduled as a microtask.
}
asyncFun();

console.log(7); // 7. synchronous code

// ------------------------------------------------------------

console.log('start');

setTimeout(() => {
  console.log('timeout 1');

  Promise.resolve().then(() => {
    console.log('promise 1');
  }).then(() => {
    console.log('promise 2');
  });
}, 0);

Promise.resolve().then(() => {
  console.log('promise 3');
}).then(() => {
  console.log('promise 4');
});

setTimeout(() => {
  console.log('timeout 2');
}, 0);

console.log('end');

// ------------------------------------------------------------

// IMP

console.log('start');

setTimeout(() => {
  console.log('timeout 1');

  Promise.resolve().then(() => {
    console.log('promise 1');
  }).then(() => {
    console.log('promise 2');
  });
}, 0);

Promise.resolve().then(() => {
  console.log('promise 3');

  setTimeout(() => {
    console.log('timeout 2');

    Promise.resolve().then(() => {
      console.log('promise 4');
    });
  }, 0);

}).then(() => {
  console.log('promise 5');
});

console.log('end');

// Explanation:
// When the first .then() callback runs (the one that logs 'promise 3'), the synchronous body inside it completes immediately. This includes scheduling the setTimeout — but not executing its callback. It just queues it for a future macrotask.
// Once the first .then() callback completes execution, the promise returned by that .then() is resolved, which schedules the next .then() callback (console.log('promise 5')) as a microtask.

// ------------------------------------------------------------

console.log('Begin');

setTimeout(() => {
  console.log('setTimeout callback');
}, 0);

queueMicrotask(() => {
  console.log('queueMicrotask callback');
});

Promise.resolve().then(() => {
  console.log('Promise then 1');
  queueMicrotask(() => {
    console.log('queueMicrotask inside then');
  });
});

Promise.resolve().then(() => {
  console.log('Promise then 2');
});

console.log('Finish');

// ------------------------------------------------------------