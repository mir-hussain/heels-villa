import React from "react";

const Cart = ({ cart }) => {
  return (
    <div>
      <h1>Order Summery</h1>
      {cart.map((product) => (
        <p>
          {product.name} {product.color}
        </p>
      ))}
    </div>
  );
};

export default Cart;
