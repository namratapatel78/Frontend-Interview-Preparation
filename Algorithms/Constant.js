// Constant - O(1)
// As the input increases, time to run the algorithm stays constant.

// 1
const getLast = list => {
  console.log(list[list.length -1]);
}
getLast(['a', 'b', 'c', 'd']); // d (1 iteration)
getLast(['a', 'b', 'c', 'd', 'e', 'f', 'g']); // g (1 iteration)


// 2 - even or odd -> n % 2
const firstElemEven = (array) => {
  return array[0] %2 === 0 ? true : false;
}