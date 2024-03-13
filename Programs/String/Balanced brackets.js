const isBalanced = (str) => {
  let map = {")":"(","}":"{","]":"["}
  let arr = []
  
  for (let i in str) {
    if(Object.keys(map).includes(str[0])) {
      return false;
    }
    else if (Object.values(map).includes(str[i])) {
      arr.push(str[i])
    }
    else if(Object.keys(map).includes(str[i])) {
      console.log("dgfhgc ", arr, arr[arr.length-1], map[str[i]])
      if (arr[arr.length-1] === map[str[i]]) {
        arr.pop();
      }
    }
  }
  
  return !arr.length

}


console.log(isBalanced("[{(ghjgh)}[]]"))