// Linear - O(n)
// As the input increases, the time to run the algorithm will grow proportionally.

// 1
const printValue = list => {
  for (let i in list) {
    console.log(list[i]);
  }
}
printValue([4,6,1,3])
printValue([4,6,1,3,4,6,1,3])


// 2
const array= ['a', 'b', 'c', 'd'];
const findIndex = (items, match) => {
  for (let i = 0, total = items.length; i < total; i++) {
    if (items[i] === match){
      return i;
    }
  }
  return -1;
};

console.log(findIndex(array, 'a')); // 0  (1 iteration - best case)
console.log(findIndex(array, 'd')); // 3  (4 iterations - worst case)
console.log(findIndex(array, 'e')); // -1 (4 iterations - worst case)