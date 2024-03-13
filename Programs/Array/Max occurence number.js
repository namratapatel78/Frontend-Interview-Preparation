const arr = [1,1,1,7,7,3,3,3,5,5,8]
let count = 0
let maxOccurence = ''
let numCount = {}
let maxArray = []

for (let num of arr) {
  // 1
  if(numCount[num]) {
    ++numCount[num]
  } else {
    numCount[num] = 1
  }
  // OR
  // 2
  // numCount[num] = numCount[num] + 1 || 1
}


for (let obj of Object.entries(numCount)) {
  if (obj[1] > count) {
    maxOccurence = obj[0]
    count = obj[1]
  }
}

for (let obj of Object.entries(numCount)) {
  if (obj[1] === count) {
    maxArray.push(parseInt(obj[0]))
  }
} 

console.log(maxArray)


// 2

const numArray = [1, 1, 1, 7, 7, 3, 3, 3, 5, 5, 8]

let numObj = numArray.reduce((prev, current) => {
  console.log()
})
