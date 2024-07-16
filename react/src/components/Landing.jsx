import { Link } from 'react-router-dom'
import React, { useState, useEffect } from "react";
import Display from'./Display.jsx'

const Landing = (props) => {

    return (
        <>
            <div>
                <strong>Welcome to the Clothing Cove!</strong>
                <p></p>
            </div>

            <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {
                props.data.map((product) => (
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