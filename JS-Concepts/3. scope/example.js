// 1
var a = 1;
let b = 2;
const c = 3;

if (1) {
  console.log('if block scope a ' + a);
}
console.log('global scope a ' + a);
if (1) {
  console.log('if block scope b ' + b);
}
console.log('global scope b ' + b);
if (1) {
  console.log('if block scope c ' + c);
}
console.log('global scope c ' + c);

// 2 - IMP
if (1) {
  var a = 1;
  console.log('if block scope a ' + a);
}
console.log('global scope a ' + a);
if (1) {
  let b = 2;
  console.log('if block scope b ' + b);
}
console.log('global scope b ' + b);
if (1) {
  const c = 3;
  console.log('if block scope c ' + c);
}
console.log('global scope c ' + c);


// 3
const fun =() => {
  var a = 1;
};
console.log('global scope a ' + a);