const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

exports.generateToken = (req, res, next) => {
    const email = req.body.email;
    if(!email) console.log("Email Not Found");
    const token = jwt.sign({email: email}, process.env.TOKEN_SECRET, {expiresIn: '6h'});
    if(!token) console.log("Token not generated");
    res.status(200).json({
        message: 'Token generated successfully.',
        token: token 
    });
}

exports.authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader.split(' ')[1]
    if(!token) console.log("Token Not Found");
    try{
      jwt.verify(token, process.env.TOKEN_SECRET);
      res.status(200).json({message: 'Token authenticated successfully.'});
    }
    catch(err){
      res.status(403).json({message: 'Invalid token.'});
    }
}