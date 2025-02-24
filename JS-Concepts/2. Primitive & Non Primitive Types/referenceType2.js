// http://jsbin.com/?js,console

var person = {
  name: "Max",
  age: 23,
  hobbies: ["dancing", "singing"]
};
console.log(person); // { name: "Max", age: 23, hobbies: ["dancing", "singing"]}

var thirdPerson = {
  name: "Max",
  age: 23,
  hobbies: ["dancing", "singing"]
};

var secondPerson = Object.assign({},person);
console.log(secondPerson); // { name: "Max", age: 23, hobbies: ["dancing", "singing"]}

person.name = "Tyler";
console.log(secondPerson); // { name: "Max", age: 23, hobbies: ["dancing", "singing"]}
// Since secondPerson was created as a shallow copy, its name property remains "Max". Changes to person.name do not affect secondPerson.name.

console.log(thirdPerson); // { name: "Max", age: 23, hobbies: ["dancing", "singing"]}