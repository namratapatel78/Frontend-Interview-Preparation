// First
var w = "apple";
var x = "apple";
console.log(w == x); // true

var y = { title: "apple" };
var z = { title: "apple" };
console.log(y == z); // false

// Second
let number = 10;
function increase(number) {
  number++;
}
increase(number);
console.log(number); // 10

// Third
let obj = { value: 10 };

function increase(obj) {
  obj.value++;
}

increase(obj);
console.log(obj); //  { value: 11 }
