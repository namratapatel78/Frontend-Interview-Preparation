function SumValue(...arg) {
  let sum = 0;
  for (let i of arg) {
    sum = sum + i;
  }

  return function (...args) {
    if (args.length > 0) {
      for (let i of args) {
        sum = sum + i;
      }
      return SumValue(sum);
    } else {
      return sum;
    }
  };
}
