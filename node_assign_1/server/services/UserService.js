const User = require('../models/UserModel');
const fs = require('fs');

async function createUser(res, userObj) {
  try {
    let result = await User.insertMany(userObj);
    if(!result) throw new Error('Failed to create user.')
    res.end(JSON.stringify({ message: 'Users created successfully.' }));
    createDirectoryIfNotExits(userObj);
  } catch (err) {
    res.end(JSON.stringify({ message: err.message }));
  }
}

function createDirectoryIfNotExits(userObj){
  try {
    for(let index = 0; index < userObj.length; index++){
      let path = `./${userObj[index].country}/${userObj[index].state}/${userObj[index].name}`;
      const fileContent = userObj[index].about;
      fs.exists(path, (exists) => {
        if(exists) return createFile(path, fileContent);
        fs.mkdir(path, {recursive: true}, (err) => {
          if (err) throw new Error('Failed to create directory.')
          createFile(path, fileContent);
        });
      })  
    }
  } catch (err) {
    console.log(err.message)
  }
}

function createFile(path, content){
  try {
    fs.writeFile(path + '/about.txt', content, (err) => {
      if (err) throw new Error('Failed to create file.')
    });
  } catch (err) {
    console.log(err.message)
  }
}

module.exports = {
  createUser
}