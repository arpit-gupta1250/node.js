const UserService = require('../services/UserService');

function createUser(req, res) {
  try {
    let receivedData = '';
    req.on('data', (chunk) => {
      receivedData += chunk.toString();
    })
    req.on('end', () => {
      receivedData = JSON.parse(receivedData);
      UserService.createUser(res, receivedData);
    })
  } catch(err) {
    res.end(JSON.stringify({ message: 'Failed to create user.' }))
  }
}

module.exports = {
  createUser
}