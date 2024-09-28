const router = require('express').Router();

const recipeService = require('../services/recipeService')
const { isAuth } = require('../middlewares/authMiddleware')
const { getErrorMessage } = require('../utils/errorUtils')


router.get('/recipe/create', isAuth, (req, res) => {
    res.render('create');
})
router.post('/recipe/create', isAuth, async (req, res) => {
    const newRecipe = {
        ...req.body,
        owner: req.user._id
    }
    console.log(req.body)
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
    res.render('details', { recipe })
})

module.exports = router;