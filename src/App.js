import "./App.css";
import { GlobalStorage } from "./GlobalContext";
import Header from "./Components/Header/Header";
import Cart from "./Components/Cart/Cart";
import Filter from "./Components/Filter/Filter";
import { useState } from "react";

function App() {
  const [displayItems, setDisplayItems] = useState([]);

  return (
    <GlobalStorage>
      <Header displayItems={displayItems} setDisplayItems={setDisplayItems} />
      <div className="container">
        <Filter displayItems={displayItems} setDisplayItems={setDisplayItems} />
        <Cart />
      </div>
    </GlobalStorage>
  );
}

export default App;
