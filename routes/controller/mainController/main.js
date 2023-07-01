const express = require('express');
const router = express.Router()

router.get('/', async (req, res, next) => {
    //return res.status(200).render('home/index', {auth : req.auth});
    return res.send("mainpage") 
});

module.exports = router;