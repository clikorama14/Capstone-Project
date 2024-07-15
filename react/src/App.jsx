import { useState } from 'react'
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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                <li className="nav-item">
                  <Link className="nav-link" to="/Tops" >Tops</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Bottoms" >Bottoms</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Shoes" >Shoes</Link>
                </li>

              </ul>

            </div>
          </div>
        </nav>

        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">

          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/Tops" element={<Tops />} />
            <Route exact path="/Bottoms" element={<Bottoms />} />
            <Route exact path="/Shoes" element={<Shoes />} />
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