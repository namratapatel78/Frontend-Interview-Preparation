// The event loop is the secret behind JavaScript’s asynchronous programming
// JS executes all operations on a single thread, but using a few smart data structures, it gives us the illusion of multi-threading
// The call stack is responsible for keeping track of all the operations in line to be executed. Whenever a function is finished, it is popped from the stack.
// The event queue is responsible for sending new functions to the track for processing. It follows the queue data structure to maintain the correct sequence in which all operations should be sent for execution.
// Whenever an async function is called, it is sent to a browser API. These are APIs built into the browser. Based on the command received from the call stack, the API starts its own single-threaded operation.
// An example of this is the setTimeout method, click event, HTTP request
// Web APIs: These asynchronous calls (i.e. addEventListener, setTimeout) are provided by the browser to give additional functionality to the JavaScript engine.
// The code for running asynchronous calls does not live in JS runtime, that lives in the browser web apis.

// Where does it send the operation? The event queue. Hence, we have a cyclic system for running async operations in JavaScript. The language itself is single-threaded, but the browser APIs act as separate threads.
// The event loop facilitates this process, it constantly checks whether or not the call stack is empty. If it is empty, new functions are added from the event queue.

// https://www.educative.io/edpresso/what-is-an-event-loop-in-javascript

// Event loop: microtasks and macrotasks:
// https://javascript.info/event-loop
// https://www.youtube.com/watch?v=Rpb-hZjw--w&list=PLoofVP6snn5a8x4AOazSv0MTn8aX4-oGr&index=32

// Event loop
console.log("1")
setTimeout(()=> {
  console.log("setTimeout")
})
new Promise(() => {
  console.log("promise")
})
console.log("2")


// 2 - IMP
console.log("1");

setTimeout(() => {
  console.log("setTimeout"); // macrotask - Will wait for the browser operations to be finished and then executes the code
}, 0);

new Promise((resolve) => {
  console.log("promise");
  resolve();
}).then(() => {
  console.log("promise resolved"); // microtask - Will run immediately after the synchorous code execution is done and will not wait for the browser to do any operations (event handling or rendering)
});

console.log("2");
