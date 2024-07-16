import React, { useState, useEffect } from "react";
import Display from'./Display.jsx'

const Shoes = () => {
    const [shoe, setShoe] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // API calls
                const response = await fetch(`http://localhost:3000/api/clothes/type=shoe`);

                if (!response.ok) {
                    throw new Error('Data could not be fetched!');
                }

                // set data
                const json_response = await response.json();
                setShoe(json_response); // assign JSON response to the data variable.

            } catch (error) {
                console.error('Error fetching bottoms:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <div><strong>Check out our newest Shoes!</strong></div>

            <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {
                    shoe.map((product) => (
                        <li key={product._id}>
                            <Display data={product} />
                        </li>
                    ))
                }
            </div>
        </>
    );
};

export default Shoes;