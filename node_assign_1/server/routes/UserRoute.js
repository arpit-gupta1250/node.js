const userController = require('../controllers/UserController');

function userRoutes(req, res) {
  const method = req.method;
  const url = req.url;
  
  if(url === '/api/create' && method === 'POST'){
    userController.createUser(req, res);
  }
}

module.exports = userRoutes;