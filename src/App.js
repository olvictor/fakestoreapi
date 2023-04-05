import "./App.css";
import { GlobalStorage } from "./GlobalContext";
import Header from "./Components/Header/Header";
import Produto from "./Components/Produto/Produto";
import Cart from "./Components/Cart/Cart";
import Filter from "./Components/Filter/Filter";

function App() {
  return (
    <GlobalStorage>
      <Header />
      <div className="container">
        <Filter />
        <Produto />
        <Cart />
      </div>
    </GlobalStorage>
  );
}

export default App;
