// Quadratic - O(n2) - nested ‘for loops’ 
// As the input increases, the time to run the algorithm grows at the rate of it’s square.

// 1
let matrix = [];
const buildSquareMatrix = items => {
  for(let i in items) {
    matrix[i] = [];
    for(let j in items) {
      matrix[i].push(items[j]);
    }
  }
  return matrix;
}
console.log(buildSquareMatrix(['a', 'b', 'c']));

// 9 iterations for 3 elements, returns:
// [
//   ['a', 'b', 'c'],
//   ['a', 'b', 'c'],
//   ['a', 'b', 'c']
// ]


// 2
const findMatch = (string) => {
  for (var i = 0; i < string.length; i++){
     for ( var j = i+1; j < string.length; j++){
        if (string[i] === string[j]) {
           return true;
        }
     }
  }
  return false;
}
