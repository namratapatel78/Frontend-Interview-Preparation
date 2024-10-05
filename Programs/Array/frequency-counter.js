const arr1 = [1,2,3];
const arr2 = [1,4,9];

// Solution 1 - O(n^2)
const isSquareArray = (a1, a2) => {
  if (a1.length !== a2.length) {
    return false;
  }
  let count = 0;
  for (let ele of a1) { // O(n)
    const index = a2.indexOf(ele*ele); // O(n)
    if (index > -1) {
      a2.splice(index,1);
      count++;
    }
  }
  return count === a1.length;
}

const result = isSquareArray(arr1, arr2);
console.log(result);


// Solution 2 - O(n)

const isSquareArray2 = (a1, a2) => {
  if (a1.length !== a2.length) {
    return false;
  }
  const obj1 = {};
  const obj2 = {};
  for (let ele of a1) {
    obj1[ele] = obj1[ele] + 1 || 1;
  }
  for (let ele of a2) {
    obj2[ele] = obj2[ele] + 1 || 1;
  }
  for (let ele of a1) {
    if (obj1[ele] !== obj2[ele*ele]) {
      return false;
    }
  }
  return true;
}

const result2 = isSquareArray2(arr1, arr2);
console.log(result2);