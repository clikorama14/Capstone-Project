import React, { useState } from 'react';
import Shirt from '../assets/images/orange_button_dnw.png';
import Blue_Polo from '../assets/images/polo.png';
import Blazer from '../assets/images/blazer.png';
import Pink_Polo from '../assets/images/pink_polo.png';
import Cardigan from '../assets/images/cardigan.png';
import Gray_Blazer from '../assets/images/gray_blazer.png';
import Loafers from '../assets/images/loafers.png';
import Flats from '../assets/images/flats.png';
import White_Pants from '../assets/images/white_pants.png';
import Khakis from '../assets/images/khakis.png';

const Product = ({ data }) => {
    const [addedToCart, setAddedToCart] = useState(false);

    //    const addToCart = () => {
    //      setAddedToCart(true)
    //}
    const handleAddToCart = () => {
        addToCart(data);
    };

    return (
        <div className="card card-background" style={{ flex: '1', minWidth: '300px', maxWidth: '45%' }}>
            <div className="card-body" style={{ paddingBottom: '40px' }}>
                {data.id === '1' && <img src={Flats} alt="Polo" style={{ width: '100%', maxWidth: '100px' }} />}
                {data.id === '2' && <img src={Blue_Polo} alt="Polo" style={{ width: '100%', maxWidth: '100px' }} />}
                {data.id === '3' && <img src={Loafers} alt="Polo" style={{ width: '100%', maxWidth: '100px' }} />}
                {data.id === '4' && <img src={Khakis} alt="Polo" style={{ width: '100%', maxWidth: '100px' }} />}
                {data.id === '5' && <img src={Blazer} style={{ width: '100%', maxWidth: '100px' }} />}
                {data.id === '6' && <img src={White_Pants} style={{ width: '100%', maxWidth: '100px' }} />}
                {data.id === '7' && <img src={Pink_Polo} style={{ width: '100%', maxWidth: '100px' }} />}
                {data.id === '8' && <img src={Cardigan} style={{ width: '100%', maxWidth: '100px' }} />}
                {data.id === '9' && <img src={Gray_Blazer} style={{ width: '100%', maxWidth: '100px' }} />}
                {data.id === '10' && <img src={Shirt} alt="Shirt" style={{ width: '100%', maxWidth: '100px' }} />}

                <div className="card-text">{data.name}</div>
                <div className="card-text">${data.price}</div>

            </div>

            <div className="card-button" style={{ paddingBottom: '20px' }}>
                <button type="addToCart" className="btn btn-primary" onClick={addToCart}>Add to Cart</button>
            </div>
        </div>

    );
};

export default Product;
