const Recipe = require('../models/Recipe');

// show all recipes from our database
exports.getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.json(recipes);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching recipes', error });
    }
};

// retrieve recipe by unique ID
exports.getRecipeByID = async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);

        if (!recipe) {
            return res.status(404).json({message: "Recipe cannot be found"});   
        }
        res.json(recipe); 
    }
    catch (error) {
        res.status(500).json({message: "Error fetching recipe", error});
    }
};

// render homepage
exports.homepage = async(req, res) => {
    res.render('index', {title: 'Recipe Hub - Home'});
}
