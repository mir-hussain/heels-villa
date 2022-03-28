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
          <p>
            {name} {color}
          </p>
          <small>$ {price}</small>
        </div>
        <div>
          <button>Buy</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
