var Sequence = (function sequenceIIFE() {
  // Object that's returned from the IIFE.
  return {
  };
  
}());
alert(typeof Sequence); // alerts "object"


var Sequence = (function sequenceIIFE() {
  // Private variable to store current counter value.
  var current = 0;
  // Object that's returned from the IIFE.
  return {
      getCurrentValue: function() {
          return current;
      },
      getNextValue: function() {
          current = current + 1;
          return current;
      }
  };
}());
console.log(Sequence.getNextValue()); // 1
console.log(Sequence.getNextValue()); // 2
console.log(Sequence.getCurrentValue()); // 2



var result = function() {
  console.log("From IIFE!");
}();
// In the above example, function keyword isn’t the first word in the statement.
// So JavaScript doesn’t treat this as a function statement/definition