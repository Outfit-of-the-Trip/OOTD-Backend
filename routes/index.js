const express = require('express')
const router = express.Router()

const userController = require('./controller/user')
const friendController = require('./controller/friend')
const travelController = require('./controller/travel')
const testController = require('./controller/test')
const recommendController = require('./controller/recommend')
const closetController = require('./controller/closet')

router.use('/users', userController)
router.use('/friends', friendController)
router.use('/travel', travelController)
router.use('/test', testController)
router.use('/recommend', recommendController)
router.use('/closet', closetController)

module.exports = router