// fetch is the new api provided by the browser - easy way to make http request
// fetch will also return a promise
// fetch utilizes ES6 Promises internally
// In fetch, we need to change the response to json

// https://fakestoreapi.com/products
// https://jsonplaceholder.typicode.com/posts

// get
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => {
    console.log(res);
    res.json().then((data) => {
      // json() also returns promise
      console.log(data);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// post
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Success:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// Axios
// https://chatgpt.com/c/681f65a7-f004-800c-849b-c1caffd5af21
// https://axios-http.com/docs/api_intro
