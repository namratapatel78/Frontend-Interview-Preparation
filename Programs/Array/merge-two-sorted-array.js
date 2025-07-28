const mergeSortedArrays = (arr1, arr2) => {
  const n1 = arr1.length,
    n2 = arr2.length;
  const res = [];
  let i = 0,
    j = 0;
  while (i < n1 && j < n2) {
    console.log(arr1[i] + ' - ' +  arr2[j]);
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else {
      res.push(arr2[j]);
      j++;
    }
  }

  // Push remaining elements from arr1
  while (i < arr1.length) {
    res.push(arr1[i]);
    i++;
  }

  // Push remaining elements from arr2
  while (j < arr2.length) {
    res.push(arr2[j]);
    j++;
  }
  return res;
};
//           i
const one = [1, 3, 4, 5, 9, 10, 11, 12], two = [2, 4, 6, 8, 10, 11];
//                                              j

const result = mergeSortedArrays(one, two);
console.log(result);
