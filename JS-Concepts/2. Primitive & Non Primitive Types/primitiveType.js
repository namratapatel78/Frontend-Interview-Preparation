//  Data types in JS => primitives and object

// Number, String, Boolean, null, undefined, NaN, Object

// 1. Value/Primitive types - 6
//   -> Number, String, Boolean, null, undefined, Symbol,
//      NaN(not an primitive type exactly but we can consider it). // Number(undefined) -> NaN
//      Everything else is an Object.
//   -> immutable - original value is not changed - cause pass by value
//   -> compared by value
//   -> copied by value
//   -> Stored in stack memory as we don't need much space (simple data). Takes less space

// 2. Reference types (mutable)
//   -> Object, Arrays, Functions, Regular expression (Arrays and functions are also objects)
//   -> mutable - cause pass by reference
//   -> compared by reference
//   -> copied by reference
//   -> stored in heap memory as we need much space (complex data). Takes more space
//   -> E.g. The element is created in the heap which creates an object.
//      But we have a pointer in the stack which stores reference. The variable stores reference.

// 6+"hello" => NaN
// typeof NaN => number (typeof operator)

var name = "Max";
console.log(name); // Max

var secondName = name;
console.log(secondName); // Max

name = "Tyler";
console.log(secondName); // Max

// null is an assigned value. It means nothing.
// undefined means a variable has been declared but not defined yet.
// null is an object. undefined is of type undefined.
// null !== undefined but null == undefined.

console.log(typeof null); // object -> it's a bug -> It should be null

// Stack vs Heap
// Stack - Less memory space, access is faster
// Heap - More memory space, access is slower than stack

// Whenever we store any primitive type data in variable -> It gets stored on top of the stack
