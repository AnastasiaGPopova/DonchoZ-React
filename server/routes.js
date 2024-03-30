const router = require('express').Router()
const userController = require('./controllers/userController')
const paintingController = require('./controllers/paintingController')
const emailController = require('./controllers/emailController')


router.use('/users', userController)
router.use('/paintings', paintingController)
router.use('/email', emailController)
module.exports = router