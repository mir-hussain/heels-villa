import React, { useEffect, useState } from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  const [offer, setOffer] = useState(false);

  useEffect(() => {
    if (cart.length > 0) {
      setOffer(true);
    }
  }, [cart.length]);

  const handleOffer = () => {
    console.log("offer");
  };

  return (
    <div className='cart'>
      <h1>Order Summery</h1>
      {cart.map((product, index) => (
        <div key={index} className='cart-item'>
          <img src={product.pairImage} alt='' />
          <div>
            <p>
              {product.name} {product.color}
            </p>
            <p>{product.price}</p>
          </div>
        </div>
      ))}
      <p>Buy one get one free</p>
      <button
        className={offer ? "offer-button" : "offer-button-disabled"}
        onClick={handleOffer}
        disabled={!offer}
      >
        Get one for me
      </button>
    </div>
  );
};

export default Cart;
