for (var i=0; i<10; i++) {
  console.log(i)
}
setTimeout(()=> {
  console.log("timeout")
})

var arr1 = [[1, 2], [2, 3], [3, 4]];
var arr2 = [...arr1];
arr1[0][1] = "1";
arr1[0][0] = "0";
arr1[1] = 33;
arr1[0] = 22;
console.log(arr1);
console.log(arr2);

var salary=1000;
(function () {
  console.log("Original salary was " + salary);
  let salary = "5000";
  console.log("My New Salary " + salary);
})()

// Event loop
console.log("1")
setTimeout(()=> {  // macrotask
  console.log("setTimeout")
})
new Promise(() => {  // microtask
  console.log("promise")
})
console.log("2")

// Find min value from sorted array [5,6,7,1,2,3] - BST (less complexity)

var test = {
  name: "abc",
  foo: function () {
    console.log(this.name)
  }
}
var output = test.foo
output()
test.foo()


var test = {
  name: "abc",
  foo: () => {
    console.log(this.name)
  }
}
var output = test.foo
output()
test.foo()