// for (let i=0; i<n; i++){ console.log(i) } - true
// for (let i=0; i<n; i++){ console.log(i) )} - false
// for (let i=0; i<n; i++){ console.log(`Hello ${world`}) } - false
// for (let i=0; i<n; i++){ console.log(`Hello ${world}`) } - true
// for (let i=0; i<n; i++){ console.log(`Hello world}`) } - true
// for (let i=0; i<n; i++){ console.log(`Hello $ {world`) } - true

const validSyntax = (s) => {
  const obj = { ')': '(', '}': '{'};
  const arr = [];
  let template = false;
  let expression = false;

  for (let i=0; i<s.length; i++) {
      char = s[i];

      // validate template literals
      if (char === '`') {
          template = !template;
          if (!template && expression) return false;
          continue;
      }
      if (template) {
          if (char === '$' && s[i+1] === '{') {
              expression = true;
              i++;
              // arr.push('{');
          } else if (char === '}' && expression) {
              expression = false;
              // if (obj[char] !== arr.pop()) return false;
          }
          continue;
      }
      // validate template literals

      // validate brackets
      if (char in obj) {
          if (obj[char] !== arr.pop()) {
              return false;
          }
      } else {
          if (Object.values(obj).includes(char)) {
              arr.push(char);
          }
      }
      // validate brackets
  }
  return arr.length === 0;
}

for (let option of options) {
console.log(option, validSyntax(option));
}