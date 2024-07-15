import React, { useState } from 'react';
import Shirt from '../assets/images/orange_button_dnw.png';

const Product = ({ data }) => {
    const [addedToCart, setAddedToCart] = useState(false);

    const addToCart = () => {
        setAddedToCart(true)
    }

    return (
        <div className="card card-background" style={{ flex: '1', minWidth: '300px', maxWidth: '45%' }}>
            <div className="card-body" style={{ paddingBottom: '40px' }}>
                <img src={Shirt} style={{ width: '100%', maxWidth: '100px' }} />
                <div className="card-text">{data.name}</div>
                <div className="card-text">${data.price}</div>
                <break />
            </div>
            <div className="card-button" style={{ paddingBottom: '20px' }}>
                <button type="addToCart" className="btn btn-primary" onClick={addToCart}>Add to Cart</button>
            </div>
        </div>

    );
};

export default Product;
