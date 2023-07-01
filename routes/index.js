const express = require('express')
const router = express.Router()

const mainController = require('./controller/mainController/main')
const userController = require('./controller/userController/user')

router.use('/', mainController)
router.use('/user', userController)

module.exports = router