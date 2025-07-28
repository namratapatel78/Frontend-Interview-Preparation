let arr = [1, 2, 3, 4];
let i = 0, j = 2;

// ✅ 1. Using a Temporary Variable
let temp = arr[i];
arr[i] = arr[j];
arr[j] = temp;

console.log(arr); // [3, 2, 1, 4]


// ✅ 2. Using Destructuring Assignment (ES6)
i = 0, j = 2;

[arr[i], arr[j]] = [arr[j], arr[i]];

console.log(arr); // [3, 2, 1, 4]