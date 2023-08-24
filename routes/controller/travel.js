const express = require('express');
const router = express.Router();
const addTravel = require('../service/travelService/addTravel')
const deleteTravel = require('../service/travelService/deleteTravel')
const getMyTravelInfo = require('../service/travelService/getMyTravelInfo')

router.get('/getMyTravelInfo', async (req, res, next) => {
    return res.json(await getMyTravelInfo.getMyTravelInfo(req.query.userId));
});

router.post('/addTravelInfo', async (req, res, next) => {
    return res.json(await addTravel.addTravel(req.body));
});

router.delete('/deleteTravelInfo', async (req, res, next) => {
    return res.json(await deleteTravel.deleteTravel(req.body));
});

module.exports = router;