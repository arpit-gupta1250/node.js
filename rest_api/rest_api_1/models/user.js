const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email:{
      type: String,
      // required: true  
    },
    password:{
      type: String,
      // required: true  
    },
    name:{
        type: String,
    },
    mobile:{
        type: String,  
    },
    age:{
        type: Number,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('users', userSchema);