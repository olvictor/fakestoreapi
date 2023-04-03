import React, { useContext } from "react";
import "./header.css";
import { RxMagnifyingGlass } from "react-icons/rx";
import { CiUser } from "react-icons/ci";
import { BsFillCartFill } from "react-icons/bs";
import { GlobalContext } from "../../GlobalContext";
const Header = () => {
  const global = useContext(GlobalContext);
  const API = "https://fakestoreapi.com/products/";

  const handleChange = ({ target }) => {
    const searchProduct = global.produto.filter((produto) =>
      produto.title.toLowerCase().includes(target.value.toLowerCase())
    );
    if (target.value !== "") {
      global.setProduto(searchProduct);
    }
    if (target.value === "") {
      fetch(API)
        .then((response) => response.json())
        .then((produtos) => global.setProduto(produtos));
    }
  };
  return (
    <header>
      <h1>FAKE STOREAPI</h1>
      <div className="header__search">
        <input type="text" placeholder="Search" onChange={handleChange} />
        <button>
          <RxMagnifyingGlass />
        </button>
      </div>
      <div className="icons">
        <CiUser />
        <BsFillCartFill onClick={() => global.setModalCart(true)} />
        <span>{global.cart.length}</span>
      </div>
    </header>
  );
};

export default Header;
