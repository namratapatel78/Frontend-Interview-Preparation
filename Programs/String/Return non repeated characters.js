let str = 'repeatedaihbfvynxcd'
let obj = {}

str.split('').map( (ele) => {
 if (!obj[ele]) {
    obj[ele] = 1
 } else {
    obj[ele] += 1
 }
})

console.log(obj)

for (let key in obj) {
  if (obj[key] === 1) {
    console.log(key)
  }
}