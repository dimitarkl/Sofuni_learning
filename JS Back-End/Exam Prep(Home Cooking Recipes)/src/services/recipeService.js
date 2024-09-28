const Recipe = require('../models/Recipe')

exports.create = (RecipeData) => {
    return Recipe.create(RecipeData)
}
exports.getAll = () => Recipe.find();