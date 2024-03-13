var person = {
  firstname: 'Default',
  lastname: 'Default',
  getFullname: function () {
    return this.firstname + ' ' + this.lastname;
  }
}

var john = Object.create(person)  // supports in new browser
console.log(john)


var jane = Object.create(person)
jane.firstname = 'Jane'
jane.lastname = 'Doe'
console.log(jane)