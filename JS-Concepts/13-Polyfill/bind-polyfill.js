// use let and ES5 function

let name = {
  firstName: "Namrata",
  lastName: "Patel",
};

let printName = function (city, state, country) {
  console.log(
    this.firstName +
      " , " +
      this.lastName +
      " , " +
      city +
      " , " +
      state +
      " , " +
      country
  );
};

// 1. bind
let printMyName = printName.bind(name, "Bhilai", "Chhattisgarh");
printMyName("India");

// 2. bind polyfill
Function.prototype.myBind = function (...args) {
  let obj = this;
  let params = args.slice(1);
  return function (...args2) {
    // this will be global object here, as this function is called in global execution context
    // obj can be accessed here because of closure
    obj.apply(args[0], [...params, ...args2]);
  };
};

let printMyName2 = printName.myBind(name, "Bhilai", "Chhattisgarh");
printMyName2("India");
