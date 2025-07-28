console.log(foo());

var foo = function() {
  return 'baz';
};

function foo() { // "SyntaxError: Identifier 'foo' has already been declared
  return 'bar';
}

// ------------------------------------------------------------

function test() {
  console.log(a);
  if (false) {
    var a = 5;
  }
}
test();

// ------------------------------------------------------------

let a = 10;
let a = 20;  // What happens here?

const b = 30;
const b = 40; // What happens here?

var c = 10;
var c = 20;  // What happens here?

// ------------------------------------------------------------