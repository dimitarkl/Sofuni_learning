const router = require('express').Router();

const homeController = require('./controllers/homeController')
const authController = require('./controllers/authController')
const planetController = require('./controllers/planetController')
router.use(homeController)
router.use('/auth', authController)
router.use(planetController)
module.exports = router