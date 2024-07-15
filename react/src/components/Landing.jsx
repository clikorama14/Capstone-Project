import { Link } from 'react-router-dom'
import React, { useState, useEffect } from "react";
import Product from'./Product.jsx'

const Landing = () => {
    const [clothes, setClothes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/clothes`);
                if (!response.ok) {
                    throw new Error('Data could not be fetched!');
                }
                const json_response = await response.json();
                setClothes(json_response); // assign JSON response to the data variable.

            } catch (error) {
                console.error('Error fetching clothes:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <div>
                <strong>Welcome to the Clothing Cove!</strong>
                <p></p>
            </div>

            <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {
                clothes.map((product) => (
                    <li key={product._id}>
                        <Product>{product.name}</Product>
                    </li>
                    ))
            }
            </div>
        </>
    );
};

export default Landing;