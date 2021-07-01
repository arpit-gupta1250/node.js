const fetch = require('node-fetch');
const flag = true

async function getUsers(){
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await res.json();
        if(flag){
            throw new Error('-----error occured-----')
        }
        console.log(users[0]['name'])
    } catch (err) {
        console.log(err.name)
        console.log(err.message)
    } finally {
        console.log('In finally block')
    }
}

getUsers()