// var flat = function (obj, n) {
//     let result = obj;
//     if (n === 0) {
//       return result;
//     }
//     const flatten = (obj) => {
//       let res = {};
//       for (let key in obj) {
//         if (typeof obj[key] === 'object') {
//           res = {...res, ...obj[key]};
//         } else {
//           res[key] = obj[key];
//         }
//       }
//       return res;
//     }
//     for (let i=0; i<n; i++) {
//       result = flatten(result);
//     }
//     return result;
//   };


  const nested = {
    a: {
      b: {
        c: 1
      },
      d: 2
    },
    e: 3
  };

  // const result = {
  //   a.b.c: 1,
  //   a.d: 2,
  //   e: 3
  // };

  const flattenObject = (obj, parentKey = '', result = {}) => {
    for (let [key, value] of Object.entries(obj)) {
      const newKey = parentKey ? `${parentKey}.${key}` : key;
      console.log('typeof value', typeof value);
      if (typeof value === 'object') {
        flattenObject(value, newKey, result);
      } else {
        result[newKey] = value;
      }
      // console.log(key, value);
    }
    return result;
  }

  console.log(flattenObject(nested));