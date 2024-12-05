import Link from 'react-router-dom'
import { FC, useState, useEffect } from 'react'
import { useRecipes } from '@/hook/useRecipes'

function RecipeCard() {
    
    

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