const router = require('express').Router();

const homeController = require('./controllers/homeController')
const authController = require('./controllers/authController')
const recipeController = require('./controllers/recipeController')

router.use(homeController)
router.use('/auth', authController)
router.use(recipeController)

router.get('*', (req, res) => {
    res.redirect('/404');
});

module.exports = router