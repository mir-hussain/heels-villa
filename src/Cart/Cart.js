import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  return (
    <div className='cart'>
      <h1>Order Summery</h1>
      {cart.map((product) => (
        <div className='cart-item'>
          <img src={product.pairImage} alt='' />
          <div>
            <p>
              {product.name} {product.color}
            </p>
            <p>{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
