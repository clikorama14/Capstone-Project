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
import './Display.css';

const Display = ({data}) => {

    return (
        <div className="card">
            <div className="card-body" >
                {data.id === '1' && <img src={Flats} className="card-img-top"  />}
                {data.id === '2' && <img src={Blue_Polo} className="card-img-top" />}
                {data.id === '3' && <img src={Loafers} className="card-img-top" />}
                {data.id === '4' && <img src={Khakis} className="card-img-top" />}
                {data.id === '5' && <img src={Blazer} className="card-img-top" />}
                {data.id === '6' && <img src={White_Pants} className="card-img-top" />}
                {data.id === '7' && <img src={Pink_Polo} className="card-img-top" />}
                {data.id === '8' && <img src={Cardigan} className="card-img-top" />}
                {data.id === '9' && <img src={Gray_Blazer} className="card-img-top" />}
                {data.id === '10' && <img src={Shirt} className="card-img-top" />}

                {/* Old CSS: style={{width:'100%', maxWidth:'100px'}}}*/}

                <div className="card-title">{data.name}</div>
                <div className="card-text">${data.price}</div>

            </div>
        </div>
    );
};

export default Display;