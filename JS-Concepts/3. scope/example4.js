var a = 1;

function foo() {
  var a = 2;
  console.log(a);   // 2
}

function bar() {
  a = 3;
  console.log(a);  // 3
}

foo();
bar();
console.log(a);  // 3


