import React, { useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios";

function HomeScreen(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("http://localhost:5000/api/products");
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <div className="row center">
      {products.map((product) => (
        <Product key={product._id} product={product}></Product>
      ))}
    </div>
  );
}

export default HomeScreen;
