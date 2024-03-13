const a = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 0);
});

const b = new Promise((resolve, reject) => {
  setTimeout(() => resolve(2), 0);
});

// a.then(res => res)
//   .then(res2 => {
//   b.then(two => console.log(res2+two))
// })

const fn = async () => {
  console.log(await a());
};

fn();

// function resolveAfter2Seconds(x) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(x);
//     }, 2000);  });
// }
// async function f1() {
//   const x = await resolveAfter2Seconds(10);
//   console.log(x); // 10
// }
// f1();
