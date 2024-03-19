const router = require('express').Router()
const userController = require('./controllers/userController')
const paintingController = require('./controllers/paintingController')


router.use('/users', userController)
router.use('/paintings', paintingController)
module.exports = router