const Recipe = require('../models/Recipe')

exports.create = (RecipeData) => {
    return Recipe.create(RecipeData)
}
exports.getAll = () => Recipe.find();
exports.getOne = (recipeId) => Recipe.findById(recipeId);
exports.checkRecommendation = (recommendersArr) => {
    recommendersArr.forEach((recommenders) => {
        if (userId == recommenders)
            return true
    })
    return false;
}