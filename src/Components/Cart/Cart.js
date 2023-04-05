import React, { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";
import { AiOutlineClose } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";

import "./Cart.css";

const Cart = () => {
  const global = useContext(GlobalContext);

  const priceAllCart = global.cart
    .map((produto) => produto.price)
    .reduce((a, b) => a + b, 0)
    .toFixed(2);

  const deleteCartItem = (id) => {
    const removeItemCart = global.cart.filter((product) => product.id !== id);
    global.setCart(removeItemCart);
  };
  return (
    <div
      className="cart-store"
      style={global.modalCart ? { display: "block" } : { display: " none" }}
    >
      <AiOutlineClose onClick={() => global.setModalCart(false)} />
      {global.cart.map((produto) => (
        <div className="cart-item">
          <img src={produto.image} alt={produto.title} />
          <div style={{ marginLeft: "10px", width: "70%" }}>
            <h2>
              <a href="./">{produto.title}</a>
            </h2>
            <p>PRICE $: {produto.price}</p>
          </div>
          <BsTrash onClick={() => deleteCartItem(produto.id)} />
        </div>
      ))}

      <button>PRICE: ${priceAllCart}</button>
    </div>
  );
};

export default Cart;
