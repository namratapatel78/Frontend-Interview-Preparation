var hello = function sayHello() {
  console.log("Hello");
};
console.log("wait");
// setInterval(sayHello, 1000);

var intervalId = setInterval(hello, 1000);
clearInterval(intervalId);
