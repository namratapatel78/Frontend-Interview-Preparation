console.log([] + []);
console.log([] + {});
console.log({} + []);

// When you use the + operator between non-primitive values, JavaScript tries to convert them to primitives (usually strings).
// [] converted to an empty string ""
// {} converted to string, "[object Object]"

