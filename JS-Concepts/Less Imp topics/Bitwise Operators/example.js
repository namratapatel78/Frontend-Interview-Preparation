// 1 = 00000001
// 2 = 00000010
// 3 = 00000011

// Bitwise OR
console.log(1 | 2); // 3

// Bitwise AND
console.log(1 & 2); // 0


// When can we use bitwise operator - access control system
// Read(00000100), Write(00000010), Execute(00000001)


const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;

console.log(myPermission);

let message = (myPermission | readPermission) ? 'yes' : 'no'

console.log(message)