const Recipe = require('../models/Recipe')

exports.create = (RecipeData) => {
    return Recipe.create(RecipeData)
}

exports.getAll = () => Recipe.find();

exports.getOne = (recipeId) => Recipe.findById(recipeId);

exports.checkRecommendation = (recommenders, userId) => {
    for (const recommender of recommenders) {
        if (userId == recommender) {
            return true;
        }
    }
    return false;
}

exports.recommend = async (recipeId, userId) => {
    const recipe = await this.getOne(recipeId, userId)
    recipe.recommendList.push(userId);
    return this.edit(recipeId, recipe)

}
exports.edit = (recipeId, recipeData) => Recipe.findByIdAndUpdate(recipeId, recipeData)