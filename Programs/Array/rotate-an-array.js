const array = [1, 2, 3, 4, 5];
const rotations = 2;

const rotateArray = (arr, rot) => {
  let i=0;
  while(i<rot) {
    const last = arr.pop();
    arr.unshift(last);
    i++;
  }
  return arr;
};

console.log(rotateArray(array, rotations));