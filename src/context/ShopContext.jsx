import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ShopContextCart = createContext();

export default function ShopContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState(1);

  const addToCart = (item) => {
    const newFavorites = [...cart, {...item, quantity:1}]
    setCart(newFavorites)
    localStorage.setItem('favoritesList', JSON.stringify(newFavorites))
  };

  const handleRemoveItem = (id) => {
    const removeItem = cart.filter((item) => item.id !== id);
    setCart(removeItem);
  };

  const handleChange = (item, num) => {
    const index = cart.findIndex((data) => data.id === item.id);
    const newAmount = amount + num;
    if (newAmount > 0) {
      const newCart = [...cart];
      newCart[index].quantity = newAmount;
      setCart(newCart);
      setAmount(newAmount);
    }
  };

  useEffect(()=> {
  const getFav = localStorage.getItem('favoritesList')
  if(getFav){
    setCart(JSON.parse(getFav))
  }
  }, [])


  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const contextValue = {
    products,
    setProducts,
    cart,
    setCart,
    addToCart,
    handleRemoveItem,
    handleChange,
    amount,
    setAmount,
  };

  console.log(cart);

  return (
    <ShopContextCart.Provider value={contextValue}>
      {children}
    </ShopContextCart.Provider>
  );
}
