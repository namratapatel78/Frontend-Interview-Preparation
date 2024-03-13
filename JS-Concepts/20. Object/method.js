const person = { name: 'Lydia' };
Object.keys(person) // ["name"]


const person = { name: 'Lydia' };
Object.defineProperty(person, 'age', { value: 21 });
console.log(person);
console.log(Object.keys(person));