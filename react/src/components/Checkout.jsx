import React, { useState, useEffect, createContext, useContext } from "react";
import { CartContext } from './CartContext';
import Product from './Product.jsx'

const Checkout = () => {
    const { cart, clearCart } = useContext(CartContext);
    const [orderComplete, setOrderComplete] = useState(false);

    const handleOrderComplete = () => {
        clearCart();
        setOrderComplete(true);
    };

    return (
        <div>
            <div>
                <p>Enter payment information below.</p>
            </div>
            <div className="form-group">
                <label htmlFor="userId">Credit Card Number</label>
                <input
                    type="text"
                    className="form-control"
                    id="userId"
                    name="userId"
                />
            </div>
            <div className="form-group">
                <label htmlFor="userId">Expiration Date</label>
                <input
                    type="text"
                    className="form-control"
                    id="userId"
                    name="userId"
                />
            </div>
            <div className="form-group">
                <label htmlFor="userId">Security Code</label>
                <input
                    type="text"
                    className="form-control"
                    id="userId"
                    name="userId"
                />
            </div>
            <div>
                <h2>Thank you for shopping with Clothing Cove!</h2>
            </div>
            <div>
                <h3>Your Cart:</h3>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {cart.map((product, index) => (
                        <li key={index} style={{ marginBottom: '20px' }}>
                            <Product data={product} />
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <button onClick={handleOrderComplete} style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px' }}>
                    Submit Order
                </button>
                {orderComplete && <p style={{ marginTop: '20px', color: 'green' }}>Order Complete!</p>}
            </div>
        </div>
    );
};

export default Checkout;