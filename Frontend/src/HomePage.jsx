// import RecipeCard from "./RecipeCard";
import './HomePage.css';
import hero from '../public/images/heroImg3.png';
import logo from '../public/images/whiteLogo.png';
import egg from '../public/images/egg.png';
import { Link } from 'react-router-dom';
function HomePage(){

    return(
        <div className="">
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Recipe Hub</title>
        {/*favicon: icon infront of tab name*/}
        <link rel="shortcut icon" href={egg} type="image/x-icon" />
        {/* Header / Navbar */}
        <header>
            <nav className="navbar section-content">
            {/*header*/}
            <Link to={"/"} className="nav-logo">
                <img src={logo} alt="logo" className="header-logo" />
            </Link>
            <ul className="nav-menu">
                <li className="nav-items">
                <Link to={"/"} className="nav-link">
                    Home
                </Link>
                </li>
                <li className="buttons">
                <Link to={"/Recipes"} className="nav-link">
                    Recipes
                </Link>
                </li>
            </ul>
            </nav>
        </header>
        <main>
            {/* Hero section */}
            <section className="hero-section">
                <div className="section-content">
                    <div className="hero-details">
                    <div className="hero-image-wrapper">
                        <img src={hero} alt="Hero" className="hero-image" />
                    </div>
                    <h1 className="title">Welcome to your Recipe Hub</h1>
                    <h3 className="subtitle">Create, Organize, and Share!</h3>
                    <p className="description">
                        Whether you're a seasoned chef or just getting started, we've got the tools you need to make your culinary journey enjoyable and effortless.
                    </p>
                    <div className="buttons">
                        <Link to={"/Recipes"} className="button login">
                        View Recipes
                        </Link>
                    </div>
                    </div>
                </div>
            </section>
        </main>
        </div>

    );

}

export default HomePage;