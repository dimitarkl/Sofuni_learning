const router = require('express').Router();

const recipeService = require('../services/recipeService')
const { isAuth, isOwner } = require('../middlewares/authMiddleware')
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
    const userId = req?.user?._id
    let isOwner = false;
    if (recipe.owner == userId) isOwner = true;
    const hasRecommended = recipeService.checkRecommendation(recipe, userId)
    res.render('details', { recipe, isOwner, hasRecommended })
})

router.get('/recipe/:recipeId/recommend', isAuth, async (req, res) => {
    const recipeId = req.params.recipeId;
    const userId = req.user._id;
    const recipe = await recipeService.getOne(recipeId).lean()
    try {
        await recipeService.recommend(recipeId, userId)
        res.redirect(`/recipe/${recipeId}`)
    }
    catch (err) {
        res.render(`details`, { recipe, error: getErrorMessage(err) })
    }

})

router.get('/recipe/:recipeId/delete', isAuth, async (req, res) => {
    const recipeId = req.params.recipeId;
    const recipe = await recipeService.getOne(recipeId).lean()
    if (req.user._id != recipe.owner) return res.redirect(`/recipe/${recipeId}`)
    try {
        await recipeService.delete(req.params.recipeId)
        res.redirect('/')
    } catch (err) {
        res.redirect('/', { error: getErrorMessage(err) })
    }

})

router.get('/recipe/:recipeId/edit', isAuth, async (req, res) => {
    const recipeId = req.params.recipeId;
    const recipe = await recipeService.getOne(recipeId).lean()

    if (req.user._id != recipe.owner) return res.redirect(`/recipe/${recipeId}`)

    res.render('edit', { recipe })
})

router.post('/recipe/:recipeId/edit', isAuth, async (req, res) => {
    const recipeId = req.params.recipeId;
    const recipe = await recipeService.getOne(recipeId).lean()

    if (req.user._id != recipe.owner) return res.redirect(`/recipe/${recipeId}`)

    await recipeService.edit(recipeId, req.body)
    res.redirect(`/recipe/${recipeId}`)
})


module.exports = router;