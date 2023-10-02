const express = require('express');
const router = express.Router();

const uploadClosetImage = require('../service/closetService/uploadClosetImage')
const getClosetData = require('../service/closetService/getClosetData')


router.post('/uploadClosetImage', async (req, res, next) => {
    return res.send(await uploadClosetImage.uploadClosetImage(req.body));
});

router.post('/getClosetData',  async (req, res, next) => {
    return res.send(await getClosetData.getClosetData(req.body));
});

module.exports = router;