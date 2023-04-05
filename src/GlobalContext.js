import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const API = "https://fakestoreapi.com/products/";
  const [produto, setProduto] = useState(null);
  const [cart, setCart] = useState([]);
  const [modalCart, setModalCart] = useState(false);

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((produto) => setProduto(produto))
      .catch((err) => console.log(err));
  }, []);
  return (
    <GlobalContext.Provider
      value={{
        produto,
        setProduto,
        cart,
        setCart,
        modalCart,
        setModalCart,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
