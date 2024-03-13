const str = 'abbcbba';

const isPalindrome = (data) => {
  const len = data.length;
  const loop = Math.ceil(len/2);
  for (let i=0; i<loop; i++) {
    if (data[i] !== data[len-1-i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome(str));