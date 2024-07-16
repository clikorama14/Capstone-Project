import React, { useState, useEffect, createContext } from "react";

const Checkout = ({ cartItems }) => {

    const handelCheckout = () => {
        const jsonData = JSON.stringify(cartItems, null, 4);
        fs.writeFile('transaction.json', jsonData, (err) => {
            if (err) {
                console.error("Error writing to file:", err);
            } else {
                console.log("Datat written to file success!");
            }
        })
    }

    return (
        <div>
            <div>
                <h2>Thank you for shopping with Clothing Cove!</h2>
            </div>
            <div>
                <p>Enter payment information below.</p>
            </div>
            <div>
                <h3>Items in your cart:</h3>
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            {item.name} - ${item.price}
                        </li>
                    ))}
                </ul>
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
            <button type="checkout" className="btn btn-primary" onClick={handelCheckout}>Checkout</button>
        </div>
    );
};

export default Checkout;