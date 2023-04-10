import React, { useContext, useState } from "react";
import { GlobalContext } from "../../GlobalContext";
import "./produto.css";
import { BsCartPlusFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import ModalItem from "../modaltem/ModalItem";
const Produto = ({ productDisplay, displayItems }) => {
  const global = useContext(GlobalContext);
  const addToCart = (produto) => {
    global.setCart([...global.cart, produto]);
  };
  const [modalItem, setModalItem] = useState(null);
  const [openModalItem, setOpenModalItem] = useState(false);

  const submitModalItem = (produto) => {
    setOpenModalItem(true);
    setModalItem(produto);
  };

  if (displayItems) {
    return (
      <div className="items">
        {displayItems.length < 1 && <h2>Nenhum Produto Foi Encontrado.</h2>}
        {displayItems.map((produto) => (
          <div className="item" key={produto.id}>
            <h2>
              <a href="#" onClick={() => submitModalItem(produto)}>
                {produto.title}
              </a>
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
        <ModalItem
          modalItem={modalItem}
          openModalItem={openModalItem}
          setOpenModalItem={setOpenModalItem}
        />
      </div>
    );
  }
};

export default Produto;
