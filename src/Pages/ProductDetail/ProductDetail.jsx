import React from "react";
import "./ProductDetail.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AiFillStar } from "react-icons/ai";

function ProductDetail() {
  const [product, setProduct] = useState([]);
  const { title, description, price, image, rating } = product;

  const { productId } = useParams();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="product-container">
      <div className="product-box">
        <img src={image} alt="" />
        <div className="product-details">
          <h2>{title}</h2>
          <p className="rate">
            <AiFillStar style={{ color: "var(--primary-color)", fontSize: "22px" }} />
            {product?.rating?.rate}
          </p>
          <h3>$ {price}</h3>
          <span>Description:</span>
          <p>{description}</p>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
