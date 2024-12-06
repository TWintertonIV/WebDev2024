import './index.css';
import './App.css';
import {Route, Routes } from "react-router-dom";
import HomePage from './HomePage.jsx';
import RecipeDetails from './RecipeDetails.jsx'
import Recipes from './Recipes.jsx';


function App(){
  return (
    <>
    {/* <div>
      <main>
        <HomePage />
      </main>
    </div> */}
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes/:_id" element={<RecipeDetails />} />
        <Route path="/recipes" element={<Recipes />} />
    </Routes>
    </>
  );
}

export default App;
