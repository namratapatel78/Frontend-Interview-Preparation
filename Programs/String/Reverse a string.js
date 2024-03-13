const str = 'I am Namrata '
let revStr = ''
let index = str.length - 1

while (index > -1) {
  revStr += str[index]
  --index
}

console.log(revStr);
