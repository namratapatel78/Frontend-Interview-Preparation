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
// person.hobbies = person.hobbies.slice();  // assigned new array
person.hobbies = [...person.hobbies];  // like slice()

console.log(secondPerson); // { name: "Max", age: 23, hobbies: ["dancing", "singing"]}

person.name = "Tyler";
person.hobbies.push("cooking");
console.log(secondPerson); // { name: "Max", age: 23, hobbies: ["dancing", "singing"]}

console.log(thirdPerson); // { name: "Max", age: 23, hobbies: ["dancing", "singing"]}

