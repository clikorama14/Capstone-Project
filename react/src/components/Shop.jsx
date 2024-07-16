import React, { useState } from 'react';
import Product from './Product';
import CartList from './CartList';
import Checkout from './Checkout';

const Shop = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    return (
        <div className="shop-container">
            <div className="product-list">
                {products.map(product => (
                    <Product data={product} addToCart={addToCart} />
                ))}
            </div>
            <div className="cart">
                <CartList cartItems={cartItems} />
            </div>
            <div className="checkout">
                <Checkout cartItems={cartItems} />
            </div>
        </div>
    );
};

export default Shop;
