var person = {
  firstname: "Default",
  lastname: "Default",
  getFullname: function () {
    return this.firstname + " " + this.lastname;
  },
};

var john = {
  firstname: "John",
  lastname: "Doe",
};

// Don't do this EVER! for demo purpose only - causes huge performance issues
john.__proto__ = person;
console.log(john.getFullname());
console.log(john.firstname);

for (var key in john) {
  console.log(key + " " + john[key]); // gets the prototype properties as well
}

for (var key in john) {
  if (john.hasOwnProperty(key)) {
    console.log(key + " " + john[key]);
  }
}
