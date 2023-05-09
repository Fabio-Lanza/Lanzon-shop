import React from "react";
import "./ProductDetail.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AiFillStar } from "react-icons/ai";
import { useContext } from "react";
import { ShopContextCart } from './../../context/ShopContext';


function ProductDetail() {
  const {addToCart, products, setProducts, cart, handleRemoveItem} = useContext(ShopContextCart)
  const { id, title, description, price, image } = products;

  const { productId } = useParams();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => {
        setProducts(res.data);
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
            {products?.rating?.rate}
          </p>
          <h3>$ {price}</h3>
          <span>Description:</span>
          <p>{description}</p>
          {cart.find((item) => item.id === id) ? (
        <button className="addToCartBtn" onClick={() => handleRemoveItem(id)}>
          Remove from cart
        </button>
      ) : (
        <button className="addToCartBtn" onClick={() => addToCart(products)}>
          Add to cart
        </button>
      )}
          {/* <button onClick={()=> addToCart(products)}>Add to Cart</button> */}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
