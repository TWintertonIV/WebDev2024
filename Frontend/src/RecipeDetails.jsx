import {Link, useParams} from 'react-router-dom';
import { FC, useState, useEffect } from 'react';


function RecipeDetails() {
    const {_id} = useParams();
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch('http://localhost:3000/recipes')
        .then(response => response.json())
        .then(data => {
            setRecipes(data);
            setLoading(false);
        })

    }, []);


    const recipe = recipes.find(r => r._id.toString() === _id);  // Compare ObjectId as string

    if (!recipe) {
        return <p>Recipe not found.</p>;
    }

    return (
        <>
            <h2>{recipe.title}</h2>  
            <p>Cuisine type: {recipe.cuisineType.join(', ')}</p>
            <p>Ingredients: {recipe.ingredients.join(', ')}</p>
            <p>Total prep time: {recipe.totalPrepTime} minutes</p>
            <p>Total cook time: {recipe.totalCookTime} minutes</p>
            <p>Instructions: {recipe.instructions}</p>
            <p>Upload date: {new Date(recipe.uploadDate).toLocaleDateString()}</p>
            <p><Link to="/Recipes">All Recipes</Link></p>
        </>
    );
}

export default RecipeDetails;
