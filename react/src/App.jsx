import React, { useState, useEffect } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  NavLink
} from 'react-router-dom';
import Tops from './components/Tops';
import Bottoms from './components/Bottoms';
import Shoes from './components/Shoes';
import Landing from './components/Landing';
import Checkout from './components/Checkout';
//import CartList from './components/CartList';
import Product from './components/Product';
import Select from './components/Select';

function App() {
  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/clothes`);
        if (!response.ok) {
          throw new Error('Data could not be fetched!');
        }
        const json_response = await response.json();
        setClothes(json_response); // assign JSON response to the data variable.

      } catch (error) {
        console.error('Error fetching clothes:', error);
      }
    };
    fetchData();
  }, []);

  const products = [
    { id: '10998765678', name: 'Flats', price: 50 },
    // Add more products as needed
  ];

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    console.log(cartItems);
  };

  const clearCart = () => {
    setCartItems([]);
    console.log(cartItems);
  };

  return (
    <>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">Fashion Store</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink exact to="/" className="nav-link" activeClassName="active-link">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/Tops" className="nav-link" activeClassName="active-link">Tops</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/Bottoms" className="nav-link" activeClassName="active-link">Bottoms</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/Shoes" className="nav-link" activeClassName="active-link">Shoes</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/Select" className="nav-link" activeClassName="active-link">Select</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/Checkout" className="nav-link" activeClassName="active-link"><strong>Checkout</strong></NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <main className="container mt-4 main">
          <Routes>
            <Route exact path="/" element={<Landing data={clothes} />} />
            <Route exact path="/Tops" element={<Tops addToCart={addToCart} />} />
            <Route exact path="/Bottoms" element={<Bottoms />} />
            <Route exact path="/Shoes" element={<Shoes />} />
            <Route exact path="/Select" element={<Select items={clothes} addToCart={addToCart} />} />
            <Route exact path="/Checkout" element={<Checkout cartItems={cartItems} clearCart={clearCart} />} />
          </Routes>
        </main>

        <footer className="footer">
          <div className="container">
            <p>&copy; 2024 Clothing Cove. All rights reserved.</p>
          </div>
        </footer>

      </Router>
    </>
  );

};

export default App

/*
Landing Page
-Featured Products
-Search Box
-List of Categories

Product Info Page 
-Product Image
-Product Info
-Price
-Add to Cart

Checkout Page
-List of all products added to cart
-Payment Info
-Address
*/