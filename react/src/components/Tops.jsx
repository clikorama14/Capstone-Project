import React, { useState, useEffect } from "react";
import Product from './Product.jsx'

const Tops = (addToCart) => {
    const [tops, setTop] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // API calls
                const response = await fetch(`http://localhost:3000/api/clothes/type=top`);

                if (!response.ok) {
                    throw new Error('Data could not be fetched!');
                }

                // set data
                const json_response = await response.json();
                setTop(json_response); // assign JSON response to the data variable.

            } catch (error) {
                console.error('Error fetching tops:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <div><strong>Check out our newest Tops!</strong></div>

            <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {
                    tops.map((product) => (
                        <Product key={product.id} data={product} addToCart={addToCart} />
                    ))
                }
            </div>
        </>
    );
};

export default Tops;