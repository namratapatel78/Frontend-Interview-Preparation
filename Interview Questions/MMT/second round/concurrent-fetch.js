function fetchData(url) {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    return response.json();
  });
}

// Example usage with concurrent fetching
const apiUrl1 = "https://jsonplaceholder.typicode.com/todos/1";
const apiUrl2 = "https://jsonplaceholder.typicode.com/todos/2";

const fetchPromise1 = fetchData(apiUrl1);
const fetchPromise2 = fetchData(apiUrl2);

Promise.all([fetchPromise1, fetchPromise2])
  .then((dataArray) => {
    const [data1, data2] = dataArray;
    console.log("Data 1:", data1);
    console.log("Data 2:", data2);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
