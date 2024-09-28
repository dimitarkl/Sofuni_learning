const router = require('express').Router();

const { isAuth } = require('../middlewares/authMiddleware')
const recipeService = require('../services/recipeService')

router.get('/', async (req, res) => {
    const recipes = await recipeService.getAll().lean()
    res.render('home', { recipes })
})

module.exports = router;