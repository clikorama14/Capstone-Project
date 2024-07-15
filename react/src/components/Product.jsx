import React from 'react';
import Shirt from '../assets/images/orange_button_dnw.png';

const Product = (props) => {

    return (
        <div className="card card-background" style={{ flex: '1', minWidth: '300px', maxWidth: '45%' }}>
            <div className="card-body">
                <img src={Shirt} style={{ width: '100%', maxWidth: '100px' }} />
                <div className="card-text">{props.name}</div>
                <div className="card-text">${props.price}</div>
            </div>
        </div>

    );
};

export default Product;
