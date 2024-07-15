import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";

const Tops = () => {
    const [top, setTop] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // API calls
                const response = await fetch(`${import.meta.env.MONGO_DB_URL}/clothes/type=${top}`);

                if (!response.ok) {
                    throw new Error('Data could not be fetched!');
                }

                // set data
                const top_json = await response.json();
                setTop(top_json); // assign JSON response to the data variable.

            } catch (error) {
                console.error('Error fetching characters:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <div><strong>Check out our newest Tops!</strong></div>
        </>
    );
};

export default Tops;