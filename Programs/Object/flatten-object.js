var flat = function (obj, n) {
    let result = obj;
    if (n === 0) {
      return result;
    }
    const flatten = (obj) => {
      let res = {};
      for (let key in obj) {
        if (typeof obj[key] === 'object') {
          res = {...res, ...obj[key]};
        } else {
          res[key] = obj[key];
        }
      }
      return res;
    }
    for (let i=0; i<n; i++) {
      result = flatten(result);
    }
    return result;
  };