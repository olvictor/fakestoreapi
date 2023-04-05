import React, { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";
import "./produto.css";
import { BsCartPlusFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
const Produto = () => {
  const global = useContext(GlobalContext);
  const addToCart = (produto) => {
    global.setCart([...global.cart, produto]);
  };
  if (global.produto !== null) {
    return (
      <div className="items">
        {global.produto.length < 1 && <h2>Nenhum Produto Foi Encontrado.</h2>}
        {global.produto.map((produto) => (
          <div className="item" key={produto.id}>
            <h2>
              <a href="./">{produto.title}</a>
            </h2>
            <img src={produto.image} alt={produto.title} />
            <div className="rating">
              {[...Array(+produto.rating.rate.toFixed(0))].map(
                (star, index) => (
                  <FaStar fill="#FFFF00" key={index} />
                )
              )}
            </div>
            <p>$: {produto.price}</p>
            <button onClick={() => addToCart(produto)}>
              ADD TO CART <BsCartPlusFill />
            </button>
          </div>
        ))}
      </div>
    );
  }
};

export default Produto;
