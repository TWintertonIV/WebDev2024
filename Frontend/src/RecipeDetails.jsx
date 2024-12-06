import {Link, useParams} from 'react-router-dom';
import { FC, useState, useEffect } from 'react';


function RecipeDetails() {
    const {_id} = useParams();
    const [recipes, setRecipes] = useState([]);


    useEffect(() => {
        fetch('http://localhost:3000/recipes')
        .then(response => response.json())
        .then(data => {
            setRecipes(data);
        })

    }, []);


    const recipe = recipes.find(r => r._id.toString() === _id);  // Compare ObjectId as string

    if (!recipe) {
        return <p>Recipe not found.</p>;
    }

    return (
        <>
            <h2>{recipe.title}</h2>  
            <p>{recipe.cuisineType.join(', ')}</p>
            <p>{recipe.ingredients.join(', ')}</p>
            <p>{recipe.totalPrepTime} minutes</p>
            <p>{recipe.totalCookTime} minutes</p>
            <p>{recipe.instructions}</p>
            <p>{new Date(recipe.uploadDate).toLocaleDateString()}</p>
            <p><Link to="/">All Recipes</Link></p>
        </>
    );
}

export default RecipeDetails;
