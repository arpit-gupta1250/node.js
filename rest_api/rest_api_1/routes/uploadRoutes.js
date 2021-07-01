const express = require('express');
const uploadController = require('../controllers/uploadController');

const router = express.Router();

const multer = require('multer');
const uuid = require('uuid').v4;
const aws = require('aws-sdk');
const multerS3 = require('multer-s3');
const path = require('path');

let s3 = new aws.S3(
    { 
      apiVersion: '2006-03-01',
      accessKeyId: '',
      secretAccessKey: '' 
    }
  );
let uploadFile = multer(
    {
      storage: multerS3(
        {
          s3,
          bucket: 'demo-upload-nodejs',
          metadata: (req, file, cb) => {
            cb(null, { fieldName: file.fieldname });
          },
          key: (req, file, cb) => {
            const ext = path.extname(file.originalname);
            cb(null, `${uuid()}${ext}`);
          }
        }
      )
    }
  )

router.post('/uploadFile', uploadFile.array('filetoupload'), uploadController.uploadFile);

module.exports = router;