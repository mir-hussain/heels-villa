import React from "react";
import "./Product.css";

const Product = ({ product }) => {
  const { name, pairImage, color, price } = product;
  return (
    <div className='product-card'>
      <div className='image-container'>
        <img src={pairImage} alt='' />
      </div>
      <div className='product-info'>
        <div>
          <h1>
            {name} {color}
          </h1>
          <p>$ {price}</p>
        </div>
        <div>
          <button>Buy</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
