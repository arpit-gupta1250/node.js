const fetch = require('node-fetch');

fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
        return res.json()
    })
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })