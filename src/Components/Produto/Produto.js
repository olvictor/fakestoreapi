import React, { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";
import "./produto.css";
import { BsCartPlusFill } from "react-icons/bs";

const Produto = () => {
  const global = useContext(GlobalContext);
  const addToCart = (produto) => {
    global.setCart([...global.cart, produto]);
  };
  console.log(global.produto);
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
