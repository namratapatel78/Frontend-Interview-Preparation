// 1
function fibo (n) {
    let result = [0,1];
    for (let i=2; i<n; i++) {
      result.push(result[i-1] + result[i-2]);
    }
    return result;
  }

console.log(fibo(10));


// 2
function fib (n) {
    let result = [];
    for (let i=0; i<n; i++) {
      if (i < 2) {
        result.push(i);
      } else {
        result.push(result[i-1] + result[i-2]);
      }
    }
    return result;
  }
  
console.log(fib(7));


// 3 Print the nth entry in the Fibonacci series using recursion
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34...]

function fib (n) {
    if (n < 2) {
        return n;
    }
    return fib(n-1) + fib(n-2);
}

console.log(fib(5));



// 4 Memoized function as the above one has the exponential run time complexity

function memo(fn) {
    let cache = {};
    let result;
    return function (...args) {
        if (cache[args]) {
            return cache[args];
        }
        result = fn.apply(this, args);
        cache[args] = result;
        return result;
    }
}

function slowFibo(n) {
    if (n < 2) {
        return n;
    }
    return fib(n-1) + fib(n-2);
}

let fib = memo(slowFibo);

console.log(fib(5));

