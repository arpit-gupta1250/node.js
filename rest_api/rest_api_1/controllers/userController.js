let User = require('../models/user');

exports.registerUser = (req, res, next) => {
  const name = req.body.name;
  const age = req.body.age;
  const mobile = req.body.mobile;
  const user = new User({
    name: name,
    age: age,
    mobile: mobile
  });
  user.save().then(result => {
    console.log(result);
    res.status(201).json({
      message: 'User registered successfully.',
      user: result
    });
  }).catch(err => {
    console.log(err);
  })
}

exports.getUserById = async (req, res, next) => {
  const userId = req.params.userId;
  var user = await User.findById(userId);
  if(user){
    console.log(user);
    res.status(200).json({
      message: 'User fetched successfully.',
      user: user
    });
  }
}

exports.getAllUsers = (req, res, next) => {
  const currentPage = req.query.page || 1;
  const usersPerPage = 2;
  let totalUsers;
  User.find()
    .countDocuments()
    .then(count => {
      totalUsers = count;
      return User.find()
        .skip((currentPage - 1) * usersPerPage)
        .limit(usersPerPage)
    })
    .then(users => {
      res.status(200).json({
        message: 'Users fetched successfully.',
        users: users,
        totalUsers: totalUsers
      });
    })
    .catch(err => {
      console.log(err);
      return next(err);
    });
}

exports.updateUser = (req, res, next) => {
  const userId = req.params.userId;
  var age = req.body.age;
  User.findByIdAndUpdate(userId, {age: age}, {new: true}, function(err) { 
    if(err){
      console.log(err);
    }else{
      res.status(200).json({
        message: 'User updated successfully.',
      });
    }
  });
}


exports.deleteUserById = (req, res, next) => {
  const userId = req.params.userId;
  User.findByIdAndRemove(userId)
    .then(result => {
      if(!result) throw new Error("DELETE FAILED")
      res.status(200).json({
        message: 'User deleted successfully.',
      });
    })
    .catch(err => {
      return next(err);
    })
}