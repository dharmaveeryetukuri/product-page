
import React from 'react';
import './App.css';
import Maincontent from './components/Maincontent/Maincontent';
import Cart from './components/Cart/Cart';
import img from './components/EC698A67-6AC5-49B3-94C1-C83F90F0968D.jpg';


  function App() {  
    return (
      <div className="App">
        <img className='image' src= {img} alt="drone"/>
        <Maincontent/>
        <Cart/>
      </div>
  );
}

export default App;

