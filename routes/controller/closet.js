const express = require('express');
const router = express.Router();
const multer = require('multer');

const uploadClosetImage = require('../service/closetService/uploadClosetImage')
const getClosetData = require('../service/closetService/getClosetData')

const upload = multer({ dest: 'uploads/', limits: { fileSize: 5 * 1024 * 1024 } });


router.get('/uploadClosetImage', async (req, res, next) => {
    return res.sendfile('./upload.html');
});

router.post('/uploadClosetImage', upload.single('img'), async (req, res, next) => {
    return res.send(await uploadClosetImage.uploadClosetImage(req));
});

router.post('/getClosetData',  async (req, res, next) => {
    return res.send(await getClosetData.getClosetData(req.body));
});

module.exports = router;