import React, { useState, useEffect } from "react";

const RecommendedData = () => {
  const [recommendedData, setRecommendedData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/recommended.json'); // Adjust the path based on your setup
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setRecommendedData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="recommended-container">
      {recommendedData ? (
        <div className="recommended-content">
          <pre>{JSON.stringify(recommendedData, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default RecommendedData;