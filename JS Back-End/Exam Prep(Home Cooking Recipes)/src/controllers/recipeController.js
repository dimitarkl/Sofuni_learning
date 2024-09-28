const router = require('express').Router();

const recipeService = require('../services/recipeService')
const { isAuth } = require('../middlewares/authMiddleware')
const { getErrorMessage } = require('../utils/errorUtils')



router.get('/recipe', async (req, res) => {
    const recipes = await recipeService.getAll().lean()
    res.render('catalog', { recipes })
})

router.get('/recipe/create', isAuth, (req, res) => {
    res.render('create');
})
router.post('/recipe/create', isAuth, async (req, res) => {
    const newRecipe = {
        ...req.body,
        owner: req.user._id
    }
    try {
        await recipeService.create(newRecipe)
        res.redirect('/')
    } catch (err) {
        res.render('create', { newRecipe, error: getErrorMessage(err) })
    }


})

router.get('/recipe/:recipeId', async (req, res) => {
    const recipeId = req.params.recipeId;
    const recipe = await recipeService.getOne(recipeId).lean()
    const userId = req.user._id
    let isOwner = false;
    if (recipe.owner == userId) isOwner = true;
    let hasRecommended = recipeService.checkRecommendation(recipe.recommendList)
    recipe.recommendList.forEach((recommenders) => {
        if (userId == recommenders)
            hasRecommended = true
    })
    res.render('details', { recipe, isOwner, hasRecommended })
})

module.exports = router;