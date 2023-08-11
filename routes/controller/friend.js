const express = require('express');
const router = express.Router();
const getMyFriends = require('../service/friendService/getMyFriends')
const getFriendRequests = require('../service/friendService/getFriendRequests')
const getFriendAccept = require('../service/friendService/getFriendAccept')
const findFriend = require('../service/friendService/findFriend')
const addFriend = require('../service/friendService/addFriend')
const deleteFriend = require('../service/friendService/deleteFriend')

router.get('/friends.find_by_userid', async (req, res, next) => {
    return res.send(await getMyFriends.getMyFriends(req.query.userID));
});

router.get('/friends.request', async (req, res, next) => {
    return res.send(await getFriendRequests.getFriendRequests(req.query.userID));
});

router.get('/friends.accept', async (req, res, next) => {
    return res.send(await getFriendAccept.getFriendAccept(req.query.userID));
});

router.get('/friends.info', async (req, res, next) => {
    return res.send(await findFriend.findFriend(req.query.userID));
});

router.post('/friends.info', async (req, res, next) => {
    return res.send(await addFriend.addFriend(req.body));
});

router.delete('/friends.info', async (req, res, next) => {
    return res.send(await deleteFriend.deleteFriend(req.body));
});

module.exports = router;