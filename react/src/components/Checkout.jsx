import React from "react";
import Display from "./Display";
import "./Checkout.css"; // Import Checkout-specific CSS

const Checkout = ({ cartItems, clearCart }) => {
    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <h2 className="checkout-title">Thank you for shopping with Clothing Cove!</h2>
            </div>

            <div className="checkout-items">
                <h3 className="checkout-subtitle">Item(s) in your cart:</h3>
                <div className="card-container">
                    {cartItems.map((item, index) => (
                        <Display key={item.id} data={item} />
                    ))}
                </div>
            </div>

            <div className="checkout-payment">
                <p className="checkout-payment-info">Enter payment information below.</p>

                <form>
                    <div className="form-group">
                        <label htmlFor="creditCardNumber">Credit Card Number</label>
                        <input
                            type="text"
                            className="form-control"
                            id="creditCardNumber"
                            name="creditCardNumber"
                            placeholder="Enter your credit card number"
                            required
                        />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="expirationDate">Expiration Date</label>
                            <input
                                type="text"
                                className="form-control"
                                id="expirationDate"
                                name="expirationDate"
                                placeholder="MM/YYYY"
                                required
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="securityCode">Security Code</label>
                            <input
                                type="text"
                                className="form-control"
                                id="securityCode"
                                name="securityCode"
                                placeholder="CVV"
                                required
                            />
                        </div>
                    </div>
                    <div><p></p></div>
                    <button type="submit" className="btn btn-primary" onClick={clearCart}>
                        Submit
                    </button>

                </form>
            </div>
            <div className="checkout-items">
                <h3 className="checkout-subtitle">Here are some other products you might be interested in!</h3>
            </div>
        </div>
    );
};

export default Checkout;
