// The number of steps it takes to accomplish a task is a constant to the n power (pretty large number)
// O(C^n) - O(2^n)
const fib = (num) => {
  if (num <= 1){
    return 1;
  }
  return fib(num - 1) + fib(num - 2);
}