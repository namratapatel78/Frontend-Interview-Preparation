function Person() {
  console.log(this)
  this.firstName = 'John'
  this.lastName = 'Doe'
  console.log(this)
  return { greeting: 'Hello'}
}

var john = new Person();  // with new keyword it creates an empty object
console.log(john)


function Person2() {
  console.log(this)  // empty object
  this.firstName = 'John'
  this.lastName = 'Doe'
  console.log(this)  // if return statement is not present then it will return this
}

var john = new Person2();
console.log(john)