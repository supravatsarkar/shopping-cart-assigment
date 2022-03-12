import { useState } from 'react';
import './App.css';
import Header from './components/Header.js/Header';
import Shop from './components/Shop/Shop';

function App() {
  const [cart, setCart] = useState([]);
  const [cartDisplay, setCartDisplay] = useState({
    top: '1000px'
  });
  return (
    <div className="App">
      <Header setCartDisplay={setCartDisplay} cartDisplay={cartDisplay} setCart={setCart} cart={cart}></Header>
      <Shop setCart={setCart} cart={cart} setCartDisplay={setCartDisplay} cartDisplay={cartDisplay}></Shop>
    </div>
  );
}

export default App;
