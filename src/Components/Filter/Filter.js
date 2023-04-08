import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../GlobalContext";
import Produto from "../Produto/Produto";
import "./Filter.css";

const Filter = ({ displayItems, setDisplayItems }) => {
  const Apicategory = "https://fakestoreapi.com/products/categories";
  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState("all");
  const global = useContext(GlobalContext);

  useEffect(() => {
    fetch(Apicategory)
      .then((response) => response.json())
      .then((categorie) => setCategories(categorie));
  }, []);

  const categorieSubmit = (category) => {
    const filter = global.produto.filter(
      (produto) => produto.category === category
    );

    setActive(category);
    setDisplayItems(filter);
  };
  return (
    <div>
      <div className="filter">
        <button
          onClick={() => {
            setActive("all");
            setDisplayItems(global.produto);
          }}
          style={{ backgroundColor: active === "all" ? "orange" : null }}
        >
          All
        </button>
        {categories.map((categorie, index) => (
          <button
            onClick={() => categorieSubmit(categorie)}
            key={index}
            style={{ backgroundColor: active === categorie ? "orange" : null }}
          >
            {categorie}
          </button>
        ))}
      </div>
      <Produto displayItems={displayItems} />;
    </div>
  );
};

export default Filter;
