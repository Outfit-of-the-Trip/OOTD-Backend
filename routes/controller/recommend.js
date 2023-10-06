const express = require('express');
const router = express.Router();

const getRecommend = require('../service/recommendService/getRecommend')
const test = require('../service/recommendService/test')


router.post('/getRecommend', async (req, res, next) => {
    return res.json(await getRecommend.getRecommend(req.body));
});

router.get('/test', async (req, res, next) => {
    return res.send(typeof(await test.test()));
});

module.exports = router;