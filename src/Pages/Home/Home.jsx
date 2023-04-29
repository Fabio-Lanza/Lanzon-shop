import { useEffect, useState } from "react";
import "./Home.css";
import Banner from "../../assets/img/banner.jpg";
import axios from "axios";
import ProductCart from "../../components/ProductCart/ProductCart";
import Header from "../../components/Header/Header";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="home">
      <Header setProducts={setProducts} />
      
      <div className="home-container">
        <img src={Banner} alt="" className="home-image" />
      </div>
      <div className="products-container">
        {products.map((item) => (
          <ProductCart key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}

export default Home;
