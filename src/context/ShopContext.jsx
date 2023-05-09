import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ShopContextCart = createContext();

export default function ShopContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const handleRemoveItem = (id) => {
    const removeItem = cart.filter((item) => item.id !== id);
    setCart(removeItem);
  };

  // const handleChange = (item, num) => {
  //   let initial = -1;
  //   cart.forEach((data, index) => {
  //     if (data.id === item.id) {
  //       initial = index;
  //     }
  //   });
  //   const tempArray = cart;
  //   amount += num;
  //   if(tempArray[initial] === 0){
  //     tempArray[initial] = 1
  //   }
  //   setCart([...tempArray])
  // };





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
    
  };

  console.log(cart);

  return (
    <ShopContextCart.Provider value={contextValue}>
      {children}
    </ShopContextCart.Provider>
  );
}
