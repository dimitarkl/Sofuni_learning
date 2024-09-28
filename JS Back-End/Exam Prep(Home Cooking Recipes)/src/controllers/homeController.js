const router = require('express').Router();

const { isAuth } = require('../middlewares/authMiddleware')
const recipeService = require('../services/recipeService')

router.get('/', async (req, res) => {
    try {
        let recipes = await recipeService.getAll().lean();
        recipes = recipes.slice(-3).reverse();
        res.render('home', { recipes });
    } catch (err) {
        res.render('home', { error: err })
    }
})

router.get('/search', async (req, res) => {
    const { search } = req.query;
    const result = await recipeService.search(search)
    res.render('search', { recipes: result, search });
})

router.get('/404', (req, res) => {
    res.render('404');
});

module.exports = router;