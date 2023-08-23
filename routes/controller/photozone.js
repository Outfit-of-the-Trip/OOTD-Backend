const express = require('express');
const router = express.Router();

const getPhotozone = require('../service/photozoneService/getPhotozone')


router.get('/getPhotozone', async (req, res, next) => {
    return res.json(await getPhotozone.getPhotozone());
});

module.exports = router;