const express = require('express');
const router = express.Router();
const multer = require('multer'); 
const fs = require('fs');
const path = require("path")

const uploadClosetImage = require('../service/closetService/uploadClosetImage')

var storage  = multer.diskStorage({ 
    destination(req, file, cb) {
        cb(null, '/upload/');
    },
    filename(req, file, cb) {
        var extension = path.extname(file.originalname);
        cb(null, path.basename(file.originalname.split(".")[0])+"-"+Date.now()+extension);
    },
});
var uploadFile = multer({ storage: storage }); 


router.get('/uploadClosetImage', async (req, res, next) => {
    return res.json(await uploadClosetImage.uploadClosetImage(req.body));
});

module.exports = router;