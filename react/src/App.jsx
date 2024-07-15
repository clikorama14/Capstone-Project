import React, { useState, useEffect } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom';
import Tops from './components/Tops';
import Bottoms from './components/Bottoms';
import Shoes from './components/Shoes';
import Landing from './components/Landing';
import Checkout from './components/Checkout';

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

  return (
    <>
      <Router>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                <li className="nav-item">
                  <Link className="nav-link" to="/" >Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Tops" >Tops</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Bottoms" >Bottoms</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Shoes" >Shoes</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Checkout" >Checkout</Link>
                </li>
                {/* <li className="nav-item">
                  <input type="search" name="search-form" id="search-input" className="search-input"
                    onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search user" />
                </li> */}

              </ul>

            </div>
          </div>
        </nav>

        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">

          <Routes>
            <Route exact path="/" element={<Landing data={ clothes} />} />
            <Route exact path="/Tops" element={<Tops />} />
            <Route exact path="/Bottoms" element={<Bottoms />} />
            <Route exact path="/Shoes" element={<Shoes />} />
            <Route exact path="/Checkout" element={<Checkout />} />
          </Routes>
        </main>

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