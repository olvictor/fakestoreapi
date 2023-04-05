import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../GlobalContext";
import "./Filter.css";

const Filter = () => {
  const Apicategory = "https://fakestoreapi.com/products/categories";
  const API = "https://fakestoreapi.com/products/";
  const [categories, setCategories] = useState([]);

  const global = useContext(GlobalContext);

  useEffect(() => {
    fetch(Apicategory)
      .then((response) => response.json())
      .then((categorie) => setCategories(categorie));
  }, []);

  const categorieSubmit = async (category) => {
    if (category === null) {
      fetch(API)
        .then((reponse) => reponse.json())
        .then((item) => global.setProduto(item));
    } else {
      await fetch(API)
        .then((reponse) => reponse.json())
        .then((item) =>
          global.setProduto(item.filter((item) => item.category === category))
        );
    }
  };
  return (
    <div className="filter">
      <button onClick={() => categorieSubmit(null)}>All</button>
      {categories.map((categorie, index) => (
        <button onClick={() => categorieSubmit(categorie)} key={index}>
          {categorie}
        </button>
      ))}
    </div>
  );
};

export default Filter;
