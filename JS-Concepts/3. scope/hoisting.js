// Imp example hoisting

var foo = 'Hello';

function alertHello() {
	console.log(foo);  // undefined
  var foo = 'Hiee';
  console.log(foo);  // Hiee
}

alertHello();

// It scans the entire function block for variable.
// Then It creates an entry for var foo as undefined before we execute that code => Hoisting
// foo = 'Hello' is defined globally but in function block foo = undefined will be there