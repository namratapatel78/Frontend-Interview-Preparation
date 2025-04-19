// const isBalanced = (str) => {
//   let map = {")":"(","}":"{","]":"["}
//   let arr = []

//   for (let i in str) {
//     if(Object.keys(map).includes(str[0])) {
//       return false;
//     }
//     else if (Object.values(map).includes(str[i])) {
//       arr.push(str[i])
//     }
//     else if(Object.keys(map).includes(str[i])) {
//       console.log("dgfhgc ", arr, arr[arr.length-1], map[str[i]])
//       if (arr[arr.length-1] === map[str[i]]) {
//         arr.pop();
//       }
//     }
//   }

//   return !arr.length

// }
console.log(isBalanced("[{()}[]]"))


var isValid = function(s) {

  if (s.length % 2 === 1) {
    return false;
  }

  const obj = {']': '[', '}': '{',')': '('};
  const arr = []; // [ { (

  for (let char of s) {
    if (char in obj) {
      if (arr.length === 0 || arr.pop() !== obj[char]) {
        return false;
      }
    } else {
      arr.push(char);
    }
  }

  return arr.length === 0;
}

console.log(isValid("[{(ghjgh)}[]]"))

