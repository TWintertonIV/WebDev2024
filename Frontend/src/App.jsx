import { useState } from 'react';
import './index.css';
import './App.css';
import {Route, Routes } from "react-router-dom";
import HomePage from './HomePage.jsx';
import RecipeDetails from './RecipeDetails.jsx'


function App(){
  return (
    <>
    <div>
      <main>
        <HomePage />
      </main>
    </div>
    <Routes>
        <Route path="/recipes/:_id" element={<RecipeDetails />} />
    </Routes>
    </>
  );
}

export default App;
