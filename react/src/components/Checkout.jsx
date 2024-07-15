import React, { useState, useEffect, createContext } from "react";

const Checkout = () => {

    return (
        <div>
        <div>
            <h2>Thank you for shopping with Clothing Cove!</h2>
        </div>
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
        </div>
    );
};

export default Checkout;