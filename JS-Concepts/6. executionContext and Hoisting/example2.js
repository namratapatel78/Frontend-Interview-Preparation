// 1.
function b() {        // lexically sitting in the global environment, so it's outer env will be global execution context
	console.log(myVar); // 1
}

function a() {
	var myVar = 2;
	b();
}

var myVar = 1;
a();



// 2.
function a() {
  // function b is created during creation phase of function a's execution context 
  function b() {
      console.log(myVar); // 1
  }
  b();
}

var myVar = 1;
a();