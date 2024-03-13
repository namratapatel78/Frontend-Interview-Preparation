// 1
function Person(firstname, lastname) {
  this.firstname = firstname
  this.lastname = lastname
  this.getFullname = function () {  // every object created using new keyword gets it's own copy of this method & takes more memory space
    return this.firstname + ' ' + this.lastname;
  }
}

var john = new Person('John', 'Doe')  // creats an empty object
console.log(john)
var jane = new Person('Jane', 'Doe')
console.log(jane)

// 2 - function constructors and prototype
function Person2 (firstname, lastname) {
  this.firstname = firstname
  this.lastname = lastname
}
Person2.prototype.getFullname = function () {  // only one copy to be used // use this for efficiency
  return this.firstname + ' ' + this.lastname;
}
var john = new Person2('John', 'Doe')
console.log(john)
var jane = Person2('Jane', 'Doe')
console.log(jane)  // retuns undefined