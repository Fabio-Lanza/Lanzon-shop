import { useState, useEffect, useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { ShopContextCart } from './../../context/ShopContext';



function Header() {
  const [categories, setCategories] = useState([]);
  const [option, setOption] = useState("");
  
  const {products, setProducts, cart} = useContext(ShopContextCart)
  

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/categories`).then((res) => {
      setCategories(res.data);
    });
  }, []);


  const handleClickAll = () => {
    axios.get(`https://fakestoreapi.com/products`).then((res) => {
      setProducts(res.data);
    });
  };


  const handleOptionClick = (e) => {
    setOption(e.target.value);
    axios
      .get(`https://fakestoreapi.com/products/category/${e.target.value}`)
      .then((res) => {
        console.log(res.data)
        setProducts(res.data);
      });
  };


  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="header-logo">
          <span className="material-symbols-outlined header-logo-img">
            storefront
          </span>
          <h2 className="header-logo-title" onClick={handleClickAll}>LanZa's Shop</h2>
        </div>
      </Link>

      <div className="header-search">
        <input type="text" className="header-search-input" />
        <span className="material-symbols-outlined header-searchIcon">
          search
        </span>
      </div>

      <div className="header-nav">
        <div className="nav-item">
          <label>Categories</label>
          <select onChange={handleOptionClick}>
            {categories.map((item) => (
              <option key={item} >
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="nav-item">
          <span className="nav-itemLineOne">Your</span>
          <span className="nav-itemLineTwo">Shop</span>
        </div>

        <Link to="/cart" style={{ textDecoration: "none" }}>
          <div className="nav-itemBasket">
            <span className="material-symbols-outlined">shopping_bag</span>
            <span>{cart.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
