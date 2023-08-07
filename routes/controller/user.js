const express = require('express');
const router = express.Router();
const userService = require('../service/userService/getInfo')

router.get('/user.info', (req, res, next) => {
    var usrId = req.userID;
    var userInfo = userService.getInfo(userId);
    var test = "branchtest"
    
    return res.send(userInfo);
});