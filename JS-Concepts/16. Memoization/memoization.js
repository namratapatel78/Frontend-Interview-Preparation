// https://www.freecodecamp.org/news/memoization-in-javascript-and-react/

// 1. Using object - stores key as string
const memoize = (fn) => {
  const cache = {};
  return (...args) => {
    if (args.toString() in cache) {
      console.log(cache);
      return cache[args.toString()];
    }
    const res = fn(...args);
    cache[args.toString()] = res;
    return res;
  };
};

// Using Map - map stores key as it is - number, string, object, etc.
export default function memoize(func) {
  const map = new Map();
  return function (a) {
    console.log(this?.age);
    if (map.has(a)) {
      return map.get(a);
    }
    const result = func.call(this, a);
    map.set(a, result);
    return result;
  };
}

const multiplyBy10 = (num) => {
  return num * 10;
};

const memoizedMultiplyBy10 = memoize(multiplyBy10);
console.log(memoizedMultiplyBy10(10));
console.log(memoizedMultiplyBy10(10));
