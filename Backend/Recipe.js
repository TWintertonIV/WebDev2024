const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    title: {type: String, required: true},
    ingredients: {type: [String], required: true},
    totalCookTime: {type: Number, required: true},
    instructions: {type: String, required: true},
    uploadDate: {type: Date, default: Date.now},
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
