import React, { useState, useEffect } from "react";
import recommended from '../recommended.json'
import Product from './Product.jsx'
import './Recommended.css';

const RecommendedData = () => {
    return (
        
        <div className="card-container">
                {
                    recommended.map((product) => (product.recommended === 1 &&
                        <Product key={product.id} data={product} />
                    ))}
        </div>
    );
};

export default RecommendedData;