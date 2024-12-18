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
            <Link to="/" className="nav-logo">
                <img src={logo} alt="logo" className="header-logo" />
            </Link>
            <ul className="nav-menu">
                <li className="nav-items">
                <Link to={"/"} className="nav-link">
                        Home
                </Link>
                </li>
                <li className="nav-items">
                <Link to={"/Recipes"} className="nav-link">
                    Recipes
                    </Link>
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