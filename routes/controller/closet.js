const express = require('express');
const router = express.Router();

const uploadClosetImage = require('../service/closetService/uploadClosetImage')
const getClosetData = require('../service/closetService/getClosetData')


router.post('/uploadClosetImage', async (req, res, next) => {

    console.log(await uploadClosetImage.uploadClosetImage(req.body))
    return res.send(await uploadClosetImage.uploadClosetImage(req.body));
});

router.get('/getClosetData',  async (req, res, next) => {
    return res.json(await getClosetData.getClosetData(req.query.userId));
});

module.exports = router;