import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/Product.css";

function Products() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products",
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);
  return (
    <div className="container">
      <h1>Products</h1>
      <div className="products-container">
        {loading && <div className="loader"></div>}

        {data.map((product,index) => {
          return (
            <>
              <div key={product.id} className="flip-card">
                <div className="flip-card-inner">
                  <div  className="flip-card-front">
                    <img src={product.image} alt="Avatar" />
                    <h3>{product.title}</h3>
                    <h3>{`Price: $${product.price}`}</h3>
                  </div>
                  <div className="flip-card-back">
                    <h4 className="flip-title">{product.title}</h4>
                    <h5>{`Category: ${product.category}`}</h5>
                    <p>{`Description: ${product.description}`}</p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
