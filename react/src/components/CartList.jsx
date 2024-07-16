import React from 'react';

const CartList = ({ cartItems }) => {
    return (
        <div className="cart-list">
            <h2>Cart</h2>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>
                        <div>{item.name}</div>
                        <div>${item.price}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CartList;
