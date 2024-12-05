// import RecipeCard from "./RecipeCard";
import { useState } from "react";
import { useEffect } from "react";



function HomePage() {
    const [recipes, setRecipes] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:3000/recipes')
            .then(response => response.json())
            .then(data => setRecipes(data));
    }, []);
    
    return (
        <div className="home-section">
            <div className="section-content">
                <div className="home-details">
                    <h1 className="title">Welcome to your Recipe Hub</h1>
                    <h3 className="subtitle">Create, Organize, and Share!</h3>
                    <p className="description">Whether you're a seasoned chef or just getting started, we've got the
                        tools you need to make your culinary journey enjoyable and effortless.</p>

                    <div className="buttons">
                        <a href="#" className="button login">Login</a>
                    </div>
                </div>
                <div className="hero-image-wrapper">
                    <img src="images/heroImg3.png" alt="Hero" className="hero-image" />
                </div>
            </div>

            <div className="recipes-section">
                <div className="recipes-details">
                    <h2 className="section-title">My Recipes</h2>
                    {/* <RecipeCard /> */}

                    {recipes.map((recipe) => (
                        <div>
                            <Link to={`/recipes/${recipe._id}`}>
                                <h2>
                                    {recipe.title}
                                </h2>
                            </Link>
                        </div>
                    ))}

                </div>
            </div>

        </div>

    );

}

export default HomePage;