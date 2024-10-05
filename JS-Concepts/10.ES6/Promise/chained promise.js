const myPromise = new Promise(myExecutorFunc)
  .then(handleFulfilledA)
  .then(handleFulfilledB)
  .then(handleFulfilledC)
  .catch(handleRejectedAny);

// 2
new Promise((res, rej) => {
  return res(1);
})
  .then((res) => {
    console.log(res);
    return res * 2;
  })
  .then((res) => {
    console.log(res);
    return res * 2;
  })
  .then((res) => {
    console.log(res);
    return res * 2;
  });
