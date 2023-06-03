import { useEffect, useState, useContext } from "react";
import "./Home.css";
import Banner from "../../assets/img/banner3.png";
import ProductCart from "../../components/ProductCart/ProductCart";
import { ShopContextCart } from "../../context/ShopContext";



function Home() {
  const {products} = useContext(ShopContextCart)
 
  return (
    <div className="home">   
      <div className="home-container">
        <img src={Banner} alt="" className="home-image" />
      </div>
      <div className="products-container">
        {products?.map((item) => (
          <ProductCart key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}

export default Home;
