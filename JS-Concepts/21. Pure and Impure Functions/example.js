// https://hackernoon.com/javascript-and-functional-programming-pt-3-pure-functions-d572bb52e21c

// A pure function is deterministic.
// This means, that given the same input, the function will always return the same output.

// A pure function will not cause side effects.
// A side effect is any change in the system that is observable to the outside world.

// CONDITION FOR PURE FUNCTION
// The function depends only on its arguments to produce a result
// The function does not cause any side effects
const add = (x, y) => x + y // A pure function


// BENEFITS OF PUREE FUNCTIONS

// Easy to Read
// Easy to Test
// Parallel code
// Reusable



// Impure Functions

// 1.
let number = Math.random();

// 2.
const magicLetter = '*'
const createMagicPhrase = (phrase) => `${magicLetter}abra${phrase}`
// The createMagicPhrase function is dependent on a value which is external to its scope.
// Therefore, it is not pure!

// 3.
const fetchLoginToken = externalAPI.getUserToken

