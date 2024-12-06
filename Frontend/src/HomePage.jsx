import RecipeCard from "./RecipeCard";
import './HomePage.css';
function HomePage(){

    return(
        <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Recipe Hub</title>
        {/*favicon: icon infront of tab name*/}
        <link rel="shortcut icon" href=".favicon.ico" type="image/x-icon" />
        {/*main css*/}
        <link rel="stylesheet" href="main.css" />
        {/* Header / Navbar */}
        <header>
            <nav className="navbar section-content">
            {/*header*/}
            <a href="index.html" className="nav-logo">
                <img src="src/public/whiteLogo.png" alt="logo" className="header-logo" />
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
        <main>
            {/* Hero section */}
            <section className="hero-section">
            <div className="section-content">
                <div className="hero-details">
                <h1 className="title">Welcome to your Recipe Hub</h1>
                <h3 className="subtitle">Create, Organize, and Share!</h3>
                <p className="description">
                    Whether you're a seasoned chef or just getting started, we've got
                    the tools you need to make your culinary journey enjoyable and
                    effortless.
                </p>
                <div className="buttons">
                    <a href="#" className="button login">
                    Login
                    </a>
                </div>
                </div>
                <div className="hero-image-wrapper">
                <img src="src/public/heroImg3.png" alt="Hero" className="hero-image" />
                </div>
            </div>
            </section>
        </main>
        </>

    );

}

export default HomePage;