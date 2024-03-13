var len = 5;
var arr = [1,2,3,4,5];
var price = [2,6,8,10,13];
var max = price[len-1];

var obj = {}

let reqLen
let times = 5;


for (var i=0; i< arr.length; i++) {
  obj[arr[i]] = price[i]
}


while (times > 0) {
  if (times === len) {
    console.log(max);
  } else {
    for (var i=0; i<arr.length; i++) {
      let roadPrice;
      if (arr[i]*times === len) {
        roadPrice = price[i]*5;
      }
    }
  }
  times--;
}


console.log(obj)






