import React, { useState, useEffect } from "react";
import Product from "./Product";
import './Checkout.css'

const Select = ({ items, addToCart }) => {

    return (
        <div>
        <div><h2>Select items would you like to add to the cart</h2></div>

        <div>
            <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {items.map(product => (
                    <Product key={product.id} data={product} addToCart={addToCart} />
                ))}
            </div>
        </div>
        </div>

    );

};

export default Select;