let numArray = [1,2,3,4,5,6]

// filter
let result = numArray.filter( num => num > 3);
console.log(result)

// custom filter
Array.prototype.customFilter = function(callback) {
  let newArray = [];
  for (let num of this) {
    if (callback(num)) {
      newArray.push(num)
    }
  }
  return newArray
}

// let result2 = numArray.customFilter( num => num > 3)
let result2 = numArray.customFilter(
  function(num) {
    return num > 3
  }
)
console.log(result2)
