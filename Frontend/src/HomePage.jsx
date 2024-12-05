import RecipesSection from "/RecipesSection.jsx";

function HomePage(){

    return(
        <div class="home-section">
            <div class="section-content">
                <div class="home-details">
                    <h1 class="title">Welcome to your Recipe Hub</h1>
                    <h3 class="subtitle">Create, Organize, and Share!</h3>
                    <p class="description">Whether you're a seasoned chef or just getting started, we've got the
                                            tools you need to make your culinary journey enjoyable and effortless.</p>
                    
                    <div class="buttons">
                        <a href="#" class="button login">Login</a>
                    </div>
                </div>
                <div class="hero-image-wrapper">
                    <img src="images/heroImg3.png" alt="Hero" class="hero-image"/>
                </div>
            </div>

            <div class="recipes-section">
                <div class="recipes-details">
                    <h2 class="section-title">My Recipes</h2>
                </div>
            </div>

        </div>

    );    

}

export default HomePage;