const Recipe = require('../models/Recipe')

exports.create = (RecipeData) => {
    return Recipe.create(RecipeData)
}

exports.getAll = () => Recipe.find();

exports.getOne = (recipeId) => Recipe.findById(recipeId);

exports.checkRecommendation = (recipe, userId) => {
    const recList = recipe.recommendList
    if (userId = recipe.owner) return true
    for (const recommender of recList) {
        if (userId == recommender)
            return true;
    }
    return false;
}

exports.recommend = async (recipeId, userId) => {
    const recipe = await this.getOne(recipeId, userId)
    if (!this.checkRecommendation(recipe, userId)) {
        recipe.recommendList.push(userId);
        return this.edit(recipeId, recipe)
    }

}
exports.edit = (recipeId, recipeData) => Recipe.findByIdAndUpdate(recipeId, recipeData)
exports.delete = (recipeId) => Recipe.findByIdAndDelete(recipeId)