const ar1 = [1, 5, 10, 20, 40, 80];
const ar2 = [6, 7, 20, 80, 100];
const ar3 = [3, 4, 15, 20, 30, 70, 80, 120];

// Solution - 1
// for (let num of ar2) {
//   if (ar1.includes(num) && ar3.includes(num)) {
//     console.log(num);
//   }
// }

// Solution - 2
const findCommon = () => {
  const n1 = ar1.length,
    n2 = ar2.length,
    n3 = ar3.length;
  let i = 0,
    j = 0,
    k = 0;
  while (i < n1 && j < n2 && k < n3) {
    if (ar1[i] === ar2[j] && ar2[j] === ar3[k]) {
      console.log(ar1[i]);
      i++;
      j++;
      k++;
    } else if (ar1[i] < ar2[j]) {
      i++;
    } else if (ar2[j] < ar3[k]) {
      j++;
    } else {
      k++;
    }
  }
};

findCommon(ar1, ar2, ar3);
