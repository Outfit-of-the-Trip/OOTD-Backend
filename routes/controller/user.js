const express = require('express');
const router = express.Router();
const userService = require('../service/userService/getInfo')

router.get('/user.info', async (req, res, next) => {
    var usrId = req.query.userID;
    var userInfo = await userService.getInfo(usrId);
    console.log(JSON.stringify(userInfo))
    return res.send(JSON.stringify(userInfo));
});

module.exports = router;