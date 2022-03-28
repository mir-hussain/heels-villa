import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      {products.map((item) => {
        return (
          <div>
            <p>Pair</p>
            <img src={item.pairImage} alt='' />
            <p>Side</p>
            <img src={item.sideImage} alt='' />
          </div>
        );
      })}
    </div>
  );
}

export default App;
