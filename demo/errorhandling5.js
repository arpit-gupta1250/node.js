const fetch = require('node-fetch');
const flag = true

fetch('https://jsonplaceholder.typicode.com')
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

process.on('unhandledRejection', (error) => {
  console.log('unhandled Rejection error',error)
})