const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    ingredients: {
        type: String,
        required: [true, 'Desciption are required']
    },
    instructions: {
        type: String,
        required: [true, 'Instructions are required']
    },
    description: {
        type: String,
        required: [true, 'Description is required']
    },
    image: {
        type: String,
        required: [true, 'Image is required']
    },
    recommendList: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
})
const Recipe = mongoose.model('Recipe', recipeSchema)
module.exports = Recipe;