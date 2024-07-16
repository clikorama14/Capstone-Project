import React, { useState, useEffect } from "react";
import Display from'./Display.jsx'
import './Checkout.css'

const Bottoms = () => {
    const [bottom, setBottom] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // API calls
                const response = await fetch(`http://localhost:3000/api/clothes/type=bottom`);

                if (!response.ok) {
                    throw new Error('Data could not be fetched!');
                }

                // set data
                const json_response = await response.json();
                setBottom(json_response); // assign JSON response to the data variable.

            } catch (error) {
                console.error('Error fetching bottoms:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <div><h2>Check out our newest Bottoms</h2></div>

            <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {
                    bottom.map((product) => (
                        <li key={product._id}>
                            <Display data={product} />
                        </li>
                    ))
                }
            </div>
        </>
    )
}


export default Bottoms;