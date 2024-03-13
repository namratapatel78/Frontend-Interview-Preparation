// JavaScript Visualizer - https://ui.dev/javascript-visualizer/

// Whenever a function is created inside a function, the inner function will create a closure
// over the outer functions's execution context when the outer function's execution is done
// (outer function's execution context has been popped out from execution stack).
// The variables inside the closure is same as the outer function's context

var count = 0;

function makeAdder(x) {
  // closure scope
  return function inner(y) {
    return x + y;
  };
}

var callInner = makeAdder(5);
count += callInner(2);
callInner(3);

// Global exection context
//   -> Outer/makeAdder function context -> Closure execution context
//      -> Inner function context
