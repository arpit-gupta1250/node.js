const Files = require('../models/uploadFiles');

exports.uploadFile = (req, res, next) => {
  if(req.files.length == 0) return res.json({ status: 'Failed'});
  return res.json(
    {
      status: 'Success',
      number_of_files_uploaded: req.files.length
    }
  );  
}