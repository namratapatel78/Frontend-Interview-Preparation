let result = function() {
  setTimeout(function() {
    console.log(myVariable); // reference error after 2 seconds
  }, 2000);
};

console.log(result()); // undefined


