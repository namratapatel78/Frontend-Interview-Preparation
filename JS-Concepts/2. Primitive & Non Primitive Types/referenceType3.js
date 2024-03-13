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
person.hobbies.push("cooking");
console.log(secondPerson);  // { name: "Max", age: 23, hobbies: ["dancing", "singing", "cooking"]}

console.log(thirdPerson); // { name: "Max", age: 23, hobbies: ["dancing", "singing"]}

