import React, { useState, useEffect } from "react";
import recommended from '../recommended.json'
import Product from './Product.jsx'

const RecommendedData = () => {
  return (
    <div className="recommended-container">
      {
        recommended.map((product) => (product.recommended === 1 &&
          <Product key={ product.id} data={product} />
        ))}
    </div>
  );
};

export default RecommendedData;