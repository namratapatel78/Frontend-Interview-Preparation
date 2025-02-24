// http://jsbin.com/?js,console

let myVariable;
let myFunction = function() {
  let myVariable1 = 'myVariable is awesome';
  console.log(myVariable1);
  let innerFunction = function () {
    console.log(myVariable1);
  }
};

console.log(myVariable);
myFunction();