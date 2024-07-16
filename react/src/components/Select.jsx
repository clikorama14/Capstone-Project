import React, { useState, useEffect } from "react";
import Product from "./Product";

const Select = ({items, addToCart}) => {

    return (

        <div className="product-list">
            {items.map(product => (
                <Product key={product.id} data={product} addToCart={addToCart} />
            ))}
        </div>

    );

};

export default Select;