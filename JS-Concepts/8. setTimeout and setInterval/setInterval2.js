var intervalId;
var runCount = 0;

function sayHello() {
  runCount++;
  if (runCount > 5) {
    console.log(runCount)
    clearInterval(intervalId);
  }
  console.log('Hello');
}
console.log('wait');  // wait
intervalId = setInterval(sayHello, 1000);


setInterval(function() { // anonymous function
  console.log('anonymous')
}, 1000)


// wait
// Hello
// Hello
// Hello
// Hello
// Hello
// 6
// Hello
