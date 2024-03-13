const fetchData = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url).then(res => {
            if (res.status === 200) {
                throw new Error('Error');
            }
            return res.json()
        })
        .then( res => resolve(res))
        .catch( err => reject(err))
    })
}

const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';

fetchData(apiUrl).then(res => console.log(res), err => console.log(err))