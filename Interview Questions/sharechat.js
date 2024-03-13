console.log("2" + "2" - 2)

console.log("A")
setTimeout(function () {
  console.log("B")
}, 3000)
console.log("B")

console.log("A")
setTimeout(function () {
  console.log("B")
}, 0)
console.log("B")

// questions on debouncing and throttling

// Create a custom memo function

// Proxy in javascript

// What do you do to be updated with the latest improvement in technology

// PWA

// Synthetic events

// Promise
let pr1 = Promise.resolve("success")
let pr2 = Promise.reject("error")
Promise.all([pr1, pr2]).then(() => { console.log("A") }).catch(() => { console.log("B") })

// closure

// Event loop: microtasks and macrotasks
