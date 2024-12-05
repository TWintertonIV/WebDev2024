import Link from 'react-router-dom'
import { FC, useState, useEffect } from 'react'

function RecipeCard() {
    
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/recipes')
        .then(response => response.json())
        .then(data => setRecipes(data));
    }, []);

    return (
        <div>
            <div>
                {recipes.map((recipe) => (
                    <div>
                        <Link to={`/recipes/${recipe.id}`}>
                        <h2>
                        {recipe.title}
                        </h2>
                        </Link>
                    </div>   
                ))}
            </div>
        </div>
    );
}

export default RecipeCard;