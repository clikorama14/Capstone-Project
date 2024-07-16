import { Link } from 'react-router-dom'
import React, { useState, useEffect } from "react";
import Display from'./Display.jsx'
import './Checkout.css'

const Landing = ({data}) => {

    const limitedData = data.slice(2,5);

    return (
        <>
            <div>
                <h2>Welcome to the Clothing Cove!</h2>
                <p></p>
                <h4>Here are some of our featured items</h4>
            </div>

            <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {
                limitedData.map((product) => (
                    <li key={product._id}>
                        <Display data={product} />
                    </li>
                    ))
            }
            </div>
        </>
    );
};

export default Landing;