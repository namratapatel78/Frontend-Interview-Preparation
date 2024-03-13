// 1. Binary search tree - O(log n) - Quick sort
const quickSort = list => {
  if (list.length < 2) 
    return list;

  let pivot = list[0];
  let left = [];
  let right = [];

  for (let i = 1, total = list.length; i < total; i++){
    if (list[i] < pivot) {
      left.push(list[i]);
    }
    else {
      right.push(list[i])
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}
console.log(quickSort(['q','a','z','w','s','x','e','d','c','r']));


// 2. Merge sort - O(n log n)

