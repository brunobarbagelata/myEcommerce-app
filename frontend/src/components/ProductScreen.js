import React, { useEffect, useState } from "react";
import data from "../data";
import Rating from "./Rating";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function ProductScreen() {
  const id = useParams().id;
  console.log(id);

  let [product, setProduct] = useState({});

  useEffect(async () => {
    let res = await axios.get(
      `http://localhost:5000/one-product?productId=${id}`
    );
    setProduct(res.data);
  }, []);

  if (!product) {
    return <div>Product Not Found</div>; //if product not found
  }
  return (
    <div>
      <Link to="/">Back to result</Link>
      <div className="row top">
        <div className="col-2">
          <img className="mediumm" src={product.image} alt={product.name} />
        </div>
        <div className="col-1">
          <ul className="ulcenter">
            <li>
              <h1>{product.name}</h1>
            </li>
            <li>
              <Rating rating={product.rating} numReviews={product.numReviews} />
            </li>
            <li>Price: ${product.price}</li>
            <li>
              Description: <p>{product.description}</p>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Price</div>
                  <div className="price">${product.price}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Status</div>
                  <div>
                    {product.countInStock > 0 ? (
                      <span className="success">In Stock</span>
                    ) : (
                      <span className="error">Unavailable</span>
                    )}
                  </div>
                </div>
              </li>
              <li>
                <button className="primary block">Add to Cart</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductScreen;
