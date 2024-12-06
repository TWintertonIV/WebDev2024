import {Link, useParams} from 'react-router-dom';
import { FC, useState, useEffect } from 'react';
import './RecipeDetails.css';

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
        <div className="container">
            <h2>{recipe.title}</h2>  

            <div className="recipe-details">

                <div className="food-details">
                    <h3>Cusine Type</h3>
                    <p>{recipe.cuisineType.join(', ')}</p>
                </div>
                <div className="food-details">
                    <h3>Total Prep Time: </h3>
                    <p>{recipe.totalPrepTime} minutes</p>
                </div>
                <div className="food-details">
                    <h3>Total Cook Time: </h3>
                    <p>{recipe.totalCookTime} minutes</p>
                </div> 
            </div>

            <div className="food-description">
                <h3>Ingredients</h3>
                <p>{recipe.ingredients.join(', ')}</p>
            
                <h3>Instructions</h3>
                <p>{recipe.instructions}</p>
            </div>

            <div className="upload-date">
                <p>Upload date: {new Date(recipe.uploadDate).toLocaleDateString()}</p>
            </div>
            
            <div className="recipes-button">
                <p><Link to="/Recipes">All Recipes</Link></p>
            </div>
        </div>
    );
}

export default RecipeDetails;
