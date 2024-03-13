console.log(bar) // undefined
bar = 10
console.log(bar) // 10
var bar



greetings()
const greetings = () => console.log("First greeting")
greetings()
const greetings = () => console.log("Second greeting") // 
greetings()



greetings()  // Second greeting
var greetings = function() { console.log("First greeting")}
greetings()  // First greeting
function greetings () { console.log("Second greeting")}
greetings() // First greeting


const arr= ['https://jsonplaceholder.typicode.com/posts',
'https://jsonplaceholder.typicode.com/users',
'https://jsonplaceholder.typicode.com/albums',
'https://jsonplaceholder.typicode.com/comments']


obj1 = {name: 'paytm', location:'blr'}
obj2 = {...obj1}
obj2.state = 'karnatka'

multi(2)(3)


function multi (x) {
	return function (y) {
  	return x * y
  }
}

console.log(multi(2)(3))

obj = {
    name: 'paytm',
    fullname: function(){
        return this.name
    }
}

obj = {
    name: 'paytm',
    fullname: () => {
        return this.name
    }
}

function print(){
    console.log('a', a); // undefined
    var a = 10;
    console.log('b',b); // reference error
    let b = 5;
    if(b){
      const c =15;
    }
    console.log('c',c) // refrerence error
}


function hello(){
    console.log('a');
    setTimeout(()=>{
        console.log('b')
    }, 0);
    console.log('c');
}


// web accessibility
// stop watch questions
// custom button group question