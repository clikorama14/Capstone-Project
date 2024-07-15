import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
} from 'react-router-dom';
import Product from "./Product";

const Landing = () => {
    return (
        <>

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

            <div>
                <strong>Welcome to the Clothing Cove!</strong>
                <p></p>
            </div>

            <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {
                    Array.from({ length: 6 }).map((_, index) => (
                        <Product key={index} />
                    ))
                }
            </div>

        </>
    );
};

export default Landing;