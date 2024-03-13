let myVariable = 'the best variable';

let result = function() {
  setTimeout(function() {
    console.log(myVariable); // 'the best variable' after 2 secs
  }, 2000);
};

console.log(result()); // undefined


