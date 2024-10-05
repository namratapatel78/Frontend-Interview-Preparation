(function () {
  console.log(a);
  if (true) {
    var a = "a";
  }
  console.log(a);
  console.log(b);
  const bar = function () {
    var b = "b";
    console.log(b);
  };
  bar();
  console.log(b);
})();
