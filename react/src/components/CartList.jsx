import React, { useState, useEffect, createContext } from "react";

//export const CartList = createContext();

const Cart = () => { 
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems([...cartItems,product])
    }

    const clearCart = () => {
    }
}

export default Cart;