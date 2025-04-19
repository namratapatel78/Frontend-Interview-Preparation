// for (let i=0; i<n; i++){ console.log(i) } - Valid
// for (let i=0; i<n; i++){ console.log(i) )} - Invalid
// for (let i=0; i<n; i++){ console.log(`Hello ${world`}) } - Invalid
// for (let i=0; i<n; i++){ console.log(`Hello ${world}`) } - Valid
// for (let i=0; i<n; i++){ console.log(`Hello world}`) } - Valid
// for (let i=0; i<n; i++){ console.log(`Hello $ {world`) } - Valid

const validSyntax = (s) => {
  const obj = { ')': '(', '}': '{'};
  const arr = [];

  for (let char of s) {
      if (char in obj) {
          if (obj[char] !== arr.pop()) {
              return false;
          }
      } else {
          if (Object.values(obj).includes(char)) {
              arr.push(char);
          }
      }
  }
  return arr.length === 0;
}

console.log(validSyntax('for (let i=0; i<n; i++){ console.log(i) }'));