var intervalId;
var runCount = 0;

function sayHello() {
  runCount++;  // 1, 2, 3, 4, 5, 6
  if (runCount > 5) {
    console.log(runCount)
    clearInterval(intervalId);
  }
  console.log('Hello');
}
console.log('wait');  // wait
intervalId = setInterval(sayHello, 1000); // 6 times Hello


setInterval(function() { // anonymous function
  console.log('anonymous')
}, 1000)
