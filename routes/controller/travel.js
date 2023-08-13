const express = require('express');
const router = express.Router();
const addTravel = require('../service/travelService/addTravel')
const deleteTravel = require('../service/travelService/deleteTravel')

router.post('/addTravelInfo', async (req, res, next) => {
    return res.send(JSON.stringify(await addTravel.addTravel(req.body)));
});

router.delete('/deleteTravelInfo', async (req, res, next) => {
    return res.send(JSON.stringify(await deleteTravel.deleteTravel(req.body)));
});

module.exports = router;