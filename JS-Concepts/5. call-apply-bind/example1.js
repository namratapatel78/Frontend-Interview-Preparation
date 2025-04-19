// In JavaScript this refers to the owner object.
// If you want to attach some extra properties to a function,
// then you can do that with these 3 methods (call, apply, bind) and can access that extra property using this keyword.

// without strict mode this will default to Global/Window object

// TODO: Difference in strict and non strict mode?

let bob = function (num, str, x) {
  console.log("bob", num, str, this, x);
};

let billy = {
  name: "Namrata",
  title: "Patel",
  /* myMethod1: function(fn) {
	    fn();
	  } */
  myMethod: function (fn) {
    console.log(arguments);
    fn(arguments[1], arguments[2]);
    fn.apply(billy, [arguments[1], arguments[2]]);
  },
};

bob(1, "hello1");

/* billy.myMethod(bob) */
bob.call(billy, 2, "hello call"); // The call() calls bob function with a given value or context (billy) and other arguments provided in the function.
// call() attaches the billy object to the bob() function and bob() function can access billy object using this.

bob.apply(billy, [3, "hello apply 3"]);
// This method invokes the function and allows you to pass the arguments as an array.

billy.myMethod(bob, 4, "hello apply 4");

// This method returns a new function with the value bound to it,
// which you can use to call the function with the required arguments.
let fred = bob.bind(billy, 5, "hello bind");
fred("x");