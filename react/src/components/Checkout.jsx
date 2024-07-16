import React, { useState, useEffect, createContext } from "react";
import Display from "./Display";

const Checkout = ({ cartItems, clearCart }) => {

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
                    <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                        {cartItems.map((item, index) => (
                            <li key={index}>
                                {/*{item.name} - ${item.price*/}
                                <Display key={item.id} data={item} />
                            </li>
                        ))}
                    </div>
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
            <button type="submit" className="btn btn-primary" onClick={clearCart}>
                Submit
            </button>
        </div>
    );
};

export default Checkout;