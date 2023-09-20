const express = require('express');
const router = express.Router();

const getRecommend = require('../service/recommendService/getRecommend')


router.post('/getData', async (req, res, next) => {
    return res.json(await getRecommend.getRecommend(req.body));
});

module.exports = router;