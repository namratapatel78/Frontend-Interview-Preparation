// O(1)
// O(log n)
// O(n)
// O(n log n)
// O(n2)

// log2(value) = exponent => (2)exponent = value
// log2(8) = 3

Questions:
1.
O(n2 + n3)
// => O(n3)

2.
function logAtMost10(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}
// Time => O(1) as it will not loop for more than 10 times
// Space => O(1)

3.
function logAtLeast10(n) {
  for (var i = 1; i <= Math.max(n, 10); i++) {
      console.log(i);
  }
}
// => O(n)
// Space => O(1)

4.
function onlyElementsAtEvenIndex(array) {
    var newArray = Array(Math.ceil(array.length / 2));
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            newArray[i / 2] = array[i];
        }
    }
    return newArray;
}
// Time => O(n)
// Space => O(n)

5.
function subtotals(array) {
    var subtotalArray = Array(array.length);
    for (var i = 0; i < array.length; i++) {
        var subtotal = 0;
        for (var j = 0; j <= i; j++) {
            subtotal += array[j];
        }
        subtotalArray[i] = subtotal;
    }
    return subtotalArray;
}
// Time => O(n2)
// Space => O(n)



// List of Algorithms

// 1. In-place
