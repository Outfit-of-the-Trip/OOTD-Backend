const express = require('express');
const router = express.Router();
const addTravel = require('../service/travelService/addTravel')
const deleteTravel = require('../service/travelService/deleteTravel')

router.get('/travel.info', async (req, res, next) => {
    return res.send(JSON.stringify(await addTravel.addTravel(req.body)));
});

router.delete('/travel.info', async (req, res, next) => {
    return res.send(JSON.stringify(await deleteTravel.deleteTravel(req.body)));
});

module.exports = router;