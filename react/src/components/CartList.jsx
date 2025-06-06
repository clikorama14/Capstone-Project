import React, { useState, useEffect, createContext } from "react";

//export const CartList = createContext();

const Cart = ({ items }) => { 
    return (
        <div>
            {items.length === 0 ? (
                <p>No items in the cart.</p>
            ) : (
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>
                            {item.name} - ${item.price}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Cart;