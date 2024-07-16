import React, { useState, useEffect } from "react";
import Product from "./Product";

const Select = ({ items, addToCart }) => {

    return (
        <div>
            <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {items.map(product => (
                    <Product key={product.id} data={product} addToCart={addToCart} />
                ))}
            </div>
        </div>

    );

};

export default Select;