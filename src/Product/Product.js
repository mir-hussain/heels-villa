import React from "react";
import "./Product.css";
import { BsCartPlus } from "react-icons/bs";

const Product = ({ product, handleAddToCart }) => {
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
          <button onClick={() => handleAddToCart(product)}>
            <BsCartPlus size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
