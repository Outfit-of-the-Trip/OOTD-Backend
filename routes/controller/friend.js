const express = require('express');
const router = express.Router();
const getMyFriends = require('../service/friendService/getMyFriends')

router.get('/friends.find_by_userid', async (req, res, next) => {
    return res.send(JSON.stringify(await getMyFriends.getMyFriends(req.query.userID)));
});

module.exports = router;