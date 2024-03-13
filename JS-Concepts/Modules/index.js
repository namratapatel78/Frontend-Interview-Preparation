// AMD

// list of files or modules that we want to include ['./bears.js']. 
// Once that has finished loading, the function is called.
// require(['./bears.js'], function(bears) {
//   console.log(bears); // bears!
// })

// commonJS
// var bears = require('./bears.js')

// ES6
// import bears from './bears.js';
// will create a variable called bears in our scope

import bears, { growl, type as bearType } from './bears.js';
// will create a variable called growl and type in our scope

// import bears, * from './bears.js';
// import bears, * as grizzly from './bears.js';
// console.log(`${grizzly.bears}`);
// * - wild card -> This is import every single export

let says = growl();
console.log(`The ${bearType} says ${says}. Horray ${bears}`);
