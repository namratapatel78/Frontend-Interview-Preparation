function solve(N, K) {
  let slots = new Array(K).fill(0);
  let bagCount = 1, i = 0;

  while (N > 0) {
      if (bagCount > N) {
          slots[i % K] += N;
          break;
      }
      slots[i % K] += bagCount;
      N -= bagCount;
      bagCount++;
      i++;
  }

  return slots;  // Return the slots array
}

console.log(solve(10, 3));