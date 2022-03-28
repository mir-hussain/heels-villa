import React, { useState, useEffect } from "react";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <div className='products-container'>
        {products.map((product) => {
          return <Product product={product} />;
        })}
      </div>
      <div className='cart-container'></div>
    </div>
  );
};

export default Shop;
