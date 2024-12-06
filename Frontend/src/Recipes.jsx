import { Link } from 'react-router-dom';
import { FC, useState, useEffect } from 'react';
import './recipeCollection.css';
import './HomePage.css';
import logo from '../public/images/whiteLogo.png';

const Recipes = ()=> {
    
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/recipes')
        .then(response => response.json())
        .then(data => setRecipes(data));
    }, []);

    return (
        <>
        <header>
            <nav className="navbar section-content">
            {/*header*/}
            <a href="index.html" className="nav-logo">
                <img src={logo} alt="logo" className="header-logo" />
            </a>
            <ul className="nav-menu">
                <li className="nav-items">
                <a href="#" className="nav-link">
                    Home
                </a>
                </li>
                <li className="nav-items">
                <a href="#" className="nav-link">
                    Recipes
                </a>
                </li>
            </ul>
            </nav>
        </header>
    <div className = "container">
        <h1 className = "title">Your Collection</h1>
        <div className = "recipeList">
 
        {recipes.map((recipe) => (
            <div className = "recipeCard" key= {recipe._id}>
                <Link className = "recipeLink" to = {`/recipes/${recipe._id}`}>
                    <h2>{recipe.title}</h2>
                </Link>
            </div>
        ))}
        </div>
    </div>
</>
    );
}

export default Recipes;