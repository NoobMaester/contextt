import './App.css';
import Home from './components/Home';
import Cart from './components/Cart';
import Header from './components/Header';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { useState } from 'react';

function App() {

  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' exact element = {<Home cart={cart} setCart={setCart}/>}/ >
        <Route path='/cart' element = {<Cart cart = {cart} setCart = {setCart}/>}/ >
      </Routes>
    </BrowserRouter>
  );
}

export default App;
