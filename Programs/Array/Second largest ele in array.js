const arr = [5, 5, 6, 3, 10, 2, 9];
let first = arr[0], second;

for (let i=1; i<arr.length; i++) {
  if (arr[i] < first) {
    if (!second) {
      second = first;
    } else {
      if (first < second) {
        second = first;
      }
    }
    first = arr[i];
  } else {
     if (!second) {
      second = arr[i];
    } else {
    if (arr[i] < second) {
      second = arr[i];
    }
    }
  }
}

console.log(first, second);