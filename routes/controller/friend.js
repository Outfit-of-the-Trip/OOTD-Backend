const express = require('express');
const router = express.Router();
const getMyFriends = require('../service/friendService/getMyFriends')
const getFriendRequests = require('../service/friendService/getFriendRequests')

router.get('/friends.find_by_userid', async (req, res, next) => {
    return res.send(await getMyFriends.getMyFriends(req.query.userID));
});

router.get('/friends.request', async (req, res, next) => {
    return res.send(await getFriendRequests.getFriendRequests(req.query.userID));
});

module.exports = router;