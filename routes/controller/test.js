const express = require('express');
const router = express.Router();

const getUserTable = require('../service/testService/getUserTable')
const getFriendsTable = require('../service/testService/getFriendsTable')
const getTravelTable = require('../service/testService/getTravelTable')



router.get('/getUserTable', async (req, res, next) => {
    return res.json(await getUserTable.getUserTable());
});

router.get('/getFriendsTable', async (req, res, next) => {
    return res.send(JSON.stringify(await getFriendsTable.getFriendsTable()));
});

router.get('/getTravelTable', async (req, res, next) => {
    return res.send(JSON.stringify(await getTravelTable.getTravelTable()));
});

module.exports = router;