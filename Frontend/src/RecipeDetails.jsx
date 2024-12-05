import {Link, useParams} from 'react-router-dom';
import { FC, useState, useEffect } from 'react';


function RecipeDetails() {
    const {recipeID} = useParams();
    
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/recipes')
        .then(response => response.json())
        .then(data => setRecipes(data));
    }, []);

    const recipe = recipes.find(r => r._id === recipeID);

    return (
        <>
        <h2>{recipe.title}</h2>  
        <p>{recipe.cuisineType}</p>
        <p>{recipe.ingredients}</p>
        <p>{recipe.totalPrepTime}</p>
        <p>{recipe.totalCookTime}</p>
        <p>{recipe.instructions}</p>
        <p>{recipe.uploadDate}</p>
        <p><Link to="/">All Recipes</Link></p>
        </>
    )

}
export default RecipeDetails;