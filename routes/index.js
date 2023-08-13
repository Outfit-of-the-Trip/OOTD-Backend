const express = require('express')
const router = express.Router()

const userController = require('./controller/user')
const friendController = require('./controller/friend')
const TravelController = require('./controller/travel')
//const closetController = require('./controller/closet')

router.use('/users', userController)
router.use('/friends', friendController)
router.use('/travel', TravelController)
//router.use('/closet', closetController)

module.exports = router