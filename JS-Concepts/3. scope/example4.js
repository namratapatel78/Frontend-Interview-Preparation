var a = 1;

function foo() {
  var a = 2;
  console.log(a);
}

function bar() {
  a = 3;
  console.log(a);
}

foo();
bar();
console.log(a);


