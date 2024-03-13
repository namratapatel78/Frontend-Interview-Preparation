// builtin shallow clone method
console.log(
  Object.assign({}, {a: 1, b:2})  // target: {}, source: {a: 1, b:2}
)

let target = {
  c: -1
}
console.log(
  Object.assign(target, {a: 1, b:2}, {c: 3})
)
console.log(target) // {a:1, b:2, c:3}

target = {
  c: -1
}
console.log(
  Object.assign({}, target, {a: 1, b:2}, {c: 3}) //  {a:1, b:2, c:3}
)
console.log(target) // { c:-1 }
