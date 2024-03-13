// https://www.freecodecamp.org/news/memoization-in-javascript-and-react/

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

const multiplyBy10 = (num) => {
  return num * 10;
};

const memoizedMultiplyBy10 = memoize(multiplyBy10);
console.log(memoizedMultiplyBy10(10));
console.log(memoizedMultiplyBy10(10));
