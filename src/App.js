import "./App.css";
import { GlobalStorage } from "./GlobalContext";
import Header from "./Components/Header/Header";
import Produto from "./Components/Produto/Produto";
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <GlobalStorage>
      <Header />
      <div className="container">
        <Produto />
        <Cart />
      </div>
    </GlobalStorage>
  );
}

export default App;
