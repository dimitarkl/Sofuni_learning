const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        minLength: 5,
        required: [true, 'Title is required']
    },
    ingredients: {
        type: String,
        minLength: 10,
        maxLength: 200,
        required: [true, 'Desciption are required']
    },
    instructions: {
        type: String,
        minLength: 10,
        required: [true, 'Instructions are required']
    },
    description: {
        type: String,
        minLength: 10,
        maxLength: 100,
        required: [true, 'Description is required']
    },
    image: {
        type: String,
        match: /^https?:\/\//,
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