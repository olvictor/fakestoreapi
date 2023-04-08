import React, { useContext, useEffect } from "react";
import "./header.css";
import { RxMagnifyingGlass } from "react-icons/rx";
import { CiUser } from "react-icons/ci";
import { BsFillCartFill } from "react-icons/bs";
import { GlobalContext } from "../../GlobalContext";

const Header = ({ displayItems, setDisplayItems }) => {
  const global = useContext(GlobalContext);
  const API = "https://fakestoreapi.com/products/";

  useEffect(() => {
    setDisplayItems(global.produto);
  }, [global.produto, setDisplayItems]);
  const handleChange = async ({ target }) => {
    await fetch(API)
      .then((response) => response.json())
      .then((produto) =>
        setDisplayItems(
          produto.filter((produto) =>
            produto.title.toLowerCase().includes(target.value.toLowerCase())
          )
        )
      );
  };
  return (
    <header>
      <h1>
        {" "}
        <a href="./">FAKE STOREAPI</a>
      </h1>
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
