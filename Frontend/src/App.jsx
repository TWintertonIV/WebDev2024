import { useState } from 'react';
import './index.css';
import './App.css';
import HomePage from './HomePage.jsx';


function App(){
  return (
    <div>
      <Header />
      <main>
        <HomePage />
      </main>
    </div>
  );
}

export default App;
