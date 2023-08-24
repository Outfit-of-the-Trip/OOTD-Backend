const express = require('express');
const router = express.Router();

const getMyFriends = require('../service/friendService/getMyFriends')
const getFriendRequests = require('../service/friendService/getFriendRequests')
const getFriendAccept = require('../service/friendService/getFriendAccept')
const findFriend = require('../service/friendService/findFriend')
const addFriend = require('../service/friendService/addFriend')
const deleteFriend = require('../service/friendService/deleteFriend')

router.get('/myFriends', async (req, res, next) => {
    return res.json(await getMyFriends.getMyFriends(req.query.userId) );
});

router.get('/myRequest', async (req, res, next) => {
    return res.json(await getFriendRequests.getFriendRequests(req.query.userId) );
});

router.get('/myResponse', async (req, res, next) => {
    return res.json(await getFriendAccept.getFriendAccept(req.query.userId));
});

router.get('/searchFriends', async (req, res, next) => {
    return res.json(await findFriend.findFriend(req.query.userId));
});

router.post('/addFriends', async (req, res, next) => {
    return res.json(await addFriend.addFriend(req.body));
});

router.post('/deleteFriend', async (req, res, next) => {
    return res.json(await deleteFriend.deleteFriend(req.body));
});

module.exports = router;