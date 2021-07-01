const fetch = require('node-fetch');

async function getUsers(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    console.log(users)
}

getUsers()