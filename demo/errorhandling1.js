const fetch = require('node-fetch');
const flag = false

fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
        if (flag) {
            throw new Error('Error in api call')
        } else {
            return res.json()
        }
    })
    .then((res) => {
        console.log(res[0]['name'])
    })
    .catch((err) => {
        console.log(err.message)
    })