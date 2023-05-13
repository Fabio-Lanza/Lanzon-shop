import "./ProductCart.css";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { useContext, useState } from "react";
import { ShopContextCart } from "./../../context/ShopContext";

function ProductCart({ product }) {
  const { id, title, category, price, image } = product;
  const { addToCart, cart, handleRemoveItem } = useContext(ShopContextCart);

  return (
    <div className="card">
      <div className="product-info">
        <p>{title}</p>
        <p>{category}</p>
        <p className="rate">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          {product.rating.rate}
        </p>
        <p>$ {price}</p>
      </div>
      <Link to={`/productDetail/${id} `} className="card-img">
        <img src={image} alt="" />
      </Link>
      {cart.find((item) => item.id === id) ? (
        <button className="addToCartBtn" onClick={() => handleRemoveItem(id)}>
          Remove from cart
        </button>
      ) : (
        <button className="addToCartBtn" onClick={() => addToCart(product)}>
          Add to cart 
        </button>
      )}
    </div>
  );
}

export default ProductCart;
