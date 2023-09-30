const express = require('express');
const router = express.Router();

const getUserTable = require('../service/testService/getUserTable')
const getFriendsTable = require('../service/testService/getFriendsTable')
const getTravelTable = require('../service/testService/getTravelTable')
const getClosetTable = require('../service/testService/getClosetTable')


router.get('/getUserTable', async (req, res, next) => {
    return res.json(await getUserTable.getUserTable());
});

router.get('/getFriendsTable', async (req, res, next) => {
    return res.json(await getFriendsTable.getFriendsTable());
});

router.get('/getTravelTable', async (req, res, next) => {
    return res.json(await getTravelTable.getTravelTable());
});

router.get('/getClosetTable', async (req, res, next) => {
    return res.json(await getClosetTable.getClosetTable());
});

module.exports = router;