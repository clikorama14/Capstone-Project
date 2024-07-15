import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
  } from 'react-router-dom';

const Bottoms = () => {
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
                                <Link className="nav-link" to="/Bottoms">Bottoms</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Shoes">Shoes</Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>

            <div><strong>Check out our newest Bottoms!</strong></div>


        </>
    )
}


export default Bottoms;