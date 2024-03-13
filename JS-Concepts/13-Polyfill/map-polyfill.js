let numArray = [1,2,3,4,5,6]

// map
let result = numArray.map( num => num + 1);
console.log(result)

// map polyfill
Array.prototype.customMap = function(callback) {
  let newArray = [];
  for (let num of this) {
    newArray.push(callback(num))
  }
  return newArray;
}
  
// let result2 = numArray.customMap( num => num +1 );
let result2 = numArray.customMap( function (num) {
  return num+1;
});
console.log(result2)

