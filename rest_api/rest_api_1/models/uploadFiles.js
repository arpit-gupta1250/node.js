const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const filesSchema = new Schema(
  {
    files:{
      type: Array,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('files', filesSchema);