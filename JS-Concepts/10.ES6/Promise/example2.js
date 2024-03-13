// fetch is the new api provided by the browser - easy way to make http request
// fetch will also return a promise
// fetch utilizes ES6 Promises internally
// In fetch, we need to change the response to json

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then( res => {
    console.log(res)
    res.json().then( data => {  // json() also returns promise
      console.log(data)
    })
  })
  .catch( err => {
    console.log(err)
  })


  // https://axios-http.com/docs/api_intro