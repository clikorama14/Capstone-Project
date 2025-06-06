import { Link } from 'react-router-dom'
import React, { useState, useEffect } from "react";
import Product from './Product.jsx'

const Landing = ({ data }) => {
    return (
        <>
            <div>
                <strong>Welcome to the Clothing Cove!</strong>
                <p></p>
            </div>

            <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {
                    data.map((product) => (
                        <li key={product._id}>
                            <Product data={product} />
                        </li>
                    ))
                }
            </div>
        </>
    );
};

export default Landing;