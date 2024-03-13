// What happens when we enter any url in browser


console.log(a)
var a = 5/3;
console.log(a)

function a () {
	console.log(1);
}

function b() {
	for(let i=0;i<5;i++) {
		console.log(2);
  }
}


function c() {
	promise(true).then(() => console.log(3))
}

function d() {
	setTimeout(()=>console.log(4),0)
}

function e() {
	raf(console.log(5));
}

a() // 1
b() //  2  2 2 2 2
c() // 3
d()  // 4
e() 
//


for (let i=0;i<5;i++) {
	setTimeout(() => console.log(i), 1000);
}


SumValue(1)(2)(3)()
SumValue(1,2,3)()
SumValue(1,2)(3)()
SumValue(1)(2,3)()


function SumValue(...arg) {
let sum = 0
for (let i of arg) {
		sum = sum + i
}

	return function (...args) {
if (args.length > 0) {
	 for (let i of args) {
		sum = sum + i
}
return SumValue(sum)
} else {
	Return sum
}


}
}


console.log(SumValue(1)(2,3)())








Html doc

	  			a			-1
        /    \ 
       b      c 		-2 
      / \   /   \
     d   e  f   g    		-3
               /  \ 
              h   i   		-4 
                         
  a,b,c,d,e,f - input
  
  next = genrate(a);
  
  next() ~ [a]
  next() ~ [b,c]
  next() ~ [d,e,f,g]
  next() ~ [h,i]
  next() ~ []
  next() ~ []
  
  
  function genrate(root)
  {
  let level =0;
  	let res = [];
    let ele = [document.getElememtById(root)]
    let cur = document.getElememtById(root)

   return function () {
   
   if (level == ) {
   	
   }
   for (let i in ele) {
    cur = ele[i]  // a
    let child = cur.getChildren() // [b, c]
   }

    return res
   }
  }
  
  _______________________________________________
  
// ES6 - classical inheritance
class Car {
  constructor(type) {
    this.type = type;
  }
  displayType() {
    return 'type ' + this.type;
  }
}

class Maruti800 extends Car {
  constructor(type, title) {
    super(type);
    this.title = title;
  }
  getTitle() {
    return this.title;
  }
}

// ES5 - Prototypal inheritance
function Car (type) {
	this.type = type
  this.displayType = function () {
  	return 'type ' + type
  }
}

Maruti800.prototype = Object.create(Car.protoype)

function Maruti800 () {
	this.title = title
	this.getTitle = function () {
    return title
  }
}

// 
let obj = {a:1, b:2}

let obj2 = obj

let obj2 = {...obj}

obj.a =4



// Polyfill for promise.all()
M -  { m1,m2,m3 }  // mandatory promise
O - { o1,o2,o3}  // non mandatory promise

// isMandatory(m) ~ true,false

let arr = [m1, o1, m2, o2, m3, o3];

function isResolved(arr) {
	let result = []
	for (let i in arr) {
  	if (isMandatory(arr[i])) {
			arr[i].then((res) => {
       result[i] = res
			}).catch((err) => {
      	result[i] = err
       return false
      })
    }
    else {
    	arr[i].then((res)=> {
       result[i] = res
      })
    }
  }
  return true
}

isResolved() ~ true/false


isMandatory(arr[0]) ~ true;
isMandatory(arr[1]) ~ false;







